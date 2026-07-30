/* 题库数据 - 人教版小学全科 (4-6年级) - 使用扩充后的题库 */
const APP_DATA = {
  chinese: CHINESE_QUESTIONS,
  math: MATH_QUESTIONS,
  english: ENGLISH_QUESTIONS,
  /* 电子课本目录 - 使用扩充后的课本数据 */
  textbooks: TEXTBOOKS_DATA,
  /* 素材库 */
  materials: {
    chinese: {
      name: '好词好句',
      items: [
        { title: '描写春天', content: '1. 春风又绿江南岸，明月何时照我还。\n2. 等闲识得东风面，万紫千红总是春。\n3. 春天像刚落地的娃娃，从头到脚都是新的。\n4. 春天是一幅多姿多彩的画卷。' },
        { title: '描写夏天', content: '1. 接天莲叶无穷碧，映日荷花别样红。\n2. 小荷才露尖尖角，早有蜻蜓立上头。\n3. 夏日炎炎，蝉鸣阵阵。\n4. 夏天是热情似火的季节。' },
        { title: '描写秋天', content: '1. 空山新雨后，天气晚来秋。\n2. 落霞与孤鹜齐飞，秋水共长天一色。\n3. 秋风萧瑟，洪波涌起。\n4. 秋天是收获的季节。' },
        { title: '描写冬天', content: '1. 忽如一夜春风来，千树万树梨花开。\n2. 墙角数枝梅，凌寒独自开。\n3. 千里冰封，万里雪飘。\n4. 冬天是银装素裹的世界。' },
        { title: '关于读书', content: '1. 书山有路勤为径，学海无涯苦作舟。\n2. 读书破万卷，下笔如有神。\n3. 书籍是人类进步的阶梯。\n4. 读一本好书，就是和许多高尚的人谈话。' },
        { title: '关于友谊', content: '1. 海内存知己，天涯若比邻。\n2. 桃花潭水深千尺，不及汪伦送我情。\n3. 君子之交淡如水。\n4. 真正的友谊是心灵的相通。' }
      ]
    },
    math: {
      name: '公式汇总',
      items: [
        { title: '基本数量关系', content: '单价×数量=总价\n总价÷单价=数量\n总价÷数量=单价\n\n速度×时间=路程\n路程÷速度=时间\n路程÷时间=速度\n\n工作效率×工作时间=工作总量\n工作总量÷工作效率=工作时间' },
        { title: '平面图形面积', content: '长方形：S=ab（长×宽）\n正方形：S=a²（边长²）\n平行四边形：S=ah（底×高）\n三角形：S=ah÷2（底×高÷2）\n梯形：S=(a+b)h÷2\n圆形：S=πr²' },
        { title: '立体图形公式', content: '长方体：V=abh，S=2(ab+ac+bc)\n正方体：V=a³，S=6a²\n圆柱：V=πr²h，S侧=2πrh，S全=2πr(r+h)\n圆锥：V=⅓πr²h' },
        { title: '分数与百分数', content: '分数乘法：分子×分子，分母×分母\n分数除法：除以一个数=乘以它的倒数\n百分数：表示一个数是另一个数的百分之几\n折扣：打几折=原价×（几/10）\n利率：利息=本金×利率×时间' },
        { title: '方程相关', content: '等式性质：\n1. 两边同加一个数，等式成立\n2. 两边同减一个数，等式成立\n3. 两边同乘一个数（0除外），等式成立\n4. 两边同除一个数（0除外），等式成立\n\n列方程步骤：审题→设未知数→列方程→解方程→检验' }
      ]
    },
    english: {
      name: '单词表',
      items: [
        { title: '高频动词', content: 'go-went-gone 去\ncome-came-come 来\nhave-had-had 有/吃/喝\ndo-did-done 做\nsay-said-said 说\nget-got-got 得到\nmake-made-made 制作\ntake-took-taken 拿/乘' },
        { title: '时间介词', content: 'in+年/月/季节：in 2024, in May, in spring\non+日期/星期：on Monday, on May 1st\nat+时刻：at 8:00, at noon\n\n固定搭配：\nin the morning/afternoon/evening\nat night/noon/midnight\non the weekend' },
        { title: '比较级规则', content: '1. 单音节+er：tall→taller\n2. 以e结尾+r：nice→nicer\n3. 重读闭音节双写+er：big→bigger\n4. 辅音字母+y→ier：happy→happier\n5. 多音节more+adj：more beautiful\n不规则：good→better, bad→worse, far→farther/further' },
        { title: '常用句型', content: '1. It takes sb some time to do sth.\n   某人花时间做某事\n2. spend time/money on sth (in) doing sth.\n   花费时间/金钱在某事上\n3. It\'s + adj + for sb + to do sth.\n   对某人来说做某事是...的\n4. not only... but also... 不但...而且...\n5. as...as... 和...一样...' }
      ]
    }
  },
  /* 激励语录 */
  quotes: [
    '每一个努力的今天，都是通往美好未来的铺路石 🌟',
    '慢慢来，比较快。坚持下去，你一定可以的！✨',
    '今天的汗水，是明天的花朵 🌸',
    '你比自己想象中更强大！加油！💪',
    '学习不是一件轻松的事，但它是最值得的事 📚',
    '每一个优秀的人，都有一段沉默的时光 ⏰',
    '不要着急，最好的总会在最不经意的时候出现 🌈',
    '相信自己，你就是那颗最闪亮的星 ⭐',
    '一步一步来，一切都在掌握之中 🚀',
    '今天的努力，会让明天的你感谢今天的自己 💖',
    '学习就像种花，耐心浇灌，终会绽放 🌱',
    '保持好奇心，世界会为你打开更多大门 🗝️',
    '错题不是终点，而是进步的起点 🎯',
    '坚持比聪明更重要，努力比天赋更可贵 🔥',
    '愿你笔下有星辰，心中有暖阳 ☀️'
  ],
  /* 成就系统 */
  achievements: [
    { id: 'first_checkin', icon: '🎯', name: '初次打卡', desc: '完成第一次学习打卡', unlocked: false },
    { id: 'week_streak', icon: '📅', name: '坚持一周', desc: '连续打卡7天', unlocked: false },
    { id: 'month_streak', icon: '🏆', name: '月度之星', desc: '连续打卡30天', unlocked: false },
    { id: 'all_subjects', icon: '📚', name: '全科达人', desc: '完成三科学习任务', unlocked: false },
    { id: 'paper_master', icon: '📝', name: '试卷高手', desc: '完成5套真题试卷', unlocked: false },
    { id: 'pomodoro_10', icon: '🍅', name: '专注达人', desc: '完成10个番茄钟', unlocked: false },
    { id: 'study_100h', icon: '⏰', name: '时间管理', desc: '累计学习100小时', unlocked: false },
    { id: 'perfect_score', icon: '💯', name: '完美表现', desc: '一套试卷获得满分', unlocked: false },
    { id: 'textbook_reader', icon: '📖', name: '博览群书', desc: '阅读完一本电子课本', unlocked: false },
    { id: 'widget_master', icon: '🎀', name: '收藏大师', desc: '上传10张收藏图片', unlocked: false }
  ]
};
