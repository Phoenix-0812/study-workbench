/* AI智能分析模块 - 本地规则引擎，无需联网 */

/**
 * 根据做题记录生成AI总结分析
 * 基于规则引擎+知识点匹配，离线运行
 */
const AIAnalysis = {

  /**
   * 试卷完成后AI总结
   * @param {Object} paper - 试卷信息
   * @param {Array} results - 每题作答结果 [{q, userAns, correct}, ...]
   * @param {number} earnedScore - 得分
   * @param {number} totalScore - 总分
   * @param {number} timeUsed - 用时（秒）
   * @returns {Object} {summary, suggestions, weakPoints, strengthPoints}
   */
  analyzeExam(paper, results, earnedScore, totalScore, timeUsed) {
    const correctList = results.filter(r => r.correct);
    const wrongList = results.filter(r => !r.correct);
    const unanswered = results.filter(r => r.userAns === undefined || r.userAns === '');
    const scoreRate = earnedScore / totalScore;

    // 按题型统计
    const typeStats = {};
    results.forEach(r => {
      const t = r.q.type;
      if (!typeStats[t]) typeStats[t] = { total: 0, correct: 0, wrong: 0 };
      typeStats[t].total++;
      if (r.correct) typeStats[t].correct++;
      else typeStats[t].wrong++;
    });

    // 生成总结
    let summary = '';
    const userName = State.getUserName();

    if (scoreRate >= 0.9) {
      summary = `${userName}同学太棒了！🎉 这次${paper.subject}试卷得分率${Math.round(scoreRate * 100)}%，掌握了绝大部分知识点。`;
    } else if (scoreRate >= 0.75) {
      summary = `${userName}同学表现不错！👍 得分率${Math.round(scoreRate * 100)}%，基础掌握较好，还有提升空间。`;
    } else if (scoreRate >= 0.6) {
      summary = `${userName}同学继续加油！💪 得分率${Math.round(scoreRate * 100)}%，部分知识点需要加强复习。`;
    } else {
      summary = `${userName}同学不要灰心！📚 得分率${Math.round(scoreRate * 100)}%，建议重点复习薄弱环节。`;
    }

    // 时间分析
    if (timeUsed > 0) {
      const minutes = Math.floor(timeUsed / 60);
      if (minutes < (paper.timeLimit || 90) * 0.5 && scoreRate < 0.8) {
        summary += ` 用时${minutes}分钟偏短，建议认真审题后再作答。`;
      } else if (minutes > (paper.timeLimit || 90) * 0.9) {
        summary += ` 用时${minutes}分钟偏长，建议加强知识熟练度。`;
      }
    }

    // 未作答分析
    if (unanswered.length > 0) {
      summary += ` 有${unanswered.length}道题未作答，记得检查是否有遗漏。`;
    }

    // 薄弱点分析
    const weakPoints = [];
    const strengthPoints = [];

    Object.entries(typeStats).forEach(([type, stats]) => {
      const rate = stats.correct / stats.total;
      if (rate < 0.6) {
        weakPoints.push({
          type,
          correct: stats.correct,
          total: stats.total,
          rate: Math.round(rate * 100),
          suggestion: this.getTypeSuggestion(type, paper.subject)
        });
      } else if (rate === 1) {
        strengthPoints.push({ type, total: stats.total });
      }
    });

    // 具体错题知识点
    const wrongTopics = wrongList.map(r => {
      const q = r.q;
      let topic = q.text.substring(0, 30);
      if (topic.length < q.text.length) topic += '...';
      return {
        topic,
        type: q.type,
        correctAnswer: q.answer,
        userAnswer: r.userAns,
        explanation: q.explanation
      };
    });

    // 生成建议
    const suggestions = [];
    if (weakPoints.length === 0 && scoreRate >= 0.9) {
      suggestions.push('继续保持，可以尝试挑战更高难度的试卷！');
    }
    weakPoints.forEach(wp => {
      suggestions.push(wp.suggestion);
    });
    if (unanswered.length > 0) {
      suggestions.push('做题时注意时间分配，先易后难，确保每题都有作答。');
    }
    if (wrongList.length > 0) {
      suggestions.push(`本次有${wrongList.length}道错题已自动加入错题本，建议在48小时内复习巩固。`);
    }
    if (suggestions.length === 0) {
      suggestions.push('整体表现稳定，建议保持每日练习的好习惯！');
    }

    return {
      summary,
      suggestions: [...new Set(suggestions)],
      weakPoints,
      strengthPoints,
      wrongTopics,
      typeStats
    };
  },

  /**
   * 练习题完成后AI总结
   */
  analyzePractice(subject, grade, tab, results) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const wrong = total - correct;
    const rate = total > 0 ? correct / total : 0;
    const userName = State.getUserName();

    let summary = '';
    if (rate >= 0.9) {
      summary = `${userName}同学真厉害！${total}道题答对${correct}道，正确率${Math.round(rate * 100)}%，知识点掌握扎实！`;
    } else if (rate >= 0.7) {
      summary = `${userName}同学做得不错！${total}道题答对${correct}道，正确率${Math.round(rate * 100)}%，继续加油！`;
    } else if (rate >= 0.5) {
      summary = `${userName}同学还需努力！${total}道题答对${correct}道，正确率${Math.round(rate * 100)}%，多看解析理解知识点。`;
    } else {
      summary = `${userName}同学别灰心！${total}道题答对${correct}道，建议先复习课本再做题。`;
    }

    // 按题型分析
    const typeStats = {};
    results.forEach(r => {
      const t = r.q.type;
      if (!typeStats[t]) typeStats[t] = { total: 0, correct: 0 };
      typeStats[t].total++;
      if (r.correct) typeStats[t].correct++;
    });

    const weakTypes = Object.entries(typeStats)
      .filter(([_, s]) => s.correct / s.total < 0.6)
      .map(([type, s]) => ({ type, rate: Math.round(s.correct / s.total * 100) }));

    const suggestions = [];
    if (wrong > 0) {
      suggestions.push(`${wrong}道错题已加入错题本，建议做错题复习加深理解。`);
    }
    weakTypes.forEach(wt => {
      suggestions.push(`${wt.type}正确率仅${wt.rate}%，建议重点复习该题型。`);
    });
    if (rate >= 0.9) {
      suggestions.push('表现优异！可以尝试挑战更高难度的题目。');
    } else if (rate < 0.6) {
      suggestions.push('建议先回到课本复习对应单元知识点，再来做题。');
    }

    return { summary, suggestions, correct, wrong, rate, weakTypes };
  },

  /**
   * 错题本AI分析
   */
  analyzeWrongBook(wrongBook) {
    if (wrongBook.length === 0) {
      return {
        summary: '错题本为空，说明掌握得很好！继续保持每日练习的好习惯。',
        suggestions: ['继续保持每日练习，新错题及时加入错题本复习。'],
        stats: {}
      };
    }

    const userName = State.getUserName();

    // 按科目统计
    const subjectStats = {};
    wrongBook.forEach(q => {
      const s = q.subject || '未知';
      if (!subjectStats[s]) subjectStats[s] = { count: 0, types: {} };
      subjectStats[s].count++;
      const t = q.type || '其他';
      if (!subjectStats[s].types[t]) subjectStats[s].types[t] = 0;
      subjectStats[s].types[t]++;
    });

    // 按题型统计
    const typeStats = {};
    wrongBook.forEach(q => {
      const t = q.type || '其他';
      typeStats[t] = (typeStats[t] || 0) + 1;
    });

    // 找出最薄弱科目和题型
    const weakestSubject = Object.entries(subjectStats).sort((a, b) => b[1].count - a[1].count)[0];
    const weakestType = Object.entries(typeStats).sort((a, b) => b[1] - a[1])[0];

    let summary = `${userName}同学，你的错题本共有${wrongBook.length}道错题。`;
    if (weakestSubject) {
      summary += `其中${this.subjectName(weakestSubject[0])}错题最多（${weakestSubject[1].count}道），`;
    }
    if (weakestType) {
      summary += `${weakestType[0]}是主要薄弱题型（${weakestType[1]}道）。`;
    }

    const suggestions = [];
    if (weakestSubject) {
      suggestions.push(`建议重点复习${this.subjectName(weakestSubject[0])}，该科目错题较多。`);
      // 找该科目最薄弱题型
      const subTypes = weakestSubject[1].types;
      const subWeakType = Object.entries(subTypes).sort((a, b) => b[1] - a[1])[0];
      if (subWeakType) {
        suggestions.push(`${this.subjectName(weakestSubject[0])}的${subWeakType[0]}题型错误最多，建议针对性练习。`);
      }
    }
    if (wrongBook.length > 20) {
      suggestions.push('错题较多，建议每天复习5-10道，逐步消灭错题。');
    } else if (wrongBook.length > 10) {
      suggestions.push('建议本周内将现有错题全部复习一遍。');
    } else {
      suggestions.push('错题不多，建议今天就复习一遍加深印象。');
    }
    suggestions.push('每道错题都附有详细解析，务必理解错误原因，避免同类错误。');

    return {
      summary,
      suggestions,
      stats: { subjectStats, typeStats },
      weakestSubject: weakestSubject ? weakestSubject[0] : null,
      weakestType: weakestType ? weakestType[0] : null
    };
  },

  /**
   * 获取题型提升建议
   */
  getTypeSuggestion(type, subject) {
    const suggestions = {
      '选择题': '选择题要注意审题，排除干扰项，理解题干关键词。',
      '填空题': '填空题要准确记忆知识点，注意书写规范和单位。',
      '计算题': '计算题要列式规范，分步计算，养成检查习惯。',
      '应用题': '应用题要仔细读题，找出已知条件和问题关系，分步解答。',
      '阅读理解': '阅读理解要先通读全文，带着问题回原文找答案。',
      '作文': '作文要注意审题立意，结构完整，语言通顺，字数达标。',
      '作文素材': '多积累好词好句，注意审题立意和文章结构。',
      '词句练习': '加强词语积累和句子结构练习，多读多写。',
      '单词默写': '每天坚持背单词，注意拼写规律和发音记忆。',
      '翻译题': '翻译题要注意中英句式差异，逐词对照不遗漏。',
      '连词成句': '注意英文句式结构（主谓宾），首字母大写句末标点。',
      '改错题': '逐句检查语法和用词，注意时态、单复数、介词搭配。',
      '判断题': '判断题要逐字验证，注意"一定""可能"等关键词。',
      '古诗文填空': '古诗文要熟读成诵，注意易错字笔画。',
      '拼音题': '注意声母韵母区分，标调位置规则。',
      '修改病句': '掌握常见病句类型：成分残缺、搭配不当、语序不当、重复啰嗦。',
      '按要求写句子': '熟练掌握各种句式转换规则：把字句、被字句、反问句等。',
      '解方程': '等式两边同加减乘除，注意移项变号。',
      '简便运算': '熟练运用运算定律：交换律、结合律、分配律。',
      '图形题': '画图辅助理解，熟记周长面积公式。',
      '情景交际': '熟悉日常交际用语，注意中西方文化差异。',
      '解答题': '规范书写解题过程，步骤清晰，结论明确。',
      '写作': '注意格式规范，内容完整，语言流畅。'
    };
    return suggestions[type] || `建议多做${type}练习，总结解题方法。`;
  },

  subjectName(key) {
    const names = { chinese: '语文', math: '数学', english: '英语', 语文: '语文', 数学: '数学', 英语: '英语' };
    return names[key] || key;
  },

  /**
   * 渲染AI分析卡片HTML
   */
  renderAnalysisCard(analysis, type = 'exam') {
    const isWrongBook = type === 'wrongbook';
    let html = `
      <div class="ai-analysis-card glass-card" style="margin:16px 0;padding:20px;border-radius:var(--radius-lg);">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
          <span style="font-size:20px;">🤖</span>
          <span style="font-size:16px;font-weight:600;color:var(--text-primary);">AI智能分析</span>
        </div>
        <div style="background:var(--bg-secondary);border-radius:var(--radius-md);padding:14px;margin-bottom:14px;line-height:1.8;font-size:14px;color:var(--text-primary);">
          ${analysis.summary}
        </div>
    `;

    // 薄弱点
    if (analysis.weakPoints && analysis.weakPoints.length > 0) {
      html += `
        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:600;color:#e74c3c;margin-bottom:8px;">⚠️ 薄弱环节</div>
          ${analysis.weakPoints.map(wp => `
            <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:var(--text-secondary);">
              <span style="background:#ffd6d6;color:#6a2d2d;padding:2px 8px;border-radius:8px;font-size:12px;">${wp.type}</span>
              <span>正确率 ${wp.rate}%</span>
            </div>
            <div style="font-size:12px;color:var(--text-muted);padding:2px 0 6px 4px;">💡 ${wp.suggestion}</div>
          `).join('')}
        </div>
      `;
    }

    // 优势
    if (analysis.strengthPoints && analysis.strengthPoints.length > 0) {
      html += `
        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:600;color:#27ae60;margin-bottom:8px;">✨ 优势题型</div>
          ${analysis.strengthPoints.map(sp => `
            <span style="display:inline-block;background:var(--mint-light);color:#2d5a3d;padding:3px 10px;border-radius:8px;font-size:12px;margin:2px 4px 2px 0;">
              ${sp.type}（${sp.total}题全对）
            </span>
          `).join('')}
        </div>
      `;
    }

    // 错题本专项统计
    if (isWrongBook && analysis.stats && analysis.stats.subjectStats) {
      html += `
        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:8px;">📊 各科目错题分布</div>
          ${Object.entries(analysis.stats.subjectStats).map(([sub, s]) => `
            <div style="display:flex;align-items:center;gap:8px;padding:4px 0;font-size:13px;">
              <span style="min-width:50px;color:var(--text-secondary);">${this.subjectName(sub)}</span>
              <div style="flex:1;height:8px;background:var(--bg-secondary);border-radius:4px;overflow:hidden;">
                <div style="width:${(s.count / analysis.stats.subjectStats ? s.count : 1) * 100}%;height:100%;background:var(--accent);border-radius:4px;"></div>
              </div>
              <span style="min-width:30px;text-align:right;color:var(--text-muted);">${s.count}道</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 建议
    html += `
        <div>
          <div style="font-size:13px;font-weight:600;color:var(--accent-dark);margin-bottom:8px;">💡 学习建议</div>
          ${analysis.suggestions.map(s => `
            <div style="font-size:13px;color:var(--text-secondary);padding:4px 0;line-height:1.7;">
              <span style="color:var(--accent);">•</span> ${s}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return html;
  }
};
