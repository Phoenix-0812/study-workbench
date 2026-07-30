/* 电子课本 + 素材专题 模块：
 * 支持：课本三级导航（科目→年级→册别→单元）+ 素材专题（专题列表→文章列表→文章详情）
 * 🔄 刷新功能：每次刷新打乱推荐顺序
 * 2026-07-30 重构新增：collections 专题入口与可点进
 */
const Textbooks = {
  _currentSubject: 'chinese',
  _currentGrade: null,
  _currentVolume: null,
  _refreshSeed: 0, // 每次刷新+1，用来打乱推荐顺序

  render() {
    const subjects = [
      { key: 'chinese', name: '语文', icon: '📖' },
      { key: 'math', name: '数学', icon: '🔢' },
      { key: 'english', name: '英语', icon: '🔤' }
    ];

    const collections = (APP_DATA.textbooks && APP_DATA.textbooks.collections) || {};
    const colEntries = Object.entries(collections);

    // 用 seed 做伪随机，打乱推荐顺序（点刷新按钮改变 seed）
    const shuffleSeed = this._refreshSeed;
    const shuffledCols = colEntries.slice().sort((a,b) => {
      const ha = hash(`${a[0]}${shuffleSeed}`);
      const hb = hash(`${b[0]}${shuffleSeed}`);
      return ha - hb;
    });

    // 再随机挑 2-3 篇文章置顶作为"今日推荐"
    const articlesPool = [];
    for (const [k, c] of colEntries) {
      c.items.forEach((it, i) => articlesPool.push({ colKey:k, colTitle:c.title, title:it.title, desc:c.desc, idx:i }));
    }
    const todayPick = articlesPool.slice()
      .sort((a,b) => hash(`${a.colKey}${a.idx}${shuffleSeed}`) - hash(`${b.colKey}${b.idx}${shuffleSeed}`))
      .slice(0, 3);

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">📗 电子课本 & 素材库</div>
          <div class="page-subtitle">人教版教材 + 学习素材专题 · 支持上下册翻阅 · 可点进查看</div>
        </div>
        <button class="icon-btn" id="tbRefreshBtn" title="刷新推荐顺序" style="background:var(--primary-soft);color:var(--primary);padding:8px 14px;border-radius:12px;">🔄 刷新推荐</button>
      </div>

      <div class="subject-tabs">
        ${subjects.map(s => `
          <div class="subject-tab ${this._currentSubject === s.key ? 'active' : ''}" data-tbsubject="${s.key}">${s.icon} ${s.name}</div>
        `).join('')}
      </div>

      <div class="home-section-title" style="margin-top:16px;">📚 ${subjects.find(s=>s.key===this._currentSubject).icon} 课本库 · ${subjects.find(s=>s.key===this._currentSubject).name}</div>
      <div class="textbook-grid" id="textbookGrid"></div>

      <div class="home-section-title" style="margin-top:24px;">🎁 今日推荐 · 点刷新换一批</div>
      <div class="card-grid" id="todayPickGrid">
        ${todayPick.map(p => `
          <div class="card card-accent clickable" data-colkey="${p.colKey}" data-artidx="${p.idx}">
            <div class="card-title">🌟 ${p.title}</div>
            <div class="card-desc">来自「${p.colTitle}」 · 点击阅读</div>
          </div>
        `).join('')}
      </div>

      <div class="home-section-title" style="margin-top:24px;">🧰 素材专题 · 全部可点进</div>
      <div class="card-grid" id="collectionsGrid">
        ${shuffledCols.map(([k, c]) => `
          <div class="card card-accent clickable" data-colkey="${k}">
            <div class="card-title">${c.icon} ${c.title}</div>
            <div class="card-desc">${c.desc} · 共 ${c.items.length} 篇</div>
          </div>
        `).join('')}
      </div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      this.renderTextbookGrid(wrap);
      // 科目tab
      wrap.querySelectorAll('[data-tbsubject]').forEach(tab => {
        tab.addEventListener('click', () => {
          this._currentSubject = tab.dataset.tbsubject;
          this._currentGrade = null;
          this._currentVolume = null;
          UI.navigate('textbook');
        });
      });
      // 刷新按钮（大步长seed + 随机扰动，确保顺序有明显变化）
      const rBtn = wrap.querySelector('#tbRefreshBtn');
      if (rBtn) rBtn.addEventListener('click', () => {
        this._refreshSeed += 7 + (Math.floor(Math.random()*37)+1);
        UI.showToast('🔄 推荐已刷新！');
        UI.navigate('textbook');
      });
      // 专题入口
      wrap.querySelectorAll('#collectionsGrid [data-colkey]').forEach(card => {
        card.addEventListener('click', () => this.openCollection(card.dataset.colkey));
      });
      // 今日推荐入口：直达具体文章
      wrap.querySelectorAll('#todayPickGrid [data-colkey]').forEach(card => {
        card.addEventListener('click', () => {
          const ck = card.dataset.colkey;
          const idx = parseInt(card.dataset.artidx);
          this.openArticle(ck, idx);
        });
      });
    }, 0);

    return wrap;
  },

  // 判断某年级数据是否包含 volumes 结构（上/下册）
  hasVolumes(grade) {
    return grade && grade.volumes && typeof grade.volumes === 'object';
  },

  renderTextbookGrid(container) {
    const subject = this._currentSubject;
    const tbData = APP_DATA.textbooks[subject];
    const grid = container.querySelector('#textbookGrid');
    if (!tbData) {
      grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">暂无课本资源</div>';
      return;
    }

    const grades = Object.entries(tbData.grades);
    const coverClass = subject === 'chinese' ? 'chinese' : subject === 'math' ? 'math' : 'english';

    grid.innerHTML = grades.map(([key, g]) => {
      let totalUnits = 0;
      let volumeInfo = '';
      if (this.hasVolumes(g)) {
        const volKeys = Object.keys(g.volumes);
        totalUnits = volKeys.reduce((sum, vk) => sum + (g.volumes[vk].units ? g.volumes[vk].units.length : 0), 0);
        volumeInfo = volKeys.map(vk => g.volumes[vk].name || vk).join(' · ');
      } else {
        totalUnits = g.units ? g.units.length : 0;
        volumeInfo = totalUnits + ' 个单元';
      }
      return `
        <div class="textbook-card" data-grade="${key}">
          <div class="textbook-cover ${coverClass}">
            ${tbData.icon}
          </div>
          <div class="textbook-name">${tbData.name} · ${g.name}</div>
          <div class="textbook-grade">${volumeInfo} · 共${totalUnits}单元</div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.textbook-card').forEach(card => {
      card.addEventListener('click', () => {
        this.openTextbook(subject, card.dataset.grade);
      });
    });
  },

  openTextbook(subject, gradeKey) {
    const tbData = APP_DATA.textbooks[subject];
    const grade = tbData.grades[gradeKey];
    if (!grade) return;

    if (this.hasVolumes(grade)) {
      this.renderVolumeSelector(subject, gradeKey, grade);
    } else {
      this.openVolume(subject, gradeKey, null, grade);
    }
  },

  // 渲染上/下册选择界面
  renderVolumeSelector(subject, gradeKey, grade) {
    const tbData = APP_DATA.textbooks[subject];
    const volEntries = Object.entries(grade.volumes);
    const coverClass = subject === 'chinese' ? 'chinese' : subject === 'math' ? 'math' : 'english';

    const html = `
      <div class="reader-container">
        <div class="reader-nav">
          <button class="icon-btn" id="backToLibrary">← 返回</button>
          <div class="reader-title">${tbData.name} · ${grade.name}</div>
          <div></div>
        </div>
        <div style="padding:8px 0 4px;">
          <div class="home-section-title">📚 选择册别</div>
        </div>
        <div class="card-grid">
          ${volEntries.map(([vk, vol]) => `
            <div class="card card-accent clickable volume-card" data-volume="${vk}">
              <div class="card-title">${tbData.icon} ${grade.name}${vol.name || vk}</div>
              <div class="card-desc">共 ${vol.units ? vol.units.length : 0} 个单元，点击开始翻阅</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const container = document.getElementById('pageContainer');
    container.innerHTML = html;
    container.classList.add('page-enter');

    document.getElementById('backToLibrary').addEventListener('click', () => UI.navigate('textbook'));
    container.querySelectorAll('.volume-card').forEach(card => {
      card.addEventListener('click', () => {
        const vk = card.dataset.volume;
        this.openVolume(subject, gradeKey, vk, grade.volumes[vk]);
      });
    });
  },

  // 打开某一册（volume 为 null 表示旧结构直接使用 grade）
  openVolume(subject, gradeKey, volumeKey, volumeData) {
    const tbData = APP_DATA.textbooks[subject];
    const grade = tbData.grades[gradeKey];
    if (!volumeData || !volumeData.units || volumeData.units.length === 0) {
      UI.showToast('该册暂无内容');
      return;
    }

    let unitIdx = 0;
    const volumeLabel = volumeKey ? (grade.name + (volumeData.name || volumeKey)) : grade.name;

    const renderUnit = () => {
      const unit = volumeData.units[unitIdx];
      const html = `
        <div class="reader-container">
          <div class="reader-nav">
            <button class="icon-btn" id="backToLibrary">← 返回</button>
            <div class="reader-title">${volumeLabel} · ${unit.title}</div>
            <div style="display:flex;gap:8px;">
              <button class="icon-btn" id="prevUnit" ${unitIdx === 0 ? 'disabled' : ''}>◀</button>
              <button class="icon-btn" id="nextUnit" ${unitIdx === volumeData.units.length - 1 ? 'disabled' : ''}>▶</button>
            </div>
          </div>
          <div class="reader-content">${unit.content}</div>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid var(--border-soft);">
            <div class="home-section-title">📑 本册目录（第 ${unitIdx + 1} / ${volumeData.units.length} 单元）</div>
            <div class="unit-list">
              ${volumeData.units.map((u, i) => `
                <div class="unit-item ${i === unitIdx ? 'active' : ''}" data-uint="${i}">${u.title}</div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      const container = document.getElementById('pageContainer');
      container.innerHTML = html;
      container.classList.add('page-enter');

      State.addRecord({
        type: 'textbook_read',
        subject,
        textbook: `${subject}_grade${gradeKey}${volumeKey ? '_' + volumeKey : ''}`,
        unit: unit.title,
        date: State.getTodayKey(),
        timestamp: Date.now()
      });

      document.getElementById('backToLibrary').addEventListener('click', () => {
        if (volumeKey) {
          this.renderVolumeSelector(subject, gradeKey, grade);
        } else {
          UI.navigate('textbook');
        }
      });
      const prevBtn = document.getElementById('prevUnit');
      const nextBtn = document.getElementById('nextUnit');
      if (prevBtn) prevBtn.addEventListener('click', () => { if (unitIdx > 0) { unitIdx--; renderUnit(); }});
      if (nextBtn) nextBtn.addEventListener('click', () => { if (unitIdx < volumeData.units.length - 1) { unitIdx++; renderUnit(); }});

      container.querySelectorAll('.unit-item').forEach(item => {
        item.addEventListener('click', () => {
          unitIdx = parseInt(item.dataset.uint);
          renderUnit();
        });
      });
    };

    renderUnit();
  },

  // ================ 新增：专题+文章 三级导航 ================
  openCollection(colKey) {
    const collections = (APP_DATA.textbooks && APP_DATA.textbooks.collections) || {};
    const col = collections[colKey];
    if (!col) return;

    // 用 seed 打乱文章顺序（刷新会变）
    const seed = this._refreshSeed;
    const items = col.items.slice().sort((a,b) => {
      return hash(`${colKey}${a.title}${seed}`) - hash(`${colKey}${b.title}${seed}`);
    });

    const html = `
      <div class="reader-container">
        <div class="reader-nav">
          <button class="icon-btn" id="backToLibrary">← 返回素材库</button>
          <div class="reader-title">${col.icon} ${col.title}</div>
          <button class="icon-btn" id="colRefreshBtn" title="刷新顺序" style="background:var(--primary-soft);color:var(--primary);padding:6px 12px;border-radius:10px;">🔄 换序</button>
        </div>
        <div style="padding:8px 0 12px;color:var(--text-muted);">${col.desc} · 共 ${col.items.length} 篇，点击卡片阅读</div>
        <div class="card-grid">
          ${items.map((it, i) => `
            <div class="card card-accent clickable" data-artidx="${items.indexOf(col.items.find(x=>x.title===it.title))}">
              <div class="card-title">📄 ${it.title}</div>
              <div class="card-desc">共 ${Math.ceil(it.content.length/200)} 段内容，点击展开</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    const container = document.getElementById('pageContainer');
    container.innerHTML = html;
    container.classList.add('page-enter');

    document.getElementById('backToLibrary').addEventListener('click', () => UI.navigate('textbook'));
    document.getElementById('colRefreshBtn').addEventListener('click', () => {
      this._refreshSeed += 11 + (Math.floor(Math.random()*53)+1);
      this.openCollection(colKey);
    });
    container.querySelectorAll('[data-artidx]').forEach(card => {
      card.addEventListener('click', () => this.openArticle(colKey, parseInt(card.dataset.artidx)));
    });
  },

  openArticle(colKey, artIdx) {
    const collections = (APP_DATA.textbooks && APP_DATA.textbooks.collections) || {};
    const col = collections[colKey];
    if (!col) return;
    const items = col.items;
    if (artIdx<0 || artIdx>=items.length) { UI.showToast('内容不存在'); return; }

    const render = (i) => {
      const it = items[i];
      const html = `
        <div class="reader-container">
          <div class="reader-nav">
            <button class="icon-btn" id="backToCol">← 返回专题</button>
            <div class="reader-title">${col.icon} ${col.title} · 第${i+1}/${items.length}篇</div>
            <div style="display:flex;gap:8px;">
              <button class="icon-btn" id="prevArt" ${i===0?'disabled':''}>◀</button>
              <button class="icon-btn" id="nextArt" ${i===items.length-1?'disabled':''}>▶</button>
            </div>
          </div>
          <h2 style="margin:16px 0 8px;padding:12px 16px;background:var(--primary-soft);border-radius:12px;color:var(--primary);">${it.title}</h2>
          <div class="reader-content">${it.content}</div>
        </div>
      `;
      const container = document.getElementById('pageContainer');
      container.innerHTML = html;
      container.classList.add('page-enter');

      State.addRecord({
        type:'material_read',
        collection:colKey,
        title:it.title,
        date:State.getTodayKey(),
        timestamp:Date.now()
      });

      document.getElementById('backToCol').addEventListener('click', () => this.openCollection(colKey));
      const p=document.getElementById('prevArt'), n=document.getElementById('nextArt');
      if (p) p.addEventListener('click', ()=>{ if(i>0) render(i-1); });
      if (n) n.addEventListener('click', ()=>{ if(i<items.length-1) render(i+1); });
    };

    render(artIdx);
  }
};

// 简单稳定 hash 函数，用于可复现的伪随机打乱
function hash(str) {
  let h = 0;
  for (let i=0;i<str.length;i++) h = ((h<<5)-h) + str.charCodeAt(i), h |= 0;
  return Math.abs(h);
}
