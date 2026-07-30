/* 英语题库数据 - 人教版小学英语 PEP (4-6年级)
 * 每个年级分"旧年级巩固"与"新学期预习"两部分，各50题左右
 * 题型：选择题、填空题、单词默写、阅读理解、连词成句、翻译题、改错题、情景交际
 */
const ENGLISH_QUESTIONS = {
  grade4: {
    旧年级巩固: [
      {
        id: "e4r1",
        type: "单词默写",
        difficulty: "★",
        text: "默写打招呼相关词汇：你好、嗨、再见、名字、朋友",
        answer: "hello, hi, goodbye, name, friend",
        explanation: "打招呼基础词汇，goodbye是再见。"
      },
      {
        id: "e4r2",
        type: "单词默写",
        difficulty: "★",
        text: "默写颜色：红、黄、绿、蓝、黑、白、橙、粉、紫、棕",
        answer: "red, yellow, green, blue, black, white, orange, pink, purple, brown",
        explanation: "颜色词，注意purple和orange的拼写。"
      },
      {
        id: "e4r3",
        type: "选择题",
        difficulty: "★",
        text: "—Hello! ___ your name? —My name is Mike.",
        options: [
          "What",
          "What's",
          "Whats",
          "What is the"
        ],
        answer: 1,
        explanation: "问姓名用What's your name?"
      },
      {
        id: "e4r4",
        type: "选择题",
        difficulty: "★",
        text: "—What color is it? —___ red.",
        options: [
          "It",
          "It's",
          "They're",
          "Is"
        ],
        answer: 1,
        explanation: "回答颜色用It's + 颜色。"
      },
      {
        id: "e4r5",
        type: "填空题",
        difficulty: "★",
        text: "I ___ (be) Amy. 我叫Amy。",
        answer: "am",
        explanation: "I搭配am。"
      },
      {
        id: "e4r6",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：你好，我是迈克。",
        answer: "Hello, I'm Mike.",
        explanation: "自我介绍用I'm = I am。"
      },
      {
        id: "e4r7",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：name / what's / your (?)",
        answer: "What's your name?",
        explanation: "What's your name? 询问姓名。"
      },
      {
        id: "e4r8",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：hello / I / am / Sarah (.)",
        answer: "Hello, I am Sarah.",
        explanation: "打招呼后接自我介绍。"
      },
      {
        id: "e4r9",
        type: "情景交际",
        difficulty: "★",
        text: "别人问你\"How are you?\"，你应该回答：",
        answer: "I'm fine, thank you.",
        explanation: "How are you? 回答I'm fine, thank you."
      },
      {
        id: "e4r10",
        type: "情景交际",
        difficulty: "★",
        text: "早上见到老师，你应该说：",
        answer: "Good morning, teacher.",
        explanation: "早上问候用Good morning。"
      },
      {
        id: "e4r11",
        type: "单词默写",
        difficulty: "★",
        text: "默写身体部位：脸、耳朵、眼睛、鼻子、嘴、胳膊、手、腿、脚",
        answer: "face, ear, eye, nose, mouth, arm, hand, leg, foot",
        explanation: "脚foot复数是feet。"
      },
      {
        id: "e4r12",
        type: "选择题",
        difficulty: "★",
        text: "Look ___ me! 看我！",
        options: [
          "at",
          "to",
          "on",
          "in"
        ],
        answer: 0,
        explanation: "Look at + 人/物，表示看着……。"
      },
      {
        id: "e4r13",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my nose.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "this用is。"
      },
      {
        id: "e4r14",
        type: "填空题",
        difficulty: "★",
        text: "How ___ you? 你好吗？",
        answer: "are",
        explanation: "you搭配are。"
      },
      {
        id: "e4r15",
        type: "填空题",
        difficulty: "★",
        text: "Let's ___ (make) a puppet! 让我们做个木偶吧！",
        answer: "make",
        explanation: "Let's + 动词原形。"
      },
      {
        id: "e4r16",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：摸摸你的鼻子。",
        answer: "Touch your nose.",
        explanation: "Touch + 身体部位，祈使句。"
      },
      {
        id: "e4r17",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：让我们做个木偶吧！",
        answer: "Let's make a puppet!",
        explanation: "Let's + 动词原形表建议。"
      },
      {
        id: "e4r18",
        type: "改错题",
        difficulty: "★★",
        text: "改错：—How are you? —I'm five.",
        answer: "—How old are you? —I'm five.",
        explanation: "问年龄用How old，How are you问身体状况。"
      },
      {
        id: "e4r19",
        type: "改错题",
        difficulty: "★★",
        text: "改错：What's you name?",
        answer: "What's your name?",
        explanation: "名词前用形容词性物主代词your。"
      },
      {
        id: "e4r20",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：me / look / at (.)",
        answer: "Look at me.",
        explanation: "Look at me. 看我。"
      },
      {
        id: "e4r21",
        type: "单词默写",
        difficulty: "★",
        text: "默写动物：猫、狗、猪、鸭、兔、熊、鸟、猴、熊猫、大象",
        answer: "cat, dog, pig, duck, rabbit, bear, bird, monkey, panda, elephant",
        explanation: "动物词汇，注意elephant和monkey的拼写。"
      },
      {
        id: "e4r22",
        type: "选择题",
        difficulty: "★",
        text: "—What's this? —___ a dog.",
        options: [
          "It",
          "It's",
          "This",
          "Is"
        ],
        answer: 1,
        explanation: "回答It's a..."
      },
      {
        id: "e4r23",
        type: "选择题",
        difficulty: "★",
        text: "I ___ a cat. It's cute.",
        options: [
          "like",
          "likes",
          "liking",
          "to like"
        ],
        answer: 0,
        explanation: "I用动词原形like。"
      },
      {
        id: "e4r24",
        type: "填空题",
        difficulty: "★",
        text: "It's ___ (a/an) elephant.",
        answer: "an",
        explanation: "elephant以元音音素开头用an。"
      },
      {
        id: "e4r25",
        type: "填空题",
        difficulty: "★",
        text: "___ (a/an) bear.",
        answer: "A",
        explanation: "bear以辅音音素开头用a。"
      },
      {
        id: "e4r26",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：它是一只熊猫。",
        answer: "It's a panda.",
        explanation: "It's a + 单数名词。"
      },
      {
        id: "e4r27",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我喜欢大象。",
        answer: "I like elephants.",
        explanation: "表类别常用复数elephants。"
      },
      {
        id: "e4r28",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：is / this / what (?)",
        answer: "What is this?",
        explanation: "What is this? 问近处事物。"
      },
      {
        id: "e4r29",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：like / I / dogs (.)",
        answer: "I like dogs.",
        explanation: "主语I + like + 复数名词。"
      },
      {
        id: "e4r30",
        type: "情景交际",
        difficulty: "★",
        text: "你想问问远处那个东西是什么，应说：",
        answer: "What's that?",
        explanation: "问远处事物用What's that?"
      },
      {
        id: "e4r31",
        type: "改错题",
        difficulty: "★★",
        text: "改错：It's a elephant.",
        answer: "It's an elephant.",
        explanation: "elephant以元音音素开头用an。"
      },
      {
        id: "e4r32",
        type: "改错题",
        difficulty: "★★",
        text: "改错：What this?",
        answer: "What's this?",
        explanation: "缺be动词is的缩写What's。"
      },
      {
        id: "e4r33",
        type: "单词默写",
        difficulty: "★",
        text: "默写食物饮料：蛋糕、面包、热狗、汉堡、鸡肉、牛奶、果汁、水、茶",
        answer: "cake, bread, hot dog, hamburger, chicken, milk, juice, water, tea",
        explanation: "食物词汇，bread和milk不可数。"
      },
      {
        id: "e4r34",
        type: "选择题",
        difficulty: "★",
        text: "I'd like ___ juice, please.",
        options: [
          "a",
          "an",
          "some",
          "many"
        ],
        answer: 2,
        explanation: "juice不可数，用some修饰。"
      },
      {
        id: "e4r35",
        type: "选择题",
        difficulty: "★",
        text: "Can I have ___ water?",
        options: [
          "a",
          "an",
          "some",
          "any"
        ],
        answer: 2,
        explanation: "PEP中请求用some water。"
      },
      {
        id: "e4r36",
        type: "填空题",
        difficulty: "★",
        text: "Have ___ (some) chicken. 吃些鸡肉吧。",
        answer: "some",
        explanation: "鼓励对方吃用some。"
      },
      {
        id: "e4r37",
        type: "填空题",
        difficulty: "★",
        text: "Here ___ (you) are. 给你。",
        answer: "you",
        explanation: "Here you are. 固定搭配。"
      },
      {
        id: "e4r38",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我想要一些面包。",
        answer: "I'd like some bread.",
        explanation: "I'd like + some + 不可数名词。"
      },
      {
        id: "e4r39",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：给你。",
        answer: "Here you are.",
        explanation: "递东西给对方用Here you are."
      },
      {
        id: "e4r40",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：like / I'd / juice / some (.)",
        answer: "I'd like some juice.",
        explanation: "I'd like some juice."
      },
      {
        id: "e4r41",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：have / can / I / milk (?)",
        answer: "Can I have some milk?",
        explanation: "Can I have some...? 请求句型。"
      },
      {
        id: "e4r42",
        type: "情景交际",
        difficulty: "★",
        text: "餐厅服务员问你想要什么，你应说：",
        answer: "I'd like some chicken, please.",
        explanation: "用I'd like some... 礼貌点餐。"
      },
      {
        id: "e4r43",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I'd like a bread.",
        answer: "I'd like some bread.",
        explanation: "bread不可数，不能用a，用some。"
      },
      {
        id: "e4r44",
        type: "单词默写",
        difficulty: "★",
        text: "默写1-10的英文数字。",
        answer: "one, two, three, four, five, six, seven, eight, nine, ten",
        explanation: "注意eight的拼写。"
      },
      {
        id: "e4r45",
        type: "选择题",
        difficulty: "★",
        text: "How old ___ you?",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 2,
        explanation: "you搭配are。"
      },
      {
        id: "e4r46",
        type: "填空题",
        difficulty: "★",
        text: "I'm ___ (eight).（我八岁）",
        answer: "eight",
        explanation: "年龄直接用数字。"
      },
      {
        id: "e4r47",
        type: "填空题",
        difficulty: "★",
        text: "How many ___ (cake)?",
        answer: "cakes",
        explanation: "How many + 复数名词。"
      },
      {
        id: "e4r48",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：生日快乐！",
        answer: "Happy birthday!",
        explanation: "生日祝福用语。"
      },
      {
        id: "e4r49",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：old / how / you / are (?)",
        answer: "How old are you?",
        explanation: "问年龄用How old are you?"
      },
      {
        id: "e4r50",
        type: "阅读理解",
        difficulty: "★★",
        text: "阅读短文回答：Hello! I'm Tom. I'm nine years old. Today is my birthday. I have a cake. I'd like some juice. 问题：How old is Tom? What would he like?",
        answer: "He is nine. He'd like some juice.",
        explanation: "由I'm nine years old和I'd like some juice得出。"
      },
      {
        id: "e4r51",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：书包",
        answer: "schoolbag",
        explanation: "书包 = schoolbag。"
      },
      {
        id: "e4r52",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r53",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r54",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r55",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r56",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r57",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r58",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r59",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：鸡肉",
        answer: "chicken",
        explanation: "鸡肉 = chicken。"
      },
      {
        id: "e4r60",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r61",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r62",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r63",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r64",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r65",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r66",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r67",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：朋友",
        answer: "friend",
        explanation: "朋友 = friend。"
      },
      {
        id: "e4r68",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r69",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r70",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r71",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r72",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r73",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r74",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r75",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：教室",
        answer: "classroom",
        explanation: "教室 = classroom。"
      },
      {
        id: "e4r76",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r77",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r78",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r79",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r80",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r81",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r82",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r83",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：家庭",
        answer: "family",
        explanation: "家庭 = family。"
      },
      {
        id: "e4r84",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r85",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r86",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r87",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r88",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r89",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r90",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r91",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：书包",
        answer: "schoolbag",
        explanation: "书包 = schoolbag。"
      },
      {
        id: "e4r92",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r93",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r94",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r95",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r96",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r97",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r98",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r99",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：鸡肉",
        answer: "chicken",
        explanation: "鸡肉 = chicken。"
      },
      {
        id: "e4r100",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r101",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r102",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r103",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r104",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r105",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r106",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r107",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：朋友",
        answer: "friend",
        explanation: "朋友 = friend。"
      },
      {
        id: "e4r108",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r109",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r110",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r111",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r112",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r113",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r114",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r115",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：教室",
        answer: "classroom",
        explanation: "教室 = classroom。"
      },
      {
        id: "e4r116",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r117",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r118",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r119",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r120",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r121",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r122",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r123",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：家庭",
        answer: "family",
        explanation: "家庭 = family。"
      },
      {
        id: "e4r124",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r125",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r126",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r127",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r128",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r129",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r130",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r131",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：书包",
        answer: "schoolbag",
        explanation: "书包 = schoolbag。"
      },
      {
        id: "e4r132",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r133",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r134",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r135",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r136",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r137",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r138",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r139",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：鸡肉",
        answer: "chicken",
        explanation: "鸡肉 = chicken。"
      },
      {
        id: "e4r140",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r141",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r142",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r143",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r144",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r145",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r146",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r147",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：朋友",
        answer: "friend",
        explanation: "朋友 = friend。"
      },
      {
        id: "e4r148",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r149",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r150",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r151",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r152",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r153",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r154",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r155",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：教室",
        answer: "classroom",
        explanation: "教室 = classroom。"
      },
      {
        id: "e4r156",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r157",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r158",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r159",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r160",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r161",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r162",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r163",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：家庭",
        answer: "family",
        explanation: "家庭 = family。"
      },
      {
        id: "e4r164",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r165",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r166",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r167",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r168",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r169",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r170",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r171",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：书包",
        answer: "schoolbag",
        explanation: "书包 = schoolbag。"
      },
      {
        id: "e4r172",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r173",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r174",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r175",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r176",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r177",
        type: "填空题",
        difficulty: "★★",
        text: "根据中文填单词：窗户 w___d___w",
        answer: "window",
        explanation: "窗户=window。"
      },
      {
        id: "e4r178",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r179",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：鸡肉",
        answer: "chicken",
        explanation: "鸡肉 = chicken。"
      },
      {
        id: "e4r180",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r181",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r182",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r183",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r184",
        type: "选择题",
        difficulty: "★★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r185",
        type: "填空题",
        difficulty: "★★★",
        text: "What would you like for d___? (晚餐)",
        answer: "dinner",
        explanation: "晚餐=dinner。"
      },
      {
        id: "e4r186",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r187",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：朋友",
        answer: "friend",
        explanation: "朋友 = friend。"
      },
      {
        id: "e4r188",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r189",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r190",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r191",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r192",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      },
      {
        id: "e4r193",
        type: "填空题",
        difficulty: "★",
        text: "根据中文填单词：牛肉 b___f",
        answer: "beef",
        explanation: "牛肉=beef。"
      },
      {
        id: "e4r194",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我有一本新书。",
        answer: "I have a new book.",
        explanation: "有=have，新书=new book。"
      },
      {
        id: "e4r195",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：教室",
        answer: "classroom",
        explanation: "教室 = classroom。"
      },
      {
        id: "e4r196",
        type: "情景交际",
        difficulty: "★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r197",
        type: "情景交际",
        difficulty: "★★★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r198",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r199",
        type: "情景交际",
        difficulty: "★",
        text: "别人帮你之后你说：___",
        options: [
          "Sorry.",
          "Thank you.",
          "Goodbye.",
          "Hello."
        ],
        answer: 1,
        explanation: "感谢用Thank you。"
      },
      {
        id: "e4r200",
        type: "选择题",
        difficulty: "★",
        text: "This ___ my classroom.",
        options: [
          "am",
          "is",
          "are",
          "be"
        ],
        answer: 1,
        explanation: "This后面用be动词is。"
      }
    ],
    新学期预习: [
      {
        id: "e4p1",
        type: "单词默写",
        difficulty: "★",
        text: "默写教室物品：教室、窗户、门、图画、黑板、灯、电脑、电扇、墙、地板",
        answer: "classroom, window, door, picture, blackboard, light, computer, fan, wall, floor",
        explanation: "教室词汇，注意blackboard和classroom是合成词。"
      },
      {
        id: "e4p2",
        type: "选择题",
        difficulty: "★",
        text: "What's ___ the classroom?",
        options: [
          "in",
          "on",
          "at",
          "to"
        ],
        answer: 0,
        explanation: "在教室里用in。"
      },
      {
        id: "e4p3",
        type: "选择题",
        difficulty: "★",
        text: "Let's ___ the classroom.",
        options: [
          "clean",
          "cleans",
          "cleaning",
          "to clean"
        ],
        answer: 0,
        explanation: "Let's + 动词原形。"
      },
      {
        id: "e4p4",
        type: "填空题",
        difficulty: "★",
        text: "We ___ (have) a new classroom.",
        answer: "have",
        explanation: "We用have。"
      },
      {
        id: "e4p5",
        type: "填空题",
        difficulty: "★",
        text: "Let ___ (I) clean the window.",
        answer: "me",
        explanation: "Let后接宾格me。"
      },
      {
        id: "e4p6",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我们有一间新教室。",
        answer: "We have a new classroom.",
        explanation: "We have a new classroom."
      },
      {
        id: "e4p7",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：classroom / new / a / we / have (.)",
        answer: "We have a new classroom.",
        explanation: "主语we + have + 宾语。"
      },
      {
        id: "e4p8",
        type: "情景交际",
        difficulty: "★",
        text: "开学第一天见到新同学，你应说：",
        answer: "Nice to meet you.",
        explanation: "初次见面用Nice to meet you."
      },
      {
        id: "e4p9",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Let's clean the window. Let I help you.",
        answer: "Let me help you.",
        explanation: "Let后接宾格me，不能用主格I。"
      },
      {
        id: "e4p10",
        type: "单词默写",
        difficulty: "★",
        text: "默写文具：书包、语文书、英语书、数学书、笔记本、故事书、钢笔、铅笔、尺子、橡皮",
        answer: "schoolbag, Chinese book, English book, maths book, notebook, storybook, pen, pencil, ruler, eraser",
        explanation: "storybook和schoolbag是合成词。"
      },
      {
        id: "e4p11",
        type: "选择题",
        difficulty: "★",
        text: "What's in your ___?",
        options: [
          "schoolbag",
          "desk",
          "chair",
          "room"
        ],
        answer: 0,
        explanation: "问书包里有什么用schoolbag。"
      },
      {
        id: "e4p12",
        type: "选择题",
        difficulty: "★",
        text: "I have ___ English book.",
        options: [
          "a",
          "an",
          "the",
          "/"
        ],
        answer: 1,
        explanation: "English以元音音素开头用an。"
      },
      {
        id: "e4p13",
        type: "填空题",
        difficulty: "★",
        text: "How many ___ (book) do you have?",
        answer: "books",
        explanation: "How many + 复数名词。"
      },
      {
        id: "e4p14",
        type: "填空题",
        difficulty: "★",
        text: "___ (a/an) storybook.",
        answer: "A",
        explanation: "storybook以辅音音素开头用a。"
      },
      {
        id: "e4p15",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我书包里有一本故事书。",
        answer: "I have a storybook in my schoolbag.",
        explanation: "I have a storybook in my schoolbag."
      },
      {
        id: "e4p16",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：your / what's / schoolbag / in (?)",
        answer: "What's in your schoolbag?",
        explanation: "What's in your schoolbag?"
      },
      {
        id: "e4p17",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I have a English book.",
        answer: "I have an English book.",
        explanation: "English以元音音素开头用an。"
      },
      {
        id: "e4p18",
        type: "单词默写",
        difficulty: "★",
        text: "默写外貌词：朋友、高的、强壮的、瘦的、矮的、长的、头发、安静的、友好的、眼镜",
        answer: "friend, tall, strong, thin, short, long, hair, quiet, friendly, glasses",
        explanation: "外貌描述词汇，glasses用复数。"
      },
      {
        id: "e4p19",
        type: "选择题",
        difficulty: "★",
        text: "He ___ tall and strong.",
        options: [
          "am",
          "is",
          "are",
          "has"
        ],
        answer: 1,
        explanation: "He用is。"
      },
      {
        id: "e4p20",
        type: "选择题",
        difficulty: "★",
        text: "She ___ long hair.",
        options: [
          "have",
          "has",
          "is",
          "are"
        ],
        answer: 1,
        explanation: "She三单用has。"
      },
      {
        id: "e4p21",
        type: "填空题",
        difficulty: "★",
        text: "My friend ___ (have) big eyes.",
        answer: "has",
        explanation: "my friend三单用has。"
      },
      {
        id: "e4p22",
        type: "填空题",
        difficulty: "★",
        text: "He ___ (be) tall.",
        answer: "is",
        explanation: "He用is。"
      },
      {
        id: "e4p23",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我的朋友又高又壮。",
        answer: "My friend is tall and strong.",
        explanation: "用and连接两个形容词。"
      },
      {
        id: "e4p24",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：hair / she / long / has (.)",
        answer: "She has long hair.",
        explanation: "She has long hair."
      },
      {
        id: "e4p25",
        type: "情景交际",
        difficulty: "★",
        text: "你向别人介绍自己的朋友约翰，应说：",
        answer: "This is my friend, John.",
        explanation: "介绍他人用This is..."
      },
      {
        id: "e4p26",
        type: "改错题",
        difficulty: "★★",
        text: "改错：He have short hair.",
        answer: "He has short hair.",
        explanation: "He是第三人称单数，用has。"
      },
      {
        id: "e4p27",
        type: "单词默写",
        difficulty: "★",
        text: "默写餐具食物：晚餐、米饭、牛肉、鸡肉、蔬菜、汤、鱼、面条、叉子、刀、勺、筷子、碗、盘子",
        answer: "dinner, rice, beef, chicken, vegetable, soup, fish, noodles, fork, knife, spoon, chopsticks, bowl, plate",
        explanation: "rice, beef, soup, fish不可数；noodles, chopsticks用复数。"
      },
      {
        id: "e4p28",
        type: "选择题",
        difficulty: "★",
        text: "What's ___ dinner?",
        options: [
          "for",
          "to",
          "in",
          "on"
        ],
        answer: 0,
        explanation: "What's for dinner? 晚饭吃什么。"
      },
      {
        id: "e4p29",
        type: "选择题",
        difficulty: "★",
        text: "What would you like ___ dinner?",
        options: [
          "for",
          "to",
          "in",
          "at"
        ],
        answer: 0,
        explanation: "for dinner晚饭吃什么。"
      },
      {
        id: "e4p30",
        type: "填空题",
        difficulty: "★",
        text: "I'd like some ___ (rice).",
        answer: "rice",
        explanation: "rice不可数，无复数。"
      },
      {
        id: "e4p31",
        type: "填空题",
        difficulty: "★",
        text: "Help ___ (you). 请自便。",
        answer: "yourself",
        explanation: "Help yourself. 固定表达。"
      },
      {
        id: "e4p32",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：你晚饭想吃什么？",
        answer: "What would you like for dinner?",
        explanation: "What would you like for dinner?"
      },
      {
        id: "e4p33",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：请自便。/随便吃。",
        answer: "Help yourself.",
        explanation: "招待客人用语Help yourself."
      },
      {
        id: "e4p34",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：you / what / like / would (?)",
        answer: "What would you like?",
        explanation: "What would you like?"
      },
      {
        id: "e4p35",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：dinner / ready / is (.)",
        answer: "Dinner is ready.",
        explanation: "Dinner is ready."
      },
      {
        id: "e4p36",
        type: "情景交际",
        difficulty: "★",
        text: "妈妈做好饭叫你吃，她应说：",
        answer: "Dinner's ready!",
        explanation: "Dinner's ready! 饭好了。"
      },
      {
        id: "e4p37",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I'd like some rices.",
        answer: "I'd like some rice.",
        explanation: "rice不可数，没有复数形式。"
      },
      {
        id: "e4p38",
        type: "单词默写",
        difficulty: "★",
        text: "默写家庭成员：家庭、爸爸、妈妈、哥哥/弟弟、姐姐/妹妹、祖父、祖母、叔叔、阿姨、婴儿",
        answer: "family, father/dad, mother/mom, brother, sister, grandfather/grandpa, grandmother/grandma, uncle, aunt, baby",
        explanation: "家庭成员词汇，grand-前缀表祖辈。"
      },
      {
        id: "e4p39",
        type: "选择题",
        difficulty: "★",
        text: "How many ___ are there in your family?",
        options: [
          "people",
          "peoples",
          "a people",
          "the people"
        ],
        answer: 0,
        explanation: "people本身表复数，不加s。"
      },
      {
        id: "e4p40",
        type: "选择题",
        difficulty: "★",
        text: "This is my ___. He's my father's father.",
        options: [
          "father",
          "grandfather",
          "uncle",
          "brother"
        ],
        answer: 1,
        explanation: "father's father是爷爷/祖父。"
      },
      {
        id: "e4p41",
        type: "填空题",
        difficulty: "★",
        text: "My family ___ (have) six people.",
        answer: "has",
        explanation: "my family三单用has。"
      },
      {
        id: "e4p42",
        type: "填空题",
        difficulty: "★",
        text: "___ (who) is that man?",
        answer: "Who",
        explanation: "问人用Who，句首大写。"
      },
      {
        id: "e4p43",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：这是我的家人。",
        answer: "This is my family.",
        explanation: "This is my family."
      },
      {
        id: "e4p44",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：people / are / how many / there (?)",
        answer: "How many people are there?",
        explanation: "How many people are there?"
      },
      {
        id: "e4p45",
        type: "连词成句",
        difficulty: "★",
        text: "连词成句：my / is / this / family (.)",
        answer: "This is my family.",
        explanation: "This is my family."
      },
      {
        id: "e4p46",
        type: "情景交际",
        difficulty: "★",
        text: "你向同学介绍自己的妈妈，应说：",
        answer: "This is my mother.",
        explanation: "介绍家人用This is..."
      },
      {
        id: "e4p47",
        type: "改错题",
        difficulty: "★★",
        text: "改错：How many peoples are there?",
        answer: "How many people are there?",
        explanation: "people本身表复数，不加s。"
      },
      {
        id: "e4p48",
        type: "翻译题",
        difficulty: "★",
        text: "翻译：我家有三口人。",
        answer: "There are three people in my family.",
        explanation: "There are + 数量 + people。"
      },
      {
        id: "e4p49",
        type: "填空题",
        difficulty: "★",
        text: "Is ___ (this) your sister?",
        answer: "this",
        explanation: "this指近处的人。"
      },
      {
        id: "e4p50",
        type: "阅读理解",
        difficulty: "★★",
        text: "阅读短文回答：Hi, I'm Amy. This is my family. My father is tall. My mother is thin. I have a baby brother. We have a happy family. 问题：How many people are there? Is Amy's father tall?",
        answer: "There are four people. Yes, he is.",
        explanation: "由Amy、father、mother、baby brother共四人得出；父亲是tall。"
      },
      {
        id: "e4p51",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p52",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p53",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p54",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p55",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p56",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p57",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p58",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p59",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p60",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p61",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p62",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p63",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p64",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p65",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p66",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p67",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p68",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p69",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p70",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p71",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p72",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p73",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p74",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p75",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p76",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p77",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p78",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p79",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p80",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p81",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p82",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p83",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p84",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p85",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p86",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p87",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p88",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p89",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p90",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p91",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p92",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p93",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p94",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p95",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p96",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p97",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p98",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p99",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p100",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p101",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p102",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p103",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p104",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p105",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p106",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p107",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p108",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p109",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p110",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p111",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p112",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p113",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p114",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p115",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p116",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p117",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p118",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p119",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p120",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p121",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p122",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p123",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p124",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p125",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p126",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p127",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p128",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p129",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p130",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p131",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p132",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p133",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p134",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p135",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p136",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p137",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p138",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p139",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p140",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p141",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p142",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p143",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p144",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p145",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p146",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p147",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p148",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p149",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p150",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p151",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p152",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p153",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p154",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p155",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p156",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p157",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p158",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p159",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p160",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p161",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p162",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p163",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p164",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p165",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p166",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p167",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p168",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p169",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p170",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p171",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p172",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p173",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p174",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p175",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p176",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p177",
        type: "填空题",
        difficulty: "★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p178",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p179",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p180",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p181",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p182",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p183",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p184",
        type: "选择题",
        difficulty: "★★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p185",
        type: "填空题",
        difficulty: "★★★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p186",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p187",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p188",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p189",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p190",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p191",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p192",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      },
      {
        id: "e4p193",
        type: "填空题",
        difficulty: "★",
        text: "It's cold. Please wear your c___ (外套).",
        answer: "coat",
        explanation: "外套=coat。"
      },
      {
        id: "e4p194",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：今天下雨。",
        answer: "It is rainy today.",
        explanation: "下雨的=rainy。"
      },
      {
        id: "e4p195",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p196",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p197",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p198",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p199",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：图书馆",
        answer: "library",
        explanation: "图书馆=library。"
      },
      {
        id: "e4p200",
        type: "选择题",
        difficulty: "★",
        text: "___ time is it? It's 7 o'clock.",
        options: [
          "What",
          "How",
          "Where",
          "When"
        ],
        answer: 0,
        explanation: "问时间用What time。"
      }
    ]
  },
  grade5: {
    旧年级巩固: [
      {
        id: "e5r1",
        type: "单词默写",
        difficulty: "★",
        text: "默写日常活动：做作业、看电视、看书、做运动、洗衣服、吃晚饭、起床、上床睡觉、上学、吃早饭",
        answer: "do homework, watch TV, read books, play sports, wash clothes, eat dinner, get up, go to bed, go to school, have breakfast",
        explanation: "日常活动短语，注意play sports和watch TV。"
      },
      {
        id: "e5r2",
        type: "选择题",
        difficulty: "★★",
        text: "When ___ you get up?",
        options: [
          "do",
          "are",
          "is",
          "does"
        ],
        answer: 0,
        explanation: "主语you用do提问。"
      },
      {
        id: "e5r3",
        type: "选择题",
        difficulty: "★★",
        text: "I usually get up ___ 6:30.",
        options: [
          "in",
          "on",
          "at",
          "for"
        ],
        answer: 2,
        explanation: "具体时刻前用at。"
      },
      {
        id: "e5r4",
        type: "填空题",
        difficulty: "★★",
        text: "I ___ (usual) go to school at 7:00.",
        answer: "usually",
        explanation: "频度副词usually修饰动词。"
      },
      {
        id: "e5r5",
        type: "填空题",
        difficulty: "★★",
        text: "What ___ you do on the weekend?",
        answer: "do",
        explanation: "主语you用do提问。"
      },
      {
        id: "e5r6",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我通常七点上学。",
        answer: "I usually go to school at seven.",
        explanation: "频度副词usually位于实义动词前。"
      },
      {
        id: "e5r7",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：get up / when / you / do (?)",
        answer: "When do you get up?",
        explanation: "When do you + 动词原形?"
      },
      {
        id: "e5r8",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：do / what / you / do / on the weekend (?)",
        answer: "What do you do on the weekend?",
        explanation: "问周末活动句型。"
      },
      {
        id: "e5r9",
        type: "情景交际",
        difficulty: "★★",
        text: "别人问你周末做什么，你应回答：",
        answer: "I often read books.",
        explanation: "用频度副词often + 活动。"
      },
      {
        id: "e5r10",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I usually get up in 6:30.",
        answer: "I usually get up at 6:30.",
        explanation: "具体时刻前用at，不用in。"
      },
      {
        id: "e5r11",
        type: "单词默写",
        difficulty: "★",
        text: "默写季节和天气：春天、夏天、秋天、冬天、晴朗的、刮风的、多云的、下雪的、下雨的、暖和的",
        answer: "spring, summer, autumn, winter, sunny, windy, cloudy, snowy, rainy, warm",
        explanation: "季节和天气词，天气词由名词+y构成。"
      },
      {
        id: "e5r12",
        type: "选择题",
        difficulty: "★★",
        text: "___ season do you like best?",
        options: [
          "What",
          "Which",
          "When",
          "Where"
        ],
        answer: 1,
        explanation: "哪一个季节用Which。"
      },
      {
        id: "e5r13",
        type: "选择题",
        difficulty: "★★",
        text: "I like winter ___ I can make a snowman.",
        options: [
          "and",
          "but",
          "because",
          "so"
        ],
        answer: 2,
        explanation: "表原因用because。"
      },
      {
        id: "e5r14",
        type: "填空题",
        difficulty: "★★",
        text: "___ do you like summer?",
        answer: "Why",
        explanation: "问原因用Why。"
      },
      {
        id: "e5r15",
        type: "填空题",
        difficulty: "★★",
        text: "It's ___ (sun) today.",
        answer: "sunny",
        explanation: "作表语用形容词sunny。"
      },
      {
        id: "e5r16",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你最喜欢哪个季节？",
        answer: "Which season do you like best?",
        explanation: "Which season do you like best?"
      },
      {
        id: "e5r17",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我喜欢冬天，因为我可以堆雪人。",
        answer: "I like winter because I can make a snowman.",
        explanation: "用because表原因。"
      },
      {
        id: "e5r18",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：season / which / you / like / best / do (?)",
        answer: "Which season do you like best?",
        explanation: "Which season do you like best?"
      },
      {
        id: "e5r19",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I like spring but I can fly kites.",
        answer: "I like spring because I can fly kites.",
        explanation: "表原因用because，不是转折but。"
      },
      {
        id: "e5r20",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Which season do you like best? I like swim.",
        answer: "I like swimming.",
        explanation: "like后接doing或to do，用swimming。"
      },
      {
        id: "e5r21",
        type: "单词默写",
        difficulty: "★",
        text: "默写月份：一月至十二月。",
        answer: "January, February, March, April, May, June, July, August, September, October, November, December",
        explanation: "注意February和September的拼写。"
      },
      {
        id: "e5r22",
        type: "单词默写",
        difficulty: "★",
        text: "默写序数词：第一、第二、第三、第五、第十二、第二十。",
        answer: "first, second, third, fifth, twelfth, twentieth",
        explanation: "注意fifth、twelfth、twentieth的特殊拼写。"
      },
      {
        id: "e5r23",
        type: "选择题",
        difficulty: "★★",
        text: "—___ is Easter? —It's in April.",
        options: [
          "What",
          "When",
          "Which",
          "Where"
        ],
        answer: 1,
        explanation: "问时间用When。"
      },
      {
        id: "e5r24",
        type: "选择题",
        difficulty: "★★",
        text: "My birthday is ___ May.",
        options: [
          "in",
          "on",
          "at",
          "of"
        ],
        answer: 0,
        explanation: "月份前用in。"
      },
      {
        id: "e5r25",
        type: "选择题",
        difficulty: "★★",
        text: "It's ___ May 1st.",
        options: [
          "in",
          "on",
          "at",
          "of"
        ],
        answer: 1,
        explanation: "具体日期前用on。"
      },
      {
        id: "e5r26",
        type: "填空题",
        difficulty: "★★",
        text: "May is the ___ (five) month.",
        answer: "fifth",
        explanation: "序数词前用the，five→fifth。"
      },
      {
        id: "e5r27",
        type: "填空题",
        difficulty: "★★",
        text: "Sunday is the ___ (one) day of a week.",
        answer: "first",
        explanation: "one→first。"
      },
      {
        id: "e5r28",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你的生日是什么时候？",
        answer: "When is your birthday?",
        explanation: "When is your birthday?"
      },
      {
        id: "e5r29",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我的生日在五月一日。",
        answer: "My birthday is on May 1st.",
        explanation: "具体日期前用on。"
      },
      {
        id: "e5r30",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：birthday / when / is / your (?)",
        answer: "When is your birthday?",
        explanation: "When is your birthday?"
      },
      {
        id: "e5r31",
        type: "情景交际",
        difficulty: "★★",
        text: "朋友过生日，你应说：",
        answer: "Happy birthday!",
        explanation: "生日祝福用语。"
      },
      {
        id: "e5r32",
        type: "改错题",
        difficulty: "★★",
        text: "改错：My birthday is in May 1st.",
        answer: "My birthday is on May 1st.",
        explanation: "具体日期前用on，不用in。"
      },
      {
        id: "e5r33",
        type: "改错题",
        difficulty: "★★",
        text: "改错：May is the five month.",
        answer: "May is the fifth month.",
        explanation: "序数词前用the，five→fifth。"
      },
      {
        id: "e5r34",
        type: "单词默写",
        difficulty: "★",
        text: "默写名词性物主代词：我的、你的、他的、她的、我们的、他(她)们的。",
        answer: "mine, yours, his, hers, ours, theirs",
        explanation: "名词性物主代词单独使用，后不接名词。"
      },
      {
        id: "e5r35",
        type: "选择题",
        difficulty: "★★",
        text: "___ dog is it?",
        options: [
          "Who",
          "What",
          "Whose",
          "Where"
        ],
        answer: 2,
        explanation: "问谁的用Whose。"
      },
      {
        id: "e5r36",
        type: "选择题",
        difficulty: "★★",
        text: "This book is ___. It's my book.",
        options: [
          "my",
          "mine",
          "I",
          "me"
        ],
        answer: 1,
        explanation: "后无名词用名词性物主代词mine。"
      },
      {
        id: "e5r37",
        type: "选择题",
        difficulty: "★★",
        text: "The pen is ___. (she)",
        options: [
          "she",
          "her",
          "hers",
          "his"
        ],
        answer: 2,
        explanation: "后无名词用hers。"
      },
      {
        id: "e5r38",
        type: "填空题",
        difficulty: "★★",
        text: "This is ___ (I) pen. It's ___ (I).",
        answer: "my, mine",
        explanation: "前有名词用my，后无名词用mine。"
      },
      {
        id: "e5r39",
        type: "填空题",
        difficulty: "★★",
        text: "Whose pencils are these? They're ___ (we).",
        answer: "ours",
        explanation: "后无名词用ours。"
      },
      {
        id: "e5r40",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：这是谁的狗？",
        answer: "Whose dog is this?",
        explanation: "Whose + 名词 + is this?"
      },
      {
        id: "e5r41",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：它是我的。",
        answer: "It's mine.",
        explanation: "后无名词用mine。"
      },
      {
        id: "e5r42",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：dog / whose / is / this (?)",
        answer: "Whose dog is this?",
        explanation: "Whose dog is this?"
      },
      {
        id: "e5r43",
        type: "改错题",
        difficulty: "★★",
        text: "改错：This pen is my.",
        answer: "This pen is mine.",
        explanation: "后无名词用名词性物主代词mine。"
      },
      {
        id: "e5r44",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Whose book is this? It's your.",
        answer: "It's yours.",
        explanation: "后无名词用yours。"
      },
      {
        id: "e5r45",
        type: "单词默写",
        difficulty: "★",
        text: "默写现在分词：read读、eat吃、play玩、draw画、cook做饭、sleep睡觉、listen to music听音乐、write写、jump跳、climb爬",
        answer: "reading, eating, playing, drawing, cooking, sleeping, listening to music, writing, jumping, climbing",
        explanation: "进行时用be + doing，注意write→writing去e加ing。"
      },
      {
        id: "e5r46",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ you doing?",
        options: [
          "do",
          "are",
          "is",
          "does"
        ],
        answer: 1,
        explanation: "you进行时用are。"
      },
      {
        id: "e5r47",
        type: "选择题",
        difficulty: "★★",
        text: "I ___ reading a book.",
        options: [
          "am",
          "is",
          "are",
          "do"
        ],
        answer: 0,
        explanation: "I进行时用am。"
      },
      {
        id: "e5r48",
        type: "选择题",
        difficulty: "★★",
        text: "The students ___ quietly.",
        options: [
          "work",
          "works",
          "are working",
          "is working"
        ],
        answer: 2,
        explanation: "students复数进行时用are working。"
      },
      {
        id: "e5r49",
        type: "填空题",
        difficulty: "★★",
        text: "Look! He ___ (run).",
        answer: "is running",
        explanation: "Look! 提示进行时，run双写n加ing。"
      },
      {
        id: "e5r50",
        type: "阅读理解",
        difficulty: "★★",
        text: "阅读短文回答：Hello, I'm Sarah. I usually get up at 6:30. I go to school at 7:20. I do my homework at 5:00 p.m. On the weekend, I often read books. 问题：When does Sarah get up? What does she do on the weekend?",
        answer: "She gets up at 6:30. She often reads books.",
        explanation: "由usually get up at 6:30和on the weekend often read books得出，注意第三人称单数。"
      },
      {
        id: "e5r51",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r52",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r53",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r54",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r55",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r56",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r57",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r58",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r59",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r60",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r61",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r62",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r63",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r64",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r65",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r66",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r67",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r68",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r69",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r70",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r71",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r72",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r73",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r74",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r75",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r76",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r77",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r78",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r79",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r80",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r81",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r82",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r83",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r84",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r85",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r86",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r87",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r88",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r89",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r90",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r91",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r92",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r93",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r94",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r95",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r96",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r97",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r98",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r99",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r100",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r101",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r102",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r103",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r104",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r105",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r106",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r107",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r108",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r109",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r110",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r111",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r112",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r113",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r114",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r115",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r116",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r117",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r118",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r119",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r120",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r121",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r122",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r123",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r124",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r125",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r126",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r127",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r128",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r129",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r130",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r131",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r132",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r133",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r134",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r135",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r136",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r137",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r138",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r139",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r140",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r141",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r142",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r143",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r144",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r145",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r146",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r147",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r148",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r149",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r150",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r151",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r152",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r153",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r154",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r155",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r156",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r157",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r158",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r159",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r160",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r161",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r162",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r163",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r164",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r165",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r166",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r167",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r168",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r169",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r170",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r171",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r172",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r173",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r174",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r175",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r176",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r177",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r178",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r179",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r180",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r181",
        type: "句型转换",
        difficulty: "★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r182",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r183",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r184",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r185",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r186",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r187",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r188",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r189",
        type: "句型转换",
        difficulty: "★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r190",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r191",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r192",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      },
      {
        id: "e5r193",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r194",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：She is hard-working.",
        answer: "她很勤奋。",
        explanation: "hard-working勤奋的。"
      },
      {
        id: "e5r195",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r196",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r197",
        type: "句型转换",
        difficulty: "★★★",
        text: "改为一般疑问句：I can swim.",
        answer: "Can you swim?",
        explanation: "can提句首，I变you。"
      },
      {
        id: "e5r198",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r199",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：三明治",
        answer: "sandwich",
        explanation: "三明治=sandwich。"
      },
      {
        id: "e5r200",
        type: "选择题",
        difficulty: "★",
        text: "What ___ he like? He is kind.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 2,
        explanation: "What is he like? 问他是什么样的人。"
      }
    ],
    新学期预习: [
      {
        id: "e5p1",
        type: "单词默写",
        difficulty: "★",
        text: "默写周末活动：看电视、做作业、看书、洗衣服、踢足球、打扫房间、看望祖父母、爬山、购物、弹钢琴",
        answer: "watch TV, do homework, read books, wash clothes, play football, clean the room, visit grandparents, climb mountains, go shopping, play the piano",
        explanation: "注意play the piano有the，play football无the。"
      },
      {
        id: "e5p2",
        type: "选择题",
        difficulty: "★★",
        text: "What do you do ___ the weekend?",
        options: [
          "in",
          "on",
          "at",
          "for"
        ],
        answer: 1,
        explanation: "weekend前用on。"
      },
      {
        id: "e5p3",
        type: "选择题",
        difficulty: "★★",
        text: "I ___ visit my grandparents.（有时）",
        options: [
          "always",
          "usually",
          "often",
          "sometimes"
        ],
        answer: 3,
        explanation: "有时用sometimes。"
      },
      {
        id: "e5p4",
        type: "填空题",
        difficulty: "★★",
        text: "I often ___ (play) sports on Sundays.",
        answer: "play",
        explanation: "主语I用动词原形。"
      },
      {
        id: "e5p5",
        type: "填空题",
        difficulty: "★★",
        text: "___ (sometime) I cook dinner.",
        answer: "Sometimes",
        explanation: "Sometimes句首大写。"
      },
      {
        id: "e5p6",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我周末经常去看望祖父母。",
        answer: "I often visit my grandparents on the weekend.",
        explanation: "频度副词often位于动词前。"
      },
      {
        id: "e5p7",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：do / what / you / do / on the weekend (?)",
        answer: "What do you do on the weekend?",
        explanation: "What do you do on the weekend?"
      },
      {
        id: "e5p8",
        type: "情景交际",
        difficulty: "★★",
        text: "别人问你周末做什么，你想说有时爬山：",
        answer: "Sometimes I climb mountains.",
        explanation: "用Sometimes + 句子。"
      },
      {
        id: "e5p9",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I play sports in the weekend.",
        answer: "I play sports on the weekend.",
        explanation: "weekend前用on，不用in。"
      },
      {
        id: "e5p10",
        type: "单词默写",
        difficulty: "★",
        text: "默写自然公园词汇：河流、山、森林、湖、花、树、草、天空、云、小路",
        answer: "river, mountain, forest, lake, flower, tree, grass, sky, cloud, path",
        explanation: "自然景观词汇。"
      },
      {
        id: "e5p11",
        type: "选择题",
        difficulty: "★★",
        text: "There ___ a river in the park.",
        options: [
          "is",
          "are",
          "have",
          "has"
        ],
        answer: 0,
        explanation: "a river单数用is。"
      },
      {
        id: "e5p12",
        type: "选择题",
        difficulty: "★★",
        text: "There ___ many flowers in the park.",
        options: [
          "is",
          "are",
          "have",
          "has"
        ],
        answer: 1,
        explanation: "flowers复数用are。"
      },
      {
        id: "e5p13",
        type: "填空题",
        difficulty: "★★",
        text: "There ___ (be) a lake and some trees.",
        answer: "is",
        explanation: "There be就近原则，a lake用is。"
      },
      {
        id: "e5p14",
        type: "填空题",
        difficulty: "★★",
        text: "There ___ (be) some trees and a lake.",
        answer: "are",
        explanation: "就近原则，some trees用are。"
      },
      {
        id: "e5p15",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：公园里有一条河。",
        answer: "There is a river in the park.",
        explanation: "There is + 单数名词。"
      },
      {
        id: "e5p16",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：公园里有许多花吗？",
        answer: "Are there many flowers in the park?",
        explanation: "复数用Are there...?"
      },
      {
        id: "e5p17",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：a / there / river / is / park / in / the (.)",
        answer: "There is a river in the park.",
        explanation: "There is a river in the park."
      },
      {
        id: "e5p18",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：are / there / flowers / any (?)",
        answer: "Are there any flowers?",
        explanation: "疑问句用any。"
      },
      {
        id: "e5p19",
        type: "改错题",
        difficulty: "★★",
        text: "改错：There is many flowers in the park.",
        answer: "There are many flowers in the park.",
        explanation: "flowers复数用are。"
      },
      {
        id: "e5p20",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Is there a river? Yes, there isn't.",
        answer: "Yes, there is.",
        explanation: "肯定回答用Yes, there is."
      },
      {
        id: "e5p21",
        type: "单词默写",
        difficulty: "★",
        text: "默写动物及动作：猴子、大象、袋鼠、熊猫、狮子、老虎、蛇、兔子；飞、跳、跑、睡、吃",
        answer: "monkey, elephant, kangaroo, panda, lion, tiger, snake, rabbit; fly, jump, run, sleep, eat",
        explanation: "动物及动词，注意kangaroo的拼写。"
      },
      {
        id: "e5p22",
        type: "选择题",
        difficulty: "★★",
        text: "—What is the monkey doing? —It's ___.",
        options: [
          "eat",
          "eats",
          "eating",
          "ate"
        ],
        answer: 2,
        explanation: "进行时用be + doing。"
      },
      {
        id: "e5p23",
        type: "选择题",
        difficulty: "★★",
        text: "The elephants ___ drinking water.",
        options: [
          "is",
          "are",
          "am",
          "do"
        ],
        answer: 1,
        explanation: "elephants复数用are。"
      },
      {
        id: "e5p24",
        type: "填空题",
        difficulty: "★★",
        text: "Look! The kangaroo ___ (jump).",
        answer: "is jumping",
        explanation: "Look!提示进行时，主语单数用is jumping。"
      },
      {
        id: "e5p25",
        type: "填空题",
        difficulty: "★★",
        text: "What ___ (be) the tigers doing?",
        answer: "are",
        explanation: "tigers复数用are。"
      },
      {
        id: "e5p26",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：那只熊猫在吃什么？",
        answer: "What is the panda eating?",
        explanation: "进行时疑问句What is...doing?"
      },
      {
        id: "e5p27",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：大象正在喝水。",
        answer: "The elephants are drinking water.",
        explanation: "复数进行时are drinking。"
      },
      {
        id: "e5p28",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：doing / what / the / is / monkey (?)",
        answer: "What is the monkey doing?",
        explanation: "What is the monkey doing?"
      },
      {
        id: "e5p29",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：drinking / elephants / are / water (.)",
        answer: "The elephants are drinking water.",
        explanation: "The elephants are drinking water."
      },
      {
        id: "e5p30",
        type: "情景交际",
        difficulty: "★★",
        text: "在动物园你想知道猴子在做什么，应问：",
        answer: "What is the monkey doing?",
        explanation: "问正在进行用What is...doing?"
      },
      {
        id: "e5p31",
        type: "改错题",
        difficulty: "★★",
        text: "改错：What is the lions doing?",
        answer: "What are the lions doing?",
        explanation: "lions复数用are。"
      },
      {
        id: "e5p32",
        type: "改错题",
        difficulty: "★★",
        text: "改错：The monkey is jump.",
        answer: "The monkey is jumping.",
        explanation: "进行时be + doing。"
      },
      {
        id: "e5p33",
        type: "单词默写",
        difficulty: "★",
        text: "默写服装：衬衫、短裙、连衣裙、裤子、鞋子、帽子、毛衣、外套、短裤、T恤",
        answer: "shirt, skirt, dress, pants, shoes, hat, sweater, coat, shorts, T-shirt",
        explanation: "pants, shoes, shorts常用复数。"
      },
      {
        id: "e5p34",
        type: "选择题",
        difficulty: "★★",
        text: "—Can I help you? —Yes. I want a ___.",
        options: [
          "shirt",
          "water",
          "bread",
          "apple"
        ],
        answer: 0,
        explanation: "服装类用shirt。"
      },
      {
        id: "e5p35",
        type: "选择题",
        difficulty: "★★",
        text: "How much ___ this shirt?",
        options: [
          "is",
          "are",
          "am",
          "do"
        ],
        answer: 0,
        explanation: "this shirt单数用is。"
      },
      {
        id: "e5p36",
        type: "选择题",
        difficulty: "★★",
        text: "How much ___ these shoes?",
        options: [
          "is",
          "are",
          "am",
          "do"
        ],
        answer: 1,
        explanation: "shoes复数用are。"
      },
      {
        id: "e5p37",
        type: "填空题",
        difficulty: "★★",
        text: "How much ___ (be) the pants?",
        answer: "are",
        explanation: "pants复数用are。"
      },
      {
        id: "e5p38",
        type: "填空题",
        difficulty: "★★",
        text: "I'll ___ (take) it. 我买下了。",
        answer: "take",
        explanation: "I'll + 动词原形。"
      },
      {
        id: "e5p39",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：这件衬衫多少钱？",
        answer: "How much is this shirt?",
        explanation: "问价格用How much。"
      },
      {
        id: "e5p40",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我买下了。",
        answer: "I'll take it.",
        explanation: "决定购买用I'll take it."
      },
      {
        id: "e5p41",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：much / how / skirt / is / the (?)",
        answer: "How much is the skirt?",
        explanation: "How much is the skirt?"
      },
      {
        id: "e5p42",
        type: "情景交际",
        difficulty: "★★",
        text: "售货员招呼你时，你想要一双鞋，应说：",
        answer: "Yes, I'd like a pair of shoes.",
        explanation: "用I'd like a pair of shoes礼貌表达。"
      },
      {
        id: "e5p43",
        type: "改错题",
        difficulty: "★★",
        text: "改错：How much are this shirt?",
        answer: "How much is this shirt?",
        explanation: "this shirt单数用is。"
      },
      {
        id: "e5p44",
        type: "改错题",
        difficulty: "★★",
        text: "改错：How much is these pants?",
        answer: "How much are these pants?",
        explanation: "pants复数用are。"
      },
      {
        id: "e5p45",
        type: "单词默写",
        difficulty: "★",
        text: "默写问路词汇：打扰一下、直走、向左转、向右转、在…旁边、在…前面、在…后面、在…之间、医院、电影院",
        answer: "excuse me, go straight, turn left, turn right, next to, in front of, behind, between, hospital, cinema",
        explanation: "问路与方位词。"
      },
      {
        id: "e5p46",
        type: "选择题",
        difficulty: "★★",
        text: "—___ me. Where is the hospital? —It's near here.",
        options: [
          "Excuse",
          "Sorry",
          "Hello",
          "Hi"
        ],
        answer: 0,
        explanation: "打扰别人用Excuse me。"
      },
      {
        id: "e5p47",
        type: "选择题",
        difficulty: "★★",
        text: "Turn left ___ the hospital.",
        options: [
          "at",
          "on",
          "in",
          "to"
        ],
        answer: 0,
        explanation: "在某个地点转弯用at。"
      },
      {
        id: "e5p48",
        type: "填空题",
        difficulty: "★★",
        text: "The cinema is next ___ the hospital.",
        answer: "to",
        explanation: "next to固定搭配，紧挨着。"
      },
      {
        id: "e5p49",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：打扰一下，邮局在哪里？",
        answer: "Excuse me, where is the post office?",
        explanation: "问路礼貌用语Excuse me。"
      },
      {
        id: "e5p50",
        type: "阅读理解",
        difficulty: "★★",
        text: "阅读短文回答：Excuse me. Where is the cinema? Go straight and turn left at the hospital. It's next to the park. 问题：Where is the cinema? How to get there?",
        answer: "It's next to the park. Go straight and turn left at the hospital.",
        explanation: "由It's next to the park和Go straight and turn left...得出。"
      },
      {
        id: "e5p51",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p52",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p53",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p54",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p55",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p56",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p57",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p58",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p59",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p60",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p61",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p62",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p63",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p64",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p65",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p66",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p67",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p68",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p69",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p70",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p71",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p72",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p73",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p74",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p75",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p76",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p77",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p78",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p79",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p80",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p81",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p82",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p83",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p84",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p85",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p86",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p87",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p88",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p89",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p90",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p91",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p92",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p93",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p94",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p95",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p96",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p97",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p98",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p99",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p100",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p101",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p102",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p103",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p104",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p105",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p106",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p107",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p108",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p109",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p110",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p111",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p112",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p113",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p114",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p115",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p116",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p117",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p118",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p119",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p120",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p121",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p122",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p123",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p124",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p125",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p126",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p127",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p128",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p129",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p130",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p131",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p132",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p133",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p134",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p135",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p136",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p137",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p138",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p139",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p140",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p141",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p142",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p143",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p144",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p145",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p146",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p147",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p148",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p149",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p150",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p151",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p152",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p153",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p154",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p155",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p156",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p157",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p158",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p159",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p160",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p161",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p162",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p163",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p164",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p165",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p166",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p167",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p168",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p169",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p170",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p171",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p172",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p173",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p174",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p175",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p176",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p177",
        type: "填空题",
        difficulty: "★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p178",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p179",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p180",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p181",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p182",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p183",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p184",
        type: "选择题",
        difficulty: "★★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p185",
        type: "填空题",
        difficulty: "★★★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p186",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p187",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p188",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p189",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p190",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p191",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p192",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      },
      {
        id: "e5p193",
        type: "填空题",
        difficulty: "★",
        text: "My favourite season is s___ (夏天).",
        answer: "summer",
        explanation: "夏天=summer。"
      },
      {
        id: "e5p194",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我最喜欢春天。",
        answer: "I like spring best.",
        explanation: "最喜欢=like...best。"
      },
      {
        id: "e5p195",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p196",
        type: "情景交际",
        difficulty: "★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p197",
        type: "情景交际",
        difficulty: "★★★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p198",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p199",
        type: "情景交际",
        difficulty: "★",
        text: "问别人生日什么时候：___",
        answer: "When is your birthday?",
        explanation: "When问时间。"
      },
      {
        id: "e5p200",
        type: "选择题",
        difficulty: "★",
        text: "___ do you get up? At 7 o'clock.",
        options: [
          "When",
          "What",
          "Why",
          "Where"
        ],
        answer: 0,
        explanation: "问时间用When。"
      }
    ]
  },
  grade6: {
    旧年级巩固: [
      {
        id: "e6r1",
        type: "单词默写",
        difficulty: "★★",
        text: "默写比较级：更高的、更矮的、更老的、更年轻的、更强壮的、更瘦的、更大的、更小的、更重的、更长的",
        answer: "taller, shorter, older, younger, stronger, thinner, bigger, smaller, heavier, longer",
        explanation: "注意big→bigger双写g，heavy→heavier去y变i。"
      },
      {
        id: "e6r2",
        type: "选择题",
        difficulty: "★★",
        text: "How tall ___ you?",
        options: [
          "am",
          "is",
          "are",
          "do"
        ],
        answer: 2,
        explanation: "you用are。"
      },
      {
        id: "e6r3",
        type: "选择题",
        difficulty: "★★",
        text: "I'm ___ than you.",
        options: [
          "tall",
          "taller",
          "tallest",
          "the taller"
        ],
        answer: 1,
        explanation: "than前用比较级taller。"
      },
      {
        id: "e6r4",
        type: "选择题",
        difficulty: "★★",
        text: "—How ___ are you? —I'm 40 kg.",
        options: [
          "tall",
          "old",
          "heavy",
          "long"
        ],
        answer: 2,
        explanation: "kg是重量单位，问重量用How heavy。"
      },
      {
        id: "e6r5",
        type: "填空题",
        difficulty: "★★",
        text: "Tom is ___ (tall) than Mike.",
        answer: "taller",
        explanation: "than前用比较级。"
      },
      {
        id: "e6r6",
        type: "填空题",
        difficulty: "★★",
        text: "I'm 1.6 ___ (metre) tall.",
        answer: "metres",
        explanation: "1.6大于1，metre用复数metres。"
      },
      {
        id: "e6r7",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你有多高？",
        answer: "How tall are you?",
        explanation: "问身高用How tall。"
      },
      {
        id: "e6r8",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我比你高。",
        answer: "I'm taller than you.",
        explanation: "比较级 + than。"
      },
      {
        id: "e6r9",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：tall / how / you / are (?)",
        answer: "How tall are you?",
        explanation: "How tall are you?"
      },
      {
        id: "e6r10",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：than / I / taller / you / am (.)",
        answer: "I am taller than you.",
        explanation: "I am + 比较级 + than + 人。"
      },
      {
        id: "e6r11",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I'm tall than you.",
        answer: "I'm taller than you.",
        explanation: "than前用比较级taller。"
      },
      {
        id: "e6r12",
        type: "改错题",
        difficulty: "★★",
        text: "改错：How tall are you? I'm 40 kg.",
        answer: "How heavy are you? I'm 40 kg.",
        explanation: "kg是重量单位，问重量用How heavy。"
      },
      {
        id: "e6r13",
        type: "单词默写",
        difficulty: "★★",
        text: "默写过去式：go去、do做、watch看、wash洗、clean打扫、stay停留、have有/患、see看、read读、sleep睡",
        answer: "went, did, watched, washed, cleaned, stayed, had, saw, read, slept",
        explanation: "不规则过去式went/did/had/saw/read/slept；read原形与过去式同形不同音。"
      },
      {
        id: "e6r14",
        type: "选择题",
        difficulty: "★★",
        text: "What ___ you do last weekend?",
        options: [
          "do",
          "did",
          "are",
          "were"
        ],
        answer: 1,
        explanation: "last weekend表过去，用did提问。"
      },
      {
        id: "e6r15",
        type: "选择题",
        difficulty: "★★",
        text: "I ___ TV at home.",
        options: [
          "watch",
          "watched",
          "watching",
          "watches"
        ],
        answer: 1,
        explanation: "上下文为过去时，用watched。"
      },
      {
        id: "e6r16",
        type: "填空题",
        difficulty: "★★",
        text: "I ___ (go) boating yesterday.",
        answer: "went",
        explanation: "yesterday表过去，go→went。"
      },
      {
        id: "e6r17",
        type: "填空题",
        difficulty: "★★",
        text: "___ you see a film? Yes, I did.",
        answer: "Did",
        explanation: "过去时一般疑问句用Did开头。"
      },
      {
        id: "e6r18",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：上周末你做了什么？",
        answer: "What did you do last weekend?",
        explanation: "过去时提问用What did...do?"
      },
      {
        id: "e6r19",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我待在家里看电视。",
        answer: "I stayed at home and watched TV.",
        explanation: "过去时stayed和watched。"
      },
      {
        id: "e6r20",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：you / what / do / did / weekend / last (?)",
        answer: "What did you do last weekend?",
        explanation: "What did you do last weekend?"
      },
      {
        id: "e6r21",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：TV / I / watched / home / at (.)",
        answer: "I watched TV at home.",
        explanation: "I watched TV at home."
      },
      {
        id: "e6r22",
        type: "情景交际",
        difficulty: "★★",
        text: "别人问你Did you play football? 你没踢，应答：",
        answer: "No, I didn't.",
        explanation: "过去时否定回答用No, I didn't."
      },
      {
        id: "e6r23",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I play football last weekend.",
        answer: "I played football last weekend.",
        explanation: "last weekend表过去，用过去式played。"
      },
      {
        id: "e6r24",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Did you went shopping?",
        answer: "Did you go shopping?",
        explanation: "Did后用动词原形go。"
      },
      {
        id: "e6r25",
        type: "单词默写",
        difficulty: "★★",
        text: "默写过去式短语：骑马、骑车、去游泳、拍照、吃新鲜食物、买礼物、去露营、去钓鱼",
        answer: "rode a horse, rode a bike, went swimming, took pictures, ate fresh food, bought gifts, went camping, went fishing",
        explanation: "不规则过去式rode/took/ate/bought，go的过去式为went。"
      },
      {
        id: "e6r26",
        type: "选择题",
        difficulty: "★★",
        text: "—Where did you go? —I ___ to Beijing.",
        options: [
          "go",
          "goes",
          "went",
          "going"
        ],
        answer: 2,
        explanation: "过去时用went。"
      },
      {
        id: "e6r27",
        type: "选择题",
        difficulty: "★★",
        text: "I ___ a horse there.",
        options: [
          "ride",
          "rode",
          "riding",
          "rided"
        ],
        answer: 1,
        explanation: "ride的过去式是rode。"
      },
      {
        id: "e6r28",
        type: "填空题",
        difficulty: "★★",
        text: "I ___ (take) pictures yesterday.",
        answer: "took",
        explanation: "take→took。"
      },
      {
        id: "e6r29",
        type: "填空题",
        difficulty: "★★",
        text: "We ___ (eat) fresh food last night.",
        answer: "ate",
        explanation: "eat→ate。"
      },
      {
        id: "e6r30",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你去哪儿了？",
        answer: "Where did you go?",
        explanation: "Where did you go?"
      },
      {
        id: "e6r31",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我去露营并钓了鱼。",
        answer: "I went camping and went fishing.",
        explanation: "go + doing表进行某项活动。"
      },
      {
        id: "e6r32",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：did / where / you / go (?)",
        answer: "Where did you go?",
        explanation: "Where did you go?"
      },
      {
        id: "e6r33",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：went / I / to / Beijing (.)",
        answer: "I went to Beijing.",
        explanation: "I went to Beijing."
      },
      {
        id: "e6r34",
        type: "情景交际",
        difficulty: "★★",
        text: "你想问朋友假期去了哪里，应说：",
        answer: "Where did you go on your holiday?",
        explanation: "问假期去向用Where did you go?"
      },
      {
        id: "e6r35",
        type: "单词默写",
        difficulty: "★★",
        text: "默写\"过去与现在\"词汇：以前、现在、互联网、查寻、拍照、打羽毛球、体育馆、草地、骑自行车、滑冰",
        answer: "before, now, Internet, look up, take photos, play badminton, gym, grass, cycling, ice-skate",
        explanation: "then and now单元词汇。"
      },
      {
        id: "e6r36",
        type: "选择题",
        difficulty: "★★",
        text: "Before, I ___ like winter. Now I like it.",
        options: [
          "don't",
          "didn't",
          "doesn't",
          "isn't"
        ],
        answer: 1,
        explanation: "Before表过去，用didn't。"
      },
      {
        id: "e6r37",
        type: "选择题",
        difficulty: "★★",
        text: "There ___ no gym in my school before.",
        options: [
          "is",
          "was",
          "were",
          "are"
        ],
        answer: 1,
        explanation: "before表过去，gym单数用was。"
      },
      {
        id: "e6r38",
        type: "填空题",
        difficulty: "★★",
        text: "Now I ___ (love) to ice-skate.",
        answer: "love",
        explanation: "now表现在，主语I用love。"
      },
      {
        id: "e6r39",
        type: "填空题",
        difficulty: "★★",
        text: "Before I ___ (be) short. Now I ___ (be) tall.",
        answer: "was, am",
        explanation: "before用was，now用am。"
      },
      {
        id: "e6r40",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：以前我不喜欢冬天。现在我喜欢了。",
        answer: "Before, I didn't like winter. Now I like it.",
        explanation: "before用过去时，now用现在时。"
      },
      {
        id: "e6r41",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我们学校以前没有体育馆。",
        answer: "There was no gym in our school before.",
        explanation: "before过去时，gym单数用was。"
      },
      {
        id: "e6r42",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：I / didn't / before / like / winter (.)",
        answer: "I didn't like winter before.",
        explanation: "I didn't like winter before."
      },
      {
        id: "e6r43",
        type: "改错题",
        difficulty: "★★",
        text: "改错：Before I don't like maths. Now I do.",
        answer: "Before I didn't like maths. Now I do.",
        explanation: "before表过去，用didn't。"
      },
      {
        id: "e6r44",
        type: "单词默写",
        difficulty: "★★",
        text: "默写学校场所词：图书馆、操场、花园、电脑室、美术室、音乐室、讲台、体育馆、食堂、教室",
        answer: "library, playground, garden, computer room, art room, music room, teacher's desk, gym, canteen, classroom",
        explanation: "学校场所及设施词汇。"
      },
      {
        id: "e6r45",
        type: "选择题",
        difficulty: "★★",
        text: "—What's in the school? —There ___ a big playground.",
        options: [
          "is",
          "are",
          "have",
          "has"
        ],
        answer: 0,
        explanation: "a big playground单数用is。"
      },
      {
        id: "e6r46",
        type: "选择题",
        difficulty: "★★",
        text: "We read books in the ___.",
        options: [
          "library",
          "gym",
          "canteen",
          "garden"
        ],
        answer: 0,
        explanation: "在图书馆读书。"
      },
      {
        id: "e6r47",
        type: "填空题",
        difficulty: "★★",
        text: "___ (be) there a music room?",
        answer: "Is",
        explanation: "a music room单数用Is。"
      },
      {
        id: "e6r48",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我们学校有一个大操场。",
        answer: "There is a big playground in our school.",
        explanation: "There is + 单数名词。"
      },
      {
        id: "e6r49",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：a / there / playground / is (.)",
        answer: "There is a playground.",
        explanation: "There is a playground."
      },
      {
        id: "e6r50",
        type: "阅读理解",
        difficulty: "★★★",
        text: "阅读短文回答：Five years ago, I was short. I couldn't ride a bike. Now I'm tall. I go cycling every weekend. I love it. 问题：Could he ride a bike five years ago? What does he do every weekend now?",
        answer: "No, he couldn't. He goes cycling every weekend.",
        explanation: "由couldn't ride a bike和go cycling every weekend得出。"
      },
      {
        id: "e6r51",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r52",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r53",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r54",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r55",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r56",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r57",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r58",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r59",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r60",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r61",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r62",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r63",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r64",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r65",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r66",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r67",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r68",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r69",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r70",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r71",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r72",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r73",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r74",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r75",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r76",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r77",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r78",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r79",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r80",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r81",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r82",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r83",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r84",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r85",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r86",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r87",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r88",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r89",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r90",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r91",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r92",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r93",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r94",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r95",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r96",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r97",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r98",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r99",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r100",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r101",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r102",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r103",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r104",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r105",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r106",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r107",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r108",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r109",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r110",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r111",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r112",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r113",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r114",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r115",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r116",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r117",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r118",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r119",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r120",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r121",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r122",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r123",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r124",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r125",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r126",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r127",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r128",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r129",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r130",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r131",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r132",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r133",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r134",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r135",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r136",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r137",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r138",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r139",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r140",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r141",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r142",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r143",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r144",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r145",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r146",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r147",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r148",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r149",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r150",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r151",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r152",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r153",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r154",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r155",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r156",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r157",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r158",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r159",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r160",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r161",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r162",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r163",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r164",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r165",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r166",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r167",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r168",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r169",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r170",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r171",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r172",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r173",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r174",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r175",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r176",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r177",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r178",
        type: "翻译题",
        difficulty: "★★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r179",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r180",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r181",
        type: "句型转换",
        difficulty: "★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r182",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r183",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r184",
        type: "选择题",
        difficulty: "★★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r185",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r186",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r187",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r188",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r189",
        type: "句型转换",
        difficulty: "★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r190",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r191",
        type: "单词拼写",
        difficulty: "★★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r192",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      },
      {
        id: "e6r193",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r194",
        type: "翻译题",
        difficulty: "★",
        text: "中译英：我骑自行车上学。",
        answer: "I go to school by bike.",
        explanation: "骑自行车by bike。"
      },
      {
        id: "e6r195",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r196",
        type: "单词拼写",
        difficulty: "★★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r197",
        type: "句型转换",
        difficulty: "★★★",
        text: "改否定句：I like dancing.",
        answer: "I don't like dancing.",
        explanation: "一般现在时用don't。"
      },
      {
        id: "e6r198",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r199",
        type: "单词拼写",
        difficulty: "★",
        text: "英文拼写：邮递员",
        answer: "postman",
        explanation: "邮递员=postman。"
      },
      {
        id: "e6r200",
        type: "选择题",
        difficulty: "★",
        text: "How do you go to school? I go ___ foot.",
        options: [
          "by",
          "on",
          "take",
          "in"
        ],
        answer: 1,
        explanation: "步行on foot是固定搭配。"
      }
    ],
    新学期预习: [
      {
        id: "e6p1",
        type: "单词默写",
        difficulty: "★★",
        text: "默写情绪词：高兴的、伤心的、生气的、累的、生病的、害怕的、担心的、兴奋的",
        answer: "happy, sad, angry, tired, ill, afraid, worried, excited",
        explanation: "情绪形容词，注意afraid和worried的拼写。"
      },
      {
        id: "e6p2",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ you feel?",
        options: [
          "do",
          "are",
          "does",
          "is"
        ],
        answer: 0,
        explanation: "主语you用do。"
      },
      {
        id: "e6p3",
        type: "选择题",
        difficulty: "★★",
        text: "—How do you feel? —I'm ___.（生病）",
        options: [
          "happy",
          "ill",
          "excited",
          "angry"
        ],
        answer: 1,
        explanation: "生病用ill。"
      },
      {
        id: "e6p4",
        type: "选择题",
        difficulty: "★★",
        text: "What should I ___?",
        options: [
          "do",
          "doing",
          "does",
          "did"
        ],
        answer: 0,
        explanation: "should后接动词原形。"
      },
      {
        id: "e6p5",
        type: "填空题",
        difficulty: "★★",
        text: "You ___ (should) see a doctor.",
        answer: "should",
        explanation: "should + 动词原形表建议。"
      },
      {
        id: "e6p6",
        type: "填空题",
        difficulty: "★★",
        text: "Don't be ___ (sad).",
        answer: "sad",
        explanation: "be + 形容词。"
      },
      {
        id: "e6p7",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你感觉怎么样？",
        answer: "How do you feel?",
        explanation: "How do you feel?"
      },
      {
        id: "e6p8",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你应该去看医生。",
        answer: "You should see a doctor.",
        explanation: "should + 动词原形。"
      },
      {
        id: "e6p9",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：feel / how / you / do (?)",
        answer: "How do you feel?",
        explanation: "How do you feel?"
      },
      {
        id: "e6p10",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：should / a doctor / see / you (.)",
        answer: "You should see a doctor.",
        explanation: "You should see a doctor."
      },
      {
        id: "e6p11",
        type: "情景交际",
        difficulty: "★★",
        text: "朋友生病了，你建议他：",
        answer: "You should see a doctor.",
        explanation: "用should + 动词原形给建议。"
      },
      {
        id: "e6p12",
        type: "改错题",
        difficulty: "★★",
        text: "改错：How does you feel?",
        answer: "How do you feel?",
        explanation: "主语you用do。"
      },
      {
        id: "e6p13",
        type: "改错题",
        difficulty: "★★",
        text: "改错：You should to see a doctor.",
        answer: "You should see a doctor.",
        explanation: "should后接动词原形，不加to。"
      },
      {
        id: "e6p14",
        type: "单词默写",
        difficulty: "★★",
        text: "默写职业：老师、医生、护士、工厂工人、邮递员、商人、警察、渔民、科学家、飞行员、教练",
        answer: "teacher, doctor, nurse, factory worker, postman, businessman, police officer, fisherman, scientist, pilot, coach",
        explanation: "职业词汇，注意postman, businessman, fisherman的拼写。"
      },
      {
        id: "e6p15",
        type: "选择题",
        difficulty: "★★",
        text: "—What ___ he do? —He's a doctor.",
        options: [
          "do",
          "does",
          "is",
          "are"
        ],
        answer: 1,
        explanation: "主语he三单用does。"
      },
      {
        id: "e6p16",
        type: "选择题",
        difficulty: "★★",
        text: "—What does your mother ___? —She's a nurse.",
        options: [
          "do",
          "does",
          "doing",
          "job"
        ],
        answer: 0,
        explanation: "does后用动词原形do。"
      },
      {
        id: "e6p17",
        type: "选择题",
        difficulty: "★★",
        text: "—___ does she work? —In a hospital.",
        options: [
          "What",
          "Where",
          "When",
          "How"
        ],
        answer: 1,
        explanation: "问工作地点用Where。"
      },
      {
        id: "e6p18",
        type: "填空题",
        difficulty: "★★",
        text: "What ___ (do) your father do?",
        answer: "does",
        explanation: "your father三单用does。"
      },
      {
        id: "e6p19",
        type: "填空题",
        difficulty: "★★",
        text: "His mother ___ (work) in a school.",
        answer: "works",
        explanation: "his mother三单用works。"
      },
      {
        id: "e6p20",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：你爸爸是做什么的？",
        answer: "What does your father do?",
        explanation: "问职业用What does...do?"
      },
      {
        id: "e6p21",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：他在医院工作。",
        answer: "He works in a hospital.",
        explanation: "三单用works。"
      },
      {
        id: "e6p22",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：he / what / do / does (?)",
        answer: "What does he do?",
        explanation: "What does he do?"
      },
      {
        id: "e6p23",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：hospital / works / a / she / in (.)",
        answer: "She works in a hospital.",
        explanation: "She works in a hospital."
      },
      {
        id: "e6p24",
        type: "情景交际",
        difficulty: "★★",
        text: "你想知道对方妈妈的职业，应问：",
        answer: "What does your mother do?",
        explanation: "问职业用What does...do?"
      },
      {
        id: "e6p25",
        type: "改错题",
        difficulty: "★★",
        text: "改错：What do he do?",
        answer: "What does he do?",
        explanation: "主语he三单用does。"
      },
      {
        id: "e6p26",
        type: "改错题",
        difficulty: "★★",
        text: "改错：What does your father does?",
        answer: "What does your father do?",
        explanation: "does后用动词原形do。"
      },
      {
        id: "e6p27",
        type: "单词默写",
        difficulty: "★★",
        text: "默写城市生活词汇：城市、乡村、大楼、马路、交通、地铁、超市、电影院、公园、嘈杂的、拥挤的",
        answer: "city, country, building, road, traffic, subway, supermarket, cinema, park, noisy, crowded",
        explanation: "城市生活相关词汇。"
      },
      {
        id: "e6p28",
        type: "选择题",
        difficulty: "★★",
        text: "I like ___ in the city.",
        options: [
          "live",
          "living",
          "to living",
          "lives"
        ],
        answer: 1,
        explanation: "like后接doing。"
      },
      {
        id: "e6p29",
        type: "选择题",
        difficulty: "★★",
        text: "There are many tall ___ in the city.",
        options: [
          "building",
          "buildings",
          "a building",
          "the building"
        ],
        answer: 1,
        explanation: "many后接复数buildings。"
      },
      {
        id: "e6p30",
        type: "选择题",
        difficulty: "★★",
        text: "The city is ___ than the country.（更嘈杂）",
        options: [
          "noisy",
          "noisier",
          "noisiest",
          "the noisier"
        ],
        answer: 1,
        explanation: "than前用比较级noisier。"
      },
      {
        id: "e6p31",
        type: "填空题",
        difficulty: "★★",
        text: "I like ___ (read) books in the library.",
        answer: "reading",
        explanation: "like后接doing。"
      },
      {
        id: "e6p32",
        type: "填空题",
        difficulty: "★★",
        text: "The city is ___ (busy) than the country.",
        answer: "busier",
        explanation: "busy→busier，y变i加er。"
      },
      {
        id: "e6p33",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我喜欢城市生活。",
        answer: "I like the city life.",
        explanation: "the city life城市生活。"
      },
      {
        id: "e6p34",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：城市有很多高楼。",
        answer: "There are many tall buildings in the city.",
        explanation: "There are + 复数名词。"
      },
      {
        id: "e6p35",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：like / city / I / the / life (.)",
        answer: "I like the city life.",
        explanation: "I like the city life."
      },
      {
        id: "e6p36",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：many / there / are / buildings / tall (.)",
        answer: "There are many tall buildings.",
        explanation: "There are many tall buildings."
      },
      {
        id: "e6p37",
        type: "情景交际",
        difficulty: "★★",
        text: "你想表达更喜欢乡村的安静，应说：",
        answer: "I like the country. It's quiet.",
        explanation: "对比表达喜好。"
      },
      {
        id: "e6p38",
        type: "改错题",
        difficulty: "★★",
        text: "改错：I like live in the city.",
        answer: "I like living in the city.",
        explanation: "like后接doing。"
      },
      {
        id: "e6p39",
        type: "改错题",
        difficulty: "★★",
        text: "改错：The city is busy than the country.",
        answer: "The city is busier than the country.",
        explanation: "than前用比较级busier。"
      },
      {
        id: "e6p40",
        type: "单词默写",
        difficulty: "★★",
        text: "默写环保词汇：地球、保护、环境、回收、污染、节约用水、种树、塑料袋、垃圾、减少",
        answer: "Earth, protect, environment, recycle, pollute, save water, plant trees, plastic bag, rubbish, reduce",
        explanation: "Protect the Earth单元词汇。"
      },
      {
        id: "e6p41",
        type: "选择题",
        difficulty: "★★",
        text: "We should ___ the Earth.",
        options: [
          "protect",
          "protects",
          "protecting",
          "to protect"
        ],
        answer: 0,
        explanation: "should后接动词原形。"
      },
      {
        id: "e6p42",
        type: "选择题",
        difficulty: "★★",
        text: "We shouldn't ___ water.",
        options: [
          "waste",
          "wastes",
          "wasting",
          "to waste"
        ],
        answer: 0,
        explanation: "shouldn't后接动词原形。"
      },
      {
        id: "e6p43",
        type: "选择题",
        difficulty: "★★",
        text: "We can ___ paper and plastic.",
        options: [
          "reuse",
          "uses",
          "using",
          "to reuse"
        ],
        answer: 0,
        explanation: "can后接动词原形reuse。"
      },
      {
        id: "e6p44",
        type: "填空题",
        difficulty: "★★",
        text: "We should ___ (save) water.",
        answer: "save",
        explanation: "should后接动词原形。"
      },
      {
        id: "e6p45",
        type: "填空题",
        difficulty: "★★",
        text: "Don't ___ (use) too many plastic bags.",
        answer: "use",
        explanation: "Don't后接动词原形。"
      },
      {
        id: "e6p46",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我们应该保护地球。",
        answer: "We should protect the Earth.",
        explanation: "should + 动词原形。"
      },
      {
        id: "e6p47",
        type: "翻译题",
        difficulty: "★★",
        text: "翻译：我们不应该浪费水。",
        answer: "We shouldn't waste water.",
        explanation: "shouldn't + 动词原形。"
      },
      {
        id: "e6p48",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：should / Earth / we / the / protect (.)",
        answer: "We should protect the Earth.",
        explanation: "We should protect the Earth."
      },
      {
        id: "e6p49",
        type: "连词成句",
        difficulty: "★★",
        text: "连词成句：water / shouldn't / we / waste (.)",
        answer: "We shouldn't waste water.",
        explanation: "We shouldn't waste water."
      },
      {
        id: "e6p50",
        type: "阅读理解",
        difficulty: "★★★",
        text: "阅读短文回答：Our Earth is sick. We should protect it. We shouldn't waste water. We can reuse paper bags. We can plant more trees. 问题：What should we do? What shouldn't we do?",
        answer: "We should protect the Earth and plant more trees. We shouldn't waste water.",
        explanation: "由We should protect it/plant more trees和We shouldn't waste water得出。"
      },
      {
        id: "e6p51",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p52",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p53",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p54",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p55",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p56",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p57",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p58",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p59",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p60",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p61",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p62",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p63",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p64",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p65",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p66",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p67",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p68",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p69",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p70",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p71",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p72",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p73",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p74",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p75",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p76",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p77",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p78",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p79",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p80",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p81",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p82",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p83",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p84",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p85",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p86",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p87",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p88",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p89",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p90",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p91",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p92",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p93",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p94",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p95",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p96",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p97",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p98",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p99",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p100",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p101",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p102",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p103",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p104",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p105",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p106",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p107",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p108",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p109",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p110",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p111",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p112",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p113",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p114",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p115",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p116",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p117",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p118",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p119",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p120",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p121",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p122",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p123",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p124",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p125",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p126",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p127",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p128",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p129",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p130",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p131",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p132",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p133",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p134",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p135",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p136",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p137",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p138",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p139",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p140",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p141",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p142",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p143",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p144",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p145",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p146",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p147",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p148",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p149",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p150",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p151",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p152",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p153",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p154",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p155",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p156",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p157",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p158",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p159",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p160",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p161",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p162",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p163",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p164",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p165",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p166",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p167",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p168",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p169",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p170",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p171",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p172",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p173",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p174",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p175",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p176",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p177",
        type: "填空题",
        difficulty: "★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p178",
        type: "翻译题",
        difficulty: "★★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p179",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p180",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p181",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p182",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p183",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p184",
        type: "选择题",
        difficulty: "★★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p185",
        type: "填空题",
        difficulty: "★★★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p186",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p187",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p188",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p189",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p190",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p191",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p192",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      },
      {
        id: "e6p193",
        type: "填空题",
        difficulty: "★",
        text: "I have a c___. I should see a doctor. (感冒)",
        answer: "cold",
        explanation: "感冒=have a cold。"
      },
      {
        id: "e6p194",
        type: "翻译题",
        difficulty: "★",
        text: "英译中：I watched TV last night.",
        answer: "我昨晚看电视了。",
        explanation: "watched是过去式，last night昨晚。"
      },
      {
        id: "e6p195",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p196",
        type: "连词成句",
        difficulty: "★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p197",
        type: "连词成句",
        difficulty: "★★★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p198",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p199",
        type: "连词成句",
        difficulty: "★",
        text: "排列：did you what weekend do last ?",
        answer: "What did you do last weekend?",
        explanation: "一般过去时疑问句。"
      },
      {
        id: "e6p200",
        type: "选择题",
        difficulty: "★",
        text: "How ___ are you? I'm 1.6 metres.",
        options: [
          "tall",
          "heavy",
          "old",
          "big"
        ],
        answer: 0,
        explanation: "问身高用How tall。"
      }
    ]
  }
};
