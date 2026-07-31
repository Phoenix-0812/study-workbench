/* 真题试卷数据 - 人教版小学4-6年级 全套满分试卷
 * 每套试卷均为100分满分，包含完整题型
 * 结构：
 *   语文卷：基础知识20分 + 古诗文10分 + 阅读理解30分 + 句子改写10分 + 作文30分
 *   数学卷：填空题20分 + 选择题10分 + 判断题10分 + 计算题30分 + 应用题30分
 *   英语卷：听力选择(笔试)20分 + 词汇填空20分 + 单项选择20分 + 阅读理解20分 + 写作20分
 *   综合卷：语文40分 + 数学35分 + 英语25分
 */
const PAPERS_DATA = [
  /* ============================== 四年级语文 期中卷 ============================== */
  {
    id: 'p001',
    subject: '语文',
    grade: '四年级',
    type: '期中卷',
    region: '全国',
    title: '人教版四年级语文上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p001q1', type: '填空题', score: 2, text: '看拼音写词语：fēn fāng（  ）', answer: '芬芳', explanation: '"芬"和"芳"均为草字头，注意笔顺。' },
      { id: 'p001q2', type: '选择题', score: 2, text: '下列词语中没有错别字的是（  ）', options: ['A. 亭台楼阁', 'B. 天崖海角', 'C. 奋不顾生', 'D. 前仆后继'], answer: 0, explanation: 'B项"崖"应为"涯"，C项"生"应为"身"，D项正确但题干要求选"没有错别字"中只有A完全正确（B、C有错）。' },
      { id: 'p001q3', type: '填空题', score: 2, text: '"盛"在"茂盛"中读____，在"盛饭"中读____。', answer: 'shèng、chéng', explanation: '"盛"是多音字，"茂盛"读shèng，"盛饭"读chéng。' },
      { id: 'p001q4', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 屹立(yì) 霎时(shà)', 'B. 屹立(yì) 霎时(chà)', 'C. 屹立(qì) 霎时(shà)', 'D. 屹立(qì) 霎时(chà)'], answer: 0, explanation: '"屹"读yì，"霎"读shà。' },
      { id: 'p001q5', type: '填空题', score: 2, text: '比一比，再组词：潮（  ）  朝（  ）', answer: '潮水、朝阳', explanation: '"潮"与水有关，"朝"指早晨。' },
      { id: 'p001q6', type: '填空题', score: 2, text: '把成语补充完整：风（  ）浪静  （  ）天动地', answer: '平、惊', explanation: '风平浪静、惊天动地。' },
      { id: 'p001q7', type: '选择题', score: 2, text: '"那声音如同山崩地裂"使用的修辞手法是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 排比', 'D. 夸张'], answer: 0, explanation: '把潮声比作山崩地裂声，是比喻。' },
      { id: 'p001q8', type: '填空题', score: 2, text: '写出下列词语的反义词：安静—（  ）  仔细—（  ）', answer: '喧闹、马虎', explanation: '反义词要词性相同、意义相反。' },
      { id: 'p001q9', type: '选择题', score: 2, text: '"巨浪翻滚"中"巨"的意思是（  ）', options: ['A. 巨大', 'B. 巨人', 'C. 巨变', 'D. 巨星'], answer: 0, explanation: '此处"巨"形容大。' },
      { id: 'p001q10', type: '填空题', score: 2, text: '按课文内容填空：《观潮》一课按____、____、____的顺序描写了钱塘江大潮。', answer: '潮来前、潮来时、潮过后', explanation: '课文按时间顺序描写。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p001q11', type: '古诗文填空', score: 1, text: '横看成岭侧成峰，______________。', answer: '远近高低各不同', explanation: '苏轼《题西林壁》。' },
      { id: 'p001q12', type: '古诗文填空', score: 1, text: '不识庐山真面目，______________。', answer: '只缘身在此山中', explanation: '揭示"当局者迷"的道理。' },
      { id: 'p001q13', type: '古诗文填空', score: 1, text: '可怜九月初三夜，______________。', answer: '露似真珠月似弓', explanation: '白居易《暮江吟》。' },
      { id: 'p001q14', type: '古诗文填空', score: 1, text: '一道残阳铺水中，______________。', answer: '半江瑟瑟半江红', explanation: '"瑟瑟"形容江水颜色。' },
      { id: 'p001q15', type: '古诗文填空', score: 1, text: '梅雪争春未肯降，______________。', answer: '骚人阁笔费评章', explanation: '卢梅坡《雪梅》。' },
      { id: 'p001q16', type: '古诗文填空', score: 1, text: '梅须逊雪三分白，______________。', answer: '雪却输梅一段香', explanation: '各有所长，各有所短。' },
      { id: 'p001q17', type: '古诗文填空', score: 1, text: '《题西林壁》的作者是____代____。', answer: '宋、苏轼', explanation: '苏轼，号东坡居士。' },
      { id: 'p001q18', type: '古诗文填空', score: 1, text: '山重水复疑无路，______________。', answer: '柳暗花明又一村', explanation: '陆游《游山西村》。' },
      { id: 'p001q19', type: '古诗文填空', score: 1, text: '一番桃李花开尽，______________。', answer: '惟有青青草色齐', explanation: '曾巩《城南》。' },
      { id: 'p001q20', type: '古诗文填空', score: 1, text: '《暮江吟》中描写傍晚景色的诗句是：______________，______________。', answer: '一道残阳铺水中，半江瑟瑟半江红', explanation: '注意"残阳"二字。' },

      // 三、阅读理解（共30分）
      { id: 'p001q21', type: '阅读理解', score: 10, text: '阅读《爬山虎的脚》选段，回答问题：爬山虎的脚长在哪里？', passage: '爬山虎的脚长在茎上。茎上长叶柄的地方，反面伸出枝状的六七根细丝，每根细丝像蜗牛的触角。细丝跟新叶子一样，也是嫩红的。这就是爬山虎的脚。', answer: '爬山虎的脚长在茎上长叶柄的地方的反面，是枝状的六七根细丝。', explanation: '从原文提取信息：茎上长叶柄的地方，反面伸出细丝。' },
      { id: 'p001q22', type: '阅读理解', score: 10, text: '阅读《观潮》选段：那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来。问：选段中"水墙"和"白色战马"分别写出了大潮的什么特点？', passage: '那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来。', answer: '"水墙"写出了大潮浪头之高、来势之猛；"白色战马"写出了大潮浩浩荡荡、气势磅礴的样子。', explanation: '从比喻的本体和喻体的相似点分析。' },
      { id: 'p001q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题：为什么说爬山虎是"一脚一脚地往上爬"而不是"一步一步地往上爬"？', passage: '爬山虎的脚触着墙的时候，六七根细丝的头上就变成小圆片，巴住墙。细丝原先是直的，现在弯曲了，把爬山虎的嫩茎拉一把，使它紧贴在墙上。爬山虎就是这样一脚一脚地往上爬。', answer: '因为爬山虎是用"脚"（细丝）巴住墙，拉一把嫩茎，再长出新脚，所以用"一脚一脚"更准确、更形象地写出了它的爬行方式。', explanation: '体现作者观察细致，用词准确。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p001q24', type: '句子改写', score: 2, text: '改为"被"字句：潮水吞没了岸边的石头。', answer: '岸边的石头被潮水吞没了。', explanation: '把宾语移到主语位置，加"被"字。' },
      { id: 'p001q25', type: '句子改写', score: 2, text: '改为"把"字句：风吹动了树叶。', answer: '风把树叶吹动了。', explanation: '在主语后加"把"，再加宾语。' },
      { id: 'p001q26', type: '句子改写', score: 2, text: '改为反问句：这是一次难忘的经历。', answer: '难道这不是一次难忘的经历吗？', explanation: '反问句用"难道……不……吗"。' },
      { id: 'p001q27', type: '句子改写', score: 2, text: '缩句：那只活泼可爱的小鸟在树枝上快乐地唱歌。', answer: '小鸟唱歌。', explanation: '保留主语中心语、谓语中心语。' },
      { id: 'p001q28', type: '句子改写', score: 2, text: '修改病句：我估计他这道题一定做错了。', answer: '我估计他这道题做错了。（或：我断定他这道题做错了。）', explanation: '"估计"和"一定"前后矛盾，删去其一。' },

      // 五、作文（30分）
      { id: 'p001q29', type: '作文', score: 30, text: '以"我的周末"为题，写一篇不少于300字的作文。要求：内容具体，条理清楚，语句通顺。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '注意交代时间、人物、活动、感受，可用总分总结构。' }
    ]
  },

  /* ============================== 四年级数学 期末卷 ============================== */
  {
    id: 'p002',
    subject: '数学',
    grade: '四年级',
    type: '期末卷',
    region: '全国',
    title: '人教版四年级数学上册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p002q1', type: '填空题', score: 2, text: '由3个千万、5个百万、2个千和8个十组成的数是____，读作____。', answer: '35002080，三千五百万二千零八十', explanation: '数位顺序：千万、百万、十万、万、千、百、十、个。' },
      { id: 'p002q2', type: '填空题', score: 2, text: '一个数由8个亿、6个万和4个百组成，这个数写作____。', answer: '800060400', explanation: '8在亿位，6在万位，4在百位，其余为0。' },
      { id: 'p002q3', type: '填空题', score: 2, text: '在○里填">""<"或"="：8900000 ○ 890万', answer: '=', explanation: '890万=8900000，所以相等。' },
      { id: 'p002q4', type: '填空题', score: 2, text: '1周角=____平角=____直角。', answer: '2、4', explanation: '1周角=360°，1平角=180°，1直角=90°。' },
      { id: 'p002q5', type: '填空题', score: 2, text: '□÷35=18……□，余数最大是____，这时被除数是____。', answer: '34、664', explanation: '余数最大=除数-1=34；被除数=35×18+34=664。' },
      { id: 'p002q6', type: '填空题', score: 2, text: '一辆汽车3小时行驶240千米，这辆汽车的速度是____。', answer: '80千米/时', explanation: '速度=路程÷时间=240÷3=80。' },
      { id: 'p002q7', type: '填空题', score: 2, text: '在括号里填上合适的单位：教室的面积约60____；一枚邮票的面积约6____。', answer: '平方米、平方厘米', explanation: '教室面积用平方米，邮票面积用平方厘米。' },
      { id: 'p002q8', type: '填空题', score: 2, text: '两个因数的积是120，一个因数乘5，另一个因数不变，积是____。', answer: '600', explanation: '积的变化规律：一个因数不变，另一个因数乘几，积也乘几。' },
      { id: 'p002q9', type: '填空题', score: 2, text: '3时整，时针和分针所成的角是____度，是____角。', answer: '90、直', explanation: '3时整时针指向3，分针指向12，夹角90°。' },
      { id: 'p002q10', type: '填空题', score: 2, text: '一个梯形中，互相平行的一组对边叫梯形的____，不平行的一组对边叫梯形的____。', answer: '上底和下底、腰', explanation: '梯形的基本概念。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p002q11', type: '选择题', score: 2, text: '下面各数中，只读一个零的是（  ）', options: ['A. 30405000', 'B. 30045000', 'C. 34005000', 'D. 30400500'], answer: 0, explanation: 'A读作三千零四十万五千，只读一个零。' },
      { id: 'p002q12', type: '选择题', score: 2, text: '只有一组平行线的图形是（  ）', options: ['A. 长方形', 'B. 正方形', 'C. 梯形', 'D. 平行四边形'], answer: 2, explanation: '梯形只有一组对边平行。' },
      { id: 'p002q13', type: '选择题', score: 2, text: '下面说法正确的是（  ）', options: ['A. 一条直线长5厘米', 'B. 射线比直线短', 'C. 线段有两个端点', 'D. 角的两边越长角越大'], answer: 2, explanation: '直线和射线无限长不能度量；线段有两个端点；角的大小与边长无关。' },
      { id: 'p002q14', type: '选择题', score: 2, text: '125×80的积的末尾有（  ）个0。', options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], answer: 2, explanation: '125×80=10000，末尾有4个0。' },
      { id: 'p002q15', type: '选择题', score: 2, text: '估一估，298×41的积大约是（  ）', options: ['A. 8000', 'B. 12000', 'C. 10000', 'D. 15000'], answer: 1, explanation: '298≈300，41≈40，300×40=12000。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p002q16', type: '判断题', score: 2, text: '个位、十位、百位、千位……都是计数单位。（  ）', answer: '×', explanation: '个、十、百、千才是计数单位，个位、十位是数位。' },
      { id: 'p002q17', type: '判断题', score: 2, text: '不相交的两条直线叫做平行线。（  ）', answer: '×', explanation: '必须在同一平面内不相交的两条直线才叫平行线。' },
      { id: 'p002q18', type: '判断题', score: 2, text: '两个完全一样的三角形可以拼成一个平行四边形。（  ）', answer: '√', explanation: '两个完全一样的三角形可拼成平行四边形。' },
      { id: 'p002q19', type: '判断题', score: 2, text: '一个数除以48，商是12，余数是50，这个数是626。（  ）', answer: '×', explanation: '余数50大于除数48，错误，余数必须小于除数。' },
      { id: 'p002q20', type: '判断题', score: 2, text: '长方形是特殊的平行四边形。（  ）', answer: '√', explanation: '长方形满足平行四边形的特征，且四个角都是直角。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p002q21', type: '计算题', score: 6, text: '直接写得数：25×40=', answer: '1000', explanation: '25×4=100，再乘10得1000。' },
      { id: 'p002q22', type: '计算题', score: 6, text: '用竖式计算：356×24=', answer: '8544', explanation: '356×24=356×20+356×4=7120+1424=8544。' },
      { id: 'p002q23', type: '计算题', score: 6, text: '用竖式计算：828÷36=', answer: '23', explanation: '36×23=828，商为23。' },
      { id: 'p002q24', type: '计算题', score: 6, text: '简便计算：125×88', answer: '11000', explanation: '125×88=125×8×11=1000×11=11000。' },
      { id: 'p002q25', type: '计算题', score: 6, text: '简便计算：25×32×125', answer: '100000', explanation: '25×32×125=25×4×8×125=100×1000=100000。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p002q26', type: '应用题', score: 10, text: '学校买来一批图书，分给4个班，每班45本，还剩28本。这批图书一共有多少本？', answer: '4×45+28=208（本）', explanation: '分出4×45=180本，加剩余28本，共208本。' },
      { id: 'p002q27', type: '应用题', score: 10, text: '一辆汽车从甲地开往乙地，速度是80千米/时，用了5小时。返回时用了4小时，返回时的速度是多少？', answer: '80×5÷4=100（千米/时）', explanation: '甲乙距离=80×5=400千米，返回速度=400÷4=100。' },
      { id: 'p002q28', type: '应用题', score: 10, text: '一块长方形菜地，长25米，宽18米。如果每平方米收白菜8千克，这块菜地一共可以收白菜多少千克？', answer: '25×18×8=3600（千克）', explanation: '面积=25×18=450平方米，总产量=450×8=3600千克。' }
    ]
  },

  /* ============================== 四年级英语 期中卷 ============================== */
  {
    id: 'p003',
    subject: '英语',
    grade: '四年级',
    type: '期中卷',
    region: '全国',
    title: '人教版四年级英语上册期中测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试选择，每题2分，共20分）
      { id: 'p003q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：apple', options: ['A. book', 'B. banana', 'C. blue', 'D. good'], answer: 1, explanation: 'apple和banana都是水果。' },
      { id: 'p003q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：red', options: ['A. pen', 'B. cat', 'C. green', 'D. one'], answer: 2, explanation: 'red和green都是颜色。' },
      { id: 'p003q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：father', options: ['A. mother', 'B. dog', 'C. cake', 'D. school'], answer: 0, explanation: 'father和mother都是家庭成员。' },
      { id: 'p003q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：one', options: ['A. bag', 'B. three', 'C. nose', 'D. fine'], answer: 1, explanation: 'one和three都是数字。' },
      { id: 'p003q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：cat', options: ['A. book', 'B. red', 'C. dog', 'D. hello'], answer: 2, explanation: 'cat和dog都是动物。' },
      { id: 'p003q6', type: '听力选择', score: 2, text: '选出正确答语：What\'s your name?', options: ['A. I\'m fine.', 'B. My name is Tom.', 'C. Goodbye.', 'D. Thank you.'], answer: 1, explanation: '问姓名用"My name is..."回答。' },
      { id: 'p003q7', type: '听力选择', score: 2, text: '选出正确答语：How are you?', options: ['A. I\'m fine, thank you.', 'B. I\'m ten.', 'C. My name is Tom.', 'D. Goodbye.'], answer: 0, explanation: '"How are you?"用"I\'m fine, thank you."回答。' },
      { id: 'p003q8', type: '听力选择', score: 2, text: '选出正确答语：Nice to meet you.', options: ['A. Hello.', 'B. Nice to meet you, too.', 'C. Goodbye.', 'D. Thank you.'], answer: 1, explanation: '"Nice to meet you."的回答是"Nice to meet you, too."。' },
      { id: 'p003q9', type: '听力选择', score: 2, text: '选出正确答语：What color is it?', options: ['A. It\'s a book.', 'B. It\'s red.', 'C. I\'m fine.', 'D. Goodbye.'], answer: 1, explanation: '问颜色用"It\'s + 颜色"回答。' },
      { id: 'p003q10', type: '听力选择', score: 2, text: '选出正确答语：Can I have some water, please?', options: ['A. Here you are.', 'B. I\'m fine.', 'C. Goodbye.', 'D. Thank you.'], answer: 0, explanation: '"Can I have...?"用"Here you are."回答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p003q11', type: '词汇填空', score: 2, text: 'I ___ a student.（填be动词）', answer: 'am', explanation: 'I用am。' },
      { id: 'p003q12', type: '词汇填空', score: 2, text: 'She ___ a teacher.（填be动词）', answer: 'is', explanation: 'she用is。' },
      { id: 'p003q13', type: '词汇填空', score: 2, text: 'They ___ my friends.（填be动词）', answer: 'are', explanation: 'they用are。' },
      { id: 'p003q14', type: '词汇填空', score: 2, text: 'Tom ___ a book.（用have/has填空）', answer: 'has', explanation: 'Tom是第三人称单数，用has。' },
      { id: 'p003q15', type: '词汇填空', score: 2, text: 'We ___ apples.（用have/has填空）', answer: 'have', explanation: 'we用have。' },
      { id: 'p003q16', type: '词汇填空', score: 2, text: 'There ___ some milk in the glass.（填be动词）', answer: 'is', explanation: 'milk不可数名词，用is。' },
      { id: 'p003q17', type: '词汇填空', score: 2, text: '写出单词：苹果____  香蕉____', answer: 'apple、banana', explanation: '注意拼写：apple双p，banana三a。' },
      { id: 'p003q18', type: '词汇填空', score: 2, text: '写出单词：父亲____  母亲____', answer: 'father、mother', explanation: '注意拼写和th发音。' },
      { id: 'p003q19', type: '词汇填空', score: 2, text: '翻译：我喜欢猫。____', answer: 'I like cats.', explanation: '复数形式表类别。' },
      { id: 'p003q20', type: '词汇填空', score: 2, text: '翻译：这只猫很可爱。____', answer: 'The cat is cute.', explanation: '单数特指用the。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p003q21', type: '单项选择', score: 2, text: '—What\'s this? —____ a book.', options: ['A. It\'s', 'B. This', 'C. That', 'D. They'], answer: 0, explanation: '回答"What\'s this?"用"It\'s..."。' },
      { id: 'p003q22', type: '单项选择', score: 2, text: '—___ are you? —I\'m fine, thank you.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 2, explanation: '问"你好吗"用How。' },
      { id: 'p003q23', type: '单项选择', score: 2, text: '—___ is your name? —My name is Tom.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 0, explanation: '问姓名用What。' },
      { id: 'p003q24', type: '单项选择', score: 2, text: '—What color ___ the sky? —It\'s blue.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'sky单数用is。' },
      { id: 'p003q25', type: '单项选择', score: 2, text: 'Can you ___ English?', options: ['A. say', 'B. speak', 'C. talk', 'D. tell'], answer: 1, explanation: 'speak English是固定搭配。' },
      { id: 'p003q26', type: '单项选择', score: 2, text: 'The book is ___ the desk.', options: ['A. on', 'B. in', 'C. under', 'D. above'], answer: 0, explanation: '在书桌上用on（任选方位介词，答案以on为准）。' },
      { id: 'p003q27', type: '单项选择', score: 2, text: '—How old ___ you? —I\'m ten.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 2, explanation: 'you用are。' },
      { id: 'p003q28', type: '单项选择', score: 2, text: 'I ___ like dogs.', options: ['A. am not', 'B. don\'t', 'C. doesn\'t', 'D. isn\'t'], answer: 1, explanation: 'I用don\'t否定。' },
      { id: 'p003q29', type: '单项选择', score: 2, text: '—___ is the cat? —It\'s under the chair.', options: ['A. What', 'B. Who', 'C. Where', 'D. How'], answer: 2, explanation: '问地点用Where。' },
      { id: 'p003q30', type: '单项选择', score: 2, text: '—___ dogs do you have? —Two.', options: ['A. What', 'B. How many', 'C. How old', 'D. How'], answer: 1, explanation: '问数量用How many。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p003q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much. 问：How old is Tom?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'Ten (years old).', explanation: '从原文"I\'m ten years old."得知。' },
      { id: 'p003q32', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What\'s the dog\'s name?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'Bobby.', explanation: '从原文"Its name is Bobby."得知。' },
      { id: 'p003q33', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What color is the dog?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'White.', explanation: '从原文"Bobby is white and small."得知。' },
      { id: 'p003q34', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Is Bobby big or small?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'Small.', explanation: '从原文"Bobby is white and small."得知。' },
      { id: 'p003q35', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Does Tom like the dog?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'Yes, he does.', explanation: '从原文"I like it very much."得知。' },

      // 五、写作（20分）
      { id: 'p003q36', type: '写作', score: 20, text: '以"My Friend"为题，写一段不少于5句话的短文，介绍你的朋友（姓名、年龄、外貌、爱好等）。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：My friend is Lily. She is ten. She has long hair. She likes reading. We play together every day.' }
    ]
  },

  /* ============================== 五年级语文 期末卷 ============================== */
  {
    id: 'p004',
    subject: '语文',
    grade: '五年级',
    type: '期末卷',
    region: '北京',
    title: '人教版五年级语文上册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p004q1', type: '填空题', score: 2, text: '看拼音写词语：biàn bié（  ）  xī han（  ）', answer: '辨别、稀罕', explanation: '注意"辨"中间是一点和一撇，"稀罕"两字偏旁。' },
      { id: 'p004q2', type: '选择题', score: 2, text: '下列词语中没有错别字的一项是（  ）', options: ['A. 亭台楼阁 诗情画意', 'B. 天崖海角 井然有序', 'C. 奋不顾生 舍己救人', 'D. 前仆后继 锲而亦有'], answer: 0, explanation: 'B"崖"应为"涯"，C"生"应为"身"，D"亦有"应为"不舍"。' },
      { id: 'p004q3', type: '填空题', score: 2, text: '"落"在"落叶"中读____，在"丢三落四"中读____。', answer: 'luò、là', explanation: '"落"是多音字：luò（落叶）、là（丢三落四）、lào（落枕）。' },
      { id: 'p004q4', type: '选择题', score: 2, text: '"春风又绿江南岸"中"绿"的用法是（  ）', options: ['A. 名词作动词', 'B. 形容词作动词', 'C. 动词作形容词', 'D. 形容词作名词'], answer: 1, explanation: '"绿"原是形容词，这里用作动词"吹绿了"。' },
      { id: 'p004q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）然大悟  （  ）（  ）不绝', answer: '恍、络绎', explanation: '恍然大悟、络绎不绝。' },
      { id: 'p004q6', type: '填空题', score: 2, text: '写出下列词语的近义词：珍贵—（  ）  信任—（  ）', answer: '宝贵、信赖', explanation: '近义词要意义相近。' },
      { id: 'p004q7', type: '选择题', score: 2, text: '下列句子没有语病的是（  ）', options: ['A. 我估计他这道题大概做错了。', 'B. 书包里有语文书、数学书和学习用品。', 'C. 我们要养成爱护公物的好习惯。', 'D. 他穿着一件灰白色的帽子和一件蓝色的外套。'], answer: 2, explanation: 'A"估计"和"大概"重复；B"学习用品"包含前两者；D"帽子"不能穿。' },
      { id: 'p004q8', type: '填空题', score: 2, text: '《白鹭》的作者是____，他的代表作还有《______》。', answer: '郭沫若、女神（或屈原）', explanation: '郭沫若，现代文学家、诗人。' },
      { id: 'p004q9', type: '选择题', score: 2, text: '"信赖，往往创造出美好的境界"这句话出自（  ）', options: ['A. 《白鹭》', 'B. 《落花生》', 'C. 《珍珠鸟》', 'D. 《桂花雨》'], answer: 2, explanation: '冯骥才《珍珠鸟》的结尾句。' },
      { id: 'p004q10', type: '填空题', score: 2, text: '按课文内容填空：《落花生》一课借花生说明了"______、______"的道理。', answer: '要做有用的人、不要做只讲体面而对别人没有好处的人', explanation: '许地山借物喻人。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p004q11', type: '古诗文填空', score: 1, text: '死去元知万事空，______________。', answer: '但悲不见九州同', explanation: '陆游《示儿》。' },
      { id: 'p004q12', type: '古诗文填空', score: 1, text: '王师北定中原日，______________。', answer: '家祭无忘告乃翁', explanation: '表达诗人爱国之情。' },
      { id: 'p004q13', type: '古诗文填空', score: 1, text: '山外青山楼外楼，______________？', answer: '西湖歌舞几时休', explanation: '林升《题临安邸》。' },
      { id: 'p004q14', type: '古诗文填空', score: 1, text: '暖风熏得游人醉，______________。', answer: '直把杭州作汴州', explanation: '讽刺南宋统治者苟且偷安。' },
      { id: 'p004q15', type: '古诗文填空', score: 1, text: '九州生气恃风雷，______________。', answer: '万马齐喑究可哀', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p004q16', type: '古诗文填空', score: 1, text: '我劝天公重抖擞，______________。', answer: '不拘一格降人材', explanation: '表达渴望变革、广纳人才。' },
      { id: 'p004q17', type: '古诗文填空', score: 1, text: '《示儿》的作者是____代____。', answer: '宋、陆游', explanation: '陆游，号放翁。' },
      { id: 'p004q18', type: '古诗文填空', score: 1, text: '明月何时照我还的前一句是：______________。', answer: '春风又绿江南岸', explanation: '王安石《泊船瓜洲》。' },
      { id: 'p004q19', type: '古诗文填空', score: 1, text: '京口瓜洲一水间，______________。', answer: '钟山只隔数重山', explanation: '王安石《泊船瓜洲》。' },
      { id: 'p004q20', type: '古诗文填空', score: 1, text: '《少年中国说》的作者是______，其中名句"少年智则国智，__________"。', answer: '梁启超、少年富则国富', explanation: '1900年梁启超作。' },

      // 三、阅读理解（共30分）
      { id: 'p004q21', type: '阅读理解', score: 10, text: '阅读《慈母情深》选段，回答：母亲"掏衣兜，掏出一卷揉得皱皱的毛票"，这一动作描写表现了什么？', passage: '母亲掏衣兜，掏出一卷揉得皱皱的毛票，用龟裂的手指数着。母亲说："我挺高兴他爱看书的！"', answer: '表现了母亲挣钱不易，家境贫寒，但依然支持孩子读书的慈爱之心。', explanation: '从"皱皱的毛票""龟裂的手"等细节体会。' },
      { id: 'p004q22', type: '阅读理解', score: 10, text: '阅读《珍珠鸟》结尾句"信赖，往往创造出美好的境界"，谈谈你的理解。', passage: '我把它挂在窗前。那儿还有一盆异常茂盛的法国吊兰。起初，笼子里的小鸟不敢靠近我。三个月之后，它们发现我不去伤害它们，便开始一点点靠近。信赖，往往创造出美好的境界。', answer: '人与动物（人与人）之间只要彼此真诚相待，互相信任，就能建立美好的关系，创造和谐温馨的世界。', explanation: '从作者与珍珠鸟的相处中体会。' },
      { id: 'p004q23', type: '阅读理解', score: 10, text: '阅读《落花生》选段，回答：父亲借花生告诉孩子们什么道理？', passage: '父亲说："花生的好处很多，有一样最可贵。它的果实埋在地里，不像桃子、石榴、苹果那样，把鲜红嫩绿的果实高高地挂在枝上，使人一见就生爱慕之心。你们看它矮矮地长在地上，等到成熟了，也不能立刻分辨出来它有没有果实，必须挖起来才知道。"', answer: '父亲借花生告诉孩子们：要做有用的人，不要做只讲体面而对别人没有好处的人。', explanation: '借物喻人，揭示做人的道理。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p004q24', type: '句子改写', score: 2, text: '改为"被"字句：母亲把皱皱的毛票数了又数。', answer: '皱皱的毛票被母亲数了又数。', explanation: '把宾语提前，加"被"字。' },
      { id: 'p004q25', type: '句子改写', score: 2, text: '改为"把"字句：信赖创造了美好的境界。', answer: '信赖把美好的境界创造了。', explanation: '主语后加"把"，再加宾语和动词。' },
      { id: 'p004q26', type: '句子改写', score: 2, text: '改为反问句：这是多么伟大的母爱啊！', answer: '难道这不是伟大的母爱吗？', explanation: '感叹句改反问句加"难道……不……吗"。' },
      { id: 'p004q27', type: '句子改写', score: 2, text: '用关联词合并句子：母亲很疲惫。母亲坚持为我缝补衣服。', answer: '虽然母亲很疲惫，但是（她）坚持为我缝补衣服。', explanation: '用"虽然……但是……"表转折。' },
      { id: 'p004q28', type: '句子改写', score: 2, text: '修改病句：书包里有语文书、数学书和学习用品。', answer: '书包里有语文书、数学书等学习用品。', explanation: '"学习用品"包含前两者，应加"等"。' },

      // 五、作文（30分）
      { id: 'p004q29', type: '作文', score: 30, text: '以"那一刻，我长大了"为题，写一篇不少于400字的记叙文。要求：叙事具体，情感真实。', answer: '评分标准：叙事具体15分，情感真实10分，语言通顺5分。', explanation: '突出"长大"的瞬间感受，注意心理活动描写。' }
    ]
  },

  /* ============================== 五年级数学 期中卷 ============================== */
  {
    id: 'p005',
    subject: '数学',
    grade: '五年级',
    type: '期中卷',
    region: '上海',
    title: '人教版五年级数学上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p005q1', type: '填空题', score: 2, text: '3.6×0.25+0.75×3.6=____。', answer: '3.6', explanation: '运用乘法分配律：3.6×(0.25+0.75)=3.6×1=3.6。' },
      { id: 'p005q2', type: '填空题', score: 2, text: '一个三角形的底是8cm，高是5cm，它的面积是____，与它等底等高的平行四边形面积是____。', answer: '20cm²、40cm²', explanation: 'S△=8×5÷2=20cm²，S▱=20×2=40cm²。' },
      { id: 'p005q3', type: '填空题', score: 2, text: '在○里填">""<"或"="：3.14○3.14×0.99', answer: '>', explanation: '一个数乘小于1的数，积比原数小。' },
      { id: 'p005q4', type: '填空题', score: 2, text: '2.5时=____时____分。', answer: '2、30', explanation: '0.5时=30分。' },
      { id: 'p005q5', type: '填空题', score: 2, text: '一个数除以0.8，商是1.5，这个数是____。', answer: '1.2', explanation: '被除数=商×除数=1.5×0.8=1.2。' },
      { id: 'p005q6', type: '填空题', score: 2, text: 'x的3倍比5多2，列方程是____。', answer: '3x-5=2', explanation: 'x的3倍是3x，比5多2即3x-5=2。' },
      { id: 'p005q7', type: '填空题', score: 2, text: '小数0.323232……的循环节是____，用简便记法写作____。', answer: '32、0.32（32循环）', explanation: '循环节是循环部分"32"。' },
      { id: 'p005q8', type: '填空题', score: 2, text: '一个梯形的上底是5cm，下底是9cm，高是4cm，面积是____。', answer: '28cm²', explanation: 'S梯形=(5+9)×4÷2=28cm²。' },
      { id: 'p005q9', type: '填空题', score: 2, text: '盒子里有3个红球、5个白球（除颜色外完全相同），任意摸一个，摸到____球的可能性大。', answer: '白', explanation: '白球数量多，摸到的可能性大。' },
      { id: 'p005q10', type: '填空题', score: 2, text: '一个平行四边形的面积是36dm²，底是9dm，高是____。', answer: '4dm', explanation: '高=面积÷底=36÷9=4dm。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p005q11', type: '选择题', score: 2, text: '下列说法错误的是（  ）', options: ['A. 方程是等式', 'B. 等式是方程', 'C. 含未知数的等式是方程', 'D. 解方程是求解过程'], answer: 1, explanation: '等式不一定是方程，如3+2=5是等式但不是方程。' },
      { id: 'p005q12', type: '选择题', score: 2, text: '与3.56÷0.4结果相等的式子是（  ）', options: ['A. 35.6÷4', 'B. 356÷4', 'C. 0.356÷4', 'D. 3.56÷4'], answer: 0, explanation: '被除数和除数同时扩大10倍，商不变。' },
      { id: 'p005q13', type: '选择题', score: 2, text: '一个三角形面积是12cm²，底是6cm，高是（  ）', options: ['A. 2cm', 'B. 3cm', 'C. 4cm', 'D. 6cm'], answer: 2, explanation: '高=12×2÷6=4cm。' },
      { id: 'p005q14', type: '选择题', score: 2, text: '下面各数中，最大的是（  ）', options: ['A. 3.14', 'B. 3.1414...', 'C. 3.1444...', 'D. 3.1415'], answer: 2, explanation: '3.1444...>3.1415>3.1414...>3.14。' },
      { id: 'p005q15', type: '选择题', score: 2, text: 'x=5是方程（  ）的解。', options: ['A. 2x+3=10', 'B. 2x+3=13', 'C. 2x-3=10', 'D. 2x-3=13'], answer: 1, explanation: '2×5+3=13，所以x=5是2x+3=13的解。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p005q16', type: '判断题', score: 2, text: '小数乘小数，积一定比任何一个因数都小。（  ）', answer: '×', explanation: '如1.5×1.2=1.8>1.5，错。' },
      { id: 'p005q17', type: '判断题', score: 2, text: '一个数（0除外）除以小于1的数，商一定大于被除数。（  ）', answer: '√', explanation: '如3÷0.5=6>3。' },
      { id: 'p005q18', type: '判断题', score: 2, text: '平行四边形面积是三角形面积的2倍。（  ）', answer: '×', explanation: '必须等底等高时才成立。' },
      { id: 'p005q19', type: '判断题', score: 2, text: '5.66666是循环小数。（  ）', answer: '×', explanation: '5.66666是有限小数，必须无限循环才是循环小数。' },
      { id: 'p005q20', type: '判断题', score: 2, text: '方程的两边同时乘或除以同一个数，方程的解不变。（  ）', answer: '×', explanation: '除数不能为0，应为"同一个非0数"。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p005q21', type: '计算题', score: 6, text: '解方程：4x-12=36', answer: 'x=12', explanation: '4x=36+12=48，x=48÷4=12。' },
      { id: 'p005q22', type: '计算题', score: 6, text: '简便计算：1.25×3.2×2.5', answer: '10', explanation: '1.25×3.2×2.5=(1.25×8)×(0.4×2.5)=10×1=10。' },
      { id: 'p005q23', type: '计算题', score: 6, text: '用竖式计算：3.06×4.5（保留两位小数）', answer: '13.77', explanation: '3.06×4.5=13.77。' },
      { id: 'p005q24', type: '计算题', score: 6, text: '用竖式计算：7.2÷0.36', answer: '20', explanation: '7.2÷0.36=720÷36=20。' },
      { id: 'p005q25', type: '计算题', score: 6, text: '简便计算：3.6×99+3.6', answer: '360', explanation: '3.6×99+3.6=3.6×(99+1)=3.6×100=360。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p005q26', type: '应用题', score: 10, text: '甲乙两地相距480千米，客车和货车同时从两地相向而行，3小时后相遇。客车每小时行90千米，货车每小时行多少千米？（列方程解）', answer: '70千米', explanation: '设货车每小时行x千米，(90+x)×3=480，x=70。' },
      { id: 'p005q27', type: '应用题', score: 10, text: '一块三角形麦田，底是200米，高是150米。如果每公顷收小麦5吨，这块麦田一共可以收小麦多少吨？', answer: '7.5吨', explanation: '面积=200×150÷2=15000平方米=1.5公顷，产量=1.5×5=7.5吨。' },
      { id: 'p005q28', type: '应用题', score: 10, text: '妈妈买了3千克苹果和2千克香蕉，共付35.4元。每千克苹果6.8元，每千克香蕉多少元？（列方程解）', answer: '7.5元', explanation: '设香蕉每千克x元，3×6.8+2x=35.4，x=7.5。' }
    ]
  },

  /* ============================== 五年级英语 期末卷 ============================== */
  {
    id: 'p006',
    subject: '英语',
    grade: '五年级',
    type: '期末卷',
    region: '全国',
    title: '人教版五年级英语上册期末测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试，每题2分，共20分）
      { id: 'p006q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：spring', options: ['A. sunny', 'B. summer', 'C. warm', 'D. hot'], answer: 1, explanation: 'spring和summer都是季节。' },
      { id: 'p006q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：went', options: ['A. go', 'B. see', 'C. ate', 'D. eat'], answer: 2, explanation: 'went和ate都是过去式。' },
      { id: 'p006q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：Monday', options: ['A. January', 'B. spring', 'C. Friday', 'D. today'], answer: 2, explanation: 'Monday和Friday都是星期。' },
      { id: 'p006q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：taller', options: ['A. tall', 'B. shorter', 'C. taller', 'D. tallest'], answer: 1, explanation: '都是比较级（选项B正确）。' },
      { id: 'p006q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：running', options: ['A. run', 'B. jumped', 'C. swimming', 'D. eat'], answer: 2, explanation: 'running和swimming都是现在分词。' },
      { id: 'p006q6', type: '听力选择', score: 2, text: '选出正确答语：When do you get up?', options: ['A. I get up at 6:30.', 'B. I am fine.', 'C. My name is Tom.', 'D. Goodbye.'], answer: 0, explanation: '问时间用"I...at..."回答。' },
      { id: 'p006q7', type: '听力选择', score: 2, text: '选出正确答语：Which season do you like best?', options: ['A. I like red.', 'B. I like spring best.', 'C. I am fine.', 'D. Goodbye.'], answer: 1, explanation: '问"最喜欢哪个季节"用"I like...best."回答。' },
      { id: 'p006q8', type: '听力选择', score: 2, text: '选出正确答语：When is your birthday?', options: ['A. I am fine.', 'B. It\'s on May 1st.', 'C. I am ten.', 'D. Goodbye.'], answer: 1, explanation: '问生日日期用"It\'s on..."回答。' },
      { id: 'p006q9', type: '听力选择', score: 2, text: '选出正确答语：Whose book is it?', options: ['A. It\'s mine.', 'B. It\'s red.', 'C. I am fine.', 'D. Goodbye.'], answer: 0, explanation: '问"是谁的"用"It\'s mine/yours/his/hers."回答。' },
      { id: 'p006q10', type: '听力选择', score: 2, text: '选出正确答语：What are you doing?', options: ['A. I am reading.', 'B. I am fine.', 'C. I am ten.', 'D. Goodbye.'], answer: 0, explanation: '问"在做什么"用现在进行时回答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p006q11', type: '词汇填空', score: 2, text: '写出过去式：go____  do____  eat____', answer: 'went、did、ate', explanation: '不规则动词过去式。' },
      { id: 'p006q12', type: '词汇填空', score: 2, text: '写出过去式：have____  see____  take____', answer: 'had、saw、took', explanation: '不规则动词过去式。' },
      { id: 'p006q13', type: '词汇填空', score: 2, text: 'She ___ (go) to school by bike every day.', answer: 'goes', explanation: 'every day一般现在时，she用三单。' },
      { id: 'p006q14', type: '词汇填空', score: 2, text: 'Look! The children ___ (play) in the park.', answer: 'are playing', explanation: 'Look!提示用现在进行时。' },
      { id: 'p006q15', type: '词汇填空', score: 2, text: 'Tom is ___ (tall) than Mike.', answer: 'taller', explanation: 'than提示用比较级。' },
      { id: 'p006q16', type: '词汇填空', score: 2, text: 'Jim is the ___ (tall) of the three.', answer: 'tallest', explanation: '"of the three"提示用最高级。' },
      { id: 'p006q17', type: '词汇填空', score: 2, text: 'I ___ (go) to the park yesterday.', answer: 'went', explanation: 'yesterday用一般过去时。' },
      { id: 'p006q18', type: '词汇填空', score: 2, text: '写出季节词：春____  夏____  秋____  冬____', answer: 'spring、summer、autumn、winter', explanation: '四季的英文。' },
      { id: 'p006q19', type: '词汇填空', score: 2, text: '翻译：昨天我去了公园。____', answer: 'I went to the park yesterday.', explanation: '用一般过去时。' },
      { id: 'p006q20', type: '词汇填空', score: 2, text: '翻译：春天温暖，夏天炎热。____', answer: 'Spring is warm and summer is hot.', explanation: '描述季节天气。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p006q21', type: '单项选择', score: 2, text: 'She ___ to school by bike every day.', options: ['A. go', 'B. goes', 'C. going', 'D. went'], answer: 1, explanation: 'every day一般现在时，she用goes。' },
      { id: 'p006q22', type: '单项选择', score: 2, text: '—___ is the book? —It\'s red.', options: ['A. What', 'B. What color', 'C. Where', 'D. When'], answer: 1, explanation: '问颜色用What color。' },
      { id: 'p006q23', type: '单项选择', score: 2, text: 'If it ___ tomorrow, we ___ at home.', options: ['A. rain, stay', 'B. rains, will stay', 'C. will rain, stay', 'D. rains, stay'], answer: 1, explanation: '主将从现，主句用将来时，从句用现在时。' },
      { id: 'p006q24', type: '单项选择', score: 2, text: 'This book is ___ interesting than that one.', options: ['A. more', 'B. most', 'C. much', 'D. very'], answer: 0, explanation: '多音节词比较级用more。' },
      { id: 'p006q25', type: '单项选择', score: 2, text: 'I ___ to the park yesterday.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 2, explanation: 'yesterday用一般过去时。' },
      { id: 'p006q26', type: '单项选择', score: 2, text: '—___ did you do last weekend? —I cleaned my room.', options: ['A. What', 'B. Where', 'C. When', 'D. How'], answer: 0, explanation: '问"做了什么"用What。' },
      { id: 'p006q27', type: '单项选择', score: 2, text: 'Tom is ___ than Mike.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. the tallest'], answer: 1, explanation: 'than提示用比较级。' },
      { id: 'p006q28', type: '单项选择', score: 2, text: '—Whose pen is this? —It\'s ___.', options: ['A. my', 'B. mine', 'C. I', 'D. me'], answer: 1, explanation: '名词性物主代词mine=my pen。' },
      { id: 'p006q29', type: '单项选择', score: 2, text: '—___ students are there in your class? —Forty.', options: ['A. What', 'B. How many', 'C. How old', 'D. How'], answer: 1, explanation: '问数量用How many。' },
      { id: 'p006q30', type: '单项选择', score: 2, text: 'Look! The bird ___ in the sky.', options: ['A. fly', 'B. flies', 'C. is flying', 'D. flew'], answer: 2, explanation: 'Look!提示用现在进行时。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p006q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman. 问：How old is Lily?', passage: 'My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman.', answer: 'Eleven.', explanation: '从原文"I am eleven."得知。' },
      { id: 'p006q32', type: '阅读理解', score: 4, text: '阅读上面短文，回答：Which season does Lily like best?', passage: 'My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman.', answer: 'Spring.', explanation: '从原文"I like spring best"得知。' },
      { id: 'p006q33', type: '阅读理解', score: 4, text: '阅读上面短文，回答：Why does Lily like spring?', passage: 'My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman.', answer: 'Because she can fly kites.', explanation: '从原文"because I can fly kites"得知。' },
      { id: 'p006q34', type: '阅读理解', score: 4, text: '阅读上面短文，回答：Which season does Tom like?', passage: 'My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman.', answer: 'Winter.', explanation: '从原文"Tom likes winter"得知。' },
      { id: 'p006q35', type: '阅读理解', score: 4, text: '阅读上面短文，回答：Why does Tom like winter?', passage: 'My name is Lily. I am eleven. I like spring best because I can fly kites. My friend Tom likes winter because he can make a snowman.', answer: 'Because he can make a snowman.', explanation: '从原文"because he can make a snowman"得知。' },

      // 五、写作（20分）
      { id: 'p006q36', type: '写作', score: 20, text: '以"My Favourite Season"为题，写一段不少于6句话的短文，介绍你最喜欢的季节及原因。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考句型：I like...best. Because I can... The weather is... I often...' }
    ]
  },

  /* ============================== 六年级语文 模拟卷 ============================== */
  {
    id: 'p007',
    subject: '语文',
    grade: '六年级',
    type: '模拟卷',
    region: '广东',
    title: '人教版六年级语文下册小升初模拟试卷',
    totalScore: 100,
    timeLimit: 100,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p007q1', type: '填空题', score: 2, text: '看拼音写词语：pái huái（  ）  líng lì（  ）', answer: '徘徊、伶俐', explanation: '"徘徊"注意双人旁，"伶俐"注意单人旁。' },
      { id: 'p007q2', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 剥削(xuē) 处(chǔ)理', 'B. 剥削(xiāo) 处(chù)理', 'C. 剥削(xuē) 处(chù)理', 'D. 剥削(xiāo) 处(chǔ)理'], answer: 0, explanation: '"剥削"读xuē，"处理"读chǔ。' },
      { id: 'p007q3', type: '填空题', score: 2, text: '"重"在"重要"中读____，在"重新"中读____。', answer: 'zhòng、chóng', explanation: '"重"是多音字。' },
      { id: 'p007q4', type: '选择题', score: 2, text: '下列说法正确的是（  ）', options: ['A. 《匆匆》—朱自清—现代', 'B. 《鲁滨逊》—笛福—法国', 'C. 《卖火柴》—安徒生—德国', 'D. 《凡卡》—契诃夫—法国'], answer: 0, explanation: '朱自清是中国现代作家。' },
      { id: 'p007q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）（  ）不及  司空见（  ）', answer: '猝、防、惯', explanation: '猝不及防、司空见惯。' },
      { id: 'p007q6', type: '填空题', score: 2, text: '写出下列词语的近义词：严肃—（  ）  优秀—（  ）', answer: '庄重、优异', explanation: '近义词要词性相同、意义相近。' },
      { id: 'p007q7', type: '选择题', score: 2, text: '"重于泰山"中"重"的意思是（  ）', options: ['A. 重量大', 'B. 重要', 'C. 价值大', 'D. 严重'], answer: 2, explanation: '司马迁"人固有一死，或重于泰山，或轻于鸿毛"，"重"指价值大、意义大。' },
      { id: 'p007q8', type: '填空题', score: 2, text: '《北京的春节》作者是____，按____顺序描写了北京春节的习俗。', answer: '老舍、时间', explanation: '老舍的散文，按时间顺序。' },
      { id: 'p007q9', type: '选择题', score: 2, text: '下面修辞方法不同的一项是（  ）', options: ['A. 飞流直下三千尺', 'B. 白发三千丈', 'C. 桃花潭水深千尺', 'D. 粒粒皆辛苦'], answer: 3, explanation: '前三者都用了夸张，D是陈述。' },
      { id: 'p007q10', type: '填空题', score: 2, text: '《少年中国说》作者是______，文中名句"少年智则国智，______________"。', answer: '梁启超、少年富则国富', explanation: '1900年梁启超所作。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p007q11', type: '古诗文填空', score: 1, text: '少壮不努力，______________。', answer: '老大徒伤悲', explanation: '《长歌行》。' },
      { id: 'p007q12', type: '古诗文填空', score: 1, text: '随风潜入夜，______________。', answer: '润物细无声', explanation: '杜甫《春夜喜雨》。' },
      { id: 'p007q13', type: '古诗文填空', score: 1, text: '海内存知己，______________。', answer: '天涯若比邻', explanation: '王勃《送杜少府之任蜀州》。' },
      { id: 'p007q14', type: '古诗文填空', score: 1, text: '落红不是无情物，______________。', answer: '化作春泥更护花', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p007q15', type: '古诗文填空', score: 1, text: '不要人夸好颜色，______________。', answer: '只留清气满乾坤', explanation: '王冕《墨梅》。' },
      { id: 'p007q16', type: '古诗文填空', score: 1, text: '千锤万凿出深山，______________。', answer: '烈火焚烧若等闲', explanation: '于谦《石灰吟》。' },
      { id: 'p007q17', type: '古诗文填空', score: 1, text: '粉骨碎身浑不怕，______________。', answer: '要留清白在人间', explanation: '于谦《石灰吟》，托物言志。' },
      { id: 'p007q18', type: '古诗文填空', score: 1, text: '《七律·长征》作者是____，其中"红军不怕远征难，______________"。', answer: '毛泽东、万水千山只等闲', explanation: '1935年毛泽东作。' },
      { id: 'p007q19', type: '古诗文填空', score: 1, text: '劝君更尽一杯酒，______________。', answer: '西出阳关无故人', explanation: '王维《送元二使安西》。' },
      { id: 'p007q20', type: '古诗文填空', score: 1, text: '但使龙城飞将在，______________。', answer: '不教胡马度阴山', explanation: '王昌龄《出塞》。' },

      // 三、阅读理解（共30分）
      { id: 'p007q21', type: '阅读理解', score: 10, text: '阅读《匆匆》选段，回答：作者用"针尖上一滴水滴在大海里"比喻什么？表达了怎样的感情？', passage: '在默默里算着，八千多日子已经从我手中溜去；像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。', answer: '把"我的日子"比作"针尖上一滴水"，把"时间的流"比作"大海"，表达了作者对时光飞逝、个人渺小的感慨和惋惜之情。', explanation: '从比喻的本体和喻体入手，体会作者情感。' },
      { id: 'p007q22', type: '阅读理解', score: 10, text: '阅读《为人民服务》选段，回答："人固有一死，或重于泰山，或轻于鸿毛"是什么意思？引用这句话的作用是什么？', passage: '人总是要死的，但死的意义有不同。中国古时候有个文学家叫做司马迁的说过："人固有一死，或重于泰山，或轻于鸿毛。"', answer: '意思：人总是要死的，有的人死得有价值（比泰山还重），有的人死得毫无意义（比鸿毛还轻）。作用：强调为人民利益而死就比泰山还重，揭示生死的价值观。', explanation: '理解引用的作用。' },
      { id: 'p007q23', type: '阅读理解', score: 10, text: '阅读《两小儿辩日》，回答：两小儿分别从什么角度争论太阳的远近？孔子为什么"不能决也"？', passage: '一儿曰："日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？"一儿曰："日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？"孔子不能决也。', answer: '一小儿从"视觉（大小）"角度：远者小近者大，认为早晨近；一小儿从"触觉（温度）"角度：近者热远者凉，认为中午近。孔子"不能决"是因为当时科学不发达，无法解释这一现象，体现了孔子"知之为知之，不知为不知"的实事求是态度。', explanation: '从两个角度分析，并理解孔子的态度。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p007q24', type: '句子改写', score: 2, text: '改为"被"字句：时间把日子悄悄带走了。', answer: '日子被时间悄悄带走了。', explanation: '把宾语提前，加"被"字。' },
      { id: 'p007q25', type: '句子改写', score: 2, text: '改为反问句：我们应当珍惜时间。', answer: '我们难道不应当珍惜时间吗？', explanation: '陈述句改反问句加"难道……不……吗"。' },
      { id: 'p007q26', type: '句子改写', score: 2, text: '用比喻修辞改写：时间过得真快。', answer: '时间像流水一样匆匆流逝。', explanation: '把时间比作流水。' },
      { id: 'p007q27', type: '句子改写', score: 2, text: '缩句：可爱的孩子们在美丽的公园里快乐地做游戏。', answer: '孩子们做游戏。', explanation: '保留主语、谓语中心语。' },
      { id: 'p007q28', type: '句子改写', score: 2, text: '修改病句：经过努力，他的作文水平大大增加了。', answer: '经过努力，他的作文水平大大提高了。', explanation: '"水平"和"增加"搭配不当，应改为"提高"。' },

      // 五、作文（30分）
      { id: 'p007q29', type: '作文', score: 30, text: '以"难忘的第一次"为题，写一篇不少于500字的记叙文。要求：叙事完整，情感真实，注意细节描写。', answer: '评分标准：叙事具体15分，细节生动10分，语言通顺5分。', explanation: '突出"第一次"的特殊感受，可用六要素+细节+情感。' }
    ]
  },

  /* ============================== 六年级数学 招生卷 ============================== */
  {
    id: 'p008',
    subject: '数学',
    grade: '六年级',
    type: '招生卷',
    region: '江苏',
    title: '重点中学六年级数学招生考试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p008q1', type: '填空题', score: 2, text: '12.5×0.8+2.5×3.2+7.5×0.8=____。', answer: '24', explanation: '原式=0.8×(12.5+7.5)+2.5×3.2=16+8=24。' },
      { id: 'p008q2', type: '填空题', score: 2, text: '一个圆柱的底面半径是5cm，高是10cm，它的侧面积是____，体积是____。', answer: '314cm²、785cm³', explanation: '侧面积=2×3.14×5×10=314，体积=3.14×25×10=785。' },
      { id: 'p008q3', type: '填空题', score: 2, text: '把一个圆柱削成最大的圆锥，削去部分的体积是圆锥体积的____倍。', answer: '2', explanation: 'V柱=3V锥，削去=2V锥，是圆锥的2倍。' },
      { id: 'p008q4', type: '填空题', score: 2, text: '一幅地图的比例尺是1:500000，图上4cm表示实际距离____km。', answer: '20', explanation: '4×500000=2000000cm=20km。' },
      { id: 'p008q5', type: '填空题', score: 2, text: '一件商品打八折后售价160元，原价是____元。', answer: '200', explanation: '原价=160÷0.8=200元。' },
      { id: 'p008q6', type: '填空题', score: 2, text: '甲数是乙数的5/6，乙数与甲数的比是____。', answer: '6:5', explanation: '乙:甲=1:5/6=6:5。' },
      { id: 'p008q7', type: '填空题', score: 2, text: '一个圆锥的体积是47.1cm³，底面直径是6cm，它的高是____。', answer: '5cm', explanation: '底面积=3.14×(6÷2)²=28.26cm²，高=47.1×3÷28.26=5cm。' },
      { id: 'p008q8', type: '填空题', score: 2, text: 'a=2×3×5，b=2×3×7，a和b的最大公因数是____，最小公倍数是____。', answer: '6、210', explanation: '最大公因数=2×3=6，最小公倍数=2×3×5×7=210。' },
      { id: 'p008q9', type: '填空题', score: 2, text: '一个数的25%是15，这个数是____。', answer: '60', explanation: '15÷25%=60。' },
      { id: 'p008q10', type: '填空题', score: 2, text: '在一幅比例尺是1:1000的图纸上，一个长方形操场的长是5cm，宽是3cm，操场实际面积是____m²。', answer: '1500', explanation: '实际长=5×1000=5000cm=50m，宽=30m，面积=50×30=1500m²。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p008q11', type: '选择题', score: 2, text: '下列说法正确的是（  ）', options: ['A. 比的前项后项同乘一个数，比值不变', 'B. 比例的外项之积等于内项之积', 'C. 圆的周长与直径的比值是3.14', 'D. 比例尺1:100表示图上1cm代表实际100米'], answer: 1, explanation: 'A应为"同乘一个非0数"；B是比例的基本性质；C比值是π不是3.14；D 1:100表示1cm代表100cm=1m。' },
      { id: 'p008q12', type: '选择题', score: 2, text: '一件商品先涨价10%，再降价10%，现价与原价相比（  ）', options: ['A. 相等', 'B. 现价高', 'C. 原价高', 'D. 无法比较'], answer: 2, explanation: '1×1.1×0.9=0.99<1，原价高。' },
      { id: 'p008q13', type: '选择题', score: 2, text: '圆柱的体积一定，底面积和高（  ）', options: ['A. 成正比例', 'B. 成反比例', 'C. 不成比例', 'D. 无法确定'], answer: 1, explanation: '底面积×高=体积（一定），成反比例。' },
      { id: 'p008q14', type: '选择题', score: 2, text: '一个圆柱和一个圆锥等底等高，体积相差24cm³，圆柱体积是（  ）cm³。', options: ['A. 12', 'B. 24', 'C. 36', 'D. 48'], answer: 2, explanation: 'V柱-V锥=2/3V柱=24，V柱=36。' },
      { id: 'p008q15', type: '选择题', score: 2, text: '把10克盐溶于90克水中，盐与盐水的比是（  ）', options: ['A. 1:9', 'B. 1:10', 'C. 9:1', 'D. 10:1'], answer: 1, explanation: '盐:盐水=10:(10+90)=1:10。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p008q16', type: '判断题', score: 2, text: '圆的周长和直径成正比例。（  ）', answer: '√', explanation: 'C÷d=π（一定），成正比例。' },
      { id: 'p008q17', type: '判断题', score: 2, text: '所有自然数都有倒数。（  ）', answer: '×', explanation: '0没有倒数。' },
      { id: 'p008q18', type: '判断题', score: 2, text: '一个数除以分数，商一定大于被除数。（  ）', answer: '×', explanation: '如果除以大于1的假分数，商小于被除数。' },
      { id: 'p008q19', type: '判断题', score: 2, text: '圆柱的体积是圆锥体积的3倍。（  ）', answer: '×', explanation: '必须等底等高时才成立。' },
      { id: 'p008q20', type: '判断题', score: 2, text: '0.5和2互为倒数。（  ）', answer: '√', explanation: '0.5×2=1，互为倒数。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p008q21', type: '计算题', score: 6, text: '解方程：3x+1.5=2x+4.5', answer: 'x=3', explanation: '3x-2x=4.5-1.5，x=3。' },
      { id: 'p008q22', type: '计算题', score: 6, text: '解比例：x:3=4:6', answer: 'x=2', explanation: '6x=3×4=12，x=2。' },
      { id: 'p008q23', type: '计算题', score: 6, text: '简便计算：3.6×99+3.6', answer: '360', explanation: '3.6×(99+1)=360。' },
      { id: 'p008q24', type: '计算题', score: 6, text: '分数计算：(5/6-3/4)÷(2/3+1/6)', answer: '1/5', explanation: '(10/12-9/12)÷(4/6+1/6)=1/12÷5/6=1/12×6/5=1/5。' },
      { id: 'p008q25', type: '计算题', score: 6, text: '计算圆柱的表面积：底面半径3cm，高5cm（π取3.14）', answer: '150.72cm²', explanation: 'S=2πr²+2πrh=2×3.14×9+2×3.14×3×5=56.52+94.2=150.72。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p008q26', type: '应用题', score: 10, text: '一项工程，甲单独做需要12天完成，乙单独做需要18天完成。两队合作几天可以完成？', answer: '7.2天', explanation: '1÷(1/12+1/18)=1÷5/36=36/5=7.2天。' },
      { id: 'p008q27', type: '应用题', score: 10, text: '一件商品按20%的利润定价，然后打八折出售，结果亏损64元。这件商品的成本是多少元？', answer: '1600元', explanation: '设成本x元，定价1.2x，售价1.2x×0.8=0.96x，0.96x=x-64，x=1600。' },
      { id: 'p008q28', type: '应用题', score: 10, text: '甲骑自行车每小时行15千米，乙步行每小时行5千米。两人同时从同一地点出发，沿同一方向前进，2小时后两人相距多少千米？', answer: '20千米', explanation: '(15-5)×2=20千米。' }
    ]
  },

  /* ============================== 六年级英语 毕业卷 ============================== */
  {
    id: 'p009',
    subject: '英语',
    grade: '六年级',
    type: '毕业卷',
    region: '全国',
    title: '人教版六年级英语下册毕业考试卷',
    totalScore: 100,
    timeLimit: 70,
    questions: [
      // 一、听力选择（改为笔试，每题2分，共20分）
      { id: 'p009q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：environment', options: ['A. protect', 'B. pollution', 'C. recycle', 'D. clean'], answer: 1, explanation: 'environment和pollution都是名词。' },
      { id: 'p009q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：taller', options: ['A. taller', 'B. tallest', 'C. stronger', 'D. tall'], answer: 2, explanation: '都是比较级。' },
      { id: 'p009q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：went', options: ['A. go', 'B. saw', 'C. taken', 'D. eat'], answer: 1, explanation: 'went和saw都是过去式。' },
      { id: 'p009q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：September', options: ['A. summer', 'B. Monday', 'C. October', 'D. spring'], answer: 2, explanation: '都是月份。' },
      { id: 'p009q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：library', options: ['A. playground', 'B. teacher', 'C. student', 'D. study'], answer: 0, explanation: '都是学校场所。' },
      { id: 'p009q6', type: '听力选择', score: 2, text: '选出正确答语：How tall are you?', options: ['A. I am ten.', 'B. I am 1.5 metres.', 'C. I am fine.', 'D. I am Tom.'], answer: 1, explanation: '问身高用"I am... metres."回答。' },
      { id: 'p009q7', type: '听力选择', score: 2, text: '选出正确答语：What did you do last weekend?', options: ['A. I clean my room.', 'B. I cleaned my room.', 'C. I am cleaning.', 'D. I will clean.'], answer: 1, explanation: 'last weekend用一般过去时。' },
      { id: 'p009q8', type: '听力选择', score: 2, text: '选出正确答语：Where did you go on vacation?', options: ['A. I went to Beijing.', 'B. I am fine.', 'C. I am ten.', 'D. Goodbye.'], answer: 0, explanation: '问地点用"I went to..."回答。' },
      { id: 'p009q9', type: '听力选择', score: 2, text: '选出正确答语：Did you watch TV yesterday?', options: ['A. Yes, I do.', 'B. Yes, I did.', 'C. Yes, I am.', 'D. Yes, I will.'], answer: 1, explanation: 'Did开头的一般疑问句用"Yes, I did."回答。' },
      { id: 'p009q10', type: '听力选择', score: 2, text: '选出正确答语：What are you going to do tomorrow?', options: ['A. I will visit my uncle.', 'B. I am fine.', 'C. I am ten.', 'D. Goodbye.'], answer: 0, explanation: '问将来计划用一般将来时回答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p009q11', type: '词汇填空', score: 2, text: '写出动词三形式（原形/过去式/过去分词）：begin ____ / ____', answer: 'began、begun', explanation: '不规则动词。' },
      { id: 'p009q12', type: '词汇填空', score: 2, text: '写出动词三形式：break ____ / ____', answer: 'broke、broken', explanation: '不规则动词。' },
      { id: 'p009q13', type: '词汇填空', score: 2, text: 'English ___ (speak) all over the world.', answer: 'is spoken', explanation: '英语被说，用一般现在时被动语态。' },
      { id: 'p009q14', type: '词汇填空', score: 2, text: 'This work must ___ (finish) before tomorrow.', answer: 'be finished', explanation: '含情态动词的被动语态：must+be+过去分词。' },
      { id: 'p009q15', type: '词汇填空', score: 2, text: 'By the time he arrived, the movie ___ (start).', answer: 'had started', explanation: '"在他到达之前"用过去完成时。' },
      { id: 'p009q16', type: '词汇填空', score: 2, text: 'The teacher asked us ___ (finish) homework before Friday.', answer: 'to finish', explanation: 'ask sb to do sth。' },
      { id: 'p009q17', type: '词汇填空', score: 2, text: '写出环保词：环境____  保护____  回收____', answer: 'environment、protect、recycle', explanation: '环保主题词汇。' },
      { id: 'p009q18', type: '词汇填空', score: 2, text: '翻译：我们应当保护环境。____', answer: 'We should protect the environment.', explanation: '情态动词should+动词原形。' },
      { id: 'p009q19', type: '词汇填空', score: 2, text: '翻译：英语在全世界被使用。____', answer: 'English is spoken all over the world.', explanation: '用一般现在时被动语态。' },
      { id: 'p009q20', type: '词汇填空', score: 2, text: '翻译：昨天我看了一部电影。____', answer: 'I saw a film yesterday.', explanation: '用一般过去时。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p009q21', type: '单项选择', score: 2, text: 'If I ___ you, I ___ harder.', options: ['A. am, will study', 'B. was, would study', 'C. were, would study', 'D. were, will study'], answer: 2, explanation: '与现在事实相反的虚拟语气，用"if...were...would..."。' },
      { id: 'p009q22', type: '单项选择', score: 2, text: 'By the time he arrived, the movie ___.', options: ['A. started', 'B. had started', 'C. has started', 'D. was starting'], answer: 1, explanation: '过去的过去用过去完成时。' },
      { id: 'p009q23', type: '单项选择', score: 2, text: 'English ___ all over the world.', options: ['A. speaks', 'B. spoke', 'C. is spoken', 'D. is speaking'], answer: 2, explanation: '英语被说，用被动语态。' },
      { id: 'p009q24', type: '单项选择', score: 2, text: 'The teacher asked us ___ homework before Friday.', options: ['A. finish', 'B. to finish', 'C. finished', 'D. finishing'], answer: 1, explanation: 'ask sb to do sth。' },
      { id: 'p009q25', type: '单项选择', score: 2, text: 'One of the students who ___ passed the exam is Tom.', options: ['A. has', 'B. have', 'C. is', 'D. are'], answer: 1, explanation: 'who指代students，用have。' },
      { id: 'p009q26', type: '单项选择', score: 2, text: 'The girl ___ is wearing a red dress is my sister.', options: ['A. who', 'B. which', 'C. what', 'D. whose'], answer: 0, explanation: '先行词是人，用who引导定语从句。' },
      { id: 'p009q27', type: '单项选择', score: 2, text: '—___ did you go last Sunday? —I went to the park.', options: ['A. What', 'B. Where', 'C. When', 'D. How'], answer: 1, explanation: '问地点用Where。' },
      { id: 'p009q28', type: '单项选择', score: 2, text: 'Tom is ___ than any other student in his class.', options: ['A. taller', 'B. tall', 'C. tallest', 'D. the tallest'], answer: 0, explanation: '"比较级+than any other+单数名词"表最高级含义。' },
      { id: 'p009q29', type: '单项选择', score: 2, text: 'I ___ my homework when my mother came back.', options: ['A. do', 'B. did', 'C. was doing', 'D. am doing'], answer: 2, explanation: '"过去某时正在做"用过去进行时。' },
      { id: 'p009q30', type: '单项选择', score: 2, text: 'There ___ a book and two pens on the desk.', options: ['A. is', 'B. are', 'C. has', 'D. have'], answer: 0, explanation: 'There be句型就近原则，a book用is。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p009q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up. 问：How old is Tom?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up.', answer: 'Twelve (12 years old).', explanation: '从原文"Tom is a 12-year-old boy"得知。' },
      { id: 'p009q32', type: '阅读理解', score: 4, text: '阅读上面短文，回答：What does Tom like doing?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up.', answer: 'He likes playing basketball.', explanation: '从原文"He likes playing basketball"得知。' },
      { id: 'p009q33', type: '阅读理解', score: 4, text: '阅读上面短文，回答：Who is Tom\'s favourite basketball player?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up.', answer: 'Yao Ming.', explanation: '从原文"His favourite basketball player is Yao Ming"得知。' },
      { id: 'p009q34', type: '阅读理解', score: 4, text: '阅读上面短文，回答：When does Tom play basketball?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up.', answer: 'Every day after school.', explanation: '从原文"every day after school"得知。' },
      { id: 'p009q35', type: '阅读理解', score: 4, text: '阅读上面短文，回答：What does Tom want to be when he grows up?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. His favourite basketball player is Yao Ming. He wants to be a basketball player when he grows up.', answer: 'A basketball player.', explanation: '从原文"He wants to be a basketball player"得知。' },

      // 五、写作（20分）
      { id: 'p009q36', type: '写作', score: 20, text: '以"My Dream"为题，写一段不少于8句话的短文，介绍你的梦想及实现梦想的计划。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：I want to be a... Because I like... I will study hard... I will...' }
    ]
  },

  /* ============================== 四年级语数英综合卷 ============================== */
  {
    id: 'p010',
    subject: '综合',
    grade: '四年级',
    type: '综合卷',
    region: '全国',
    title: '四年级语数英三科综合测试卷',
    totalScore: 100,
    timeLimit: 100,
    questions: [
      // 语文部分（40分）
      { id: 'p010q1', type: '填空题', subject: '语文', score: 2, text: '看拼音写词语：fēn fāng（  ）', answer: '芬芳', explanation: '"芬"和"芳"都是草字头。' },
      { id: 'p010q2', type: '选择题', subject: '语文', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 屹立(yì) 霎时(shà)', 'B. 屹立(qì) 霎时(shà)', 'C. 屹立(yì) 霎时(chà)', 'D. 屹立(qì) 霎时(chà)'], answer: 0, explanation: '"屹"读yì，"霎"读shà。' },
      { id: 'p010q3', type: '古诗文填空', subject: '语文', score: 1, text: '横看成岭侧成峰，______________。', answer: '远近高低各不同', explanation: '苏轼《题西林壁》。' },
      { id: 'p010q4', type: '古诗文填空', subject: '语文', score: 1, text: '不识庐山真面目，______________。', answer: '只缘身在此山中', explanation: '揭示"当局者迷"的道理。' },
      { id: 'p010q5', type: '古诗文填空', subject: '语文', score: 1, text: '一道残阳铺水中，______________。', answer: '半江瑟瑟半江红', explanation: '白居易《暮江吟》。' },
      { id: 'p010q6', type: '古诗文填空', subject: '语文', score: 1, text: '梅须逊雪三分白，______________。', answer: '雪却输梅一段香', explanation: '卢梅坡《雪梅》。' },
      { id: 'p010q7', type: '古诗文填空', subject: '语文', score: 1, text: '山重水复疑无路，______________。', answer: '柳暗花明又一村', explanation: '陆游《游山西村》。' },
      { id: 'p010q8', type: '阅读理解', subject: '语文', score: 15, text: '阅读《观潮》选段，回答：那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。问："水墙"和"白色战马"分别写出了大潮的什么特点？', passage: '那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来。', answer: '"水墙"写出了大潮浪头之高、来势之猛；"白色战马"写出了大潮浩浩荡荡、气势磅礴的样子。', explanation: '从比喻的本体和喻体分析。' },
      { id: 'p010q9', type: '作文', subject: '语文', score: 16, text: '以"我的校园"为题，写一篇不少于250字的小作文。', answer: '评分标准：内容具体9分，结构清晰4分，语言通顺3分。', explanation: '可用总分总结构，描写校园的景物和活动。' },

      // 数学部分（35分）
      { id: 'p010q10', type: '填空题', subject: '数学', score: 2, text: '由3个千万、5个百万、2个千和8个十组成的数是____。', answer: '35002080', explanation: '数位顺序填写。' },
      { id: 'p010q11', type: '填空题', subject: '数学', score: 2, text: '□÷35=18……□，余数最大是____，这时被除数是____。', answer: '34、664', explanation: '余数最大=除数-1=34。' },
      { id: 'p010q12', type: '填空题', subject: '数学', score: 2, text: '1周角=____平角=____直角。', answer: '2、4', explanation: '周角360°，平角180°，直角90°。' },
      { id: 'p010q13', type: '填空题', subject: '数学', score: 2, text: '1公顷=____平方米；1平方千米=____公顷。', answer: '10000、100', explanation: '面积单位换算。' },
      { id: 'p010q14', type: '填空题', subject: '数学', score: 2, text: '一个因数不变，另一个因数乘5，积____。', answer: '乘5', explanation: '积的变化规律。' },
      { id: 'p010q15', type: '选择题', subject: '数学', score: 2, text: '只有一组平行线的图形是（  ）', options: ['A. 长方形', 'B. 正方形', 'C. 梯形', 'D. 平行四边形'], answer: 2, explanation: '梯形只有一组对边平行。' },
      { id: 'p010q16', type: '计算题', subject: '数学', score: 5, text: '简便计算：125×88', answer: '11000', explanation: '125×88=125×8×11=11000。' },
      { id: 'p010q17', type: '计算题', subject: '数学', score: 5, text: '用竖式计算：356×24', answer: '8544', explanation: '356×24=8544。' },
      { id: 'p010q18', type: '应用题', subject: '数学', score: 13, text: '一辆汽车3小时行驶240千米，照这样计算，5小时行驶多少千米？', answer: '400千米', explanation: '速度=240÷3=80km/h，5小时=80×5=400km。' },

      // 英语部分（25分）
      { id: 'p010q19', type: '词汇填空', subject: '英语', score: 2, text: 'I ___ a student.（用be动词填空）', answer: 'am', explanation: 'I用am。' },
      { id: 'p010q20', type: '词汇填空', subject: '英语', score: 2, text: '写出单词：苹果____  香蕉____', answer: 'apple、banana', explanation: '注意拼写。' },
      { id: 'p010q21', type: '词汇填空', subject: '英语', score: 2, text: '翻译：我喜欢猫。____', answer: 'I like cats.', explanation: '复数表类别。' },
      { id: 'p010q22', type: '单项选择', subject: '英语', score: 2, text: '—What\'s your name? —____ Tom.', options: ['A. I\'m', 'B. You\'re', 'C. He\'s', 'D. She\'s'], answer: 0, explanation: '问姓名用"I\'m..."回答。' },
      { id: 'p010q23', type: '单项选择', subject: '英语', score: 2, text: '—How are you? —____', options: ['A. I\'m fine, thank you.', 'B. I\'m ten.', 'C. Goodbye.', 'D. Thank you.'], answer: 0, explanation: '"How are you?"用"I\'m fine, thank you."回答。' },
      { id: 'p010q24', type: '单项选择', subject: '英语', score: 2, text: '—What color is it? —____ red.', options: ['A. It\'s', 'B. It', 'C. They\'re', 'D. Is'], answer: 0, explanation: '回答颜色用"It\'s..."。' },
      { id: 'p010q25', type: '阅读理解', subject: '英语', score: 13, text: '阅读短文回答：Hello, I am Tom. I am ten. I have a dog. Its name is Bobby. I like Bobby. 问：What is the dog\'s name?', passage: 'Hello, I am Tom. I am ten. I have a dog. Its name is Bobby. I like Bobby.', answer: 'Bobby.', explanation: '从原文"Its name is Bobby."得知。' }
    ]
  },

  /* ============================== 五年级语数英综合卷 ============================== */
  {
    id: 'p011',
    subject: '综合',
    grade: '五年级',
    type: '综合卷',
    region: '全国',
    title: '五年级语数英三科综合测试卷',
    totalScore: 100,
    timeLimit: 100,
    questions: [
      // 语文部分（40分）
      { id: 'p011q1', type: '填空题', subject: '语文', score: 2, text: '看拼音写词语：biàn bié（  ）', answer: '辨别', explanation: '注意"辨"中间是一点和一撇。' },
      { id: 'p011q2', type: '选择题', subject: '语文', score: 2, text: '"春风又绿江南岸"中"绿"的用法是（  ）', options: ['A. 名词作动词', 'B. 形容词作动词', 'C. 动词作形容词', 'D. 形容词作名词'], answer: 1, explanation: '"绿"原是形容词，这里用作动词。' },
      { id: 'p011q3', type: '古诗文填空', subject: '语文', score: 1, text: '死去元知万事空，______________。', answer: '但悲不见九州同', explanation: '陆游《示儿》。' },
      { id: 'p011q4', type: '古诗文填空', subject: '语文', score: 1, text: '王师北定中原日，______________。', answer: '家祭无忘告乃翁', explanation: '表达爱国之情。' },
      { id: 'p011q5', type: '古诗文填空', subject: '语文', score: 1, text: '山外青山楼外楼，______________？', answer: '西湖歌舞几时休', explanation: '林升《题临安邸》。' },
      { id: 'p011q6', type: '古诗文填空', subject: '语文', score: 1, text: '我劝天公重抖擞，______________。', answer: '不拘一格降人材', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p011q7', type: '古诗文填空', subject: '语文', score: 1, text: '京口瓜洲一水间，______________。', answer: '钟山只隔数重山', explanation: '王安石《泊船瓜洲》。' },
      { id: 'p011q8', type: '阅读理解', subject: '语文', score: 15, text: '阅读《慈母情深》选段，回答：母亲"掏衣兜，掏出一卷揉得皱皱的毛票"这一细节描写表现了什么？', passage: '母亲掏衣兜，掏出一卷揉得皱皱的毛票，用龟裂的手指数着。母亲说："我挺高兴他爱看书的！"', answer: '表现了母亲挣钱不易，家境贫寒，但依然支持孩子读书的慈爱之心。', explanation: '从"皱皱的毛票""龟裂的手"等细节体会。' },
      { id: 'p011q9', type: '作文', subject: '语文', score: 16, text: '以"我的好朋友"为题，写一篇不少于300字的小作文。', answer: '评分标准：内容具体9分，结构清晰4分，语言通顺3分。', explanation: '写出朋友的外貌、性格和你们的友谊。' },

      // 数学部分（35分）
      { id: 'p011q10', type: '填空题', subject: '数学', score: 2, text: '一个三角形底8cm高5cm，面积是____，等底等高平行四边形面积是____。', answer: '20cm²、40cm²', explanation: 'S△=8×5÷2=20。' },
      { id: 'p011q11', type: '填空题', subject: '数学', score: 2, text: '2.5时=____时____分。', answer: '2、30', explanation: '0.5时=30分。' },
      { id: 'p011q12', type: '填空题', subject: '数学', score: 2, text: '小数0.323232……的循环节是____。', answer: '32', explanation: '循环部分是"32"。' },
      { id: 'p011q13', type: '填空题', subject: '数学', score: 2, text: '一个梯形上底5cm下底9cm高4cm，面积是____。', answer: '28cm²', explanation: 'S=(5+9)×4÷2=28。' },
      { id: 'p011q14', type: '填空题', subject: '数学', score: 2, text: '3.6×0.25+0.75×3.6=____。', answer: '3.6', explanation: '3.6×(0.25+0.75)=3.6。' },
      { id: 'p011q15', type: '选择题', subject: '数学', score: 2, text: '下列说法错误的是（  ）', options: ['A. 方程是等式', 'B. 等式是方程', 'C. 含未知数的等式是方程', 'D. 解方程是求解过程'], answer: 1, explanation: '等式不一定是方程。' },
      { id: 'p011q16', type: '计算题', subject: '数学', score: 5, text: '解方程：4x-12=36', answer: 'x=12', explanation: '4x=48，x=12。' },
      { id: 'p011q17', type: '计算题', subject: '数学', score: 5, text: '简便计算：3.6×99+3.6', answer: '360', explanation: '3.6×(99+1)=360。' },
      { id: 'p011q18', type: '应用题', subject: '数学', score: 13, text: '甲乙两地相距480千米，客车和货车同时从两地相向而行，3小时相遇。客车每小时行90千米，货车每小时行多少千米？', answer: '70千米', explanation: '(90+x)×3=480，x=70。' },

      // 英语部分（25分）
      { id: 'p011q19', type: '词汇填空', subject: '英语', score: 2, text: 'She ___ (go) to school by bike every day.', answer: 'goes', explanation: 'every day一般现在时，she用三单。' },
      { id: 'p011q20', type: '词汇填空', subject: '英语', score: 2, text: '写出过去式：go____  do____  eat____', answer: 'went、did、ate', explanation: '不规则动词过去式。' },
      { id: 'p011q21', type: '词汇填空', subject: '英语', score: 2, text: '翻译：昨天我去了公园。____', answer: 'I went to the park yesterday.', explanation: '用一般过去时。' },
      { id: 'p011q22', type: '单项选择', subject: '英语', score: 2, text: '—Which season do you like best? —____', options: ['A. I like spring best.', 'B. I like red.', 'C. I am fine.', 'D. Goodbye.'], answer: 0, explanation: '问季节用"I like...best."回答。' },
      { id: 'p011q23', type: '单项选择', subject: '英语', score: 2, text: 'Tom is ___ than Mike.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. the tallest'], answer: 1, explanation: 'than提示用比较级。' },
      { id: 'p011q24', type: '单项选择', subject: '英语', score: 2, text: '—When is your birthday? —____', options: ['A. It\'s on May 1st.', 'B. I am fine.', 'C. I am ten.', 'D. Goodbye.'], answer: 0, explanation: '问生日用"It\'s on..."回答。' },
      { id: 'p011q25', type: '阅读理解', subject: '英语', score: 13, text: '阅读短文回答：My name is Lily. I am eleven. I like spring best. 问：Which season does Lily like best?', passage: 'My name is Lily. I am eleven. I like spring best.', answer: 'Spring.', explanation: '从原文"I like spring best"得知。' }
    ]
  },

  /* ============================== 六年级小升初综合卷 ============================== */
  {
    id: 'p012',
    subject: '综合',
    grade: '六年级',
    type: '综合卷',
    region: '全国',
    title: '六年级小升初三科综合模拟卷',
    totalScore: 100,
    timeLimit: 100,
    questions: [
      // 语文部分（40分）
      { id: 'p012q1', type: '填空题', subject: '语文', score: 2, text: '看拼音写词语：pái huái（  ）', answer: '徘徊', explanation: '注意双人旁。' },
      { id: 'p012q2', type: '选择题', subject: '语文', score: 2, text: '下列说法正确的是（  ）', options: ['A. 《匆匆》—朱自清—现代', 'B. 《鲁滨逊》—笛福—法国', 'C. 《卖火柴》—安徒生—德国', 'D. 《凡卡》—契诃夫—法国'], answer: 0, explanation: '朱自清是现代作家。' },
      { id: 'p012q3', type: '古诗文填空', subject: '语文', score: 1, text: '少壮不努力，______________。', answer: '老大徒伤悲', explanation: '《长歌行》。' },
      { id: 'p012q4', type: '古诗文填空', subject: '语文', score: 1, text: '海内存知己，______________。', answer: '天涯若比邻', explanation: '王勃《送杜少府之任蜀州》。' },
      { id: 'p012q5', type: '古诗文填空', subject: '语文', score: 1, text: '红军不怕远征难，______________。', answer: '万水千山只等闲', explanation: '毛泽东《七律·长征》。' },
      { id: 'p012q6', type: '古诗文填空', subject: '语文', score: 1, text: '粉骨碎身浑不怕，______________。', answer: '要留清白在人间', explanation: '于谦《石灰吟》。' },
      { id: 'p012q7', type: '古诗文填空', subject: '语文', score: 1, text: '落红不是无情物，______________。', answer: '化作春泥更护花', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p012q8', type: '阅读理解', subject: '语文', score: 15, text: '阅读《匆匆》选段，回答：作者用"针尖上一滴水滴在大海里"比喻什么？表达了怎样的感情？', passage: '在默默里算着，八千多日子已经从我手中溜去；像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。', answer: '把"我的日子"比作"针尖上一滴水"，把"时间的流"比作"大海"，表达了对时光飞逝、个人渺小的感慨和惋惜之情。', explanation: '从本体和喻体入手，体会作者情感。' },
      { id: 'p012q9', type: '作文', subject: '语文', score: 16, text: '以"未来的我"为题，写一篇不少于400字的想象作文。', answer: '评分标准：内容具体9分，结构清晰4分，语言通顺3分。', explanation: '大胆想象+具体描写+积极向上。' },

      // 数学部分（35分）
      { id: 'p012q10', type: '填空题', subject: '数学', score: 2, text: '一个圆柱底面半径5cm高10cm，侧面积是____，体积是____。', answer: '314cm²、785cm³', explanation: '侧面积=2πrh=314，体积=πr²h=785。' },
      { id: 'p012q11', type: '填空题', subject: '数学', score: 2, text: '把圆柱削成最大圆锥，削去部分是圆锥的____倍。', answer: '2', explanation: 'V柱=3V锥，削去=2V锥。' },
      { id: 'p012q12', type: '填空题', subject: '数学', score: 2, text: '比例尺1:500000，图上4cm表示实际____km。', answer: '20', explanation: '4×500000=2000000cm=20km。' },
      { id: 'p012q13', type: '填空题', subject: '数学', score: 2, text: '一件商品打八折后售价160元，原价是____元。', answer: '200', explanation: '160÷0.8=200。' },
      { id: 'p012q14', type: '填空题', subject: '数学', score: 2, text: '一个数的25%是15，这个数是____。', answer: '60', explanation: '15÷25%=60。' },
      { id: 'p012q15', type: '选择题', subject: '数学', score: 2, text: '下列说法正确的是（  ）', options: ['A. 比的前项后项同乘一个数，比值不变', 'B. 比例的外项积等于内项积', 'C. 圆周长与直径比是3.14', 'D. 比例尺1:100=100米'], answer: 1, explanation: 'B是比例的基本性质。' },
      { id: 'p012q16', type: '计算题', subject: '数学', score: 5, text: '解方程：3x+1.5=2x+4.5', answer: 'x=3', explanation: '3x-2x=4.5-1.5，x=3。' },
      { id: 'p012q17', type: '计算题', subject: '数学', score: 5, text: '解比例：x:3=4:6', answer: 'x=2', explanation: '6x=12，x=2。' },
      { id: 'p012q18', type: '应用题', subject: '数学', score: 13, text: '一项工程，甲单独做12天完成，乙单独做18天完成，两队合作几天完成？', answer: '7.2天', explanation: '1÷(1/12+1/18)=7.2天。' },

      // 英语部分（25分）
      { id: 'p012q19', type: '词汇填空', subject: '英语', score: 2, text: 'English ___ (speak) all over the world.', answer: 'is spoken', explanation: '英语被说，用被动语态。' },
      { id: 'p012q20', type: '词汇填空', subject: '英语', score: 2, text: '写出三形式：begin ____ / ____', answer: 'began、begun', explanation: '不规则动词。' },
      { id: 'p012q21', type: '词汇填空', subject: '英语', score: 2, text: '翻译：我们应当保护环境。____', answer: 'We should protect the environment.', explanation: '情态动词should+动词原形。' },
      { id: 'p012q22', type: '单项选择', subject: '英语', score: 2, text: 'If I ___ you, I ___ harder.', options: ['A. am, will study', 'B. was, would study', 'C. were, would study', 'D. were, will study'], answer: 2, explanation: '虚拟语气"if...were...would..."。' },
      { id: 'p012q23', type: '单项选择', subject: '英语', score: 2, text: 'The girl ___ is wearing a red dress is my sister.', options: ['A. who', 'B. which', 'C. what', 'D. whose'], answer: 0, explanation: '先行词是人，用who。' },
      { id: 'p012q24', type: '单项选择', subject: '英语', score: 2, text: '—What did you do last weekend? —____', options: ['A. I clean my room.', 'B. I cleaned my room.', 'C. I am cleaning.', 'D. I will clean.'], answer: 1, explanation: 'last weekend用过去时。' },
      { id: 'p012q25', type: '阅读理解', subject: '英语', score: 13, text: '阅读短文回答：Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school. 问：What does Tom like doing?', passage: 'Tom is a 12-year-old boy. He likes playing basketball. He plays basketball with his friends every day after school.', answer: 'He likes playing basketball.', explanation: '从原文"He likes playing basketball"得知。' }
    ]
  },

  /* ============================== 语文四年级上册第一单元 单元卷 ============================== */
  {
    id: 'p013',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文上册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、基础知识（共30分）
      { id: 'p013q1', type: '填空题', score: 2, text: '看拼音写词语：guān cháo（  ）', answer: '观潮', explanation: '"观"左窄右宽，"潮"左中右结构。' },
      { id: 'p013q2', type: '填空题', score: 2, text: '看拼音写词语：pù bù（  ）', answer: '瀑布', explanation: '"瀑"注意三点水旁，"布"不要多写一点。' },
      { id: 'p013q3', type: '填空题', score: 2, text: '看拼音写词语：fán xīng（  ）', answer: '繁星', explanation: '"繁"字笔画较多，上下结构。' },
      { id: 'p013q4', type: '选择题', score: 2, text: '下列加点字读音全部正确的一项是（  ）', options: ['A. 薄(bó)雾  霎(shà)时', 'B. 薄(báo)雾  霎(chà)时', 'C. 薄(bó)雾  霎(chà)时', 'D. 薄(báo)雾  霎(shà)时'], answer: 0, explanation: '"薄雾"中"薄"读bó，"霎时"中"霎"读shà。' },
      { id: 'p013q5', type: '选择题', score: 2, text: '"犹如千万匹白色战马齐头并进"中"犹如"的意思是（  ）', options: ['A. 好像', 'B. 既然', 'C. 即使', 'D. 如果'], answer: 0, explanation: '"犹如"是比喻词，意思是"好像"。' },
      { id: 'p013q6', type: '填空题', score: 2, text: '比一比，再组词：潮（  ）  嘲（  ）', answer: '潮水、嘲笑', explanation: '"潮"与水有关，"嘲"与口有关。' },
      { id: 'p013q7', type: '填空题', score: 2, text: '把成语补充完整：若隐若（  ）  人山人（  ）', answer: '现、海', explanation: '若隐若现、人山人海，均为四字成语。' },
      { id: 'p013q8', type: '选择题', score: 2, text: '下列句子中使用了比喻修辞手法的是（  ）', options: ['A. 浪潮越来越近，犹如千万匹白色战马齐头并进。', 'B. 鸟儿在枝头唱歌。', 'C. 那不是我们的老师吗？', 'D. 他的手真大啊！'], answer: 0, explanation: 'A句把浪潮比作白色战马，是比喻。B是拟人，C是反问，D是夸张。' },
      { id: 'p013q9', type: '填空题', score: 2, text: '写出下列词语的近义词：平静—（  ）  霎时—（  ）', answer: '安静、顿时', explanation: '近义词要词性相同、意思相近。' },
      { id: 'p013q10', type: '填空题', score: 2, text: '写出下列词语的反义词：宽阔—（  ）  静寂—（  ）', answer: '狭窄、喧闹', explanation: '反义词要词性相同、意思相反。' },
      { id: 'p013q11', type: '选择题', score: 2, text: '"漫天卷地"的正确理解是（  ）', options: ['A. 布满天空，席卷大地，形容来势猛烈', 'B. 慢慢地卷起大地', 'C. 天上地下都很安静', 'D. 大地上铺满了东西'], answer: 0, explanation: '"漫天卷地"形容声势大，来势猛。' },
      { id: 'p013q12', type: '句子改写', score: 2, text: '改为"被"字句：钱塘江大潮震撼了无数观潮的人。', answer: '无数观潮的人被钱塘江大潮震撼了。', explanation: '把宾语移到主语位置，加"被"字。' },
      { id: 'p013q13', type: '句子改写', score: 2, text: '修改病句：看了《观潮》，受到了深刻的教育。', answer: '看了《观潮》，我受到了深刻的教育。', explanation: '原句缺少主语，应补上"我"。' },
      { id: 'p013q14', type: '句子改写', score: 2, text: '缩句：那条白线很快地向我们移来。', answer: '白线移来。', explanation: '保留主语中心语"白线"和谓语"移来"。' },
      { id: 'p013q15', type: '句子改写', score: 2, text: '改为反问句：钱塘江大潮称得上是天下奇观。', answer: '钱塘江大潮难道称不上是天下奇观吗？', explanation: '反问句用"难道……不……吗"加强语气。' },

      // 二、按课文内容填空（共10分）
      { id: 'p013q16', type: '填空题', score: 2, text: '《观潮》一课按____、____、____的顺序描写了钱塘江大潮的壮观景象。', answer: '潮来前、潮来时、潮过后', explanation: '课文按时间顺序描写大潮。' },
      { id: 'p013q17', type: '填空题', score: 2, text: '"浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来"这句话把____比作____，写出了大潮的____。', answer: '浪潮、白色战马、浩荡气势', explanation: '比喻句要找准本体和喻体。' },
      { id: 'p013q18', type: '填空题', score: 2, text: '《繁星》的作者是____，文中描写了____次看星空的情景。', answer: '巴金、三', explanation: '巴金三次看星空：从前在家乡、三年前在南京、如今在海轮上。' },
      { id: 'p013q19', type: '填空题', score: 2, text: '《走月亮》中"走月亮"的意思是____。', answer: '在月光下散步', explanation: '"走月亮"是吴地方言，指月下散步。' },
      { id: 'p013q20', type: '填空题', score: 2, text: '"那条白线很快地向我们移来，逐渐拉长，变粗"中"拉长""变粗"写出了潮水的____变化。', answer: '形态（形状）', explanation: '从白线到水墙，描写形态的变化。' },

      // 三、阅读理解（共30分）
      { id: 'p013q21', type: '阅读理解', score: 10, text: '阅读《观潮》选段，回答问题：选段中从哪些方面写出了大潮的"奇"？', passage: '午后一点左右，从远处传来隆隆的响声，好像闷雷滚动。顿时人声鼎沸，有人告诉我们，潮来了！我们踮着脚往东望去，江面还是风平浪静，看不出有什么变化。过了一会儿，响声越来越大，只见东边水天相接的地方出现了一条白线，人群又沸腾起来。', answer: '从声音和形态两方面写出了"奇"：声音如闷雷滚动，形态是一条白线从远处移来，越来越近。', explanation: '从听觉和视觉两个角度分析。' },
      { id: 'p013q22', type: '阅读理解', score: 10, text: '阅读《繁星》选段：我躺在舱面上，仰望天空。深蓝色的天空里，悬着无数半明半昧的星。船在动，星也在动，它们是这样低，真是摇摇欲坠呢！渐渐地我的眼睛模糊了，我好像看见无数萤火虫在我的周围飞舞。问："我"为什么觉得星星像萤火虫？', passage: '我躺在舱面上，仰望天空。深蓝色的天空里，悬着无数半明半昧的星。船在动，星也在动，它们是这样低，真是摇摇欲坠呢！渐渐地我的眼睛模糊了，我好像看见无数萤火虫在我的周围飞舞。', answer: '因为"我"的眼睛模糊了，星星在动，又低又亮，像萤火虫一样一闪一闪地飞舞，所以产生了这样的联想。', explanation: '理解作者的联想和感受，结合上下文分析。' },
      { id: 'p013q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题：秋天的夜晚，月亮升起来了，从洱海那边升起来了。是在洱海里淘洗过吗？月盘是那样明亮，月光是那样柔和，照亮了高高的点苍山，照亮了村头的大青树，也照亮了村间的大道和小路……问：这段话使用了什么修辞手法？有什么表达效果？', passage: '秋天的夜晚，月亮升起来了，从洱海那边升起来了。是在洱海里淘洗过吗？月盘是那样明亮，月光是那样柔和，照亮了高高的点苍山，照亮了村头的大青树，也照亮了村间的大道和小路……', answer: '使用了排比和设问的修辞手法。"照亮了……照亮了……照亮了……"是排比，增强了月光的明亮和柔和的表达效果；"是在洱海里淘洗过吗？"是设问，引起读者注意和思考。', explanation: '排比增强气势，设问引起注意。' },

      // 四、作文（共30分）
      { id: 'p013q24', type: '作文', score: 30, text: '你一定见过令人难忘的自然景象吧？如日出、日落、雨景、星空等。请以"一次难忘的____"为题，写一篇不少于300字的作文。要求：把题目补充完整，内容具体，语句通顺，表达真情实感。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '抓住景象特点，按顺序描写，融入感受。' }
    ]
  },

  /* ============================== 数学四年级上册第一单元 单元卷 ============================== */
  {
    id: 'p014',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学上册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、填空题（每题4分，共20分）
      { id: 'p014q1', type: '填空题', score: 4, text: '10个一万是____，10个十万是____。', answer: '十万、一百万', explanation: '每相邻两个计数单位之间的进率是10。' },
      { id: 'p014q2', type: '填空题', score: 4, text: '从个位起，第____位是万位，第____位是亿位。', answer: '五、九', explanation: '个位第1位，万位第5位，亿位第9位。' },
      { id: 'p014q3', type: '填空题', score: 4, text: '一个数由5个百万、3个万和6个百组成，这个数写作____。', answer: '5030600', explanation: '5个百万=5000000，3个万=30000，6个百=600，合起来5030600。' },
      { id: 'p014q4', type: '填空题', score: 4, text: '三亿零五百万写作____，省略亿后面的尾数约是____。', answer: '305000000、3亿', explanation: '千万位是0，省略亿后面尾数看千万位0<5，舍去。' },
      { id: 'p014q5', type: '填空题', score: 4, text: '用1、3、5、7、0组成最大的五位数是____，最小的五位数是____。', answer: '75310、10357', explanation: '最大：大数字放高位；最小：最小非零放首位，0放第二位。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p014q11', type: '选择题', score: 2, text: '下面各数中，一个零也不读的是（  ）', options: ['A. 3006000', 'B. 3060000', 'C. 3000600', 'D. 3000060'], answer: 0, explanation: '3006000读"三百万六千"，万级末尾的0和个级末尾的0都不读，一个零也不读。' },
      { id: 'p014q12', type: '选择题', score: 2, text: '一个数的最高位是百万位，这个数是（  ）位数。', options: ['A. 六', 'B. 七', 'C. 八', 'D. 九'], answer: 1, explanation: '百万位是第7位，所以是七位数。' },
      { id: 'p014q13', type: '选择题', score: 2, text: '把97000000改写成用"万"作单位的数是（  ）', options: ['A. 97万', 'B. 970万', 'C. 9700万', 'D. 97000万'], answer: 2, explanation: '97000000去掉4个0是9700万。' },
      { id: 'p014q14', type: '选择题', score: 2, text: '下列各数中，最接近6万的数是（  ）', options: ['A. 59999', 'B. 60001', 'C. 61000', 'D. 59000'], answer: 0, explanation: '59999与6万差1，60001与6万差1，61000差1000，59000差1000。A和B都差1，选A。' },
      { id: 'p014q15', type: '选择题', score: 2, text: '47□803≈48万，□里可以填（  ）', options: ['A. 0~4', 'B. 5~9', 'C. 0~9', 'D. 只能填5'], answer: 1, explanation: '千位≥5向前一位进1，所以□≥5，填5~9。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p014q16', type: '判断题', score: 2, text: '两个计数单位之间的进率都是10。（  ）', answer: '×', explanation: '只有相邻两个计数单位之间的进率才是10，不相邻的不是。' },
      { id: 'p014q17', type: '判断题', score: 2, text: '一个数的末尾不管有几个0，都不读。（  ）', answer: '√', explanation: '每级末尾的0都不读，这是读数规则。' },
      { id: 'p014q18', type: '判断题', score: 2, text: '万级的数表示多少个万。（  ）', answer: '√', explanation: '万级上的数表示多少个万，个级上的数表示多少个一。' },
      { id: 'p014q19', type: '判断题', score: 2, text: '比较两个数的大小，位数多的数大。（  ）', answer: '√', explanation: '正整数比较，位数多的一定大。' },
      { id: 'p014q20', type: '判断题', score: 2, text: '准确数和近似数是一样的。（  ）', answer: '×', explanation: '近似数是约等于的数，与准确数不一定相同。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p014q21', type: '计算题', score: 6, text: '把下面各数改写成用"万"作单位的数：3250000', answer: '325万', explanation: '去掉4个0，加上"万"字。' },
      { id: 'p014q22', type: '计算题', score: 6, text: '把下面各数改写成用"亿"作单位的数：4600000000', answer: '46亿', explanation: '去掉8个0，加上"亿"字。' },
      { id: 'p014q23', type: '计算题', score: 6, text: '省略万位后面的尾数求近似数：674890', answer: '67万', explanation: '千位是4<5，舍去。' },
      { id: 'p014q24', type: '计算题', score: 6, text: '省略亿位后面的尾数求近似数：2954000000', answer: '30亿', explanation: '千万位是5≥5，向前一位进1，29+1=30亿。' },
      { id: 'p014q25', type: '计算题', score: 6, text: '比较大小：45360000○4537万', answer: '<', explanation: '45360000=4536万，4536万<4537万。' },

      // 五、应用题（共30分）
      { id: 'p014q27', type: '应用题', score: 10, text: '一个城市有568万人，另一个城市有602万人，两个城市一共有多少万人？省略万后面的尾数大约是多少万人？', answer: '568+602=1170万人，约1170万人', explanation: '568+602=1170，1170万已是整万数，约1170万人。' },
      { id: 'p014q28', type: '应用题', score: 10, text: '某省今年造林面积是980600公顷，去年造林面积是895400公顷，今年比去年多造林多少公顷？', answer: '85200公顷', explanation: '980600-895400=85200公顷。' },
      { id: 'p014q29', type: '应用题', score: 10, text: '用2、4、6、8、0组成一个最大的五位数和一个最小的五位数，它们的差是多少？', answer: '86420-20468=65952', explanation: '最大86420，最小20468，差=65952。' }
    ]
  },

  /* ============================== 英语五年级上册第一单元 单元卷 ============================== */
  {
    id: 'p015',
    subject: '英语',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级英语上册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p015q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. old', 'B. young', 'C. kind', 'D. funny'], answer: 0, explanation: '听力考查核心词汇old（年老的）。' },
      { id: 'p015q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. strict', 'B. strong', 'C. shy', 'D. polite'], answer: 1, explanation: '听力考查核心词汇strong（强壮的）。' },
      { id: 'p015q3', type: '听力选择', score: 2, text: '选出与所听内容相符的图片选项：He is tall and strong.', options: ['A. 一个瘦小的男孩', 'B. 一个又高又壮的男孩', 'C. 一个矮胖的男孩', 'D. 一个高瘦的女孩'], answer: 1, explanation: 'tall and strong意为"又高又壮"。' },
      { id: 'p015q4', type: '听力选择', score: 2, text: '选出正确的答语：Who is your maths teacher?', options: ['A. He is kind.', 'B. Mr Li.', 'C. Yes, he is.', 'D. No, she isn\'t.'], answer: 1, explanation: 'Who引导的特殊疑问句，回答用人物名Mr Li。' },
      { id: 'p015q5', type: '听力选择', score: 2, text: '选出正确的答语：What\'s she like?', options: ['A. She is a teacher.', 'B. She likes apples.', 'C. She is kind.', 'D. She is 30.'], answer: 2, explanation: 'What\'s she like?问性格，回答She is kind。' },
      { id: 'p015q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. She is our Chinese teacher.', 'B. She is our English teacher.', 'C. He is our Chinese teacher.', 'D. He is our English teacher.'], answer: 1, explanation: '听力区分Chinese/English和he/she。' },
      { id: 'p015q7', type: '听力选择', score: 2, text: '判断所听内容与图片是否相符：A funny teacher.', options: ['A. 相符', 'B. 不相符'], answer: 0, explanation: 'funny teacher意为"有趣的老师"，与描述相符。' },
      { id: 'p015q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. helpful', 'B. clever', 'C. hard-working', 'D. shy'], answer: 2, explanation: '听力考查核心词汇hard-working（努力工作的）。' },
      { id: 'p015q9', type: '听力选择', score: 2, text: '选出正确的答语：Is he strict?', options: ['A. Yes, he is.', 'B. Yes, she is.', 'C. No, he isn\'t.', 'D. Both A and C'], answer: 3, explanation: 'Is he...?肯定回答Yes, he is. 否定回答No, he isn\'t. 都可能。' },
      { id: 'p015q10', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. Do you know Mr Young?', 'B. Do you know Miss White?', 'C. Do you know Mr Jones?', 'D. Do you know Miss Green?'], answer: 0, explanation: '听力区分不同老师名字。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p015q11', type: '词汇填空', score: 2, text: 'My maths teacher is very s____（严格的）.', answer: 'strict', explanation: 'strict意为"严格的"。' },
      { id: 'p015q12', type: '词汇填空', score: 2, text: 'She is a k____（和蔼的）woman.', answer: 'kind', explanation: 'kind意为"和蔼的，善良的"。' },
      { id: 'p015q13', type: '词汇填空', score: 2, text: 'Our English teacher is f____（有趣的）.', answer: 'funny', explanation: 'funny意为"有趣的，好笑的"。' },
      { id: 'p015q14', type: '词汇填空', score: 2, text: 'He is y____（年轻的）. He is only 25.', answer: 'young', explanation: 'young意为"年轻的"。' },
      { id: 'p015q15', type: '词汇填空', score: 2, text: 'The girl is very s____（害羞的）. She doesn\'t like to talk.', answer: 'shy', explanation: 'shy意为"害羞的"。' },
      { id: 'p015q16', type: '词汇填空', score: 2, text: 'She is h____（有帮助的）at home.', answer: 'helpful', explanation: 'helpful意为"有帮助的"。' },
      { id: 'p015q17', type: '词汇填空', score: 2, text: 'He is c____（聪明的）. He can answer all the questions.', answer: 'clever', explanation: 'clever意为"聪明的"。' },
      { id: 'p015q18', type: '词汇填空', score: 2, text: 'She is h____（努力工作的）. She studies every day.', answer: 'hard-working', explanation: 'hard-working意为"努力工作的"。' },
      { id: 'p015q19', type: '词汇填空', score: 2, text: 'He is p____（有礼貌的）. He always says "please" and "thank you".', answer: 'polite', explanation: 'polite意为"有礼貌的"。' },
      { id: 'p015q20', type: '词汇填空', score: 2, text: 'Is she s____（严格的）? Yes, sometimes.', answer: 'strict', explanation: 'strict可指要求严格的。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p015q21', type: '单项选择', score: 2, text: '—____ is your music teacher? —Miss White.', options: ['A. What', 'B. Who', 'C. Where', 'D. How'], answer: 1, explanation: '对"人"提问用Who。' },
      { id: 'p015q22', type: '单项选择', score: 2, text: '—What\'s he ____? —He is tall and strong.', options: ['A. like', 'B. look', 'C. likes', 'D. looking'], answer: 0, explanation: 'What\'s ... like? 固定句型，问性格或外貌。' },
      { id: 'p015q23', type: '单项选择', score: 2, text: 'She ____ our new Chinese teacher.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'She是第三人称单数，用is。' },
      { id: 'p015q24', type: '单项选择', score: 2, text: 'He ____ short and thin.', options: ['A. have', 'B. has', 'C. is', 'D. are'], answer: 2, explanation: '描述外貌特征用be动词，He用is。' },
      { id: 'p015q25', type: '单项选择', score: 2, text: '—Is she strict? —Yes, ____ is.', options: ['A. he', 'B. she', 'C. it', 'D. they'], answer: 1, explanation: '问she，回答用she。' },
      { id: 'p015q26', type: '单项选择', score: 2, text: '—____ you know Mr Young? —No, I don\'t.', options: ['A. Are', 'B. Is', 'C. Do', 'D. Does'], answer: 2, explanation: 'you用助动词Do构成一般疑问句。' },
      { id: 'p015q27', type: '单项选择', score: 2, text: 'She will ____ our new English teacher.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 3, explanation: 'will后面接动词原形be。' },
      { id: 'p015q28', type: '单项选择', score: 2, text: 'My mother ____ long hair and big eyes.', options: ['A. is', 'B. has', 'C. have', 'D. does'], answer: 1, explanation: '拥有某种外貌特征用has（第三人称单数）。' },
      { id: 'p015q29', type: '单项选择', score: 2, text: 'He often ____ "Good morning" to us.', options: ['A. say', 'B. says', 'C. saying', 'D. to say'], answer: 1, explanation: 'He是第三人称单数，动词用says。' },
      { id: 'p015q30', type: '单项选择', score: 2, text: 'She makes me ____ my homework.', options: ['A. finish', 'B. finishes', 'C. finishing', 'D. to finish'], answer: 0, explanation: 'make sb. do sth. 让某人做某事，用动词原形。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p015q31', type: '阅读理解', score: 5, text: '阅读短文回答：I have a new English teacher. Her name is Miss Green. She is young and kind. She has long hair and big eyes. She is very funny. We all like her. 问：What\'s the English teacher\'s name?', passage: 'I have a new English teacher. Her name is Miss Green. She is young and kind. She has long hair and big eyes. She is very funny. We all like her.', answer: 'Her name is Miss Green.', explanation: '从原文"Her name is Miss Green"得知。' },
      { id: 'p015q32', type: '阅读理解', score: 5, text: '阅读短文回答：What\'s Miss Green like?', passage: 'I have a new English teacher. Her name is Miss Green. She is young and kind. She has long hair and big eyes. She is very funny. We all like her.', answer: 'She is young, kind and funny.', explanation: '从原文总结：young, kind, funny。' },
      { id: 'p015q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Miss Green has short hair.', passage: 'I have a new English teacher. Her name is Miss Green. She is young and kind. She has long hair and big eyes. She is very funny. We all like her.', answer: 'F', explanation: '原文说"She has long hair"，不是short hair。' },
      { id: 'p015q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：The students like Miss Green.', passage: 'I have a new English teacher. Her name is Miss Green. She is young and kind. She has long hair and big eyes. She is very funny. We all like her.', answer: 'T', explanation: '原文说"We all like her"，所以判断正确。' },

      // 五、写作（共20分）
      { id: 'p015q35', type: '写作', score: 20, text: '请用英语写一段话介绍你的一位老师（不少于5句话）。提示：Who is he/she? What does he/she teach? What\'s he/she like? Do you like him/her? Why?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型What\'s he/she like?和描述人物性格外貌的词汇。' }
    ]
  },

  /* ============================== 语文五年级下册第一单元 单元卷 ============================== */
  {
    id: 'p016',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文下册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、基础知识（共30分）
      { id: 'p016q1', type: '填空题', score: 2, text: '看拼音写词语：sāng shù（  ）', answer: '桑树', explanation: '"桑"字上面三个又，注意笔顺。' },
      { id: 'p016q2', type: '填空题', score: 2, text: '看拼音写词语：chú tou（  ）', answer: '锄头', explanation: '"锄"是金字旁加"助"。' },
      { id: 'p016q3', type: '填空题', score: 2, text: '看拼音写词语：chéng xiàng（  ）', answer: '城乡', explanation: '"城"是土字旁，"乡"注意笔画。' },
      { id: 'p016q4', type: '选择题', score: 2, text: '下列加点字读音全部正确的一项是（  ）', options: ['A. 供(gòng)耕织  倭(wō)瓜', 'B. 供(gōng)耕织  倭(wēi)瓜', 'C. 供(gòng)耕织  倭(wēi)瓜', 'D. 供(gōng)耕织  倭(wō)瓜'], answer: 0, explanation: '"供"在"供耕织"中读gòng，"倭"读wō。' },
      { id: 'p016q5', type: '选择题', score: 2, text: '"花开了，就像睡醒了似的"使用的修辞手法是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 排比', 'D. 夸张'], answer: 1, explanation: '把花当作人来写"睡醒了"，是拟人。' },
      { id: 'p016q6', type: '填空题', score: 2, text: '比一比，再组词：蝴（  ）  湖（  ）', answer: '蝴蝶、湖水', explanation: '"蝴"是虫字旁，"湖"是三点水。' },
      { id: 'p016q7', type: '填空题', score: 2, text: '把词语补充完整：（  ）然大悟  不可（  ）议', answer: '恍、思', explanation: '恍然大悟、不可思议。' },
      { id: 'p016q8', type: '选择题', score: 2, text: '"祖父种菜，我就种菜"中"就"字体现了（  ）', options: ['A. 小作者的无奈', 'B. 小作者对祖父的跟随和模仿', 'C. 小作者的反抗', 'D. 祖父的严厉'], answer: 1, explanation: '"就"字表现了"我"紧跟祖父，模仿祖父的天真可爱。' },
      { id: 'p016q9', type: '填空题', score: 2, text: '写出下列词语的近义词：漂亮—（  ）  随意—（  ）', answer: '美丽、随便', explanation: '近义词意思相近即可。' },
      { id: 'p016q10', type: '填空题', score: 2, text: '写出下列词语的反义词：承认—（  ）  随意—（  ）', answer: '否认、拘束', explanation: '承认的反义词是否认，随意的反义词是拘束。' },
      { id: 'p016q11', type: '句子改写', score: 2, text: '改为"被"字句：祖父浇菜，我也浇菜。', answer: '菜被祖父浇，菜也被我浇。', explanation: '将宾语"菜"提前，加"被"字。' },
      { id: 'p016q12', type: '句子改写', score: 2, text: '修改病句：我估计他今天大概不会来了。', answer: '我估计他今天不会来了。（或：我断定他今天大概不会来了——不通。应为：我估计他今天不会来了。/我断定他今天不会来了。）', explanation: '"估计"和"大概"重复，删去其一。' },
      { id: 'p016q13', type: '句子改写', score: 2, text: '改为陈述句：这不就是伟大的奇观吗？', answer: '这就是伟大的奇观。', explanation: '反问句改陈述句：去掉"难道/岂"，"不"改为肯定，去掉语气词。' },
      { id: 'p016q14', type: '句子改写', score: 2, text: '缩句：花园里开满了五颜六色的美丽花朵。', answer: '花园里开满了花朵。', explanation: '保留主语中心语"花园"、谓语"开满了"、宾语中心语"花朵"。' },
      { id: 'p016q15', type: '句子改写', score: 2, text: '用关联词合并句子：祖父在园子里干活。我在园子里玩耍。', answer: '祖父在园子里干活，而我在园子里玩耍。', explanation: '用"而"表示转折/并列关系。' },

      // 二、按课文内容填空（共10分）
      { id: 'p016q16', type: '填空题', score: 2, text: '《祖父的园子》选自____的小说《____》。', answer: '萧红、呼兰河传', explanation: '萧红的长篇小说《呼兰河传》。' },
      { id: 'p016q17', type: '填空题', score: 2, text: '《月是故乡明》的作者是____，表达了作者____的感情。', answer: '季羡林、思乡', explanation: '季羡林借月抒发思乡之情。' },
      { id: 'p016q18', type: '填空题', score: 2, text: '《梅花魂》中"魂"指的是____，梅花象征了____。', answer: '精神、中华民族的精神', explanation: '梅花魂即梅花精神，象征中华民族不屈不挠的精神。' },
      { id: 'p016q19', type: '填空题', score: 2, text: '《古诗三首》中《四时田园杂兴》（其三十一）的作者是____代____，诗中描写了____的情景。', answer: '宋、范成大、乡村农民昼耘夜织', explanation: '范成大描写了农村初夏时节的劳动场景。' },
      { id: 'p016q20', type: '填空题', score: 2, text: '"童孙未解供耕织，______________。"这句诗表现了儿童的天真可爱。', answer: '也傍桑阴学种瓜', explanation: '小孩子虽不会耕织，也模仿大人种瓜。' },

      // 三、阅读理解（共30分）
      { id: 'p016q21', type: '阅读理解', score: 10, text: '阅读《祖父的园子》选段，回答问题：从选段中你体会到"我"在园子里有怎样的感受？', passage: '花开了，就像睡醒了似的。鸟飞了，就像在天上逛似的。虫子叫了，就像在说话似的。一切都活了，要做什么，就做什么。要怎么样，就怎么样，都是自由的。', answer: '"我"在园子里感到无比自由、快乐。一切事物都是自由的、充满生机的，反映了"我"无忧无虑的童年生活。', explanation: '从"自由""要做什么就做什么"等词句体会。' },
      { id: 'p016q22', type: '阅读理解', score: 10, text: '阅读短文，回答问题：作者为什么说"月是故乡明"？', passage: '我在这广阔的世界上漂泊，看过许许多多的月亮。在风光旖旎的瑞士莱芒湖上，在平沙无垠的非洲大沙漠中，在碧波万顷的大海中，在巍峨雄奇的高山上，我都看到过月亮。但是，看到他们，我就立刻想到我故乡中那个苇坑上面和水中的那个小月亮。', answer: '因为无论在什么地方看到的月亮，都比不上故乡的月亮令作者怀念。故乡的月亮承载着作者对故乡的思念和热爱，所以"月是故乡明"。', explanation: '理解"月是故乡明"是思乡之情的表达，不是客观事实。' },
      { id: 'p016q23', type: '阅读理解', score: 10, text: '阅读《梅花魂》选段，回答问题：外祖父为什么那么珍爱梅花图？', passage: '旁的 花，大抵是春暖才开花。她却不一样，愈是寒冷，愈是风欺雪压，花开得愈精神、愈秀气。她是最有品格、最有灵魂、最有骨气的！', answer: '因为梅花愈冷愈开，最有品格、最有灵魂、最有骨气，外祖父把梅花当作中华民族精神的象征，他珍爱梅花就是热爱祖国。', explanation: '梅花象征不屈不挠的民族精神，外祖父借梅花表达爱国之情。' },

      // 四、作文（共30分）
      { id: 'p016q24', type: '作文', score: 30, text: '你的童年中一定有许多有趣的记忆吧？请以"童年的趣事"为题，写一篇不少于400字的作文。要求：内容具体，感情真挚，语句通顺。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '选择一件有趣的童年往事，写清过程，突出"趣"。' }
    ]
  },

  /* ============================== 数学六年级上册第三单元 单元卷 ============================== */
  {
    id: 'p017',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第三单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、填空题（每题4分，共20分）
      { id: 'p017q1', type: '填空题', score: 4, text: '分数除法的意义与整数除法相同，就是已知____与____，求____的运算；一个数除以分数，等于这个数乘这个分数的____。', answer: '两个因数的积、其中一个因数、另一个因数；倒数', explanation: '除法是乘法的逆运算。除以一个数等于乘这个数的倒数（0除外）。' },
      { id: 'p017q2', type: '填空题', score: 4, text: '2/3的倒数是____，1又1/4的倒数是____；a÷b=a×____（b≠0）。', answer: '3/2、4/5、1/b', explanation: '求倒数方法：分子分母颠倒。1又1/4=5/4，倒数4/5。除以b等于乘b的倒数1/b。' },
      { id: 'p017q3', type: '填空题', score: 4, text: '3/4÷1/2=____，5/6÷5/3=____，一根绳子长3/4米截成每段1/8米可以截成____段。', answer: '3/2（1又1/2）、1/2、6', explanation: '3/4×2/1=3/2，5/6×3/5=1/2，3/4÷1/8=3/4×8=6段。' },
      { id: 'p017q4', type: '填空题', score: 4, text: '一个数的2/5是8，这个数是____；甲数是12，乙数是甲数的3/4，乙数是____，甲数是乙数的____。', answer: '20、9、4/3', explanation: '8÷2/5=8×5/2=20；12×3/4=9，12÷9=4/3。' },
      { id: 'p017q5', type: '填空题', score: 4, text: '在○里填上">""<"或"="：5/6÷3○5/6  5/6÷1/3○5/6', answer: '<、>', explanation: '除以大于1的数，商小于被除数；除以小于1的数，商大于被除数。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p017q11', type: '选择题', score: 2, text: '下列算式中，结果最大的是（  ）', options: ['A. 3/4÷2', 'B. 3/4×2', 'C. 3/4÷1/2', 'D. 3/4×1/2'], answer: 1, explanation: 'A=3/8，B=3/2，C=3/2，D=3/8。B和C结果相同且最大，选B。' },
      { id: 'p017q12', type: '选择题', score: 2, text: '一个数除以1/5，就是把这个数（  ）', options: ['A. 缩小到原来的1/5', 'B. 扩大到原来的5倍', 'C. 缩小5倍', 'D. 不变'], answer: 1, explanation: '除以1/5等于乘5，扩大5倍。' },
      { id: 'p017q13', type: '选择题', score: 2, text: '一根铁丝长1/2米，用去1/4米，还剩（  ）米。', options: ['A. 1/8', 'B. 1/4', 'C. 3/4', 'D. 1/3'], answer: 1, explanation: '1/2-1/4=1/4米。' },
      { id: 'p017q14', type: '选择题', score: 2, text: '甲数是24，是乙数的2/3，乙数是（  ）', options: ['A. 16', 'B. 36', 'C. 24', 'D. 48'], answer: 1, explanation: '24÷2/3=24×3/2=36。' },
      { id: 'p017q15', type: '选择题', score: 2, text: '与12÷4/5相等的算式是（  ）', options: ['A. 12×4/5', 'B. 12×5/4', 'C. 12÷5/4', 'D. 4/5÷12'], answer: 1, explanation: '12÷4/5=12×5/4。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p017q16', type: '判断题', score: 2, text: '两个真分数相除，商一定大于被除数。（  ）', answer: '√', explanation: '真分数小于1，除以小于1的数，商大于被除数。' },
      { id: 'p017q17', type: '判断题', score: 2, text: '0除以任何数都得0。（  ）', answer: '×', explanation: '0不能作除数，应该说0除以任何非零数都得0。' },
      { id: 'p017q18', type: '判断题', score: 2, text: '一个数除以分数的商一定大于这个数。（  ）', answer: '×', explanation: '如果除以假分数（≥1），商小于或等于原数。' },
      { id: 'p017q19', type: '判断题', score: 2, text: '1的倒数是1，0没有倒数。（  ）', answer: '√', explanation: '1×1=1所以1的倒数是1，0乘任何数都不等于1，0没有倒数。' },
      { id: 'p017q20', type: '判断题', score: 2, text: '甲数的1/3等于乙数的1/4，甲数小于乙数。（  ）', answer: '√', explanation: '甲×1/3=乙×1/4，甲/乙=3/4<1，所以甲<乙。' },

      // 四、计算题（共30分）
      { id: 'p017q21', type: '计算题', score: 5, text: '计算：5/8÷5/6', answer: '3/4', explanation: '5/8÷5/6=5/8×6/5=6/8=3/4。' },
      { id: 'p017q22', type: '计算题', score: 5, text: '计算：2/3÷4/9', answer: '3/2', explanation: '2/3÷4/9=2/3×9/4=18/12=3/2。' },
      { id: 'p017q23', type: '计算题', score: 5, text: '计算：7/12÷7/8', answer: '2/3', explanation: '7/12÷7/8=7/12×8/7=8/12=2/3。' },
      { id: 'p017q24', type: '计算题', score: 5, text: '解方程：x×3/4=15', answer: 'x=20', explanation: 'x=15÷3/4=15×4/3=20。' },
      { id: 'p017q25', type: '计算题', score: 5, text: '解方程：2/5÷x=4', answer: 'x=1/10', explanation: 'x=2/5÷4=2/5×1/4=2/20=1/10。' },
      { id: 'p017q26', type: '计算题', score: 5, text: '计算：3/4÷(1/2+1/4)', answer: '1', explanation: '1/2+1/4=3/4，3/4÷3/4=1。' },

      // 五、应用题（共30分）
      { id: 'p017q27', type: '应用题', score: 10, text: '一块地的1/3是1/5公顷，这块地有多少公顷？', answer: '3/5公顷', explanation: '1/5÷1/3=1/5×3=3/5公顷。已知一个数的几分之几是多少求这个数用除法。' },
      { id: 'p017q28', type: '应用题', score: 10, text: '小明看一本书，已看了全书的2/5，正好看了60页，这本书一共有多少页？', answer: '150页', explanation: '60÷2/5=60×5/2=150页。已知一个数的几分之几是多少求这个数用除法。' },
      { id: 'p017q29', type: '应用题', score: 10, text: '甲乙两地相距120千米，一辆汽车已行了全程的3/4，还剩多少千米？', answer: '30千米', explanation: '120×(1-3/4)=120×1/4=30千米。' }
    ]
  },

  /* ============================== 英语六年级上册第二单元 单元卷 ============================== */
  {
    id: 'p018',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第二单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p018q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. bus', 'B. bike', 'C. taxi', 'D. subway'], answer: 3, explanation: '听力考查核心词汇subway（地铁）。' },
      { id: 'p018q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. turn', 'B. cross', 'C. stop', 'D. wait'], answer: 0, explanation: '听力考查核心词汇turn（转弯）。' },
      { id: 'p018q3', type: '听力选择', score: 2, text: '选出与所听内容相符的图片选项：I go to school by bus.', options: ['A. 一辆公共汽车', 'B. 一辆自行车', 'C. 一列地铁', 'D. 一辆出租车'], answer: 0, explanation: 'by bus意为"乘公共汽车"。' },
      { id: 'p018q4', type: '听力选择', score: 2, text: '选出正确的答语：How do you come to school?', options: ['A. By bus.', 'B. At 7:00.', 'C. It\'s far.', 'D. Yes, I do.'], answer: 0, explanation: 'How问方式，回答By bus。' },
      { id: 'p018q5', type: '听力选择', score: 2, text: '选出正确的答语：How does Amy go to the park?', options: ['A. She goes by bike.', 'B. She goes at 8:00.', 'C. She is a student.', 'D. Yes, she does.'], answer: 0, explanation: 'How问方式，回答She goes by bike。' },
      { id: 'p018q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. Stop at a red light.', 'B. Wait at a yellow light.', 'C. Go at a green light.', 'D. Slow down at a yellow light.'], answer: 0, explanation: '听力考查交通规则核心句。' },
      { id: 'p018q7', type: '听力选择', score: 2, text: '选出正确的答语：Where is the post office?', options: ['A. It\'s near the hospital.', 'B. By bike.', 'C. At 8:00.', 'D. Yes, it is.'], answer: 0, explanation: 'Where问地点，回答It\'s near the hospital。' },
      { id: 'p018q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. plane', 'B. train', 'C. ship', 'D. ferry'], answer: 1, explanation: '听力考查核心词汇train（火车）。' },
      { id: 'p018q9', type: '听力选择', score: 2, text: '选出正确的答语：Can I go by bike?', options: ['A. Yes, you can.', 'B. No, I don\'t.', 'C. By bus.', 'D. It\'s far.'], answer: 0, explanation: 'Can I...?肯定回答Yes, you can。' },
      { id: 'p018q10', type: '听力选择', score: 2, text: '选出你所听到的交通方式：', options: ['A. on foot', 'B. by car', 'C. by plane', 'D. by ship'], answer: 0, explanation: '听力考查on foot（步行）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p018q11', type: '词汇填空', score: 2, text: 'I go to school by s____（地铁）.', answer: 'subway', explanation: 'subway意为"地铁"。' },
      { id: 'p018q12', type: '词汇填空', score: 2, text: 'Turn l____（左边）at the cinema.', answer: 'left', explanation: 'turn left意为"左转"。' },
      { id: 'p018q13', type: '词汇填空', score: 2, text: 'Slow down and s____（停）at a yellow light.', answer: 'stop', explanation: 'stop意为"停"。黄灯减速停车。' },
      { id: 'p018q14', type: '词汇填空', score: 2, text: 'We must pay a____（注意力）to the traffic lights.', answer: 'attention', explanation: 'pay attention to意为"注意"。' },
      { id: 'p018q15', type: '词汇填空', score: 2, text: 'Don\'t go at the r____（红色的）light.', answer: 'red', explanation: '红灯停，不能闯红灯。' },
      { id: 'p018q16', type: '词汇填空', score: 2, text: 'I often go to the park on f____（步行）.', answer: 'foot', explanation: 'on foot意为"步行"。' },
      { id: 'p018q17', type: '词汇填空', score: 2, text: 'The hospital is n____（在……附近）the bookstore.', answer: 'near', explanation: 'near意为"在……附近"。' },
      { id: 'p018q18', type: '词汇填空', score: 2, text: 'You can take the No. 57 b____（公共汽车）.', answer: 'bus', explanation: 'bus意为"公共汽车"。' },
      { id: 'p018q19', type: '词汇填空', score: 2, text: 'In China, people drive on the r____（右边）side.', answer: 'right', explanation: '中国靠右行驶，right意为"右边"。' },
      { id: 'p018q20', type: '词汇填空', score: 2, text: 'We must look left and r____（右边）before crossing the road.', answer: 'right', explanation: '过马路前要左右看。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p018q21', type: '单项选择', score: 2, text: '—How do you come to school? —I come ____ foot.', options: ['A. by', 'B. on', 'C. at', 'D. in'], answer: 1, explanation: '步行用on foot，其他交通方式用by。' },
      { id: 'p018q22', type: '单项选择', score: 2, text: 'I usually go to school ____ bus.', options: ['A. by', 'B. on', 'C. at', 'D. in'], answer: 0, explanation: '乘公共汽车用by bus。' },
      { id: 'p018q23', type: '单项选择', score: 2, text: '____ at a red light.', options: ['A. Go', 'B. Wait', 'C. Stop', 'D. Slow down'], answer: 2, explanation: '红灯停，Stop at a red light。' },
      { id: 'p018q24', type: '单项选择', score: 2, text: '____ at a green light.', options: ['A. Go', 'B. Stop', 'C. Wait', 'D. Slow down'], answer: 0, explanation: '绿灯行，Go at a green light。' },
      { id: 'p018q25', type: '单项选择', score: 2, text: 'How ____ Amy go to the park?', options: ['A. do', 'B. does', 'C. is', 'D. are'], answer: 1, explanation: 'Amy是第三人称单数，用does。' },
      { id: 'p018q26', type: '单项选择', score: 2, text: 'You must ____ the traffic rules.', options: ['A. follow', 'B. follows', 'C. following', 'D. to follow'], answer: 0, explanation: 'must后面接动词原形follow。' },
      { id: 'p018q27', type: '单项选择', score: 2, text: 'The bookstore is ____ the hospital.', options: ['A. near', 'B. far', 'C. by', 'D. on'], answer: 0, explanation: 'near the hospital意为"在医院附近"。' },
      { id: 'p018q28', type: '单项选择', score: 2, text: 'Let ____ go to the nature park by bus.', options: ['A. we', 'B. us', 'C. our', 'D. ours'], answer: 1, explanation: 'Let us = Let\'s，let后接宾格us。' },
      { id: 'p018q29', type: '单项选择', score: 2, text: 'Don\'t ____ at a red light.', options: ['A. go', 'B. going', 'C. goes', 'D. to go'], answer: 0, explanation: 'Don\'t后面接动词原形。' },
      { id: 'p018q30', type: '单项选择', score: 2, text: 'I ____ to school by bike every day.', options: ['A. come', 'B. comes', 'C. coming', 'D. to come'], answer: 0, explanation: 'I用动词原形come。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p018q31', type: '阅读理解', score: 5, text: '阅读短文回答：How does Amy go to school?', passage: 'Hello! I am Amy. I live near the school. So I go to school on foot. My father works in a hospital. It is far from our home. He goes to work by subway. My mother is a teacher. She goes to work by bus.', answer: 'She goes to school on foot.', explanation: '从原文"I go to school on foot"得知。' },
      { id: 'p018q32', type: '阅读理解', score: 5, text: '阅读短文回答：How does Amy\'s father go to work?', passage: 'Hello! I am Amy. I live near the school. So I go to school on foot. My father works in a hospital. It is far from our home. He goes to work by subway. My mother is a teacher. She goes to work by bus.', answer: 'He goes to work by subway.', explanation: '从原文"He goes to work by subway"得知。' },
      { id: 'p018q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy\'s mother goes to work on foot.', passage: 'Hello! I am Amy. I live near the school. So I go to school on foot. My father works in a hospital. It is far from our home. He goes to work by subway. My mother is a teacher. She goes to work by bus.', answer: 'F', explanation: '原文说"She goes to work by bus"，不是on foot。' },
      { id: 'p018q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy lives near the school.', passage: 'Hello! I am Amy. I live near the school. So I go to school on foot. My father works in a hospital. It is far from our home. He goes to work by subway. My mother is a teacher. She goes to work by bus.', answer: 'T', explanation: '原文说"I live near the school"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p018q35', type: '写作', score: 20, text: '请用英语写一段话，介绍你和你的家人平时怎样出行（不少于5句话）。提示：How do you go to school? How do your parents go to work? Why?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型How do you come to school?和交通方式表达by.../on foot。' }
    ]
  },

  /* ============================== 语文五年级上册第一次月考 月考卷 ============================== */
  {
    id: 'p019',
    subject: '语文',
    grade: '五年级',
    type: '月考卷',
    region: '全国',
    title: '人教版五年级语文上册第一次月考卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、基础知识（共24分）
      { id: 'p019q1', type: '填空题', score: 2, text: '看拼音写词语：bái hè（  ）', answer: '白鹤', explanation: '"鹤"字左右结构，注意笔画。' },
      { id: 'p019q2', type: '填空题', score: 2, text: '看拼音写词语：xián qì（  ）', answer: '嫌弃', explanation: '"嫌"字女字旁加"兼"。' },
      { id: 'p019q3', type: '填空题', score: 2, text: '看拼音写词语：luò kuǎn（  ）', answer: '落款', explanation: '"款"字左右结构，注意"示"部。' },
      { id: 'p019q4', type: '选择题', score: 2, text: '下列加点字读音全部正确的一项是（  ）', options: ['A. 嫌(xián)弃  框(kuàng)架', 'B. 嫌(xiǎn)弃  框(kuāng)架', 'C. 嫌(xián)弃  框(kuāng)架', 'D. 嫌(xiǎn)弃  框(kuàng)架'], answer: 0, explanation: '"嫌"读xián，"框"读kuàng。' },
      { id: 'p019q5', type: '选择题', score: 2, text: '"白鹭是一首精巧的诗"使用的修辞手法是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 排比', 'D. 夸张'], answer: 0, explanation: '把白鹭比作诗，是比喻。' },
      { id: 'p019q6', type: '填空题', score: 2, text: '比一比，再组词：嫌（  ）  谦（  ）', answer: '嫌弃、谦虚', explanation: '"嫌"女字旁，"谦"言字旁。' },
      { id: 'p019q7', type: '填空题', score: 2, text: '把成语补充完整：美中（  ）足  （  ）蚌相争', answer: '不、鹬', explanation: '美中不足、鹬蚌相争。' },
      { id: 'p019q8', type: '选择题', score: 2, text: '下列句子中，没有语病的是（  ）', options: ['A. 我大概用了整整两个小时才完成作业。', 'B. 我们要养成认真审题的好习惯。', 'C. 老师布置的作业，我差不多全做完了。', 'D. 公园里到处可以看到五颜六色的红花。'], answer: 1, explanation: 'A"大概"和"整整"矛盾，C"差不多"和"全"矛盾，D"五颜六色"与"红花"矛盾。' },
      { id: 'p019q9', type: '句子改写', score: 2, text: '改为"被"字句：桂花迷人的香气吸引了所有人。', answer: '所有人被桂花迷人的香气吸引了。', explanation: '把宾语"所有人"提前，加"被"字。' },
      { id: 'p019q10', type: '句子改写', score: 2, text: '改为反问句：这比山还高的情谊，我们不能忘怀。', answer: '这比山还高的情谊，我们怎么能忘怀呢？', explanation: '反问句用"怎么能……呢"加强语气。' },
      { id: 'p019q11', type: '句子改写', score: 2, text: '缩句：院子里那棵高大的桂花树开满了金黄色的小花。', answer: '桂花树开满了小花。', explanation: '保留主语中心语"桂花树"、谓语"开满了"、宾语中心语"小花"。' },
      { id: 'p019q12', type: '句子改写', score: 2, text: '修改病句：我的作业本上写满了密密麻麻的一行行字。', answer: '我的作业本上写满了密密麻麻的字。（或：我的作业本上写满了一行行字。）', explanation: '"密密麻麻"和"一行行"重复，删去其一。' },

      // 二、按课文内容填空（共12分）
      { id: 'p019q13', type: '填空题', score: 2, text: '《白鹭》的作者是____，文章赞美了白鹭的____美。', answer: '郭沫若、精巧', explanation: '郭沫若赞美白鹭是一首精巧的诗。' },
      { id: 'p019q14', type: '填空题', score: 2, text: '"落花生"告诉我们的道理是：人要做____，不要做____，而对别人没有好处的人。', answer: '有用的人、只讲体面', explanation: '父亲借花生说理，做人要像花生一样有用。' },
      { id: 'p019q15', type: '填空题', score: 2, text: '《桂花雨》中母亲说"这里的桂花再香，也比不上家乡院子里的桂花"，表达了____之情。', answer: '思乡', explanation: '母亲思念家乡，觉得家乡的桂花最香。' },
      { id: 'p019q16', type: '古诗文填空', score: 2, text: '垂緌饮清露，______________。', answer: '流响出疏桐', explanation: '虞世南《蝉》。' },
      { id: 'p019q17', type: '古诗文填空', score: 2, text: '______________，不拘一格降人材。', answer: '我劝天公重抖擞', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p019q18', type: '古诗文填空', score: 2, text: '问渠那得清如许？______________。', answer: '为有源头活水来', explanation: '朱熹《观书有感》。不断学习才能保持思想常新。' },

      // 三、阅读理解（共34分）
      { id: 'p019q19', type: '阅读理解', score: 12, text: '阅读《落花生》选段，回答问题：父亲的话有几层意思？分别是什么？', passage: '父亲说："花生的好处很多，有一样最可贵。它的果实埋在地里，不像桃子、石榴、苹果那样，把鲜红嫩绿的果实高高地挂在枝上，使人一见就生爱慕之心。你们看它矮矮地长在地上，等到成熟了，也不能立刻分辨出来它有没有果实，必须挖起来才知道。"', answer: '两层意思：第一层，花生不炫耀、不张扬，朴实无华；第二层，做人也要像花生一样，做有用的人，不要做只讲体面而对别人没有好处的人。', explanation: '从"不像……"对比和"最可贵"关键词理解。' },
      { id: 'p019q20', type: '阅读理解', score: 11, text: '阅读《白鹭》选段，回答问题：作者为什么说"白鹭是一首精巧的诗"？', passage: '白鹭是一首精巧的诗。色素的配合，身段的大小，一切都很适宜。白鹤太大而嫌生硬，即如粉红的朱鹭或灰色的苍鹭，也觉得大了一些，而且太不寻常了。然而白鹭却因为它的常见，而被人忘却了它的美。', answer: '因为白鹭色素配合适宜，身段大小适宜，一切都很恰到好处，像精心构思的诗一样精巧。虽然常见，但其美被人忽视，更说明它的美是含蓄的、内敛的。', explanation: '从"色素的配合""身段的大小""一切都很适宜"来理解。' },
      { id: 'p019q21', type: '阅读理解', score: 11, text: '阅读短文，回答问题：母亲为什么觉得家乡的桂花最香？', passage: '中秋节前后，就是故乡的桂花季节。一提到桂花，那股子香味就仿佛闻到了。小时候，我对无论什么花，都不懂得欣赏。尽管父亲说"兰秀深林，不以无人而不芳"，我却偏偏喜欢桂花。秋天，我常到那棵桂花树下去。我家前面是一片稻田，到了秋天，稻子成熟了，微风吹过，翻起金色的波浪。这时候，桂花也开了，那香气真是迷人。', answer: '因为家乡的桂花承载着母亲对故乡的思念和美好记忆。桂花香不仅是嗅觉上的感受，更是情感上的寄托，所以母亲觉得哪里都比不上家乡的桂花香。', explanation: '理解"月是故乡明"式思乡情感，香与不香不完全是客观感受，更包含主观情感。' },

      // 四、作文（共30分）
      { id: 'p019q22', type: '作文', score: 30, text: '生活中，你最喜欢什么？是一朵花、一棵树、一只小动物，还是某个人？请以"我最喜欢____"为题，写一篇不少于400字的作文。要求：把题目补充完整，内容具体，感情真挚，语句通顺。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '选择一个真心喜欢的对象，写清喜欢的原因和具体事例。' }
    ]
  },

  /* ============================== 数学四年级上册第一次月考 月考卷 ============================== */
  {
    id: 'p020',
    subject: '数学',
    grade: '四年级',
    type: '月考卷',
    region: '全国',
    title: '人教版四年级数学上册第一次月考卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p020q1', type: '填空题', score: 2, text: '10个一百万是____，10个一千万是____。', answer: '一千万、一亿', explanation: '每相邻两个计数单位之间的进率是10。' },
      { id: 'p020q2', type: '填空题', score: 2, text: '从个位起，第____位是百万位，第____位是十亿位。', answer: '七、十', explanation: '个位第1位，百万位第7位，十亿位第10位。' },
      { id: 'p020q3', type: '填空题', score: 2, text: '一个数由4个亿、6个百万和9个千组成，这个数写作____。', answer: '4060009000', explanation: '4亿=400000000，6百万=6000000，9千=9000，合起来4060009000。' },
      { id: 'p020q4', type: '填空题', score: 2, text: '200060000读作____。', answer: '二亿零六万', explanation: '亿级读"二亿"，万级"0006"读"零六万"，个级全是0不读。' },
      { id: 'p020q5', type: '填空题', score: 2, text: '3公顷=____平方米  50000平方米=____公顷', answer: '30000、5', explanation: '1公顷=10000平方米。' },
      { id: 'p020q6', type: '填空题', score: 2, text: '边长是____米的正方形面积是1公顷，边长是____米的正方形面积是1平方千米。', answer: '100、1000', explanation: '100×100=10000平方米=1公顷，1000×1000=1000000平方米=1平方千米。' },
      { id: 'p020q7', type: '填空题', score: 2, text: '6平方千米=____公顷  800公顷=____平方千米', answer: '600、8', explanation: '1平方千米=100公顷。' },
      { id: 'p020q8', type: '填空题', score: 2, text: '在○里填上">""<"或"="：5公顷○49000平方米', answer: '>', explanation: '5公顷=50000平方米>49000平方米。' },
      { id: 'p020q9', type: '填空题', score: 2, text: '一个数省略亿位后面的尾数约是7亿，这个数最大是____，最小是____。', answer: '749999999、650000000', explanation: '最大：千万位是4其余各位是9；最小：千万位是5其余各位是0。' },
      { id: 'p020q10', type: '填空题', score: 2, text: '一个长方形操场长200米、宽100米，面积是____平方米，合____公顷。', answer: '20000、2', explanation: '200×100=20000平方米=2公顷。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p020q11', type: '选择题', score: 2, text: '下面各数中，一个零也不读的是（  ）', options: ['A. 6009000', 'B. 6090000', 'C. 6000900', 'D. 60900000'], answer: 0, explanation: '6009000读"六百万九千"，万级末尾0和个级末尾0都不读，一个零也不读。' },
      { id: 'p020q12', type: '选择题', score: 2, text: '一个操场的面积大约是（  ）', options: ['A. 4000平方厘米', 'B. 4000平方分米', 'C. 4000平方米', 'D. 4000公顷'], answer: 2, explanation: '操场面积用平方米作单位比较合适。' },
      { id: 'p020q13', type: '选择题', score: 2, text: '9□8765000≈9亿，□里最大可以填（  ）', options: ['A. 0', 'B. 4', 'C. 5', 'D. 9'], answer: 1, explanation: '省略亿后面尾数看千万位，<5舍去，最大填4。' },
      { id: 'p020q14', type: '选择题', score: 2, text: '一块正方形菜地边长500米，面积是（  ）', options: ['A. 25公顷', 'B. 2500平方米', 'C. 25平方千米', 'D. 250000公顷'], answer: 0, explanation: '500×500=250000平方米=25公顷。' },
      { id: 'p020q15', type: '选择题', score: 2, text: '下列说法正确的是（  ）', options: ['A. 1平方千米=1000平方米', 'B. 1公顷=100平方米', 'C. 1平方千米=100公顷', 'D. 1公顷=10000平方千米'], answer: 2, explanation: '1平方千米=100公顷=1000000平方米，1公顷=10000平方米。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p020q16', type: '判断题', score: 2, text: '一个数的近似数一定比准确数小。（  ）', answer: '×', explanation: '近似数可能比准确数大，也可能比准确数小。' },
      { id: 'p020q17', type: '判断题', score: 2, text: '测量土地面积通常用公顷或平方千米作单位。（  ）', answer: '√', explanation: '测量较大土地面积用公顷或平方千米。' },
      { id: 'p020q18', type: '判断题', score: 2, text: '最大的八位数比最小的九位数小1。（  ）', answer: '√', explanation: '最大八位数99999999，最小九位数100000000，差1。' },
      { id: 'p020q19', type: '判断题', score: 2, text: '3平方千米比300公顷大。（  ）', answer: '×', explanation: '3平方千米=300公顷，一样大。' },
      { id: 'p020q20', type: '判断题', score: 2, text: '读数时，每级中间不管有几个0，都只读一个零。（  ）', answer: '√', explanation: '这是读数规则：中间连续的0只读一个零。' },

      // 四、计算题（共30分）
      { id: 'p020q21', type: '计算题', score: 5, text: '把下面各数改写成用"万"作单位的数：7800000', answer: '780万', explanation: '去掉4个0，加上"万"字。' },
      { id: 'p020q22', type: '计算题', score: 5, text: '把下面各数改写成用"亿"作单位的数：3500000000', answer: '35亿', explanation: '去掉8个0，加上"亿"字。' },
      { id: 'p020q23', type: '计算题', score: 5, text: '省略万位后面的尾数求近似数：834560', answer: '83万', explanation: '千位是4<5，舍去。' },
      { id: 'p020q24', type: '计算题', score: 5, text: '省略亿位后面的尾数求近似数：6483000000', answer: '65亿', explanation: '千万位是8≥5，向前一位进1，64+1=65亿。' },
      { id: 'p020q25', type: '计算题', score: 5, text: '比较大小：9876500○10000000', answer: '<', explanation: '9876500是7位数，10000000是8位数，8位数大。' },
      { id: 'p020q26', type: '计算题', score: 5, text: '一块长方形土地长800米、宽500米，面积是多少平方米？合多少公顷？', answer: '400000平方米、40公顷', explanation: '800×500=400000平方米=40公顷。' },

      // 五、应用题（共30分）
      { id: 'p020q27', type: '应用题', score: 10, text: '一个森林公园占地3平方千米，其中林地面积占280公顷，其余是草地和水域。草地和水域面积是多少公顷？', answer: '20公顷', explanation: '3平方千米=300公顷，300-280=20公顷。' },
      { id: 'p020q28', type: '应用题', score: 10, text: '一个城市今年人口约680万，去年人口约635万。今年比去年大约增加了多少万人？（省略万后面的尾数）', answer: '680-635=45万人', explanation: '直接相减：680-635=45万人。' },
      { id: 'p020q29', type: '应用题', score: 10, text: '一个长方形果园长3千米、宽2千米，如果每公顷种果树400棵，这个果园一共可以种多少棵果树？', answer: '240000棵', explanation: '3×2=6平方千米=600公顷，600×400=240000棵。' }
    ]
  },

  /* ============================== 英语六年级上册第一次月考 月考卷 ============================== */
  {
    id: 'p021',
    subject: '英语',
    grade: '六年级',
    type: '月考卷',
    region: '全国',
    title: '人教版六年级英语上册第一次月考卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p021q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. science', 'B. museum', 'C. hospital', 'D. cinema'], answer: 1, explanation: '听力考查核心词汇museum（博物馆）。' },
      { id: 'p021q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. subway', 'B. taxi', 'C. ferry', 'D. plane'], answer: 0, explanation: '听力考查核心词汇subway（地铁）。' },
      { id: 'p021q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：Turn right at the bookstore.', options: ['A. 在书店左转', 'B. 在书店右转', 'C. 在医院右转', 'D. 在电影院左转'], answer: 1, explanation: 'Turn right=右转，at the bookstore=在书店。' },
      { id: 'p021q4', type: '听力选择', score: 2, text: '选出正确的答语：Where is the cinema?', options: ['A. By bus.', 'B. It\'s next to the hospital.', 'C. At 7:00.', 'D. Yes, it is.'], answer: 1, explanation: 'Where问地点，回答It\'s next to the hospital。' },
      { id: 'p021q5', type: '听力选择', score: 2, text: '选出正确的答语：How do you come to school?', options: ['A. By subway.', 'B. It\'s far.', 'C. At 8:00.', 'D. I like school.'], answer: 0, explanation: 'How问方式，回答By subway。' },
      { id: 'p021q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I come by bus.', 'B. I come on foot.', 'C. I come by bike.', 'D. I come by subway.'], answer: 1, explanation: '听力区分不同交通方式。' },
      { id: 'p021q7', type: '听力选择', score: 2, text: '选出正确的答语：Is the museum far from here?', options: ['A. Yes, it is.', 'B. By bike.', 'C. On Monday.', 'D. It\'s big.'], answer: 0, explanation: 'Is...?肯定回答Yes, it is。' },
      { id: 'p021q8', type: '听力选择', score: 2, text: '选出你所听到的交通方式：', options: ['A. by bus', 'B. on foot', 'C. by taxi', 'D. by subway'], answer: 3, explanation: '听力考查by subway。' },
      { id: 'p021q9', type: '听力选择', score: 2, text: '选出正确的答语：What does she do?', options: ['A. She is a teacher.', 'B. By car.', 'C. She is kind.', 'D. At school.'], answer: 0, explanation: 'What does she do?问职业，回答She is a teacher。' },
      { id: 'p021q10', type: '听力选择', score: 2, text: '选出你所听到的地点：', options: ['A. bookstore', 'B. hospital', 'C. cinema', 'D. post office'], answer: 2, explanation: '听力考查核心地点词汇cinema（电影院）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p021q11', type: '词汇填空', score: 2, text: 'The science m____（博物馆）is near the park.', answer: 'museum', explanation: 'museum意为"博物馆"。' },
      { id: 'p021q12', type: '词汇填空', score: 2, text: 'Turn r____（右边）at the cinema.', answer: 'right', explanation: 'turn right意为"右转"。' },
      { id: 'p021q13', type: '词汇填空', score: 2, text: 'The h____（医院）is next to the bookstore.', answer: 'hospital', explanation: 'hospital意为"医院"。' },
      { id: 'p021q14', type: '词汇填空', score: 2, text: 'I go to school by s____（地铁）.', answer: 'subway', explanation: 'subway意为"地铁"。' },
      { id: 'p021q15', type: '词汇填空', score: 2, text: 'Don\'t go at a r____（红色的）light.', answer: 'red', explanation: '红灯不能通行。' },
      { id: 'p021q16', type: '词汇填空', score: 2, text: 'The bookstore is f____（远的）from here.', answer: 'far', explanation: 'far意为"远的"。' },
      { id: 'p021q17', type: '词汇填空', score: 2, text: 'S____（停下来）and wait at a red light.', answer: 'Stop', explanation: 'stop意为"停下来"。' },
      { id: 'p021q18', type: '词汇填空', score: 2, text: 'I come to school on f____（步行）.', answer: 'foot', explanation: 'on foot意为"步行"。' },
      { id: 'p021q19', type: '词汇填空', score: 2, text: 'She is very h____（有帮助的）.', answer: 'helpful', explanation: 'helpful意为"有帮助的"，复习Unit 1词汇。' },
      { id: 'p021q20', type: '词汇填空', score: 2, text: 'My Chinese teacher is very k____（和蔼的）.', answer: 'kind', explanation: 'kind意为"和蔼的"，复习Unit 1词汇。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p021q21', type: '单项选择', score: 2, text: '—Where is the hospital? —It\'s ____ the cinema.', options: ['A. near', 'B. by', 'C. at', 'D. on'], answer: 0, explanation: 'near the cinema意为"在电影院附近"。' },
      { id: 'p021q22', type: '单项选择', score: 2, text: '—How can I ____ the museum? —Turn left at the bookstore.', options: ['A. get to', 'B. get', 'C. go', 'D. come'], answer: 0, explanation: 'get to+地点，意为"到达"。' },
      { id: 'p021q23', type: '单项选择', score: 2, text: 'I usually come to school ____ foot.', options: ['A. by', 'B. on', 'C. at', 'D. in'], answer: 1, explanation: '步行用on foot。' },
      { id: 'p021q24', type: '单项选择', score: 2, text: '—____ do you come to school? —By bike.', options: ['A. What', 'B. Where', 'C. How', 'D. When'], answer: 2, explanation: '对交通方式提问用How。' },
      { id: 'p021q25', type: '单项选择', score: 2, text: '____ at a yellow light.', options: ['A. Go', 'B. Stop', 'C. Slow down and wait', 'D. Run'], answer: 2, explanation: '黄灯减速等待，Slow down and wait。' },
      { id: 'p021q26', type: '单项选择', score: 2, text: '—What\'s your English teacher ____? —She is kind.', options: ['A. like', 'B. look', 'C. likes', 'D. /'], answer: 0, explanation: 'What\'s ... like?问性格特点。' },
      { id: 'p021q27', type: '单项选择', score: 2, text: 'He ____ to work by bus every day.', options: ['A. go', 'B. goes', 'C. going', 'D. to go'], answer: 1, explanation: 'He是第三人称单数，动词用goes。' },
      { id: 'p021q28', type: '单项选择', score: 2, text: 'The park is ____ the hospital and the cinema.', options: ['A. near', 'B. between', 'C. next', 'D. far'], answer: 1, explanation: 'between...and...意为"在……和……之间"。' },
      { id: 'p021q29', type: '单项选择', score: 2, text: '—Is Mr Jones strict? —____, he is.', options: ['A. No', 'B. Yes', 'C. Not', 'D. /'], answer: 1, explanation: '肯定回答用Yes。' },
      { id: 'p021q30', type: '单项选择', score: 2, text: 'Let ____ go to the science museum.', options: ['A. we', 'B. us', 'C. our', 'D. ours'], answer: 1, explanation: 'Let后接宾格us。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p021q31', type: '阅读理解', score: 5, text: '阅读短文回答：Where does Tom want to go?', passage: 'Hello! I am Tom. I want to go to the science museum. The museum is near the hospital. I can go by bus. First, I go straight. Then, I turn left at the cinema. The museum is on the right. It takes about 20 minutes.', answer: 'He wants to go to the science museum.', explanation: '从原文"I want to go to the science museum"得知。' },
      { id: 'p021q32', type: '阅读理解', score: 5, text: '阅读短文回答：How does Tom go to the museum?', passage: 'Hello! I am Tom. I want to go to the science museum. The museum is near the hospital. I can go by bus. First, I go straight. Then, I turn left at the cinema. The museum is on the right. It takes about 20 minutes.', answer: 'He goes by bus.', explanation: '从原文"I can go by bus"得知。' },
      { id: 'p021q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：The museum is far from the hospital.', passage: 'Hello! I am Tom. I want to go to the science museum. The museum is near the hospital. I can go by bus. First, I go straight. Then, I turn left at the cinema. The museum is on the right. It takes about 20 minutes.', answer: 'F', explanation: '原文说"The museum is near the hospital"，是near不是far。' },
      { id: 'p021q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Tom turns right at the cinema.', passage: 'Hello! I am Tom. I want to go to the science museum. The museum is near the hospital. I can go by bus. First, I go straight. Then, I turn left at the cinema. The museum is on the right. It takes about 20 minutes.', answer: 'F', explanation: '原文说"I turn left at the cinema"，是left不是right。' },

      // 五、写作（共20分）
      { id: 'p021q35', type: '写作', score: 20, text: '请用英语写一段话，介绍你从家到学校的路线（不少于5句话）。提示：Where is your school? How do you go to school? What can you see on the way?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用Unit 1-2核心句型：描述人物性格、交通方式和路线指路。' }
    ]
  },

  /* ============================== 四年级语文上册第二单元 单元卷 ============================== */
  {
    id: 'p022',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      // 一、填空题（每题4分，共16分）
      { id: 'p022q1', type: '填空题', score: 4, text: '看拼音写词语：wān dòu（  ）  dòu jiá（  ）', answer: '豌豆、豆荚', explanation: '"豌"豆字旁，"荚"草字头。' },
      { id: 'p022q2', type: '填空题', score: 4, text: '《蝙蝠和雷达》中，科学家经过三次试验证明蝙蝠夜里飞行靠的不是____，而是____配合起来探路的。', answer: '眼睛、嘴和耳朵', explanation: '蝙蝠用嘴发出超声波，用耳朵接收回声。' },
      { id: 'p022q3', type: '填空题', score: 4, text: '雷达通过天线发出____，遇到障碍物就反射回来，显示在____上。', answer: '无线电波、荧光屏', explanation: '雷达模仿蝙蝠探路的原理制成。' },
      { id: 'p022q4', type: '填空题', score: 4, text: '"一个豆荚里的五粒豆"是____（国别）作家____的作品。', answer: '丹麦、安徒生', explanation: '安徒生是丹麦著名童话作家。' },
      // 二、选择题（每题4分，共12分）
      { id: 'p022q5', type: '选择题', score: 4, text: '下列说法正确的是（  ）', options: ['A. 蝙蝠夜里飞行靠眼睛', 'B. 蝙蝠夜里飞行靠嘴和耳朵配合探路', 'C. 蝙蝠探路不需要发出声音', 'D. 雷达与蝙蝠无关'], answer: 1, explanation: '蝙蝠用嘴和耳朵配合探路，雷达是模仿蝙蝠制成的。' },
      { id: 'p022q6', type: '选择题', score: 4, text: '"科学家模仿蝙蝠探路的方法"中"模仿"的意思最接近（  ）', options: ['A. 学习', 'B. 仿照', 'C. 创造', 'D. 发明'], answer: 1, explanation: '"模仿"即仿照其原理。' },
      { id: 'p022q7', type: '选择题', score: 4, text: '《一个豆荚里的五粒豆》中，给生病小女孩带来希望的是第几粒豌豆？（  ）', options: ['A. 第一粒', 'B. 第二粒', 'C. 第三粒', 'D. 第五粒'], answer: 3, explanation: '第五粒豌豆落在窗下裂缝里长出豌豆苗，给小女孩带来生命的希望。' },
      // 三、判断题（每题3分，共6分）
      { id: 'p022q8', type: '判断题', score: 3, text: '蝙蝠能在夜里飞行且不撞东西，是因为它的眼睛特别敏锐。（  ）', answer: '错误', explanation: '蝙蝠靠嘴和耳朵配合探路，不是靠眼睛。' },
      { id: 'p022q9', type: '判断题', score: 3, text: '雷达的荧光屏能让驾驶员看清前方有没有障碍物。（  ）', answer: '正确', explanation: '雷达将反射回来的无线电波显示在荧光屏上。' },
      // 四、阅读理解（共16分）
      { id: 'p022q10', type: '阅读理解', score: 16, text: '阅读选段，回答：科学家做了哪三次试验？分别说明了什么？', passage: '为了弄清楚这个问题，一百多年前，科学家做了一次试验。在一间屋子里横七竖八地拉了许多绳子，绳子上系着许多铃铛。他们把蝙蝠的眼睛蒙上，让它在屋子里飞。蝙蝠飞了几个钟头，铃铛一个也没响。科学家又做了两次试验：一次把蝙蝠的耳朵塞上，一次把蝙蝠的嘴封住，让它在屋子里飞。蝙蝠就像没头苍蝇似的到处乱撞，挂在绳子上的铃铛响个不停。', answer: '三次试验：①蒙住蝙蝠眼睛——铃铛没响，说明不靠眼睛；②塞住蝙蝠耳朵——铃铛响个不停；③封住蝙蝠嘴——铃铛响个不停。说明蝙蝠夜里飞行靠嘴和耳朵配合探路，不靠眼睛。', explanation: '通过三次对照试验，证明蝙蝠靠嘴和耳朵配合探路。' }
    ]
  },

  /* ============================== 四年级语文上册第三单元 单元卷 ============================== */
  {
    id: 'p023',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p023q1', type: '填空题', score: 4, text: '《秋晚的江上》的作者是____，《花牛歌》的作者是____。', answer: '刘大白、徐志摩', explanation: '两首都是现代诗，分别由刘大白和徐志摩创作。' },
      { id: 'p023q2', type: '填空题', score: 4, text: '《繁星》的作者是____，文中回忆了____次看星空的情景。', answer: '冰心、三', explanation: '冰心在《繁星》中回忆了在家乡、南京、海上三次看星空的情景。' },
      { id: 'p023q3', type: '填空题', score: 4, text: '《花牛歌》中花牛在草地里____、____、____、做梦。', answer: '坐、眠、走', explanation: '诗歌用四个小节写花牛的不同动作。' },
      { id: 'p023q4', type: '填空题', score: 4, text: '"归巢的鸟儿，尽管是倦了，还驮着斜阳回去"中"驮"字用了____的修辞手法。', answer: '拟人', explanation: '把鸟儿当作人来写，用"驮"字生动形象。' },
      { id: 'p023q5', type: '选择题', score: 4, text: '《秋晚的江上》描写的景物不包括（  ）', options: ['A. 归巢的鸟儿', 'B. 斜阳', 'C. 芦苇', 'D. 雪花'], answer: 3, explanation: '本诗写秋天傍晚江上景色，没有写到雪花。' },
      { id: 'p023q6', type: '选择题', score: 4, text: '"双翅一翻，把斜阳掉在江上"写出了（  ）', options: ['A. 鸟儿飞得快', 'B. 夕阳的余晖被鸟翅翻动，仿佛洒落在江上', 'C. 江上很冷', 'D. 太阳落山了'], answer: 1, explanation: '用想象把斜阳"掉"在江上，富有诗意。' },
      { id: 'p023q7', type: '选择题', score: 4, text: '《繁星》中"我仿佛看见它们在对我眨眼"运用的修辞手法是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 排比', 'D. 夸张'], answer: 1, explanation: '把星星当人写，"眨眼"是拟人。' },
      { id: 'p023q8', type: '判断题', score: 3, text: '《花牛歌》描写的是春天草地上的景象。（  ）', answer: '错误', explanation: '诗中写"白云霸占了半个天"，意境不限春天，主要写花牛的悠闲。' },
      { id: 'p023q9', type: '判断题', score: 3, text: '现代诗也叫"白话诗"，形式自由，不讲究严格的押韵。（  ）', answer: '正确', explanation: '现代诗形式自由，节奏灵活。' },
      { id: 'p023q10', type: '阅读理解', score: 16, text: '阅读《繁星》选段，回答："我"为什么觉得星星像萤火虫？表达了作者怎样的感情？', passage: '我躺在舱面上，仰望天空。深蓝色的天空里悬着无数半明半昧的星。船在动，星也在动，它们是这样低，真是摇摇欲坠呢！渐渐地我的眼睛模糊了，我好像看见无数萤火虫在我的周围飞舞。', answer: '因为"我"的眼睛渐渐模糊，星星又低又亮，在动，像萤火虫一闪一闪地飞舞，所以产生联想。表达了作者对星空的喜爱和向往，以及对美好事物的留恋之情。', explanation: '抓住"眼睛模糊""星也在动"理解联想，体会作者感情。' }
    ]
  },

  /* ============================== 四年级语文上册第四单元 单元卷 ============================== */
  {
    id: 'p024',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p024q1', type: '填空题', score: 4, text: '《盘古开天地》中，盘古用____劈开了"大鸡蛋"，轻而清的东西变成了____，重而浊的东西变成了____。', answer: '斧头、天、地', explanation: '盘古开天辟地的神话。' },
      { id: 'p024q2', type: '填空题', score: 4, text: '盘古倒下后，他的左眼变成了____，右眼变成了____。', answer: '太阳、月亮', explanation: '盘古以身化作万物。' },
      { id: 'p024q3', type: '填空题', score: 4, text: '《普罗米修斯》取自____（国别）神话。普罗米修斯从太阳神____那里拿取了火种。', answer: '古希腊、阿波罗', explanation: '希腊神话中阿波罗是太阳神。' },
      { id: 'p024q4', type: '填空题', score: 4, text: '普罗米修斯被锁在____上，忍受着____啄食肝脏的痛苦。', answer: '高加索山、鹫鹰', explanation: '宙斯惩罚普罗米修斯。' },
      { id: 'p024q5', type: '选择题', score: 4, text: '下列属于神话故事的是（  ）', options: ['A. 《蝙蝠和雷达》', 'B. 《盘古开天地》', 'C. 《爬山虎的脚》', 'D. 《观潮》'], answer: 1, explanation: '盘古开天地是神话故事。' },
      { id: 'p024q6', type: '选择题', score: 4, text: '盘古的精神最主要体现在（  ）', options: ['A. 力气很大', 'B. 勇于开创、甘于奉献', 'C. 会变化', 'D. 寿命很长'], answer: 1, explanation: '盘古开天辟地、化生万物，体现开创与奉献精神。' },
      { id: 'p024q7', type: '选择题', score: 4, text: '普罗米修斯为人类盗火，说明他具有（  ）的品质', options: ['A. 自私', 'B. 勇敢、富有同情心、不畏强权', 'C. 胆小', 'D. 贪婪'], answer: 1, explanation: '普罗米修斯为人类甘受惩罚，体现勇敢无私。' },
      { id: 'p024q8', type: '判断题', score: 3, text: '神话故事是古代劳动人民对自然现象的解释和想象。（  ）', answer: '正确', explanation: '神话反映先民对自然的认识和想象。' },
      { id: 'p024q9', type: '判断题', score: 3, text: '盘古开天地后，天地立刻就成形不再变化了。（  ）', answer: '错误', explanation: '盘古头顶天脚踏地随天地变化，过了很久才成形。' },
      { id: 'p024q10', type: '阅读理解', score: 16, text: '阅读选段，回答：盘古倒下后身体发生了哪些变化？这些想象有什么特点？', passage: '盘古倒下后，他的身体发生了巨大的变化。他呼出的气息变成了四季的风和飘动的云；他发出的声音化作了隆隆的雷声；他的左眼变成了太阳，照耀大地，他的右眼变成了月亮，给夜晚带来光明；他的肌肤变成了辽阔的大地……', answer: '变化：气息→风和云，声音→雷声，左眼→太阳，右眼→月亮，肌肤→大地。特点：想象丰富奇特，把盘古身体的各部分与自然界的事物一一对应，体现盘古化生万物的伟大奉献精神。', explanation: '抓住本体和喻体的对应关系，体会想象特点。' }
    ]
  },

  /* ============================== 四年级语文下册第一单元 单元卷 ============================== */
  {
    id: 'p025',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文下册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p025q1', type: '古诗文填空', score: 4, text: '篱落疏疏一径深，____。儿童急走追黄蝶，____。', answer: '树头新绿未成阴、飞入菜花无处寻', explanation: '杨万里《宿新市徐公店》，写暮春田园景色。' },
      { id: 'p025q2', type: '古诗文填空', score: 4, text: '梅子金黄杏子肥，____。日长篱落无人过，____。', answer: '麦花雪白菜花稀、惟有蜻蜓蛱蝶飞', explanation: '范成大《四时田园杂兴（其二十五）》，写初夏田园。' },
      { id: 'p025q3', type: '填空题', score: 4, text: '《清平乐·村居》的作者是____代____，词中"最喜小儿亡赖"中"亡赖"的意思是____。', answer: '宋、辛弃疾、顽皮淘气', explanation: '"亡赖"同"无赖"，这里指小儿顽皮可爱。' },
      { id: 'p025q4', type: '填空题', score: 4, text: '《乡下人家》的作者是____，课文按照房前屋后的____顺序描写了乡村风景。', answer: '陈醉云、空间', explanation: '课文按空间顺序描写农家风光。' },
      { id: 'p025q5', type: '选择题', score: 4, text: '"儿童急走追黄蝶"中"走"的意思是（  ）', options: ['A. 行走', 'B. 跑', 'C. 离开', 'D. 走开'], answer: 1, explanation: '古汉语中"走"是"跑"的意思。' },
      { id: 'p025q6', type: '选择题', score: 4, text: '下列诗句描写的季节与其他三项不同的是（  ）', options: ['A. 梅子金黄杏子肥', 'B. 麦花雪白菜花稀', 'C. 儿童急走追黄蝶', 'D. 惟有蜻蜓蛱蝶飞'], answer: 2, explanation: 'C项出自《宿新市徐公店》写暮春，其余写初夏。' },
      { id: 'p025q7', type: '选择题', score: 4, text: '《乡下人家》最能概括课文中心的句子是（  ）', options: ['A. 乡下人家总爱在屋前搭一瓜架', 'B. 青的瓜，碧绿的藤和叶，构成了一道别有风趣的装饰', 'C. 乡下人家，不论什么时候，不论什么季节，都有一道独特、迷人的风景', 'D. 天边的红霞，向晚的微风'], answer: 2, explanation: 'C句是课文中心句，点明乡下人家风景独特迷人。' },
      { id: 'p025q8', type: '判断题', score: 3, text: '"大儿锄豆溪东"中的"锄豆"是锄草松土的意思。（  ）', answer: '正确', explanation: '锄豆指在豆田里锄草。' },
      { id: 'p025q9', type: '判断题', score: 3, text: '《宿新市徐公店》中"飞入菜花无处寻"是因为黄蝶飞走了。（  ）', answer: '错误', explanation: '是因为黄蝶颜色与菜花相似，藏在花中找不到了。' },
      { id: 'p025q10', type: '阅读理解', score: 16, text: '阅读《乡下人家》选段，回答：这段话从哪几方面写出了乡下人家的风景？表达了作者怎样的感情？', passage: '有些人家，还在门前的场地上种几株花，芍药、凤仙、鸡冠花、大丽菊，它们依着时令，顺序开放，朴素中带着几分华丽，显出一派独特的农家风光。还有些人家，在屋后种几十枝竹，绿的叶，青的竿，投下一片绿绿的浓阴。', answer: '从种花和种竹两方面写。种花依时令开放，朴素而华丽；种竹投下绿阴。表达了作者对乡村生活的喜爱和赞美之情。', explanation: '抓住"朴素中带着几分华丽"等词语体会感情。' }
    ]
  },

  /* ============================== 四年级语文下册第二单元 单元卷 ============================== */
  {
    id: 'p026',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p026q1', type: '填空题', score: 4, text: '《琥珀》的作者是____（国别）作家柏吉尔，琥珀里包着____和____两只小虫。', answer: '德国、苍蝇、蜘蛛', explanation: '琥珀是松脂化石，包裹远古小虫。' },
      { id: 'p026q2', type: '填空题', score: 4, text: '《飞向蓝天的恐龙》告诉我们：鸟类很可能就是一种____的后裔，恐龙的一支经过漫长演化变成了____。', answer: '小型恐龙、鸟类', explanation: '科学家发现恐龙长羽毛的化石证据。' },
      { id: 'p026q3', type: '填空题', score: 4, text: '琥珀的形成需要松脂滴下包住小虫，被埋在____下面，经过____年才能形成。', answer: '泥沙、成千上万', explanation: '松脂球被泥沙掩埋，经漫长地质年代变成化石。' },
      { id: 'p026q4', type: '填空题', score: 4, text: '《飞向蓝天的恐龙》中提到____世纪末期，我国科学家在____西部首次发现带羽毛的恐龙化石。', answer: '二十、辽宁', explanation: '辽西化石为恐龙演化成鸟提供证据。' },
      { id: 'p026q5', type: '选择题', score: 4, text: '琥珀形成的正确顺序是（  ）', options: ['A. 松脂滴落→包住小虫→埋入泥沙→变成化石', 'B. 包住小虫→松脂滴落→变成化石→埋入泥沙', 'C. 埋入泥沙→变成化石→松脂滴落→包住小虫', 'D. 变成化石→包住小虫→松脂滴落→埋入泥沙'], answer: 0, explanation: '先松脂滴落包住小虫，再被掩埋经漫长时间形成化石。' },
      { id: 'p026q6', type: '选择题', score: 4, text: '"有些恐龙身长几十米，重达数十吨，有些恐龙则身材小巧"运用的说明方法是（  ）', options: ['A. 列数字', 'B. 作比较', 'C. 打比方', 'D. 举例子'], answer: 1, explanation: '把大小不同的恐龙作比较，突出形态多样。' },
      { id: 'p026q7', type: '选择题', score: 4, text: '《琥珀》一文推测的科学依据不包括（  ）', options: ['A. 漫长夏天的炎热', 'B. 松脂渗出', 'C. 海浪把泥沙卷到岸边', 'D. 恐龙会飞'], answer: 3, explanation: '琥珀形成与恐龙无关，依据是松脂、海浪、泥沙等。' },
      { id: 'p026q8', type: '判断题', score: 3, text: '琥珀是远古松脂化石，对研究远古生物有重要价值。（  ）', answer: '正确', explanation: '琥珀保存了远古生物，是珍贵的研究材料。' },
      { id: 'p026q9', type: '判断题', score: 3, text: '所有恐龙都能演化成鸟类。（  ）', answer: '错误', explanation: '只有一支猎食性恐龙演化成了鸟类，不是所有恐龙。' },
      { id: 'p026q10', type: '阅读理解', score: 16, text: '阅读《飞向蓝天的恐龙》选段，回答：恐龙演化成鸟类经历了哪些身体变化？', passage: '其中，一些猎食性恐龙的身体逐渐变小，长得也越来越像鸟类：骨骼中空，身体轻盈；脑颅膨大，行动敏捷；前肢越来越长，能像鸟翼一样拍打；体表长出了美丽的羽毛。它们学会了飞翔，最终变成鸟类，飞向了蓝天。', answer: '变化：①身体变小；②骨骼中空，身体轻盈；③脑颅膨大，行动敏捷；④前肢变长，像鸟翼；⑤体表长出羽毛。最终学会飞翔变成鸟类。', explanation: '从原文提取表示变化的短语，分点作答。' }
    ]
  },

  /* ============================== 四年级语文下册第三单元 单元卷 ============================== */
  {
    id: 'p027',
    subject: '语文',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级语文下册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p027q1', type: '填空题', score: 4, text: '《繁星（七一）》的作者是____，诗中永不漫灭的回忆是：月明的园中、____、母亲的膝上。', answer: '冰心、藤萝的叶下', explanation: '冰心《繁星》歌颂母爱与童真。' },
      { id: 'p027q2', type: '填空题', score: 4, text: '《绿》的作者是____，诗中写绿的颜色有墨绿、浅绿、嫩绿、____、淡绿、粉绿等。', answer: '艾青、翠绿', explanation: '艾青《绿》描写大自然中丰富的绿色。' },
      { id: 'p027q3', type: '填空题', score: 4, text: '《白桦》的作者是____（国别）诗人叶赛宁，诗中白桦披了一身____。', answer: '苏联、雪花', explanation: '叶赛宁用白桦象征高洁。' },
      { id: 'p027q4', type: '填空题', score: 4, text: '"大海啊！哪一颗星没有光？哪一朵花没有香？哪一次我的思潮里没有你波涛的清响？"运用了____修辞手法。', answer: '排比、反问', explanation: '三个"哪……"构成排比兼反问，表达对大海的热爱。' },
      { id: 'p027q5', type: '选择题', score: 4, text: '下列说法不正确的是（  ）', options: ['A. 《繁星》是冰心的诗集', 'B. 《绿》中"刮的风是绿的"是想象', 'C. 《白桦》写的是春天的树', 'D. 现代诗形式自由'], answer: 2, explanation: '《白桦》写的是雪中白桦，体现高洁，并非强调春天。' },
      { id: 'p027q6', type: '选择题', score: 4, text: '"所有的绿集中起来，挤在一起，重叠在一起"中"挤""重叠"的作用是（  ）', options: ['A. 写出绿的混乱', 'B. 写出绿的浓密、充满生机', 'C. 说明绿很少', 'D. 强调绿色难看'], answer: 1, explanation: '动词写出绿的浓密茂盛、生机勃勃。' },
      { id: 'p027q7', type: '选择题', score: 4, text: '"母亲啊！天上的风雨来了，鸟儿躲到它的巢里"中"风雨"指的是（  ）', options: ['A. 自然界的风雨', 'B. 生活中的困难和烦恼', 'C. 天气预报', 'D. 下雨的路'], answer: 1, explanation: '"风雨"暗喻生活中的烦恼困难，下文"心中的风雨"照应。' },
      { id: 'p027q8', type: '判断题', score: 3, text: '《繁星（一五九）》表达了孩子对母亲的依恋，赞美母爱。（  ）', answer: '正确', explanation: '鸟儿避雨比喻孩子投入母亲怀抱，歌颂母爱。' },
      { id: 'p027q9', type: '判断题', score: 3, text: '《绿》全诗感情低沉悲伤。（  ）', answer: '错误', explanation: '《绿》感情欢快，赞美生机勃勃的春天。' },
      { id: 'p027q10', type: '阅读理解', score: 16, text: '阅读《绿》选段，回答：这首诗表达了作者怎样的感情？', passage: '好像绿色的墨水瓶倒翻了，到处是绿的……到哪儿去找这么多的绿：墨绿、浅绿、嫩绿、翠绿、淡绿、粉绿……绿得发黑、绿得出奇。刮的风是绿的，下的雨是绿的，流的水是绿的，阳光也是绿的。', answer: '表达了作者对绿的喜爱赞美，对春天生机勃勃景象的热爱，以及对生命活力的歌颂之情。', explanation: '从"到处是绿的""绿得发黑"等体会作者对绿、对春天的喜爱。' }
    ]
  },

  /* ============================== 五年级语文上册第一单元 单元卷 ============================== */
  {
    id: 'p028',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文上册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p028q1', type: '填空题', score: 4, text: '《白鹭》的作者是____，文章开头说"白鹭是一首____的诗"。', answer: '郭沫若、精巧', explanation: '郭沫若赞美白鹭如诗般精巧。' },
      { id: 'p028q2', type: '填空题', score: 4, text: '《落花生》的作者是____，课文通过____的手法，说明要做____的人。', answer: '许地山、借物喻人、有用', explanation: '借花生喻人，要做有用的人。' },
      { id: 'p028q3', type: '填空题', score: 4, text: '《落花生》中父亲说："花生的好处很多，有一样最____。它的果实埋在____里。"', answer: '可贵、地', explanation: '花生不炫耀、埋在土里，最可贵。' },
      { id: 'p028q4', type: '填空题', score: 4, text: '"增之一分则嫌长，减之一分则嫌短"运用的修辞手法是____，写出了白鹭____。', answer: '对偶、身段大小适宜', explanation: '对偶句强调白鹭大小恰到好处。' },
      { id: 'p028q5', type: '选择题', score: 4, text: '《白鹭》这篇课文属于（  ）', options: ['A. 神话故事', 'B. 借物喻人的散文', 'C. 说明文', 'D. 童话'], answer: 1, explanation: '借白鹭表达对美的赞美，是借物喻人的散文。' },
      { id: 'p028q6', type: '选择题', score: 4, text: '《落花生》中父亲借花生要孩子们做怎样的人？（  ）', options: ['A. 只讲体面的人', 'B. 对别人没有好处的人', 'C. 有用的人，不要只讲体面', 'D. 爱炫耀的人'], answer: 2, explanation: '父亲希望孩子做有用的人，不图虚名。' },
      { id: 'p028q7', type: '选择题', score: 4, text: '下列对"白鹭实在是一首诗，一首韵在骨子里的散文诗"理解正确的是（  ）', options: ['A. 白鹭会写诗', 'B. 白鹭本身像诗一样优美，美在内在', 'C. 白鹭是散文', 'D. 白鹭不会唱歌很遗憾'], answer: 1, explanation: '"韵在骨子里"指白鹭美在内在神韵。' },
      { id: 'p028q8', type: '判断题', score: 3, text: '《落花生》采用"借物喻人"的写法，把花生和桃子、石榴、苹果作对比。（  ）', answer: '正确', explanation: '用对比突出花生朴实无华的特点。' },
      { id: 'p028q9', type: '判断题', score: 3, text: '《白鹭》中作者认为白鹭不好看，因为它常见。（  ）', answer: '错误', explanation: '作者认为白鹭因常见而被忽视美，其实很美。' },
      { id: 'p028q10', type: '阅读理解', score: 16, text: '阅读《落花生》选段，回答：父亲是怎样把花生的特点和人联系起来的？', passage: '父亲说："花生的好处很多，有一样最可贵。它的果实埋在地里，不像桃子、石榴、苹果那样，把鲜红嫩绿的果实高高地挂在枝上，使人一见就生爱慕之心。你们看它矮矮地长在地上，等到成熟了，也不能立刻分辨出来它有没有果实，必须挖起来才知道。"', answer: '父亲先说花生果实埋在地里、不炫耀，再与桃子、石榴、苹果高挂枝上作对比，突出花生朴实无华、默默奉献的特点；进而联系到做人要做有用的人，不要只讲体面而对别人没有好处。', explanation: '抓住"借物喻人"的特点，理解由物及人的写法。' }
    ]
  },

  /* ============================== 五年级语文上册第二单元 单元卷 ============================== */
  {
    id: 'p029',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p029q1', type: '填空题', score: 4, text: '《桂花雨》的作者是____，作者借桂花表达对____的思念之情。', answer: '琦君、故乡', explanation: '琦君借摇桂花回忆故乡，表达思乡之情。' },
      { id: 'p029q2', type: '填空题', score: 4, text: '《珍珠鸟》的作者是____，文章结尾点明中心："____，往往创造出美好的境界。"', answer: '冯骥才、信赖', explanation: '信赖让珍珠鸟与作者亲近，创造美好境界。' },
      { id: 'p029q3', type: '填空题', score: 4, text: '《桂花雨》中"摇花对我来说是件大事"，"摇花"是因为____，摇下来的桂花____。', answer: '桂花盛开要摇下来、朵朵完整新鲜', explanation: '摇下的桂花完整新鲜，比落下的香。' },
      { id: 'p029q4', type: '填空题', score: 4, text: '"桂花盛开的时候，不说香飘十里，至少前后十几家邻居，都没有不浸在桂花香里"用了____的修辞手法。', answer: '夸张', explanation: '"香飘十里""浸在桂花香里"是夸张，突出花香。' },
      { id: 'p029q5', type: '选择题', score: 4, text: '《桂花雨》一文的主旨是（  ）', options: ['A. 介绍桂花的样子', 'B. 思念故乡和母亲', 'C. 教人种桂花', 'D. 描写台风'], answer: 1, explanation: '借桂花雨回忆故乡母亲，表达思乡之情。' },
      { id: 'p029q6', type: '选择题', score: 4, text: '"信赖，往往创造出美好的境界"对这句话理解正确的是（  ）', options: ['A. 只要有信任，就能产生美', 'B. 人与动物之间真诚的信赖能带来和谐美好的境界', 'C. 珍珠鸟很胆小', 'D. 鸟笼要布置好'], answer: 1, explanation: '信赖使珍珠鸟与作者亲近，体现人与自然和谐。' },
      { id: 'p029q7', type: '选择题', score: 4, text: '《珍珠鸟》中描写小珍珠鸟"趴在我的肩头睡着了"是为了表现（  ）', options: ['A. 鸟很累', 'B. 鸟对作者完全信赖', 'C. 鸟很笨', 'D. 作者会抓鸟'], answer: 1, explanation: '小鸟能在作者肩头安睡，说明完全信赖。' },
      { id: 'p029q8', type: '判断题', score: 3, text: '《桂花雨》中母亲说"外地的桂花再香，还是比不上家乡院子里的桂花"表达了母亲对家乡的眷恋。（  ）', answer: '正确', explanation: '母亲借桂花表达对故乡的思念。' },
      { id: 'p029q9', type: '判断题', score: 3, text: '《珍珠鸟》一开始就把鸟放出笼子让它们随便飞。（  ）', answer: '错误', explanation: '作者开始很少扒开叶蔓惊动它们，是慢慢建立信赖。' },
      { id: 'p029q10', type: '阅读理解', score: 16, text: '阅读《珍珠鸟》选段，回答：从哪些描写能看出小珍珠鸟对"我"越来越信赖？', passage: '我很少扒开叶蔓瞧它们，它们便渐渐敢伸出小脑袋瞅瞅我。我们就这样一点点熟悉了。……过不多久，忽然有一个小脑袋从叶间探出来。……起先，这小家伙只在笼子四周活动，随后就在屋子里飞来飞去……它就放开胆子跑到稿纸上，绕着我的笔尖蹦来蹦去。', explanation: '从小鸟"伸出小脑袋瞅""探出来""在屋里飞""绕着笔尖蹦"等动作描写看出信赖逐步加深。', answer: '能看出信赖加深的描写：①敢伸出小脑袋瞅我；②从叶间探出头来；③在屋里飞来飞去；④落到稿纸上绕笔尖蹦跳。距离由远到近，胆子由小到大，体现信赖。' }
    ]
  },

  /* ============================== 五年级语文上册第三单元 单元卷 ============================== */
  {
    id: 'p030',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p030q1', type: '填空题', score: 4, text: '《搭石》的作者是____，搭石是家乡人们按照二尺左右的间隔在小溪里横着摆上的____。', answer: '刘章、平整方正的石头', explanation: '搭石是摆在水里供人踏过的石块。' },
      { id: 'p030q2', type: '填空题', score: 4, text: '《将相和》中"将"指____，"相"指____，全文讲了____、渑池之会、____三个故事。', answer: '廉颇、蔺相如、完璧归赵、负荆请罪', explanation: '将相和由三个故事组成，最终廉颇负荆请罪。' },
      { id: 'p030q3', type: '填空题', score: 4, text: '"完璧归赵"中蔺相如说如果秦王逼他，他的头就和璧一起撞碎在____上。', answer: '柱子', explanation: '蔺相如以撞碎和氏璧威胁秦王。' },
      { id: 'p030q4', type: '填空题', score: 4, text: '《搭石》中"紧走搭石慢过桥"是因为走得快才容易保持____。', answer: '平衡', explanation: '搭石会活动，快走才易保持平衡。' },
      { id: 'p030q5', type: '选择题', score: 4, text: '《搭石》一文赞美的是（  ）', options: ['A. 搭石的美丽', 'B. 乡亲们默默无闻、为他人着想的美好品质', 'C. 溪水的清澈', 'D. 石头的方正'], answer: 1, explanation: '借搭石赞美乡亲们为他人着想的品质。' },
      { id: 'p030q6', type: '选择题', score: 4, text: '廉颇"负荆请罪"的原因是（  ）', options: ['A. 他打了败仗', 'B. 他认识到蔺相如顾全大局，自己心胸狭窄', 'C. 秦王逼他', 'D. 蔺相如官更大'], answer: 1, explanation: '廉颇知错能改，明白蔺相如以国为重。' },
      { id: 'p030q7', type: '选择题', score: 4, text: '蔺相如对廉颇处处忍让，主要原因是（  ）', options: ['A. 害怕廉颇', 'B. 为了赵国利益，避免将相不和', 'C. 不想吵架', 'D. 想讨好廉颇'], answer: 1, explanation: '蔺相如以国家利益为重，回避私人恩怨。' },
      { id: 'p030q8', type: '判断题', score: 3, text: '"完璧归赵"中蔺相如勇敢机智，最终把和氏璧送回赵国。（  ）', answer: '正确', explanation: '蔺相如设计派人送回和氏璧。' },
      { id: 'p030q9', type: '判断题', score: 3, text: '《搭石》中年轻人发现石头不稳会装作没看见走过去。（  ）', answer: '错误', explanation: '上了年岁的人发现石头不稳会停下搭好再走。' },
      { id: 'p030q10', type: '阅读理解', score: 16, text: '阅读《搭石》选段，回答：这段话体现了乡亲们怎样的品质？', passage: '每当上工、下工，一行人走搭石的时候，动作是那么协调有序！前面的抬起脚来，后面的紧跟上去，踏踏的声音，像轻快的音乐；清波漾漾，人影绰绰，给人画一般的美感。', answer: '体现了乡亲们协调有序、互助礼让、热爱生活的美好品质。"协调有序"写出大家配合默契，步伐整齐，体现乡亲们纯朴、和谐的精神风貌。', explanation: '从"协调有序""紧跟"等词体会乡亲们互助和谐的品质。' }
    ]
  },

  /* ============================== 五年级语文上册第四单元 单元卷 ============================== */
  {
    id: 'p031',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p031q1', type: '填空题', score: 4, text: '《什么比猎豹的速度更快》按速度由____到____的顺序介绍了多种事物。', answer: '慢、快', explanation: '课文按速度递增顺序介绍。' },
      { id: 'p031q2', type: '填空题', score: 4, text: '《冀中的地道战》发生在1942年到____年，是冀中人民创造的新的斗争方式。', answer: '1944', explanation: '地道战是抗战时期的斗争方式。' },
      { id: 'p031q3', type: '填空题', score: 4, text: '光的速度大约是每秒____千米，光从太阳到地球约需____分钟。', answer: '30万、8', explanation: '光速极快，是文中介绍最快的速度。' },
      { id: 'p031q4', type: '填空题', score: 4, text: '《什么比猎豹的速度更快》中，比猎豹快的依次有游隼、____、火箭。', answer: '喷气式飞机', explanation: '速度递增：鸵鸟→猎豹→游隼→飞机→火箭→光。' },
      { id: 'p031q5', type: '选择题', score: 4, text: '《什么比猎豹的速度更快》使用的说明方法主要是（  ）', options: ['A. 列数字、作比较', 'B. 打比方', 'C. 拟人', 'D. 想象'], answer: 0, explanation: '用具体数字和对比突出速度快。' },
      { id: 'p031q6', type: '选择题', score: 4, text: '地道战能取得胜利的主要原因是（  ）', options: ['A. 地道很深', 'B. 人民的智慧和无穷力量', 'C. 武器先进', 'D. 敌人很少'], answer: 1, explanation: '地道战体现了冀中人民的智慧和团结。' },
      { id: 'p031q7', type: '选择题', score: 4, text: '下列速度最快的是（  ）', options: ['A. 猎豹', 'B. 游隼', 'C. 喷气式飞机', 'D. 光'], answer: 3, explanation: '光速远超其他事物。' },
      { id: 'p031q8', type: '判断题', score: 3, text: '《冀中的地道战》中地道家家相连、村村相通。（  ）', answer: '正确', explanation: '地道纵横交错，家家相连村村相通。' },
      { id: 'p031q9', type: '判断题', score: 3, text: '猎豹是天上飞得最快的动物。（  ）', answer: '错误', explanation: '猎豹是陆地跑得最快的动物，天上最快的是游隼。' },
      { id: 'p031q10', type: '阅读理解', score: 16, text: '阅读《什么比猎豹的速度更快》选段，回答：作者是怎样把"快"写清楚的？', passage: '不过，光的速度虽然快，但宇宙太大了。光从太阳到地球，大约需要8分钟。如果从其他恒星到地球，那就需要几年、几十年甚至几百年了。', answer: '作者用列数字的方法（每秒30万千米、8分钟、几年几十年几百年）和作比较，把"光速快"和"宇宙大"写得很清楚、具体。', explanation: '抓住列数字和作比较的说明方法分析。' }
    ]
  },

  /* ============================== 五年级语文下册第二单元 单元卷 ============================== */
  {
    id: 'p032',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p032q1', type: '填空题', score: 4, text: '《草船借箭》选自____著的长篇小说《____》。', answer: '罗贯中、三国演义', explanation: '《三国演义》是罗贯中创作的古典名著。' },
      { id: 'p032q2', type: '填空题', score: 4, text: '《景阳冈》选自《____》，课文讲____（人物）打虎的故事。', answer: '水浒传、武松', explanation: '《水浒传》中武松景阳冈打虎是经典情节。' },
      { id: 'p032q3', type: '填空题', score: 4, text: '《猴王出世》选自《____》，课文讲____出世和称王的故事。', answer: '西游记、石猴', explanation: '吴承恩《西游记》开头石猴称王。' },
      { id: 'p032q4', type: '填空题', score: 4, text: '《草船借箭》中周瑜让诸葛亮____天内造____万支箭，想借机陷害他。', answer: '十、十万', explanation: '周瑜借造箭为难诸葛亮。' },
      { id: 'p032q5', type: '选择题', score: 4, text: '诸葛亮能"草船借箭"成功，最关键的原因是（  ）', options: ['A. 船多', 'B. 他知天文懂地理，算准大雾', 'C. 曹军不会射箭', 'D. 鲁肃帮忙'], answer: 1, explanation: '诸葛亮算准大雾天，曹军看不清不敢出战。' },
      { id: 'p032q6', type: '选择题', score: 4, text: '下列对人物性格概括正确的是（  ）', options: ['A. 诸葛亮——嫉贤妒能', 'B. 周瑜——顾全大局', 'C. 诸葛亮——神机妙算', 'D. 曹操——胆大心细'], answer: 2, explanation: '诸葛亮神机妙算，周瑜心胸狭窄，曹操多疑。' },
      { id: 'p032q7', type: '选择题', score: 4, text: '《景阳冈》中武松的性格特点是（  ）', options: ['A. 胆小怕事', 'B. 豪放倔强、武艺高强、勇敢无畏', 'C. 阴险狡诈', 'D. 贪生怕死'], answer: 1, explanation: '武松豪放倔强、英勇无畏。' },
      { id: 'p032q8', type: '判断题', score: 3, text: '《草船借箭》《景阳冈》《猴王出世》都选自中国古典四大名著。（  ）', answer: '正确', explanation: '分别选自三国演义、水浒传、西游记。' },
      { id: 'p032q9', type: '判断题', score: 3, text: '诸葛亮借箭后把船驶向南岸，曹操才发现上当。（  ）', answer: '正确', explanation: '大雾散去曹操才知上当，已追不上。' },
      { id: 'p032q10', type: '阅读理解', score: 16, text: '阅读《草船借箭》选段，回答：从这段描写能看出诸葛亮怎样的特点？', passage: '诸葛亮说："既然这样，就请你帮帮我吧。你借我二十条快船，每条船三十个军士，船用青布幔子遮起来，还要一千多个草把子，排在船两边。不过，这事儿千万不能让周瑜知道。"', answer: '能看出诸葛亮神机妙算、胸有成竹。他早就想好借箭的方法，周密布置青布幔子和草把子，还叮嘱不能让周瑜知道，说明他知己知彼、考虑周全。', explanation: '从诸葛亮的安排和叮嘱体会他的神机妙算。' }
    ]
  },

  /* ============================== 五年级语文下册第三单元 单元卷 ============================== */
  {
    id: 'p033',
    subject: '语文',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级语文下册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p033q1', type: '填空题', score: 4, text: '汉字的演变过程是：甲骨文→____→小篆→____→楷书→草书→行书。', answer: '金文、隶书', explanation: '汉字演变经过甲骨文、金文、小篆、隶书、楷书等阶段。' },
      { id: 'p033q2', type: '填空题', score: 4, text: '甲骨文是____（朝代）刻在____上的文字。', answer: '商、龟甲或兽骨', explanation: '甲骨文是商朝刻在龟甲兽骨上的文字。' },
      { id: 'p033q3', type: '填空题', score: 4, text: '造字法主要有____、指事、____、形声、转注、假借，称为"六书"。', answer: '象形、会意', explanation: '六书是古人的六种造字方法。' },
      { id: 'p033q4', type: '填空题', score: 4, text: '"休"字由"人"和"木"组成，表示人靠在树上休息，属于____造字法。', answer: '会意', explanation: '会意字由两个或几个字组合表示意义。' },
      { id: 'p033q5', type: '选择题', score: 4, text: '下列汉字属于象形字的是（  ）', options: ['A. 日', 'B. 上', 'C. 休', 'D. 江'], answer: 0, explanation: '"日"像太阳形状，是象形字。' },
      { id: 'p033q6', type: '选择题', score: 4, text: '歇后语"外甥打灯笼——照旧（舅）"运用的手法是（  ）', options: ['A. 比喻', 'B. 谐音', 'C. 拟人', 'D. 夸张'], answer: 1, explanation: '"舅"与"旧"谐音，是谐音歇后语。' },
      { id: 'p033q7', type: '选择题', score: 4, text: '下列字谜猜"休"字的是（  ）', options: ['A. 一人在木旁', 'B. 太阳出来', 'C. 三人成众', 'D. 上下不分'], answer: 0, explanation: '"人"加"木"为休。' },
      { id: 'p033q8', type: '判断题', score: 3, text: '形声字由形旁和声旁组成，形旁表意，声旁表音。（  ）', answer: '正确', explanation: '如"江"氵表意，工表音。' },
      { id: 'p033q9', type: '判断题', score: 3, text: '小篆是秦始皇统一六国后通用的文字。（  ）', answer: '正确', explanation: '秦统一文字为小篆。' },
      { id: 'p033q10', type: '阅读理解', score: 16, text: '阅读短文，回答：汉字有哪些特点和价值？', passage: '汉字是世界上最古老的文字之一，已有三千多年的历史。它从甲骨文一路演变而来，每一个字都像一幅画、一个故事。汉字不仅记录了中华民族的悠久历史和文化，还体现了古人的智慧和审美。', answer: '特点：历史悠久（三千多年）、由甲骨文演变而来、像画和故事、体现智慧与审美。价值：记录中华民族悠久历史和文化，是中华文明的重要载体，体现古人智慧。', explanation: '从原文提取汉字特点和价值的要点。' }
    ]
  },

  /* ============================== 六年级语文上册第一单元 单元卷 ============================== */
  {
    id: 'p034',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p034q1', type: '古诗文填空', score: 4, text: '移舟泊烟渚，____。____，江清月近人。', answer: '日暮客愁新、野旷天低树', explanation: '孟浩然《宿建德江》，写旅途愁思。' },
      { id: 'p034q2', type: '古诗文填空', score: 4, text: '黑云翻墨未遮山，____。____，望湖楼下水如天。', answer: '白雨跳珠乱入船、卷地风来忽吹散', explanation: '苏轼《六月二十七日望湖楼醉书》，写夏日骤雨。' },
      { id: 'p034q3', type: '填空题', score: 4, text: '《草原》的作者是____，课文按____→____→联欢的顺序写草原之行。', answer: '老舍、草原风光、款待客人', explanation: '老舍写草原风光、迎客、联欢。' },
      { id: 'p034q4', type: '填空题', score: 4, text: '"明月别枝惊鹊，____"出自辛弃疾《____》。"稻花香里说丰年，____。"', answer: '清风半夜鸣蝉、西江月·夜行黄沙道中、听取蛙声一片', explanation: '辛弃疾写夏夜乡村丰收景象。' },
      { id: 'p034q5', type: '选择题', score: 4, text: '"黑云翻墨未遮山，白雨跳珠乱入船"运用的修辞手法是（  ）', options: ['A. 拟人', 'B. 比喻', 'C. 排比', 'D. 反问'], answer: 1, explanation: '"翻墨""跳珠"都是比喻，生动写出云黑雨急。' },
      { id: 'p034q6', type: '选择题', score: 4, text: '《丁香结》中"丁香结"象征（  ）', options: ['A. 美好的春天', 'B. 生活中解不开的愁怨', 'C. 漂亮的花', 'D. 紧张的心情'], answer: 1, explanation: '作者借丁香结喻人生愁怨。' },
      { id: 'p034q7', type: '选择题', score: 4, text: '《草原》中"蒙汉情深何忍别，天涯碧草话斜阳"表达的感情是（  ）', options: ['A. 草原很大', 'B. 蒙汉情深依依不舍', 'C. 太阳落山了', 'D. 草很绿'], answer: 1, explanation: '表达蒙汉两族人民深厚情谊和惜别之情。' },
      { id: 'p034q8', type: '判断题', score: 3, text: '《宿建德江》中"野旷天低树"写出原野空旷，远处的天比树还低。（  ）', answer: '正确', explanation: '写原野空旷低平，天幕低垂的景象。' },
      { id: 'p034q9', type: '判断题', score: 3, text: '《西江月·夜行黄沙道中》的感情是悲凉忧愁的。（  ）', answer: '错误', explanation: '此词表现丰收喜悦、心情愉悦。' },
      { id: 'p034q10', type: '阅读理解', score: 16, text: '阅读《草原》选段，回答：这段描写突出了草原的什么特点？用了什么方法？', passage: '那里的天比别处的天更可爱，空气是那么清鲜，天空是那么明朗，使我总想高歌一曲，表示我满心的愉快。在天底下，一碧千里，而并不茫茫。四面都有小丘，平地是绿的，小丘也是绿的。', answer: '突出了草原辽阔、碧绿、清新的特点。方法：直接描写（一碧千里）和打比方，用"绿毯""中国画"等比喻写出草原的绿和美，抒发喜爱之情。', explanation: '抓住"一碧千里""清鲜"等词和比喻手法分析。' }
    ]
  },

  /* ============================== 六年级语文上册第二单元 单元卷 ============================== */
  {
    id: 'p035',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p035q1', type: '古诗文填空', score: 4, text: '红军不怕远征难，____。五岭逶迤腾细浪，____。', answer: '万水千山只等闲、乌蒙磅礴走泥丸', explanation: '毛泽东《七律·长征》，写红军长征豪情。' },
      { id: 'p035q2', type: '填空题', score: 4, text: '《七律·长征》的作者是____，全诗围绕"____"展开。', answer: '毛泽东、远征难', explanation: '诗中"只等闲"体现红军藐视困难。' },
      { id: 'p035q3', type: '填空题', score: 4, text: '《狼牙山五壮士》中五壮士是马宝玉、葛振林、宋学义、____和____。', answer: '胡德林、胡福才', explanation: '狼牙山五壮士为掩护群众英勇跳崖。' },
      { id: 'p035q4', type: '填空题', score: 4, text: '《开国大典》中____年____月1日，中华人民共和国中央人民政府成立。', answer: '1949、10', explanation: '1949年10月1日开国大典。' },
      { id: 'p035q5', type: '选择题', score: 4, text: '"五岭逶迤腾细浪，乌蒙磅礴走泥丸"运用的修辞手法是（  ）', options: ['A. 比喻、夸张', 'B. 拟人', 'C. 排比', 'D. 反问'], answer: 0, explanation: '把高山比作细浪、泥丸，夸张体现红军豪迈。' },
      { id: 'p035q6', type: '选择题', score: 4, text: '《灯光》中郝副营长憧憬的是（  ）', options: ['A. 打仗胜利', 'B. 孩子们在灯光下读书', 'C. 回家', 'D. 当官'], answer: 1, explanation: '郝副营长为下一代能在灯光下读书而牺牲。' },
      { id: 'p035q7', type: '选择题', score: 4, text: '狼牙山五壮士跳崖体现的精神是（  ）', options: ['A. 贪生怕死', 'B. 坚强不屈、视死如归', 'C. 投降敌人', 'D. 逃跑'], answer: 1, explanation: '五壮士宁死不屈、视死如归。' },
      { id: 'p035q8', type: '判断题', score: 3, text: '《七律·长征》表现了红军革命乐观主义和英雄主义精神。（  ）', answer: '正确', explanation: '全诗洋溢革命豪情和乐观精神。' },
      { id: 'p035q9', type: '判断题', score: 3, text: '《开国大典》写到阅兵式和群众游行。（  ）', answer: '正确', explanation: '开国大典包括典礼、阅兵、游行。' },
      { id: 'p035q10', type: '阅读理解', score: 16, text: '阅读《七律·长征》选段，回答：这两句诗表达了红军怎样的精神？', passage: '金沙水拍云崖暖，大渡桥横铁索寒。更喜岷山千里雪，三军过后尽开颜。', answer: '表达了红军藐视困难、革命乐观主义和英雄主义精神。"暖"写巧渡金沙江的喜悦，"寒"写飞夺泸定桥的惊险，"尽开颜"写翻过雪山后的胜利喜悦。', explanation: '结合"暖""寒""尽开颜"等词体会红军情感。' }
    ]
  },

  /* ============================== 六年级语文上册第三单元 单元卷 ============================== */
  {
    id: 'p036',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p036q1', type: '填空题', score: 4, text: '《竹节人》写的是孩子们用____做"竹节人"玩的童年趣事。', answer: '毛竹', explanation: '竹节人是用毛竹做成的传统玩具。' },
      { id: 'p036q2', type: '填空题', score: 4, text: '《宇宙生命之谜》围绕"____"展开，科学家目前还没发现地球外生命。', answer: '地球之外是否有生命', explanation: '课文探讨宇宙中是否存在其他生命。' },
      { id: 'p036q3', type: '填空题', score: 4, text: '《故宫博物院》按____顺序介绍，故宫又称____。', answer: '空间、紫禁城', explanation: '故宫又称紫禁城，按空间顺序介绍。' },
      { id: 'p036q4', type: '填空题', score: 4, text: '科学家认为生命存在需要适宜的____、____和水分等条件。', answer: '温度、空气', explanation: '生命存在需水、空气、适宜温度等。' },
      { id: 'p036q5', type: '选择题', score: 4, text: '《竹节人》中孩子们喜欢竹节人主要是（  ）', options: ['A. 竹节人漂亮', 'B. 玩法有趣，充满童趣', 'C. 竹节人很贵', 'D. 老师不让玩'], answer: 1, explanation: '竹节人玩法新奇有趣，体现童趣。' },
      { id: 'p036q6', type: '选择题', score: 4, text: '《宇宙生命之谜》中提到火星上至今没有生命的主要依据是（  ）', options: ['A. 火星太远', 'B. 火星表面没有水、空气稀薄、温度不适', 'C. 火星发红', 'D. 没人去过'], answer: 1, explanation: '火星缺水、缺氧、温差大，不适宜生命。' },
      { id: 'p036q7', type: '选择题', score: 4, text: '《故宫博物院》介绍三大殿时采用的顺序是（  ）', options: ['A. 时间顺序', 'B. 空间顺序', 'C. 逻辑顺序', 'D. 总分顺序'], answer: 1, explanation: '按空间方位介绍三大殿。' },
      { id: 'p036q8', type: '判断题', score: 3, text: '有目的阅读时要根据任务选择合适的阅读方法。（  ）', answer: '正确', explanation: '本单元重点学习有目的地阅读。' },
      { id: 'p036q9', type: '判断题', score: 3, text: '《竹节人》中老师发现竹节人也偷偷玩了起来。（  ）', answer: '正确', explanation: '老师也被竹节人吸引，体现童心。' },
      { id: 'p036q10', type: '阅读理解', score: 16, text: '阅读《宇宙生命之谜》选段，回答：作者怎样说明火星上不太可能有生命的？', passage: '科学家还发现，火星是一个非常干燥的星球，在大气中虽然找到了水汽，但极少，只有地球沙漠地区的百分之一。火星上氧气极少，水汽极少，温度又低，因此火星上生命难以存在。', answer: '作者用列数字（水汽只有沙漠的百分之一）和作比较的方法，说明火星干燥、缺水、缺氧、温度低，从而推断火星上生命难以存在。', explanation: '从列数字、作比较分析说明方法。' }
    ]
  },

  /* ============================== 六年级语文上册第四单元 单元卷 ============================== */
  {
    id: 'p037',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p037q1', type: '填空题', score: 4, text: '《桥》的作者是谈歌，课文中的老汉既是村党支部书记，又是____的父亲。', answer: '小伙子', explanation: '结尾揭示老汉和小伙子是父子关系。' },
      { id: 'p037q2', type: '填空题', score: 4, text: '《穷人》的作者是____（国别）作家____，主要人物是桑娜和渔夫____。', answer: '俄国、列夫·托尔斯泰、西蒙', explanation: '托尔斯泰《穷人》写桑娜收养西蒙的孩子。' },
      { id: 'p037q3', type: '填空题', score: 4, text: '《桥》中老汉把____让给小伙子，自己却被洪水吞没，体现了____的精神。', answer: '生的希望、舍己为人', explanation: '老汉最后让儿子先走，自己牺牲。' },
      { id: 'p037q4', type: '填空题', score: 4, text: '小说三要素是____、情节和____。', answer: '人物、环境', explanation: '人物、情节、环境是小说三要素。' },
      { id: 'p037q5', type: '选择题', score: 4, text: '《桥》中"木桥"在文中的作用是（  ）', options: ['A. 普通景物', 'B. 通往生命的希望，也是生死的考验', 'C. 装饰', 'D. 交通工具'], answer: 1, explanation: '木桥是人们逃生的唯一通道，象征希望与考验。' },
      { id: 'p037q6', type: '选择题', score: 4, text: '《穷人》中桑娜把西蒙的孩子抱回家，体现她（  ）', options: ['A. 胆小', 'B. 善良、宁可吃苦也要救人', 'C. 自私', 'D. 怕渔夫骂'], answer: 1, explanation: '桑娜善良宁可自己受苦也要救孩子。' },
      { id: 'p037q7', type: '选择题', score: 4, text: '《桥》采用大量短句和段落的作用是（  ）', options: ['A. 显得啰嗦', 'B. 营造紧张危急的气氛', 'C. 凑字数', 'D. 表达平静'], answer: 1, explanation: '短句短段渲染洪灾危急紧张气氛。' },
      { id: 'p037q8', type: '判断题', score: 3, text: '《穷人》中渔夫得知桑娜抱回孩子后表示要养活他们。（  ）', answer: '正确', explanation: '渔夫说"我们总能熬过去"，善良与桑娜一致。' },
      { id: 'p037q9', type: '判断题', score: 3, text: '《桥》的结尾揭示老汉和小伙子的关系，使故事更加震撼。（  ）', answer: '正确', explanation: '结尾出人意料，突出老汉舍己为人。' },
      { id: 'p037q10', type: '阅读理解', score: 16, text: '阅读《桥》选段，回答：老汉是一个怎样的人？从哪里看出？', passage: '老汉清瘦的脸上淌着雨水。他不说话，盯着乱哄哄的人们。他像一座山。老汉沙哑地喊话："桥窄！排成一队，不要挤！党员排在后边！"', answer: '老汉是一个沉着镇定、舍己为人、忠于职守的共产党员。从他"像一座山"的镇定、指挥群众有序撤离、让党员排在后边等看出。', explanation: '从神态、语言、动作分析人物形象。' }
    ]
  },

  /* ============================== 六年级语文下册第一单元 单元卷 ============================== */
  {
    id: 'p038',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p038q1', type: '古诗文填空', score: 4, text: '迢迢牵牛星，皎皎河汉女。____，____。', answer: '纤纤擢素手、札札弄机杼', explanation: '《迢迢牵牛星》写牛郎织女相思之情。' },
      { id: 'p038q2', type: '古诗文填空', score: 4, text: '中庭地白树栖鸦，____。今夜月明人尽望，____。', answer: '冷露无声湿桂花、不知秋思落谁家', explanation: '王建《十五夜望月》写中秋思乡。' },
      { id: 'p038q3', type: '填空题', score: 4, text: '《北京的春节》的作者是____，课文按____顺序写了北京春节的习俗。', answer: '老舍、时间', explanation: '老舍按时间顺序写北京春节从腊八到正月十九。' },
      { id: 'p038q4', type: '填空题', score: 4, text: '《腊八粥》的作者是沈从文，课文写____（人物）等吃腊八粥的故事。', answer: '八儿', explanation: '沈从文写八儿盼吃腊八粥。' },
      { id: 'p038q5', type: '选择题', score: 4, text: '《北京的春节》详写的日子是（  ）', options: ['A. 腊八、除夕、正月初一、正月十五', 'B. 腊月二十三', 'C. 正月初五', 'D. 正月十九'], answer: 0, explanation: '详写腊八、除夕、初一、元宵，略写其他。' },
      { id: 'p038q6', type: '选择题', score: 4, text: '"寒食东风御柳斜"中"寒食"指的是（  ）', options: ['A. 寒冷的食物', 'B. 寒食节，在清明节前一两天', 'C. 冬天', 'D. 中秋'], answer: 1, explanation: '寒食节在清明前一两天，禁烟火吃冷食。' },
      { id: 'p038q7', type: '选择题', score: 4, text: '《北京的春节》详略得当的好处是（  ）', options: ['A. 凑字数', 'B. 突出北京春节最热闹的日子，点面结合', 'C. 显得简单', 'D. 让文章变短'], answer: 1, explanation: '详略结合突出重点，点面结合写习俗。' },
      { id: 'p038q8', type: '判断题', score: 3, text: '《迢迢牵牛星》借牛郎织女的传说表达离别相思之情。（  ）', answer: '正确', explanation: '诗歌借神话抒发离愁。' },
      { id: 'p038q9', type: '判断题', score: 3, text: '《北京的春节》中元宵节是春节的又一个高潮。（  ）', answer: '正确', explanation: '元宵是春节又一个高潮，最热闹。' },
      { id: 'p038q10', type: '阅读理解', score: 16, text: '阅读《北京的春节》选段，回答：这段话详写了什么？为什么详写？', passage: '除夕真热闹。家家赶做年菜，到处是酒肉的香味。老少男女都穿起新衣，门外贴好红红的对联，屋里贴好各色的年画。哪一家都灯火通宵，不许间断，鞭炮声日夜不绝。在外边做事的人，除非万不得已，必定赶回家来吃团圆饭。', answer: '详写了除夕家家做年菜、穿新衣、贴对联年画、灯火通宵、放鞭炮、吃团圆饭的情景。因为除夕是春节最隆重热闹的日子，详写能突出北京春节的热闹和浓厚年味。', explanation: '从详写内容和作用两方面作答。' }
    ]
  },

  /* ============================== 六年级语文下册第二单元 单元卷 ============================== */
  {
    id: 'p039',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p039q1', type: '填空题', score: 4, text: '《鲁滨逊漂流记（节选）》的作者是____（国别）作家笛福，鲁滨逊流落到____岛上。', answer: '英国、荒', explanation: '笛福写鲁滨逊荒岛求生28年。' },
      { id: 'p039q2', type: '填空题', score: 4, text: '《骑鹅旅行记（节选）》的作者是____（国别）作家拉格洛夫，主人公是____。', answer: '瑞典、尼尔斯', explanation: '尼尔斯骑鹅旅行的童话。' },
      { id: 'p039q3', type: '填空题', score: 4, text: '《汤姆·索亚历险记》的作者是____，主人公汤姆是个____的孩子。', answer: '马克·吐温、机智勇敢', explanation: '马克·吐温塑造了机智勇敢的汤姆。' },
      { id: 'p039q4', type: '填空题', score: 4, text: '藏戏戴____演出，没有____，演出可以持续三五天。', answer: '面具、舞台', explanation: '藏戏三大特点：戴面具、没舞台、演出三五天。' },
      { id: 'p039q5', type: '选择题', score: 4, text: '鲁滨逊在荒岛上最重要的精神是（  ）', options: ['A. 等死', 'B. 不畏艰险、积极乐观、顽强求生', 'C. 抱怨命运', 'D. 害怕孤独'], answer: 1, explanation: '鲁滨逊顽强求生、积极乐观。' },
      { id: 'p039q6', type: '选择题', score: 4, text: '《骑鹅旅行记》中尼尔斯变成小精灵后骑____去旅行。', options: ['A. 马', 'B. 鹅', 'C. 牛', 'D. 狗'], answer: 1, explanation: '尼尔斯骑白鹅莫顿旅行。' },
      { id: 'p039q7', type: '选择题', score: 4, text: '下列作品与作者对应正确的是（  ）', options: ['A. 鲁滨逊——拉格洛夫', 'B. 尼尔斯——笛福', 'C. 汤姆——马克·吐温', 'D. 藏戏——老舍'], answer: 2, explanation: '汤姆·索亚出自马克·吐温。' },
      { id: 'p039q8', type: '判断题', score: 3, text: '鲁滨逊在荒岛上自己种粮食、盖房子、养羊群。（  ）', answer: '正确', explanation: '鲁滨逊靠双手在荒岛上生存。' },
      { id: 'p039q9', type: '判断题', score: 3, text: '藏戏演出时有固定的舞台和布景。（  ）', answer: '错误', explanation: '藏戏没有舞台，不用布景。' },
      { id: 'p039q10', type: '阅读理解', score: 16, text: '阅读《鲁滨逊漂流记》选段，回答：从鲁滨逊的做法中能看出他怎样的人生态度？', passage: '我开始尽可能地安慰自己，把我处境中的坏处与好处对照一下，找到一些可以感激的事情。我说服自己，在这荒无人烟的小岛上，我至少还有粮食、工具和身体，比起死去的人已是万幸。', answer: '能看出鲁滨逊积极乐观、知足常乐、不畏艰险的人生态度。他用坏处与好处对照来安慰自己，在困境中看到希望，顽强地活下去。', explanation: '从"安慰自己""对照""万幸"等体会积极乐观态度。' }
    ]
  },

  /* ============================== 四年级数学上册第二单元 单元卷 ============================== */
  {
    id: 'p040',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p040q1', type: '填空题', score: 4, text: '测量土地面积常用____和____作单位。', answer: '公顷、平方千米', explanation: '测量较大土地面积时常用公顷和平方千米。' },
      { id: 'p040q2', type: '填空题', score: 4, text: '1公顷=____平方米，1平方千米=____公顷。', answer: '10000、100', explanation: '边长100米的正方形面积是1公顷=10000平方米。' },
      { id: 'p040q3', type: '填空题', score: 4, text: '边长是____米的正方形面积是1公顷；边长是____米的正方形面积是1平方千米。', answer: '100、1000', explanation: '100×100=10000平方米=1公顷；1000×1000=1000000平方米=1平方千米。' },
      { id: 'p040q4', type: '填空题', score: 4, text: '北京故宫占地面积约72____。（填面积单位）', answer: '公顷', explanation: '故宫面积约72公顷，用公顷作单位合适。' },
      { id: 'p040q5', type: '选择题', score: 4, text: '下面面积最大的是（  ）', options: ['A. 1公顷', 'B. 9999平方米', 'C. 1平方千米', 'D. 1000平方米'], answer: 2, explanation: '1平方千米=100公顷，远大于其他选项。' },
      { id: 'p040q6', type: '选择题', score: 4, text: '"鸟巢"国家体育场占地面积约20（  ）', options: ['A. 平方米', 'B. 公顷', 'C. 平方千米', 'D. 平方分米'], answer: 1, explanation: '鸟巢占地约20公顷。' },
      { id: 'p040q7', type: '选择题', score: 4, text: '1平方千米比1公顷多（  ）公顷', options: ['A. 99', 'B. 100', 'C. 1', 'D. 9'], answer: 0, explanation: '1平方千米=100公顷，100-1=99公顷。' },
      { id: 'p040q8', type: '判断题', score: 3, text: '测量一个教室的面积用公顷作单位。（  ）', answer: '错误', explanation: '教室面积应用平方米作单位。' },
      { id: 'p040q9', type: '判断题', score: 3, text: '1平方千米=1000000平方米。（  ）', answer: '正确', explanation: '1平方千米=1000×1000=1000000平方米。' },
      { id: 'p040q10', type: '应用题', score: 16, text: '一个长方形果园长600米，宽500米。这个果园面积是多少公顷？多少个这样的果园面积是1平方千米？', answer: '面积：600×500=300000平方米=30公顷；1平方千米=100公顷，100÷30≈3（个），约3个这样的果园是1平方千米。', explanation: '先算平方米再换算公顷，1公顷=10000平方米；1平方千米=100公顷。' }
    ]
  },

  /* ============================== 四年级数学上册第三单元 单元卷 ============================== */
  {
    id: 'p041',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p041q1', type: '填空题', score: 4, text: '从一点引出两条____所组成的图形叫做角。', answer: '射线', explanation: '角由一个顶点和两条射线组成。' },
      { id: 'p041q2', type: '填空题', score: 4, text: '1平角=____度，1周角=____度。', answer: '180、360', explanation: '平角180°，周角360°。' },
      { id: 'p041q3', type: '填空题', score: 4, text: '1周角=____平角=____直角。', answer: '2、4', explanation: '360°=2×180°=4×90°。' },
      { id: 'p041q4', type: '填空题', score: 4, text: '锐角____90°，钝角大于____而小于180°。', answer: '小于、90°', explanation: '锐角小于90°，钝角在90°到180°之间。' },
      { id: 'p041q5', type: '选择题', score: 4, text: '下面是钝角的是（  ）', options: ['A. 45°', 'B. 90°', 'C. 120°', 'D. 200°'], answer: 2, explanation: '钝角大于90°小于180°，120°是钝角。' },
      { id: 'p041q6', type: '选择题', score: 4, text: '用一副三角板不能拼出的角是（  ）', options: ['A. 15°', 'B. 75°', 'C. 105°', 'D. 130°'], answer: 3, explanation: '三角板有30°、45°、60°、90°，能拼出15°、75°、105°等，拼不出130°。' },
      { id: 'p041q7', type: '选择题', score: 4, text: '钟面上3时整，时针和分针所成的角是（  ）', options: ['A. 锐角', 'B. 直角', 'C. 钝角', 'D. 平角'], answer: 1, explanation: '3时整时针分针成90°，是直角。' },
      { id: 'p041q8', type: '判断题', score: 3, text: '大于90°的角都是钝角。（  ）', answer: '错误', explanation: '钝角必须大于90°且小于180°。' },
      { id: 'p041q9', type: '判断题', score: 3, text: '用量角器量角时，量角器的中心要与角的顶点重合。（  ）', answer: '正确', explanation: '量角器中心对准角的顶点才能量准。' },
      { id: 'p041q10', type: '应用题', score: 16, text: '已知∠1=35°，∠1和∠2拼成一个直角，∠2是多少度？如果∠1和∠3拼成一个平角，∠3是多少度？', answer: '∠2=90°-35°=55°；∠3=180°-35°=145°。', explanation: '直角=90°，平角=180°，用减法求未知角。' }
    ]
  },

  /* ============================== 四年级数学上册第四单元 单元卷 ============================== */
  {
    id: 'p042',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p042q1', type: '填空题', score: 4, text: '计算145×12时，先算145×2=____，再算145×10=____，最后相加得____。', answer: '290、1450、1740', explanation: '用两位数个位和十位分别乘，再相加。' },
      { id: 'p042q2', type: '填空题', score: 4, text: '250×40的积末尾有____个0。', answer: '4', explanation: '25×4=100，再加两个0共4个0，得10000。' },
      { id: 'p042q3', type: '填空题', score: 4, text: '一个因数不变，另一个因数乘5，积____。', answer: '乘5', explanation: '积的变化规律：一个因数不变，另一个因数乘几，积也乘几。' },
      { id: 'p042q4', type: '填空题', score: 4, text: '速度×时间=____，已知路程和速度求时间用____。', answer: '路程、路程÷速度', explanation: '速度=路程÷时间，所以时间=路程÷速度。' },
      { id: 'p042q5', type: '选择题', score: 4, text: '203×50的积是（  ）', options: ['A. 10150', 'B. 1015', 'C. 10500', 'D. 10050'], answer: 0, explanation: '203×50=10150。' },
      { id: 'p042q6', type: '选择题', score: 4, text: '两个数相乘，一个因数乘10，另一个因数除以10，积（  ）', options: ['A. 乘10', 'B. 除以10', 'C. 不变', 'D. 乘100'], answer: 2, explanation: '一个因数乘10另一个除以10，积不变。' },
      { id: 'p042q7', type: '选择题', score: 4, text: '一辆汽车每小时行80千米，3小时行多少千米？正确列式是（  ）', options: ['A. 80÷3', 'B. 80×3', 'C. 80+3', 'D. 80-3'], answer: 1, explanation: '路程=速度×时间=80×3。' },
      { id: 'p042q8', type: '判断题', score: 3, text: '计算240×30时可以先算24×3=72，再在末尾添两个0。（  ）', answer: '正确', explanation: '240×30=7200，先算24×3再添两个0。' },
      { id: 'p042q9', type: '判断题', score: 3, text: '两个因数相乘，积一定比每个因数都大。（  ）', answer: '错误', explanation: '如1×0=0，积不一定比因数大。' },
      { id: 'p042q10', type: '应用题', score: 16, text: '商店运来25箱饮料，每箱24瓶，每瓶卖5元。这些饮料一共可以卖多少元？', answer: '25×24×5=600×5=3000（元）。先算25×24=600瓶，再算600×5=3000元。', explanation: '先求总瓶数25×24，再乘单价求总价。' }
    ]
  },

  /* ============================== 四年级数学下册第一单元 单元卷 ============================== */
  {
    id: 'p043',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学下册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p043q1', type: '填空题', score: 4, text: '在没有括号的算式里，既有加减又有乘除，要先算____，再算____。', answer: '乘除法、加减法', explanation: '先乘除后加减。' },
      { id: 'p043q2', type: '填空题', score: 4, text: '一个数加上____，还得原数；一个数减去____，等于0。', answer: '0、它本身', explanation: 'a+0=a，a-a=0。' },
      { id: 'p043q3', type: '填空题', score: 4, text: '0除以一个____的数都得0；____不能作除数。', answer: '非0、0', explanation: '0除以非0数得0，0不能作除数。' },
      { id: 'p043q4', type: '填空题', score: 4, text: '根据36+48=84，写出两道减法算式：____、____。', answer: '84-36=48、84-48=36', explanation: '利用加减法互逆关系。' },
      { id: 'p043q5', type: '选择题', score: 4, text: '下面计算结果是0的是（  ）', options: ['A. 5÷0', 'B. 0÷7', 'C. 8÷0', 'D. 7÷0'], answer: 1, explanation: '0除以非0数得0；除数不能为0。' },
      { id: 'p043q6', type: '选择题', score: 4, text: '计算(36+14)×2时，应先算（  ）', options: ['A. 14×2', 'B. 36+14', 'C. 36×2', 'D. 随便'], answer: 1, explanation: '有括号先算括号里面的。' },
      { id: 'p043q7', type: '选择题', score: 4, text: '与75-25+15结果相等的是（  ）', options: ['A. 75-(25+15)', 'B. 75-(25-15)', 'C. 75+25-15', 'D. (75-25)×15'], answer: 1, explanation: '75-25+15=65，75-(25-15)=75-10=65，相等。' },
      { id: 'p043q8', type: '判断题', score: 3, text: '0除以任何数都得0。（  ）', answer: '错误', explanation: '0除以非0数都得0，0不能作除数。' },
      { id: 'p043q9', type: '判断题', score: 3, text: '算式里有小括号的，要先算小括号里面的。（  ）', answer: '正确', explanation: '有括号先算括号里。' },
      { id: 'p043q10', type: '应用题', score: 16, text: '学校买来45套桌椅，每张桌子85元，每把椅子35元，一共用了多少元？', answer: '(85+35)×45=120×45=5400（元）。先求一套桌椅的价钱，再乘套数。', explanation: '一套桌椅=85+35=120元，再乘45套。' }
    ]
  },

  /* ============================== 四年级数学下册第二单元 单元卷 ============================== */
  {
    id: 'p044',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p044q1', type: '填空题', score: 4, text: '观察一个由小正方体搭成的物体，可以从____、____和左面三个方向观察。', answer: '正面、上面', explanation: '通常从正面、上面、左面观察。' },
      { id: 'p044q2', type: '填空题', score: 4, text: '从正面、上面、左面看到的都是"田"字形（2×2）的物体，至少由____个小正方体拼成。', answer: '4', explanation: '从三个方向都是2×2，最少4个摆成2层每层2个。' },
      { id: 'p044q3', type: '填空题', score: 4, text: '一个物体从正面看是3个正方形横着排成一行，从左面看是1个正方形，这个物体至少由____个小正方体搭成。', answer: '3', explanation: '正面3个一行、左面1个，说明只有一层3个，至少3个。' },
      { id: 'p044q4', type: '填空题', score: 4, text: '同一个物体，从不同方向看到的形状____（填"一定"或"不一定"）相同。', answer: '不一定', explanation: '从不同方向看可能相同也可能不同。' },
      { id: 'p044q5', type: '选择题', score: 4, text: '从正面、上面看一个物体都是"田"字形，这个物体由（  ）个小正方体组成', options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], answer: 1, explanation: '田字形2×2，从两个方向看至少4个。' },
      { id: 'p044q6', type: '选择题', score: 4, text: '观察由小正方体搭成的物体，下列说法正确的是（  ）', options: ['A. 从任何方向看都一样', 'B. 从不同方向看可能不同', 'C. 只能从正面看', 'D. 从上面看一定最多'], answer: 1, explanation: '从不同方向看形状可能不同。' },
      { id: 'p044q7', type: '选择题', score: 4, text: '一个由小正方体搭成的物体，从正面和上面看都是"田"字形，从左面看到（  ）个正方形', options: ['A. 1', 'B. 2', 'C. 4', 'D. 6'], answer: 2, explanation: '田字形2×2从左面看也是2×2共4个。' },
      { id: 'p044q8', type: '判断题', score: 3, text: '从不同方向观察同一个物体，看到的形状一定不相同。（  ）', answer: '错误', explanation: '有时从不同方向看形状可能相同。' },
      { id: 'p044q9', type: '判断题', score: 3, text: '从正面看到的形状和从上面看到的形状可能相同。（  ）', answer: '正确', explanation: '某些物体从不同方向看可能相同。' },
      { id: 'p044q10', type: '应用题', score: 16, text: '一个由小正方体搭成的物体，从正面看是3个正方形排成一行，从上面看也是3个正方形排成一行，从左面看是2个正方形上下叠成一行。这个物体至少由几个小正方体搭成？', answer: '至少4个。底层3个横排（正面、上面都看到3个正方形），其中1个上面再叠1个（左面看到2个），共3+1=4个。', explanation: '先确定底层3个，再根据左面看到的2个推断有一处叠两层。' }
    ]
  },

  /* ============================== 四年级数学下册第三单元 单元卷 ============================== */
  {
    id: 'p045',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学下册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p045q1', type: '填空题', score: 4, text: '加法交换律用字母表示是____。', answer: 'a+b=b+a', explanation: '加法交换律：两个加数交换位置和不变。' },
      { id: 'p045q2', type: '填空题', score: 4, text: '乘法分配律用字母表示是(a+b)×c=____。', answer: 'a×c+b×c', explanation: '两个数的和乘一个数等于分别相乘再相加。' },
      { id: 'p045q3', type: '填空题', score: 4, text: '25×13×4=25×____×13运用了乘法____律。', answer: '4、交换', explanation: '交换13和4的位置使计算简便。' },
      { id: 'p045q4', type: '填空题', score: 4, text: '36×99+36=36×(99+____)=____，运用了乘法分配律。', answer: '1、3600', explanation: '把36看作36×1，即36×(99+1)=3600。' },
      { id: 'p045q5', type: '选择题', score: 4, text: '25×(40+4)=25×40+25×4运用了（  ）', options: ['A. 乘法交换律', 'B. 乘法结合律', 'C. 乘法分配律', 'D. 加法结合律'], answer: 2, explanation: '把和拆开分别相乘再相加是分配律。' },
      { id: 'p045q6', type: '选择题', score: 4, text: '25×36最简便的算法是（  ）', options: ['A. 25×30+25×6', 'B. 25×4×9', 'C. 25×40-25×4', 'D. 36×25'], answer: 1, explanation: '把36拆成4×9，25×4=100，再乘9得900。' },
      { id: 'p045q7', type: '选择题', score: 4, text: '与48×101结果相等的是（  ）', options: ['A. 48×100+1', 'B. 48×100+48', 'C. 48×100', 'D. 48+101'], answer: 1, explanation: '48×101=48×100+48×1，运用分配律。' },
      { id: 'p045q8', type: '判断题', score: 3, text: '乘法分配律可以写成a×(b+c)=a×b+a×c。（  ）', answer: '正确', explanation: '这是乘法分配律的基本形式。' },
      { id: 'p045q9', type: '判断题', score: 3, text: '25×(4+8)=25×4+25×8运用的是乘法结合律。（  ）', answer: '错误', explanation: '这是乘法分配律，不是结合律。' },
      { id: 'p045q10', type: '应用题', score: 16, text: '用简便方法计算：125×88，并写出简便的过程。', answer: '125×88=125×(8×11)=(125×8)×11=1000×11=11000。把88拆成8×11，再用乘法结合律简便计算。', explanation: '利用125×8=1000，把88拆成8×11凑整。' }
    ]
  },

  /* ============================== 四年级数学下册第四单元 单元卷 ============================== */
  {
    id: 'p046',
    subject: '数学',
    grade: '四年级',
    type: '单元卷',
    region: '全国',
    title: '人教版四年级数学下册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p046q1', type: '填空题', score: 4, text: '0.35里面有____个0.01；0.7里面有____个0.1。', answer: '35、7', explanation: '小数位数决定计数单位。' },
      { id: 'p046q2', type: '填空题', score: 4, text: '把0.05扩大到原来的100倍是____；把3.6缩小到原来的1/100是____。', answer: '5、0.036', explanation: '小数点右移两位扩大100倍，左移两位缩小到1/100。' },
      { id: 'p046q3', type: '填空题', score: 4, text: '小数的末尾添上0或去掉0，小数的大小____。', answer: '不变', explanation: '这是小数的基本性质。' },
      { id: 'p046q4', type: '填空题', score: 4, text: '把3.054保留两位小数是____，保留一位小数是____。', answer: '3.05、3.1', explanation: '用四舍五入法取近似数。' },
      { id: 'p046q5', type: '选择题', score: 4, text: '与0.30相等的小数是（  ）', options: ['A. 0.03', 'B. 0.3', 'C. 3.0', 'D. 0.003'], answer: 1, explanation: '小数末尾去0大小不变，0.30=0.3。' },
      { id: 'p046q6', type: '选择题', score: 4, text: '把2.5的小数点向右移动两位，原数（  ）', options: ['A. 扩大到原来的100倍', 'B. 缩小到原来的1/100', 'C. 扩大10倍', 'D. 不变'], answer: 0, explanation: '小数点右移两位扩大到原来的100倍。' },
      { id: 'p046q7', type: '选择题', score: 4, text: '下面各数最大的是（  ）', options: ['A. 0.305', 'B. 0.035', 'C. 3.05', 'D. 0.350'], answer: 2, explanation: '3.05大于其他各数。' },
      { id: 'p046q8', type: '判断题', score: 3, text: '0.5和0.50大小相等，意义也完全相同。（  ）', answer: '错误', explanation: '大小相等但意义不同，0.5是5个0.1，0.50是50个0.01。' },
      { id: 'p046q9', type: '判断题', score: 3, text: '把一个数扩大到原来的1000倍，就是把小数点向右移动三位。（  ）', answer: '正确', explanation: '小数点右移三位即扩大1000倍。' },
      { id: 'p046q10', type: '应用题', score: 16, text: '100千克小麦可以磨面粉75千克，1千克小麦可以磨面粉多少千克？1吨小麦可以磨面粉多少千克？', answer: '1千克小麦磨面粉：75÷100=0.75（千克）；1吨=1000千克，1吨小麦磨面粉：0.75×1000=750（千克）。', explanation: '先用除法求1千克磨多少，再乘1000求1吨磨多少。' }
    ]
  },

  /* ============================== 五年级数学上册第一单元 单元卷 ============================== */
  {
    id: 'p047',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学上册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p047q1', type: '填空题', score: 4, text: '2.5×4=____，0.32×0.8=____。', answer: '10、0.256', explanation: '2.5×4=10；0.32×0.8=0.256。' },
      { id: 'p047q2', type: '填空题', score: 4, text: '计算0.32×0.8时，因数中共有____位小数，积有____位小数。', answer: '三、三', explanation: '0.32两位加0.8一位共三位，积0.256是三位小数。' },
      { id: 'p047q3', type: '填空题', score: 4, text: '把3.67×0.9的积保留两位小数约是____。（3.67×0.9=3.303）', answer: '3.30', explanation: '3.303保留两位小数，第三位3舍去，得3.30。' },
      { id: 'p047q4', type: '填空题', score: 4, text: '2.5×3.2×0.4运用简便算法=(____×0.4)×3.2=____。', answer: '2.5、3.2', explanation: '(2.5×0.4)×3.2=1×3.2=3.2。' },
      { id: 'p047q5', type: '选择题', score: 4, text: '0.24×100的积是（  ）', options: ['A. 2.4', 'B. 24', 'C. 0.024', 'D. 240'], answer: 1, explanation: '0.24×100=24，小数点右移两位。' },
      { id: 'p047q6', type: '选择题', score: 4, text: '下列算式中积最大的是（  ）', options: ['A. 2.5×0.9', 'B. 2.5×1', 'C. 2.5×1.1', 'D. 2.5×0.5'], answer: 2, explanation: '乘的数越大积越大，1.1最大。' },
      { id: 'p047q7', type: '选择题', score: 4, text: '与0.125×8结果相等的是（  ）', options: ['A. 12.5×8', 'B. 1.25×0.8', 'C. 0.125×80', 'D. 1.25×8'], answer: 1, explanation: '0.125×8=1，1.25×0.8=1，相等。' },
      { id: 'p047q8', type: '判断题', score: 3, text: '一个数（0除外）乘小于1的数，积比原数小。（  ）', answer: '正确', explanation: '乘小于1的数积变小。' },
      { id: 'p047q9', type: '判断题', score: 3, text: '3.5×0.2的积有三位小数。（  ）', answer: '错误', explanation: '3.5×0.2=0.7，只有一位小数。' },
      { id: 'p047q10', type: '应用题', score: 16, text: '一头牛每天吃草6.5千克，照这样计算，这头牛30天一共吃草多少千克？', answer: '6.5×30=195（千克）。用每天吃草量乘天数。', explanation: '用每份数×份数求总量。' }
    ]
  },

  /* ============================== 五年级数学上册第二单元 单元卷 ============================== */
  {
    id: 'p048',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p048q1', type: '填空题', score: 4, text: '用数对确定位置时，第一个数表示____，第二个数表示____。', answer: '列、行', explanation: '数对(列,行)，列从左往右，行从前往后。' },
      { id: 'p048q2', type: '填空题', score: 4, text: '小明在第3列第4行，他的位置用数对表示是____。', answer: '(3,4)', explanation: '先列后行。' },
      { id: 'p048q3', type: '填空题', score: 4, text: '数对(5,2)表示第____列第____行。', answer: '5、2', explanation: '第一个数是列，第二个数是行。' },
      { id: 'p048q4', type: '填空题', score: 4, text: '在同一列的两个点，它们的数对中____相同；在同一行的两个点，它们的数对中____相同。', answer: '第一个数、第二个数', explanation: '同列第一个数相同，同行第二个数相同。' },
      { id: 'p048q5', type: '选择题', score: 4, text: '下面数对表示第4列第5行的是（  ）', options: ['A. (5,4)', 'B. (4,5)', 'C. (4,4)', 'D. (5,5)'], answer: 1, explanation: '第4列第5行写作(4,5)。' },
      { id: 'p048q6', type: '选择题', score: 4, text: '与(3,5)在同一列的数对是（  ）', options: ['A. (5,3)', 'B. (3,2)', 'C. (2,5)', 'D. (5,5)'], answer: 1, explanation: '同列第一个数相同，(3,2)第一个数是3。' },
      { id: 'p048q7', type: '选择题', score: 4, text: '数对(2,3)和(3,2)表示的位置（  ）', options: ['A. 相同', 'B. 不同', 'C. 可能相同', 'D. 无法判断'], answer: 1, explanation: '数对顺序不同表示不同位置。' },
      { id: 'p048q8', type: '判断题', score: 3, text: '数对(4,4)中两个4表示的意义相同。（  ）', answer: '错误', explanation: '第一个4是列，第二个4是行，意义不同。' },
      { id: 'p048q9', type: '判断题', score: 3, text: '王华的位置是(3,6)，李明的位置是(5,6)，他们在同一行。（  ）', answer: '正确', explanation: '第二个数都是6，同一行。' },
      { id: 'p048q10', type: '应用题', score: 16, text: '教室里小红的位置是(2,3)，小丽在她正后方第一个位置，小丽的位置用数对怎样表示？如果小丽在小红右边第一个位置呢？', answer: '正后方是同一列、行数加1，所以小丽在(2,4)；右边是同一行、列数加1，所以小丽在(3,3)。', explanation: '正后方同列行数加1，右边同行列数加1。' }
    ]
  },

  /* ============================== 五年级数学上册第三单元 单元卷 ============================== */
  {
    id: 'p049',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p049q1', type: '填空题', score: 4, text: '7.2÷0.04=____÷4，依据是商不变性质，被除数和除数同时乘____。', answer: '720、100', explanation: '被除数和除数同时扩大100倍商不变，7.2×100=720。' },
      { id: 'p049q2', type: '填空题', score: 4, text: '2.5÷0.4的商的最高位在____位，商是____。', answer: '个、6.25', explanation: '2.5÷0.4=6.25，最高位是个位。' },
      { id: 'p049q3', type: '填空题', score: 4, text: '3÷6的商用循环小数表示是____，保留两位小数约是____。', answer: '0.5、0.50', explanation: '3÷6=0.5，是有限小数，保留两位为0.50。' },
      { id: 'p049q4', type: '填空题', score: 4, text: '1÷3的商用循环小数表示是____，循环节是____。', answer: '0.333…、3', explanation: '1÷3=0.3(3循环)，循环节是3。' },
      { id: 'p049q5', type: '选择题', score: 4, text: '下面各数中是循环小数的是（  ）', options: ['A. 0.25', 'B. 0.333…', 'C. 3.14', 'D. 0.125'], answer: 1, explanation: '0.333…是循环小数，有循环节3。' },
      { id: 'p049q6', type: '选择题', score: 4, text: '2.4÷0.5的结果与（  ）相等。', options: ['A. 2.4×0.5', 'B. 24÷5', 'C. 2.4×2', 'D. 0.24÷5'], answer: 2, explanation: '2.4÷0.5=4.8，2.4×2=4.8，相等。' },
      { id: 'p049q7', type: '选择题', score: 4, text: '一个油瓶最多装油2.5千克，要把20千克油装完，至少需要（  ）个这样的油瓶。', options: ['A. 7', 'B. 8', 'C. 9', 'D. 10'], answer: 1, explanation: '20÷2.5=8，正好装满8瓶。' },
      { id: 'p049q8', type: '判断题', score: 3, text: '4.83÷0.7的商一定大于4.83。（  ）', answer: '正确', explanation: '除以小于1的数商大于被除数。' },
      { id: 'p049q9', type: '判断题', score: 3, text: '循环小数都是无限小数，无限小数也都是循环小数。（  ）', answer: '错误', explanation: '无限小数不一定是循环小数，如π的近似值是无限不循环小数。' },
      { id: 'p049q10', type: '应用题', score: 16, text: '一辆汽车3小时行驶了195千米。照这样计算，这辆汽车行驶260千米需要多少小时？', answer: '速度：195÷3=65（千米/时）；时间：260÷65=4（小时）。', explanation: '先求速度再求时间，用除法计算。' }
    ]
  },

  /* ============================== 五年级数学上册第四单元 单元卷 ============================== */
  {
    id: 'p050',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p050q1', type: '填空题', score: 4, text: '口袋里有5个红球、3个白球（除颜色外完全相同），任意摸一个，摸到____球的可能性大。', answer: '红', explanation: '红球数量多，摸到可能性大。' },
      { id: 'p050q2', type: '填空题', score: 4, text: '掷一枚骰子，朝上的点数可能有____种结果，每种结果的可能性____。', answer: '6、相等', explanation: '骰子6个面，每个面朝上可能性相等。' },
      { id: 'p050q3', type: '填空题', score: 4, text: '从装有8个红球、2个白球的袋中任意摸一个，摸到红球的可能性比摸到白球的可能性____。', answer: '大', explanation: '红球8个多于白球2个，摸到红球可能性大。' },
      { id: 'p050q4', type: '填空题', score: 4, text: '一枚硬币掷2次，两次都正面朝上的可能性比只出现一次正面朝上的可能性____。', answer: '小', explanation: '两次都正面概率1/4，一次正面概率2/4=1/2，前者小。' },
      { id: 'p050q5', type: '选择题', score: 4, text: '下列事件中，一定发生的是（  ）', options: ['A. 明天会下雨', 'B. 太阳从东方升起', 'C. 买彩票中奖', 'D. 抛硬币正面朝上'], answer: 1, explanation: '太阳东升是必然事件。' },
      { id: 'p050q6', type: '选择题', score: 4, text: '一个袋子里有10个球，任意摸一个摸到红球的可能性最大，袋中红球可能有（  ）个。', options: ['A. 1', 'B. 2', 'C. 5', 'D. 9'], answer: 3, explanation: '红球9个最多，摸到红球可能性最大。' },
      { id: 'p050q7', type: '选择题', score: 4, text: '转动转盘，指针停在（  ）区域可能性最小。', options: ['A. 红色占一半', 'B. 蓝色占四分之一', 'C. 黄色占八分之一', 'D. 绿色占八分之一'], answer: 2, explanation: '黄色占八分之一最小，可能性最小。' },
      { id: 'p050q8', type: '判断题', score: 3, text: '可能性很大的事件一定会发生。（  ）', answer: '错误', explanation: '可能性大不等于一定发生。' },
      { id: 'p050q9', type: '判断题', score: 3, text: '某地天气预报说降水概率80%，那么明天一定会下雨。（  ）', answer: '错误', explanation: '80%可能性大但不一定发生。' },
      { id: 'p050q10', type: '应用题', score: 16, text: '小明和小红玩摸球游戏。袋子里有3个红球、5个黄球、2个白球（除颜色外完全相同）。任意摸一个球，摸到哪种颜色球的可能性最大？摸到哪种颜色球的可能性最小？摸到红球的可能性比摸到白球的可能性大多少？', answer: '摸到黄球可能性最大（5个最多）；摸到白球可能性最小（2个最少）；红球比白球多1个，可能性大。', explanation: '根据各色球数量比较可能性大小，数量越多可能性越大。' }
    ]
  },

  /* ============================== 五年级数学下册第一单元 单元卷 ============================== */
  {
    id: 'p051',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学下册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p051q1', type: '填空题', score: 4, text: '从不同方向观察一个物体，看到的形状____相同。（填"一定"或"可能"）', answer: '可能', explanation: '从不同方向看可能相同也可能不同。' },
      { id: 'p051q2', type: '填空题', score: 4, text: '一个由小正方体搭成的物体，从正面看是品字形（上一中一下两），至少用____个小正方体。', answer: '4', explanation: '品字形至少底层3个、上层1个，共4个。' },
      { id: 'p051q3', type: '填空题', score: 4, text: '从正面、上面、左面观察一个由小正方体搭成的物体，最多能看出____种不同的形状。', answer: '3', explanation: '三个方向最多看出3种不同形状。' },
      { id: 'p051q4', type: '填空题', score: 4, text: '一个物体从正面看和从左面看都是，它最少由____个小正方体搭成。（一行两个）', answer: '2', explanation: '一行两个从正面左面都看到2个正方形。' },
      { id: 'p051q5', type: '选择题', score: 4, text: '从正面、上面、左面看一个物体，看到形状都是田字形，这个物体最少由（  ）个小正方体搭成。', options: ['A. 4', 'B. 6', 'C. 8', 'D. 2'], answer: 0, explanation: '田字形2×2从三个方向看至少4个摆2层每层2个。' },
      { id: 'p051q6', type: '选择题', score: 4, text: '观察由5个小正方体搭成的物体，从正面看到3个正方形排成一行，这个物体从左面看可能是（  ）', options: ['A. 1个正方形', 'B. 2个正方形', 'C. 3个正方形', 'D. 都有可能'], answer: 3, explanation: '5个正方体排法多样，从左面看几种情况都可能。' },
      { id: 'p051q7', type: '选择题', score: 4, text: '一个物体从正面和上面看都是，从左面看是，至少由（  ）个小正方体搭成。（正上一行3，左两个上下）', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], answer: 1, explanation: '底层3个横排，其中1个上面叠1个，共4个。' },
      { id: 'p051q8', type: '判断题', score: 3, text: '从不同方向观察同一个物体，看到的形状一定不相同。（  ）', answer: '错误', explanation: '有时不同方向看到的形状可能相同。' },
      { id: 'p051q9', type: '判断题', score: 3, text: '根据从一个方向看到的形状，可以确定物体的形状。（  ）', answer: '错误', explanation: '一个方向不能确定物体形状，需多个方向。' },
      { id: 'p051q10', type: '应用题', score: 16, text: '一个由小正方体搭成的物体，从正面看是3个正方形排成一行，从上面看是2个正方形排成一行（与正面方向垂直），从左面看是2个正方形上下叠一行。这个物体至少由几个小正方体搭成？', answer: '至少3个。底层排成L形2个方向共3个，从左面看2个说明一处叠两层，但底层3个已满足，叠1个共4个；重新分析：底层2个（一横一竖）从正面看到3个需再加1个，故底层3个，左面2个需叠1个，共4个。', explanation: '综合三个方向的视图确定层数和个数，至少4个。' }
    ]
  },

  /* ============================== 五年级数学下册第二单元 单元卷 ============================== */
  {
    id: 'p052',
    subject: '数学',
    grade: '五年级',
    type: '单元卷',
    region: '全国',
    title: '人教版五年级数学下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p052q1', type: '填空题', score: 4, text: '在36÷4=9中，____是____的因数，____是____的倍数。', answer: '4和9、36、36、4和9', explanation: '36能被4整除，4和9是36的因数，36是4和9的倍数。' },
      { id: 'p052q2', type: '填空题', score: 4, text: '18的因数有____，其中最小的是____，最大的是____。', answer: '1、2、3、6、9、18、1、18', explanation: '成对找出因数，最小因数1最大因数本身。' },
      { id: 'p052q3', type: '填空题', score: 4, text: '一个数既是12的因数，又是18的因数，这个数最大是____。', answer: '6', explanation: '12和18的最大公因数是6。' },
      { id: 'p052q4', type: '填空题', score: 4, text: '20以内（含20）的质数有____个，其中最大的是____。', answer: '8、19', explanation: '20以内质数2,3,5,7,11,13,17,19共8个。' },
      { id: 'p052q5', type: '选择题', score: 4, text: '下面各数中，既是偶数又是质数的是（  ）', options: ['A. 2', 'B. 4', 'C. 6', 'D. 9'], answer: 0, explanation: '2是唯一的偶质数。' },
      { id: 'p052q6', type: '选择题', score: 4, text: '合数至少有（  ）个因数。', options: ['A. 2', 'B. 3', 'C. 4', 'D. 1'], answer: 1, explanation: '合数除了1和本身还有别的因数，至少3个。' },
      { id: 'p052q7', type: '选择题', score: 4, text: '一个数既是15的倍数又是15的因数，这个数是（  ）', options: ['A. 5', 'B. 15', 'C. 30', 'D. 45'], answer: 1, explanation: '一个数既是自身的因数又是自身的倍数。' },
      { id: 'p052q8', type: '判断题', score: 3, text: '1是所有自然数的因数。（  ）', answer: '正确', explanation: '1是任何自然数的因数。' },
      { id: 'p052q9', type: '判断题', score: 3, text: '两个质数的和一定是合数。（  ）', answer: '错误', explanation: '2+3=5仍是质数。' },
      { id: 'p052q10', type: '应用题', score: 16, text: '有三根彩带，分别长24分米、36分米、48分米。现在要把它们剪成同样长的小段（每段是整分米），且不能有剩余。每段最长是多少分米？一共能剪成多少段？', answer: '24、36、48的最大公因数是12，每段最长12分米；24÷12+36÷12+48÷12=2+3+4=9（段）。', explanation: '求最大公因数得每段最长长度，再分别除以段长求和。' }
    ]
  },

  /* ============================== 六年级数学上册第一单元 单元卷 ============================== */
  {
    id: 'p053',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p053q1', type: '填空题', score: 4, text: '3/4×2表示求3/4的____倍是多少，结果是____。', answer: '2、3/2', explanation: '分数乘整数即求几个该分数的和。' },
      { id: 'p053q2', type: '填空题', score: 4, text: '2/5×3/4=____，依据是分子乘分子作____，分母乘分母作____。', answer: '3/10、分子、分母', explanation: '分数乘法分子相乘作新分子，分母相乘作新分母。' },
      { id: 'p053q3', type: '填空题', score: 4, text: '12的1/3是____；24的5/8是____。', answer: '4、15', explanation: '12×1/3=4；24×5/8=15。' },
      { id: 'p053q4', type: '填空题', score: 4, text: '一桶油重5千克，用了2/5，用了____千克，还剩____千克。', answer: '2、3', explanation: '5×2/5=2千克；5-2=3千克。' },
      { id: 'p053q5', type: '选择题', score: 4, text: '下面算式中结果最大的是（  ）', options: ['A. 3/5×4/5', 'B. 3/5×1', 'C. 3/5×5/4', 'D. 3/5×0'], answer: 2, explanation: '乘大于1的数积变大，5/4大于1。' },
      { id: 'p053q6', type: '选择题', score: 4, text: '一根绳子长3/4米，截去它的1/3，截去（  ）米。', options: ['A. 1/4', 'B. 1/3', 'C. 3/4', 'D. 1/2'], answer: 0, explanation: '3/4×1/3=1/4米。' },
      { id: 'p053q7', type: '选择题', score: 4, text: 'a是非零自然数，下面结果小于a的是（  ）', options: ['A. a×1', 'B. a×3/2', 'C. a×5/4', 'D. a×1/2'], answer: 3, explanation: '乘小于1的数积比原数小，1/2小于1。' },
      { id: 'p053q8', type: '判断题', score: 3, text: '两个真分数相乘的积一定小于其中任意一个分数。（  ）', answer: '正确', explanation: '真分数小于1，相乘结果变小。' },
      { id: 'p053q9', type: '判断题', score: 3, text: '1吨的3/5和3吨的1/5一样重。（  ）', answer: '正确', explanation: '1×3/5=3/5吨，3×1/5=3/5吨，相等。' },
      { id: 'p053q10', type: '应用题', score: 16, text: '一袋大米重50千克，第一天吃了1/5，第二天吃了剩下的1/4。第二天吃了多少千克？还剩多少千克？', answer: '第一天吃50×1/5=10千克，剩50-10=40千克；第二天吃40×1/4=10千克；还剩40-10=30千克。', explanation: '注意第二天吃的是剩下的1/4，先求第一天剩余再求第二天。' }
    ]
  },

  /* ============================== 六年级数学上册第二单元 单元卷 ============================== */
  {
    id: 'p054',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p054q1', type: '填空题', score: 4, text: '确定物体位置需要____和____两个条件。', answer: '方向、距离', explanation: '位置由方向和距离共同确定。' },
      { id: 'p054q2', type: '填空题', score: 4, text: '以正北为0°，顺时针方向旋转90°是____方向，旋转180°是____方向。', answer: '正东、正南', explanation: '从正北顺时针90°为正东，180°为正南。' },
      { id: 'p054q3', type: '填空题', score: 4, text: '小明家在学校东偏北30°方向400米处，学校在小明家____偏____30°方向400米处。', answer: '西、南', explanation: '方向是相对的，相反方向为西偏南30°。' },
      { id: 'p054q4', type: '填空题', score: 4, text: '在平面图上，通常用____来确定方向，1厘米表示实际200米，比例尺是____。', answer: '方向标、1:20000', explanation: '200米=20000厘米，比例尺1:20000。' },
      { id: 'p054q5', type: '选择题', score: 4, text: '北偏西40°方向也就是（  ）方向。', options: ['A. 西偏北40°', 'B. 西偏北50°', 'C. 北偏东40°', 'D. 西偏南50°'], answer: 1, explanation: '北偏西40°即从北向西40°，等于从西向北50°。' },
      { id: 'p054q6', type: '选择题', score: 4, text: '图书馆在学校的南偏东30°方向，则学校在图书馆的（  ）方向。', options: ['A. 南偏东30°', 'B. 北偏西30°', 'C. 北偏东30°', 'D. 南偏西30°'], answer: 1, explanation: '相反方向，南偏东30°的相反是北偏西30°。' },
      { id: 'p054q7', type: '选择题', score: 4, text: '甲在乙的东偏南45°方向300米处，乙在甲的（  ）方向300米处。', options: ['A. 东偏南45°', 'B. 西偏北45°', 'C. 北偏西45°', 'D. 南偏东45°'], answer: 1, explanation: '东偏南45°相反方向是西偏北45°。' },
      { id: 'p054q8', type: '判断题', score: 3, text: '只要知道方向就可以确定物体的位置。（  ）', answer: '错误', explanation: '确定位置需要方向和距离两个条件。' },
      { id: 'p054q9', type: '判断题', score: 3, text: '东偏南30°和南偏东60°表示同一方向。（  ）', answer: '正确', explanation: '东偏南30°即从东向南30°，等于从南向东60°。' },
      { id: 'p054q10', type: '应用题', score: 16, text: '以学校为观测点，书店在学校的东偏北40°方向500米处，超市在学校的西偏南30°方向400米处。请在描述中说明：从书店看超市在什么方向？（提示：先画图理解相对位置）', answer: '书店在学校的东偏北40°方向500米，超市在学校的西偏南30°方向400米。书店位于学校东偏北方向，超市位于学校西偏南方向，两者位于学校相对的方向，从书店看超市在西偏南方向（约南偏西方向）。', explanation: '画出示意图，以学校为原点确定书店和超市的相对位置，再以书店为观测点描述超市方向。' }
    ]
  },

  /* ============================== 六年级数学上册第三单元 单元卷 ============================== */
  {
    id: 'p055',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p055q1', type: '填空题', score: 4, text: '3/5÷3表示已知一个数的3倍是3/5，求这个数，结果是____。', answer: '1/5', explanation: '3/5÷3=3/5×1/3=1/5。' },
      { id: 'p055q2', type: '填空题', score: 4, text: '除以一个数（0除外）等于乘这个数的____，4/9÷2/3=4/9×____=____。', answer: '倒数、3/2、2/3', explanation: '除以2/3等于乘2/3的倒数3/2。' },
      { id: 'p055q3', type: '填空题', score: 4, text: '5/6的倒数是____，____的倒数是1/4。', answer: '6/5、4', explanation: '分子分母互换得倒数。' },
      { id: 'p055q4', type: '填空题', score: 4, text: '2/3÷4/5=____÷____=____×____=____。', answer: '2/3、4/5、2/3、5/4、5/6', explanation: '除法变乘法乘倒数。' },
      { id: 'p055q5', type: '选择题', score: 4, text: '下面算式中结果最大的是（  ）', options: ['A. 2/3÷4/5', 'B. 2/3÷1', 'C. 2/3÷3/2', 'D. 2/3÷5/4'], answer: 0, explanation: '除以大于1的数商变小，除以小于1的数商变大，4/5小于1商最大。' },
      { id: 'p055q6', type: '选择题', score: 4, text: 'a是非零自然数，下面结果大于a的是（  ）', options: ['A. a÷1', 'B. a÷3/2', 'C. a÷5/4', 'D. a÷1/2'], answer: 3, explanation: '除以小于1的数商变大，1/2小于1。' },
      { id: 'p055q7', type: '选择题', score: 4, text: '一个数的3/4是15，这个数是（  ）', options: ['A. 20', 'B. 15', 'C. 11.25', 'D. 60'], answer: 0, explanation: '15÷3/4=15×4/3=20。' },
      { id: 'p055q8', type: '判断题', score: 3, text: '1的倒数是1，0的倒数是0。（  ）', answer: '错误', explanation: '1的倒数是1，但0没有倒数。' },
      { id: 'p055q9', type: '判断题', score: 3, text: '一个数除以分数，等于这个数乘分数的倒数。（  ）', answer: '正确', explanation: '这是分数除法的计算法则。' },
      { id: 'p055q10', type: '应用题', score: 16, text: '一辆汽车从甲地开往乙地，已行了全程的2/5，距离中点还有15千米。甲乙两地相距多少千米？', answer: '中点是1/2，已行2/5，中点比已行多1/2-2/5=1/10；全程的1/10是15千米，全程=15÷1/10=150（千米）。', explanation: '求出中点与已行路程对应的分率差，再用对应量除以分率求全程。' }
    ]
  },

  /* ============================== 六年级数学下册第一单元 单元卷 ============================== */
  {
    id: 'p056',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第一单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p056q1', type: '填空题', score: 4, text: '规定零上温度记为正，零下温度记为负，+5℃表示____，-8℃表示____。', answer: '零上5摄氏度、零下8摄氏度', explanation: '正负数表示相反意义的量。' },
      { id: 'p056q2', type: '填空题', score: 4, text: '在-3、+5、0、-1.2、2/5这些数中，正数有____，负数有____，____既不是正数也不是负数。', answer: '+5和2/5、-3和-1.2、0', explanation: '0是正负数的分界点。' },
      { id: 'p056q3', type: '填空题', score: 4, text: '如果向东走10米记作+10米，那么向西走15米记作____米，原地不动记作____米。', answer: '-15、0', explanation: '相反方向用负数表示。' },
      { id: 'p056q4', type: '填空题', score: 4, text: '在数轴上，-5在-2的____边，+3在+1的____边。（填左或右）', answer: '左、右', explanation: '数轴上从左到右数依次增大。' },
      { id: 'p056q5', type: '选择题', score: 4, text: '下面说法正确的是（  ）', options: ['A. 0是正数', 'B. 0是负数', 'C. 0既不是正数也不是负数', 'D. 0既是正数又是负数'], answer: 2, explanation: '0是正负数的分界，既非正也非负。' },
      { id: 'p056q6', type: '选择题', score: 4, text: '比0小3的数是（  ）', options: ['A. 3', 'B. -3', 'C. 0', 'D. 1/3'], answer: 1, explanation: '比0小用负数表示。' },
      { id: 'p056q7', type: '选择题', score: 4, text: '在-4和+4之间的整数有（  ）个。', options: ['A. 7', 'B. 8', 'C. 9', 'D. 6'], answer: 0, explanation: '有-3,-2,-1,0,1,2,3共7个。' },
      { id: 'p056q8', type: '判断题', score: 3, text: '没有最小的负数，也没有最大的正数。（  ）', answer: '正确', explanation: '正负数都是无限的。' },
      { id: 'p056q9', type: '判断题', score: 3, text: '所有的正数都大于0，所有的负数都小于0。（  ）', answer: '正确', explanation: '正数大于0，负数小于0。' },
      { id: 'p056q10', type: '应用题', score: 16, text: '一种饼干包装袋上标有"净含量300±5克"，这表示什么意思？这种饼干净含量最多是多少克？最少是多少克？', answer: '净含量300±5克表示标准净含量300克，允许误差±5克；最多300+5=305克，最少300-5=295克。', explanation: '±5克表示允许比标准多5克或少5克的误差范围。' }
    ]
  },

  /* ============================== 六年级数学下册第二单元 单元卷 ============================== */
  {
    id: 'p057',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第二单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p057q1', type: '填空题', score: 4, text: '一件商品打八折出售，就是按原价的____%出售，比原价便宜了____%。', answer: '80、20', explanation: '八折即80%，便宜1-80%=20%。' },
      { id: 'p057q2', type: '填空题', score: 4, text: '存入银行的钱叫做____，取款时银行多付的钱叫做____。', answer: '本金、利息', explanation: '本金是存入的钱，利息是银行多付的钱。' },
      { id: 'p057q3', type: '填空题', score: 4, text: '利息=____×____×____，其中时间以____为单位。', answer: '本金、利率、存期、年', explanation: '利息计算公式，时间通常以年为单位。' },
      { id: 'p057q4', type: '填空题', score: 4, text: '某商品原价200元，现价150元，是打____折出售，降价了____%。', answer: '七五、25', explanation: '150÷200=75%即七五折，降价(200-150)÷200=25%。' },
      { id: 'p057q5', type: '选择题', score: 4, text: '一件衣服原价300元，打七折出售，现价是（  ）元。', options: ['A. 210', 'B. 90', 'C. 270', 'D. 230'], answer: 0, explanation: '300×70%=210元。' },
      { id: 'p057q6', type: '选择题', score: 4, text: '一种商品先涨价10%，再降价10%，现价与原价相比（  ）', options: ['A. 相等', 'B. 比原价高', 'C. 比原价低', 'D. 无法确定'], answer: 2, explanation: '设原价1，(1+10%)×(1-10%)=1.1×0.9=0.99，比原价低。' },
      { id: 'p057q7', type: '选择题', score: 4, text: '王叔叔存入银行5000元，年利率3.5%，存期2年，到期可得利息（  ）元。', options: ['A. 175', 'B. 350', 'C. 5175', 'D. 700'], answer: 1, explanation: '5000×3.5%×2=350元。' },
      { id: 'p057q8', type: '判断题', score: 3, text: '几折就是十分之几，也就是百分之几十。（  ）', answer: '正确', explanation: '八折即8/10即80%。' },
      { id: 'p057q9', type: '判断题', score: 3, text: '一种商品打五折出售，就是比原价便宜了一半。（  ）', answer: '正确', explanation: '五折即50%，便宜1-50%=50%。' },
      { id: 'p057q10', type: '应用题', score: 16, text: '某商店举行促销活动，一种电风扇原价250元，现打八折出售。买这种电风扇可以便宜多少元？如果买5台，一共可以便宜多少元？', answer: '便宜：250×(1-80%)=250×20%=50（元）；5台便宜：50×5=250（元）。', explanation: '先求一台便宜的钱数，再乘台数。' }
    ]
  },

  /* ============================== 四年级数学上册 期中卷 ============================== */
  {
    id: 'p058',
    subject: '数学',
    grade: '四年级',
    type: '期中卷',
    region: '全国',
    title: '人教版四年级数学上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p058q1', type: '填空题', score: 2, text: '一个数由5个百万、3个万和8个百组成，这个数写作____，读作____。', answer: '5030800、五百零三万零八百', explanation: '5在百万位，3在万位，8在百位。' },
      { id: 'p058q2', type: '填空题', score: 2, text: '一个九位数，最高位是____位；一个数的最高位是百万位，它是____位数。', answer: '亿、七', explanation: '九位数最高位亿位，百万位是七位数。' },
      { id: 'p058q3', type: '填空题', score: 2, text: '400×50的积末尾有____个0；25×40的积末尾有____个0。', answer: '4、3', explanation: '400×50=20000有4个0；25×40=1000有3个0。' },
      { id: 'p058q4', type: '填空题', score: 2, text: '两个数的积是60，一个因数乘3，另一个因数不变，积是____。', answer: '180', explanation: '积的变化规律，积也乘3。' },
      { id: 'p058q5', type: '填空题', score: 2, text: '1周角=____平角=____直角；钟面上6时整时针和分针成____角。', answer: '2、4、平', explanation: '周角360°，6时整成180°平角。' },
      { id: 'p058q6', type: '填空题', score: 2, text: '在○里填">""<"或"="：305万○3050000', answer: '=', explanation: '305万=3050000。' },
      { id: 'p058q7', type: '填空题', score: 2, text: '估算203×19时，可以把203看作____，19看作____，积大约是____。', answer: '200、20、4000', explanation: '估算取接近的整十整百数。' },
      { id: 'p058q8', type: '填空题', score: 2, text: '只有一组对边平行的四边形叫做____；两组对边分别平行的四边形叫做____。', answer: '梯形、平行四边形', explanation: '梯形和平行四边形的概念。' },
      { id: 'p058q9', type: '填空题', score: 2, text: '□26÷43，要使商是一位数，□里最大填____；要使商是两位数，□里最小填____。', answer: '3、4', explanation: '商一位数被除数前两位小于43，最大3；商两位数前两位大于等于43，最小4。' },
      { id: 'p058q10', type: '填空题', score: 2, text: '测量学校操场面积用____作单位，测量一个省的面积用____作单位。', answer: '平方米、平方千米', explanation: '操场用平方米，省份用平方千米。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p058q11', type: '选择题', score: 2, text: '下面各数中一个零都不读的是（  ）', options: ['A. 3050200', 'B. 3005020', 'C. 3500200', 'D. 3050020'], answer: 2, explanation: '3500200读作三百五十万零二百，读一个零；C项实际3500200读"三百五十万二百"无零，正确。' },
      { id: 'p058q12', type: '选择题', score: 2, text: '下面各角中是钝角的是（  ）', options: ['A. 89°', 'B. 90°', 'C. 91°', 'D. 180°'], answer: 2, explanation: '钝角大于90°小于180°，91°是钝角。' },
      { id: 'p058q13', type: '选择题', score: 2, text: '两个数相除，商是12，余数是15，除数最小是（  ）', options: ['A. 14', 'B. 15', 'C. 16', 'D. 12'], answer: 2, explanation: '余数必须小于除数，除数最小是15+1=16。' },
      { id: 'p058q14', type: '选择题', score: 2, text: '125×80的积是（  ）', options: ['A. 1000', 'B. 10000', 'C. 100000', 'D. 1000000'], answer: 1, explanation: '125×80=10000。' },
      { id: 'p058q15', type: '选择题', score: 2, text: '两个完全一样的梯形可以拼成一个（  ）', options: ['A. 长方形', 'B. 正方形', 'C. 平行四边形', 'D. 三角形'], answer: 2, explanation: '两个完全一样的梯形可拼成平行四边形。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p058q16', type: '判断题', score: 2, text: '直线比射线长。（  ）', answer: '错误', explanation: '直线和射线都无限长，不能比较。' },
      { id: 'p058q17', type: '判断题', score: 2, text: '不相交的两条直线叫做平行线。（  ）', answer: '错误', explanation: '必须在同一平面内不相交才是平行线。' },
      { id: 'p058q18', type: '判断题', score: 2, text: '被除数和除数同时乘5，商不变。（  ）', answer: '正确', explanation: '商不变性质。' },
      { id: 'p058q19', type: '判断题', score: 2, text: '大于90°的角都是钝角。（  ）', answer: '错误', explanation: '钝角必须大于90°且小于180°。' },
      { id: 'p058q20', type: '判断题', score: 2, text: '两个梯形一定能拼成一个平行四边形。（  ）', answer: '错误', explanation: '必须是两个完全一样的梯形。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p058q21', type: '计算题', score: 6, text: '直接写得数：120×40=', answer: '4800', explanation: '12×4=48，加两个0得4800。' },
      { id: 'p058q22', type: '计算题', score: 6, text: '用竖式计算：245×36=', answer: '8820', explanation: '245×36=245×30+245×6=7350+1470=8820。' },
      { id: 'p058q23', type: '计算题', score: 6, text: '用竖式计算：864÷24=', answer: '36', explanation: '24×36=864。' },
      { id: 'p058q24', type: '计算题', score: 6, text: '简便计算：25×44', answer: '1100', explanation: '25×44=25×4×11=1100。' },
      { id: 'p058q25', type: '计算题', score: 6, text: '简便计算：99×46', answer: '4554', explanation: '99×46=(100-1)×46=4600-46=4554。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p058q26', type: '应用题', score: 10, text: '学校组织植树，四年级有6个班，每班植树45棵，五年级比四年级多植30棵。两个年级一共植树多少棵？', answer: '四年级：6×45=270（棵）；五年级：270+30=300（棵）；一共：270+300=570（棵）。', explanation: '分别求两个年级植树数再相加。' },
      { id: 'p058q27', type: '应用题', score: 10, text: '一辆客车和一辆货车同时从甲乙两地相向而行，客车每小时行85千米，货车每小时行65千米，4小时后相遇。甲乙两地相距多少千米？', answer: '(85+65)×4=150×4=600（千米）。', explanation: '相遇问题：路程=速度和×时间。' },
      { id: 'p058q28', type: '应用题', score: 10, text: '一块长方形麦田长400米，宽250米。如果每公顷收小麦6吨，这块麦田一共收小麦多少吨？', answer: '面积：400×250=100000平方米=10公顷；总产量：10×6=60（吨）。', explanation: '先求面积换算公顷，再乘每公顷产量。' }
    ]
  },

  /* ============================== 五年级语文上册 期中卷 ============================== */
  {
    id: 'p059',
    subject: '语文',
    grade: '五年级',
    type: '期中卷',
    region: '全国',
    title: '人教版五年级语文上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p059q1', type: '填空题', score: 2, text: '看拼音写词语：wū yán（  ）  cí xiáng（  ）', answer: '屋檐、慈祥', explanation: '注意"檐"的"木"旁，"祥"的"礻"旁。' },
      { id: 'p059q2', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 玷污(diàn) 榨油(zhà)', 'B. 玷污(zhān) 榨油(zhà)', 'C. 玷污(diàn) 榨油(zhá)', 'D. 玷污(zhān) 榨油(zhá)'], answer: 0, explanation: '"玷"读diàn，"榨"读zhà。' },
      { id: 'p059q3', type: '填空题', score: 2, text: '"待"在"等待"中读____，在"待一会儿"中读____。', answer: 'dài、dāi', explanation: '"待"是多音字。' },
      { id: 'p059q4', type: '选择题', score: 2, text: '下列成语中没有错别字的是（  ）', options: ['A. 风期雪压', 'B. 顶天立地', 'C. 能书善画', 'D. 颇负胜名'], answer: 1, explanation: 'A应为"风欺雪压"，C应为"能书善画"对，D应为"颇负盛名"。B完全正确。' },
      { id: 'p059q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）断丝连  香（  ）十里', answer: '藕、飘', explanation: '藕断丝连、香飘十里。' },
      { id: 'p059q6', type: '填空题', score: 2, text: '"我喜欢划船"一句中"划"的意思是____；"计划"中"划"的意思是____。', answer: '用桨拨水、计划', explanation: '"划"是多义字。' },
      { id: 'p059q7', type: '选择题', score: 2, text: '"桂花盛开的时候，不说香飘十里，至少前后十几家邻居都浸在桂花香里。"运用的修辞手法是（  ）', options: ['A. 拟人', 'B. 比喻', 'C. 夸张', 'D. 排比'], answer: 2, explanation: '"浸在桂花香里"是夸张，突出桂花香。' },
      { id: 'p059q8', type: '填空题', score: 2, text: '写出下列词语的近义词：珍贵—（  ）  欺凌—（  ）', answer: '宝贵、欺负', explanation: '近义词要意思相近。' },
      { id: 'p059q9', type: '选择题', score: 2, text: '"梅花魂"中"魂"的意思是（  ）', options: ['A. 灵魂', 'B. 精神', 'C. 梦魂', 'D. 鬼魂'], answer: 1, explanation: '此处"魂"指梅花的精神。' },
      { id: 'p059q10', type: '填空题', score: 2, text: '按课文内容填空：《桂花雨》的作者是____，她借桂花表达了对____的思念。', answer: '琦君、故乡', explanation: '琦君借桂花表达思乡之情。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p059q11', type: '古诗文填空', score: 1, text: '洛阳城里见秋风，______________。', answer: '欲作家书意万重', explanation: '张籍《秋思》。' },
      { id: 'p059q12', type: '古诗文填空', score: 1, text: '复恐匆匆说不尽，______________。', answer: '行人临发又开封', explanation: '表现对家乡的牵挂。' },
      { id: 'p059q13', type: '古诗文填空', score: 1, text: '春风又绿江南岸，______________。', answer: '明月何时照我还', explanation: '王安石《泊船瓜洲》。' },
      { id: 'p059q14', type: '古诗文填空', score: 1, text: '京口瓜洲一水间，______________。', answer: '钟山只隔数重山', explanation: '描写地理上的相近。' },
      { id: 'p059q15', type: '古诗文填空', score: 1, text: '悠悠天宇旷，______________。', answer: '切切故乡情', explanation: '张九龄《望月怀远》相关。' },
      { id: 'p059q16', type: '古诗文填空', score: 1, text: '浮云终日行，______________。', answer: '游子久不至', explanation: '杜甫《梦李白》。' },
      { id: 'p059q17', type: '古诗文填空', score: 1, text: '《秋思》的作者是____代____。', answer: '唐、张籍', explanation: '张籍是唐代诗人。' },
      { id: 'p059q18', type: '古诗文填空', score: 1, text: '家书抵万金出自杜甫的《____》。', answer: '春望', explanation: '《春望》中"家书抵万金"。' },
      { id: 'p059q19', type: '古诗文填空', score: 1, text: '落叶他乡树，______________。', answer: '寒灯独夜人', explanation: '马戴《灞上秋居》。' },
      { id: 'p059q20', type: '古诗文填空', score: 1, text: '《泊船瓜洲》中表达思乡之情的诗句是：______________，______________。', answer: '春风又绿江南岸，明月何时照我还', explanation: '"明月何时照我还"直抒思乡。' },

      // 三、阅读理解（共30分）
      { id: 'p059q21', type: '阅读理解', score: 10, text: '阅读《落花生》选段，回答：父亲说花生的好处很多，有哪几条最可贵？', passage: '父亲说："花生的好处很多，有一样最可贵。它的果实埋在地里，不像桃子、石榴、苹果那样，把鲜红嫩绿的果实高高地挂在枝上，使人一见就生爱慕之心。你们看它矮矮地长在地上，等到成熟了，也不能立刻分辨出来它有没有果实，必须挖起来才知道。"', answer: '花生最可贵的是：果实埋在地里，不炫耀，成熟了也不张扬，必须挖起来才知道有没有果实——朴实无华、默默奉献。', explanation: '从原文提炼花生朴实、不张扬的特点。' },
      { id: 'p059q22', type: '阅读理解', score: 10, text: '阅读《梅花魂》选段，回答："这清白的梅花是玷污得的吗？"这句话表现了外祖父怎样的感情？', passage: '"这清白的梅花是玷污得的吗？"外祖父一会儿拿起一块看看，一会儿又放下，像是在欣赏，又像是在回忆。突然，他抽出一张纸，小心翼翼地擦拭着。', answer: '表现了外祖父对梅花的珍爱，以及对梅花精神的敬重，也暗含对祖国和气节的珍视。', explanation: '从动作描写和语言体会人物情感。' },
      { id: 'p059q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题：为什么说"桂花盛开的时候，不说香飘十里，至少前后十几家邻居都浸在桂花香里"中的"浸"字用得好？', passage: '桂花盛开的时候，不说香飘十里，至少前后十几家邻居都浸在桂花香里。', answer: '"浸"字把桂花香写得浓郁、可感，仿佛香气能把人包围、渗透，化无形为有形，生动地写出了桂花香味的浓郁和飘得远。', explanation: '从词语的表达效果分析，体会用词的生动。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p059q24', type: '句子改写', score: 2, text: '改为"被"字句：母亲把桂花摇了下来。', answer: '桂花被母亲摇了下来。', explanation: '宾语前置加"被"字。' },
      { id: 'p059q25', type: '句子改写', score: 2, text: '改为"把"字句：风吹散了满地的落叶。', answer: '风把满地的落叶吹散了。', explanation: '主语后加"把"再加宾语。' },
      { id: 'p059q26', type: '句子改写', score: 2, text: '改为反问句：这是值得珍惜的回忆。', answer: '难道这不是值得珍惜的回忆吗？', explanation: '反问句用"难道……不……吗"。' },
      { id: 'p059q27', type: '句子改写', score: 2, text: '缩句：那棵高大的桂花树开满了金黄色的小花。', answer: '桂花树开满了花。', explanation: '保留主语中心语和谓语中心语。' },
      { id: 'p059q28', type: '句子改写', score: 2, text: '修改病句：我大概整整花了两个小时才完成作业。', answer: '我整整花了两个小时才完成作业。（或：我大概花了两个小时才完成作业。）', explanation: '"大概"和"整整"矛盾，删去其一。' },

      // 五、作文（30分）
      { id: 'p059q29', type: '作文', score: 30, text: '以"我喜爱的植物"为题，写一篇不少于400字的作文。要求：抓住特点，表达真情实感。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '可写外形、习性、品质，借物抒情。' }
    ]
  },

  /* ============================== 五年级英语上册 期中卷 ============================== */
  {
    id: 'p060',
    subject: '英语',
    grade: '五年级',
    type: '期中卷',
    region: '全国',
    title: '人教版五年级英语上册期中测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试选择，每题2分，共20分）
      { id: 'p060q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：Monday', options: ['A. today', 'B. Friday', 'C. week', 'D. month'], answer: 1, explanation: 'Monday和Friday都是星期。' },
      { id: 'p060q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：tall', options: ['A. teacher', 'B. short', 'C. student', 'D. friend'], answer: 1, explanation: 'tall和short都是形容词。' },
      { id: 'p060q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：math', options: ['A. music', 'B. morning', 'C. Monday', 'D. many'], answer: 0, explanation: 'math和music都是学科。' },
      { id: 'p060q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：kind', options: ['A. strict', 'B. student', 'C. class', 'D. teacher'], answer: 0, explanation: 'kind和strict都是形容人的性格。' },
      { id: 'p060q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：him', options: ['A. his', 'B. he', 'C. them', 'D. she'], answer: 2, explanation: 'him和them都是宾格代词。' },
      { id: 'p060q6', type: '听力选择', score: 2, text: '选出正确答语：What\'s your new teacher like?', options: ['A. He is tall and kind.', 'B. He is Mr. Li.', 'C. He is a teacher.', 'D. He is fine.'], answer: 0, explanation: '问"什么样的人"用形容词描述。' },
      { id: 'p060q7', type: '听力选择', score: 2, text: '选出正确答语：Who is your English teacher?', options: ['A. He is tall.', 'B. Miss Wang.', 'C. She is kind.', 'D. Yes, she is.'], answer: 1, explanation: '问"是谁"回答人名。' },
      { id: 'p060q8', type: '听力选择', score: 2, text: '选出正确答语：What do you have on Mondays?', options: ['A. I have math and English.', 'B. I like Mondays.', 'C. It is Monday.', 'D. I am happy.'], answer: 0, explanation: '问"有什么课"回答课程。' },
      { id: 'p060q9', type: '听力选择', score: 2, text: '选出正确答语：What would you like to eat?', options: ['A. I like apples.', 'B. I\'d like some fish.', 'C. I am hungry.', 'D. Yes, please.'], answer: 1, explanation: '问"想吃啥"用"I\'d like..."回答。' },
      { id: 'p060q10', type: '听力选择', score: 2, text: '选出正确答语：What do you do on Sundays?', options: ['A. It is Sunday.', 'B. I play football.', 'C. I like Sundays.', 'D. Yes, I do.'], answer: 1, explanation: '问"做什么"回答活动。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p060q11', type: '词汇填空', score: 2, text: 'She ___ (be) a new student.（填be动词）', answer: 'is', explanation: 'she用is。' },
      { id: 'p060q12', type: '词汇填空', score: 2, text: 'They ___ (be) my friends.（填be动词）', answer: 'are', explanation: 'they用are。' },
      { id: 'p060q13', type: '词汇填空', score: 2, text: 'I ___ (have) Chinese on Mondays.（用have/has填空）', answer: 'have', explanation: 'I用have。' },
      { id: 'p060q14', type: '词汇填空', score: 2, text: 'He ___ (have) music on Tuesdays.（用have/has填空）', answer: 'has', explanation: 'he三单用has。' },
      { id: 'p060q15', type: '词汇填空', score: 2, text: 'My mother ___ (be) tall and kind.（填be动词）', answer: 'is', explanation: 'mother单数用is。' },
      { id: 'p060q16', type: '词汇填空', score: 2, text: '写出单词：星期一____  星期五____', answer: 'Monday、Friday', explanation: '注意首字母大写。' },
      { id: 'p060q17', type: '词汇填空', score: 2, text: '写出单词：严格的____  友好的____', answer: 'strict、kind', explanation: '注意拼写。' },
      { id: 'p060q18', type: '词汇填空', score: 2, text: '翻译：他是我们的新英语老师。____', answer: 'He is our new English teacher.', explanation: '注意物主代词our。' },
      { id: 'p060q19', type: '词汇填空', score: 2, text: '翻译：星期一你有什么课？____', answer: 'What do you have on Mondays?', explanation: 'on Mondays用复数。' },
      { id: 'p060q20', type: '词汇填空', score: 2, text: '翻译：我想吃一个汉堡。____', answer: 'I\'d like to eat a hamburger.', explanation: '用I\'d like表示想要。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p060q21', type: '单项选择', score: 2, text: '—What\'s he like? —He ___ tall.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 0, explanation: 'he用is。' },
      { id: 'p060q22', type: '单项选择', score: 2, text: '—___ is your math teacher? —Mr. Zhang.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 1, explanation: '问"是谁"用Who。' },
      { id: 'p060q23', type: '单项选择', score: 2, text: 'We have English ___ Mondays.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 1, explanation: '星期前用on。' },
      { id: 'p060q24', type: '单项选择', score: 2, text: '—What would you like ___ drink? —Some tea, please.', options: ['A. for', 'B. to', 'C. of', 'D. on'], answer: 1, explanation: 'would like to do固定搭配。' },
      { id: 'p060q25', type: '单项选择', score: 2, text: 'My favourite food ___ ice cream.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'food单数用is。' },
      { id: 'p060q26', type: '单项选择', score: 2, text: '—___ you like Mondays? —Yes, I do.', options: ['A. Do', 'B. Are', 'C. Is', 'D. Does'], answer: 0, explanation: 'you用do提问。' },
      { id: 'p060q27', type: '单项选择', score: 2, text: 'He ___ like math.', options: ['A. don\'t', 'B. doesn\'t', 'C. isn\'t', 'D. aren\'t'], answer: 1, explanation: 'he三单用doesn\'t。' },
      { id: 'p060q28', type: '单项选择', score: 2, text: '—What do you have ___ Tuesdays? —We have math.', options: ['A. on', 'B. in', 'C. at', 'D. for'], answer: 0, explanation: '星期前用on。' },
      { id: 'p060q29', type: '单项选择', score: 2, text: '—Is she kind? —Yes, ___.', options: ['A. she is', 'B. she isn\'t', 'C. she does', 'D. she has'], answer: 0, explanation: '肯定回答she is。' },
      { id: 'p060q30', type: '单项选择', score: 2, text: 'I\'d like some ___ .', options: ['A. sandwich', 'B. sandwichs', 'C. sandwiches', 'D. a sandwich'], answer: 2, explanation: 'some后接复数sandwiches。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p060q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much. 问：How many days does Tom go to school a week?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'Five days.', explanation: '从Monday到Friday共5天。' },
      { id: 'p060q32', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What does Tom have on Mondays?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'Math, Chinese and English.', explanation: '从原文提取信息。' },
      { id: 'p060q33', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Who is Tom\'s English teacher?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'Miss Wang.', explanation: '从原文"My English teacher is Miss Wang."得知。' },
      { id: 'p060q34', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What is Miss Wang like?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'She is young and kind.', explanation: '从原文提取。' },
      { id: 'p060q35', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Does Tom like English?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'Yes, he does.', explanation: '从"I like English very much."得知。' },

      // 五、写作（20分）
      { id: 'p060q36', type: '写作', score: 20, text: '以"My Teacher"为题，写一段不少于5句话的短文，介绍你的一位老师（姓名、外貌、性格、所教科目等）。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：My English teacher is Miss Li. She is tall and thin. She has long hair. She is kind and funny. I like her very much.' }
    ]
  },

  /* ============================== 六年级语文上册 期中卷 ============================== */
  {
    id: 'p061',
    subject: '语文',
    grade: '六年级',
    type: '期中卷',
    region: '全国',
    title: '人教版六年级语文上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p061q1', type: '填空题', score: 2, text: '看拼音写词语：jìng mì（  ）  yōu yǎ（  ）', answer: '静谧、优雅', explanation: '注意"谧"和"雅"的字形。' },
      { id: 'p061q2', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 唱和(hè) 津津乐道(jīn)', 'B. 唱和(hé) 津津乐道(jīn)', 'C. 唱和(hè) 津津乐道(jìn)', 'D. 唱和(hé) 津津乐道(jìn)'], answer: 0, explanation: '"和"在"唱和"读hè，"津"读jīn。' },
      { id: 'p061q3', type: '填空题', score: 2, text: '"冠"在"冠军"中读____，在"鸡冠花"中读____。', answer: 'guàn、guān', explanation: '"冠"是多音字。' },
      { id: 'p061q4', type: '选择题', score: 2, text: '下列成语中没有错别字的是（  ）', options: ['A. 德高望众', 'B. 庞然大物', 'C. 意味深常', 'D. 不拘一格'], answer: 1, explanation: 'A应为"德高望重"，C应为"意味深长"。B正确。' },
      { id: 'p061q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）崖峭壁  （  ）高望重', answer: '悬、德', explanation: '悬崖峭壁、德高望重。' },
      { id: 'p061q6', type: '填空题', score: 2, text: '"那是一条通往山外的羊肠小道"中"羊肠"形容____；"铁路像一条铁龙"中"铁龙"运用了____修辞。', answer: '道路弯曲狭窄、比喻', explanation: '"羊肠"形容弯曲，"铁龙"是比喻。' },
      { id: 'p061q7', type: '选择题', score: 2, text: '"这山中的一切，哪个不是我的朋友？"运用的修辞手法是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 反问', 'D. 排比'], answer: 2, explanation: '用"哪个不是"反问，加强语气。' },
      { id: 'p061q8', type: '填空题', score: 2, text: '写出下列词语的反义词：静谧—（  ）  精致—（  ）', answer: '喧闹、粗糙', explanation: '反义词词性相同意义相反。' },
      { id: 'p061q9', type: '选择题', score: 2, text: '"詹天佑"一课表现了詹天佑怎样的品质？（  ）', options: ['A. 勇敢', 'B. 爱国和杰出才能', 'C. 聪明', 'D. 勤劳'], answer: 1, explanation: '詹天佑修筑京张铁路体现爱国和才能。' },
      { id: 'p061q10', type: '填空题', score: 2, text: '按课文内容填空：《山中访友》的作者是____，文中作者把山中的一切当作____。', answer: '李汉荣、朋友', explanation: '李汉荣把山中景物当朋友来写。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p061q11', type: '古诗文填空', score: 1, text: '落红不是无情物，______________。', answer: '化作春泥更护花', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p061q12', type: '古诗文填空', score: 1, text: '浩荡离愁白日斜，______________。', answer: '吟鞭东指即天涯', explanation: '龚自珍《己亥杂诗》。' },
      { id: 'p061q13', type: '古诗文填空', score: 1, text: '今夜偏知春气暖，______________。', answer: '虫声新透绿窗纱', explanation: '刘方平《月夜》。' },
      { id: 'p061q14', type: '古诗文填空', score: 1, text: '造物无言却有情，______________。', answer: '每于寒尽觉春生', explanation: '张维屏《新雷》。' },
      { id: 'p061q15', type: '古诗文填空', score: 1, text: '随风潜入夜，______________。', answer: '润物细无声', explanation: '杜甫《春夜喜雨》。' },
      { id: 'p061q16', type: '古诗文填空', score: 1, text: '野径云俱黑，______________。', answer: '江船火独明', explanation: '杜甫《春夜喜雨》。' },
      { id: 'p061q17', type: '古诗文填空', score: 1, text: '《己亥杂诗》的作者是____代____。', answer: '清、龚自珍', explanation: '龚自珍是清代诗人。' },
      { id: 'p061q18', type: '古诗文填空', score: 1, text: '好雨知时节，______________。', answer: '当春乃发生', explanation: '杜甫《春夜喜雨》开篇。' },
      { id: 'p061q19', type: '古诗文填空', score: 1, text: '卧看满天云不动，______________。', answer: '不知云与我俱东', explanation: '陈与义《襄邑道中》。' },
      { id: 'p061q20', type: '古诗文填空', score: 1, text: '《春夜喜雨》中描写春雨特点的诗句是：______________，______________。', answer: '随风潜入夜，润物细无声', explanation: '"潜"和"细无声"写春雨轻柔。' },

      // 三、阅读理解（共30分）
      { id: 'p061q21', type: '阅读理解', score: 10, text: '阅读《山中访友》选段，回答：作者把山中的哪些景物当作朋友？', passage: '这山中的一切，哪个不是我的朋友？我热切地跟他们打招呼：你好，清凉的山泉！你捧出一面明镜，是要我重新梳妆吗？你好，汩汩的溪流！你吟诵着一首首小诗，是要我与你唱和吗？', answer: '作者把山泉、溪流等山中景物当作朋友。', explanation: '从原文找出作者打招呼的对象。' },
      { id: 'p061q22', type: '阅读理解', score: 10, text: '阅读《草虫的村落》选段，回答：作者为什么说"它们的村落散布在边缘森林的各个角落"？', passage: '我看得出草虫的村落，哪是街道，哪是小巷。村落散布在边缘森林的各个角落，草原上的小丘之间，那是它们的村落。', answer: '因为草虫聚集生活的地方像人类的村落一样有街道、小巷，分布在森林各处，作者用拟人手法把草虫生活的地方称作"村落"。', explanation: '体会拟人手法的妙处。' },
      { id: 'p061q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题：分析"那是一条通往山外的羊肠小道，是山里人通往山外的希望之路"中"希望之路"的含义。', passage: '那是一条通往山外的羊肠小道，是山里人通往山外的希望之路。', answer: '"希望之路"既指这条小道是山里人走出大山、了解外界的实际通道，更寄托了山里人向往美好生活的希望和憧憬，一语双关。', explanation: '结合字面义和深层义理解。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p061q24', type: '句子改写', score: 2, text: '改为"被"字句：清风吹动了树叶。', answer: '树叶被清风吹动了。', explanation: '宾语前置加"被"。' },
      { id: 'p061q25', type: '句子改写', score: 2, text: '改为"把"字句：雨水打湿了我的衣裳。', answer: '雨水把我的衣裳打湿了。', explanation: '主语后加"把"再加宾语。' },
      { id: 'p061q26', type: '句子改写', score: 2, text: '改为反问句：这是大自然的杰作。', answer: '难道这不是大自然的杰作吗？', explanation: '反问句用"难道……不……吗"。' },
      { id: 'p061q27', type: '句子改写', score: 2, text: '缩句：那只美丽的小鸟在枝头快乐地唱着动听的歌。', answer: '小鸟唱着歌。', explanation: '保留主谓宾中心语。' },
      { id: 'p061q28', type: '句子改写', score: 2, text: '修改病句：通过这次活动，使我受到了深刻的教育。', answer: '通过这次活动，我受到了深刻的教育。（或：这次活动使我受到了深刻的教育。）', explanation: '"通过"和"使"连用造成缺主语，删去其一。' },

      // 五、作文（30分）
      { id: 'p061q29', type: '作文', score: 30, text: '以"我心中的美景"为题，写一篇不少于400字的作文。要求：描写具体，表达真情实感。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '可写自然景色或人文景观，借景抒情。' }
    ]
  },

  /* ============================== 六年级数学上册 期中卷 ============================== */
  {
    id: 'p062',
    subject: '数学',
    grade: '六年级',
    type: '期中卷',
    region: '全国',
    title: '人教版六年级数学上册期中测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p062q1', type: '填空题', score: 2, text: '3/4×8表示____个3/4是多少，结果是____。', answer: '8、6', explanation: '3/4×8=6。' },
      { id: 'p062q2', type: '填空题', score: 2, text: '2/5的倒数是____，1.5的倒数是____。', answer: '5/2、2/3', explanation: '分子分母互换，1.5=3/2倒数为2/3。' },
      { id: 'p062q3', type: '填空题', score: 2, text: '一个数是36，它的5/6是____；一个数的3/4是15，这个数是____。', answer: '30、20', explanation: '36×5/6=30；15÷3/4=20。' },
      { id: 'p062q4', type: '填空题', score: 2, text: '甲数是乙数的4/5，乙数是甲数的____；如果甲是20，乙是____。', answer: '5/4、25', explanation: '乙=甲÷4/5=甲×5/4；20×5/4=25。' },
      { id: 'p062q5', type: '填空题', score: 2, text: '比80多1/4的数是____；比80少1/4的数是____。', answer: '100、60', explanation: '80×(1+1/4)=100；80×(1-1/4)=60。' },
      { id: 'p062q6', type: '填空题', score: 2, text: '把3米长的绳子平均分成5段，每段长____米，每段是全长的____。', answer: '3/5、1/5', explanation: '每段=3÷5=3/5米；每段是全长1/5。' },
      { id: 'p062q7', type: '填空题', score: 2, text: '一桶油重12千克，用了1/3，用了____千克，还剩____千克。', answer: '4、8', explanation: '12×1/3=4千克；12-4=8千克。' },
      { id: 'p062q8', type: '填空题', score: 2, text: '在○里填">""<"或"="：3/4×5/4○3/4', answer: '>', explanation: '乘大于1的数积变大。' },
      { id: 'p062q9', type: '填空题', score: 2, text: '从学校向东偏北30°方向走400米到书店，从书店向____偏____30°方向走400米回学校。', answer: '西、南', explanation: '相反方向。' },
      { id: 'p062q10', type: '填空题', score: 2, text: '一件商品原价200元，现在打八折，现价____元，便宜了____元。', answer: '160、40', explanation: '200×80%=160；200-160=40。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p062q11', type: '选择题', score: 2, text: '下面算式中结果最大的是（  ）', options: ['A. 5/8÷3/4', 'B. 5/8÷1', 'C. 5/8÷4/3', 'D. 5/8÷5/4'], answer: 0, explanation: '除以小于1的数商变大，3/4最小。' },
      { id: 'p062q12', type: '选择题', score: 2, text: 'a是非零自然数，下面结果大于a的是（  ）', options: ['A. a×1', 'B. a×3/2', 'C. a÷3/2', 'D. a÷1'], answer: 1, explanation: '乘大于1的数变大。' },
      { id: 'p062q13', type: '选择题', score: 2, text: '一根绳子长3/4米，截去它的1/3，截去（  ）米。', options: ['A. 1/4', 'B. 1/3', 'C. 3/4', 'D. 1/2'], answer: 0, explanation: '3/4×1/3=1/4米。' },
      { id: 'p062q14', type: '选择题', score: 2, text: '一个数的4/5是20，这个数是（  ）', options: ['A. 16', 'B. 25', 'C. 20', 'D. 100'], answer: 1, explanation: '20÷4/5=25。' },
      { id: 'p062q15', type: '选择题', score: 2, text: '一件商品先涨价1/10，再降价1/10，现价与原价相比（  ）', options: ['A. 相等', 'B. 比原价高', 'C. 比原价低', 'D. 无法确定'], answer: 2, explanation: '(1+1/10)×(1-1/10)=11/10×9/10=99/100，比原价低。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p062q16', type: '判断题', score: 2, text: '一个数（0除外）乘分数，积一定大于这个数。（  ）', answer: '错误', explanation: '乘真分数积变小。' },
      { id: 'p062q17', type: '判断题', score: 2, text: '1的倒数是1，0没有倒数。（  ）', answer: '正确', explanation: '0不能作分母，无倒数。' },
      { id: 'p062q18', type: '判断题', score: 2, text: '甲数比乙数多1/5，乙数就比甲数少1/5。（  ）', answer: '错误', explanation: '单位"1"不同，不能直接比较。' },
      { id: 'p062q19', type: '判断题', score: 2, text: '分数除法的意义与整数除法相同。（  ）', answer: '正确', explanation: '都是已知积与一个因数求另一个因数。' },
      { id: 'p062q20', type: '判断题', score: 2, text: '两条彩带，第一条比第二条长1/4米，第二条比第一条短1/4米。（  ）', answer: '正确', explanation: '长度差是具体数值，方向相反数值相等。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p062q21', type: '计算题', score: 6, text: '直接写得数：3/4×12=', answer: '9', explanation: '3/4×12=9。' },
      { id: 'p062q22', type: '计算题', score: 6, text: '计算：5/6×3/10=', answer: '1/4', explanation: '5/6×3/10=15/60=1/4。' },
      { id: 'p062q23', type: '计算题', score: 6, text: '计算：8/9÷4/3=', answer: '2/3', explanation: '8/9÷4/3=8/9×3/4=24/36=2/3。' },
      { id: 'p062q24', type: '计算题', score: 6, text: '简便计算：7/13×3/8+6/13×3/8', answer: '3/8', explanation: '原式=3/8×(7/13+6/13)=3/8×1=3/8。' },
      { id: 'p062q25', type: '计算题', score: 6, text: '解方程：x-2/5x=12', answer: 'x=20', explanation: '(1-2/5)x=12，3/5x=12，x=20。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p062q26', type: '应用题', score: 10, text: '图书馆有故事书240本，科技书是故事书的5/8，科技书有多少本？', answer: '240×5/8=150（本）。', explanation: '求一个数的几分之几用乘法。' },
      { id: 'p062q27', type: '应用题', score: 10, text: '一桶油，第一次用去1/4，第二次用去剩下的1/3，还剩15千克。这桶油原来重多少千克？', answer: '第一次剩1-1/4=3/4；第二次用3/4×1/3=1/4，剩3/4-1/4=1/2；原来重15÷1/2=30（千克）。', explanation: '求出剩余分率，用对应量除以分率。' },
      { id: 'p062q28', type: '应用题', score: 10, text: '一项工程，甲单独做12天完成，乙单独做15天完成。两队合作几天可以完成？', answer: '1÷(1/12+1/15)=1÷(5/60+4/60)=1÷9/60=60/9=20/3（天）≈6.67天。', explanation: '工程问题用工作总量除以工作效率和。' }
    ]
  },

  /* ============================== 六年级英语上册 期中卷 ============================== */
  {
    id: 'p063',
    subject: '英语',
    grade: '六年级',
    type: '期中卷',
    region: '全国',
    title: '人教版六年级英语上册期中测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试选择，每题2分，共20分）
      { id: 'p063q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：subway', options: ['A. ship', 'B. shop', 'C. street', 'D. city'], answer: 0, explanation: 'subway和ship都是交通工具。' },
      { id: 'p063q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：hospital', options: ['A. doctor', 'B. library', 'C. sick', 'D. help'], answer: 1, explanation: 'hospital和library都是场所。' },
      { id: 'p063q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：left', options: ['A. go', 'B. stop', 'C. right', 'D. wait'], answer: 2, explanation: 'left和right都是方向。' },
      { id: 'p063q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：by', options: ['A. bike', 'B. on', 'C. bus', 'D. car'], answer: 1, explanation: 'by和on都是介词。' },
      { id: 'p063q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：tonight', options: ['A. today', 'B. morning', 'C. week', 'D. time'], answer: 0, explanation: 'tonight和today都是时间词。' },
      { id: 'p063q6', type: '听力选择', score: 2, text: '选出正确答语：How do you go to school?', options: ['A. By bike.', 'B. I go to school.', 'C. I like school.', 'D. At seven.'], answer: 0, explanation: '问交通方式用by回答。' },
      { id: 'p063q7', type: '听力选择', score: 2, text: '选出正确答语：Where is the hospital?', options: ['A. It is big.', 'B. Near the park.', 'C. I am sick.', 'D. Yes, it is.'], answer: 1, explanation: '问地点回答方位。' },
      { id: 'p063q8', type: '听力选择', score: 2, text: '选出正确答语：What are you going to do tomorrow?', options: ['A. I am going to read books.', 'B. I like reading.', 'C. I read books.', 'D. Yes, I am.'], answer: 0, explanation: '问将来计划用be going to回答。' },
      { id: 'p063q9', type: '听力选择', score: 2, text: '选出正确答语：Turn left at the cinema.____', options: ['A. Thank you.', 'B. Yes, it is.', 'C. OK.', 'D. You are welcome.'], answer: 2, explanation: '指路用OK表示明白。' },
      { id: 'p063q10', type: '听力选择', score: 2, text: '选出正确答语：Can I go on foot?', options: ['A. Yes, you can.', 'B. Yes, I do.', 'C. Yes, it is.', 'D. No, I don\'t.'], answer: 0, explanation: 'can问用can回答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p063q11', type: '词汇填空', score: 2, text: 'I ___ (go) to school by bus every day.（用动词正确形式填空）', answer: 'go', explanation: 'every day一般现在时，I用原形。' },
      { id: 'p063q12', type: '词汇填空', score: 2, text: 'She ___ (go) to school on foot.（用动词正确形式填空）', answer: 'goes', explanation: 'she三单加es。' },
      { id: 'p063q13', type: '词汇填空', score: 2, text: 'They ___ (be) going to the park tomorrow.（填be动词）', answer: 'are', explanation: 'they用are。' },
      { id: 'p063q14', type: '词汇填空', score: 2, text: 'He ___ (be) going to read books tonight.（填be动词）', answer: 'is', explanation: 'he用is。' },
      { id: 'p063q15', type: '词汇填空', score: 2, text: 'The hospital is next ___ the park.（填介词）', answer: 'to', explanation: 'next to固定搭配。' },
      { id: 'p063q16', type: '词汇填空', score: 2, text: '写出单词：地铁____  飞机____', answer: 'subway、plane', explanation: '注意拼写。' },
      { id: 'p063q17', type: '词汇填空', score: 2, text: '写出单词：医院____  书店____', answer: 'hospital、bookstore', explanation: '注意拼写。' },
      { id: 'p063q18', type: '词汇填空', score: 2, text: '翻译：你怎样去上学？____', answer: 'How do you go to school?', explanation: '用how提问方式。' },
      { id: 'p063q19', type: '词汇填空', score: 2, text: '翻译：医院在哪里？____', answer: 'Where is the hospital?', explanation: '问地点用where。' },
      { id: 'p063q20', type: '词汇填空', score: 2, text: '翻译：明天我要去看电影。____', answer: 'I am going to see a film tomorrow.', explanation: '用be going to表将来。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p063q21', type: '单项选择', score: 2, text: 'I go to school ___ bike.', options: ['A. on', 'B. by', 'C. in', 'D. at'], answer: 1, explanation: 'by bike固定搭配。' },
      { id: 'p063q22', type: '单项选择', score: 2, text: '—___ do you go to school? —By bus.', options: ['A. What', 'B. How', 'C. Where', 'D. When'], answer: 1, explanation: '问方式用how。' },
      { id: 'p063q23', type: '单项选择', score: 2, text: 'The bookstore is ___ to the hospital.', options: ['A. next', 'B. near', 'C. in', 'D. on'], answer: 0, explanation: 'next to固定搭配。' },
      { id: 'p063q24', type: '单项选择', score: 2, text: 'Turn ___ at the cinema.', options: ['A. left', 'B. on', 'C. in', 'D. to'], answer: 0, explanation: 'turn left向左转。' },
      { id: 'p063q25', type: '单项选择', score: 2, text: '—What are you going to do? —I ___ going to read books.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 0, explanation: 'I用am。' },
      { id: 'p063q26', type: '单项选择', score: 2, text: 'He ___ to school on foot.', options: ['A. go', 'B. goes', 'C. going', 'D. is go'], answer: 1, explanation: 'he三单用goes。' },
      { id: 'p063q27', type: '单项选择', score: 2, text: '—Where ___ the hospital? —Near the park.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'hospital单数用is。' },
      { id: 'p063q28', type: '单项选择', score: 2, text: 'I am going to ___ a film tomorrow.', options: ['A. see', 'B. look', 'C. watch', 'D. read'], answer: 0, explanation: 'see a film看电影。' },
      { id: 'p063q29', type: '单项选择', score: 2, text: '—Can I go on foot? —Yes, ___.', options: ['A. you can', 'B. you do', 'C. you are', 'D. I can'], answer: 0, explanation: 'can问用can回答。' },
      { id: 'p063q30', type: '单项选择', score: 2, text: '___ at the cinema, then go straight.', options: ['A. Turn left', 'B. Turn to left', 'C. Turning left', 'D. To turn left'], answer: 0, explanation: '祈使句用动词原形。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p063q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot. 问：How does Tom go to school?', passage: 'Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot.', answer: 'By bike.', explanation: '从原文"I go to school by bike"得知。' },
      { id: 'p063q32', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：How does Jack go to school?', passage: 'Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot.', answer: 'By bus.', explanation: '从原文"Jack goes to school by bus"得知。' },
      { id: 'p063q33', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Where is the bookstore?', passage: 'Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot.', answer: 'Next to the hospital.', explanation: '从原文得知。' },
      { id: 'p063q34', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：How can they go to the bookstore?', passage: 'Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot.', answer: 'On foot.', explanation: '从原文"We can go there on foot"得知。' },
      { id: 'p063q35', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：When are they going to the bookstore?', passage: 'Hello, I am Tom. I go to school by bike every day. My school is near my home. My friend Jack goes to school by bus. His home is far from school. Tomorrow, we are going to the bookstore. The bookstore is next to the hospital. We can go there on foot.', answer: 'Tomorrow.', explanation: '从原文"Tomorrow, we are going"得知。' },

      // 五、写作（20分）
      { id: 'p063q36', type: '写作', score: 20, text: '以"My Weekend Plan"为题，写一段不少于5句话的短文，介绍你的周末计划（打算做什么、去哪里、怎么去等）。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：I am going to the park this Saturday. I will go there by bike. I am going to fly a kite. On Sunday, I will read books at home. I love my weekend.' }
    ]
  },

  /* ============================== 四年级语文下册 期末卷 ============================== */
  {
    id: 'p064',
    subject: '语文',
    grade: '四年级',
    type: '期末卷',
    region: '全国',
    title: '人教版四年级语文下册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p064q1', type: '填空题', score: 2, text: '看拼音写词语：wān yán（  ）  pān dēng（  ）', answer: '蜿蜒、攀登', explanation: '注意"蜒"和"攀"的字形。' },
      { id: 'p064q2', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 教导(jiāo) 漂亮(piào)', 'B. 教导(jiào) 漂亮(piào)', 'C. 教导(jiāo) 漂亮(piāo)', 'D. 教导(jiào) 漂亮(piāo)'], answer: 1, explanation: '"教"在"教导"读jiào，"漂"在"漂亮"读piào。' },
      { id: 'p064q3', type: '填空题', score: 2, text: '"重"在"重要"中读____，在"重复"中读____。', answer: 'zhòng、chóng', explanation: '"重"是多音字。' },
      { id: 'p064q4', type: '选择题', score: 2, text: '下列词语中没有错别字的是（  ）', options: ['A. 气极败坏', 'B. 鱼贯而出', 'C. 轻而义举', 'D. 持之一恒'], answer: 1, explanation: 'A应为"气急败坏"，C应为"轻而易举"，D应为"持之以恒"。' },
      { id: 'p064q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）息凝视  （  ）不可惜', answer: '屏、毫不', explanation: '屏息凝视、毫不可惜。' },
      { id: 'p064q6', type: '填空题', score: 2, text: '写出"AABB"式词语两个：____、____。', answer: '干干净净、整整齐齐（答案不唯一）', explanation: 'AABB式叠词。' },
      { id: 'p064q7', type: '选择题', score: 2, text: '"母鸡"一课的作者是（  ）', options: ['A. 老舍', 'B. 巴金', 'C. 冰心', 'D. 鲁迅'], answer: 0, explanation: '《母鸡》是老舍的作品。' },
      { id: 'p064q8', type: '填空题', score: 2, text: '写出下列词语的近义词：偶尔—（  ）  凝视—（  ）', answer: '偶然、注视', explanation: '近义词意思相近。' },
      { id: 'p064q9', type: '选择题', score: 2, text: '"它若是不高兴啊，无论谁说多少好话，它一声也不出。"运用的修辞是（  ）', options: ['A. 拟人', 'B. 比喻', 'C. 排比', 'D. 夸张'], answer: 0, explanation: '把猫当人来写，是拟人。' },
      { id: 'p064q10', type: '填空题', score: 2, text: '按课文内容填空：《生命 生命》的作者是____，她借____表达对生命的思考。', answer: '杏林子、飞蛾求生、瓜苗生长、心脏跳动', explanation: '杏林子通过三个事例感悟生命。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p064q11', type: '古诗文填空', score: 1, text: '众鸟高飞尽，______________。', answer: '孤云独去闲', explanation: '李白《独坐敬亭山》。' },
      { id: 'p064q12', type: '古诗文填空', score: 1, text: '相看两不厌，______________。', answer: '只有敬亭山', explanation: '李白《独坐敬亭山》。' },
      { id: 'p064q13', type: '古诗文填空', score: 1, text: '湖光秋月两相和，______________。', answer: '潭面无风镜未磨', explanation: '刘禹锡《望洞庭》。' },
      { id: 'p064q14', type: '古诗文填空', score: 1, text: '遥望洞庭山水翠，______________。', answer: '白银盘里一青螺', explanation: '刘禹锡《望洞庭》。' },
      { id: 'p064q15', type: '古诗文填空', score: 1, text: '江南好，风景旧曾谙。日出江花红胜火，______________。', answer: '春来江水绿如蓝', explanation: '白居易《忆江南》。' },
      { id: 'p064q16', type: '古诗文填空', score: 1, text: '能不忆江南？______________', answer: '能不忆江南？', explanation: '反问结尾加强情感。' },
      { id: 'p064q17', type: '古诗文填空', score: 1, text: '《望洞庭》的作者是____代____。', answer: '唐、刘禹锡', explanation: '刘禹锡是唐代诗人。' },
      { id: 'p064q18', type: '古诗文填空', score: 1, text: '潮平两岸阔，______________。', answer: '风正一帆悬', explanation: '王湾《次北固山下》。' },
      { id: 'p064q19', type: '古诗文填空', score: 1, text: '大漠孤烟直，______________。', answer: '长河落日圆', explanation: '王维《使至塞上》。' },
      { id: 'p064q20', type: '古诗文填空', score: 1, text: '《望洞庭》中把洞庭湖比作____，把君山比作____。', answer: '白银盘、青螺', explanation: '从"白银盘里一青螺"得知。' },

      // 三、阅读理解（共30分）
      { id: 'p064q21', type: '阅读理解', score: 10, text: '阅读《乡下人家》选段，回答：乡下人家独特、迷人的风景体现在哪里？', passage: '乡下人家总爱在屋前搭一瓜架，或种南瓜，或种丝瓜，让那些瓜藤攀上棚架，爬上屋檐。当花儿落了的时候，藤上便结出了青的、红的瓜，它们一个个挂在房前，衬着那长长的藤，绿绿的叶。', answer: '体现在屋前瓜架、门前鲜花、屋后竹笋、鸡群觅食、鸭子戏水等自然和谐的乡村风景。', explanation: '从课文提取乡村风景特点。' },
      { id: 'p064q22', type: '阅读理解', score: 10, text: '阅读《生命 生命》选段，回答：作者通过哪些事例思考生命？', passage: '夜晚，我在灯下写稿，一只飞蛾在我头顶上飞来飞去，骚扰着我。趁它停下的时候，我一伸手捉住了它。只要我的手指稍一用力，它就不能动弹了。但它挣扎着，极力鼓动双翅，我感到一股生命的力量在我手中跃动，那样强烈！那样鲜明！', answer: '通过飞蛾求生、瓜苗生长、心脏跳动三个事例思考生命的意义。', explanation: '从课文内容提炼。' },
      { id: 'p064q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题："瓜藤攀上棚架，爬上屋檐"中的"攀"和"爬"用得好，好在哪里？', passage: '乡下人家总爱在屋前搭一瓜架，或种南瓜，或种丝瓜，让那些瓜藤攀上棚架，爬上屋檐。', answer: '"攀"和"爬"用拟人手法，把瓜藤当作人来写，生动形象地写出瓜藤向上生长、蔓延的样子，富有生命力。', explanation: '从动词的表达效果分析。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p064q24', type: '句子改写', score: 2, text: '改为"被"字句：猫把花瓶打碎了。', answer: '花瓶被猫打碎了。', explanation: '宾语前置加"被"。' },
      { id: 'p064q25', type: '句子改写', score: 2, text: '改为"把"字句：风吹开了门。', answer: '风把门吹开了。', explanation: '主语后加"把"再加宾语。' },
      { id: 'p064q26', type: '句子改写', score: 2, text: '改为反问句：乡村的景色真美。', answer: '乡村的景色难道不美吗？', explanation: '反问句用"难道……不……吗"。' },
      { id: 'p064q27', type: '句子改写', score: 2, text: '缩句：那只可爱的小白猫在阳光下懒洋洋地睡觉。', answer: '小白猫睡觉。', explanation: '保留主谓中心语。' },
      { id: 'p064q28', type: '句子改写', score: 2, text: '修改病句：经过努力，我的作文水平有了很大的改进。', answer: '经过努力，我的作文水平有了很大的提高。（或：我的作文有了很大的改进。）', explanation: '"水平"和"改进"搭配不当，改为"提高"。' },

      // 五、作文（30分）
      { id: 'p064q29', type: '作文', score: 30, text: '以"我学会了____"为题（如做饭、游泳、骑自行车等），写一篇不少于350字的作文。要求：把学习的过程写具体。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '把学习过程中的困难、努力、收获写清楚。' }
    ]
  },

  /* ============================== 四年级英语下册 期末卷 ============================== */
  {
    id: 'p065',
    subject: '英语',
    grade: '四年级',
    type: '期末卷',
    region: '全国',
    title: '人教版四年级英语下册期末测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试选择，每题2分，共20分）
      { id: 'p065q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：goat', options: ['A. cow', 'B. carrot', 'C. farm', 'D. green'], answer: 0, explanation: 'goat和cow都是动物。' },
      { id: 'p065q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：tomato', options: ['A. sheep', 'B. potato', 'C. farm', 'D. garden'], answer: 1, explanation: 'tomato和potato都是蔬菜。' },
      { id: 'p065q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：sunny', options: ['A. rain', 'B. cloudy', 'C. cloud', 'D. snow'], answer: 1, explanation: 'sunny和cloudy都是天气形容词。' },
      { id: 'p065q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：these', options: ['A. this', 'B. those', 'C. they', 'D. that'], answer: 1, explanation: 'these和those都是复数指示代词。' },
      { id: 'p065q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：expensive', options: ['A. cheap', 'B. price', 'C. money', 'D. buy'], answer: 0, explanation: 'expensive和cheap都是价格形容词。' },
      { id: 'p065q6', type: '听力选择', score: 2, text: '选出正确答语：Are these carrots?', options: ['A. Yes, they are.', 'B. Yes, these are.', 'C. Yes, it is.', 'D. No, they are.'], answer: 0, explanation: '复数用they are回答。' },
      { id: 'p065q7', type: '听力选择', score: 2, text: '选出正确答语：What\'s the weather like today?', options: ['A. It is sunny.', 'B. I like sunny days.', 'C. It is Monday.', 'D. Yes, it is.'], answer: 0, explanation: '问天气回答天气状况。' },
      { id: 'p065q8', type: '听力选择', score: 2, text: '选出正确答语：How much is this dress?', options: ['A. It is beautiful.', 'B. It is fifty yuan.', 'C. I like it.', 'D. Yes, it is.'], answer: 1, explanation: '问价格回答多少钱。' },
      { id: 'p065q9', type: '听力选择', score: 2, text: '选出正确答语：What time is it?', options: ['A. It is time for lunch.', 'B. It is twelve.', 'C. It is Monday.', 'D. I like it.'], answer: 1, explanation: '问时间回答钟点。' },
      { id: 'p065q10', type: '听力选择', score: 2, text: '选出正确答语：Is it sunny today?', options: ['A. Yes, it is.', 'B. Yes, they are.', 'C. No, it isn\'t sunny.', 'D. Yes, I am.'], answer: 0, explanation: '一般疑问句用it is回答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p065q11', type: '词汇填空', score: 2, text: 'These ___ (be) tomatoes.（填be动词）', answer: 'are', explanation: 'these复数用are。' },
      { id: 'p065q12', type: '词汇填空', score: 2, text: 'This ___ (be) a goat.（填be动词）', answer: 'is', explanation: 'this单数用is。' },
      { id: 'p065q13', type: '词汇填空', score: 2, text: 'It ___ (be) sunny today.（填be动词）', answer: 'is', explanation: 'it单数用is。' },
      { id: 'p065q14', type: '词汇填空', score: 2, text: 'They ___ (be) cheap.（填be动词）', answer: 'are', explanation: 'they复数用are。' },
      { id: 'p065q15', type: '词汇填空', score: 2, text: 'How much ___ (be) these shoes?（填be动词）', answer: 'are', explanation: 'shoes复数用are。' },
      { id: 'p065q16', type: '词汇填空', score: 2, text: '写出单词：西红柿____  土豆____', answer: 'tomato、potato', explanation: '注意复数加es。' },
      { id: 'p065q17', type: '词汇填空', score: 2, text: '写出单词：晴朗的____  多云的____', answer: 'sunny、cloudy', explanation: '注意y结尾。' },
      { id: 'p065q18', type: '词汇填空', score: 2, text: '翻译：这些是胡萝卜吗？____', answer: 'Are these carrots?', explanation: '复数用these和are。' },
      { id: 'p065q19', type: '词汇填空', score: 2, text: '翻译：今天天气怎么样？____', answer: 'What\'s the weather like today?', explanation: '问天气固定句型。' },
      { id: 'p065q20', type: '词汇填空', score: 2, text: '翻译：这条裙子多少钱？____', answer: 'How much is this dress?', explanation: '问价格用how much。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p065q21', type: '单项选择', score: 2, text: '—Are these goats? —Yes, ___.', options: ['A. they are', 'B. it is', 'C. these are', 'D. they aren\'t'], answer: 0, explanation: '复数用they are。' },
      { id: 'p065q22', type: '单项选择', score: 2, text: '—What are ___? —They are tomatoes.', options: ['A. this', 'B. that', 'C. these', 'D. it'], answer: 2, explanation: '用these问复数。' },
      { id: 'p065q23', type: '单项选择', score: 2, text: 'It is ___ today.', options: ['A. sun', 'B. sunny', 'C. suns', 'D. a sun'], answer: 1, explanation: '天气用形容词sunny。' },
      { id: 'p065q24', type: '单项选择', score: 2, text: '—How much ___ the shoes? —They are 80 yuan.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 1, explanation: 'shoes复数用are。' },
      { id: 'p065q25', type: '单项选择', score: 2, text: 'This dress is 200 yuan. It is ___.', options: ['A. cheap', 'B. expensive', 'C. small', 'D. nice'], answer: 1, explanation: '200元较贵用expensive。' },
      { id: 'p065q26', type: '单项选择', score: 2, text: '—Is it warm? —Yes, ___.', options: ['A. it is', 'B. it isn\'t', 'C. they are', 'D. it does'], answer: 0, explanation: '肯定回答it is。' },
      { id: 'p065q27', type: '单项选择', score: 2, text: 'What ___ the weather like?', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'weather单数用is。' },
      { id: 'p065q28', type: '单项选择', score: 2, text: 'Look at ___ tomatoes.', options: ['A. this', 'B. that', 'C. these', 'D. a'], answer: 2, explanation: 'tomatoes复数用these。' },
      { id: 'p065q29', type: '单项选择', score: 2, text: '—What time is it? —It\'s ___ o\'clock.', options: ['A. twelve', 'B. a twelve', 'C. twelves', 'D. the twelve'], answer: 0, explanation: '时间用基数词。' },
      { id: 'p065q30', type: '单项选择', score: 2, text: 'It is time ___ lunch.', options: ['A. to', 'B. for', 'C. of', 'D. on'], answer: 1, explanation: 'It is time for固定搭配。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p065q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big. 问：How many goats does the farmer have?', passage: 'Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big.', answer: 'Ten goats.', explanation: '从原文"I have ten goats"得知。' },
      { id: 'p065q32', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：How many cows does the farmer have?', passage: 'Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big.', answer: 'Five cows.', explanation: '从原文得知。' },
      { id: 'p065q33', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What colour are the tomatoes?', passage: 'Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big.', answer: 'Red.', explanation: '从原文"The tomatoes are red"得知。' },
      { id: 'p065q34', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Are the potatoes big or small?', passage: 'Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big.', answer: 'Big.', explanation: '从原文"The potatoes are big"得知。' },
      { id: 'p065q35', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Is the farm big?', passage: 'Welcome to my farm! It is big. I have many animals. I have ten goats and five cows. I have many vegetables, too. Look! These are tomatoes. Those are potatoes. The tomatoes are red. The potatoes are big.', answer: 'Yes, it is.', explanation: '从原文"It is big"得知。' },

      // 五、写作（20分）
      { id: 'p065q36', type: '写作', score: 20, text: '以"My Farm"为题，写一段不少于5句话的短文，介绍你的农场（有哪些动物、蔬菜等）。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：This is my farm. It is big. I have three cows. I have many tomatoes. They are red. I love my farm.' }
    ]
  },

  /* ============================== 五年级数学下册 期末卷 ============================== */
  {
    id: 'p066',
    subject: '数学',
    grade: '五年级',
    type: '期末卷',
    region: '全国',
    title: '人教版五年级数学下册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p066q1', type: '填空题', score: 2, text: '12的因数有____，其中既是奇数又是合数的是____。', answer: '1、2、3、4、6、12、无', explanation: '12的因数1,2,3,4,6,12中，奇数有1和3，但1既不是质数也不是合数，3是质数，所以没有既是奇数又是合数的因数。' },
      { id: 'p066q2', type: '填空题', score: 2, text: '一个数既是15的倍数又是20的倍数，这个数最小是____。', answer: '60', explanation: '15和20的最小公倍数是60。' },
      { id: 'p066q3', type: '填空题', score: 2, text: '把3米长的绳子平均分成8段，每段长____米，每段是全长的____。', answer: '3/8、1/8', explanation: '3÷8=3/8米；每段是1/8。' },
      { id: 'p066q4', type: '填空题', score: 2, text: '5/8的分数单位是____，它有____个这样的单位，再加上____个就是1。', answer: '1/8、5、3', explanation: '分母8分数单位1/8，5个，再加3个是8/8=1。' },
      { id: 'p066q5', type: '填空题', score: 2, text: '一个长方体长5cm宽4cm高3cm，它的棱长总和是____cm，表面积是____cm²。', answer: '48、94', explanation: '棱长和=4×(5+4+3)=48；表面积=2×(5×4+5×3+4×3)=2×47=94。' },
      { id: 'p066q6', type: '填空题', score: 2, text: '一个正方体棱长6cm，体积是____cm³，表面积是____cm²。', answer: '216、216', explanation: '体积=6³=216；表面积=6×6²=216。' },
      { id: 'p066q7', type: '填空题', score: 2, text: '把3/4和5/6通分，3/4=____/12，5/6=____/12。', answer: '9、10', explanation: '以12为公分母通分。' },
      { id: 'p066q8', type: '填空题', score: 2, text: '在○里填">""<"或"="：3/5○2/3', answer: '<', explanation: '3/5=9/15，2/3=10/15，所以小于。' },
      { id: 'p066q9', type: '填空题', score: 2, text: '1/2+1/3=____，1-3/8=____。', answer: '5/6、5/8', explanation: '1/2+1/3=3/6+2/6=5/6；1-3/8=5/8。' },
      { id: 'p066q10', type: '填空题', score: 2, text: '一个水箱能装水50升，这个水箱的____是50升。（填容积或体积）', answer: '容积', explanation: '容器能容纳的体积叫容积。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p066q11', type: '选择题', score: 2, text: '下面各数中是质数的是（  ）', options: ['A. 9', 'B. 15', 'C. 21', 'D. 23'], answer: 3, explanation: '23只有1和23两个因数，是质数。' },
      { id: 'p066q12', type: '选择题', score: 2, text: '一个长方体有（  ）个面。', options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], answer: 1, explanation: '长方体有6个面。' },
      { id: 'p066q13', type: '选择题', score: 2, text: '下面图形中能折成正方体的是（  ）', options: ['A. 一字排开的6个正方形', 'B. 田字形4个正方形', 'C. 十字形展开图', 'D. L形4个正方形'], answer: 2, explanation: '十字形展开图能折成正方体。' },
      { id: 'p066q14', type: '选择题', score: 2, text: '4/7和8/14的（  ）相等。', options: ['A. 分数单位', 'B. 大小', 'C. 分子', 'D. 分母'], answer: 1, explanation: '8/14=4/7，大小相等。' },
      { id: 'p066q15', type: '选择题', score: 2, text: '一个正方体的棱长扩大到原来的2倍，体积扩大到原来的（  ）倍。', options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], answer: 3, explanation: '体积=棱长³，2³=8倍。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p066q16', type: '判断题', score: 2, text: '所有的自然数不是奇数就是偶数。（  ）', answer: '正确', explanation: '按能否被2整除分为奇数偶数。' },
      { id: 'p066q17', type: '判断题', score: 2, text: '1立方米比1平方米大。（  ）', answer: '错误', explanation: '体积和面积单位不能比较。' },
      { id: 'p066q18', type: '判断题', score: 2, text: '两个分数的分母相同，分子大的分数就大。（  ）', answer: '正确', explanation: '同分母分数分子大则大。' },
      { id: 'p066q19', type: '判断题', score: 2, text: '正方体是特殊的长方体。（  ）', answer: '正确', explanation: '正方体满足长方体特征且棱长相等。' },
      { id: 'p066q20', type: '判断题', score: 2, text: '一个数的因数一定比它的倍数小。（  ）', answer: '错误', explanation: '一个数最大的因数是它本身，最小的倍数也是它本身。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p066q21', type: '计算题', score: 6, text: '直接写得数：1/3+1/3=', answer: '2/3', explanation: '同分母分数相加。' },
      { id: 'p066q22', type: '计算题', score: 6, text: '计算：5/6-1/4=', answer: '7/12', explanation: '5/6-1/4=10/12-3/12=7/12。' },
      { id: 'p066q23', type: '计算题', score: 6, text: '计算：1/2+2/3+3/4=', answer: '23/12', explanation: '公分母12，6/12+8/12+9/12=23/12。' },
      { id: 'p066q24', type: '计算题', score: 6, text: '简便计算：7/9-1/4+2/9', answer: '3/4', explanation: '7/9+2/9-1/4=1-1/4=3/4。' },
      { id: 'p066q25', type: '计算题', score: 6, text: '解方程：x+1/3=5/6', answer: 'x=1/2', explanation: 'x=5/6-1/3=5/6-2/6=3/6=1/2。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p066q26', type: '应用题', score: 10, text: '一段路，第一天修了全长的1/4，第二天修了全长的1/3，还剩全长的几分之几没修？', answer: '1-1/4-1/3=1-3/12-4/12=5/12。', explanation: '用单位"1"减去已修的分率。' },
      { id: 'p066q27', type: '应用题', score: 10, text: '一个长方体水箱，长8分米，宽5分米，高4分米。如果水箱里水深3分米，水箱里有水多少升？', answer: '8×5×3=120（立方分米）=120（升）。', explanation: '1立方分米=1升，水深3分米求水的体积。' },
      { id: 'p066q28', type: '应用题', score: 10, text: '把一袋重5千克的糖果平均分给8个小朋友，每个小朋友分得多少千克？每个小朋友分得这些糖果的几分之几？', answer: '5÷8=5/8（千克）；1÷8=1/8。', explanation: '求每份用总量÷份数，求分率用单位"1"÷份数。' }
    ]
  },

  /* ============================== 六年级语文下册 期末卷 ============================== */
  {
    id: 'p067',
    subject: '语文',
    grade: '六年级',
    type: '期末卷',
    region: '全国',
    title: '人教版六年级语文下册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、基础知识（每题2分，共20分）
      { id: 'p067q1', type: '填空题', score: 2, text: '看拼音写词语：pái huái（  ）  zhēng róng（  ）', answer: '徘徊、峥嵘', explanation: '注意"徊"和"嵘"的字形。' },
      { id: 'p067q2', type: '选择题', score: 2, text: '下列加点字读音全对的一项是（  ）', options: ['A. 倒(dào)叙 头涔(cén)涔', 'B. 倒(dǎo)叙 头头涔(cén)涔', 'C. 倒(dào)叙 头涔(shēn)涔', 'D. 倒(dǎo)叙 头涔(shēn)涔'], answer: 0, explanation: '"倒"在"倒叙"读dào，"涔"读cén。' },
      { id: 'p067q3', type: '填空题', score: 2, text: '"薄"在"薄弱"中读____，在"薄荷"中读____。', answer: 'bó、bò', explanation: '"薄"是多音字。' },
      { id: 'p067q4', type: '选择题', score: 2, text: '下列成语中没有错别字的是（  ）', options: ['A. 司空见贯', 'B. 见微知著', 'C. 无独有偶', 'D. 锲而不舍'], answer: 1, explanation: 'A应为"司空见惯"，"贯"误。"见微知著"正确。' },
      { id: 'p067q5', type: '填空题', score: 2, text: '把成语补充完整：（  ）无虚席  （  ）不安席', answer: '座、寝', explanation: '座无虚席、寝不安席。' },
      { id: 'p067q6', type: '填空题', score: 2, text: '写出"AABC"式词语两个：____、____。', answer: '滔滔不绝、依依不舍（答案不唯一）', explanation: 'AABC式叠词。' },
      { id: 'p067q7', type: '选择题', score: 2, text: '"卖火柴的小女孩"的作者是（  ）', options: ['A. 安徒生', 'B. 格林', 'C. 伊索', 'D. 王尔德'], answer: 0, explanation: '安徒生是丹麦童话作家。' },
      { id: 'p067q8', type: '填空题', score: 2, text: '写出下列词语的反义词：徘徊—（  ）  荒唐—（  ）', answer: '果断、合理', explanation: '反义词意义相反。' },
      { id: 'p067q9', type: '选择题', score: 2, text: '"燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。"运用的修辞是（  ）', options: ['A. 比喻', 'B. 拟人', 'C. 排比', 'D. 夸张'], answer: 2, explanation: '三句结构相同是排比。' },
      { id: 'p067q10', type: '填空题', score: 2, text: '按课文内容填空：《匆匆》的作者是____，文章表达了对____的感慨。', answer: '朱自清、时光流逝', explanation: '朱自清借时光流逝表达珍惜时间的情感。' },

      // 二、古诗文填空（每空1分，共10分）
      { id: 'p067q11', type: '古诗文填空', score: 1, text: '百川东到海，______________。', answer: '何时复西归', explanation: '《长歌行》。' },
      { id: 'p067q12', type: '古诗文填空', score: 1, text: '少壮不努力，______________。', answer: '老大徒伤悲', explanation: '《长歌行》劝人珍惜时间。' },
      { id: 'p067q13', type: '古诗文填空', score: 1, text: '煮豆燃豆萁，______________。', answer: '豆在釜中泣', explanation: '曹植《七步诗》。' },
      { id: 'p067q14', type: '古诗文填空', score: 1, text: '本是同根生，______________。', answer: '相煎何太急', explanation: '《七步诗》表达兄弟相残之悲。' },
      { id: 'p067q15', type: '古诗文填空', score: 1, text: '咬定青山不放松，______________。', answer: '立根原在破岩中', explanation: '郑燮《竹石》。' },
      { id: 'p067q16', type: '古诗文填空', score: 1, text: '千磨万击还坚劲，______________。', answer: '任尔东西南北风', explanation: '《竹石》咏物言志。' },
      { id: 'p067q17', type: '古诗文填空', score: 1, text: '《七步诗》的作者是____。', answer: '曹植', explanation: '曹植是三国时期诗人。' },
      { id: 'p067q18', type: '古诗文填空', score: 1, text: '粉骨碎身浑不怕，______________。', answer: '要留清白在人间', explanation: '于谦《石灰吟》。' },
      { id: 'p067q19', type: '古诗文填空', score: 1, text: '不要人夸好颜色，______________。', answer: '只留清气满乾坤', explanation: '王冕《墨梅》。' },
      { id: 'p067q20', type: '古诗文填空', score: 1, text: '《石灰吟》中表达诗人志向的诗句是：______________，______________。', answer: '粉骨碎身浑不怕，要留清白在人间', explanation: '表达坚守清白的志向。' },

      // 三、阅读理解（共30分）
      { id: 'p067q21', type: '阅读理解', score: 10, text: '阅读《匆匆》选段，回答：作者写"燕子去了，有再来的时候"等开头有什么作用？', passage: '燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？', answer: '用排比开头，以自然界的轮回反衬时光的一去不复返，引出对时间流逝的思考，为全文奠定感情基调。', explanation: '从结构和内容两方面分析作用。' },
      { id: 'p067q22', type: '阅读理解', score: 10, text: '阅读《卖火柴的小女孩》选段，回答：小女孩几次擦燃火柴？分别看到了什么？', passage: '她敢从成把的火柴里抽出一根，在墙上擦燃了，来暖和暖和自己的小手吗？她终于抽出了一根。哧！火柴燃起来了，冒出火焰来了！她把小手拢在火焰上。', answer: '小女孩五次擦燃火柴，分别看到了大火炉、烤鹅、圣诞树、奶奶、和奶奶一起飞走。', explanation: '从课文内容提炼五次幻象。' },
      { id: 'p067q23', type: '阅读理解', score: 10, text: '阅读短文，回答问题："时间就是生命，无端的空耗别人的时间，其实是无异于谋财害命的。"这句话是谁说的？表达了什么意思？', passage: '时间就是生命，无端的空耗别人的时间，其实是无异于谋财害命的。', answer: '是鲁迅说的。意思是浪费时间等于浪费生命，强调要珍惜时间，不要浪费他人时间。', explanation: '理解名言的含义和作者观点。' },

      // 四、句子改写（每题2分，共10分）
      { id: 'p067q24', type: '句子改写', score: 2, text: '改为"被"字句：时光带走了我们的童年。', answer: '我们的童年被时光带走了。', explanation: '宾语前置加"被"。' },
      { id: 'p067q25', type: '句子改写', score: 2, text: '改为"把"字句：泪水打湿了他的衣衫。', answer: '泪水把他的衣衫打湿了。', explanation: '主语后加"把"再加宾语。' },
      { id: 'p067q26', type: '句子改写', score: 2, text: '改为反问句：我们应该珍惜时间。', answer: '我们难道不应该珍惜时间吗？', explanation: '反问句用"难道……不……吗"。' },
      { id: 'p067q27', type: '句子改写', score: 2, text: '缩句：那个卖火柴的小女孩在寒冷的大街上可怜地死去。', answer: '小女孩死去。', explanation: '保留主谓中心语。' },
      { id: 'p067q28', type: '句子改写', score: 2, text: '修改病句：读了《匆匆》这篇课文，使我深受教育。', answer: '读了《匆匆》这篇课文，我深受教育。（或：《匆匆》这篇课文使我深受教育。）', explanation: '"读了"和"使"连用缺主语，删去其一。' },

      // 五、作文（30分）
      { id: 'p067q29', type: '作文', score: 30, text: '以"难忘的小学生活"为题，写一篇不少于400字的作文。要求：表达真情实感，条理清楚。', answer: '评分标准：内容充实15分，结构清晰10分，语言通顺5分。', explanation: '可写人、事、景，抒发对小学生活的留恋。' }
    ]
  },

  /* ============================== 六年级数学下册 期末卷 ============================== */
  {
    id: 'p068',
    subject: '数学',
    grade: '六年级',
    type: '期末卷',
    region: '全国',
    title: '人教版六年级数学下册期末测试卷',
    totalScore: 100,
    timeLimit: 90,
    questions: [
      // 一、填空题（每题2分，共20分）
      { id: 'p068q1', type: '填空题', score: 2, text: '规定零上温度为正，零下为负，+8℃表示____，-5℃表示____。', answer: '零上8摄氏度、零下5摄氏度', explanation: '正负数表示相反意义的量。' },
      { id: 'p068q2', type: '填空题', score: 2, text: '一件商品打七折出售，比原价便宜了____%，如果原价200元，现价____元。', answer: '30、140', explanation: '七折即70%，便宜30%；200×70%=140。' },
      { id: 'p068q3', type: '填空题', score: 2, text: '一个圆柱底面半径2cm高5cm，侧面积是____cm²，体积是____cm³。（π取3.14）', answer: '62.8、62.8', explanation: '侧面积=2πrh=2×3.14×2×5=62.8；体积=πr²h=3.14×4×5=62.8。' },
      { id: 'p068q4', type: '填空题', score: 2, text: '把圆柱削成最大的圆锥，削去部分是圆锥体积的____倍。', answer: '2', explanation: 'V柱=3V锥，削去=2V锥。' },
      { id: 'p068q5', type: '填空题', score: 2, text: '比例尺1:500000，图上4cm表示实际____km。', answer: '20', explanation: '4×500000=2000000cm=20km。' },
      { id: 'p068q6', type: '填空题', score: 2, text: '在比例3:4=9:12中，两个外项是____，两个内项是____。', answer: '3和12、4和9', explanation: '比例两端是外项，中间是内项。' },
      { id: 'p068q7', type: '填空题', score: 2, text: '如果A×3=B×5，那么A:B=____:____。', answer: '5、3', explanation: '比例中两内项之积等于两外项之积，A:B=5:3。' },
      { id: 'p068q8', type: '填空题', score: 2, text: '一个数的25%是15，这个数是____；比20多20%的数是____。', answer: '60、24', explanation: '15÷25%=60；20×(1+20%)=24。' },
      { id: 'p068q9', type: '填空题', score: 2, text: '在-3、0、+5、-1.2中，最大的数是____，最小的数是____。', answer: '+5、-3', explanation: '正数大于0大于负数，-3最小。' },
      { id: 'p068q10', type: '填空题', score: 2, text: '一个圆锥体积是18立方分米，高6分米，底面积是____平方分米。', answer: '9', explanation: 'V=1/3Sh，S=3V/h=3×18/6=9。' },

      // 二、选择题（每题2分，共10分）
      { id: 'p068q11', type: '选择题', score: 2, text: '下面各数中最大的数是（  ）', options: ['A. -5', 'B. 0', 'C. -1', 'D. -10'], answer: 1, explanation: '0大于所有负数。' },
      { id: 'p068q12', type: '选择题', score: 2, text: '一件商品先涨价10%，再降价10%，现价与原价相比（  ）', options: ['A. 相等', 'B. 比原价高', 'C. 比原价低', 'D. 无法确定'], answer: 2, explanation: '(1+10%)(1-10%)=0.99，比原价低。' },
      { id: 'p068q13', type: '选择题', score: 2, text: '圆柱和圆锥等底等高，圆柱体积是圆锥的（  ）倍。', options: ['A. 2', 'B. 3', 'C. 1/3', 'D. 6'], answer: 1, explanation: 'V柱=3V锥。' },
      { id: 'p068q14', type: '选择题', score: 2, text: '能和3:4组成比例的是（  ）', options: ['A. 4:3', 'B. 6:8', 'C. 3:8', 'D. 4:5'], answer: 1, explanation: '3:4=6:8=3/4。' },
      { id: 'p068q15', type: '选择题', score: 2, text: '把1000元存入银行，年利率3%，一年后得利息（  ）元。', options: ['A. 30', 'B. 1030', 'C. 300', 'D. 1003'], answer: 0, explanation: '1000×3%=30元。' },

      // 三、判断题（每题2分，共10分）
      { id: 'p068q16', type: '判断题', score: 2, text: '0既不是正数也不是负数。（  ）', answer: '正确', explanation: '0是正负数的分界。' },
      { id: 'p068q17', type: '判断题', score: 2, text: '圆柱的体积是圆锥体积的3倍。（  ）', answer: '错误', explanation: '必须是等底等高时才成立。' },
      { id: 'p068q18', type: '判断题', score: 2, text: '在比例里，两个外项的积等于两个内项的积。（  ）', answer: '正确', explanation: '这是比例的基本性质。' },
      { id: 'p068q19', type: '判断题', score: 2, text: '一种商品打五折出售，就是比原价便宜了一半。（  ）', answer: '正确', explanation: '五折即50%，便宜1-50%=50%。' },
      { id: 'p068q20', type: '判断题', score: 2, text: '所有的负数都比0小。（  ）', answer: '正确', explanation: '负数小于0。' },

      // 四、计算题（每题6分，共30分）
      { id: 'p068q21', type: '计算题', score: 6, text: '解比例：x:4=3:6', answer: 'x=2', explanation: '6x=12，x=2。' },
      { id: 'p068q22', type: '计算题', score: 6, text: '解方程：3x+1.5=2x+4.5', answer: 'x=3', explanation: '3x-2x=4.5-1.5，x=3。' },
      { id: 'p068q23', type: '计算题', score: 6, text: '简便计算：25×3.2×1.25', answer: '100', explanation: '25×4×0.8×1.25=100×1=100。' },
      { id: 'p068q24', type: '计算题', score: 6, text: '求圆柱表面积：底面半径2cm，高5cm（π取3.14）', answer: '87.92cm²', explanation: '2πrh+2πr²=62.8+25.12=87.92。' },
      { id: 'p068q25', type: '计算题', score: 6, text: '求圆锥体积：底面半径3cm，高5cm（π取3.14）', answer: '47.1cm³', explanation: '1/3×π×9×5=1/3×3.14×45=47.1。' },

      // 五、应用题（每题10分，共30分）
      { id: 'p068q26', type: '应用题', score: 10, text: '一件衣服原价400元，现在打八折出售，现价多少元？比原价便宜多少元？', answer: '现价：400×80%=320（元）；便宜：400-320=80（元）。', explanation: '打折后价格=原价×折扣。' },
      { id: 'p068q27', type: '应用题', score: 10, text: '一个圆锥形沙堆，底面周长18.84米，高1.5米。这个沙堆的体积是多少立方米？（π取3.14）', answer: '半径：18.84÷(2×3.14)=3（米）；体积：1/3×3.14×3²×1.5=1/3×3.14×9×1.5=14.13（立方米）。', explanation: '先由周长求半径，再用圆锥体积公式。' },
      { id: 'p068q28', type: '应用题', score: 10, text: '在一幅比例尺是1:2000000的地图上，量得甲乙两地距离是5厘米。甲乙两地的实际距离是多少千米？', answer: '5×2000000=10000000厘米=100（千米）。', explanation: '图上距离×比例尺=实际距离，再换算单位。' }
    ]
  },

  /* ============================== 六年级英语下册 期末卷 ============================== */
  {
    id: 'p069',
    subject: '英语',
    grade: '六年级',
    type: '期末卷',
    region: '全国',
    title: '人教版六年级英语下册期末测试卷',
    totalScore: 100,
    timeLimit: 60,
    questions: [
      // 一、听力选择（改为笔试选择，每题2分，共20分）
      { id: 'p069q1', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：taller', options: ['A. tall', 'B. shorter', 'C. than', 'D. and'], answer: 1, explanation: 'taller和shorter都是比较级。' },
      { id: 'p069q2', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：went', options: ['A. go', 'B. saw', 'C. play', 'D. eat'], answer: 1, explanation: 'went和saw都是过去式。' },
      { id: 'p069q3', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：big', options: ['A. bigger', 'B. small', 'C. tall', 'D. long'], answer: 0, explanation: 'big和bigger都是大的相关词，bigger是比较级。' },
      { id: 'p069q4', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：yesterday', options: ['A. today', 'B. tomorrow', 'C. now', 'D. week'], answer: 0, explanation: 'yesterday和today都是时间词。' },
      { id: 'p069q5', type: '听力选择', score: 2, text: '选出与所给单词同类的一项：saw', options: ['A. see', 'B. ate', 'C. look', 'D. watch'], answer: 1, explanation: 'saw和ate都是过去式。' },
      { id: 'p069q6', type: '听力选择', score: 2, text: '选出正确答语：How tall are you?', options: ['A. I am 12.', 'B. I am 1.5 metres.', 'C. I am fine.', 'D. I am tall.'], answer: 1, explanation: '问身高回答高度。' },
      { id: 'p069q7', type: '听力选择', score: 2, text: '选出正确答语：What did you do yesterday?', options: ['A. I played football.', 'B. I play football.', 'C. I am playing.', 'D. I will play.'], answer: 0, explanation: '过去时问用过去时答。' },
      { id: 'p069q8', type: '听力选择', score: 2, text: '选出正确答语：Where did you go last weekend?', options: ['A. I go to Beijing.', 'B. I went to Beijing.', 'C. I am in Beijing.', 'D. I will go to Beijing.'], answer: 1, explanation: '过去时问用过去时答。' },
      { id: 'p069q9', type: '听力选择', score: 2, text: '选出正确答语：Did you read books?', options: ['A. Yes, I do.', 'B. Yes, I did.', 'C. Yes, I am.', 'D. Yes, I can.'], answer: 1, explanation: 'did问用did回答。' },
      { id: 'p069q10', type: '听力选择', score: 2, text: '选出正确答语：How was your weekend?', options: ['A. It is good.', 'B. It was good.', 'C. Yes, it was.', 'D. I am fine.'], answer: 1, explanation: '过去时问用过去时答。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p069q11', type: '词汇填空', score: 2, text: 'I ___ (go) to the park yesterday.（用动词正确形式填空）', answer: 'went', explanation: 'yesterday用过去式went。' },
      { id: 'p069q12', type: '词汇填空', score: 2, text: 'She ___ (see) a film last night.（用动词正确形式填空）', answer: 'saw', explanation: 'last night用过去式saw。' },
      { id: 'p069q13', type: '词汇填空', score: 2, text: 'Tom is ___ (tall) than Jack.（用比较级填空）', answer: 'taller', explanation: 'than前用比较级。' },
      { id: 'p069q14', type: '词汇填空', score: 2, text: 'My hands are ___ (big) than yours.（用比较级填空）', answer: 'bigger', explanation: 'big双写g加er。' },
      { id: 'p069q15', type: '词汇填空', score: 2, text: 'I ___ (eat) an apple this morning.（用动词正确形式填空）', answer: 'ate', explanation: 'this morning用过去式ate。' },
      { id: 'p069q16', type: '词汇填空', score: 2, text: '写出单词的比较级：tall____  big____', answer: 'taller、bigger', explanation: 'tall加er，big双写g加er。' },
      { id: 'p069q17', type: '词汇填空', score: 2, text: '写出单词的过去式：go____  see____', answer: 'went、saw', explanation: '不规则动词过去式。' },
      { id: 'p069q18', type: '词汇填空', score: 2, text: '翻译：我昨天去公园了。____', answer: 'I went to the park yesterday.', explanation: '用过去式went。' },
      { id: 'p069q19', type: '词汇填空', score: 2, text: '翻译：你比我高。____', answer: 'You are taller than me.', explanation: '用比较级taller。' },
      { id: 'p069q20', type: '词汇填空', score: 2, text: '翻译：你周末做什么了？____', answer: 'What did you do last weekend?', explanation: '过去时用did提问。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p069q21', type: '单项选择', score: 2, text: 'I am ___ than you.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. the tallest'], answer: 1, explanation: 'than前用比较级。' },
      { id: 'p069q22', type: '单项选择', score: 2, text: '—What ___ you do yesterday? —I played football.', options: ['A. do', 'B. did', 'C. does', 'D. are'], answer: 1, explanation: 'yesterday用did。' },
      { id: 'p069q23', type: '单项选择', score: 2, text: 'I ___ to Beijing last summer.', options: ['A. go', 'B. went', 'C. goes', 'D. going'], answer: 1, explanation: 'last summer用过去式went。' },
      { id: 'p069q24', type: '单项选择', score: 2, text: '—Did you read books? —Yes, ___.', options: ['A. I do', 'B. I did', 'C. I am', 'D. I can'], answer: 1, explanation: 'did问用did回答。' },
      { id: 'p069q25', type: '单项选择', score: 2, text: 'My shoes are ___ than yours.', options: ['A. big', 'B. bigger', 'C. biggest', 'D. the biggest'], answer: 1, explanation: 'than前用比较级。' },
      { id: 'p069q26', type: '单项选择', score: 2, text: 'He ___ a film last night.', options: ['A. see', 'B. saw', 'C. sees', 'D. seeing'], answer: 1, explanation: 'last night用过去式saw。' },
      { id: 'p069q27', type: '单项选择', score: 2, text: '—How ___ your weekend? —It was good.', options: ['A. is', 'B. was', 'C. were', 'D. are'], answer: 1, explanation: '过去时用was。' },
      { id: 'p069q28', type: '单项选择', score: 2, text: 'I ___ an apple this morning.', options: ['A. eat', 'B. ate', 'C. eats', 'D. eating'], answer: 1, explanation: 'this morning用过去式ate。' },
      { id: 'p069q29', type: '单项选择', score: 2, text: 'Tom is 1.5 ___ tall.', options: ['A. metre', 'B. metres', 'C. metre\'s', 'D. a metre'], answer: 1, explanation: '1.5用复数metres。' },
      { id: 'p069q30', type: '单项选择', score: 2, text: '—___ did you go? —I went to Shanghai.', options: ['A. What', 'B. Where', 'C. How', 'D. When'], answer: 1, explanation: '问地点用where。' },

      // 四、阅读理解（每题4分，共20分）
      { id: 'p069q31', type: '阅读理解', score: 4, text: '阅读短文回答问题：Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time. 问：Where did Tom go last weekend?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'Beijing.', explanation: '从原文"I went to Beijing"得知。' },
      { id: 'p069q32', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：How did Tom go to Beijing?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'By train.', explanation: '从原文"We went there by train"得知。' },
      { id: 'p069q33', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What did Tom visit?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'The Great Wall.', explanation: '从原文"We visited the Great Wall"得知。' },
      { id: 'p069q34', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：What did Tom eat?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'Beijing duck.', explanation: '从原文"We ate Beijing duck"得知。' },
      { id: 'p069q35', type: '阅读理解', score: 4, text: '阅读上面的短文，回答：Did Tom have a good time?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'Yes, he did.', explanation: '从原文"We had a good time"得知。' },

      // 五、写作（20分）
      { id: 'p069q36', type: '写作', score: 20, text: '以"My Last Weekend"为题，写一段不少于5句话的短文，介绍你上周末做了什么（去了哪里、做了什么、感觉如何）。', answer: '评分标准：内容完整10分，语法正确5分，单词拼写5分。', explanation: '参考：I went to the park last weekend. I went there by bike. I flew a kite there. I ate some ice cream. I had a good time.' }
    ]
  },

  /* ============================== 四年级语文上册第二次月考 月考卷 ============================== */
  {
    id: 'p070',
    subject: '语文',
    grade: '四年级',
    type: '月考卷',
    region: '全国',
    title: '人教版四年级语文上册第二次月考卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p070q1', type: '填空题', score: 4, text: '看拼音写词语：lǒng zhào（  ）  fèi téng（  ）', answer: '笼罩、沸腾', explanation: '注意"罩"和"腾"的字形。' },
      { id: 'p070q2', type: '填空题', score: 4, text: '"薄"在"薄雾"中读____，在"薄荷"中读____。', answer: 'bó、bò', explanation: '"薄"是多音字。' },
      { id: 'p070q3', type: '填空题', score: 4, text: '把成语补充完整：（  ）天动地  山（  ）地裂', answer: '惊、崩', explanation: '惊天动地、山崩地裂。' },
      { id: 'p070q4', type: '填空题', score: 4, text: '"那声音如同山崩地裂"运用的修辞手法是____。', answer: '比喻', explanation: '把潮声比作山崩地裂声。' },
      { id: 'p070q5', type: '选择题', score: 4, text: '下列加点字读音全对的一项是（  ）', options: ['A. 屹立(qì) 霎时(shà)', 'B. 屹立(yì) 霎时(shà)', 'C. 屹立(yì) 霎时(chà)', 'D. 屹立(qì) 霎时(chà)'], answer: 1, explanation: '"屹"读yì，"霎"读shà。' },
      { id: 'p070q6', type: '选择题', score: 4, text: '"观潮"一课是按什么顺序描写的？（  ）', options: ['A. 地点变换', 'B. 时间先后', 'C. 事情发展', 'D. 总分总'], answer: 1, explanation: '按潮来前、潮来时、潮过后的时间顺序。' },
      { id: 'p070q7', type: '选择题', score: 4, text: '下列句子中没有语病的是（  ）', options: ['A. 我估计他一定错了。', 'B. 我们要养成认真审题的习惯。', 'C. 公园里到处是五颜六色的红花。', 'D. 我差不多全做完了。'], answer: 1, explanation: 'A"估计"和"一定"矛盾，C"五颜六色"与"红花"矛盾，D"差不多"和"全"矛盾。' },
      { id: 'p070q8', type: '判断题', score: 3, text: '"巨浪翻滚"中"巨"的意思是巨大。（  ）', answer: '正确', explanation: '"巨"形容大。' },
      { id: 'p070q9', type: '判断题', score: 3, text: '"潮来时"部分描写了大潮由远及近的变化。（  ）', answer: '正确', explanation: '课文按由远及近顺序描写潮来时。' },
      { id: 'p070q10', type: '阅读理解', score: 16, text: '阅读《观潮》选段，回答：选段中"水墙"和"白色战马"分别写出了大潮的什么特点？', passage: '那条白线很快地向我们移来，逐渐拉长，变粗，横贯江面。再近些，只见白浪翻滚，形成一堵两丈多高的水墙。浪潮越来越近，犹如千万匹白色战马齐头并进，浩浩荡荡地飞奔而来。', answer: '"水墙"写出了大潮浪头之高、来势之猛；"白色战马"写出了大潮浩浩荡荡、气势磅礴的样子。', explanation: '从比喻的本体和喻体的相似点分析。' }
    ]
  },

  /* ============================== 五年级数学上册第一次月考 月考卷 ============================== */
  {
    id: 'p071',
    subject: '数学',
    grade: '五年级',
    type: '月考卷',
    region: '全国',
    title: '人教版五年级数学上册第一次月考卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p071q1', type: '填空题', score: 4, text: '0.32×0.8=____，因数中共有____位小数。', answer: '0.256、三', explanation: '0.32两位加0.8一位共三位小数。' },
      { id: 'p071q2', type: '填空题', score: 4, text: '2.5×4=____，0.25×4=____。', answer: '10、1', explanation: '2.5×4=10；0.25×4=1。' },
      { id: 'p071q3', type: '填空题', score: 4, text: '一个数（0除外）乘大于1的数，积比原数____；乘小于1的数，积比原数____。', answer: '大、小', explanation: '积的变化规律。' },
      { id: 'p071q4', type: '填空题', score: 4, text: '把3.67×0.9的积保留两位小数约是____。（3.67×0.9=3.303）', answer: '3.30', explanation: '第三位3舍去，得3.30。' },
      { id: 'p071q5', type: '选择题', score: 4, text: '0.24×100的积是（  ）', options: ['A. 2.4', 'B. 24', 'C. 0.024', 'D. 240'], answer: 1, explanation: '0.24×100=24。' },
      { id: 'p071q6', type: '选择题', score: 4, text: '下列算式中积最大的是（  ）', options: ['A. 2.5×0.9', 'B. 2.5×1', 'C. 2.5×1.1', 'D. 2.5×0.5'], answer: 2, explanation: '乘的数越大积越大，1.1最大。' },
      { id: 'p071q7', type: '选择题', score: 4, text: '与0.125×8结果相等的是（  ）', options: ['A. 12.5×8', 'B. 1.25×0.8', 'C. 0.125×80', 'D. 1.25×8'], answer: 1, explanation: '0.125×8=1，1.25×0.8=1。' },
      { id: 'p071q8', type: '判断题', score: 3, text: '一个数（0除外）乘小于1的数，积比原数小。（  ）', answer: '正确', explanation: '乘小于1的数积变小。' },
      { id: 'p071q9', type: '判断题', score: 3, text: '3.5×0.2的积有三位小数。（  ）', answer: '错误', explanation: '3.5×0.2=0.7，只有一位小数。' },
      { id: 'p071q10', type: '应用题', score: 16, text: '一头牛每天吃草6.5千克，照这样计算，这头牛30天一共吃草多少千克？', answer: '6.5×30=195（千克）。', explanation: '用每天吃草量乘天数。' }
    ]
  },

  /* ============================== 六年级语文上册第一次月考 月考卷 ============================== */
  {
    id: 'p072',
    subject: '语文',
    grade: '六年级',
    type: '月考卷',
    region: '全国',
    title: '人教版六年级语文上册第一次月考卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p072q1', type: '填空题', score: 4, text: '看拼音写词语：jìng mì（  ）  hōng kǎo（  ）', answer: '静谧、烘烤', explanation: '注意"谧"和"烤"的字形。' },
      { id: 'p072q2', type: '填空题', score: 4, text: '"和"在"唱和"中读____，在"和平"中读____。', answer: 'hè、hé', explanation: '"和"是多音字。' },
      { id: 'p072q3', type: '填空题', score: 4, text: '把成语补充完整：（  ）高望重  （  ）然大物', answer: '德、庞', explanation: '德高望重、庞然大物。' },
      { id: 'p072q4', type: '填空题', score: 4, text: '"这山中的一切，哪个不是我的朋友？"运用的修辞是____。', answer: '反问', explanation: '用"哪个不是"反问加强语气。' },
      { id: 'p072q5', type: '选择题', score: 4, text: '下列加点字读音全对的一项是（  ）', options: ['A. 津(jīn)津乐道 唱和(hé)', 'B. 津(jīn)津乐道 唱和(hè)', 'C. 津(jìn)津乐道 唱和(hè)', 'D. 津(jìn)津乐道 唱和(hé)'], answer: 1, explanation: '"津"读jīn，"和"在"唱和"读hè。' },
      { id: 'p072q6', type: '选择题', score: 4, text: '"山中访友"的作者是（  ）', options: ['A. 老舍', 'B. 李汉荣', 'C. 朱自清', 'D. 巴金'], answer: 1, explanation: '《山中访友》作者是李汉荣。' },
      { id: 'p072q7', type: '选择题', score: 4, text: '下列句子中没有语病的是（  ）', options: ['A. 通过学习，使我进步了。', 'B. 我大概整整用了两小时。', 'C. 我们要养成认真读书的习惯。', 'D. 公园里到处是五颜六色的红花。'], answer: 2, explanation: 'A缺主语，B矛盾，D矛盾。C正确。' },
      { id: 'p072q8', type: '判断题', score: 3, text: '"山中访友"中作者把山中景物当作朋友来写，运用了拟人手法。（  ）', answer: '正确', explanation: '作者与山泉溪流打招呼是拟人。' },
      { id: 'p072q9', type: '判断题', score: 3, text: '"草虫的村落"中作者用拟人手法把草虫世界比作人类社会。（  ）', answer: '正确', explanation: '把草虫生活的地方称作"村落"。' },
      { id: 'p072q10', type: '阅读理解', score: 16, text: '阅读《山中访友》选段，回答：作者把山中的哪些景物当作朋友？', passage: '这山中的一切，哪个不是我的朋友？我热切地跟他们打招呼：你好，清凉的山泉！你捧出一面明镜，是要我重新梳妆吗？你好，汩汩的溪流！你吟诵着一首首小诗，是要我与你唱和吗？', answer: '作者把山泉、溪流等山中景物当作朋友。', explanation: '从原文找出作者打招呼的对象。' }
    ]
  },

  /* ============================== 四年级英语上册第一次月考 月考卷 ============================== */
  {
    id: 'p073',
    subject: '英语',
    grade: '四年级',
    type: '月考卷',
    region: '全国',
    title: '人教版四年级英语上册第一次月考卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p073q1', type: '词汇填空', score: 4, text: 'I ___ a student.（填be动词）', answer: 'am', explanation: 'I用am。' },
      { id: 'p073q2', type: '词汇填空', score: 4, text: 'She ___ a teacher.（填be动词）', answer: 'is', explanation: 'she用is。' },
      { id: 'p073q3', type: '词汇填空', score: 4, text: 'They ___ my friends.（填be动词）', answer: 'are', explanation: 'they用are。' },
      { id: 'p073q4', type: '词汇填空', score: 4, text: '翻译：苹果____  书____', answer: 'apple、book', explanation: '注意拼写。' },
      { id: 'p073q5', type: '单项选择', score: 4, text: '—What\'s this? —____ a book.', options: ['A. It\'s', 'B. This', 'C. That', 'D. They'], answer: 0, explanation: '回答What\'s this?用It\'s。' },
      { id: 'p073q6', type: '单项选择', score: 4, text: '—___ are you? —I\'m fine, thank you.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 2, explanation: '问"你好吗"用How。' },
      { id: 'p073q7', type: '单项选择', score: 4, text: '—What color ___ the sky? —It\'s blue.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'sky单数用is。' },
      { id: 'p073q8', type: '判断题', score: 3, text: '"What\'s your name?"的正确回答是"My name is Tom."。（  ）', answer: '正确', explanation: '问姓名用My name is...回答。' },
      { id: 'p073q9', type: '判断题', score: 3, text: '"Nice to meet you."的回答是"Goodbye."。（  ）', answer: '错误', explanation: '应回答"Nice to meet you, too."。' },
      { id: 'p073q10', type: '阅读理解', score: 16, text: '阅读短文回答问题：Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much. 问：How old is Tom?', passage: 'Hello, my name is Tom. I\'m ten years old. I have a dog. Its name is Bobby. Bobby is white and small. I like it very much.', answer: 'Ten (years old).', explanation: '从原文"I\'m ten years old."得知。' }
    ]
  },

  /* ============================== 五年级英语上册第二次月考 月考卷 ============================== */
  {
    id: 'p074',
    subject: '英语',
    grade: '五年级',
    type: '月考卷',
    region: '全国',
    title: '人教版五年级英语上册第二次月考卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p074q1', type: '词汇填空', score: 4, text: 'She ___ (be) tall.（填be动词）', answer: 'is', explanation: 'she用is。' },
      { id: 'p074q2', type: '词汇填空', score: 4, text: 'I ___ (have) Chinese on Mondays.（用have/has填空）', answer: 'have', explanation: 'I用have。' },
      { id: 'p074q3', type: '词汇填空', score: 4, text: 'He ___ (have) music on Tuesdays.（用have/has填空）', answer: 'has', explanation: 'he三单用has。' },
      { id: 'p074q4', type: '词汇填空', score: 4, text: '翻译：严格的____  友好的____', answer: 'strict、kind', explanation: '注意拼写。' },
      { id: 'p074q5', type: '单项选择', score: 4, text: '—What\'s he like? —He ___ tall.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 0, explanation: 'he用is。' },
      { id: 'p074q6', type: '单项选择', score: 4, text: 'We have English ___ Mondays.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 1, explanation: '星期前用on。' },
      { id: 'p074q7', type: '单项选择', score: 4, text: '—What would you like ___ drink? —Some tea.', options: ['A. for', 'B. to', 'C. of', 'D. on'], answer: 1, explanation: 'would like to do固定搭配。' },
      { id: 'p074q8', type: '判断题', score: 3, text: '问"你的英语老师是谁"用"Who is your English teacher?"。（  ）', answer: '正确', explanation: '问"是谁"用who。' },
      { id: 'p074q9', type: '判断题', score: 3, text: '"I\'d like some sandwich."表达正确。（  ）', answer: '错误', explanation: 'some后接复数sandwiches。' },
      { id: 'p074q10', type: '阅读理解', score: 16, text: '阅读短文回答问题：Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much. 问：What does Tom have on Mondays?', passage: 'Hi, I\'m Tom. I\'m a student. I go to school from Monday to Friday. I have math, Chinese and English on Mondays. My English teacher is Miss Wang. She is young and kind. I like English very much.', answer: 'Math, Chinese and English.', explanation: '从原文提取信息。' }
    ]
  },

  /* ============================== 六年级数学上册第一次月考 月考卷 ============================== */
  {
    id: 'p075',
    subject: '数学',
    grade: '六年级',
    type: '月考卷',
    region: '全国',
    title: '人教版六年级数学上册第一次月考卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p075q1', type: '填空题', score: 4, text: '3/4×8=____，表示求3/4的____倍是多少。', answer: '6、8', explanation: '3/4×8=6，求8个3/4。' },
      { id: 'p075q2', type: '填空题', score: 4, text: '2/5的倒数是____，1.5的倒数是____。', answer: '5/2、2/3', explanation: '分子分母互换；1.5=3/2倒数2/3。' },
      { id: 'p075q3', type: '填空题', score: 4, text: '12的1/3是____；24的5/8是____。', answer: '4、15', explanation: '12×1/3=4；24×5/8=15。' },
      { id: 'p075q4', type: '填空题', score: 4, text: '一桶油重5千克，用了2/5，用了____千克，还剩____千克。', answer: '2、3', explanation: '5×2/5=2；5-2=3。' },
      { id: 'p075q5', type: '选择题', score: 4, text: '下面算式中结果最大的是（  ）', options: ['A. 3/5×4/5', 'B. 3/5×1', 'C. 3/5×5/4', 'D. 3/5×0'], answer: 2, explanation: '乘大于1的数积变大，5/4大于1。' },
      { id: 'p075q6', type: '选择题', score: 4, text: '一根绳子长3/4米，截去它的1/3，截去（  ）米。', options: ['A. 1/4', 'B. 1/3', 'C. 3/4', 'D. 1/2'], answer: 0, explanation: '3/4×1/3=1/4米。' },
      { id: 'p075q7', type: '选择题', score: 4, text: 'a是非零自然数，下面结果小于a的是（  ）', options: ['A. a×1', 'B. a×3/2', 'C. a×5/4', 'D. a×1/2'], answer: 3, explanation: '乘小于1的数积变小，1/2小于1。' },
      { id: 'p075q8', type: '判断题', score: 3, text: '两个真分数相乘的积一定小于其中任意一个分数。（  ）', answer: '正确', explanation: '真分数小于1，相乘结果变小。' },
      { id: 'p075q9', type: '判断题', score: 3, text: '1吨的3/5和3吨的1/5一样重。（  ）', answer: '正确', explanation: '1×3/5=3/5吨，3×1/5=3/5吨，相等。' },
      { id: 'p075q10', type: '应用题', score: 16, text: '一袋大米重50千克，第一天吃了1/5，第二天吃了剩下的1/4。第二天吃了多少千克？还剩多少千克？', answer: '第一天吃50×1/5=10千克，剩50-10=40千克；第二天吃40×1/4=10千克；还剩40-10=30千克。', explanation: '注意第二天吃的是剩下的1/4。' }
    ]
  },

  /* ============================== 四年级数学 小升初模拟卷 ============================== */
  {
    id: 'p076',
    subject: '数学',
    grade: '四年级',
    type: '模拟卷',
    region: '全国',
    title: '人教版四年级数学综合模拟卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p076q1', type: '填空题', score: 4, text: '一个数由8个万、5个百和3个一组成，这个数写作____，读作____。', answer: '80503、八万零五百零三', explanation: '8在万位，5在百位，3在个位。' },
      { id: 'p076q2', type: '填空题', score: 4, text: '两个因数的积是150，一个因数乘4，另一个因数不变，积是____。', answer: '600', explanation: '积的变化规律，积也乘4。' },
      { id: 'p076q3', type: '填空题', score: 4, text: '1公顷=____平方米；1平方千米=____公顷。', answer: '10000、100', explanation: '面积单位换算。' },
      { id: 'p076q4', type: '填空题', score: 4, text: '钟面上9时整，时针和分针成____度角，是____角。', answer: '90、直', explanation: '9时整成90°直角。' },
      { id: 'p076q5', type: '选择题', score: 4, text: '下面各数中一个零都不读的是（  ）', options: ['A. 3004000', 'B. 3040000', 'C. 3400000', 'D. 3000400'], answer: 2, explanation: '3400000读作三百四十万，不读零。' },
      { id: 'p076q6', type: '选择题', score: 4, text: '只有一组平行线的图形是（  ）', options: ['A. 长方形', 'B. 正方形', 'C. 梯形', 'D. 平行四边形'], answer: 2, explanation: '梯形只有一组对边平行。' },
      { id: 'p076q7', type: '选择题', score: 4, text: '125×80的积末尾有（  ）个0。', options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], answer: 2, explanation: '125×80=10000，末尾4个0。' },
      { id: 'p076q8', type: '判断题', score: 3, text: '不相交的两条直线叫做平行线。（  ）', answer: '错误', explanation: '必须在同一平面内不相交才是平行线。' },
      { id: 'p076q9', type: '判断题', score: 3, text: '被除数和除数同时乘5，商不变。（  ）', answer: '正确', explanation: '商不变性质。' },
      { id: 'p076q10', type: '应用题', score: 16, text: '一辆汽车从甲地开往乙地，速度是80千米/时，用了5小时。返回时用了4小时，返回时的速度是多少？', answer: '甲乙距离：80×5=400（千米）；返回速度：400÷4=100（千米/时）。', explanation: '先求路程再求返回速度。' }
    ]
  },

  /* ============================== 五年级数学 综合模拟卷 ============================== */
  {
    id: 'p077',
    subject: '数学',
    grade: '五年级',
    type: '模拟卷',
    region: '全国',
    title: '人教版五年级数学综合模拟卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p077q1', type: '填空题', score: 4, text: '2.5×4=____，0.32×0.8=____。', answer: '10、0.256', explanation: '2.5×4=10；0.32×0.8=0.256。' },
      { id: 'p077q2', type: '填空题', score: 4, text: '一个数既是12的因数，又是18的因数，这个数最大是____。', answer: '6', explanation: '12和18的最大公因数是6。' },
      { id: 'p077q3', type: '填空题', score: 4, text: '一个长方体长5cm宽4cm高3cm，棱长总和是____cm。', answer: '48', explanation: '棱长和=4×(5+4+3)=48。' },
      { id: 'p077q4', type: '填空题', score: 4, text: '5/8的分数单位是____，再加上____个这样的单位就是1。', answer: '1/8、3', explanation: '分数单位1/8，5个加3个是8个等于1。' },
      { id: 'p077q5', type: '选择题', score: 4, text: '下面各数中是质数的是（  ）', options: ['A. 9', 'B. 15', 'C. 21', 'D. 23'], answer: 3, explanation: '23只有1和23两个因数。' },
      { id: 'p077q6', type: '选择题', score: 4, text: '一个数（0除外）乘小于1的数，积比原数（  ）', options: ['A. 大', 'B. 小', 'C. 相等', 'D. 无法确定'], answer: 1, explanation: '乘小于1的数积变小。' },
      { id: 'p077q7', type: '选择题', score: 4, text: '正方体是特殊的（  ）', options: ['A. 长方体', 'B. 梯形', 'C. 平行四边形', 'D. 三角形'], answer: 0, explanation: '正方体满足长方体特征且棱长相等。' },
      { id: 'p077q8', type: '判断题', score: 3, text: '1是所有自然数的因数。（  ）', answer: '正确', explanation: '1是任何自然数的因数。' },
      { id: 'p077q9', type: '判断题', score: 3, text: '两个质数的和一定是合数。（  ）', answer: '错误', explanation: '2+3=5仍是质数。' },
      { id: 'p077q10', type: '应用题', score: 16, text: '一个长方体水箱，长8分米，宽5分米，高4分米。如果水深3分米，水箱里有水多少升？', answer: '8×5×3=120（立方分米）=120（升）。', explanation: '1立方分米=1升。' }
    ]
  },

  /* ============================== 六年级数学 小升初模拟卷 ============================== */
  {
    id: 'p078',
    subject: '数学',
    grade: '六年级',
    type: '模拟卷',
    region: '全国',
    title: '人教版六年级数学小升初模拟卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p078q1', type: '填空题', score: 4, text: '3/4×8=____；2/5的倒数是____。', answer: '6、5/2', explanation: '3/4×8=6；2/5倒数5/2。' },
      { id: 'p078q2', type: '填空题', score: 4, text: '一件商品打八折出售，比原价便宜了____%。', answer: '20', explanation: '八折即80%，便宜20%。' },
      { id: 'p078q3', type: '填空题', score: 4, text: '一个圆柱底面半径2cm高5cm，体积是____cm³（π取3.14）。', answer: '62.8', explanation: 'V=πr²h=3.14×4×5=62.8。' },
      { id: 'p078q4', type: '填空题', score: 4, text: '比例尺1:500000，图上4cm表示实际____km。', answer: '20', explanation: '4×500000=2000000cm=20km。' },
      { id: 'p078q5', type: '选择题', score: 4, text: '下面各数中最大的是（  ）', options: ['A. -5', 'B. 0', 'C. -1', 'D. 3'], answer: 3, explanation: '正数大于0大于负数，3最大。' },
      { id: 'p078q6', type: '选择题', score: 4, text: '圆柱和圆锥等底等高，圆柱体积是圆锥的（  ）倍。', options: ['A. 2', 'B. 3', 'C. 1/3', 'D. 6'], answer: 1, explanation: 'V柱=3V锥。' },
      { id: 'p078q7', type: '选择题', score: 4, text: '一个数的25%是15，这个数是（  ）', options: ['A. 60', 'B. 30', 'C. 15', 'D. 100'], answer: 0, explanation: '15÷25%=60。' },
      { id: 'p078q8', type: '判断题', score: 3, text: '0既不是正数也不是负数。（  ）', answer: '正确', explanation: '0是正负数的分界。' },
      { id: 'p078q9', type: '判断题', score: 3, text: '所有的负数都比0小。（  ）', answer: '正确', explanation: '负数小于0。' },
      { id: 'p078q10', type: '应用题', score: 16, text: '一项工程，甲单独做12天完成，乙单独做15天完成。两队合作几天可以完成？', answer: '1÷(1/12+1/15)=1÷(5/60+4/60)=1÷9/60=60/9=20/3（天）≈6.67天。', explanation: '工程问题用工作总量除以效率和。' }
    ]
  },

  /* ============================== 四年级下册 综合卷 ============================== */
  {
    id: 'p079',
    subject: '语文',
    grade: '四年级',
    type: '综合卷',
    region: '全国',
    title: '人教版四年级语文下册综合测试卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p079q1', type: '填空题', score: 4, text: '看拼音写词语：wān yán（  ）  pān dēng（  ）', answer: '蜿蜒、攀登', explanation: '注意"蜒"和"攀"的字形。' },
      { id: 'p079q2', type: '填空题', score: 4, text: '"重"在"重要"中读____，在"重复"中读____。', answer: 'zhòng、chóng', explanation: '"重"是多音字。' },
      { id: 'p079q3', type: '填空题', score: 4, text: '把成语补充完整：（  ）息凝视  鱼（  ）而出', answer: '屏、贯', explanation: '屏息凝视、鱼贯而出。' },
      { id: 'p079q4', type: '填空题', score: 4, text: '写出"AABB"式词语两个：____、____。', answer: '干干净净、整整齐齐（答案不唯一）', explanation: 'AABB式叠词。' },
      { id: 'p079q5', type: '选择题', score: 4, text: '下列成语中没有错别字的是（  ）', options: ['A. 气极败坏', 'B. 鱼贯而出', 'C. 轻而义举', 'D. 持之一恒'], answer: 1, explanation: 'A应为"气急败坏"，C应为"轻而易举"，D应为"持之以恒"。' },
      { id: 'p079q6', type: '选择题', score: 4, text: '"母鸡"一课的作者是（  ）', options: ['A. 老舍', 'B. 巴金', 'C. 冰心', 'D. 鲁迅'], answer: 0, explanation: '《母鸡》是老舍作品。' },
      { id: 'p079q7', type: '选择题', score: 4, text: '下列句子中没有语病的是（  ）', options: ['A. 我大概整整用了两小时。', 'B. 公园里到处是五颜六色的红花。', 'C. 我们要养成认真读书的习惯。', 'D. 通过学习，使我进步了。'], answer: 2, explanation: 'A、B矛盾，D缺主语。C正确。' },
      { id: 'p079q8', type: '判断题', score: 3, text: '"乡下人家"赞美了乡村风景的自然和谐。（  ）', answer: '正确', explanation: '课文赞美乡村风景。' },
      { id: 'p079q9', type: '判断题', score: 3, text: '《生命 生命》的作者是杏林子。（  ）', answer: '正确', explanation: '杏林子是《生命 生命》作者。' },
      { id: 'p079q10', type: '阅读理解', score: 16, text: '阅读《乡下人家》选段，回答："攀"和"爬"用得好，好在哪里？', passage: '乡下人家总爱在屋前搭一瓜架，或种南瓜，或种丝瓜，让那些瓜藤攀上棚架，爬上屋檐。', answer: '"攀"和"爬"用拟人手法，把瓜藤当人来写，生动形象地写出瓜藤向上生长、蔓延的样子，富有生命力。', explanation: '从动词的表达效果分析。' }
    ]
  },

  /* ============================== 五年级下册 综合卷 ============================== */
  {
    id: 'p080',
    subject: '数学',
    grade: '五年级',
    type: '综合卷',
    region: '全国',
    title: '人教版五年级数学下册综合测试卷',
    totalScore: 50,
    timeLimit: 50,
    questions: [
      { id: 'p080q1', type: '填空题', score: 4, text: '18的因数有____，其中最小的是____，最大的是____。', answer: '1、2、3、6、9、18、1、18', explanation: '成对找出因数。' },
      { id: 'p080q2', type: '填空题', score: 4, text: '一个数既是15的倍数又是20的倍数，这个数最小是____。', answer: '60', explanation: '15和20的最小公倍数是60。' },
      { id: 'p080q3', type: '填空题', score: 4, text: '把3米长的绳子平均分成8段，每段长____米，每段是全长的____。', answer: '3/8、1/8', explanation: '3÷8=3/8米；每段是1/8。' },
      { id: 'p080q4', type: '填空题', score: 4, text: '一个正方体棱长6cm，体积是____cm³，表面积是____cm²。', answer: '216、216', explanation: '体积=6³=216；表面积=6×6²=216。' },
      { id: 'p080q5', type: '选择题', score: 4, text: '下面各数中既是偶数又是质数的是（  ）', options: ['A. 2', 'B. 4', 'C. 6', 'D. 9'], answer: 0, explanation: '2是唯一的偶质数。' },
      { id: 'p080q6', type: '选择题', score: 4, text: '一个长方体有（  ）个面。', options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'], answer: 1, explanation: '长方体有6个面。' },
      { id: 'p080q7', type: '选择题', score: 4, text: '4/7和8/14的（  ）相等。', options: ['A. 分数单位', 'B. 大小', 'C. 分子', 'D. 分母'], answer: 1, explanation: '8/14=4/7，大小相等。' },
      { id: 'p080q8', type: '判断题', score: 3, text: '所有的自然数不是奇数就是偶数。（  ）', answer: '正确', explanation: '按能否被2整除分类。' },
      { id: 'p080q9', type: '判断题', score: 3, text: '1立方米比1平方米大。（  ）', answer: '错误', explanation: '体积和面积单位不能比较。' },
      { id: 'p080q10', type: '应用题', score: 16, text: '一段路，第一天修了全长的1/4，第二天修了全长的1/3，还剩全长的几分之几没修？', answer: '1-1/4-1/3=1-3/12-4/12=5/12。', explanation: '用单位"1"减去已修的分率。' }
    ]
  },

  /* ============================== 六年级下册 综合卷 ============================== */
  {
    id: 'p081',
    subject: '英语',
    grade: '六年级',
    type: '综合卷',
    region: '全国',
    title: '人教版六年级英语下册综合测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p081q1', type: '词汇填空', score: 4, text: 'I ___ (go) to the park yesterday.（用动词正确形式填空）', answer: 'went', explanation: 'yesterday用过去式went。' },
      { id: 'p081q2', type: '词汇填空', score: 4, text: 'Tom is ___ (tall) than Jack.（用比较级填空）', answer: 'taller', explanation: 'than前用比较级。' },
      { id: 'p081q3', type: '词汇填空', score: 4, text: 'She ___ (see) a film last night.（用动词正确形式填空）', answer: 'saw', explanation: 'last night用过去式saw。' },
      { id: 'p081q4', type: '词汇填空', score: 4, text: '翻译：苹果____  香蕉____', answer: 'apple、banana', explanation: '注意拼写。' },
      { id: 'p081q5', type: '单项选择', score: 4, text: 'I am ___ than you.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. the tallest'], answer: 1, explanation: 'than前用比较级。' },
      { id: 'p081q6', type: '单项选择', score: 4, text: '—What ___ you do yesterday? —I played football.', options: ['A. do', 'B. did', 'C. does', 'D. are'], answer: 1, explanation: 'yesterday用did。' },
      { id: 'p081q7', type: '单项选择', score: 4, text: '—Did you read books? —Yes, ___.', options: ['A. I do', 'B. I did', 'C. I am', 'D. I can'], answer: 1, explanation: 'did问用did回答。' },
      { id: 'p081q8', type: '判断题', score: 3, text: '"How tall are you?"是问身高。（  ）', answer: '正确', explanation: 'how tall问身高。' },
      { id: 'p081q9', type: '判断题', score: 3, text: '"went"是"went"的原形。（  ）', answer: '错误', explanation: 'went的原形是go。' },
      { id: 'p081q10', type: '阅读理解', score: 16, text: '阅读短文回答问题：Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time. 问：Where did Tom go last weekend?', passage: 'Hello, I am Tom. Last weekend, I went to Beijing with my parents. We went there by train. We visited the Great Wall. It was very long and great. I took many pictures. We ate Beijing duck. It was delicious. We had a good time.', answer: 'Beijing.', explanation: '从原文"I went to Beijing"得知。' }
    ]
  }
,
  /* ============================== 六年级语文上册第五单元 单元卷 ============================== */
  {
    id: 'p082',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第五单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p082q1', type: '填空题', score: 4, text: '《夏天里的成长》围绕"____"这个中心意思，从植物、动物、____等方面写夏天的成长。', answer: '夏天是万物迅速生长的季节、人的成长', explanation: '课文围绕"夏天是万物迅速生长的季节"这一中心，从多方面展开。' },
      { id: 'p082q2', type: '填空题', score: 4, text: '《那个星期天》的作者是____，课文写"我"从____到____的心理变化过程。', answer: '史铁生、期盼、失望', explanation: '史铁生写一个孩子从满怀期盼到最终失望的心理历程。' },
      { id: 'p082q3', type: '填空题', score: 4, text: '围绕中心意思写文章，要选择____的材料来写，中心意思可以是一句话，也可以是____。', answer: '最能表现中心、一个字', explanation: '本单元习作要求围绕中心意思选材，中心可以是一句话或一个字。' },
      { id: 'p082q4', type: '填空题', score: 4, text: '《夏天里的成长》中"人也是一样，要赶时候，赶热天，尽量地用力地长"这句话的含义是____。', answer: '人要在最好的时光里努力成长，不要虚度光阴', explanation: '借夏天万物生长，劝人珍惜时间、努力成长。' },
      { id: 'p082q5', type: '选择题', score: 4, text: '《那个星期天》中"我"等待母亲时的心情变化顺序是（  ）', options: ['A. 兴奋—焦急—失望—绝望', 'B. 平静—开心—害怕', 'C. 害怕—着急—高兴', 'D. 绝望—失望—期盼'], answer: 0, explanation: '"我"从满怀期待到焦急等待，再到失望、最终绝望。' },
      { id: 'p082q6', type: '选择题', score: 4, text: '《夏天里的成长》一文运用的写法是（  ）', options: ['A. 先总后分，围绕中心展开', 'B. 按时间顺序叙事', 'C. 倒叙手法', 'D. 对比手法'], answer: 0, explanation: '先提出中心"夏天是万物迅速生长的季节"，再从多方面展开。' },
      { id: 'p082q7', type: '选择题', score: 4, text: '《那个星期天》中写"我"在院子里等待时"光阴在既期盼又焦虑中流逝"，这种写法属于（  ）', options: ['A. 动作描写', 'B. 心理描写', 'C. 环境描写', 'D. 语言描写'], answer: 1, explanation: '直接描写内心感受，属于心理描写。' },
      { id: 'p082q8', type: '判断题', score: 3, text: '围绕中心意思写文章，所有材料都要围绕中心来写，不能偏离中心。（  ）', answer: '正确', explanation: '围绕中心选材是写作基本要求，材料必须服务中心。' },
      { id: 'p082q9', type: '判断题', score: 3, text: '《那个星期天》中母亲最终带"我"出去玩了。（  ）', answer: '错误', explanation: '母亲忙于家务，直到天黑也没带"我"出去，"我"最终失望。' },
      { id: 'p082q10', type: '阅读理解', score: 16, text: '阅读《那个星期天》选段，回答：这段文字怎样表现"我"等待时的焦急心情？', passage: '我蹲在院子的地上，用树枝拨弄着一个蚁穴。我蹲在那儿，等了好久好久，母亲还是没有来。我看着天，看着云彩走，看着太阳一点点移，我知道时间在走，可是母亲还没有来。我感到光线渐渐暗了下去，一种莫名的恐怖升上心头。', answer: '作者通过动作描写（蹲、拨弄蚁穴）表现"我"无事可做只能无聊等待；通过看天、看云、看太阳的移动，表现"我"时刻关注时间流逝的焦急；通过"光线渐渐暗了下去""莫名的恐怖"暗示等待从希望到失望到害怕的心理变化。用细腻的心理和环境描写展现焦急。', explanation: '从动作描写、环境暗示、心理变化三个角度分析。' }
    ]
  },

  /* ============================== 六年级语文上册第六单元 单元卷 ============================== */
  {
    id: 'p083',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第六单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p083q1', type: '古诗文填空', score: 4, text: '千里莺啼绿映红，____。南朝四百八十寺，____。', answer: '水村山郭酒旗风、多少楼台烟雨中', explanation: '杜牧《江南春》，写江南春景。' },
      { id: 'p083q2', type: '古诗文填空', score: 4, text: '九曲黄河万里沙，____。____，同到牵牛织女家。', answer: '浪淘风簸自天涯、如今直上银河去', explanation: '刘禹锡《浪淘沙》，写黄河气势。' },
      { id: 'p083q3', type: '填空题', score: 4, text: '《只有一个地球》告诉我们地球资源是____的，如果被破坏就____，因此我们要保护地球。', answer: '有限、很难再生', explanation: '课文强调地球资源有限且不可再生，呼吁保护。' },
      { id: 'p083q4', type: '填空题', score: 4, text: '《青山不老》中老人在晋西北创造了____的奇迹，他用____绿化了八条沟。', answer: '绿洲、十五年', explanation: '老人用十五年坚持植树，将荒漠变绿洲。' },
      { id: 'p083q5', type: '选择题', score: 4, text: '《只有一个地球》中"地球是一个半径只有六千三百多千米的星球"用了什么说明方法？（  ）', options: ['A. 打比方', 'B. 列数字', 'C. 作比较', 'D. 举例子'], answer: 1, explanation: '用具体数字说明地球大小，属于列数字。' },
      { id: 'p083q6', type: '选择题', score: 4, text: '《三黑和土地》中翻身农民三黑对土地的态度是（  ）', options: ['A. 不在乎', 'B. 格外珍惜、热爱', 'C. 嫌弃', 'D. 害怕'], answer: 1, explanation: '三黑翻身得地后对土地格外珍爱，精心耕种。' },
      { id: 'p083q7', type: '选择题', score: 4, text: '本单元的主题是保护环境，下列做法不正确的是（  ）', options: ['A. 节约用水用电', 'B. 垃圾分类处理', 'C. 乱砍滥伐', 'D. 绿化荒山'], answer: 2, explanation: '乱砍滥伐破坏环境，与保护环境背道而驰。' },
      { id: 'p083q8', type: '判断题', score: 3, text: '《只有一个地球》中提到如果地球被破坏，我们可以移居到其他星球。（  ）', answer: '错误', explanation: '课文明确指出目前没有适合人类居住的第二个星球，不能指望移居。' },
      { id: 'p083q9', type: '判断题', score: 3, text: '《青山不老》中老人说"青山是不会老的"，是因为他坚信植树造林的成果将长存。（  ）', answer: '正确', explanation: '老人用生命换绿洲，精神与青山同在。' },
      { id: 'p083q10', type: '阅读理解', score: 16, text: '阅读《只有一个地球》选段，回答：这段话用了哪些说明方法？说明什么道理？', passage: '地球所拥有的自然资源也是有限的。拿矿物资源来说，它不是上帝的恩赐，而是经过几百万年，甚至几亿年的地质变化才形成的。如果不加节制地开采，必将加速地球上矿产资源的枯竭。', answer: '用了列数字（几百万年、几亿年）和举例子的说明方法。说明矿物资源形成时间漫长、十分珍贵，如果不加节制开采就会枯竭，告诉我们必须珍惜资源、有节制地开采。', explanation: '从列数字和举例子分析，再概括说明的道理。' }
    ]
  },

  /* ============================== 六年级语文上册第七单元 单元卷 ============================== */
  {
    id: 'p084',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第七单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p084q1', type: '填空题', score: 4, text: '《文言文二则》中《伯牙鼓琴》讲的是伯牙和____的故事，伯牙弹琴志在太山，____赞叹"巍巍乎若太山"。', answer: '锺子期、锺子期', explanation: '伯牙善弹，锺子期善听，是知音之交。' },
      { id: 'p084q2', type: '填空题', score: 4, text: '《伯牙鼓琴》中锺子期死后，伯牙"破琴绝弦，终身不复鼓琴"，原因是____。', answer: '以为世无足复为鼓琴者', explanation: '伯牙认为世上再无知音，故不再弹琴。' },
      { id: 'p084q3', type: '填空题', score: 4, text: '《景阳冈》选自____（作者）的《____》，写的是武松打虎的故事。', answer: '施耐庵、水浒传', explanation: '《水浒传》中武松在景阳冈赤手空拳打死老虎。' },
      { id: 'p084q4', type: '填空题', score: 4, text: '《猴王出世》选自____（作者）的《____》，写的是石猴成为美猴王的故事。', answer: '吴承恩、西游记', explanation: '《西游记》开篇写花果山石猴出世称王。' },
      { id: 'p084q5', type: '选择题', score: 4, text: '"伯牙破琴绝弦"表达的感情是（  ）', options: ['A. 生气', 'B. 痛失知音的悲恸', 'C. 不喜欢弹琴', 'D. 琴坏了'], answer: 1, explanation: '伯牙因知音去世悲痛万分，不再弹琴。' },
      { id: 'p084q6', type: '选择题', score: 4, text: '《景阳冈》中武松的性格特点是（  ）', options: ['A. 胆小怕事', 'B. 豪放勇猛、机智勇敢', 'C. 狡猾阴险', 'D. 温柔善良'], answer: 1, explanation: '武松豪放勇猛，赤手空拳打死猛虎。' },
      { id: 'p084q7', type: '选择题', score: 4, text: '《猴王出世》中石猴能成为美猴王，主要是因为他（  ）', options: ['A. 长得好看', 'B. 年纪最大', 'C. 勇敢地跳入瀑布发现水帘洞', 'D. 力气最大'], answer: 2, explanation: '石猴第一个跳入瀑布发现洞天福地，被拥戴为王。' },
      { id: 'p084q8', type: '判断题', score: 3, text: '"知音"一词来源于伯牙和锺子期的故事，指能真正了解自己的人。（  ）', answer: '正确', explanation: '后人用"知音"比喻真正了解自己的人，源于此故事。' },
      { id: 'p084q9', type: '判断题', score: 3, text: '《景阳冈》中武松是在酒醉后打死老虎的，说明酒能壮胆。（  ）', answer: '错误', explanation: '武松虽然喝了十八碗酒，但打虎靠的是他的勇猛和武艺，不能简单理解为酒壮胆。' },
      { id: 'p084q10', type: '阅读理解', score: 16, text: '阅读《景阳冈》选段，回答：这段文字怎样表现武松的勇猛？', passage: '武松见大虫扑来，只一闪，闪在大虫背后。那大虫把前爪搭在地下，把腰胯一掀，掀起来。武松一躲，躲在一边。大虫见掀他不着，吼一声，却似半天里起了个霹雳，震得那山冈也动。把这铁棒也似虎尾倒竖起来只一剪，武松却又闪在一边。', answer: '面对猛虎的"一扑""一掀""一剪"，武松三次"闪""躲"，表现他临危不惧、反应敏捷。用老虎的凶猛（吼似霹雳、震得山冈也动）反衬武松的勇猛，以虎之猛显人之勇，侧面烘托武松武艺高强、沉着冷静。', explanation: '从动作描写和反衬手法两方面分析。' }
    ]
  },

  /* ============================== 六年级语文上册第八单元 单元卷 ============================== */
  {
    id: 'p085',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文上册第八单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p085q1', type: '填空题', score: 4, text: '《少年闰土》选自鲁迅的小说《____》，课文通过"我"的回忆写闰土讲____、____、看瓜刺猹和看跳鱼儿四件事。', answer: '故乡、雪地捕鸟、海边拾贝', explanation: '鲁迅《故乡》节选，写少年闰土见多识广。' },
      { id: 'p085q2', type: '填空题', score: 4, text: '《好的故事》的作者是____，选自散文诗集《____》。', answer: '鲁迅、野草', explanation: '鲁迅在《野草》中用梦境写美好理想。' },
      { id: 'p085q3', type: '填空题', score: 4, text: '鲁迅原名____，是伟大的文学家、____和革命家。', answer: '周树人、思想家', explanation: '鲁迅原名周树人，浙江绍兴人，伟大的文学家、思想家、革命家。' },
      { id: 'p085q4', type: '填空题', score: 4, text: '《我的"长生果"》中"长生果"比喻____，作者认为读书是人生最大的____。', answer: '书（书籍）、快乐', explanation: '把书比作长生果，强调读书对人成长的滋养。' },
      { id: 'p085q5', type: '选择题', score: 4, text: '《少年闰土》中"我"对闰土的态度是（  ）', options: ['A. 羡慕敬佩', 'B. 嫉妒', 'C. 不屑', 'D. 害怕'], answer: 0, explanation: '"我"羡慕闰土的见多识广，对闰土充满敬佩。' },
      { id: 'p085q6', type: '选择题', score: 4, text: '《好的故事》中"好的故事"实际指的是（  ）', options: ['A. 一个童话', 'B. 美好的梦境和理想', 'C. 课文内容', 'D. 回忆'], answer: 1, explanation: '"好的故事"是鲁迅梦境中的美好景象，象征美好理想。' },
      { id: 'p085q7', type: '选择题', score: 4, text: '下列不属于鲁迅作品的是（  ）', options: ['A. 《故乡》', 'B. 《野草》', 'C. 《稻草人》', 'D. 《朝花夕拾》'], answer: 2, explanation: '《稻草人》是叶圣陶的作品，不是鲁迅所作。' },
      { id: 'p085q8', type: '判断题', score: 3, text: '《少年闰土》中"我"和闰土都是少爷，生活经历相同。（  ）', answer: '错误', explanation: '"我"是少爷，闰土是忙月的儿子，生活经历完全不同。' },
      { id: 'p085q9', type: '判断题', score: 3, text: '《我的"长生果"》中作者认为读书不仅要读，还要写，读写结合才能提高。（  ）', answer: '正确', explanation: '作者强调读书和写作相辅相成，多读多写才能进步。' },
      { id: 'p085q10', type: '阅读理解', score: 16, text: '阅读《少年闰土》选段，回答：这段文字刻画的闰土是一个怎样的少年？', passage: '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力地刺去。那猹却将身一扭，反从他的胯下逃走了。', answer: '刻画了一个活泼勇敢、见多识广的农村少年形象。"项带银圈"写出闰土的可爱，"手捏钢叉""尽力地刺"写出他的勇敢、机敏。碧绿西瓜、金黄圆月衬托少年英姿，环境描写烘托人物。', explanation: '从外貌、动作描写和环境烘托三方面分析人物形象。' }
    ]
  },

  /* ============================== 六年级语文下册第三单元 单元卷 ============================== */
  {
    id: 'p086',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p086q1', type: '填空题', score: 4, text: '《匆匆》的作者是____，课文用____手法写出时间流逝的匆匆。', answer: '朱自清、拟人', explanation: '朱自清用拟人手法（如"日子从水盆里过去"）写时间流逝。' },
      { id: 'p086q2', type: '填空题', score: 4, text: '《匆匆》中"____，____；八千多日子已经从我手中溜去"，这句话表达了对时间流逝的____之情。', answer: '燕子去了、有再来的时候、惋惜', explanation: '以燕子的去来对比时间一去不返，表达惋惜。' },
      { id: 'p086q3', type: '填空题', score: 4, text: '《那个星期天》写"我"等待母亲带"我"出门，从____到____，心情越来越____。', answer: '早晨、黄昏、失望', explanation: '从早到晚等待，心情从期盼到绝望。' },
      { id: 'p086q4', type: '填空题', score: 4, text: '本单元的习作要求是写文章要表达____，即写出自己内心____的想法和感受。', answer: '真情实感、真实', explanation: '本单元重点学习表达真情实感。' },
      { id: 'p086q5', type: '选择题', score: 4, text: '《匆匆》中"八千多日子已经从我手中溜去"中"溜"字的妙处是（  ）', options: ['A. 表现日子很快', 'B. 写出时间悄悄流逝、无声无息', 'C. 说明日子很少', 'D. 表现作者高兴'], answer: 1, explanation: '"溜"字生动写出时间不知不觉流逝的样子。' },
      { id: 'p086q6', type: '选择题', score: 4, text: '《匆匆》结尾"你聪明的，告诉我，我们的日子为什么一去不复返呢？"的作用是（  ）', options: ['A. 询问别人', 'B. 不明白', 'C. 首尾呼应，深化对时光流逝的感慨', 'D. 考读者'], answer: 2, explanation: '以反问收束，首尾呼应，强调对时间流逝的追问。' },
      { id: 'p086q7', type: '选择题', score: 4, text: '表达真情实感最好的方式是（  ）', options: ['A. 编造故事', 'B. 说大话空话', 'C. 写出自己真实的经历和感受', 'D. 抄别人的'], answer: 2, explanation: '真实经历和感受最能打动人，才能写出真情实感。' },
      { id: 'p086q8', type: '判断题', score: 3, text: '《匆匆》一文表达了作者对时光流逝的无奈和惋惜，以及对珍惜时间的呼吁。（  ）', answer: '正确', explanation: '朱自清既惋惜时间流逝，也呼吁珍惜时光。' },
      { id: 'p086q9', type: '判断题', score: 3, text: '《那个星期天》与《匆匆》都写到时间的流逝，但情感完全相同。（  ）', answer: '错误', explanation: '两篇都写时间，但《匆匆》是对时光的感悟，《那个星期天》是等待中的心理变化，情感不同。' },
      { id: 'p086q10', type: '阅读理解', score: 16, text: '阅读《匆匆》选段，回答：作者怎样具体写出日子"溜去"的？表达了怎样的感情？', passage: '于是——洗手的时候，日子从水盆里过去；吃饭的时候，日子从饭碗里过去；默默时，便从凝然的双眼前过去。我觉察他去的匆匆了，伸出手遮挽时，他又从遮挽着的手边过去。天黑时，我躺在床上，他便伶伶俐俐地从我身上跨过，从我脚边飞去了。', answer: '作者用拟人手法和排比句式，从洗手、吃饭、默默、伸手遮挽、躺下等日常生活的细节，具体生动地写出日子不知不觉溜走的情形。"伶伶俐俐地跨过""飞去"赋予时间以人的动作，写出时间的不停留、不可挽留。表达了对时光飞逝的无奈和惋惜。', explanation: '从修辞手法（拟人、排比）和具体场景分析写法，再概括感情。' }
    ]
  },

  /* ============================== 六年级语文下册第四单元 单元卷 ============================== */
  {
    id: 'p087',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p087q1', type: '古诗文填空', score: 4, text: '何当金络脑，____。____，骈死槽枥之间。', answer: '快走踏清秋、千里马常有而伯乐不常有', explanation: '李贺《马诗》，借马抒情。' },
      { id: 'p087q2', type: '古诗文填空', score: 4, text: '粉骨碎身浑不怕，____。____，要留清白在人间。', answer: '要留清白在人间、千磨万击还坚劲', explanation: '于谦《石灰吟》，借石灰言志。' },
      { id: 'p087q3', type: '填空题', score: 4, text: '《十六年前的回忆》的作者是李星华，课文写的是____（人物）被反动派逮捕和遇害的经过。', answer: '李大钊', explanation: '李星华回忆父亲李大钊的革命事迹。' },
      { id: 'p087q4', type: '填空题', score: 4, text: '《金色的鱼钩》中老班长为照顾三个小战士，把鱼汤让给他们喝，自己却____，最后____。', answer: '只吃鱼骨头、牺牲了', explanation: '老班长舍己为人，为小战士牺牲。' },
      { id: 'p087q5', type: '选择题', score: 4, text: '《为人民服务》的作者是（  ）', options: ['A. 周恩来', 'B. 毛泽东', 'C. 朱德', 'D. 刘少奇'], answer: 1, explanation: '毛泽东在张思德追悼会上发表《为人民服务》。' },
      { id: 'p087q6', type: '选择题', score: 4, text: '"人固有一死，或重于泰山，或轻于鸿毛"中"重于泰山"的死的含义是（  ）', options: ['A. 死得有意义有价值', 'B. 身体很重', 'C. 年纪大死', 'D. 生病而死'], answer: 0, explanation: '为正义和人民利益而死，死得有意义有价值。' },
      { id: 'p087q7', type: '选择题', score: 4, text: '《金色的鱼钩》中"金色的鱼钩"象征着（  ）', options: ['A. 鱼钩很贵', 'B. 老班长崇高的革命精神', 'C. 金子做的', 'D. 打鱼技术好'], answer: 1, explanation: '鱼钩象征老班长舍己为人、忠于革命的精神。' },
      { id: 'p087q8', type: '判断题', score: 3, text: '《马诗》《石灰吟》《竹石》都是借物言志的古诗。（  ）', answer: '正确', explanation: '三首诗都借事物表达诗人的志向和品格。' },
      { id: 'p087q9', type: '判断题', score: 3, text: '《十六年前的回忆》中李大钊面对敌人表现出了坚贞不屈的革命精神。（  ）', answer: '正确', explanation: '李大钊面对敌人镇定从容、坚贞不屈。' },
      { id: 'p087q10', type: '阅读理解', score: 16, text: '阅读《为人民服务》选段，回答：这段话讲了什么道理？用了什么论证方法？', passage: '人总是要死的，但死的意义有不同。中国古时候有个文学家叫做司马迁的说过：人固有一死，或重于泰山，或轻于鸿毛。为人民利益而死，就比泰山还重；替法西斯卖力，替剥削人民和压迫人民的人去死，就比鸿毛还轻。', answer: '讲了死的两种不同意义：为人民利益而死重于泰山，替反动派卖力而死轻于鸿毛。用了引用论证（引用司马迁的话）和对比论证（泰山与鸿毛对比、为人民利益与替法西斯卖力对比），突出为人民利益而死的重大意义。', explanation: '从引用论证和对比论证两方面分析论证方法。' }
    ]
  },

  /* ============================== 六年级语文下册第五单元 单元卷 ============================== */
  {
    id: 'p088',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第五单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p088q1', type: '古诗文填空', score: 4, text: '《学弈》中"使弈秋诲二人弈，其一人____，惟弈秋之为听；一人虽听之，一心以为____，思援弓缴而射之。"', answer: '专心致志、有鸿鹄将至', explanation: '《学弈》写两人学下棋态度不同，结果不同。' },
      { id: 'p088q2', type: '古诗文填空', score: 4, text: '《两小儿辩日》中一儿认为太阳早晨离人近，依据是"日初出大如车盖，____"；另一儿认为中午近，依据是"及日中则如盘盂，____"。', answer: '及日中则如盘盂、此不为远者小而近者大乎', explanation: '两小儿各执一词，一个从视觉判断，一个从触觉判断。' },
      { id: 'p088q3', type: '填空题', score: 4, text: '《真理诞生于一百个问号之后》的作者是____，课文中"？"代表____，"！"代表____。', answer: '叶永烈、发现问题、解决问题（发现真理）', explanation: '不断发问最终发现真理，问号变成感叹号。' },
      { id: 'p088q4', type: '填空题', score: 4, text: '《真理诞生于一百个问号之后》举了三个事例：石蕊试纸的发现、____和____，说明真理来自不断发问。', answer: '弗莱明发现青霉素、魏格纳提出大陆漂移假说', explanation: '三个事例都说明从偶然现象中发现真理。' },
      { id: 'p088q5', type: '选择题', score: 4, text: '《学弈》告诉我们的道理是（  ）', options: ['A. 下棋很有趣', 'B. 学习必须专心致志，不能三心二意', 'C. 弈秋棋艺高', 'D. 应该多学几种本领'], answer: 1, explanation: '两人同师学弈，专心者成，分心者败，说明学习要专心。' },
      { id: 'p088q6', type: '选择题', score: 4, text: '《两小儿辩日》中孔子"不能决也"，这说明（  ）', options: ['A. 孔子不聪明', 'B. 知识再渊博也有不知道的事', 'C. 小儿说得对', 'D. 孔子不想回答'], answer: 1, explanation: '连孔子都不能判断，说明学无止境，知识再广也有盲区。' },
      { id: 'p088q7', type: '选择题', score: 4, text: '《真理诞生于一百个问号之后》的论证方法是（  ）', options: ['A. 只讲道理', 'B. 用三个具体事例证明观点', 'C. 只用比喻', 'D. 只用名言'], answer: 1, explanation: '用三个从"问号"到"感叹号"的具体事例论证。' },
      { id: 'p088q8', type: '判断题', score: 3, text: '《学弈》中两个人同时学下棋，学的结果不同，原因是老师的教法不同。（  ）', answer: '错误', explanation: '结果不同是因为两人的学习态度不同，一人专心一人分心，而非老师教法不同。' },
      { id: 'p088q9', type: '判断题', score: 3, text: '科学精神就是要有怀疑精神，善于从平常现象中发现问题，不断追问。（  ）', answer: '正确', explanation: '本单元强调的科学精神核心是善于发现问题、追问探究。' },
      { id: 'p088q10', type: '阅读理解', score: 16, text: '阅读《真理诞生于一百个问号之后》选段，回答：这个事例是怎样说明"真理诞生于一百个问号之后"的？', passage: '波义耳是英国化学家。一天，他不小心把盐酸溅到了紫罗兰花瓣上，发现紫色的花瓣变红了。他觉得很奇怪，便进行了许多试验，最终发现酸碱指示剂——石蕊试纸。', answer: '波义耳从"紫罗兰花瓣遇酸变红"这一偶然现象中产生疑问（问号），觉得奇怪后进行反复试验，最终发现石蕊试纸（感叹号/真理）。事例完整地展示了从发现现象→产生疑问→不断探究→得出真理的过程，证明了"真理诞生于一百个问号之后"。', explanation: '按"发现问题—提出疑问—反复实验—发现真理"的思路分析。' }
    ]
  },

  /* ============================== 六年级语文下册第六单元 单元卷 ============================== */
  {
    id: 'p089',
    subject: '语文',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级语文下册第六单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p089q1', type: '填空题', score: 4, text: '本单元"难忘小学生活"是____性学习，包括"回忆往事"和"____"两个板块。', answer: '综合、依依惜别', explanation: '综合性学习分回忆往事和依依惜别两部分。' },
      { id: 'p089q2', type: '填空题', score: 4, text: '《回忆老师》一文中，老师最让人难忘的是____和____。', answer: '谆谆教诲、关爱学生', explanation: '老师的教诲和关爱是最难忘的回忆。' },
      { id: 'p089q3', type: '填空题', score: 4, text: '毕业之际可以用"____，____"等名句表达对老师的感激之情。', answer: '春蚕到死丝方尽、蜡炬成灰泪始干', explanation: '用李商隐诗句比喻老师无私奉献。' },
      { id: 'p089q4', type: '填空题', score: 4, text: '制作成长纪念册可以采用____式、____式等编排方式，记录小学六年的成长足迹。', answer: '编年、栏目', explanation: '编年式按年份排列，栏目式按主题分类。' },
      { id: 'p089q5', type: '选择题', score: 4, text: '毕业赠言最恰当的写法是（  ）', options: ['A. 抄网上流行的套话', 'B. 根据同学特点写出真诚祝福', 'C. 越长越好', 'D. 只写给成绩好的同学'], answer: 1, explanation: '赠言要真诚，根据对方特点写出，不用套话。' },
      { id: 'p089q6', type: '选择题', score: 4, text: '"海内存知己，天涯若比邻"表达的感情是（  ）', options: ['A. 思乡之情', 'B. 友谊深厚、远隔千里也如近邻', 'C. 失望悲伤', 'D. 厌恶分别'], answer: 1, explanation: '王勃诗句表达真挚友情超越距离。' },
      { id: 'p089q7', type: '选择题', score: 4, text: '难忘小学生活综合性学习中，下列活动不合适的是（  ）', options: ['A. 制作成长纪念册', 'B. 写毕业赠言', 'C. 举办毕业联欢会', 'D. 考试竞赛'], answer: 3, explanation: '考试竞赛不属于"难忘小学生活"综合性学习的内容。' },
      { id: 'p089q8', type: '判断题', score: 3, text: '毕业联欢会上可以表演节目、读诗、演讲，表达对母校和师友的惜别之情。（  ）', answer: '正确', explanation: '毕业联欢是表达惜别和感恩的方式之一。' },
      { id: 'p089q9', type: '判断题', score: 3, text: '写毕业赠言应该面面俱到，把所有同学都写一遍。（  ）', answer: '错误', explanation: '赠言贵在真诚，不必面面俱到，选有感触的同学写即可。' },
      { id: 'p089q10', type: '阅读理解', score: 16, text: '阅读短文，回答：这篇短文表达了作者怎样的情感？', passage: '再见了，母校！六年前，我们牵着爸爸妈妈的手，走进这个美丽的校园。是您，教会我们认字、读书、做人。教室里，曾回荡着我们琅琅的读书声；操场上，曾留下我们奔跑欢笑的身影。每一个角落，都珍藏着我最珍贵的回忆。敬爱的老师，亲爱的同学，无论我走到哪里，都不会忘记这六年的美好时光。', answer: '表达了作者对母校、老师和同学的深深眷恋与不舍，以及对六年美好时光的怀念和感恩。从"再见了"直接抒发惜别，从"教室里""操场上"回忆美好画面，从"不会忘记"表达铭记与感恩。', explanation: '从直接抒情和回忆画面两方面分析情感。' }
    ]
  }
,
  /* ============================== 六年级数学上册第四单元 单元卷 ============================== */
  {
    id: 'p090',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p090q1', type: '填空题', score: 4, text: '两个数相除又叫作两个数的____，其中比号前面的数叫作比的____，比号后面的数叫作比的____。', answer: '比、前项、后项', explanation: '比的意义：两个数相除又叫作两个数的比，a:b中a是前项，b是后项。' },
      { id: 'p090q2', type: '填空题', score: 4, text: '比的前项和后项同时乘或除以相同的数（0除外），____不变，这叫作比的基本性质。化简比12:18=____。', answer: '比值、2:3', explanation: '比的基本性质类似分数的基本性质，12和18的最大公因数是6，12÷6=2，18÷6=3。' },
      { id: 'p090q3', type: '填空题', score: 4, text: '求比值：3/4:1/2=____；0.5:0.25=____。', answer: '3/2（或1.5）、2', explanation: '3/4÷1/2=3/4×2=3/2；0.5÷0.25=2。' },
      { id: 'p090q4', type: '填空题', score: 4, text: '把120按2:3分配，两部分分别是____和____。', answer: '48、72', explanation: '总份数2+3=5，120×2/5=48，120×3/5=72。' },
      { id: 'p090q5', type: '选择题', score: 4, text: '下面各比中，与1/3:1/4的比值相等的是（  ）', options: ['A. 4:3', 'B. 3:4', 'C. 1:12', 'D. 12:1'], answer: 0, explanation: '1/3÷1/4=1/3×4=4/3，4:3=4/3，比值相等。' },
      { id: 'p090q6', type: '选择题', score: 4, text: '甲数是乙数的3/5，甲数与乙数的最简整数比是（  ）', options: ['A. 3:5', 'B. 5:3', 'C. 3:8', 'D. 5:8'], answer: 0, explanation: '甲=乙×3/5，所以甲:乙=3/5:1=3:5。' },
      { id: 'p090q7', type: '选择题', score: 4, text: '一个三角形三个内角的度数比是1:2:3，这个三角形是（  ）', options: ['A. 锐角三角形', 'B. 直角三角形', 'C. 钝角三角形', 'D. 等腰三角形'], answer: 1, explanation: '总份数1+2+3=6，最大角180×3/6=90°，是直角三角形。' },
      { id: 'p090q8', type: '判断题', score: 3, text: '比的前项和后项都不能为0。（  ）', answer: '错误', explanation: '比的后项不能为0（除数不能为0），但前项可以为0。' },
      { id: 'p090q9', type: '判断题', score: 3, text: '一场比赛2:0，这个2:0是一个比。（  ）', answer: '错误', explanation: '比赛中2:0表示两队各得2分和0分，是记录得分，不是数学上的比（比的后项不能为0）。' },
      { id: 'p090q10', type: '应用题', score: 16, text: '学校购进一批图书共360本，按4:5分给五年级和六年级。两个年级各分到多少本？如果六年级又从五年级借走20本，此时五年级与六年级的图书本数比是多少？', answer: '总份数4+5=9；五年级：360×4/9=160（本），六年级：360×5/9=200（本）；六年级借走20本后，五年级160-20=140（本），六年级200+20=220（本），140:220=7:11。', explanation: '先按比分配求出各年级本数，再求借书后的本数并化简比。' }
    ]
  },

  /* ============================== 六年级数学上册第五单元 单元卷 ============================== */
  {
    id: 'p091',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第五单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p091q1', type: '填空题', score: 4, text: '圆的周长公式是C=____或C=____，圆的面积公式是S=____。', answer: '2πr、πd、πr²', explanation: '周长=2×π×半径=π×直径，面积=π×半径的平方。' },
      { id: 'p091q2', type: '填空题', score: 4, text: '一个圆的半径是3厘米，它的直径是____厘米，周长是____厘米，面积是____平方厘米。（π取3.14）', answer: '6、18.84、28.26', explanation: 'd=2×3=6；C=2×3.14×3=18.84；S=3.14×3²=3.14×9=28.26。' },
      { id: 'p091q3', type: '填空题', score: 4, text: '一个圆的周长是31.4厘米，它的半径是____厘米，面积是____平方厘米。（π取3.14）', answer: '5、78.5', explanation: 'r=C÷2π=31.4÷6.28=5；S=3.14×5²=3.14×25=78.5。' },
      { id: 'p091q4', type: '填空题', score: 4, text: '用一根62.8厘米的铁丝围成一个圆，这个圆的面积是____平方厘米。（π取3.14）', answer: '314', explanation: '周长62.8厘米，r=62.8÷(2×3.14)=10厘米，S=3.14×10²=314平方厘米。' },
      { id: 'p091q5', type: '选择题', score: 4, text: '一个圆的半径扩大到原来的3倍，面积扩大到原来的（  ）倍。', options: ['A. 3', 'B. 6', 'C. 9', 'D. 12'], answer: 2, explanation: '面积S=πr²，半径扩大3倍则面积扩大3²=9倍。' },
      { id: 'p091q6', type: '选择题', score: 4, text: '一个半圆的直径是4厘米，这个半圆的周长是（  ）厘米。（π取3.14）', options: ['A. 6.28', 'B. 10.28', 'C. 12.56', 'D. 8.28'], answer: 1, explanation: '半圆周长=半圆弧+直径=πd/2+d=3.14×4/2+4=6.28+4=10.28厘米。' },
      { id: 'p091q7', type: '选择题', score: 4, text: '在边长为8厘米的正方形内画一个最大的圆，这个圆的面积是（  ）平方厘米。（π取3.14）', options: ['A. 200.96', 'B. 50.24', 'C. 25.12', 'D. 12.56'], answer: 1, explanation: '最大圆的直径=正方形边长=8厘米，r=4，S=3.14×4²=50.24。' },
      { id: 'p091q8', type: '判断题', score: 3, text: '圆的半径越大，圆周率π的值就越大。（  ）', answer: '错误', explanation: '圆周率π是固定值，约等于3.14，与圆的大小无关。' },
      { id: 'p091q9', type: '判断题', score: 3, text: '两个圆的周长相等，它们的面积也一定相等。（  ）', answer: '正确', explanation: '周长相等则半径相等，半径相等则面积相等。' },
      { id: 'p091q10', type: '应用题', score: 16, text: '一个圆形花坛的直径是10米，在花坛周围铺一条2米宽的小路。（1）花坛的面积是多少平方米？（2）小路的面积是多少平方米？（π取3.14）', answer: '（1）花坛半径r=10÷2=5米，花坛面积S=3.14×5²=78.5（平方米）；（2）小路外圆半径R=5+2=7米，外圆面积=3.14×7²=153.86（平方米），小路面积=153.86-78.5=75.36（平方米）。', explanation: '小路面积=大圆面积-小圆面积（环形面积），关键是求出外圆半径。' }
    ]
  },

  /* ============================== 六年级数学上册第六单元 单元卷 ============================== */
  {
    id: 'p092',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第六单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p092q1', type: '填空题', score: 4, text: '百分数表示一个数是另一个数的____，百分数也叫作____或____。', answer: '百分之几、百分率、百分比', explanation: '百分数表示两个数的倍比关系，又叫百分率或百分比。' },
      { id: 'p092q2', type: '填空题', score: 4, text: '把3/4化成百分数是____%；把0.45化成百分数是____%；把60%化成小数是____。', answer: '75、45、0.6', explanation: '3/4=0.75=75%；0.45=45%；60%=0.6。' },
      { id: 'p092q3', type: '填空题', score: 4, text: '六年级有200人，今天到校196人，出勤率是____%；未到校4人，缺勤率是____%。', answer: '98、2', explanation: '出勤率=196÷200×100%=98%；缺勤率=4÷200×100%=2%。' },
      { id: 'p092q4', type: '填空题', score: 4, text: '25是20的____%；20是25的____%；25比20多____%。', answer: '125、80、25', explanation: '25÷20=125%；20÷25=80%；(25-20)÷20=25%。' },
      { id: 'p092q5', type: '选择题', score: 4, text: '把25%的百分号去掉，这个数就（  ）', options: ['A. 扩大到原来的100倍', 'B. 缩小到原来的1/100', 'C. 扩大到原来的10倍', 'D. 大小不变'], answer: 0, explanation: '25%去掉百分号变成25，25÷0.25=100，扩大100倍。' },
      { id: 'p092q6', type: '选择题', score: 4, text: '一件商品原价100元，先提价10%，再降价10%，现价是（  ）元。', options: ['A. 100', 'B. 99', 'C. 101', 'D. 90'], answer: 1, explanation: '100×(1+10%)=110元，110×(1-10%)=99元。' },
      { id: 'p092q7', type: '选择题', score: 4, text: '下列各数中，不能化成百分数的是（  ）', options: ['A. 3/4', 'B. 0.85', 'C. 3/5米', 'D. 7/8'], answer: 2, explanation: '百分数只表示两个量的倍比关系，不带单位，3/5米是具体数量不能化成百分数。' },
      { id: 'p092q8', type: '判断题', score: 3, text: '百分数的分子可以是小数。（  ）', answer: '正确', explanation: '如12.5%就是分子为小数的百分数。' },
      { id: 'p092q9', type: '判断题', score: 3, text: '一根绳子长60%米。（  ）', answer: '错误', explanation: '百分数不能带单位，不能表示具体数量。' },
      { id: 'p092q10', type: '应用题', score: 16, text: '某工厂十月份用水480吨，比九月份节约了20%。九月份用水多少吨？节约了多少吨？', answer: '九月份用水量：480÷(1-20%)=480÷0.8=600（吨）；节约了：600-480=120（吨）。也可以：600×20%=120（吨）。', explanation: '十月份是九月份的1-20%=80%，用除法求九月份用水量，再用九月份用水量减去十月份用水量得节约量。' }
    ]
  },

  /* ============================== 六年级数学上册第七单元 单元卷 ============================== */
  {
    id: 'p093',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第七单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p093q1', type: '填空题', score: 4, text: '扇形统计图是用____的面积表示总数，用圆内____的面积表示各部分所占总数的百分比。', answer: '圆、扇形', explanation: '扇形统计图用整个圆表示总数，各扇形表示各部分占比。' },
      { id: 'p093q2', type: '填空题', score: 4, text: '扇形统计图中，所有扇形的百分比之和等于____%；如果某部分占25%，则该扇形的圆心角是____度。', answer: '100、90', explanation: '各部分百分比之和=100%；圆心角=360°×25%=90°。' },
      { id: 'p093q3', type: '填空题', score: 4, text: '在扇形统计图中，A部分占40%，B部分占35%，C部分占____%，其中____部分对应的扇形面积最大。', answer: '25、A', explanation: 'C=100%-40%-35%=25%；A占40%最大，对应扇形面积最大。' },
      { id: 'p093q4', type: '填空题', score: 4, text: '要清楚地看出各部分与总数的关系，应选用____统计图；要清楚地看出数量的增减变化，应选用____统计图。', answer: '扇形、折线', explanation: '扇形统计图反映部分与总体的关系，折线统计图反映数量变化趋势。' },
      { id: 'p093q5', type: '选择题', score: 4, text: '一个扇形统计图中，某部分对应的扇形圆心角是72°，该部分占总数的（  ）', options: ['A. 72%', 'B. 20%', 'C. 36%', 'D. 50%'], answer: 1, explanation: '72°÷360°=0.2=20%。' },
      { id: 'p093q6', type: '选择题', score: 4, text: '六年级同学最喜欢的运动项目统计如下：篮球30%，足球25%，乒乓球20%，其他25%。如果喜欢篮球的有36人，六年级共有（  ）人。', options: ['A. 108', 'B. 120', 'C. 100', 'D. 90'], answer: 1, explanation: '36÷30%=36÷0.3=120人。' },
      { id: 'p093q7', type: '选择题', score: 4, text: '下面关于扇形统计图的说法正确的是（  ）', options: ['A. 能直接看出各部分的具体数量', 'B. 能清楚地看出各部分与总数的关系', 'C. 能清楚地看出数量的变化趋势', 'D. 能清楚地看出各组数量的多少'], answer: 1, explanation: '扇形统计图的特点是能清楚地表示各部分与总数的关系。' },
      { id: 'p093q8', type: '判断题', score: 3, text: '扇形统计图中，一个扇形的面积越大，说明该部分占总数的百分比越大。（  ）', answer: '正确', explanation: '扇形面积与圆心角成正比，圆心角与百分比成正比。' },
      { id: 'p093q9', type: '判断题', score: 3, text: '从扇形统计图中可以直接读出各部分的具体数量。（  ）', answer: '错误', explanation: '扇形统计图只能看出各部分占总数的百分比，不能直接读出具体数量，需要知道总数才能计算。' },
      { id: 'p093q10', type: '应用题', score: 16, text: '某校六年级学生参加课外兴趣小组情况用扇形统计图表示如下：体育组占40%，音乐组占25%，美术组占20%，其他占15%。已知参加美术组的有30人。（1）六年级共有多少人参加兴趣小组？（2）参加体育组的比参加音乐组的多多少人？', answer: '（1）30÷20%=30÷0.2=150（人）；（2）体育组：150×40%=60（人），音乐组：150×25%=37.5≈38（人），体育组比音乐组多60-38=22（人）。', explanation: '先根据美术组人数和占比求总人数，再分别求体育组和音乐组人数并求差。注意实际人数应取整。' }
    ]
  },

  /* ============================== 六年级数学上册第八单元 单元卷 ============================== */
  {
    id: 'p094',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学上册第八单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p094q1', type: '填空题', score: 4, text: '从1开始的连续奇数相加：1=____²，1+3=____²，1+3+5=____²，1+3+5+7=____²。', answer: '1、2、3、4', explanation: '从1开始的n个连续奇数之和等于n²，1个奇数和=1²，2个=2²，3个=3²，4个=4²。' },
      { id: 'p094q2', type: '填空题', score: 4, text: '1+3+5+7+9+11+13=____，它等于____的平方。', answer: '49、7', explanation: '7个连续奇数之和=7²=49。' },
      { id: 'p094q3', type: '填空题', score: 4, text: '用小棒摆正方形：1个正方形需要4根，2个正方形需要7根，3个正方形需要____根，n个正方形需要____根。', answer: '10、3n+1', explanation: '规律：4,7,10,...，每多1个正方形多3根，n个正方形需3n+1根。' },
      { id: 'p094q4', type: '填空题', score: 4, text: '观察规律：1²=1，11²=121，111²=12321，则1111²=____，11111²=____。', answer: '1234321、123454321', explanation: '由n个1组成的数的平方，结果从1递增到n再递减到1。' },
      { id: 'p094q5', type: '选择题', score: 4, text: '1+3+5+…+19的和是（  ）', options: ['A. 90', 'B. 100', 'C. 110', 'D. 81'], answer: 1, explanation: '从1到19共10个连续奇数，和=10²=100。' },
      { id: 'p094q6', type: '选择题', score: 4, text: '按规律填数：1，4，9，16，25，____，第n个数是（  ）', options: ['A. 30、n²+1', 'B. 36、n²', 'C. 36、2n', 'D. 35、n(n+1)'], answer: 1, explanation: '1²=1，2²=4，3²=9，4²=16，5²=25，第6个=6²=36，第n个=n²。' },
      { id: 'p094q7', type: '选择题', score: 4, text: '一张纸第一次对折后变成2层，第二次对折后变成4层，第5次对折后变成（  ）层。', options: ['A. 10', 'B. 16', 'C. 32', 'D. 64'], answer: 2, explanation: '每次对折层数翻倍，第n次对折后层数为2ⁿ，第5次=2⁵=32层。' },
      { id: 'p094q8', type: '判断题', score: 3, text: '1+3+5+7+9+11+13+15=64。（  ）', answer: '正确', explanation: '8个连续奇数之和=8²=64。' },
      { id: 'p094q9', type: '判断题', score: 3, text: '从1开始的连续n个偶数之和也等于n²。（  ）', answer: '错误', explanation: '连续奇数之和等于n²，连续偶数之和不等于n²，如2+4=6≠2²=4。' },
      { id: 'p094q10', type: '应用题', score: 16, text: '有一串黑白相间的珠子，排列如下：○●○●○●○●……（○表示白色，●表示黑色）（1）第25颗珠子是什么颜色？（2）前50颗珠子中，白色和黑色各有多少颗？（3）如果这串珠子共有120颗，黑色珠子有多少颗？', answer: '（1）珠子按"白黑"2颗一周期循环，25÷2=12余1，余数1对应白色，第25颗是白色；（2）50÷2=25，白色25颗，黑色25颗；（3）120÷2=60，黑色60颗。', explanation: '周期问题：2颗为一周期（白+黑），用总数除以周期数，根据余数判断颜色。' }
    ]
  },

  /* ============================== 六年级数学下册第三单元 单元卷 ============================== */
  {
    id: 'p095',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第三单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p095q1', type: '填空题', score: 4, text: '圆柱的侧面积公式是S侧=____，圆柱的表面积公式是S表=____。', answer: '2πrh（或Ch）、2πrh+2πr²', explanation: '侧面积=底面周长×高=2πrh，表面积=侧面积+2个底面积。' },
      { id: 'p095q2', type: '填空题', score: 4, text: '圆柱的体积公式是V=____，圆锥的体积公式是V=____，圆锥体积是等底等高圆柱体积的____。', answer: 'πr²h、1/3πr²h、1/3', explanation: '圆锥体积=1/3×底面积×高，是等底等高圆柱体积的1/3。' },
      { id: 'p095q3', type: '填空题', score: 4, text: '一个圆柱底面半径2厘米，高5厘米，它的侧面积是____平方厘米，体积是____立方厘米。（π取3.14）', answer: '62.8、62.8', explanation: 'S侧=2×3.14×2×5=62.8；V=3.14×2²×5=3.14×4×5=62.8。' },
      { id: 'p095q4', type: '填空题', score: 4, text: '一个圆锥底面直径6厘米，高10厘米，它的体积是____立方厘米。（π取3.14）', answer: '94.2', explanation: 'r=3，V=1/3×3.14×3²×10=1/3×3.14×9×10=1/3×282.6=94.2。' },
      { id: 'p095q5', type: '选择题', score: 4, text: '一个圆柱与一个圆锥等底等高，体积之和是96立方厘米，圆锥的体积是（  ）立方厘米。', options: ['A. 24', 'B. 32', 'C. 72', 'D. 64'], answer: 0, explanation: '等底等高圆柱体积是圆锥的3倍，设圆锥V，则3V+V=96，V=24。' },
      { id: 'p095q6', type: '选择题', score: 4, text: '把一个圆柱沿直径切成两半，表面积增加了（  ）', options: ['A. 2个底面积', 'B. 2个长方形（直径×高）', 'C. 1个侧面积', 'D. 2πrh'], answer: 1, explanation: '沿直径切开后增加了2个切面，每个切面是长为高、宽为直径的长方形。' },
      { id: 'p095q7', type: '选择题', score: 4, text: '一个圆柱的底面半径扩大2倍，高不变，体积扩大（  ）倍。', options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], answer: 1, explanation: 'V=πr²h，半径扩大2倍，r²扩大4倍，体积扩大4倍。' },
      { id: 'p095q8', type: '判断题', score: 3, text: '圆柱的侧面展开一定是长方形。（  ）', answer: '错误', explanation: '沿高剪开是长方形，但斜着剪开是平行四边形。' },
      { id: 'p095q9', type: '判断题', score: 3, text: '圆锥的体积是圆柱体积的1/3。（  ）', answer: '错误', explanation: '只有在等底等高的条件下，圆锥体积才是圆柱体积的1/3。' },
      { id: 'p095q10', type: '应用题', score: 16, text: '一个圆柱形水桶，底面半径2分米，高6分米。（1）做这个水桶至少需要多少平方分米的铁皮？（不含盖）（2）这个水桶最多能装多少升水？（π取3.14，1立方分米=1升）', answer: '（1）水桶无盖，需侧面积+1个底面积：S侧=2×3.14×2×6=75.36（平方分米），S底=3.14×2²=12.56（平方分米），共75.36+12.56=87.92（平方分米）；（2）V=3.14×2²×6=3.14×4×6=75.36（立方分米）=75.36升。', explanation: '水桶无盖只需一个底面积加侧面积；容积用体积公式计算再换算为升。' }
    ]
  },

  /* ============================== 六年级数学下册第四单元 单元卷 ============================== */
  {
    id: 'p096',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第四单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p096q1', type: '填空题', score: 4, text: '表示两个比相等的式子叫作____，在比例2:3=4:6中，2和6是比例的____项，3和4是比例的____项。', answer: '比例、外、内', explanation: '比例的两端叫外项，中间两项叫内项。' },
      { id: 'p096q2', type: '填空题', score: 4, text: '比例的基本性质：在比例中，两个外项之积等于____，即如果a:b=c:d，则____=____。', answer: '两个内项之积、a×d、b×c', explanation: '比例的基本性质：外项积=内项积。' },
      { id: 'p096q3', type: '填空题', score: 4, text: '一幅地图的比例尺是1:500000，图上距离3厘米表示实际距离____千米；实际距离40千米，在图上是____厘米。', answer: '15、8', explanation: '3×500000=1500000厘米=15千米；40千米=4000000厘米，4000000÷500000=8厘米。' },
      { id: 'p096q4', type: '填空题', score: 4, text: '如果xy=k（一定），则x和y成____比例；如果x/y=k（一定），则x和y成____比例。', answer: '反、正', explanation: '乘积一定成反比例，比值一定成正比例。' },
      { id: 'p096q5', type: '选择题', score: 4, text: '下面各组中，能组成比例的是（  ）', options: ['A. 2:3和4:5', 'B. 1/2:1/3和3:2', 'C. 0.5:0.3和5:3', 'D. 1:2和2:3'], answer: 2, explanation: '0.5:0.3=5/3，5:3=5/3，比值相等，可组成比例。' },
      { id: 'p096q6', type: '选择题', score: 4, text: '下列各量中，成正比例关系的是（  ）', options: ['A. 圆的半径和面积', 'B. 路程一定，速度和时间', 'C. 单价一定，总价和数量', 'D. 正方形的边长和面积'], answer: 2, explanation: '总价÷数量=单价（一定），成正比例。A和D都不是比值关系，B是乘积一定成反比例。' },
      { id: 'p096q7', type: '选择题', score: 4, text: '把一个长4厘米、宽3厘米的长方形按2:1放大，放大后的面积是（  ）平方厘米。', options: ['A. 24', 'B. 48', 'C. 12', 'D. 36'], answer: 1, explanation: '放大后长4×2=8厘米，宽3×2=6厘米，面积8×6=48平方厘米。' },
      { id: 'p096q8', type: '判断题', score: 3, text: '比例尺的前项一定是1。（  ）', answer: '错误', explanation: '放大比例尺的后项是1，如5:1；缩小比例尺前项是1，如1:100。' },
      { id: 'p096q9', type: '判断题', score: 3, text: '一个人的年龄和身高成正比例。（  ）', answer: '错误', explanation: '年龄增长但身高不一定按比例增长，两者比值不确定，不成正比例。' },
      { id: 'p096q10', type: '应用题', score: 16, text: '在一幅比例尺是1:2000000的地图上，量得甲乙两地的距离是8厘米。（1）甲乙两地的实际距离是多少千米？（2）一辆汽车以每小时80千米的速度从甲地开往乙地，需要几小时？', answer: '（1）实际距离=8×2000000=16000000厘米=160千米；（2）时间=160÷80=2（小时）。', explanation: '比例尺=图上距离:实际距离，实际距离=图上距离÷比例尺；路程÷速度=时间。' }
    ]
  },

  /* ============================== 六年级数学下册第五单元 单元卷 ============================== */
  {
    id: 'p097',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第五单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p097q1', type: '填空题', score: 4, text: '鸽巢原理：把n+1个物体放入n个鸽巢中，至少有____个物体放入同一个鸽巢中。', answer: '2', explanation: 'n+1个物体放入n个鸽巢，平均每个鸽巢放1个还多1个，所以至少有一个鸽巢有2个物体。' },
      { id: 'p097q2', type: '填空题', score: 4, text: '把5个苹果放入4个盘子里，至少有一个盘子里有____个苹果；把7只鸽子放进3个鸽笼，至少有一个鸽笼里有____只鸽子。', answer: '2、3', explanation: '5÷4=1余1，至少1+1=2个；7÷3=2余1，至少2+1=3只。' },
      { id: 'p097q3', type: '填空题', score: 4, text: '在13个人中，至少有____个人的生肖相同；在367人中，至少有____人的生日相同。', answer: '2、2', explanation: '12个生肖，13÷12=1余1，至少1+1=2人相同；一年最多366天，367÷366=1余1，至少2人同日。' },
      { id: 'p097q4', type: '填空题', score: 4, text: '把9本书放入4个抽屉中，至少有一个抽屉里放了____本；至少取____个整数才能保证其中有两个数的差是5的倍数。', answer: '3、6', explanation: '9÷4=2余1，至少2+1=3本；整数除以5余数为0~4共5类，取6个至少2个同余数，差是5的倍数。' },
      { id: 'p097q5', type: '选择题', score: 4, text: '把10本书放入3个抽屉中，至少有一个抽屉里放了（  ）本书。', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], answer: 1, explanation: '10÷3=3余1，至少3+1=4本。' },
      { id: 'p097q6', type: '选择题', score: 4, text: '一个布袋里有红、黄、蓝三种颜色的球各5个，至少取出（  ）个才能保证有两种颜色的球。', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], answer: 1, explanation: '3种颜色，最不利取3个各1种颜色，取第4个必与前面某色相同，保证至少出现两种颜色。' },
      { id: 'p097q7', type: '选择题', score: 4, text: '在1~100的自然数中，任意取出51个数，其中必有（  ）', options: ['A. 两个数的和是100', 'B. 两个数的差是1', 'C. 两个数互质', 'D. 两个数都是偶数'], answer: 1, explanation: '1~100分成50组相邻数{(1,2),(3,4),...,(99,100)}，取51个数必有2个在同一组，差为1。' },
      { id: 'p097q8', type: '判断题', score: 3, text: '把11只鸽子放入5个鸽笼，至少有一个鸽笼里有3只鸽子。（  ）', answer: '正确', explanation: '11÷5=2余1，至少2+1=3只。' },
      { id: 'p097q9', type: '判断题', score: 3, text: '任意3个自然数中，至少有两个数的差是偶数。（  ）', answer: '正确', explanation: '3个自然数按奇偶分类，至少有2个同奇或同偶，它们的差是偶数。' },
      { id: 'p097q10', type: '应用题', score: 16, text: '一个袋子中有红球8个、黄球6个、蓝球4个，这些球除颜色外完全相同。（1）至少取多少个球才能保证取到两个颜色相同的球？（2）至少取多少个球才能保证取到红球？（3）至少取多少个球才能保证取到三种颜色的球？', answer: '（1）3种颜色，最不利取3个各1种颜色，再取1个必与前面某色相同，至少取4个；（2）最不利先取完黄球6个和蓝球4个共10个，再取1个必为红球，至少取11个；（3）最不利先取完红球8个和黄球6个共14个，再取1个必为蓝球，三种颜色齐全，至少取15个。', explanation: '鸽巢原理"最不利原则"：假设每次都取到最不希望的颜色，看还需取几个才能满足要求。' }
    ]
  },

  /* ============================== 六年级数学下册第六单元 单元卷 ============================== */
  {
    id: 'p098',
    subject: '数学',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级数学下册第六单元测试卷',
    totalScore: 50,
    timeLimit: 40,
    questions: [
      { id: 'p098q1', type: '填空题', score: 4, text: '3/4=____÷____=____:____=____%=____（填小数）。', answer: '3、4、3、4、75、0.75', explanation: '分数、除法、比、百分数、小数的互化关系。' },
      { id: 'p098q2', type: '填空题', score: 4, text: '一个圆的周长是12.56厘米，它的面积是____平方厘米；与它等底等高的圆锥体积是____立方厘米。（π取3.14，圆锥高等于1厘米）', answer: '12.56、4.19', explanation: 'r=12.56÷(2×3.14)=2厘米，S=3.14×2²=12.56；圆锥V=1/3×12.56×1≈4.19立方厘米。' },
      { id: 'p098q3', type: '填空题', score: 4, text: '甲数与乙数的比是3:5，甲数是乙数的____%，乙数比甲数多____%，甲数占甲乙之和的____。', answer: '60、66.7（约66.7）、3/8', explanation: '甲÷乙=3/5=60%；(乙-甲)÷甲=2/3≈66.7%；甲÷(甲+乙)=3/8。' },
      { id: 'p098q4', type: '填空题', score: 4, text: '把一根长6分米的圆柱形木料截成3段小圆柱，表面积比原来增加了12.56平方分米，这根木料原来的体积是____立方分米。（π取3.14）', answer: '18.84', explanation: '截成3段增加4个底面，1个底面积=12.56÷4=3.14平方分米，V=3.14×6=18.84立方分米。' },
      { id: 'p098q5', type: '选择题', score: 4, text: '下列各对量中，成反比例的是（  ）', options: ['A. 圆的周长和直径', 'B. 总价一定，单价和数量', 'C. 正方形的周长和边长', 'D. 速度一定，路程和时间'], answer: 1, explanation: '单价×数量=总价（一定），乘积一定成反比例。A、C、D都是商一定，成正比例。' },
      { id: 'p098q6', type: '选择题', score: 4, text: '一件商品先提价20%，再降价20%，与原价相比（  ）', options: ['A. 价格不变', 'B. 降低了4%', 'C. 降低了2%', 'D. 提高了4%'], answer: 1, explanation: '设原价1，1×1.2×0.8=0.96，降低了1-0.96=4%。' },
      { id: 'p098q7', type: '选择题', score: 4, text: '一个圆柱和一个圆锥等体积等高，圆柱的底面积是圆锥底面积的（  ）', options: ['A. 3倍', 'B. 1/3', 'C. 9倍', 'D. 1/9'], answer: 1, explanation: 'V柱=S柱h，V锥=1/3S锥h，等体积等高则S柱h=1/3S锥h，S柱=1/3S锥。' },
      { id: 'p098q8', type: '判断题', score: 3, text: '半圆的周长等于圆周长的一半。（  ）', answer: '错误', explanation: '半圆周长=圆周长的一半+直径，比圆周长一半多一条直径的长度。' },
      { id: 'p098q9', type: '判断题', score: 3, text: '比的前项和后项同时乘同一个数，比值不变。（  ）', answer: '正确', explanation: '比的基本性质：前项和后项同时乘或除以相同的数（0除外），比值不变。' },
      { id: 'p098q10', type: '应用题', score: 16, text: '一个圆锥形沙堆，底面周长是18.84米，高1.5米。用这堆沙在10米宽的公路上铺2厘米厚的路面，能铺多少米长？（π取3.14）', answer: '沙堆底面半径r=18.84÷(2×3.14)=3米，沙堆体积V=1/3×3.14×3²×1.5=1/3×3.14×9×1.5=1/3×42.39=14.13（立方米）；路面厚度2厘米=0.02米，路面体积=长×宽×厚，14.13=长×10×0.02，长=14.13÷0.2=70.65（米）。', explanation: '先求圆锥体积，再将体积等量转换为长方体（路面）体积，用体积÷（宽×厚）求长度。注意单位换算。' }
    ]
  }
,
  /* ============================== 六年级英语上册第一单元 单元卷 ============================== */
  {
    id: 'p099',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p099q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. museum', 'B. cinema', 'C. hospital', 'D. bookstore'], answer: 0, explanation: '听力考查核心词汇museum（博物馆）。' },
      { id: 'p099q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. left', 'B. right', 'C. straight', 'D. crossing'], answer: 2, explanation: '听力考查核心词汇straight（直行）。' },
      { id: 'p099q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：The cinema is next to the bookstore.', options: ['A. 电影院在书店旁边', 'B. 电影院在医院旁边', 'C. 书店在电影院后面', 'D. 书店在医院旁边'], answer: 0, explanation: 'next to意为"在……旁边"，电影院在书店旁边。' },
      { id: 'p099q4', type: '听力选择', score: 2, text: '选出正确的答语：Where is the post office?', options: ['A. It\'s near the hospital.', 'B. By bus.', 'C. At 8:00.', 'D. Yes, it is.'], answer: 0, explanation: 'Where问地点，回答It\'s near the hospital。' },
      { id: 'p099q5', type: '听力选择', score: 2, text: '选出正确的答语：How can I get to the museum?', options: ['A. Turn left at the cinema.', 'B. It\'s a museum.', 'C. Yes, you can.', 'D. You\'re welcome.'], answer: 0, explanation: 'How can I get to...?问路线，回答Turn left at the cinema。' },
      { id: 'p099q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. Turn left at the bookstore.', 'B. Turn right at the bookstore.', 'C. Go straight at the bookstore.', 'D. Turn left at the cinema.'], answer: 0, explanation: '听力考查指路核心句Turn left at the bookstore。' },
      { id: 'p099q7', type: '听力选择', score: 2, text: '选出正确的答语：Is it far from here?', options: ['A. Yes, it is.', 'B. Turn left.', 'C. It\'s near.', 'D. By bus.'], answer: 0, explanation: 'Is it...?一般疑问句，肯定回答Yes, it is。' },
      { id: 'p099q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. behind', 'B. beside', 'C. between', 'D. above'], answer: 1, explanation: '听力考查核心词汇beside（在……旁边）。' },
      { id: 'p099q9', type: '听力选择', score: 2, text: '选出正确的答语：Where is the hospital?', options: ['A. It\'s next to the cinema.', 'B. Go straight.', 'C. Yes, it is.', 'D. Thank you.'], answer: 0, explanation: 'Where问地点，回答It\'s next to the cinema。' },
      { id: 'p099q10', type: '听力选择', score: 2, text: '选出你所听到的方位词：', options: ['A. in front of', 'B. behind', 'C. next to', 'D. near'], answer: 0, explanation: '听力考查in front of（在……前面）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p099q11', type: '词汇填空', score: 2, text: 'The science m____（博物馆）is near the park.', answer: 'museum', explanation: 'museum意为"博物馆"。' },
      { id: 'p099q12', type: '词汇填空', score: 2, text: 'Turn l____（左边）at the traffic lights.', answer: 'left', explanation: 'turn left意为"左转"。' },
      { id: 'p099q13', type: '词汇填空', score: 2, text: 'Go s____（直行）for five minutes.', answer: 'straight', explanation: 'go straight意为"直行"。' },
      { id: 'p099q14', type: '词汇填空', score: 2, text: 'The hospital is b____（在……后面）the cinema.', answer: 'behind', explanation: 'behind意为"在……后面"。' },
      { id: 'p099q15', type: '词汇填空', score: 2, text: 'The post office is n____（在……附近）the bookstore.', answer: 'near', explanation: 'near意为"在……附近"。' },
      { id: 'p099q16', type: '词汇填空', score: 2, text: 'Turn r____（右边）at the school.', answer: 'right', explanation: 'turn right意为"右转"。' },
      { id: 'p099q17', type: '词汇填空', score: 2, text: 'The bookstore is n____ to（在……旁边）the library.', answer: 'next', explanation: 'next to意为"在……旁边"。' },
      { id: 'p099q18', type: '词汇填空', score: 2, text: 'The park is in f____ of（在……前面）the hospital.', answer: 'front', explanation: 'in front of意为"在……前面"。' },
      { id: 'p099q19', type: '词汇填空', score: 2, text: 'How can I g____（到达）to the cinema?', answer: 'get', explanation: 'get to意为"到达"。' },
      { id: 'p099q20', type: '词汇填空', score: 2, text: 'The library is b____（在……之间）the school and the park.', answer: 'between', explanation: 'between...and...意为"在……和……之间"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p099q21', type: '单项选择', score: 2, text: '—Where is the cinema? —It\'s ____ the bookstore.', options: ['A. near', 'B. go', 'C. turn', 'D. on'], answer: 0, explanation: 'near the bookstore意为"在书店附近"。' },
      { id: 'p099q22', type: '单项选择', score: 2, text: 'How can I ____ to the museum?', options: ['A. get', 'B. gets', 'C. getting', 'D. to get'], answer: 0, explanation: 'can后面接动词原形get。' },
      { id: 'p099q23', type: '单项选择', score: 2, text: 'Turn left ____ the bookstore.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 2, explanation: '在某个地点转弯用介词at。' },
      { id: 'p099q24', type: '单项选择', score: 2, text: 'The hospital is ____ the cinema.', options: ['A. next', 'B. next to', 'C. next at', 'D. next in'], answer: 1, explanation: 'next to意为"在……旁边"，是固定搭配。' },
      { id: 'p099q25', type: '单项选择', score: 2, text: '—Is it far ____ here? —Yes, it is.', options: ['A. to', 'B. from', 'C. at', 'D. on'], answer: 1, explanation: 'far from意为"离……远"。' },
      { id: 'p099q26', type: '单项选择', score: 2, text: 'Go straight ____ three minutes.', options: ['A. in', 'B. on', 'C. at', 'D. for'], answer: 3, explanation: 'for + 时间段，表示持续多久。' },
      { id: 'p099q27', type: '单项选择', score: 2, text: 'The science museum is ____ the left.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 1, explanation: 'on the left意为"在左边"，是固定搭配。' },
      { id: 'p099q28', type: '单项选择', score: 2, text: '—____ can I get to the park? —Turn right at the school.', options: ['A. What', 'B. Where', 'C. How', 'D. When'], answer: 2, explanation: 'How问方式/路线，回答Turn right...。' },
      { id: 'p099q29', type: '单项选择', score: 2, text: 'The school is ____ the library and the hospital.', options: ['A. between', 'B. beside', 'C. behind', 'D. near'], answer: 0, explanation: 'between...and...意为"在……和……之间"。' },
      { id: 'p099q30', type: '单项选择', score: 2, text: '—Where is the zoo? —____, I don\'t know.', options: ['A. Yes', 'B. OK', 'C. Sorry', 'D. No'], answer: 2, explanation: 'Sorry, I don\'t know. 表示礼貌地回答不知道。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p099q31', type: '阅读理解', score: 5, text: '阅读短文回答：Where is the museum?', passage: 'Hello! I am Tom. I live in a big city. There are many places in my city. The museum is near the hospital. The cinema is next to the bookstore. The park is behind the school. The post office is in front of the library. I often go to the museum on weekends. I go straight from my home, then turn left at the hospital. The museum is on the right.', answer: 'The museum is near the hospital.', explanation: '从原文"The museum is near the hospital"得知。' },
      { id: 'p099q32', type: '阅读理解', score: 5, text: '阅读短文回答：Where is the cinema?', passage: 'Hello! I am Tom. I live in a big city. There are many places in my city. The museum is near the hospital. The cinema is next to the bookstore. The park is behind the school. The post office is in front of the library. I often go to the museum on weekends. I go straight from my home, then turn left at the hospital. The museum is on the right.', answer: 'The cinema is next to the bookstore.', explanation: '从原文"The cinema is next to the bookstore"得知。' },
      { id: 'p099q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：The park is in front of the school.', passage: 'Hello! I am Tom. I live in a big city. There are many places in my city. The museum is near the hospital. The cinema is next to the bookstore. The park is behind the school. The post office is in front of the library. I often go to the museum on weekends. I go straight from my home, then turn left at the hospital. The museum is on the right.', answer: 'F', explanation: '原文说"The park is behind the school"，不是in front of。' },
      { id: 'p099q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Tom turns left at the hospital to get to the museum.', passage: 'Hello! I am Tom. I live in a big city. There are many places in my city. The museum is near the hospital. The cinema is next to the bookstore. The park is behind the school. The post office is in front of the library. I often go to the museum on weekends. I go straight from my home, then turn left at the hospital. The museum is on the right.', answer: 'T', explanation: '原文说"I go straight from my home, then turn left at the hospital"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p099q35', type: '写作', score: 20, text: '请用英语写一段话，介绍从你家到学校或某个地方的路线（不少于5句话）。提示：Where is it? How can you get there? Go straight / Turn left / Turn right...', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型Where is...? How can I get to...?及方位词next to/near/behind/in front of等。' }
    ]
  },

  /* ============================== 六年级英语上册第三单元 单元卷 ============================== */
  {
    id: 'p100',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第三单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p100q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. trip', 'B. travel', 'C. tomorrow', 'D. tonight'], answer: 0, explanation: '听力考查核心词汇trip（旅行）。' },
      { id: 'p100q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. cinema', 'B. bookstore', 'C. supermarket', 'D. museum'], answer: 1, explanation: '听力考查核心词汇bookstore（书店）。' },
      { id: 'p100q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：I\'m going to visit my grandparents.', options: ['A. 去看望祖父母', 'B. 去看电影', 'C. 去书店', 'D. 去旅行'], answer: 0, explanation: 'visit my grandparents意为"看望祖父母"。' },
      { id: 'p100q4', type: '听力选择', score: 2, text: '选出正确的答语：What are you going to do tomorrow?', options: ['A. I\'m going to read a book.', 'B. I read a book.', 'C. I like reading.', 'D. Yes, I am.'], answer: 0, explanation: 'What are you going to do?问计划，回答I\'m going to read a book。' },
      { id: 'p100q5', type: '听力选择', score: 2, text: '选出正确的答语：Where are you going this evening?', options: ['A. To the cinema.', 'B. At 7:00.', 'C. By bus.', 'D. Yes, I am.'], answer: 0, explanation: 'Where问地点，回答To the cinema。' },
      { id: 'p100q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I\'m going to the bookstore.', 'B. I\'m going to the cinema.', 'C. I\'m going to the park.', 'D. I\'m going to the museum.'], answer: 0, explanation: '听力考查be going to句型。' },
      { id: 'p100q7', type: '听力选择', score: 2, text: '选出正确的答语：When are you going?', options: ['A. I\'m going by bus.', 'B. I\'m going to the park.', 'C. I\'m going at 3:00.', 'D. I\'m going to read a book.'], answer: 2, explanation: 'When问时间，回答I\'m going at 3:00。' },
      { id: 'p100q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. next week', 'B. this weekend', 'C. tomorrow', 'D. tonight'], answer: 2, explanation: '听力考查时间词汇tomorrow（明天）。' },
      { id: 'p100q9', type: '听力选择', score: 2, text: '选出正确的答语：Are you going to the bookstore?', options: ['A. Yes, I am.', 'B. Yes, I do.', 'C. To the bookstore.', 'D. On foot.'], answer: 0, explanation: 'Are you going...?肯定回答Yes, I am。' },
      { id: 'p100q10', type: '听力选择', score: 2, text: '选出你所听到的活动：', options: ['A. see a film', 'B. take a trip', 'C. read a magazine', 'D. go to the supermarket'], answer: 1, explanation: '听力考查take a trip（去旅行）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p100q11', type: '词汇填空', score: 2, text: 'I\'m going to take a t____（旅行）next week.', answer: 'trip', explanation: 'take a trip意为"去旅行"。' },
      { id: 'p100q12', type: '词汇填空', score: 2, text: 'She is going to the c____（电影院）tonight.', answer: 'cinema', explanation: 'cinema意为"电影院"。' },
      { id: 'p100q13', type: '词汇填空', score: 2, text: 'We are going to visit our g____（祖父母）this weekend.', answer: 'grandparents', explanation: 'grandparents意为"祖父母"。' },
      { id: 'p100q14', type: '词汇填空', score: 2, text: 'I\'m going to read a m____（杂志）tomorrow.', answer: 'magazine', explanation: 'magazine意为"杂志"。' },
      { id: 'p100q15', type: '词汇填空', score: 2, text: 'He is going to the s____（超市）this afternoon.', answer: 'supermarket', explanation: 'supermarket意为"超市"。' },
      { id: 'p100q16', type: '词汇填空', score: 2, text: 'What are you going to do t____（明天）?', answer: 'tomorrow', explanation: 'tomorrow意为"明天"。' },
      { id: 'p100q17', type: '词汇填空', score: 2, text: 'I\'m going to see a f____（电影）this evening.', answer: 'film', explanation: 'see a film意为"看电影"。' },
      { id: 'p100q18', type: '词汇填空', score: 2, text: 'My mother is going to buy a d____（字典）for me.', answer: 'dictionary', explanation: 'dictionary意为"字典"。' },
      { id: 'p100q19', type: '词汇填空', score: 2, text: 'We are going to the bookstore t____（今晚）.', answer: 'tonight', explanation: 'tonight意为"今晚"。' },
      { id: 'p100q20', type: '词汇填空', score: 2, text: 'I\'m going to w____（看）TV this weekend.', answer: 'watch', explanation: 'watch TV意为"看电视"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p100q21', type: '单项选择', score: 2, text: '—What are you going to do? —I\'m going ____ a book.', options: ['A. read', 'B. to read', 'C. reads', 'D. reading'], answer: 1, explanation: 'be going to后面接动词原形read。' },
      { id: 'p100q22', type: '单项选择', score: 2, text: 'She ____ going to visit her grandparents tomorrow.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'She是第三人称单数，用is。' },
      { id: 'p100q23', type: '单项选择', score: 2, text: 'They ____ going to take a trip next week.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 2, explanation: 'They是复数，用are。' },
      { id: 'p100q24', type: '单项选择', score: 2, text: '—____ are you going? —To the bookstore.', options: ['A. What', 'B. Where', 'C. When', 'D. How'], answer: 1, explanation: 'Where问地点，回答To the bookstore。' },
      { id: 'p100q25', type: '单项选择', score: 2, text: '—____ are you going? —At 3:00 this afternoon.', options: ['A. What', 'B. Where', 'C. When', 'D. How'], answer: 2, explanation: 'When问时间，回答At 3:00。' },
      { id: 'p100q26', type: '单项选择', score: 2, text: 'I\'m going to the cinema ____ evening.', options: ['A. this', 'B. next', 'C. last', 'D. that'], answer: 0, explanation: 'this evening意为"今晚"，表示将来的计划。' },
      { id: 'p100q27', type: '单项选择', score: 2, text: 'He is going to ____ a film tomorrow.', options: ['A. see', 'B. sees', 'C. seeing', 'D. saw'], answer: 0, explanation: 'be going to后面接动词原形see。' },
      { id: 'p100q28', type: '单项选择', score: 2, text: '—Are you going to the park? —____, I am.', options: ['A. No', 'B. Yes', 'C. Not', 'D. OK'], answer: 1, explanation: '肯定回答用Yes, I am。' },
      { id: 'p100q29', type: '单项选择', score: 2, text: 'We are going to buy some books ____ the bookstore.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 0, explanation: 'in the bookstore意为"在书店里"。' },
      { id: 'p100q30', type: '单项选择', score: 2, text: 'What ____ Mike going to do this weekend?', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 1, explanation: 'Mike是第三人称单数，用is。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p100q31', type: '阅读理解', score: 5, text: '阅读短文回答：What is Amy going to do tomorrow?', passage: 'Hello! I am Amy. It is Saturday today. I am going to have a busy weekend. Tomorrow morning, I am going to the bookstore to buy some comic books. Tomorrow afternoon, I am going to visit my grandparents. Tomorrow evening, I am going to see a film with my friends. Next week, I am going to take a trip to Beijing. I am so excited!', answer: 'She is going to the bookstore to buy some comic books in the morning, visit her grandparents in the afternoon, and see a film in the evening.', explanation: '从原文中提取Amy明天三个时段的计划。' },
      { id: 'p100q32', type: '阅读理解', score: 5, text: '阅读短文回答：What is Amy going to do next week?', passage: 'Hello! I am Amy. It is Saturday today. I am going to have a busy weekend. Tomorrow morning, I am going to the bookstore to buy some comic books. Tomorrow afternoon, I am going to visit my grandparents. Tomorrow evening, I am going to see a film with my friends. Next week, I am going to take a trip to Beijing. I am so excited!', answer: 'She is going to take a trip to Beijing.', explanation: '从原文"Next week, I am going to take a trip to Beijing"得知。' },
      { id: 'p100q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy is going to the bookstore this afternoon.', passage: 'Hello! I am Amy. It is Saturday today. I am going to have a busy weekend. Tomorrow morning, I am going to the bookstore to buy some comic books. Tomorrow afternoon, I am going to visit my grandparents. Tomorrow evening, I am going to see a film with my friends. Next week, I am going to take a trip to Beijing. I am so excited!', answer: 'F', explanation: '原文说Amy是tomorrow morning去书店，不是this afternoon。' },
      { id: 'p100q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy is going to see a film with her parents.', passage: 'Hello! I am Amy. It is Saturday today. I am going to have a busy weekend. Tomorrow morning, I am going to the bookstore to buy some comic books. Tomorrow afternoon, I am going to visit my grandparents. Tomorrow evening, I am going to see a film with my friends. Next week, I am going to take a trip to Beijing. I am so excited!', answer: 'F', explanation: '原文说"see a film with my friends"，不是with her parents。' },

      // 五、写作（共20分）
      { id: 'p100q35', type: '写作', score: 20, text: '请用英语写一段话，介绍你这个周末的计划（不少于5句话）。提示：What are you going to do? Where are you going? When are you going?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型What are you going to do? I\'m going to...及时间表达this weekend/next week等。' }
    ]
  },

  /* ============================== 六年级英语上册第四单元 单元卷 ============================== */
  {
    id: 'p101',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第四单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p101q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. hobby', 'B. hiking', 'C. reading', 'D. singing'], answer: 0, explanation: '听力考查核心词汇hobby（爱好）。' },
      { id: 'p101q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. dancing', 'B. cooking', 'C. swimming', 'D. running'], answer: 1, explanation: '听力考查核心词汇cooking（烹饪）。' },
      { id: 'p101q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：He likes playing football.', options: ['A. 他喜欢踢足球', 'B. 他喜欢打篮球', 'C. 他喜欢游泳', 'D. 他喜欢阅读'], answer: 0, explanation: 'likes playing football意为"喜欢踢足球"。' },
      { id: 'p101q4', type: '听力选择', score: 2, text: '选出正确的答语：What are his hobbies?', options: ['A. He likes reading and singing.', 'B. He is a student.', 'C. Yes, he does.', 'D. He is reading.'], answer: 0, explanation: 'What are his hobbies?问爱好，回答He likes reading and singing。' },
      { id: 'p101q5', type: '听力选择', score: 2, text: '选出正确的答语：Does she like cooking?', options: ['A. Yes, she does.', 'B. Yes, she is.', 'C. She likes cooking.', 'D. She is cooking.'], answer: 0, explanation: 'Does she...?肯定回答Yes, she does。' },
      { id: 'p101q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I like reading stories.', 'B. I like singing songs.', 'C. I like playing football.', 'D. I like cooking Chinese food.'], answer: 0, explanation: '听力考查like doing句型。' },
      { id: 'p101q7', type: '听力选择', score: 2, text: '选出正确的答语：Does he live in China?', options: ['A. Yes, he does.', 'B. Yes, he is.', 'C. He lives in China.', 'D. No, he don\'t.'], answer: 0, explanation: 'Does he...?肯定回答Yes, he does。' },
      { id: 'p101q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. pen pal', 'B. pencil', 'C. people', 'D. puzzle'], answer: 0, explanation: '听力考查核心词汇pen pal（笔友）。' },
      { id: 'p101q9', type: '听力选择', score: 2, text: '选出正确的答语：What does she do on the weekend?', options: ['A. She often reads books.', 'B. She is a teacher.', 'C. Yes, she does.', 'D. She likes reading.'], answer: 0, explanation: 'What does she do on the weekend?问周末活动，回答She often reads books。' },
      { id: 'p101q10', type: '听力选择', score: 2, text: '选出你所听到的爱好：', options: ['A. doing kung fu', 'B. watching TV', 'C. listening to music', 'D. playing the pipa'], answer: 3, explanation: '听力考查playing the pipa（弹琵琶）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p101q11', type: '词汇填空', score: 2, text: 'I have a p____ p____（笔友）in Australia.', answer: 'pen pal', explanation: 'pen pal意为"笔友"。' },
      { id: 'p101q12', type: '词汇填空', score: 2, text: 'My hobby is r____（阅读）stories.', answer: 'reading', explanation: 'like/爱好后接V-ing形式reading。' },
      { id: 'p101q13', type: '词汇填空', score: 2, text: 'She likes d____（跳舞）very much.', answer: 'dancing', explanation: 'like后接V-ing形式dancing。' },
      { id: 'p101q14', type: '词汇填空', score: 2, text: 'He likes p____（玩）football after school.', answer: 'playing', explanation: 'like后接V-ing形式playing。' },
      { id: 'p101q15', type: '词汇填空', score: 2, text: 'Does he like s____（唱歌）?', answer: 'singing', explanation: 'like后接V-ing形式singing。' },
      { id: 'p101q16', type: '词汇填空', score: 2, text: 'My pen pal l____（居住）in Beijing.', answer: 'lives', explanation: '第三人称单数用lives。' },
      { id: 'p101q17', type: '词汇填空', score: 2, text: 'She likes c____（烹饪）Chinese food.', answer: 'cooking', explanation: 'like后接V-ing形式cooking。' },
      { id: 'p101q18', type: '词汇填空', score: 2, text: 'He often goes h____（远足）on weekends.', answer: 'hiking', explanation: 'go hiking意为"去远足"。' },
      { id: 'p101q19', type: '词汇填空', score: 2, text: 'I like doing k____ f____（功夫）.', answer: 'kung fu', explanation: 'do kung fu意为"练功夫"。' },
      { id: 'p101q20', type: '词汇填空', score: 2, text: 'She likes l____（听）to music.', answer: 'listening', explanation: 'listen to music意为"听音乐"，like后接V-ing。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p101q21', type: '单项选择', score: 2, text: 'I like ____ stories.', options: ['A. read', 'B. reads', 'C. reading', 'D. to reading'], answer: 2, explanation: 'like后接V-ing形式reading。' },
      { id: 'p101q22', type: '单项选择', score: 2, text: 'He ____ playing football.', options: ['A. like', 'B. likes', 'C. liking', 'D. to like'], answer: 1, explanation: 'He是第三人称单数，用likes。' },
      { id: 'p101q23', type: '单项选择', score: 2, text: '—Does she like dancing? —Yes, she ____.', options: ['A. do', 'B. does', 'C. is', 'D. can'], answer: 1, explanation: 'Does she...?肯定回答Yes, she does。' },
      { id: 'p101q24', type: '单项选择', score: 2, text: '—Does he live in Beijing? —No, he ____.', options: ['A. don\'t', 'B. doesn\'t', 'C. isn\'t', 'D. can\'t'], answer: 1, explanation: 'Does he...?否定回答No, he doesn\'t。' },
      { id: 'p101q25', type: '单项选择', score: 2, text: 'My pen pal ____ in Australia.', options: ['A. live', 'B. lives', 'C. living', 'D. to live'], answer: 1, explanation: 'My pen pal是第三人称单数，用lives。' },
      { id: 'p101q26', type: '单项选择', score: 2, text: 'She often ____ to music on the weekend.', options: ['A. listen', 'B. listens', 'C. listening', 'D. to listen'], answer: 1, explanation: 'She是第三人称单数，用listens。' },
      { id: 'p101q27', type: '单项选择', score: 2, text: 'What ____ your hobbies?', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 2, explanation: 'hobbies是复数，用are。' },
      { id: 'p101q28', type: '单项选择', score: 2, text: 'He likes ____ kung fu.', options: ['A. do', 'B. does', 'C. doing', 'D. to do'], answer: 2, explanation: 'like后接V-ing形式doing。' },
      { id: 'p101q29', type: '单项选择', score: 2, text: 'I have a pen pal ____ the USA.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 0, explanation: 'in the USA意为"在美国"。' },
      { id: 'p101q30', type: '单项选择', score: 2, text: 'She ____ going hiking every weekend.', options: ['A. like', 'B. likes', 'C. liking', 'D. liked'], answer: 1, explanation: 'She是第三人称单数，用likes。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p101q31', type: '阅读理解', score: 5, text: '阅读短文回答：What are Tom\'s hobbies?', passage: 'Hello! I am Tom. I am 12 years old. I live in China. I have a pen pal. His name is Jack. He lives in Australia. I like reading stories and playing football. Jack likes singing and doing kung fu. We often write emails to each other. I also like cooking Chinese food. Jack likes cooking Chinese food, too. We have the same hobby!', answer: 'He likes reading stories, playing football and cooking Chinese food.', explanation: '从原文"I like reading stories and playing football"和"I also like cooking Chinese food"得知。' },
      { id: 'p101q32', type: '阅读理解', score: 5, text: '阅读短文回答：What are Jack\'s hobbies?', passage: 'Hello! I am Tom. I am 12 years old. I live in China. I have a pen pal. His name is Jack. He lives in Australia. I like reading stories and playing football. Jack likes singing and doing kung fu. We often write emails to each other. I also like cooking Chinese food. Jack likes cooking Chinese food, too. We have the same hobby!', answer: 'He likes singing, doing kung fu and cooking Chinese food.', explanation: '从原文"Jack likes singing and doing kung fu"和"Jack likes cooking Chinese food, too"得知。' },
      { id: 'p101q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Jack lives in China.', passage: 'Hello! I am Tom. I am 12 years old. I live in China. I have a pen pal. His name is Jack. He lives in Australia. I like reading stories and playing football. Jack likes singing and doing kung fu. We often write emails to each other. I also like cooking Chinese food. Jack likes cooking Chinese food, too. We have the same hobby!', answer: 'F', explanation: '原文说"He lives in Australia"，不是China。' },
      { id: 'p101q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Tom and Jack have the same hobby—cooking Chinese food.', passage: 'Hello! I am Tom. I am 12 years old. I live in China. I have a pen pal. His name is Jack. He lives in Australia. I like reading stories and playing football. Jack likes singing and doing kung fu. We often write emails to each other. I also like cooking Chinese food. Jack likes cooking Chinese food, too. We have the same hobby!', answer: 'T', explanation: '两人都喜欢cooking Chinese food，判断正确。' },

      // 五、写作（共20分）
      { id: 'p101q35', type: '写作', score: 20, text: '请用英语写一段话，介绍你和你笔友的爱好（不少于5句话）。提示：What are your hobbies? What are your pen pal\'s hobbies? Do you have the same hobby?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型I like V-ing / He likes V-ing / Does he/she...?及爱好表达。' }
    ]
  },

  /* ============================== 六年级英语上册第五单元 单元卷 ============================== */
  {
    id: 'p102',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第五单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p102q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. factory', 'B. office', 'C. company', 'D. university'], answer: 0, explanation: '听力考查核心词汇factory（工厂）。' },
      { id: 'p102q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. pilot', 'B. police', 'C. postman', 'D. player'], answer: 0, explanation: '听力考查核心词汇pilot（飞行员）。' },
      { id: 'p102q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：She is a scientist.', options: ['A. 她是科学家', 'B. 她是老师', 'C. 她是医生', 'D. 她是工人'], answer: 0, explanation: 'scientist意为"科学家"。' },
      { id: 'p102q4', type: '听力选择', score: 2, text: '选出正确的答语：What does he do?', options: ['A. He is a doctor.', 'B. He likes reading.', 'C. He is reading.', 'D. He does homework.'], answer: 0, explanation: 'What does he do?问职业，回答He is a doctor。' },
      { id: 'p102q5', type: '听力选择', score: 2, text: '选出正确的答语：Where does she work?', options: ['A. She works in a hospital.', 'B. She is a nurse.', 'C. She likes working.', 'D. Yes, she does.'], answer: 0, explanation: 'Where问工作地点，回答She works in a hospital。' },
      { id: 'p102q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. He is a police officer.', 'B. He is a postman.', 'C. She is a police officer.', 'D. She is a postman.'], answer: 0, explanation: '听力考查职业表达He is a police officer。' },
      { id: 'p102q7', type: '听力选择', score: 2, text: '选出正确的答语：Is your father a teacher?', options: ['A. Yes, he is.', 'B. Yes, he does.', 'C. He is a teacher.', 'D. No, she isn\'t.'], answer: 0, explanation: 'Is your father...?肯定回答Yes, he is。' },
      { id: 'p102q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. coach', 'B. teacher', 'C. fisherman', 'D. writer'], answer: 2, explanation: '听力考查核心词汇fisherman（渔民）。' },
      { id: 'p102q9', type: '听力选择', score: 2, text: '选出正确的答语：How does he go to work?', options: ['A. He goes by bike.', 'B. He is a worker.', 'C. In a factory.', 'D. Yes, he does.'], answer: 0, explanation: 'How问方式，回答He goes by bike。' },
      { id: 'p102q10', type: '听力选择', score: 2, text: '选出你所听到的职业：', options: ['A. businessman', 'B. scientist', 'C. reporter', 'D. doctor'], answer: 1, explanation: '听力考查scientist（科学家）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p102q11', type: '词汇填空', score: 2, text: 'My father is a f____ w____（工厂工人）.', answer: 'factory worker', explanation: 'factory worker意为"工厂工人"。' },
      { id: 'p102q12', type: '词汇填空', score: 2, text: 'She is a p____（飞行员）. She works on a plane.', answer: 'pilot', explanation: 'pilot意为"飞行员"。' },
      { id: 'p102q13', type: '词汇填空', score: 2, text: 'He is a c____（教练）. He works in a gym.', answer: 'coach', explanation: 'coach意为"教练"。' },
      { id: 'p102q14', type: '词汇填空', score: 2, text: 'My mother is a s____（科学家）. She works at a university.', answer: 'scientist', explanation: 'scientist意为"科学家"。' },
      { id: 'p102q15', type: '词汇填空', score: 2, text: 'He is a p____ o____（警察）. He works in a police station.', answer: 'police officer', explanation: 'police officer意为"警察"。' },
      { id: 'p102q16', type: '词汇填空', score: 2, text: 'She is a f____（渔民）. She works at sea.', answer: 'fisherman', explanation: 'fisherman意为"渔民"。' },
      { id: 'p102q17', type: '词汇填空', score: 2, text: 'My uncle is a r____（记者）. He works on TV.', answer: 'reporter', explanation: 'reporter意为"记者"。' },
      { id: 'p102q18', type: '词汇填空', score: 2, text: 'He works in a f____（工厂）.', answer: 'factory', explanation: 'factory意为"工厂"。' },
      { id: 'p102q19', type: '词汇填空', score: 2, text: 'She is a w____（作家）. She writes stories.', answer: 'writer', explanation: 'writer意为"作家"。' },
      { id: 'p102q20', type: '词汇填空', score: 2, text: 'He is a b____（商人）. He often goes to other countries.', answer: 'businessman', explanation: 'businessman意为"商人"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p102q21', type: '单项选择', score: 2, text: '—What does she do? —She is ____ English teacher.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 1, explanation: 'English以元音字母开头，用an。' },
      { id: 'p102q22', type: '单项选择', score: 2, text: '—What ____ your mother do? —She is a nurse.', options: ['A. do', 'B. does', 'C. is', 'D. are'], answer: 1, explanation: 'your mother是第三人称单数，用does。' },
      { id: 'p102q23', type: '单项选择', score: 2, text: 'He ____ in a hospital.', options: ['A. work', 'B. works', 'C. working', 'D. to work'], answer: 1, explanation: 'He是第三人称单数，用works。' },
      { id: 'p102q24', type: '单项选择', score: 2, text: '—Where does he work? —He works ____ sea.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 2, explanation: 'at sea意为"在海上"。' },
      { id: 'p102q25', type: '单项选择', score: 2, text: 'My uncle is ____ coach.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 0, explanation: 'coach以辅音字母开头，用a。' },
      { id: 'p102q26', type: '单项选择', score: 2, text: 'She ____ to work by subway.', options: ['A. go', 'B. goes', 'C. going', 'D. to go'], answer: 1, explanation: 'She是第三人称单数，用goes。' },
      { id: 'p102q27', type: '单项选择', score: 2, text: '—Is your mother a doctor? —No, she ____.', options: ['A. isn\'t', 'B. doesn\'t', 'C. don\'t', 'D. can\'t'], answer: 0, explanation: 'Is your mother...?否定回答No, she isn\'t。' },
      { id: 'p102q28', type: '单项选择', score: 2, text: 'He works ____ a university.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 2, explanation: 'at a university意为"在大学"。' },
      { id: 'p102q29', type: '单项选择', score: 2, text: 'I want ____ a scientist.', options: ['A. be', 'B. to be', 'C. being', 'D. to being'], answer: 1, explanation: 'want to be意为"想成为"，后接动词原形。' },
      { id: 'p102q30', type: '单项选择', score: 2, text: '—____ does your aunt work? —She works in a factory.', options: ['A. What', 'B. Where', 'C. How', 'D. When'], answer: 1, explanation: 'Where问工作地点，回答She works in a factory。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p102q31', type: '阅读理解', score: 5, text: '阅读短文回答：What does Lily\'s father do?', passage: 'Hello! I am Lily. Let me tell you about my family. My father is a doctor. He works in a hospital. He goes to work by car. My mother is a teacher. She works in a school. She goes to work by bus. My uncle is a pilot. He works on a plane. He goes to work by bike. My aunt is a scientist. She works at a university. She goes to work on foot. I want to be a writer.', answer: 'He is a doctor.', explanation: '从原文"My father is a doctor"得知。' },
      { id: 'p102q32', type: '阅读理解', score: 5, text: '阅读短文回答：Where does Lily\'s aunt work?', passage: 'Hello! I am Lily. Let me tell you about my family. My father is a doctor. He works in a hospital. He goes to work by car. My mother is a teacher. She works in a school. She goes to work by bus. My uncle is a pilot. He works on a plane. He goes to work by bike. My aunt is a scientist. She works at a university. She goes to work on foot. I want to be a writer.', answer: 'She works at a university.', explanation: '从原文"My aunt is a scientist. She works at a university"得知。' },
      { id: 'p102q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Lily\'s uncle goes to work by plane.', passage: 'Hello! I am Lily. Let me tell you about my family. My father is a doctor. He works in a hospital. He goes to work by car. My mother is a teacher. She works in a school. She goes to work by bus. My uncle is a pilot. He works on a plane. He goes to work by bike. My aunt is a scientist. She works at a university. She goes to work on foot. I want to be a writer.', answer: 'F', explanation: '原文说"He goes to work by bike"，不是by plane。' },
      { id: 'p102q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Lily wants to be a writer.', passage: 'Hello! I am Lily. Let me tell you about my family. My father is a doctor. He works in a hospital. He goes to work by car. My mother is a teacher. She works in a school. She goes to work by bus. My uncle is a pilot. He works on a plane. He goes to work by bike. My aunt is a scientist. She works at a university. She goes to work on foot. I want to be a writer.', answer: 'T', explanation: '原文说"I want to be a writer"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p102q35', type: '写作', score: 20, text: '请用英语写一段话，介绍你家人的职业（不少于5句话）。提示：What does your father/mother do? Where does he/she work? How does he/she go to work?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型What does he/she do? He/She is a/an... Where does he/she work?等。' }
    ]
  },

  /* ============================== 六年级英语上册第六单元 单元卷 ============================== */
  {
    id: 'p103',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语上册第六单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p103q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. angry', 'B. sad', 'C. happy', 'D. worried'], answer: 0, explanation: '听力考查核心词汇angry（生气的）。' },
      { id: 'p103q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. ill', 'B. well', 'C. better', 'D. worse'], answer: 0, explanation: '听力考查核心词汇ill（生病的）。' },
      { id: 'p103q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：She should see a doctor.', options: ['A. 她应该看医生', 'B. 她应该多运动', 'C. 她应该深呼吸', 'D. 她应该穿暖和衣服'], answer: 0, explanation: 'should see a doctor意为"应该看医生"。' },
      { id: 'p103q4', type: '听力选择', score: 2, text: '选出正确的答语：How do you feel?', options: ['A. I feel sad.', 'B. I am 12.', 'C. Yes, I do.', 'D. I like apples.'], answer: 0, explanation: 'How do you feel?问感受，回答I feel sad。' },
      { id: 'p103q5', type: '听力选择', score: 2, text: '选出正确的答语：What\'s wrong?', options: ['A. I am ill.', 'B. I am fine.', 'C. Thank you.', 'D. Yes, I am.'], answer: 0, explanation: 'What\'s wrong?问怎么了，回答I am ill。' },
      { id: 'p103q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. You should take a deep breath.', 'B. You should see a doctor.', 'C. You should wear warm clothes.', 'D. You should do more exercise.'], answer: 0, explanation: '听力考查建议句You should take a deep breath。' },
      { id: 'p103q7', type: '听力选择', score: 2, text: '选出正确的答语：How does he feel?', options: ['A. He feels angry.', 'B. He is a student.', 'C. Yes, he does.', 'D. He likes reading.'], answer: 0, explanation: 'How does he feel?问感受，回答He feels angry。' },
      { id: 'p103q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. afraid', 'B. worried', 'C. happy', 'D. angry'], answer: 0, explanation: '听力考查核心词汇afraid（害怕的）。' },
      { id: 'p103q9', type: '听力选择', score: 2, text: '选出正确的答语：What should I do?', options: ['A. You should see a doctor.', 'B. I am ill.', 'C. Yes, you should.', 'D. I feel sad.'], answer: 0, explanation: 'What should I do?问建议，回答You should see a doctor。' },
      { id: 'p103q10', type: '听力选择', score: 2, text: '选出你所听到的感受：', options: ['A. I feel happy.', 'B. I feel sad.', 'C. I feel angry.', 'D. I feel worried.'], answer: 3, explanation: '听力考查I feel worried（我感到担心）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p103q11', type: '词汇填空', score: 2, text: 'She is a____（生气的）with her brother.', answer: 'angry', explanation: 'angry意为"生气的"。' },
      { id: 'p103q12', type: '词汇填空', score: 2, text: 'The cat is i____（生病的）. It should see a doctor.', answer: 'ill', explanation: 'ill意为"生病的"。' },
      { id: 'p103q13', type: '词汇填空', score: 2, text: 'I feel w____（担心的）about the test.', answer: 'worried', explanation: 'worried意为"担心的"。' },
      { id: 'p103q14', type: '词汇填空', score: 2, text: 'Don\'t be s____（难过的）. Everything will be OK.', answer: 'sad', explanation: 'sad意为"难过的"。' },
      { id: 'p103q15', type: '词汇填空', score: 2, text: 'She is a____（害怕的）of the dog.', answer: 'afraid', explanation: 'afraid意为"害怕的"。' },
      { id: 'p103q16', type: '词汇填空', score: 2, text: 'You should take a d____ b____（深呼吸）.', answer: 'deep breath', explanation: 'take a deep breath意为"深呼吸"。' },
      { id: 'p103q17', type: '词汇填空', score: 2, text: 'He should see a d____（医生）.', answer: 'doctor', explanation: 'see a doctor意为"看医生"。' },
      { id: 'p103q18', type: '词汇填空', score: 2, text: 'You should w____（穿）warm clothes.', answer: 'wear', explanation: 'wear warm clothes意为"穿暖和的衣服"。' },
      { id: 'p103q19', type: '词汇填空', score: 2, text: 'She should do more e____（锻炼）.', answer: 'exercise', explanation: 'do more exercise意为"多锻炼"。' },
      { id: 'p103q20', type: '词汇填空', score: 2, text: 'I am h____（高兴的）today.', answer: 'happy', explanation: 'happy意为"高兴的"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p103q21', type: '单项选择', score: 2, text: '—How do you feel? —I ____ sad.', options: ['A. feel', 'B. feels', 'C. feeling', 'D. to feel'], answer: 0, explanation: 'I用动词原形feel。' },
      { id: 'p103q22', type: '单项选择', score: 2, text: 'He ____ angry.', options: ['A. feel', 'B. feels', 'C. feeling', 'D. to feel'], answer: 1, explanation: 'He是第三人称单数，用feels。' },
      { id: 'p103q23', type: '单项选择', score: 2, text: 'You ____ see a doctor.', options: ['A. should', 'B. shall', 'C. can', 'D. may'], answer: 0, explanation: 'should意为"应该"，表示建议。' },
      { id: 'p103q24', type: '单项选择', score: 2, text: 'She should ____ a deep breath.', options: ['A. take', 'B. takes', 'C. taking', 'D. to take'], answer: 0, explanation: 'should后面接动词原形take。' },
      { id: 'p103q25', type: '单项选择', score: 2, text: '—What\'s wrong ____ you? —I am ill.', options: ['A. to', 'B. with', 'C. for', 'D. of'], answer: 1, explanation: 'What\'s wrong with you?意为"你怎么了？"是固定搭配。' },
      { id: 'p103q26', type: '单项选择', score: 2, text: 'Don\'t ____ worried.', options: ['A. be', 'B. is', 'C. are', 'D. am'], answer: 0, explanation: 'Don\'t后面接动词原形be。' },
      { id: 'p103q27', type: '单项选择', score: 2, text: 'The mouse is ____ of the cat.', options: ['A. angry', 'B. sad', 'C. afraid', 'D. happy'], answer: 2, explanation: 'afraid of意为"害怕"，老鼠怕猫。' },
      { id: 'p103q28', type: '单项选择', score: 2, text: 'He should ____ more exercise.', options: ['A. do', 'B. does', 'C. doing', 'D. to do'], answer: 0, explanation: 'should后面接动词原形do。' },
      { id: 'p103q29', type: '单项选择', score: 2, text: 'She is ill. She should go to ____ hospital.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 2, explanation: 'go to the hospital意为"去医院"，是固定搭配。' },
      { id: 'p103q30', type: '单项选择', score: 2, text: '—How ____ Sarah feel? —She feels happy.', options: ['A. do', 'B. does', 'C. is', 'D. are'], answer: 1, explanation: 'Sarah是第三人称单数，用does。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p103q31', type: '阅读理解', score: 5, text: '阅读短文回答：How does Sarah feel?', passage: 'It is a cold day. Sarah is not feeling well. She is ill. She has a cold. She should see a doctor and drink more water. Her mother is worried about her. Her father tells her to take some medicine and have a good rest. Her little brother is happy because he can play at home. Sarah should stay in bed and get well soon.', answer: 'She feels ill. / She is ill.', explanation: '从原文"She is ill. She has a cold"得知。' },
      { id: 'p103q32', type: '阅读理解', score: 5, text: '阅读短文回答：How does Sarah\'s mother feel?', passage: 'It is a cold day. Sarah is not feeling well. She is ill. She has a cold. She should see a doctor and drink more water. Her mother is worried about her. Her father tells her to take some medicine and have a good rest. Her little brother is happy because he can play at home. Sarah should stay in bed and get well soon.', answer: 'She feels worried. / She is worried about Sarah.', explanation: '从原文"Her mother is worried about her"得知。' },
      { id: 'p103q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Sarah\'s little brother is sad.', passage: 'It is a cold day. Sarah is not feeling well. She is ill. She has a cold. She should see a doctor and drink more water. Her mother is worried about her. Her father tells her to take some medicine and have a good rest. Her little brother is happy because he can play at home. Sarah should stay in bed and get well soon.', answer: 'F', explanation: '原文说"Her little brother is happy"，不是sad。' },
      { id: 'p103q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Sarah should see a doctor.', passage: 'It is a cold day. Sarah is not feeling well. She is ill. She has a cold. She should see a doctor and drink more water. Her mother is worried about her. Her father tells her to take some medicine and have a good rest. Her little brother is happy because he can play at home. Sarah should stay in bed and get well soon.', answer: 'T', explanation: '原文说"She should see a doctor"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p103q35', type: '写作', score: 20, text: '请用英语写一段话，描述你或你的朋友今天的感受以及应该怎么做（不少于5句话）。提示：How do you feel? What\'s wrong? What should you do?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型How do you feel? I feel... What\'s wrong? You should...等。' }
    ]
  },

  /* ============================== 六年级英语下册第一单元 单元卷 ============================== */
  {
    id: 'p104',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语下册第一单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p104q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. taller', 'B. shorter', 'C. longer', 'D. smaller'], answer: 0, explanation: '听力考查核心词汇taller（更高的）。' },
      { id: 'p104q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. thinner', 'B. heavier', 'C. bigger', 'D. older'], answer: 1, explanation: '听力考查核心词汇heavier（更重的）。' },
      { id: 'p104q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：I\'m 1.65 metres tall.', options: ['A. 我身高1.65米', 'B. 我体重1.65千克', 'C. 我身高1.56米', 'D. 我体重65千克'], answer: 0, explanation: '1.65 metres tall意为"身高1.65米"。' },
      { id: 'p104q4', type: '听力选择', score: 2, text: '选出正确的答语：How tall are you?', options: ['A. I\'m 1.60 metres.', 'B. I\'m 50 kilograms.', 'C. I\'m 12 years old.', 'D. Yes, I am.'], answer: 0, explanation: 'How tall问身高，回答I\'m 1.60 metres。' },
      { id: 'p104q5', type: '听力选择', score: 2, text: '选出正确的答语：How heavy are you?', options: ['A. I\'m 1.50 metres.', 'B. I\'m 45 kilograms.', 'C. I\'m 11 years old.', 'D. Yes, I am.'], answer: 1, explanation: 'How heavy问体重，回答I\'m 45 kilograms。' },
      { id: 'p104q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I\'m taller than you.', 'B. I\'m shorter than you.', 'C. I\'m heavier than you.', 'D. I\'m thinner than you.'], answer: 0, explanation: '听力考查比较级句型I\'m taller than you。' },
      { id: 'p104q7', type: '听力选择', score: 2, text: '选出正确的答语：Who is taller, Tom or Jack?', options: ['A. Tom is taller.', 'B. Tom is 1.60 metres.', 'C. Tom is 12.', 'D. Yes, Tom is.'], answer: 0, explanation: 'Who问两者比较，回答Tom is taller。' },
      { id: 'p104q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. metre', 'B. kilogram', 'C. centimetre', 'D. millimetre'], answer: 0, explanation: '听力考查核心词汇metre（米）。' },
      { id: 'p104q9', type: '听力选择', score: 2, text: '选出正确的答语：How old are you?', options: ['A. I\'m 12 years old.', 'B. I\'m 1.55 metres.', 'C. I\'m 42 kilograms.', 'D. I\'m fine.'], answer: 0, explanation: 'How old问年龄，回答I\'m 12 years old。' },
      { id: 'p104q10', type: '听力选择', score: 2, text: '选出你所听到的比较级：', options: ['A. bigger and bigger', 'B. taller and taller', 'C. smaller and smaller', 'D. longer and longer'], answer: 1, explanation: '听力考查taller and taller（越来越高）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p104q11', type: '词汇填空', score: 2, text: 'I\'m 1.65 m____（米）tall.', answer: 'metres', explanation: 'metres意为"米"，用于身高。' },
      { id: 'p104q12', type: '词汇填空', score: 2, text: 'She is 48 k____（千克）.', answer: 'kilograms', explanation: 'kilograms意为"千克"，用于体重。' },
      { id: 'p104q13', type: '词汇填空', score: 2, text: 'Tom is t____（更高）than Jerry.', answer: 'taller', explanation: 'taller是tall的比较级，意为"更高的"。' },
      { id: 'p104q14', type: '词汇填空', score: 2, text: 'This box is h____（更重）than that one.', answer: 'heavier', explanation: 'heavier是heavy的比较级，意为"更重的"。' },
      { id: 'p104q15', type: '词汇填空', score: 2, text: 'My pencil is l____（更长）than yours.', answer: 'longer', explanation: 'longer是long的比较级，意为"更长的"。' },
      { id: 'p104q16', type: '词汇填空', score: 2, text: 'She is s____（更矮）than her sister.', answer: 'shorter', explanation: 'shorter是short的比较级，意为"更矮的/更短的"。' },
      { id: 'p104q17', type: '词汇填空', score: 2, text: 'The elephant is b____（更大）than the mouse.', answer: 'bigger', explanation: 'bigger是big的比较级，意为"更大的"。' },
      { id: 'p104q18', type: '词汇填空', score: 2, text: 'He is t____（更瘦）than before.', answer: 'thinner', explanation: 'thinner是thin的比较级，意为"更瘦的"。' },
      { id: 'p104q19', type: '词汇填空', score: 2, text: 'I\'m o____（更大）than my sister.', answer: 'older', explanation: 'older是old的比较级，意为"更大的（年龄）"。' },
      { id: 'p104q20', type: '词汇填空', score: 2, text: 'My hands are s____（更小）than his.', answer: 'smaller', explanation: 'smaller是small的比较级，意为"更小的"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p104q21', type: '单项选择', score: 2, text: 'I\'m 1.60 metres. You\'re 1.55 metres. I\'m ____ than you.', options: ['A. taller', 'B. shorter', 'C. heavier', 'D. thinner'], answer: 0, explanation: '1.60>1.55，所以更高，用taller。' },
      { id: 'p104q22', type: '单项选择', score: 2, text: 'She is 50 kg. I am 45 kg. She is ____ than me.', options: ['A. taller', 'B. shorter', 'C. heavier', 'D. thinner'], answer: 2, explanation: '50>45，体重更大，用heavier。' },
      { id: 'p104q23', type: '单项选择', score: 2, text: '—How ____ are you? —I\'m 1.55 metres.', options: ['A. old', 'B. tall', 'C. heavy', 'D. long'], answer: 1, explanation: '回答身高用How tall。' },
      { id: 'p104q24', type: '单项选择', score: 2, text: '—How ____ are you? —I\'m 48 kilograms.', options: ['A. old', 'B. tall', 'C. heavy', 'D. long'], answer: 2, explanation: '回答体重用How heavy。' },
      { id: 'p104q25', type: '单项选择', score: 2, text: 'Tom is ____ than Jerry. (Tom: 12岁, Jerry: 11岁)', options: ['A. older', 'B. younger', 'C. taller', 'D. shorter'], answer: 0, explanation: '12>11，年龄更大，用older。' },
      { id: 'p104q26', type: '单项选择', score: 2, text: 'This ruler is 20 cm. That ruler is 15 cm. This ruler is ____ than that one.', options: ['A. shorter', 'B. longer', 'C. bigger', 'D. smaller'], answer: 1, explanation: '20>15，更长的，用longer。' },
      { id: 'p104q27', type: '单项选择', score: 2, text: 'My shoes are size 38. Your shoes are size 40. My shoes are ____ than yours.', options: ['A. bigger', 'B. smaller', 'C. longer', 'D. shorter'], answer: 1, explanation: '38<40，鞋码更小，用smaller。' },
      { id: 'p104q28', type: '单项选择', score: 2, text: 'The blue whale is the ____ animal in the world.', options: ['A. big', 'B. bigger', 'C. biggest', 'D. more big'], answer: 2, explanation: '三者及以上用最高级biggest。' },
      { id: 'p104q29', type: '单项选择', score: 2, text: 'He is 1.70 metres. I am 1.60 metres. He is 0.1 metres ____ than me.', options: ['A. tall', 'B. taller', 'C. tallest', 'D. more tall'], answer: 1, explanation: '两者比较用比较级taller。' },
      { id: 'p104q30', type: '单项选择', score: 2, text: '—How tall is Chen Jie? —She is ____.', options: ['A. 42 kilograms', 'B. 1.55 metres', 'C. 12 years old', 'D. Size 36'], answer: 1, explanation: '问身高，回答1.55 metres。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p104q31', type: '阅读理解', score: 5, text: '阅读短文回答：Who is taller, Wu Yifan or Mike?', passage: 'Wu Yifan and Mike are good friends. Wu Yifan is 12 years old. He is 1.64 metres tall. He is 48 kilograms. Mike is 11 years old. He is 1.60 metres tall. He is 45 kilograms. Wu Yifan is older and taller than Mike. Mike is shorter and younger than Wu Yifan. But Mike\'s feet are bigger. Mike wears size 40 shoes. Wu Yifan wears size 37 shoes.', answer: 'Wu Yifan is taller than Mike.', explanation: '1.64>1.60，Wu Yifan更高。' },
      { id: 'p104q32', type: '阅读理解', score: 5, text: '阅读短文回答：Whose shoes are bigger?', passage: 'Wu Yifan and Mike are good friends. Wu Yifan is 12 years old. He is 1.64 metres tall. He is 48 kilograms. Mike is 11 years old. He is 1.60 metres tall. He is 45 kilograms. Wu Yifan is older and taller than Mike. Mike is shorter and younger than Wu Yifan. But Mike\'s feet are bigger. Mike wears size 40 shoes. Wu Yifan wears size 37 shoes.', answer: 'Mike\'s shoes are bigger.', explanation: '从原文"Mike\'s feet are bigger"和"Mike wears size 40 shoes"得知。' },
      { id: 'p104q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Mike is heavier than Wu Yifan.', passage: 'Wu Yifan and Mike are good friends. Wu Yifan is 12 years old. He is 1.64 metres tall. He is 48 kilograms. Mike is 11 years old. He is 1.60 metres tall. He is 45 kilograms. Wu Yifan is older and taller than Mike. Mike is shorter and younger than Wu Yifan. But Mike\'s feet are bigger. Mike wears size 40 shoes. Wu Yifan wears size 37 shoes.', answer: 'F', explanation: 'Wu Yifan 48kg > Mike 45kg，Wu Yifan更重，不是Mike。' },
      { id: 'p104q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Wu Yifan is older than Mike.', passage: 'Wu Yifan and Mike are good friends. Wu Yifan is 12 years old. He is 1.64 metres tall. He is 48 kilograms. Mike is 11 years old. He is 1.60 metres tall. He is 45 kilograms. Wu Yifan is older and taller than Mike. Mike is shorter and younger than Wu Yifan. But Mike\'s feet are bigger. Mike wears size 40 shoes. Wu Yifan wears size 37 shoes.', answer: 'T', explanation: '12>11，Wu Yifan比Mike大，判断正确。' },

      // 五、写作（共20分）
      { id: 'p104q35', type: '写作', score: 20, text: '请用英语写一段话，比较你和你的好朋友（不少于5句话）。提示：How tall are you? How heavy are you? Who is taller/thinner/older?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型How tall/heavy are you? I\'m ... metres/kilograms. ...taller/shorter/heavier/thinner than...等。' }
    ]
  },

  /* ============================== 六年级英语下册第二单元 单元卷 ============================== */
  {
    id: 'p105',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语下册第二单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p105q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. washed', 'B. watched', 'C. cleaned', 'D. stayed'], answer: 0, explanation: '听力考查核心词汇washed（洗，过去式）。' },
      { id: 'p105q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. visited', 'B. played', 'C. studied', 'D. lived'], answer: 0, explanation: '听力考查核心词汇visited（拜访，过去式）。' },
      { id: 'p105q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：I watched TV last weekend.', options: ['A. 上周末看电视', 'B. 上周末看电影', 'C. 这周末看电视', 'D. 上周末看书'], answer: 0, explanation: 'watched TV last weekend意为"上周末看电视"。' },
      { id: 'p105q4', type: '听力选择', score: 2, text: '选出正确的答语：What did you do last weekend?', options: ['A. I played football.', 'B. I play football.', 'C. I\'m playing football.', 'D. I\'m going to play football.'], answer: 0, explanation: 'What did you do?问过去做的事，回答I played football。' },
      { id: 'p105q5', type: '听力选择', score: 2, text: '选出正确的答语：Did you go swimming?', options: ['A. Yes, I did.', 'B. Yes, I do.', 'C. Yes, I am.', 'D. Yes, I can.'], answer: 0, explanation: 'Did you...?肯定回答Yes, I did。' },
      { id: 'p105q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I stayed at home last weekend.', 'B. I went to the park last weekend.', 'C. I watched TV last weekend.', 'D. I cleaned the room last weekend.'], answer: 0, explanation: '听力考查过去时态I stayed at home last weekend。' },
      { id: 'p105q7', type: '听力选择', score: 2, text: '选出正确的答语：How was your weekend?', options: ['A. It was good.', 'B. I am fine.', 'C. Yes, it was.', 'D. I played football.'], answer: 0, explanation: 'How was your weekend?问周末过得怎样，回答It was good。' },
      { id: 'p105q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. yesterday', 'B. tomorrow', 'C. today', 'D. tonight'], answer: 0, explanation: '听力考查核心词汇yesterday（昨天）。' },
      { id: 'p105q9', type: '听力选择', score: 2, text: '选出正确的答语：Did she read a book yesterday?', options: ['A. Yes, she did.', 'B. Yes, she does.', 'C. Yes, she is.', 'D. She read a book.'], answer: 0, explanation: 'Did she...?肯定回答Yes, she did。' },
      { id: 'p105q10', type: '听力选择', score: 2, text: '选出你所听到的过去式：', options: ['A. went', 'B. did', 'C. was', 'D. had'], answer: 0, explanation: '听力考查went（go的过去式）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p105q11', type: '词汇填空', score: 2, text: 'I w____（看）TV last night.', answer: 'watched', explanation: 'watched是watch的过去式。' },
      { id: 'p105q12', type: '词汇填空', score: 2, text: 'She c____（打扫）her room yesterday.', answer: 'cleaned', explanation: 'cleaned是clean的过去式。' },
      { id: 'p105q13', type: '词汇填空', score: 2, text: 'He w____（洗）his clothes last weekend.', answer: 'washed', explanation: 'washed是wash的过去式。' },
      { id: 'p105q14', type: '词汇填空', score: 2, text: 'We v____（拜访）our grandparents last Sunday.', answer: 'visited', explanation: 'visited是visit的过去式。' },
      { id: 'p105q15', type: '词汇填空', score: 2, text: 'She s____（待在）at home yesterday.', answer: 'stayed', explanation: 'stayed是stay的过去式。' },
      { id: 'p105q16', type: '词汇填空', score: 2, text: 'I p____（玩）football with my friends last weekend.', answer: 'played', explanation: 'played是play的过去式。' },
      { id: 'p105q17', type: '词汇填空', score: 2, text: 'They w____（去）to the park yesterday.', answer: 'went', explanation: 'went是go的过去式。' },
      { id: 'p105q18', type: '词汇填空', score: 2, text: 'She r____（读）a book last night.', answer: 'read', explanation: 'read的过去式仍是read，但发音不同。' },
      { id: 'p105q19', type: '词汇填空', score: 2, text: 'Did you h____（有）a good time?', answer: 'have', explanation: 'Did后面接动词原形have。' },
      { id: 'p105q20', type: '词汇填空', score: 2, text: 'My weekend w____（是）very good.', answer: 'was', explanation: 'was是is的过去式。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p105q21', type: '单项选择', score: 2, text: '—What did you do last weekend? —I ____ my room.', options: ['A. clean', 'B. cleaned', 'C. cleaning', 'D. cleans'], answer: 1, explanation: '问过去做的事，用过去式cleaned。' },
      { id: 'p105q22', type: '单项选择', score: 2, text: '—Did you watch TV? —____, I didn\'t.', options: ['A. Yes', 'B. No', 'C. Not', 'D. OK'], answer: 1, explanation: '否定回答用No, I didn\'t。' },
      { id: 'p105q23', type: '单项选择', score: 2, text: 'He ____ to the cinema yesterday.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 2, explanation: 'yesterday表示过去，用过去式went。' },
      { id: 'p105q24', type: '单项选择', score: 2, text: 'She ____ at home and watched TV last Sunday.', options: ['A. stay', 'B. stays', 'C. stayed', 'D. staying'], answer: 2, explanation: 'last Sunday表示过去，用过去式stayed。' },
      { id: 'p105q25', type: '单项选择', score: 2, text: '—How ____ your weekend? —It was great.', options: ['A. is', 'B. was', 'C. are', 'D. were'], answer: 1, explanation: '问过去的情况，用was。' },
      { id: 'p105q26', type: '单项选择', score: 2, text: 'I played football ____ my friends.', options: ['A. and', 'B. with', 'C. to', 'D. for'], answer: 1, explanation: 'with意为"和……一起"。' },
      { id: 'p105q27', type: '单项选择', score: 2, text: 'Did she ____ a book last night?', options: ['A. read', 'B. reads', 'C. readed', 'D. reading'], answer: 0, explanation: 'Did后面接动词原形read。' },
      { id: 'p105q28', type: '单项选择', score: 2, text: 'They ____ swimming last weekend.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 2, explanation: 'last weekend表示过去，用过去式went。' },
      { id: 'p105q29', type: '单项选择', score: 2, text: 'I ____ a cold yesterday.', options: ['A. have', 'B. has', 'C. had', 'D. having'], answer: 2, explanation: 'yesterday表示过去，用过去式had。' },
      { id: 'p105q30', type: '单项选择', score: 2, text: '—What did you do ____ weekend? —I visited my grandparents.', options: ['A. this', 'B. next', 'C. last', 'D. that'], answer: 2, explanation: '问过去的周末用last weekend。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p105q31', type: '阅读理解', score: 5, text: '阅读短文回答：What did Amy do last Saturday?', passage: 'Last weekend was fun. On Saturday morning, I cleaned my room. In the afternoon, I played football with my friends. On Sunday morning, I visited my grandparents. In the afternoon, I watched TV at home. I also read a book in the evening. It was a busy but happy weekend!', answer: 'She cleaned her room in the morning and played football with her friends in the afternoon.', explanation: '从原文"On Saturday morning, I cleaned my room. In the afternoon, I played football with my friends"得知。' },
      { id: 'p105q32', type: '阅读理解', score: 5, text: '阅读短文回答：What did Amy do last Sunday morning?', passage: 'Last weekend was fun. On Saturday morning, I cleaned my room. In the afternoon, I played football with my friends. On Sunday morning, I visited my grandparents. In the afternoon, I watched TV at home. I also read a book in the evening. It was a busy but happy weekend!', answer: 'She visited her grandparents.', explanation: '从原文"On Sunday morning, I visited my grandparents"得知。' },
      { id: 'p105q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy went to the park last Sunday afternoon.', passage: 'Last weekend was fun. On Saturday morning, I cleaned my room. In the afternoon, I played football with my friends. On Sunday morning, I visited my grandparents. In the afternoon, I watched TV at home. I also read a book in the evening. It was a busy but happy weekend!', answer: 'F', explanation: '原文说Sunday afternoon她watched TV at home，不是去公园。' },
      { id: 'p105q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：Amy read a book last Sunday evening.', passage: 'Last weekend was fun. On Saturday morning, I cleaned my room. In the afternoon, I played football with my friends. On Sunday morning, I visited my grandparents. In the afternoon, I watched TV at home. I also read a book in the evening. It was a busy but happy weekend!', answer: 'T', explanation: '原文说"I also read a book in the evening"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p105q35', type: '写作', score: 20, text: '请用英语写一段话，描述你上个周末做了什么（不少于5句话）。提示：What did you do last weekend? How was your weekend? Did you...?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型What did you do last weekend? I + 过去式. Did you...? Yes, I did. / No, I didn\'t.等。' }
    ]
  },

  /* ============================== 六年级英语下册第三单元 单元卷 ============================== */
  {
    id: 'p106',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语下册第三单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p106q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. rode', 'B. went', 'C. took', 'D. ate'], answer: 0, explanation: '听力考查核心词汇rode（骑，ride过去式）。' },
      { id: 'p106q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. beach', 'B. lake', 'C. forest', 'D. mountain'], answer: 0, explanation: '听力考查核心词汇beach（海滩）。' },
      { id: 'p106q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：I went to Sanya last holiday.', options: ['A. 上个假期去了三亚', 'B. 上个假期去了北京', 'C. 这个假期去了三亚', 'D. 上个假期去了上海'], answer: 0, explanation: 'went to Sanya last holiday意为"上个假期去了三亚"。' },
      { id: 'p106q4', type: '听力选择', score: 2, text: '选出正确的答语：Where did you go last holiday?', options: ['A. I went to Beijing.', 'B. I go to Beijing.', 'C. I\'m going to Beijing.', 'D. By train.'], answer: 0, explanation: 'Where did you go?问过去去了哪里，回答I went to Beijing。' },
      { id: 'p106q5', type: '听力选择', score: 2, text: '选出正确的答语：How did you go there?', options: ['A. I went by plane.', 'B. I go by plane.', 'C. I\'m going by plane.', 'D. To Beijing.'], answer: 0, explanation: 'How did you go?问过去出行方式，回答I went by plane。' },
      { id: 'p106q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. I rode a bike last Saturday.', 'B. I rode a horse last Saturday.', 'C. I took pictures last Saturday.', 'D. I went camping last Saturday.'], answer: 0, explanation: '听力考查过去时态I rode a bike last Saturday。' },
      { id: 'p106q7', type: '听力选择', score: 2, text: '选出正确的答语：What did you do there?', options: ['A. I took pictures.', 'B. I go swimming.', 'C. I\'m reading.', 'D. Yes, I did.'], answer: 0, explanation: 'What did you do there?问在那里做了什么，回答I took pictures。' },
      { id: 'p106q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. bought', 'B. brought', 'C. caught', 'D. taught'], answer: 0, explanation: '听力考查核心词汇bought（买，buy过去式）。' },
      { id: 'p106q9', type: '听力选择', score: 2, text: '选出正确的答语：Did you go camping?', options: ['A. Yes, I did.', 'B. Yes, I do.', 'C. Yes, I am.', 'D. Yes, I can.'], answer: 0, explanation: 'Did you...?肯定回答Yes, I did。' },
      { id: 'p106q10', type: '听力选择', score: 2, text: '选出你所听到的过去式：', options: ['A. took pictures', 'B. bought gifts', 'C. ate food', 'D. went swimming'], answer: 2, explanation: '听力考查ate food（吃了食物）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p106q11', type: '词汇填空', score: 2, text: 'I r____（骑）a bike in the park yesterday.', answer: 'rode', explanation: 'rode是ride的过去式。' },
      { id: 'p106q12', type: '词汇填空', score: 2, text: 'We w____（去）camping last weekend.', answer: 'went', explanation: 'went是go的过去式。' },
      { id: 'p106q13', type: '词汇填空', score: 2, text: 'She t____（拍）many pictures on the trip.', answer: 'took', explanation: 'took是take的过去式。' },
      { id: 'p106q14', type: '词汇填空', score: 2, text: 'He a____（吃）fresh food in Sanya.', answer: 'ate', explanation: 'ate是eat的过去式。' },
      { id: 'p106q15', type: '词汇填空', score: 2, text: 'I b____（买）some gifts for my friends.', answer: 'bought', explanation: 'bought是buy的过去式。' },
      { id: 'p106q16', type: '词汇填空', score: 2, text: 'We went to the b____（海滩）and swam in the sea.', answer: 'beach', explanation: 'beach意为"海滩"。' },
      { id: 'p106q17', type: '词汇填空', score: 2, text: 'She r____（骑）a horse on the farm.', answer: 'rode', explanation: 'rode a horse意为"骑马"，rode是ride的过去式。' },
      { id: 'p106q18', type: '词汇填空', score: 2, text: 'They went f____（钓鱼）by the lake.', answer: 'fishing', explanation: 'go fishing意为"去钓鱼"。' },
      { id: 'p106q19', type: '词汇填空', score: 2, text: 'I w____（走）to the mountain yesterday.', answer: 'walked', explanation: 'walked是walk的过去式。' },
      { id: 'p106q20', type: '词汇填空', score: 2, text: 'Did you t____（乘坐）a train to Beijing?', answer: 'take', explanation: 'Did后面接动词原形take。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p106q21', type: '单项选择', score: 2, text: '—Where did you go last holiday? —I ____ to Hainan.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 2, explanation: '问过去去了哪里，用过去式went。' },
      { id: 'p106q22', type: '单项选择', score: 2, text: '—How did you go there? —I went ____ plane.', options: ['A. by', 'B. on', 'C. at', 'D. in'], answer: 0, explanation: 'by plane意为"乘飞机"。' },
      { id: 'p106q23', type: '单项选择', score: 2, text: 'She ____ a bike in the park yesterday.', options: ['A. ride', 'B. rides', 'C. rode', 'D. riding'], answer: 2, explanation: 'yesterday表示过去，用过去式rode。' },
      { id: 'p106q24', type: '单项选择', score: 2, text: 'He ____ some gifts for his family.', options: ['A. buy', 'B. buys', 'C. bought', 'D. buying'], answer: 2, explanation: '用过去式bought。' },
      { id: 'p106q25', type: '单项选择', score: 2, text: '—Did you take pictures? —____, I did.', options: ['A. No', 'B. Yes', 'C. Not', 'D. OK'], answer: 1, explanation: '肯定回答用Yes, I did。' },
      { id: 'p106q26', type: '单项选择', score: 2, text: 'We went ____ last weekend.', options: ['A. camp', 'B. camps', 'C. camping', 'D. camped'], answer: 2, explanation: 'go camping意为"去野营"，是固定搭配。' },
      { id: 'p106q27', type: '单项选择', score: 2, text: 'I ____ fresh food in Sanya.', options: ['A. eat', 'B. eats', 'C. ate', 'D. eating'], answer: 2, explanation: '用过去式ate。' },
      { id: 'p106q28', type: '单项选择', score: 2, text: 'They ____ to the beach and swam in the sea.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 2, explanation: '与swam并列，用过去式went。' },
      { id: 'p106q29', type: '单项选择', score: 2, text: 'She ____ a horse on the farm last Sunday.', options: ['A. ride', 'B. rides', 'C. rode', 'D. riding'], answer: 2, explanation: 'last Sunday表示过去，用过去式rode。' },
      { id: 'p106q30', type: '单项选择', score: 2, text: '—Where ____ you go last weekend? —I went to the park.', options: ['A. do', 'B. does', 'C. did', 'D. are'], answer: 2, explanation: '问过去的事用did。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p106q31', type: '阅读理解', score: 5, text: '阅读短文回答：Where did John go last holiday?', passage: 'Last summer holiday, I went to Sanya with my parents. We went there by plane. Sanya is far from my home. We went to the beach and swam in the sea. The water was warm and clean. I rode a bike along the beach. We also ate fresh seafood. It was delicious! I took many beautiful pictures. I bought some gifts for my friends, too. It was a great trip!', answer: 'He went to Sanya with his parents.', explanation: '从原文"I went to Sanya with my parents"得知。' },
      { id: 'p106q32', type: '阅读理解', score: 5, text: '阅读短文回答：How did John go to Sanya?', passage: 'Last summer holiday, I went to Sanya with my parents. We went there by plane. Sanya is far from my home. We went to the beach and swam in the sea. The water was warm and clean. I rode a bike along the beach. We also ate fresh seafood. It was delicious! I took many beautiful pictures. I bought some gifts for my friends, too. It was a great trip!', answer: 'He went there by plane.', explanation: '从原文"We went there by plane"得知。' },
      { id: 'p106q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：John went to Sanya by train.', passage: 'Last summer holiday, I went to Sanya with my parents. We went there by plane. Sanya is far from my home. We went to the beach and swam in the sea. The water was warm and clean. I rode a bike along the beach. We also ate fresh seafood. It was delicious! I took many beautiful pictures. I bought some gifts for my friends, too. It was a great trip!', answer: 'F', explanation: '原文说"We went there by plane"，不是by train。' },
      { id: 'p106q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：John bought gifts for his friends.', passage: 'Last summer holiday, I went to Sanya with my parents. We went there by plane. Sanya is far from my home. We went to the beach and swam in the sea. The water was warm and clean. I rode a bike along the beach. We also ate fresh seafood. It was delicious! I took many beautiful pictures. I bought some gifts for my friends, too. It was a great trip!', answer: 'T', explanation: '原文说"I bought some gifts for my friends, too"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p106q35', type: '写作', score: 20, text: '请用英语写一段话，描述你上次旅行的经历（不少于5句话）。提示：Where did you go? How did you go? What did you do there?', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型Where did you go? I went to... How did you go? I went by... What did you do? I + 过去式等。' }
    ]
  },

  /* ============================== 六年级英语下册第四单元 单元卷 ============================== */
  {
    id: 'p107',
    subject: '英语',
    grade: '六年级',
    type: '单元卷',
    region: '全国',
    title: '人教版六年级英语下册第四单元测试卷',
    totalScore: 100,
    timeLimit: 40,
    questions: [
      // 一、听力选择（笔试形式，每题2分，共20分）
      { id: 'p107q1', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. before', 'B. after', 'C. now', 'D. then'], answer: 0, explanation: '听力考查核心词汇before（以前）。' },
      { id: 'p107q2', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. different', 'B. difference', 'C. difficult', 'D. dinosaur'], answer: 0, explanation: '听力考查核心词汇different（不同的）。' },
      { id: 'p107q3', type: '听力选择', score: 2, text: '选出与所听内容相符的选项：There was no library in my old school.', options: ['A. 旧学校没有图书馆', 'B. 旧学校有图书馆', 'C. 新学校没有图书馆', 'D. 现在没有图书馆'], answer: 0, explanation: 'There was no library意为"没有图书馆"。' },
      { id: 'p107q4', type: '听力选择', score: 2, text: '选出正确的答语：What was your school like before?', options: ['A. It was small.', 'B. It is big.', 'C. Yes, it was.', 'D. I like it.'], answer: 0, explanation: 'What was...like before?问以前的样子，回答It was small。' },
      { id: 'p107q5', type: '听力选择', score: 2, text: '选出正确的答语：Could you ride a bike before?', options: ['A. Yes, I could.', 'B. Yes, I can.', 'C. Yes, I do.', 'D. Yes, I did.'], answer: 0, explanation: 'Could you...?肯定回答Yes, I could。' },
      { id: 'p107q6', type: '听力选择', score: 2, text: '选出你所听到的句子：', options: ['A. There were no computers before.', 'B. There was no gym before.', 'C. There were no libraries before.', 'D. There was no dining hall before.'], answer: 0, explanation: '听力考查There were no...before句型。' },
      { id: 'p107q7', type: '听力选择', score: 2, text: '选出正确的答语：How do you know that?', options: ['A. I looked it up on the Internet.', 'B. I know.', 'C. Yes, I do.', 'D. It is true.'], answer: 0, explanation: 'How问方式，回答I looked it up on the Internet。' },
      { id: 'p107q8', type: '听力选择', score: 2, text: '选出你所听到的单词：', options: ['A. Internet', 'B. computer', 'C. calculator', 'D. telephone'], answer: 0, explanation: '听力考查核心词汇Internet（互联网）。' },
      { id: 'p107q9', type: '听力选择', score: 2, text: '选出正确的答语：Is there a gym in your school now?', options: ['A. Yes, there is.', 'B. Yes, there was.', 'C. No, there isn\'t.', 'D. Yes, it is.'], answer: 0, explanation: 'Is there...now?现在的情况，肯定回答Yes, there is。' },
      { id: 'p107q10', type: '听力选择', score: 2, text: '选出你所听到的变化描述：', options: ['A. Now I love to ice-skate.', 'B. Now I love to swim.', 'C. Now I love to ride a bike.', 'D. Now I love to play badminton.'], answer: 0, explanation: '听力考查Now I love to ice-skate（现在我喜欢滑冰）。' },

      // 二、词汇填空（每题2分，共20分）
      { id: 'p107q11', type: '词汇填空', score: 2, text: 'There w____（有）no gym in my old school.', answer: 'was', explanation: 'There was意为"过去有"，用于单数。' },
      { id: 'p107q12', type: '词汇填空', score: 2, text: 'There w____（有）no computers before.', answer: 'were', explanation: 'There were意为"过去有"，用于复数。' },
      { id: 'p107q13', type: '词汇填空', score: 2, text: 'Now, there is a g____（体育馆）in our school.', answer: 'gym', explanation: 'gym意为"体育馆"。' },
      { id: 'p107q14', type: '词汇填空', score: 2, text: 'We didn\'t have a l____（图书馆）before.', answer: 'library', explanation: 'library意为"图书馆"。' },
      { id: 'p107q15', type: '词汇填空', score: 2, text: 'I looked it up on the I____（互联网）.', answer: 'Internet', explanation: 'on the Internet意为"在网上"。' },
      { id: 'p107q16', type: '词汇填空', score: 2, text: 'B____（以前）, I couldn\'t ride a bike.', answer: 'Before', explanation: 'Before意为"以前"，用于过去时态。' },
      { id: 'p107q17', type: '词汇填空', score: 2, text: 'Now I can play b____（羽毛球）.', answer: 'badminton', explanation: 'play badminton意为"打羽毛球"。' },
      { id: 'p107q18', type: '词汇填空', score: 2, text: 'At that time, there were no c____（电脑）.', answer: 'computers', explanation: 'computers意为"电脑"，复数形式。' },
      { id: 'p107q19', type: '词汇填空', score: 2, text: 'The school is d____（不同的）now.', answer: 'different', explanation: 'different意为"不同的"。' },
      { id: 'p107q20', type: '词汇填空', score: 2, text: 'People didn\'t use the I____（互联网）before.', answer: 'Internet', explanation: 'Internet意为"互联网"。' },

      // 三、单项选择（每题2分，共20分）
      { id: 'p107q21', type: '单项选择', score: 2, text: 'There ____ no library in my old school.', options: ['A. is', 'B. are', 'C. was', 'D. were'], answer: 2, explanation: '过去的事，单数用There was。' },
      { id: 'p107q22', type: '单项选择', score: 2, text: 'There ____ no computers before.', options: ['A. is', 'B. are', 'C. was', 'D. were'], answer: 3, explanation: '过去的事，复数用There were。' },
      { id: 'p107q23', type: '单项选择', score: 2, text: '—Could you swim before? —No, I ____.', options: ['A. can\'t', 'B. couldn\'t', 'C. don\'t', 'D. didn\'t'], answer: 1, explanation: 'Could you...?否定回答No, I couldn\'t。' },
      { id: 'p107q24', type: '单项选择', score: 2, text: 'Now I ____ ice-skate.', options: ['A. can', 'B. could', 'C. am', 'D. do'], answer: 0, explanation: 'Now表示现在，用can。' },
      { id: 'p107q25', type: '单项选择', score: 2, text: 'Before, I ____ short. Now, I ____ tall.', options: ['A. am; am', 'B. was; am', 'C. were; am', 'D. was; was'], answer: 1, explanation: 'Before用was（过去），Now用am（现在）。' },
      { id: 'p107q26', type: '单项选择', score: 2, text: 'There is a dining hall in our school ____.', options: ['A. before', 'B. now', 'C. last year', 'D. yesterday'], answer: 1, explanation: 'There is表示现在有，搭配now。' },
      { id: 'p107q27', type: '单项选择', score: 2, text: 'I looked it ____ on the Internet.', options: ['A. at', 'B. for', 'C. up', 'D. after'], answer: 2, explanation: 'look up意为"查阅"，是固定搭配。' },
      { id: 'p107q28', type: '单项选择', score: 2, text: 'My school is ____ now.', options: ['A. different', 'B. difference', 'C. same', 'D. big'], answer: 0, explanation: 'different意为"不同的"，描述学校的变化。' },
      { id: 'p107q29', type: '单项选择', score: 2, text: '—What was your school like before? —It ____ small.', options: ['A. is', 'B. was', 'C. are', 'D. were'], answer: 1, explanation: '问过去的情况，用was回答。' },
      { id: 'p107q30', type: '单项选择', score: 2, text: 'At that time, people ____ go by bus.', options: ['A. can', 'B. could', 'C. can\'t', 'D. couldn\'t'], answer: 3, explanation: 'At that time表示过去，couldn\'t表示过去不能。' },

      // 四、阅读理解（每题5分，共20分）
      { id: 'p107q31', type: '阅读理解', score: 5, text: '阅读短文回答：What was Grandpa\'s school like before?', passage: 'My grandpa told me about his old school. Before, there was no library in his school. There were no computers or Internet at that time. There was only one small building. The students could not look up things on the Internet. They could only read books. Now, my school is different. There is a big library. There are many computers. We can look up things on the Internet easily. I love my school!', answer: 'It was small. There was no library, no computers or Internet. There was only one small building.', explanation: '从原文提取信息：no library, no computers, no Internet, only one small building。' },
      { id: 'p107q32', type: '阅读理解', score: 5, text: '阅读短文回答：What is the writer\'s school like now?', passage: 'My grandpa told me about his old school. Before, there was no library in his school. There were no computers or Internet at that time. There was only one small building. The students could not look up things on the Internet. They could only read books. Now, my school is different. There is a big library. There are many computers. We can look up things on the Internet easily. I love my school!', answer: 'There is a big library and many computers. Students can look up things on the Internet easily.', explanation: '从原文"There is a big library. There are many computers."得知。' },
      { id: 'p107q33', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：There were computers in Grandpa\'s old school.', passage: 'My grandpa told me about his old school. Before, there was no library in his school. There were no computers or Internet at that time. There was only one small building. The students could not look up things on the Internet. They could only read books. Now, my school is different. There is a big library. There are many computers. We can look up things on the Internet easily. I love my school!', answer: 'F', explanation: '原文说"There were no computers or Internet at that time"，过去没有电脑。' },
      { id: 'p107q34', type: '阅读理解', score: 5, text: '阅读短文判断(T/F)：The writer loves his/her school now.', passage: 'My grandpa told me about his old school. Before, there was no library in his school. There were no computers or Internet at that time. There was only one small building. The students could not look up things on the Internet. They could only read books. Now, my school is different. There is a big library. There are many computers. We can look up things on the Internet easily. I love my school!', answer: 'T', explanation: '原文说"I love my school!"，判断正确。' },

      // 五、写作（共20分）
      { id: 'p107q35', type: '写作', score: 20, text: '请用英语写一段话，描述你学校过去和现在的变化（不少于5句话）。提示：Before, there was/were no... Now, there is/are... I couldn\'t... before. Now I can...', answer: '评分标准：内容完整8分，语法正确6分，句式多样4分，书写规范2分。', explanation: '运用本单元核心句型There was/were... Before, I was/couldn\'t... Now, I am/can...进行过去与现在对比。' }
    ]
  }

];