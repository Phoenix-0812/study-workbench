const MATH_QUESTIONS = {
  grade4: {
    旧年级巩固: [
      {
        id: "m4r1",
        type: "计算题",
        difficulty: "★",
        text: "25×32×125",
        answer: "100000",
        explanation: "32=4×8，原式=25×4×8×125=(25×4)×(8×125)=100×1000=100000。"
      },
      {
        id: "m4r2",
        type: "计算题",
        difficulty: "★",
        text: "37+45",
        answer: "82",
        explanation: "37+45=82。"
      },
      {
        id: "m4r3",
        type: "计算题",
        difficulty: "★",
        text: "84÷7",
        answer: "12",
        explanation: "84÷7=12。"
      },
      {
        id: "m4r4",
        type: "计算题",
        difficulty: "★",
        text: "360÷9",
        answer: "40",
        explanation: "360÷9=40。"
      },
      {
        id: "m4r5",
        type: "计算题",
        difficulty: "★",
        text: "125×8",
        answer: "1000",
        explanation: "125×8=1000，是常用凑整结果。"
      },
      {
        id: "m4r6",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：99×46",
        answer: "4554",
        explanation: "99×46=(100-1)×46=4600-46=4554。"
      },
      {
        id: "m4r7",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：25×44",
        answer: "1100",
        explanation: "25×44=25×4×11=100×11=1100。"
      },
      {
        id: "m4r8",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：36×99+36",
        answer: "3600",
        explanation: "36×99+36=36×(99+1)=36×100=3600。"
      },
      {
        id: "m4r9",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：125×32",
        answer: "4000",
        explanation: "125×32=125×8×4=1000×4=4000。"
      },
      {
        id: "m4r10",
        type: "计算题",
        difficulty: "★",
        text: "24×15",
        answer: "360",
        explanation: "24×15=360。"
      },
      {
        id: "m4r11",
        type: "填空题",
        difficulty: "★",
        text: "3个万和5个千组成的数是____。",
        answer: "35000",
        explanation: "3万=30000，5千=5000，合起来是35000。"
      },
      {
        id: "m4r12",
        type: "填空题",
        difficulty: "★",
        text: "1时=____分。",
        answer: "60",
        explanation: "1时=60分。"
      },
      {
        id: "m4r13",
        type: "填空题",
        difficulty: "★",
        text: "1米=____厘米。",
        answer: "100",
        explanation: "1米=100厘米。"
      },
      {
        id: "m4r14",
        type: "填空题",
        difficulty: "★",
        text: "长方形周长公式：____。",
        answer: "(长+宽)×2",
        explanation: "长方形周长=（长+宽）×2。"
      },
      {
        id: "m4r15",
        type: "填空题",
        difficulty: "★",
        text: "正方形面积公式：____。",
        answer: "边长×边长",
        explanation: "正方形面积=边长×边长。"
      },
      {
        id: "m4r16",
        type: "填空题",
        difficulty: "★★",
        text: "一个长方形长8厘米，宽5厘米，它的面积是____平方厘米。",
        answer: "40",
        explanation: "8×5=40（平方厘米）。"
      },
      {
        id: "m4r17",
        type: "填空题",
        difficulty: "★★",
        text: "一个正方形边长6厘米，周长是____厘米。",
        answer: "24",
        explanation: "6×4=24（厘米）。"
      },
      {
        id: "m4r18",
        type: "填空题",
        difficulty: "★★",
        text: "3/4里面有____个1/4。",
        answer: "3",
        explanation: "分数单位是1/4，分子是3，所以有3个1/4。"
      },
      {
        id: "m4r19",
        type: "填空题",
        difficulty: "★",
        text: "1吨=____千克。",
        answer: "1000",
        explanation: "1吨=1000千克。"
      },
      {
        id: "m4r20",
        type: "填空题",
        difficulty: "★",
        text: "1千米=____米。",
        answer: "1000",
        explanation: "1千米=1000米。"
      },
      {
        id: "m4r21",
        type: "选择题",
        difficulty: "★★",
        text: "下面各数中，一个零也不读的是（  ）。",
        options: [
          "6006000",
          "6000600",
          "6000060",
          "6000006"
        ],
        answer: 0,
        explanation: "6006000读作六百万六千，个级6000首位是6不读零；其余各数个级首位是0都要读出一个零。"
      },
      {
        id: "m4r22",
        type: "选择题",
        difficulty: "★",
        text: "下面质量单位换算正确的是（  ）。",
        options: [
          "1吨=100千克",
          "1千克=1000克",
          "1千克=100克",
          "1吨=10千克"
        ],
        answer: 1,
        explanation: "1千克=1000克，1吨=1000千克。"
      },
      {
        id: "m4r23",
        type: "判断题",
        difficulty: "★★",
        text: "把一个长方形拉成平行四边形，周长不变。",
        answer: "正确",
        explanation: "四条边长度不变，所以周长不变；但高变小，面积变小。"
      },
      {
        id: "m4r24",
        type: "判断题",
        difficulty: "★",
        text: "边长4厘米的正方形，周长和面积相等。",
        answer: "错误",
        explanation: "周长是16厘米，面积是16平方厘米，单位不同不能比较。"
      },
      {
        id: "m4r25",
        type: "判断题",
        difficulty: "★★",
        text: "两个面积相等的长方形，周长也一定相等。",
        answer: "错误",
        explanation: "举例面积12：12×1周长26，3×4周长14，周长不同。"
      },
      {
        id: "m4r26",
        type: "应用题",
        difficulty: "★★",
        text: "小明家到学校820米，他每分钟走60米，12分钟能到学校吗？",
        answer: "不能",
        explanation: "60×12=720（米），720<820，所以不能到，还差820-720=100米。"
      },
      {
        id: "m4r27",
        type: "应用题",
        difficulty: "★★",
        text: "一本故事书共120页，小红每天看15页，8天能看完吗？",
        answer: "能",
        explanation: "15×8=120（页），正好等于总页数，能看完。"
      },
      {
        id: "m4r28",
        type: "应用题",
        difficulty: "★★",
        text: "学校买来5箱粉笔，每箱24盒，每盒8元，一共多少元？",
        answer: "960元",
        explanation: "5×24×8=120×8=960（元）。"
      },
      {
        id: "m4r29",
        type: "应用题",
        difficulty: "★★",
        text: "一个长方形花坛长12米，宽8米，它的面积和周长各是多少？",
        answer: "面积96平方米，周长40米",
        explanation: "面积12×8=96平方米；周长(12+8)×2=40米。"
      },
      {
        id: "m4r30",
        type: "应用题",
        difficulty: "★★",
        text: "一辆汽车3小时行240千米，平均每小时行多少千米？",
        answer: "80千米",
        explanation: "240÷3=80（千米/时）。"
      },
      {
        id: "m4r31",
        type: "应用题",
        difficulty: "★★★",
        text: "果园里有苹果树15行，每行12棵，梨树比苹果树多30棵，梨树有多少棵？",
        answer: "210棵",
        explanation: "苹果树15×12=180棵，梨树180+30=210棵。"
      },
      {
        id: "m4r32",
        type: "计算题",
        difficulty: "★★",
        text: "125×24",
        answer: "3000",
        explanation: "125×8×3=1000×3=3000。"
      },
      {
        id: "m4r33",
        type: "计算题",
        difficulty: "★",
        text: "630÷70",
        answer: "9",
        explanation: "630÷70=9。"
      },
      {
        id: "m4r34",
        type: "计算题",
        difficulty: "★",
        text: "480÷60",
        answer: "8",
        explanation: "480÷60=8。"
      },
      {
        id: "m4r35",
        type: "计算题",
        difficulty: "★★",
        text: "256÷4",
        answer: "64",
        explanation: "256÷4=64。"
      },
      {
        id: "m4r36",
        type: "计算题",
        difficulty: "★★",
        text: "408÷8",
        answer: "51",
        explanation: "408÷8=51。"
      },
      {
        id: "m4r37",
        type: "计算题",
        difficulty: "★★",
        text: "35×14",
        answer: "490",
        explanation: "35×14=490。"
      },
      {
        id: "m4r38",
        type: "计算题",
        difficulty: "★★",
        text: "73×26",
        answer: "1898",
        explanation: "73×26=1898。"
      },
      {
        id: "m4r39",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：48×125",
        answer: "6000",
        explanation: "48×125=6×8×125=6×1000=6000。"
      },
      {
        id: "m4r40",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：98×102",
        answer: "9996",
        explanation: "98×102=(100-2)×(100+2)=10000-4=9996。"
      },
      {
        id: "m4r41",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：25×7×4",
        answer: "700",
        explanation: "25×4×7=100×7=700。"
      },
      {
        id: "m4r42",
        type: "填空题",
        difficulty: "★★",
        text: "一个数除以6商8余3，这个数是____。",
        answer: "51",
        explanation: "被除数=商×除数+余数=6×8+3=51。"
      },
      {
        id: "m4r43",
        type: "填空题",
        difficulty: "★★",
        text: "在□÷8=12……△中，△最大是____。",
        answer: "7",
        explanation: "余数要比除数小，除数是8，余数最大是7。"
      },
      {
        id: "m4r44",
        type: "选择题",
        difficulty: "★★",
        text: "一个正方形边长扩大到原来的2倍，面积扩大到原来的（  ）倍。",
        options: [
          "2",
          "4",
          "8",
          "16"
        ],
        answer: 1,
        explanation: "面积=边长×边长，边长扩大2倍，面积扩大2×2=4倍。"
      },
      {
        id: "m4r45",
        type: "选择题",
        difficulty: "★★",
        text: "两个数相乘，一个因数扩大3倍，另一个因数不变，积（  ）。",
        options: [
          "扩大3倍",
          "不变",
          "缩小3倍",
          "扩大6倍"
        ],
        answer: 0,
        explanation: "一个因数不变，另一个因数扩大几倍，积也扩大相同的倍数。"
      },
      {
        id: "m4r46",
        type: "图形题",
        difficulty: "★★",
        text: "一个长方形长10厘米，宽6厘米，从中剪去一个最大的正方形，剩下部分的面积是多少？",
        answer: "24平方厘米",
        explanation: "最大正方形边长为宽6厘米，面积6×6=36；剩下10×6-36=60-36=24平方厘米。"
      },
      {
        id: "m4r47",
        type: "图形题",
        difficulty: "★",
        text: "三角形有____条边、____个角、____个顶点。",
        answer: "3，3，3",
        explanation: "三角形由三条线段围成，有3条边、3个角、3个顶点。"
      },
      {
        id: "m4r48",
        type: "填空题",
        difficulty: "★★",
        text: "钟面上3时整，时针和分针所成的角是____角，是____度。",
        answer: "直，90",
        explanation: "3时整时针和分针互相垂直，成90°直角。"
      },
      {
        id: "m4r49",
        type: "填空题",
        difficulty: "★",
        text: "1元=____角，1角=____分。",
        answer: "10，10",
        explanation: "1元=10角，1角=10分。"
      },
      {
        id: "m4r50",
        type: "应用题",
        difficulty: "★★★",
        text: "四年级同学去植树，分成8个小组，每组12人，每人植5棵，一共植树多少棵？",
        answer: "480棵",
        explanation: "8×12×5=96×5=480棵。"
      },
      {
        id: "m4r51",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r52",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长73米，宽10米，面积是多少平方米？",
        answer: "730平方米",
        explanation: "长方形面积=长×宽=73×10=730平方米。"
      },
      {
        id: "m4r53",
        type: "简便运算",
        difficulty: "★★★",
        text: "72×5+72×5",
        answer: "720",
        explanation: "运用乘法分配律：72×(5+5)=72×10=720。"
      },
      {
        id: "m4r54",
        type: "解方程",
        difficulty: "★",
        text: "x + 4 = 16",
        answer: "x=12",
        explanation: "x = 16-4 = 12。"
      },
      {
        id: "m4r55",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r56",
        type: "计算题",
        difficulty: "★",
        text: "45×90",
        answer: "4050",
        explanation: "45×90=4050。"
      },
      {
        id: "m4r57",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r58",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r59",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r60",
        type: "应用题",
        difficulty: "★",
        text: "学校买了61套课桌椅，每套6元，一共花了多少元？",
        answer: "366元",
        explanation: "61×6=366元。"
      },
      {
        id: "m4r61",
        type: "简便运算",
        difficulty: "★",
        text: "40×4+40×6",
        answer: "400",
        explanation: "运用乘法分配律：40×(4+6)=40×10=400。"
      },
      {
        id: "m4r62",
        type: "解方程",
        difficulty: "★",
        text: "x + 18 = 47",
        answer: "x=29",
        explanation: "x = 47-18 = 29。"
      },
      {
        id: "m4r63",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r64",
        type: "计算题",
        difficulty: "★★",
        text: "525÷5",
        answer: "105",
        explanation: "525÷5=105。"
      },
      {
        id: "m4r65",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r66",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r67",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r68",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走50米，他走了8分钟，共走了多少米？",
        answer: "400米",
        explanation: "路程=速度×时间=50×8=400米。"
      },
      {
        id: "m4r69",
        type: "简便运算",
        difficulty: "★★",
        text: "20×5+20×5",
        answer: "200",
        explanation: "运用乘法分配律：20×(5+5)=20×10=200。"
      },
      {
        id: "m4r70",
        type: "解方程",
        difficulty: "★★",
        text: "x + 6 = 54",
        answer: "x=48",
        explanation: "x = 54-6 = 48。"
      },
      {
        id: "m4r71",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r72",
        type: "计算题",
        difficulty: "★",
        text: "754×5",
        answer: "3770",
        explanation: "754×5=3770。"
      },
      {
        id: "m4r73",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r74",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r75",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r76",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长25米，宽5米，面积是多少平方米？",
        answer: "125平方米",
        explanation: "长方形面积=长×宽=25×5=125平方米。"
      },
      {
        id: "m4r77",
        type: "简便运算",
        difficulty: "★★★",
        text: "29×5+29×5",
        answer: "290",
        explanation: "运用乘法分配律：29×(5+5)=29×10=290。"
      },
      {
        id: "m4r78",
        type: "解方程",
        difficulty: "★",
        text: "x + 2 = 20",
        answer: "x=18",
        explanation: "x = 20-2 = 18。"
      },
      {
        id: "m4r79",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r80",
        type: "计算题",
        difficulty: "★",
        text: "68×136",
        answer: "9248",
        explanation: "68×136=9248。"
      },
      {
        id: "m4r81",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r82",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r83",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r84",
        type: "应用题",
        difficulty: "★",
        text: "学校买了41套课桌椅，每套10元，一共花了多少元？",
        answer: "410元",
        explanation: "41×10=410元。"
      },
      {
        id: "m4r85",
        type: "简便运算",
        difficulty: "★",
        text: "51×8+51×2",
        answer: "510",
        explanation: "运用乘法分配律：51×(8+2)=51×10=510。"
      },
      {
        id: "m4r86",
        type: "解方程",
        difficulty: "★",
        text: "x + 19 = 25",
        answer: "x=6",
        explanation: "x = 25-19 = 6。"
      },
      {
        id: "m4r87",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r88",
        type: "计算题",
        difficulty: "★★",
        text: "5640÷8",
        answer: "705",
        explanation: "5640÷8=705。"
      },
      {
        id: "m4r89",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r90",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r91",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r92",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走61米，他走了23分钟，共走了多少米？",
        answer: "1403米",
        explanation: "路程=速度×时间=61×23=1403米。"
      },
      {
        id: "m4r93",
        type: "简便运算",
        difficulty: "★★",
        text: "56×5+56×5",
        answer: "560",
        explanation: "运用乘法分配律：56×(5+5)=56×10=560。"
      },
      {
        id: "m4r94",
        type: "解方程",
        difficulty: "★★",
        text: "x + 1 = 32",
        answer: "x=31",
        explanation: "x = 32-1 = 31。"
      },
      {
        id: "m4r95",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r96",
        type: "计算题",
        difficulty: "★",
        text: "230×7",
        answer: "1610",
        explanation: "230×7=1610。"
      },
      {
        id: "m4r97",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r98",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r99",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r100",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长27米，宽15米，面积是多少平方米？",
        answer: "405平方米",
        explanation: "长方形面积=长×宽=27×15=405平方米。"
      },
      {
        id: "m4r101",
        type: "简便运算",
        difficulty: "★★★",
        text: "93×9+93×1",
        answer: "930",
        explanation: "运用乘法分配律：93×(9+1)=93×10=930。"
      },
      {
        id: "m4r102",
        type: "解方程",
        difficulty: "★",
        text: "x + 20 = 43",
        answer: "x=23",
        explanation: "x = 43-20 = 23。"
      },
      {
        id: "m4r103",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r104",
        type: "计算题",
        difficulty: "★",
        text: "84×168",
        answer: "14112",
        explanation: "84×168=14112。"
      },
      {
        id: "m4r105",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r106",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r107",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r108",
        type: "应用题",
        difficulty: "★",
        text: "学校买了76套课桌椅，每套22元，一共花了多少元？",
        answer: "1672元",
        explanation: "76×22=1672元。"
      },
      {
        id: "m4r109",
        type: "简便运算",
        difficulty: "★",
        text: "53×4+53×6",
        answer: "530",
        explanation: "运用乘法分配律：53×(4+6)=53×10=530。"
      },
      {
        id: "m4r110",
        type: "解方程",
        difficulty: "★",
        text: "x + 4 = 17",
        answer: "x=13",
        explanation: "x = 17-4 = 13。"
      },
      {
        id: "m4r111",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r112",
        type: "计算题",
        difficulty: "★★",
        text: "1137÷3",
        answer: "379",
        explanation: "1137÷3=379。"
      },
      {
        id: "m4r113",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r114",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r115",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r116",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走38米，他走了10分钟，共走了多少米？",
        answer: "380米",
        explanation: "路程=速度×时间=38×10=380米。"
      },
      {
        id: "m4r117",
        type: "简便运算",
        difficulty: "★★",
        text: "69×8+69×2",
        answer: "690",
        explanation: "运用乘法分配律：69×(8+2)=69×10=690。"
      },
      {
        id: "m4r118",
        type: "解方程",
        difficulty: "★★",
        text: "x + 12 = 44",
        answer: "x=32",
        explanation: "x = 44-12 = 32。"
      },
      {
        id: "m4r119",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r120",
        type: "计算题",
        difficulty: "★",
        text: "908×7",
        answer: "6356",
        explanation: "908×7=6356。"
      },
      {
        id: "m4r121",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r122",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r123",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r124",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长58米，宽9米，面积是多少平方米？",
        answer: "522平方米",
        explanation: "长方形面积=长×宽=58×9=522平方米。"
      },
      {
        id: "m4r125",
        type: "简便运算",
        difficulty: "★★★",
        text: "32×9+32×1",
        answer: "320",
        explanation: "运用乘法分配律：32×(9+1)=32×10=320。"
      },
      {
        id: "m4r126",
        type: "解方程",
        difficulty: "★",
        text: "x + 2 = 44",
        answer: "x=42",
        explanation: "x = 44-2 = 42。"
      },
      {
        id: "m4r127",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r128",
        type: "计算题",
        difficulty: "★",
        text: "35×70",
        answer: "2450",
        explanation: "35×70=2450。"
      },
      {
        id: "m4r129",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r130",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r131",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r132",
        type: "应用题",
        difficulty: "★",
        text: "学校买了46套课桌椅，每套13元，一共花了多少元？",
        answer: "598元",
        explanation: "46×13=598元。"
      },
      {
        id: "m4r133",
        type: "简便运算",
        difficulty: "★",
        text: "86×6+86×4",
        answer: "860",
        explanation: "运用乘法分配律：86×(6+4)=86×10=860。"
      },
      {
        id: "m4r134",
        type: "解方程",
        difficulty: "★",
        text: "x + 19 = 61",
        answer: "x=42",
        explanation: "x = 61-19 = 42。"
      },
      {
        id: "m4r135",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r136",
        type: "计算题",
        difficulty: "★★",
        text: "5859÷9",
        answer: "651",
        explanation: "5859÷9=651。"
      },
      {
        id: "m4r137",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r138",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r139",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r140",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走58米，他走了12分钟，共走了多少米？",
        answer: "696米",
        explanation: "路程=速度×时间=58×12=696米。"
      },
      {
        id: "m4r141",
        type: "简便运算",
        difficulty: "★★",
        text: "41×6+41×4",
        answer: "410",
        explanation: "运用乘法分配律：41×(6+4)=41×10=410。"
      },
      {
        id: "m4r142",
        type: "解方程",
        difficulty: "★★",
        text: "x + 13 = 32",
        answer: "x=19",
        explanation: "x = 32-13 = 19。"
      },
      {
        id: "m4r143",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r144",
        type: "计算题",
        difficulty: "★",
        text: "374×2",
        answer: "748",
        explanation: "374×2=748。"
      },
      {
        id: "m4r145",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r146",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r147",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r148",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长80米，宽21米，面积是多少平方米？",
        answer: "1680平方米",
        explanation: "长方形面积=长×宽=80×21=1680平方米。"
      },
      {
        id: "m4r149",
        type: "简便运算",
        difficulty: "★★★",
        text: "60×7+60×3",
        answer: "600",
        explanation: "运用乘法分配律：60×(7+3)=60×10=600。"
      },
      {
        id: "m4r150",
        type: "解方程",
        difficulty: "★",
        text: "x + 19 = 35",
        answer: "x=16",
        explanation: "x = 35-19 = 16。"
      },
      {
        id: "m4r151",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r152",
        type: "计算题",
        difficulty: "★",
        text: "78×156",
        answer: "12168",
        explanation: "78×156=12168。"
      },
      {
        id: "m4r153",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r154",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r155",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r156",
        type: "应用题",
        difficulty: "★",
        text: "学校买了67套课桌椅，每套22元，一共花了多少元？",
        answer: "1474元",
        explanation: "67×22=1474元。"
      },
      {
        id: "m4r157",
        type: "简便运算",
        difficulty: "★",
        text: "96×7+96×3",
        answer: "960",
        explanation: "运用乘法分配律：96×(7+3)=96×10=960。"
      },
      {
        id: "m4r158",
        type: "解方程",
        difficulty: "★",
        text: "x + 1 = 18",
        answer: "x=17",
        explanation: "x = 18-1 = 17。"
      },
      {
        id: "m4r159",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r160",
        type: "计算题",
        difficulty: "★★",
        text: "4332÷6",
        answer: "722",
        explanation: "4332÷6=722。"
      },
      {
        id: "m4r161",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r162",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r163",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r164",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走71米，他走了9分钟，共走了多少米？",
        answer: "639米",
        explanation: "路程=速度×时间=71×9=639米。"
      },
      {
        id: "m4r165",
        type: "简便运算",
        difficulty: "★★",
        text: "84×5+84×5",
        answer: "840",
        explanation: "运用乘法分配律：84×(5+5)=84×10=840。"
      },
      {
        id: "m4r166",
        type: "解方程",
        difficulty: "★★",
        text: "x + 6 = 28",
        answer: "x=22",
        explanation: "x = 28-6 = 22。"
      },
      {
        id: "m4r167",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r168",
        type: "计算题",
        difficulty: "★",
        text: "641×8",
        answer: "5128",
        explanation: "641×8=5128。"
      },
      {
        id: "m4r169",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r170",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r171",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r172",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长57米，宽12米，面积是多少平方米？",
        answer: "684平方米",
        explanation: "长方形面积=长×宽=57×12=684平方米。"
      },
      {
        id: "m4r173",
        type: "简便运算",
        difficulty: "★★★",
        text: "58×5+58×5",
        answer: "580",
        explanation: "运用乘法分配律：58×(5+5)=58×10=580。"
      },
      {
        id: "m4r174",
        type: "解方程",
        difficulty: "★",
        text: "x + 15 = 62",
        answer: "x=47",
        explanation: "x = 62-15 = 47。"
      },
      {
        id: "m4r175",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r176",
        type: "计算题",
        difficulty: "★",
        text: "43×86",
        answer: "3698",
        explanation: "43×86=3698。"
      },
      {
        id: "m4r177",
        type: "填空题",
        difficulty: "★★",
        text: "平角=____度",
        answer: "180",
        explanation: "平角等于180度。"
      },
      {
        id: "m4r178",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪个数只读一个零？",
        options: [
          "3005000",
          "3050000",
          "30050000",
          "3500000"
        ],
        answer: 1,
        explanation: "3050000读作三百零五万，读一个零。"
      },
      {
        id: "m4r179",
        type: "判断题",
        difficulty: "★★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r180",
        type: "应用题",
        difficulty: "★",
        text: "学校买了42套课桌椅，每套13元，一共花了多少元？",
        answer: "546元",
        explanation: "42×13=546元。"
      },
      {
        id: "m4r181",
        type: "简便运算",
        difficulty: "★",
        text: "42×4+42×6",
        answer: "420",
        explanation: "运用乘法分配律：42×(4+6)=42×10=420。"
      },
      {
        id: "m4r182",
        type: "解方程",
        difficulty: "★",
        text: "x + 18 = 34",
        answer: "x=16",
        explanation: "x = 34-18 = 16。"
      },
      {
        id: "m4r183",
        type: "单位换算",
        difficulty: "★★",
        text: "5公顷=____平方米",
        answer: "50000",
        explanation: "5×10000=50000平方米。"
      },
      {
        id: "m4r184",
        type: "计算题",
        difficulty: "★★",
        text: "3325÷7",
        answer: "475",
        explanation: "3325÷7=475。"
      },
      {
        id: "m4r185",
        type: "填空题",
        difficulty: "★★★",
        text: "最大的八位数是____",
        answer: "99999999",
        explanation: "每个数位上都是9的八位数最大。"
      },
      {
        id: "m4r186",
        type: "选择题",
        difficulty: "★",
        text: "下面哪个是钝角？",
        options: [
          "89°",
          "90°",
          "100°",
          "180°"
        ],
        answer: 2,
        explanation: "钝角大于90°小于180°，100°是钝角。"
      },
      {
        id: "m4r187",
        type: "判断题",
        difficulty: "★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r188",
        type: "应用题",
        difficulty: "★",
        text: "小明每分钟走30米，他走了25分钟，共走了多少米？",
        answer: "750米",
        explanation: "路程=速度×时间=30×25=750米。"
      },
      {
        id: "m4r189",
        type: "简便运算",
        difficulty: "★★",
        text: "82×5+82×5",
        answer: "820",
        explanation: "运用乘法分配律：82×(5+5)=82×10=820。"
      },
      {
        id: "m4r190",
        type: "解方程",
        difficulty: "★★",
        text: "x + 11 = 42",
        answer: "x=31",
        explanation: "x = 42-11 = 31。"
      },
      {
        id: "m4r191",
        type: "单位换算",
        difficulty: "★★★",
        text: "60000平方米=____公顷",
        answer: "6",
        explanation: "60000÷10000=6公顷。"
      },
      {
        id: "m4r192",
        type: "计算题",
        difficulty: "★",
        text: "489×9",
        answer: "4401",
        explanation: "489×9=4401。"
      },
      {
        id: "m4r193",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4r194",
        type: "选择题",
        difficulty: "★",
        text: "两条平行线之间的距离（  ）。",
        options: [
          "处处相等",
          "越来越大",
          "越来越小",
          "不确定"
        ],
        answer: 0,
        explanation: "平行线之间的距离处处相等。"
      },
      {
        id: "m4r195",
        type: "判断题",
        difficulty: "★★",
        text: "0不能作除数。（  ）",
        answer: "√",
        explanation: "0作除数无意义。"
      },
      {
        id: "m4r196",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形苗圃，长51米，宽14米，面积是多少平方米？",
        answer: "714平方米",
        explanation: "长方形面积=长×宽=51×14=714平方米。"
      },
      {
        id: "m4r197",
        type: "简便运算",
        difficulty: "★★★",
        text: "21×4+21×6",
        answer: "210",
        explanation: "运用乘法分配律：21×(4+6)=21×10=210。"
      },
      {
        id: "m4r198",
        type: "解方程",
        difficulty: "★",
        text: "x + 4 = 18",
        answer: "x=14",
        explanation: "x = 18-4 = 14。"
      },
      {
        id: "m4r199",
        type: "单位换算",
        difficulty: "★",
        text: "8平方千米=____公顷",
        answer: "800",
        explanation: "8×100=800公顷。"
      },
      {
        id: "m4r200",
        type: "计算题",
        difficulty: "★",
        text: "50×100",
        answer: "5000",
        explanation: "50×100=5000。"
      }
    ],
    新学期预习: [
      {
        id: "m4p1",
        type: "计算题",
        difficulty: "★★",
        text: "125×88简便计算",
        answer: "11000",
        explanation: "125×8×11=1000×11=11000。"
      },
      {
        id: "m4p2",
        type: "计算题",
        difficulty: "★★",
        text: "342×15",
        answer: "5130",
        explanation: "342×15=5130。"
      },
      {
        id: "m4p3",
        type: "计算题",
        difficulty: "★★",
        text: "208×34",
        answer: "7072",
        explanation: "208×34=7072。"
      },
      {
        id: "m4p4",
        type: "计算题",
        difficulty: "★★",
        text: "156×23",
        answer: "3588",
        explanation: "156×23=3588。"
      },
      {
        id: "m4p5",
        type: "计算题",
        difficulty: "★★",
        text: "624÷26",
        answer: "24",
        explanation: "624÷26=24。"
      },
      {
        id: "m4p6",
        type: "计算题",
        difficulty: "★★",
        text: "832÷32",
        answer: "26",
        explanation: "832÷32=26。"
      },
      {
        id: "m4p7",
        type: "计算题",
        difficulty: "★★",
        text: "918÷54",
        answer: "17",
        explanation: "918÷54=17。"
      },
      {
        id: "m4p8",
        type: "计算题",
        difficulty: "★★",
        text: "720÷18",
        answer: "40",
        explanation: "720÷18=40。"
      },
      {
        id: "m4p9",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：450÷25",
        answer: "18",
        explanation: "450÷25=(450×4)÷(25×4)=1800÷100=18。"
      },
      {
        id: "m4p10",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：125×48",
        answer: "6000",
        explanation: "125×8×6=1000×6=6000。"
      },
      {
        id: "m4p11",
        type: "填空题",
        difficulty: "★",
        text: "10个一万是____。",
        answer: "十万",
        explanation: "每相邻两个计数单位间的进率是10，10个一万是十万。"
      },
      {
        id: "m4p12",
        type: "填空题",
        difficulty: "★",
        text: "10个十万是____。",
        answer: "一百万",
        explanation: "10个十万是一百万。"
      },
      {
        id: "m4p13",
        type: "填空题",
        difficulty: "★",
        text: "10个一百万是____。",
        answer: "一千万",
        explanation: "10个一百万是一千万。"
      },
      {
        id: "m4p14",
        type: "填空题",
        difficulty: "★",
        text: "10个一千万是____。",
        answer: "一亿",
        explanation: "10个一千万是一亿。"
      },
      {
        id: "m4p15",
        type: "填空题",
        difficulty: "★★",
        text: "30504000读作____。",
        answer: "三千零五十万四千",
        explanation: "万级3050读作三千零五十万，个级4000读作四千。"
      },
      {
        id: "m4p16",
        type: "填空题",
        difficulty: "★★",
        text: "六千零三万零五百写作____。",
        answer: "60030500",
        explanation: "六千零三万=6003万，零五百=0500，合起来60030500。"
      },
      {
        id: "m4p17",
        type: "填空题",
        difficulty: "★★",
        text: "把9500000改写成用\"万\"作单位的数是____。",
        answer: "950万",
        explanation: "去掉末尾4个0，加\"万\"字。"
      },
      {
        id: "m4p18",
        type: "填空题",
        difficulty: "★★",
        text: "把72800000000改写成用\"亿\"作单位的数是____。",
        answer: "728亿",
        explanation: "去掉末尾8个0，加\"亿\"字。"
      },
      {
        id: "m4p19",
        type: "填空题",
        difficulty: "★★",
        text: "省略万位后面的尾数，849600≈____万。",
        answer: "85",
        explanation: "千位是9，满5向前一位进1，84万+1=85万。"
      },
      {
        id: "m4p20",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米。",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m4p21",
        type: "填空题",
        difficulty: "★",
        text: "1平方千米=____公顷。",
        answer: "100",
        explanation: "1平方千米=100公顷。"
      },
      {
        id: "m4p22",
        type: "填空题",
        difficulty: "★",
        text: "1平方千米=____平方米。",
        answer: "1000000",
        explanation: "1平方千米=100公顷=1000000平方米。"
      },
      {
        id: "m4p23",
        type: "填空题",
        difficulty: "★★",
        text: "北京故宫占地面积约72____。（填合适单位）",
        answer: "公顷",
        explanation: "故宫占地约72公顷，用公顷作单位较合适。"
      },
      {
        id: "m4p24",
        type: "填空题",
        difficulty: "★★",
        text: "我国陆地领土面积约960万____。（填合适单位）",
        answer: "平方千米",
        explanation: "测量国土等大面积用平方千米。"
      },
      {
        id: "m4p25",
        type: "填空题",
        difficulty: "★",
        text: "直线、射线、线段中，可以量出长度的是____。",
        answer: "线段",
        explanation: "线段有两个端点，长度有限可以测量；直线和射线都无限长。"
      },
      {
        id: "m4p26",
        type: "填空题",
        difficulty: "★",
        text: "1平角=____度。",
        answer: "180",
        explanation: "平角等于180°。"
      },
      {
        id: "m4p27",
        type: "填空题",
        difficulty: "★",
        text: "1周角=____度。",
        answer: "360",
        explanation: "周角等于360°。"
      },
      {
        id: "m4p28",
        type: "填空题",
        difficulty: "★",
        text: "1直角=____度。",
        answer: "90",
        explanation: "直角等于90°。"
      },
      {
        id: "m4p29",
        type: "填空题",
        difficulty: "★★",
        text: "钝角大于____度而小于____度。",
        answer: "90，180",
        explanation: "大于90°小于180°的角是钝角。"
      },
      {
        id: "m4p30",
        type: "填空题",
        difficulty: "★★",
        text: "锐角小于____度。",
        answer: "90",
        explanation: "小于90°的角是锐角。"
      },
      {
        id: "m4p31",
        type: "图形题",
        difficulty: "★★",
        text: "用一副三角板不能拼出的角是（  ）。",
        options: [
          "15°",
          "75°",
          "105°",
          "80°"
        ],
        answer: 3,
        explanation: "15°=45°-30°，75°=45°+30°，105°=60°+45°；80°不能用一副三角板拼出。"
      },
      {
        id: "m4p32",
        type: "填空题",
        difficulty: "★",
        text: "平行四边形的对边____且____。",
        answer: "平行，相等",
        explanation: "平行四边形对边平行且相等。"
      },
      {
        id: "m4p33",
        type: "填空题",
        difficulty: "★",
        text: "只有一组对边平行的四边形叫____。",
        answer: "梯形",
        explanation: "只有一组对边平行的四边形是梯形。"
      },
      {
        id: "m4p34",
        type: "选择题",
        difficulty: "★★",
        text: "等腰梯形有（  ）条对称轴。",
        options: [
          "0",
          "1",
          "2",
          "4"
        ],
        answer: 1,
        explanation: "等腰梯形是轴对称图形，有1条对称轴。"
      },
      {
        id: "m4p35",
        type: "填空题",
        difficulty: "★",
        text: "平行四边形有（  ）组对边平行。",
        answer: "2",
        explanation: "平行四边形两组对边分别平行。"
      },
      {
        id: "m4p36",
        type: "判断题",
        difficulty: "★★",
        text: "平行四边形是轴对称图形。",
        answer: "错误",
        explanation: "一般的平行四边形不是轴对称图形（它是中心对称图形）。"
      },
      {
        id: "m4p37",
        type: "判断题",
        difficulty: "★★",
        text: "梯形的两条腰可以相等。",
        answer: "正确",
        explanation: "等腰梯形的两条腰相等。"
      },
      {
        id: "m4p38",
        type: "选择题",
        difficulty: "★★",
        text: "两个完全一样的梯形可以拼成一个（  ）。",
        options: [
          "三角形",
          "平行四边形",
          "长方形",
          "正方形"
        ],
        answer: 1,
        explanation: "两个完全一样的梯形上下底拼接后可拼成平行四边形。"
      },
      {
        id: "m4p39",
        type: "填空题",
        difficulty: "★★",
        text: "在同一平面内不相交的两条直线叫____。",
        answer: "平行线",
        explanation: "同一平面内不相交的两条直线互相平行。"
      },
      {
        id: "m4p40",
        type: "填空题",
        difficulty: "★★",
        text: "两条直线相交成直角，这两条直线互相____。",
        answer: "垂直",
        explanation: "相交成直角的两条直线互相垂直。"
      },
      {
        id: "m4p41",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形草地长300米，宽200米，它的面积是多少平方米？合多少公顷？",
        answer: "60000平方米，6公顷",
        explanation: "300×200=60000平方米=6公顷。"
      },
      {
        id: "m4p42",
        type: "应用题",
        difficulty: "★★★",
        text: "一台收割机每小时收割小麦5公顷，4台这样的收割机8小时能收割多少公顷？合多少平方千米？",
        answer: "160公顷，1.6平方千米",
        explanation: "5×4×8=160公顷=1.6平方千米（1平方千米=100公顷）。"
      },
      {
        id: "m4p43",
        type: "应用题",
        difficulty: "★★",
        text: "商店运来45箱饮料，每箱24瓶，每瓶卖5元，一共可以卖多少元？",
        answer: "5400元",
        explanation: "45×24×5=45×120=5400元。"
      },
      {
        id: "m4p44",
        type: "应用题",
        difficulty: "★★★",
        text: "学校买来28套桌椅，每张桌子75元，每把椅子45元，一共花了多少元？",
        answer: "3360元",
        explanation: "每套75+45=120元，28×120=3360元。"
      },
      {
        id: "m4p45",
        type: "应用题",
        difficulty: "★★",
        text: "一辆汽车从甲地开往乙地，速度是75千米/时，12小时到达。甲乙两地相距多少千米？",
        answer: "900千米",
        explanation: "路程=速度×时间=75×12=900千米。"
      },
      {
        id: "m4p46",
        type: "应用题",
        difficulty: "★★★",
        text: "工程队修一条路，每天修165米，修了15天，还剩280米没修。这条路全长多少米？",
        answer: "2755米",
        explanation: "165×15+280=2475+280=2755米。"
      },
      {
        id: "m4p47",
        type: "应用题",
        difficulty: "★★",
        text: "小华读一本故事书，每天读25页，18天读完。这本书共多少页？",
        answer: "450页",
        explanation: "25×18=450页。"
      },
      {
        id: "m4p48",
        type: "应用题",
        difficulty: "★★★",
        text: "果园里有苹果树325棵，梨树的棵数是苹果树的14倍，梨树比苹果树多多少棵？",
        answer: "4225棵",
        explanation: "梨树325×14=4550棵，4550-325=4225棵。"
      },
      {
        id: "m4p49",
        type: "应用题",
        difficulty: "★★",
        text: "小明用3分钟打了225个字，照这样计算，他15分钟能打多少个字？",
        answer: "1125个",
        explanation: "225÷3×15=75×15=1125个。"
      },
      {
        id: "m4p50",
        type: "数学广角",
        difficulty: "★★★",
        text: "妈妈烙饼，每次只能烙2张饼，两面都要烙，每面3分钟。烙3张饼至少需要多少分钟？",
        answer: "9分钟",
        explanation: "第1次饼1正、饼2正(3分)；第2次饼1反、饼3正(3分)；第3次饼2反、饼3反(3分)。共9分钟。"
      },
      {
        id: "m4p51",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p52",
        type: "应用题",
        difficulty: "★★",
        text: "小明有22元，买了23本笔记本，每本5元，还剩多少元？",
        answer: "-93元",
        explanation: "22-23×5=-93元。"
      },
      {
        id: "m4p53",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 7×46 并验算。",
        answer: "462",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p54",
        type: "解方程",
        difficulty: "★",
        text: "计算 1×44 并验算。",
        answer: "644",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p55",
        type: "单位换算",
        difficulty: "★",
        text: "计算 16×43 并验算。",
        answer: "704",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p56",
        type: "计算题",
        difficulty: "★",
        text: "3.16 + 28.16",
        answer: "31.2",
        explanation: "小数点对齐相加得312.86。"
      },
      {
        id: "m4p57",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p58",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p59",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p60",
        type: "应用题",
        difficulty: "★",
        text: "小明有13元，买了27本笔记本，每本5元，还剩多少元？",
        answer: "-122元",
        explanation: "13-27×5=-122元。"
      },
      {
        id: "m4p61",
        type: "简便运算",
        difficulty: "★",
        text: "计算 33×1 并验算。",
        answer: "288",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p62",
        type: "解方程",
        difficulty: "★",
        text: "计算 13×21 并验算。",
        answer: "84",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p63",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 44×24 并验算。",
        answer: "460",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p64",
        type: "计算题",
        difficulty: "★★",
        text: "39.10 + 17.10",
        answer: "56.0",
        explanation: "小数点对齐相加得564.90。"
      },
      {
        id: "m4p65",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p66",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p67",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p68",
        type: "应用题",
        difficulty: "★",
        text: "小明有34元，买了34本笔记本，每本5元，还剩多少元？",
        answer: "-136元",
        explanation: "34-34×5=-136元。"
      },
      {
        id: "m4p69",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 34×8 并验算。",
        answer: "168",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p70",
        type: "解方程",
        difficulty: "★★",
        text: "计算 10×10 并验算。",
        answer: "15",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p71",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 16×33 并验算。",
        answer: "286",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p72",
        type: "计算题",
        difficulty: "★",
        text: "42.3 + 39.3",
        answer: "81.6",
        explanation: "小数点对齐相加得814.29。"
      },
      {
        id: "m4p73",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p74",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p75",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p76",
        type: "应用题",
        difficulty: "★★",
        text: "小明有40元，买了23本笔记本，每本5元，还剩多少元？",
        answer: "-75元",
        explanation: "40-23×5=-75元。"
      },
      {
        id: "m4p77",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 37×7 并验算。",
        answer: "114",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p78",
        type: "解方程",
        difficulty: "★",
        text: "计算 41×29 并验算。",
        answer: "1209",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p79",
        type: "单位换算",
        difficulty: "★",
        text: "计算 15×9 并验算。",
        answer: "70",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p80",
        type: "计算题",
        difficulty: "★",
        text: "15.8 + 6.8",
        answer: "21.6",
        explanation: "小数点对齐相加得212.14。"
      },
      {
        id: "m4p81",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p82",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p83",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p84",
        type: "应用题",
        difficulty: "★",
        text: "小明有77元，买了40本笔记本，每本5元，还剩多少元？",
        answer: "-123元",
        explanation: "77-40×5=-123元。"
      },
      {
        id: "m4p85",
        type: "简便运算",
        difficulty: "★",
        text: "计算 49×46 并验算。",
        answer: "112",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p86",
        type: "解方程",
        difficulty: "★",
        text: "计算 20×35 并验算。",
        answer: "93",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p87",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 22×35 并验算。",
        answer: "1015",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p88",
        type: "计算题",
        difficulty: "★★",
        text: "27.9 + 2.9",
        answer: "29.8",
        explanation: "小数点对齐相加得293.51。"
      },
      {
        id: "m4p89",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p90",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p91",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p92",
        type: "应用题",
        difficulty: "★",
        text: "小明有60元，买了11本笔记本，每本5元，还剩多少元？",
        answer: "5元",
        explanation: "60-11×5=5元。"
      },
      {
        id: "m4p93",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 16×23 并验算。",
        answer: "588",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p94",
        type: "解方程",
        difficulty: "★★",
        text: "计算 34×49 并验算。",
        answer: "170",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p95",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 44×18 并验算。",
        answer: "304",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p96",
        type: "计算题",
        difficulty: "★",
        text: "35.16 + 6.16",
        answer: "41.2",
        explanation: "小数点对齐相加得416.06。"
      },
      {
        id: "m4p97",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p98",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p99",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p100",
        type: "应用题",
        difficulty: "★★",
        text: "小明有80元，买了38本笔记本，每本5元，还剩多少元？",
        answer: "-110元",
        explanation: "80-38×5=-110元。"
      },
      {
        id: "m4p101",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 20×33 并验算。",
        answer: "60",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p102",
        type: "解方程",
        difficulty: "★",
        text: "计算 18×33 并验算。",
        answer: "294",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p103",
        type: "单位换算",
        difficulty: "★",
        text: "计算 9×4 并验算。",
        answer: "672",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p104",
        type: "计算题",
        difficulty: "★",
        text: "39.19 + 31.19",
        answer: "70.8",
        explanation: "小数点对齐相加得707.51。"
      },
      {
        id: "m4p105",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p106",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p107",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p108",
        type: "应用题",
        difficulty: "★",
        text: "小明有18元，买了14本笔记本，每本5元，还剩多少元？",
        answer: "-52元",
        explanation: "18-14×5=-52元。"
      },
      {
        id: "m4p109",
        type: "简便运算",
        difficulty: "★",
        text: "计算 10×32 并验算。",
        answer: "1380",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p110",
        type: "解方程",
        difficulty: "★",
        text: "计算 45×21 并验算。",
        answer: "27",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p111",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 30×12 并验算。",
        answer: "1927",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p112",
        type: "计算题",
        difficulty: "★★",
        text: "30.18 + 34.18",
        answer: "64.6",
        explanation: "小数点对齐相加得646.24。"
      },
      {
        id: "m4p113",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p114",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p115",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p116",
        type: "应用题",
        difficulty: "★",
        text: "小明有12元，买了8本笔记本，每本5元，还剩多少元？",
        answer: "-28元",
        explanation: "12-8×5=-28元。"
      },
      {
        id: "m4p117",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 25×30 并验算。",
        answer: "500",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p118",
        type: "解方程",
        difficulty: "★★",
        text: "计算 34×10 并验算。",
        answer: "810",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p119",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 25×27 并验算。",
        answer: "63",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p120",
        type: "计算题",
        difficulty: "★",
        text: "39.16 + 35.16",
        answer: "74.2",
        explanation: "小数点对齐相加得746.46。"
      },
      {
        id: "m4p121",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p122",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p123",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p124",
        type: "应用题",
        difficulty: "★★",
        text: "小明有70元，买了34本笔记本，每本5元，还剩多少元？",
        answer: "-100元",
        explanation: "70-34×5=-100元。"
      },
      {
        id: "m4p125",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 11×4 并验算。",
        answer: "400",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p126",
        type: "解方程",
        difficulty: "★",
        text: "计算 20×26 并验算。",
        answer: "375",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p127",
        type: "单位换算",
        difficulty: "★",
        text: "计算 45×45 并验算。",
        answer: "520",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p128",
        type: "计算题",
        difficulty: "★",
        text: "1.8 + 41.8",
        answer: "42.6",
        explanation: "小数点对齐相加得420.74。"
      },
      {
        id: "m4p129",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p130",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p131",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p132",
        type: "应用题",
        difficulty: "★",
        text: "小明有47元，买了37本笔记本，每本5元，还剩多少元？",
        answer: "-138元",
        explanation: "47-37×5=-138元。"
      },
      {
        id: "m4p133",
        type: "简便运算",
        difficulty: "★",
        text: "计算 34×30 并验算。",
        answer: "114",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p134",
        type: "解方程",
        difficulty: "★",
        text: "计算 34×1 并验算。",
        answer: "308",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p135",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 23×22 并验算。",
        answer: "870",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p136",
        type: "计算题",
        difficulty: "★★",
        text: "2.6 + 23.6",
        answer: "25.2",
        explanation: "小数点对齐相加得250.56。"
      },
      {
        id: "m4p137",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p138",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p139",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p140",
        type: "应用题",
        difficulty: "★",
        text: "小明有38元，买了33本笔记本，每本5元，还剩多少元？",
        answer: "-127元",
        explanation: "38-33×5=-127元。"
      },
      {
        id: "m4p141",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 46×32 并验算。",
        answer: "192",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p142",
        type: "解方程",
        difficulty: "★★",
        text: "计算 18×8 并验算。",
        answer: "12",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p143",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 7×47 并验算。",
        answer: "754",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p144",
        type: "计算题",
        difficulty: "★",
        text: "28.19 + 24.19",
        answer: "52.8",
        explanation: "小数点对齐相加得526.41。"
      },
      {
        id: "m4p145",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p146",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p147",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p148",
        type: "应用题",
        difficulty: "★★",
        text: "小明有12元，买了29本笔记本，每本5元，还剩多少元？",
        answer: "-133元",
        explanation: "12-29×5=-133元。"
      },
      {
        id: "m4p149",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 44×24 并验算。",
        answer: "1258",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p150",
        type: "解方程",
        difficulty: "★",
        text: "计算 39×18 并验算。",
        answer: "720",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p151",
        type: "单位换算",
        difficulty: "★",
        text: "计算 3×44 并验算。",
        answer: "336",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p152",
        type: "计算题",
        difficulty: "★",
        text: "45.13 + 33.13",
        answer: "78.6",
        explanation: "小数点对齐相加得786.19。"
      },
      {
        id: "m4p153",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p154",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p155",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p156",
        type: "应用题",
        difficulty: "★",
        text: "小明有40元，买了25本笔记本，每本5元，还剩多少元？",
        answer: "-85元",
        explanation: "40-25×5=-85元。"
      },
      {
        id: "m4p157",
        type: "简便运算",
        difficulty: "★",
        text: "计算 39×31 并验算。",
        answer: "644",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p158",
        type: "解方程",
        difficulty: "★",
        text: "计算 25×2 并验算。",
        answer: "612",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p159",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 28×39 并验算。",
        answer: "1036",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p160",
        type: "计算题",
        difficulty: "★★",
        text: "23.2 + 48.2",
        answer: "71.4",
        explanation: "小数点对齐相加得712.34。"
      },
      {
        id: "m4p161",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p162",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p163",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p164",
        type: "应用题",
        difficulty: "★",
        text: "小明有29元，买了28本笔记本，每本5元，还剩多少元？",
        answer: "-111元",
        explanation: "29-28×5=-111元。"
      },
      {
        id: "m4p165",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 48×6 并验算。",
        answer: "6",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p166",
        type: "解方程",
        difficulty: "★★",
        text: "计算 47×15 并验算。",
        answer: "81",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p167",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 44×39 并验算。",
        answer: "484",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p168",
        type: "计算题",
        difficulty: "★",
        text: "19.1 + 13.1",
        answer: "32.2",
        explanation: "小数点对齐相加得321.91。"
      },
      {
        id: "m4p169",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p170",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p171",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p172",
        type: "应用题",
        difficulty: "★★",
        text: "小明有67元，买了9本笔记本，每本5元，还剩多少元？",
        answer: "22元",
        explanation: "67-9×5=22元。"
      },
      {
        id: "m4p173",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 9×8 并验算。",
        answer: "432",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p174",
        type: "解方程",
        difficulty: "★",
        text: "计算 18×25 并验算。",
        answer: "56",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p175",
        type: "单位换算",
        difficulty: "★",
        text: "计算 15×42 并验算。",
        answer: "1665",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p176",
        type: "计算题",
        difficulty: "★",
        text: "6.7 + 38.7",
        answer: "44.4",
        explanation: "小数点对齐相加得441.09。"
      },
      {
        id: "m4p177",
        type: "填空题",
        difficulty: "★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p178",
        type: "选择题",
        difficulty: "★★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p179",
        type: "判断题",
        difficulty: "★★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p180",
        type: "应用题",
        difficulty: "★",
        text: "小明有77元，买了25本笔记本，每本5元，还剩多少元？",
        answer: "-48元",
        explanation: "77-25×5=-48元。"
      },
      {
        id: "m4p181",
        type: "简便运算",
        difficulty: "★",
        text: "计算 22×4 并验算。",
        answer: "54",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p182",
        type: "解方程",
        difficulty: "★",
        text: "计算 28×13 并验算。",
        answer: "1452",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p183",
        type: "单位换算",
        difficulty: "★★",
        text: "计算 3×48 并验算。",
        answer: "736",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p184",
        type: "计算题",
        difficulty: "★★",
        text: "4.7 + 50.7",
        answer: "54.4",
        explanation: "小数点对齐相加得540.89。"
      },
      {
        id: "m4p185",
        type: "填空题",
        difficulty: "★★★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p186",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p187",
        type: "判断题",
        difficulty: "★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p188",
        type: "应用题",
        difficulty: "★",
        text: "小明有30元，买了7本笔记本，每本5元，还剩多少元？",
        answer: "-5元",
        explanation: "30-7×5=-5元。"
      },
      {
        id: "m4p189",
        type: "简便运算",
        difficulty: "★★",
        text: "计算 19×29 并验算。",
        answer: "836",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p190",
        type: "解方程",
        difficulty: "★★",
        text: "计算 27×15 并验算。",
        answer: "245",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p191",
        type: "单位换算",
        difficulty: "★★★",
        text: "计算 21×49 并验算。",
        answer: "64",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p192",
        type: "计算题",
        difficulty: "★",
        text: "39.11 + 7.11",
        answer: "46.2",
        explanation: "小数点对齐相加得465.11。"
      },
      {
        id: "m4p193",
        type: "填空题",
        difficulty: "★",
        text: "乘法结合律：(a×b)×c=____",
        answer: "a×(b×c)",
        explanation: "先把前两个数相乘或先把后两个数相乘，积不变。"
      },
      {
        id: "m4p194",
        type: "选择题",
        difficulty: "★",
        text: "下面哪组小棒能拼成三角形？",
        options: [
          "3cm,4cm,5cm",
          "1cm,2cm,3cm",
          "2cm,2cm,5cm",
          "5cm,5cm,11cm"
        ],
        answer: 0,
        explanation: "两边之和大于第三边：3+4>5。"
      },
      {
        id: "m4p195",
        type: "判断题",
        difficulty: "★★",
        text: "等腰三角形一定有两个角相等。（  ）",
        answer: "√",
        explanation: "等腰三角形两底角相等。"
      },
      {
        id: "m4p196",
        type: "应用题",
        difficulty: "★★",
        text: "小明有69元，买了18本笔记本，每本5元，还剩多少元？",
        answer: "-21元",
        explanation: "69-18×5=-21元。"
      },
      {
        id: "m4p197",
        type: "简便运算",
        difficulty: "★★★",
        text: "计算 29×49 并验算。",
        answer: "208",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p198",
        type: "解方程",
        difficulty: "★",
        text: "计算 50×28 并验算。",
        answer: "1911",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p199",
        type: "单位换算",
        difficulty: "★",
        text: "计算 43×32 并验算。",
        answer: "608",
        explanation: "整数乘法按位相乘再相加。"
      },
      {
        id: "m4p200",
        type: "计算题",
        difficulty: "★",
        text: "49.15 + 25.15",
        answer: "74.0",
        explanation: "小数点对齐相加得747.15。"
      }
    ]
  },
  grade5: {
    旧年级巩固: [
      {
        id: "m5r1",
        type: "计算题",
        difficulty: "★",
        text: "125×80",
        answer: "10000",
        explanation: "125×80=10000。"
      },
      {
        id: "m5r2",
        type: "计算题",
        difficulty: "★★",
        text: "324×16",
        answer: "5184",
        explanation: "324×16=5184。"
      },
      {
        id: "m5r3",
        type: "计算题",
        difficulty: "★★",
        text: "504×25",
        answer: "12600",
        explanation: "504×25=12600。"
      },
      {
        id: "m5r4",
        type: "计算题",
        difficulty: "★★",
        text: "768÷32",
        answer: "24",
        explanation: "768÷32=24。"
      },
      {
        id: "m5r5",
        type: "计算题",
        difficulty: "★★",
        text: "936÷18",
        answer: "52",
        explanation: "936÷18=52。"
      },
      {
        id: "m5r6",
        type: "计算题",
        difficulty: "★★",
        text: "840÷24",
        answer: "35",
        explanation: "840÷24=35。"
      },
      {
        id: "m5r7",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：25×36",
        answer: "900",
        explanation: "25×4×9=100×9=900。"
      },
      {
        id: "m5r8",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：99×38",
        answer: "3762",
        explanation: "(100-1)×38=3800-38=3762。"
      },
      {
        id: "m5r9",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：101×87",
        answer: "8787",
        explanation: "(100+1)×87=8700+87=8787。"
      },
      {
        id: "m5r10",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：7200÷25÷4",
        answer: "72",
        explanation: "7200÷(25×4)=7200÷100=72。"
      },
      {
        id: "m5r11",
        type: "填空题",
        difficulty: "★",
        text: "一个数由5个百万、3个万和7个百组成，这个数是____。",
        answer: "5030700",
        explanation: "5百万=5000000，3万=30000，7百=700，合起来5030700。"
      },
      {
        id: "m5r12",
        type: "填空题",
        difficulty: "★★",
        text: "40805000读作____。",
        answer: "四千零八十万五千",
        explanation: "万级4080读作四千零八十万，个级5000读作五千。"
      },
      {
        id: "m5r13",
        type: "填空题",
        difficulty: "★★",
        text: "省略亿位后面的尾数，649000000≈____亿。",
        answer: "6",
        explanation: "千万位是4，不满5舍去，约等于6亿。"
      },
      {
        id: "m5r14",
        type: "填空题",
        difficulty: "★",
        text: "1公顷=____平方米。",
        answer: "10000",
        explanation: "1公顷=10000平方米。"
      },
      {
        id: "m5r15",
        type: "填空题",
        difficulty: "★",
        text: "3平方千米=____公顷。",
        answer: "300",
        explanation: "1平方千米=100公顷，3平方千米=300公顷。"
      },
      {
        id: "m5r16",
        type: "填空题",
        difficulty: "★★",
        text: "已知∠1=35°，与它组成直角的∠2=____°。",
        answer: "55",
        explanation: "直角=90°，∠2=90°-35°=55°。"
      },
      {
        id: "m5r17",
        type: "填空题",
        difficulty: "★★",
        text: "一个平角减去一个锐角，得到一个____角。",
        answer: "钝",
        explanation: "平角180°减去小于90°的锐角，结果大于90°小于180°，是钝角。"
      },
      {
        id: "m5r18",
        type: "填空题",
        difficulty: "★",
        text: "在同一平面内，过直线外一点能画____条已知直线的平行线。",
        answer: "1",
        explanation: "过直线外一点有且只有一条直线与已知直线平行。"
      },
      {
        id: "m5r19",
        type: "填空题",
        difficulty: "★",
        text: "在同一平面内，过直线上一点能画____条已知直线的垂线。",
        answer: "1",
        explanation: "过一点有且只有一条直线与已知直线垂直。"
      },
      {
        id: "m5r20",
        type: "选择题",
        difficulty: "★★",
        text: "下面图形中，不是轴对称图形的是（  ）。",
        options: [
          "正方形",
          "长方形",
          "平行四边形",
          "等腰梯形"
        ],
        answer: 2,
        explanation: "一般的平行四边形不是轴对称图形。"
      },
      {
        id: "m5r21",
        type: "选择题",
        difficulty: "★★",
        text: "两个完全一样的三角形一定能拼成一个（  ）。",
        options: [
          "梯形",
          "平行四边形",
          "长方形",
          "正方形"
        ],
        answer: 1,
        explanation: "两个完全一样的三角形对应边拼接可拼成平行四边形。"
      },
      {
        id: "m5r22",
        type: "判断题",
        difficulty: "★",
        text: "大于90°的角都是钝角。",
        answer: "错误",
        explanation: "大于90°且小于180°的角才是钝角，180°是平角。"
      },
      {
        id: "m5r23",
        type: "判断题",
        difficulty: "★★",
        text: "不相交的两条直线叫平行线。",
        answer: "错误",
        explanation: "必须在同一平面内不相交的两条直线才叫平行线。"
      },
      {
        id: "m5r24",
        type: "判断题",
        difficulty: "★★",
        text: "一条射线长50米。",
        answer: "错误",
        explanation: "射线有一个端点，向一方无限延伸，不能量出长度。"
      },
      {
        id: "m5r25",
        type: "填空题",
        difficulty: "★★",
        text: "在□÷12=25……△中，△最大是____，这时被除数是____。",
        answer: "11，311",
        explanation: "余数最大是11，被除数=12×25+11=311。"
      },
      {
        id: "m5r26",
        type: "计算题",
        difficulty: "★★",
        text: "45×24",
        answer: "1080",
        explanation: "45×24=1080。"
      },
      {
        id: "m5r27",
        type: "计算题",
        difficulty: "★★",
        text: "168÷14",
        answer: "12",
        explanation: "168÷14=12。"
      },
      {
        id: "m5r28",
        type: "应用题",
        difficulty: "★★",
        text: "一辆汽车4小时行驶320千米，照这样计算，7小时行驶多少千米？",
        answer: "560千米",
        explanation: "320÷4×7=80×7=560千米。"
      },
      {
        id: "m5r29",
        type: "应用题",
        difficulty: "★★★",
        text: "学校购买故事书和科技书各25套，故事书每套45元，科技书每套35元，一共花了多少元？",
        answer: "2000元",
        explanation: "(45+35)×25=80×25=2000元。"
      },
      {
        id: "m5r30",
        type: "应用题",
        difficulty: "★★",
        text: "一块长方形稻田长400米，宽250米，这块稻田占地多少公顷？",
        answer: "10公顷",
        explanation: "400×250=100000平方米=10公顷。"
      },
      {
        id: "m5r31",
        type: "应用题",
        difficulty: "★★★",
        text: "服装厂要加工840套校服，已经加工了15天，每天加工48套，还剩多少套没加工？",
        answer: "120套",
        explanation: "840-15×48=840-720=120套。"
      },
      {
        id: "m5r32",
        type: "应用题",
        difficulty: "★★",
        text: "小明步行的速度是65米/分，他从家到学校走了12分钟，他家到学校有多远？",
        answer: "780米",
        explanation: "65×12=780米。"
      },
      {
        id: "m5r33",
        type: "填空题",
        difficulty: "★",
        text: "总价=____×数量。",
        answer: "单价",
        explanation: "总价=单价×数量。"
      },
      {
        id: "m5r34",
        type: "填空题",
        difficulty: "★",
        text: "路程=____×时间。",
        answer: "速度",
        explanation: "路程=速度×时间。"
      },
      {
        id: "m5r35",
        type: "选择题",
        difficulty: "★★★",
        text: "两个数相除商是20余10，被除数和除数同时乘10，商和余数分别是（  ）。",
        options: [
          "商20，余10",
          "商200，余100",
          "商20，余100",
          "商200，余10"
        ],
        answer: 2,
        explanation: "商不变仍是20，余数随被除数除数同时扩大10倍，变为100。"
      },
      {
        id: "m5r36",
        type: "计算题",
        difficulty: "★★",
        text: "560÷14",
        answer: "40",
        explanation: "560÷14=40。"
      },
      {
        id: "m5r37",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：48×25+52×25",
        answer: "2500",
        explanation: "(48+52)×25=100×25=2500。"
      },
      {
        id: "m5r38",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：9000÷125",
        answer: "72",
        explanation: "(9000×8)÷(125×8)=72000÷1000=72。"
      },
      {
        id: "m5r39",
        type: "填空题",
        difficulty: "★★★",
        text: "一个数省略万位后面的尾数是30万，这个数最大是____，最小是____。",
        answer: "304999，295000",
        explanation: "最大是304999（千位4舍去），最小是295000（千位5进一）。"
      },
      {
        id: "m5r40",
        type: "图形题",
        difficulty: "★★",
        text: "一个等腰梯形的上底8厘米，下底14厘米，一条腰长5厘米，它的周长是多少厘米？",
        answer: "32厘米",
        explanation: "8+14+5+5=32厘米。"
      },
      {
        id: "m5r41",
        type: "填空题",
        difficulty: "★★",
        text: "用3、4、5三个数字组成不同的三位数，能组成____个。",
        answer: "6",
        explanation: "3×2×1=6个。"
      },
      {
        id: "m5r42",
        type: "填空题",
        difficulty: "★",
        text: "1日=____时。",
        answer: "24",
        explanation: "1日=24时。"
      },
      {
        id: "m5r43",
        type: "计算题",
        difficulty: "★★",
        text: "12×40+80",
        answer: "560",
        explanation: "12×40=480，480+80=560。"
      },
      {
        id: "m5r44",
        type: "计算题",
        difficulty: "★★",
        text: "720-360÷9",
        answer: "680",
        explanation: "先除：360÷9=40，720-40=680。"
      },
      {
        id: "m5r45",
        type: "应用题",
        difficulty: "★★★",
        text: "甲乙两车从两地同时相向出发，甲车每小时行85千米，乙车每小时行75千米，4小时后相遇。两地相距多少千米？",
        answer: "640千米",
        explanation: "(85+75)×4=160×4=640千米。"
      },
      {
        id: "m5r46",
        type: "应用题",
        difficulty: "★★",
        text: "王老师买3个篮球，每个98元，付给售货员300元，应找回多少元？",
        answer: "6元",
        explanation: "300-98×3=300-294=6元。"
      },
      {
        id: "m5r47",
        type: "选择题",
        difficulty: "★★",
        text: "350×40的积的末尾有（  ）个0。",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        answer: 1,
        explanation: "350×40=14000，末尾有3个0。"
      },
      {
        id: "m5r48",
        type: "填空题",
        difficulty: "★",
        text: "最小的自然数是____。",
        answer: "0",
        explanation: "最小的自然数是0。"
      },
      {
        id: "m5r49",
        type: "判断题",
        difficulty: "★",
        text: "0乘任何数都得0。",
        answer: "正确",
        explanation: "0乘任何数都得0。"
      },
      {
        id: "m5r50",
        type: "应用题",
        difficulty: "★★★",
        text: "图书馆有故事书240本，科技书是故事书的3倍少80本，科技书有多少本？两种书共多少本？",
        answer: "科技书640本，共880本",
        explanation: "科技书240×3-80=640本；共240+640=880本。"
      },
      {
        id: "m5r51",
        type: "判断题",
        difficulty: "★★",
        text: "81÷12",
        answer: "19.25",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r52",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底6米，高9米，面积多少？",
        answer: "54平方米",
        explanation: "平行四边形面积=底×高=6×9=54。"
      },
      {
        id: "m5r53",
        type: "简便运算",
        difficulty: "★★★",
        text: "49÷11",
        answer: "6.86",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r54",
        type: "解方程",
        difficulty: "★",
        text: "12x + 6 = 183",
        answer: "x=15",
        explanation: "移项求解得x=15。"
      },
      {
        id: "m5r55",
        type: "单位换算",
        difficulty: "★",
        text: "54÷7",
        answer: "10",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r56",
        type: "计算题",
        difficulty: "★",
        text: "14.3 × 5.3",
        answer: "80.08",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r57",
        type: "填空题",
        difficulty: "★★",
        text: "18÷4",
        answer: "3.17",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r58",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r59",
        type: "判断题",
        difficulty: "★★★",
        text: "82÷12",
        answer: "37",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r60",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底13米，高3米，面积多少？",
        answer: "39平方米",
        explanation: "平行四边形面积=底×高=13×3=39。"
      },
      {
        id: "m5r61",
        type: "简便运算",
        difficulty: "★",
        text: "32÷3",
        answer: "3.72",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r62",
        type: "解方程",
        difficulty: "★",
        text: "7x + 2 = 183",
        answer: "x=26",
        explanation: "移项求解得x=26。"
      },
      {
        id: "m5r63",
        type: "单位换算",
        difficulty: "★★",
        text: "51÷13",
        answer: "8.57",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r64",
        type: "计算题",
        difficulty: "★★",
        text: "17.9 × 7.7",
        answer: "127.75",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r65",
        type: "填空题",
        difficulty: "★★★",
        text: "41÷9",
        answer: "8.25",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r66",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r67",
        type: "判断题",
        difficulty: "★",
        text: "34÷10",
        answer: "8.09",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r68",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底11米，高6米，面积多少？",
        answer: "66平方米",
        explanation: "平行四边形面积=底×高=11×6=66。"
      },
      {
        id: "m5r69",
        type: "简便运算",
        difficulty: "★★",
        text: "77÷12",
        answer: "1.27",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r70",
        type: "解方程",
        difficulty: "★★",
        text: "2x + 1 = 8",
        answer: "x=3",
        explanation: "移项求解得x=3。"
      },
      {
        id: "m5r71",
        type: "单位换算",
        difficulty: "★★★",
        text: "72÷18",
        answer: "9.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r72",
        type: "计算题",
        difficulty: "★",
        text: "2.2 × 6.8",
        answer: "16.74",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r73",
        type: "填空题",
        difficulty: "★",
        text: "36÷15",
        answer: "4.25",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r74",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r75",
        type: "判断题",
        difficulty: "★★",
        text: "35÷4",
        answer: "7.44",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r76",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底15米，高1米，面积多少？",
        answer: "15平方米",
        explanation: "平行四边形面积=底×高=15×1=15。"
      },
      {
        id: "m5r77",
        type: "简便运算",
        difficulty: "★★★",
        text: "60÷7",
        answer: "3.55",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r78",
        type: "解方程",
        difficulty: "★",
        text: "14x + 4 = 398",
        answer: "x=28",
        explanation: "移项求解得x=28。"
      },
      {
        id: "m5r79",
        type: "单位换算",
        difficulty: "★",
        text: "49÷10",
        answer: "45.5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r80",
        type: "计算题",
        difficulty: "★",
        text: "14.3 × 5.8",
        answer: "83.44",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r81",
        type: "填空题",
        difficulty: "★★",
        text: "14÷11",
        answer: "2",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r82",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r83",
        type: "判断题",
        difficulty: "★★★",
        text: "58÷20",
        answer: "4.14",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r84",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底13米，高9米，面积多少？",
        answer: "117平方米",
        explanation: "平行四边形面积=底×高=13×9=117。"
      },
      {
        id: "m5r85",
        type: "简便运算",
        difficulty: "★",
        text: "77÷8",
        answer: "3.35",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r86",
        type: "解方程",
        difficulty: "★",
        text: "6x + 4 = 70",
        answer: "x=10",
        explanation: "移项求解得x=10。"
      },
      {
        id: "m5r87",
        type: "单位换算",
        difficulty: "★★",
        text: "33÷4",
        answer: "5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r88",
        type: "计算题",
        difficulty: "★★",
        text: "10.2 × 6.7",
        answer: "68.04",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r89",
        type: "填空题",
        difficulty: "★★★",
        text: "86÷13",
        answer: "24.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r90",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r91",
        type: "判断题",
        difficulty: "★",
        text: "37÷17",
        answer: "3.05",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r92",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底11米，高6米，面积多少？",
        answer: "66平方米",
        explanation: "平行四边形面积=底×高=11×6=66。"
      },
      {
        id: "m5r93",
        type: "简便运算",
        difficulty: "★★",
        text: "86÷13",
        answer: "4.08",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r94",
        type: "解方程",
        difficulty: "★★",
        text: "14x + 4 = 156",
        answer: "x=11",
        explanation: "移项求解得x=11。"
      },
      {
        id: "m5r95",
        type: "单位换算",
        difficulty: "★★★",
        text: "84÷19",
        answer: "13.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r96",
        type: "计算题",
        difficulty: "★",
        text: "9.5 × 16.3",
        answer: "157.7",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r97",
        type: "填空题",
        difficulty: "★",
        text: "44÷7",
        answer: "11.63",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r98",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r99",
        type: "判断题",
        difficulty: "★★",
        text: "12÷7",
        answer: "2.44",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r100",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底12米，高10米，面积多少？",
        answer: "120平方米",
        explanation: "平行四边形面积=底×高=12×10=120。"
      },
      {
        id: "m5r101",
        type: "简便运算",
        difficulty: "★★★",
        text: "10÷5",
        answer: "1.95",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r102",
        type: "解方程",
        difficulty: "★",
        text: "15x + 6 = 383",
        answer: "x=25",
        explanation: "移项求解得x=25。"
      },
      {
        id: "m5r103",
        type: "单位换算",
        difficulty: "★",
        text: "60÷10",
        answer: "6",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r104",
        type: "计算题",
        difficulty: "★",
        text: "19.1 × 2.3",
        answer: "42.46",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r105",
        type: "填空题",
        difficulty: "★★",
        text: "57÷16",
        answer: "4.13",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r106",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r107",
        type: "判断题",
        difficulty: "★★★",
        text: "37÷3",
        answer: "24.5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r108",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底7米，高2米，面积多少？",
        answer: "14平方米",
        explanation: "平行四边形面积=底×高=7×2=14。"
      },
      {
        id: "m5r109",
        type: "简便运算",
        difficulty: "★",
        text: "30÷18",
        answer: "7.8",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r110",
        type: "解方程",
        difficulty: "★",
        text: "9x + 7 = 238",
        answer: "x=26",
        explanation: "移项求解得x=26。"
      },
      {
        id: "m5r111",
        type: "单位换算",
        difficulty: "★★",
        text: "81÷12",
        answer: "7.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r112",
        type: "计算题",
        difficulty: "★★",
        text: "13.2 × 16.9",
        answer: "220.44",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r113",
        type: "填空题",
        difficulty: "★★★",
        text: "19÷16",
        answer: "5.46",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r114",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r115",
        type: "判断题",
        difficulty: "★",
        text: "10÷16",
        answer: "11.11",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r116",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底7米，高4米，面积多少？",
        answer: "28平方米",
        explanation: "平行四边形面积=底×高=7×4=28。"
      },
      {
        id: "m5r117",
        type: "简便运算",
        difficulty: "★★",
        text: "66÷6",
        answer: "7.13",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r118",
        type: "解方程",
        difficulty: "★★",
        text: "6x + 7 = 37",
        answer: "x=6",
        explanation: "移项求解得x=6。"
      },
      {
        id: "m5r119",
        type: "单位换算",
        difficulty: "★★★",
        text: "21÷2",
        answer: "27",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r120",
        type: "计算题",
        difficulty: "★",
        text: "15.5 × 5.2",
        answer: "89.49",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r121",
        type: "填空题",
        difficulty: "★",
        text: "61÷13",
        answer: "2.35",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r122",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r123",
        type: "判断题",
        difficulty: "★★",
        text: "91÷20",
        answer: "35.5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r124",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底7米，高10米，面积多少？",
        answer: "70平方米",
        explanation: "平行四边形面积=底×高=7×10=70。"
      },
      {
        id: "m5r125",
        type: "简便运算",
        difficulty: "★★★",
        text: "66÷6",
        answer: "32",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r126",
        type: "解方程",
        difficulty: "★",
        text: "5x + 5 = 51",
        answer: "x=10",
        explanation: "移项求解得x=10。"
      },
      {
        id: "m5r127",
        type: "单位换算",
        difficulty: "★",
        text: "22÷3",
        answer: "4.31",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r128",
        type: "计算题",
        difficulty: "★",
        text: "16.3 × 18.7",
        answer: "301.32",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r129",
        type: "填空题",
        difficulty: "★★",
        text: "87÷14",
        answer: "5.13",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r130",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r131",
        type: "判断题",
        difficulty: "★★★",
        text: "12÷9",
        answer: "4.06",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r132",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底11米，高2米，面积多少？",
        answer: "22平方米",
        explanation: "平行四边形面积=底×高=11×2=22。"
      },
      {
        id: "m5r133",
        type: "简便运算",
        difficulty: "★",
        text: "80÷4",
        answer: "1.43",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r134",
        type: "解方程",
        difficulty: "★",
        text: "2x + 5 = 23",
        answer: "x=10",
        explanation: "移项求解得x=10。"
      },
      {
        id: "m5r135",
        type: "单位换算",
        difficulty: "★★",
        text: "90÷4",
        answer: "2.42",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r136",
        type: "计算题",
        difficulty: "★★",
        text: "11.9 × 16.4",
        answer: "180.32",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r137",
        type: "填空题",
        difficulty: "★★★",
        text: "28÷12",
        answer: "3.33",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r138",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r139",
        type: "判断题",
        difficulty: "★",
        text: "44÷2",
        answer: "3.25",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r140",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底14米，高8米，面积多少？",
        answer: "112平方米",
        explanation: "平行四边形面积=底×高=14×8=112。"
      },
      {
        id: "m5r141",
        type: "简便运算",
        difficulty: "★★",
        text: "93÷19",
        answer: "4.79",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r142",
        type: "解方程",
        difficulty: "★★",
        text: "5x + 4 = 127",
        answer: "x=25",
        explanation: "移项求解得x=25。"
      },
      {
        id: "m5r143",
        type: "单位换算",
        difficulty: "★★★",
        text: "73÷10",
        answer: "7.43",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r144",
        type: "计算题",
        difficulty: "★",
        text: "13.7 × 11.9",
        answer: "155.44",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r145",
        type: "填空题",
        difficulty: "★",
        text: "16÷17",
        answer: "6.75",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r146",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r147",
        type: "判断题",
        difficulty: "★★",
        text: "57÷16",
        answer: "2.95",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r148",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底7米，高10米，面积多少？",
        answer: "70平方米",
        explanation: "平行四边形面积=底×高=7×10=70。"
      },
      {
        id: "m5r149",
        type: "简便运算",
        difficulty: "★★★",
        text: "79÷12",
        answer: "45",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r150",
        type: "解方程",
        difficulty: "★",
        text: "9x + 4 = 156",
        answer: "x=17",
        explanation: "移项求解得x=17。"
      },
      {
        id: "m5r151",
        type: "单位换算",
        difficulty: "★",
        text: "52÷12",
        answer: "2.14",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r152",
        type: "计算题",
        difficulty: "★",
        text: "5.2 × 9.8",
        answer: "51.52",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r153",
        type: "填空题",
        difficulty: "★★",
        text: "22÷18",
        answer: "8.1",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r154",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r155",
        type: "判断题",
        difficulty: "★★★",
        text: "75÷10",
        answer: "7.91",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r156",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底7米，高2米，面积多少？",
        answer: "14平方米",
        explanation: "平行四边形面积=底×高=7×2=14。"
      },
      {
        id: "m5r157",
        type: "简便运算",
        difficulty: "★",
        text: "13÷3",
        answer: "1.07",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r158",
        type: "解方程",
        difficulty: "★",
        text: "9x + 8 = 230",
        answer: "x=25",
        explanation: "移项求解得x=25。"
      },
      {
        id: "m5r159",
        type: "单位换算",
        difficulty: "★★",
        text: "45÷19",
        answer: "46",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r160",
        type: "计算题",
        difficulty: "★★",
        text: "17.1 × 15.9",
        answer: "270.81",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r161",
        type: "填空题",
        difficulty: "★★★",
        text: "39÷9",
        answer: "5.56",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r162",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r163",
        type: "判断题",
        difficulty: "★",
        text: "89÷18",
        answer: "10.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r164",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底12米，高8米，面积多少？",
        answer: "96平方米",
        explanation: "平行四边形面积=底×高=12×8=96。"
      },
      {
        id: "m5r165",
        type: "简便运算",
        difficulty: "★★",
        text: "69÷13",
        answer: "5.94",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r166",
        type: "解方程",
        difficulty: "★★",
        text: "9x + 7 = 227",
        answer: "x=25",
        explanation: "移项求解得x=25。"
      },
      {
        id: "m5r167",
        type: "单位换算",
        difficulty: "★★★",
        text: "76÷18",
        answer: "4.44",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r168",
        type: "计算题",
        difficulty: "★",
        text: "16.8 × 11.8",
        answer: "184.19",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r169",
        type: "填空题",
        difficulty: "★",
        text: "81÷11",
        answer: "5.33",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r170",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r171",
        type: "判断题",
        difficulty: "★★",
        text: "66÷14",
        answer: "4.5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r172",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底10米，高7米，面积多少？",
        answer: "70平方米",
        explanation: "平行四边形面积=底×高=10×7=70。"
      },
      {
        id: "m5r173",
        type: "简便运算",
        difficulty: "★★★",
        text: "10÷20",
        answer: "5.1",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r174",
        type: "解方程",
        difficulty: "★",
        text: "7x + 8 = 113",
        answer: "x=16",
        explanation: "移项求解得x=16。"
      },
      {
        id: "m5r175",
        type: "单位换算",
        difficulty: "★",
        text: "56÷7",
        answer: "4.5",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r176",
        type: "计算题",
        difficulty: "★",
        text: "9.6 × 14.5",
        answer: "129.72",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r177",
        type: "填空题",
        difficulty: "★★",
        text: "73÷11",
        answer: "13",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r178",
        type: "选择题",
        difficulty: "★★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r179",
        type: "判断题",
        difficulty: "★★★",
        text: "67÷3",
        answer: "2.95",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r180",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底11米，高8米，面积多少？",
        answer: "88平方米",
        explanation: "平行四边形面积=底×高=11×8=88。"
      },
      {
        id: "m5r181",
        type: "简便运算",
        difficulty: "★",
        text: "20÷7",
        answer: "3.22",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r182",
        type: "解方程",
        difficulty: "★",
        text: "2x + 4 = 24",
        answer: "x=9",
        explanation: "移项求解得x=9。"
      },
      {
        id: "m5r183",
        type: "单位换算",
        difficulty: "★★",
        text: "26÷17",
        answer: "2.33",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r184",
        type: "计算题",
        difficulty: "★★",
        text: "10.3 × 15.4",
        answer: "159.12",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r185",
        type: "填空题",
        difficulty: "★★★",
        text: "15÷17",
        answer: "4.53",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r186",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r187",
        type: "判断题",
        difficulty: "★",
        text: "34÷13",
        answer: "17.67",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r188",
        type: "应用题",
        difficulty: "★",
        text: "平行四边形底10米，高2米，面积多少？",
        answer: "20平方米",
        explanation: "平行四边形面积=底×高=10×2=20。"
      },
      {
        id: "m5r189",
        type: "简便运算",
        difficulty: "★★",
        text: "90÷18",
        answer: "2.72",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r190",
        type: "解方程",
        difficulty: "★★",
        text: "6x + 7 = 167",
        answer: "x=27",
        explanation: "移项求解得x=27。"
      },
      {
        id: "m5r191",
        type: "单位换算",
        difficulty: "★★★",
        text: "64÷12",
        answer: "4.43",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r192",
        type: "计算题",
        difficulty: "★",
        text: "6.7 × 18.3",
        answer: "127.84",
        explanation: "小数乘法按整数乘后点小数点。"
      },
      {
        id: "m5r193",
        type: "填空题",
        difficulty: "★",
        text: "18÷6",
        answer: "6.54",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r194",
        type: "选择题",
        difficulty: "★",
        text: "方程必须含有（  ）。",
        options: [
          "数字",
          "字母",
          "未知数和等式",
          "等号"
        ],
        answer: 2,
        explanation: "方程是含有未知数的等式。"
      },
      {
        id: "m5r195",
        type: "判断题",
        difficulty: "★★",
        text: "38÷13",
        answer: "4",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r196",
        type: "应用题",
        difficulty: "★★",
        text: "平行四边形底13米，高9米，面积多少？",
        answer: "117平方米",
        explanation: "平行四边形面积=底×高=13×9=117。"
      },
      {
        id: "m5r197",
        type: "简便运算",
        difficulty: "★★★",
        text: "78÷17",
        answer: "2.85",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r198",
        type: "解方程",
        difficulty: "★",
        text: "10x + 8 = 87",
        answer: "x=8",
        explanation: "移项求解得x=8。"
      },
      {
        id: "m5r199",
        type: "单位换算",
        difficulty: "★",
        text: "41÷20",
        answer: "4.35",
        explanation: "按除法法则计算。"
      },
      {
        id: "m5r200",
        type: "计算题",
        difficulty: "★",
        text: "14.5 × 19.2",
        answer: "272.13",
        explanation: "小数乘法按整数乘后点小数点。"
      }
    ],
    新学期预习: [
      {
        id: "m5p1",
        type: "计算题",
        difficulty: "★★",
        text: "2.5×4",
        answer: "10",
        explanation: "2.5×4=10。"
      },
      {
        id: "m5p2",
        type: "计算题",
        difficulty: "★★",
        text: "0.8×0.5",
        answer: "0.4",
        explanation: "8×5=40，两位小数，得0.4。"
      },
      {
        id: "m5p3",
        type: "计算题",
        difficulty: "★★",
        text: "1.25×0.8",
        answer: "1",
        explanation: "1.25×0.8=1。"
      },
      {
        id: "m5p4",
        type: "计算题",
        difficulty: "★★",
        text: "7.2÷0.8",
        answer: "9",
        explanation: "7.2÷0.8=72÷8=9。"
      },
      {
        id: "m5p5",
        type: "计算题",
        difficulty: "★★",
        text: "4.8÷1.2",
        answer: "4",
        explanation: "4.8÷1.2=48÷12=4。"
      },
      {
        id: "m5p6",
        type: "计算题",
        difficulty: "★★",
        text: "0.56÷0.7",
        answer: "0.8",
        explanation: "0.56÷0.7=5.6÷7=0.8。"
      },
      {
        id: "m5p7",
        type: "计算题",
        difficulty: "★★★",
        text: "2.4×3.5",
        answer: "8.4",
        explanation: "24×35=840，两位小数，得8.4。"
      },
      {
        id: "m5p8",
        type: "计算题",
        difficulty: "★★★",
        text: "15.6÷0.12",
        answer: "130",
        explanation: "15.6÷0.12=1560÷12=130。"
      },
      {
        id: "m5p9",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：2.5×3.2",
        answer: "8",
        explanation: "2.5×4×0.8=10×0.8=8。"
      },
      {
        id: "m5p10",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：9.9×3.6",
        answer: "35.64",
        explanation: "(10-0.1)×3.6=36-0.36=35.64。"
      },
      {
        id: "m5p11",
        type: "填空题",
        difficulty: "★★",
        text: "3.4×0.9的积是____位小数。",
        answer: "2",
        explanation: "3.4一位小数，0.9一位小数，积是2位小数。"
      },
      {
        id: "m5p12",
        type: "填空题",
        difficulty: "★",
        text: "一个数的小数点向右移动一位，这个数扩大到原来的____倍。",
        answer: "10",
        explanation: "小数点右移一位扩大10倍。"
      },
      {
        id: "m5p13",
        type: "填空题",
        difficulty: "★★",
        text: "把1.5扩大到它的100倍是____。",
        answer: "150",
        explanation: "1.5×100=150。"
      },
      {
        id: "m5p14",
        type: "填空题",
        difficulty: "★★",
        text: "一个正方形边长2.5厘米，它的周长是____厘米。",
        answer: "10",
        explanation: "2.5×4=10厘米。"
      },
      {
        id: "m5p15",
        type: "解方程",
        difficulty: "★★",
        text: "解方程：x+1.5=3.2",
        answer: "1.7",
        explanation: "x=3.2-1.5=1.7。"
      },
      {
        id: "m5p16",
        type: "解方程",
        difficulty: "★★",
        text: "解方程：3x=12.6",
        answer: "4.2",
        explanation: "x=12.6÷3=4.2。"
      },
      {
        id: "m5p17",
        type: "解方程",
        difficulty: "★★★",
        text: "解方程：2x+5=17",
        answer: "6",
        explanation: "2x=17-5=12，x=6。"
      },
      {
        id: "m5p18",
        type: "解方程",
        difficulty: "★★★",
        text: "解方程：3x-4=11",
        answer: "5",
        explanation: "3x=11+4=15，x=5。"
      },
      {
        id: "m5p19",
        type: "填空题",
        difficulty: "★",
        text: "用数对表示位置时，先写____，再写____。",
        answer: "列，行",
        explanation: "数对(a,b)中a表示列，b表示行。"
      },
      {
        id: "m5p20",
        type: "填空题",
        difficulty: "★★",
        text: "数对(4,2)表示第____列第____行。",
        answer: "4，2",
        explanation: "数对(列,行)，所以是第4列第2行。"
      },
      {
        id: "m5p21",
        type: "选择题",
        difficulty: "★★",
        text: "在同一幅图上，数对(2,5)和(4,5)表示的两个位置在（  ）。",
        options: [
          "同一列",
          "同一行",
          "不同行也不同列",
          "无法确定"
        ],
        answer: 1,
        explanation: "两个数对第二个数(行)都是5，所以在同一行。"
      },
      {
        id: "m5p22",
        type: "填空题",
        difficulty: "★",
        text: "平行四边形的面积=____×____。",
        answer: "底，高",
        explanation: "平行四边形面积=底×高。"
      },
      {
        id: "m5p23",
        type: "图形题",
        difficulty: "★★★",
        text: "一个平行四边形底12厘米，高7厘米，面积是多少平方厘米？",
        answer: "84",
        explanation: "12×7=84平方厘米。"
      },
      {
        id: "m5p24",
        type: "图形题",
        difficulty: "★★★",
        text: "一个三角形底10厘米，高6厘米，面积是多少平方厘米？",
        answer: "30",
        explanation: "10×6÷2=30平方厘米。"
      },
      {
        id: "m5p25",
        type: "图形题",
        difficulty: "★★★",
        text: "一个梯形上底4厘米，下底10厘米，高5厘米，面积是多少平方厘米？",
        answer: "35",
        explanation: "(4+10)×5÷2=14×5÷2=35平方厘米。"
      },
      {
        id: "m5p26",
        type: "应用题",
        difficulty: "★★★",
        text: "一块梯形麦田，上底30米，下底50米，高40米，每平方米收小麦0.8千克，共收小麦多少千克？",
        answer: "1280千克",
        explanation: "面积(30+50)×40÷2=1600平方米；1600×0.8=1280千克。"
      },
      {
        id: "m5p27",
        type: "植树问题",
        difficulty: "★★",
        text: "在一条长120米的小路一侧植树，每隔6米栽一棵（两端都要栽），一共要栽多少棵？",
        answer: "21棵",
        explanation: "两端都栽：120÷6+1=21棵。"
      },
      {
        id: "m5p28",
        type: "植树问题",
        difficulty: "★★★",
        text: "在一条长60米的小路两侧植树，每隔3米栽一棵（两端不栽），一共要栽多少棵？",
        answer: "38棵",
        explanation: "一侧60÷3-1=19棵，两侧19×2=38棵。"
      },
      {
        id: "m5p29",
        type: "植树问题",
        difficulty: "★★",
        text: "圆形操场周长200米，每隔5米栽一棵树，一共栽多少棵？",
        answer: "40棵",
        explanation: "封闭图形棵数=段数：200÷5=40棵。"
      },
      {
        id: "m5p30",
        type: "选择题",
        difficulty: "★★",
        text: "从一副扑克牌（去掉大小王）中任意抽一张，抽到（  ）的可能性最大。",
        options: [
          "红桃",
          "黑桃5",
          "红桃A",
          "方块K"
        ],
        answer: 0,
        explanation: "红桃有13张，其余选项各1张，所以抽到红桃的可能性最大。"
      },
      {
        id: "m5p31",
        type: "填空题",
        difficulty: "★★",
        text: "12的因数有____。",
        answer: "1，2，3，4，6，12",
        explanation: "12的因数：1、2、3、4、6、12。"
      },
      {
        id: "m5p32",
        type: "填空题",
        difficulty: "★★",
        text: "7的最小倍数是____。",
        answer: "7",
        explanation: "一个数的最小倍数是它本身。"
      },
      {
        id: "m5p33",
        type: "选择题",
        difficulty: "★★",
        text: "下面各数中，是质数的是（  ）。",
        options: [
          "9",
          "15",
          "19",
          "21"
        ],
        answer: 2,
        explanation: "19只能被1和19整除，是质数；9=3×3、15=3×5、21=3×7都是合数。"
      },
      {
        id: "m5p34",
        type: "填空题",
        difficulty: "★",
        text: "1既不是质数，也不是____。",
        answer: "合数",
        explanation: "1既不是质数也不是合数。"
      },
      {
        id: "m5p35",
        type: "填空题",
        difficulty: "★★",
        text: "6和8的最大公因数是____，最小公倍数是____。",
        answer: "2，24",
        explanation: "6=2×3，8=2³，最大公因数2，最小公倍数2³×3=24。"
      },
      {
        id: "m5p36",
        type: "填空题",
        difficulty: "★★★",
        text: "一个长方体长8厘米、宽5厘米、高4厘米，它的表面积是____平方厘米。",
        answer: "184",
        explanation: "2×(8×5+8×4+5×4)=2×(40+32+20)=2×92=184。"
      },
      {
        id: "m5p37",
        type: "填空题",
        difficulty: "★★★",
        text: "一个长方体长8厘米、宽5厘米、高4厘米，它的体积是____立方厘米。",
        answer: "160",
        explanation: "8×5×4=160立方厘米。"
      },
      {
        id: "m5p38",
        type: "填空题",
        difficulty: "★★",
        text: "一个正方体的棱长是3厘米，它的体积是____立方厘米。",
        answer: "27",
        explanation: "3×3×3=27立方厘米。"
      },
      {
        id: "m5p39",
        type: "填空题",
        difficulty: "★",
        text: "1升=____毫升。",
        answer: "1000",
        explanation: "1升=1000毫升。"
      },
      {
        id: "m5p40",
        type: "填空题",
        difficulty: "★★",
        text: "把3米长的绳子平均分成5段，每段是这根绳子的____，每段长____米。",
        answer: "1/5，3/5",
        explanation: "每段是全长的1/5；每段长3÷5=3/5米。"
      },
      {
        id: "m5p41",
        type: "填空题",
        difficulty: "★★",
        text: "3/4=____/12=9/____。",
        answer: "9，12",
        explanation: "3/4分子分母同乘3得9/12；9÷(3/4)=12，所以第二空是12。"
      },
      {
        id: "m5p42",
        type: "填空题",
        difficulty: "★★",
        text: "把2/3和4/5通分，公分母是____。",
        answer: "15",
        explanation: "3和5的最小公倍数是15，2/3=10/15，4/5=12/15。"
      },
      {
        id: "m5p43",
        type: "选择题",
        difficulty: "★★",
        text: "下面的分数中，是最简分数的是（  ）。",
        options: [
          "2/4",
          "3/9",
          "5/7",
          "6/8"
        ],
        answer: 2,
        explanation: "5和7只有公因数1，5/7是最简分数。"
      },
      {
        id: "m5p44",
        type: "填空题",
        difficulty: "★★",
        text: "3/8的分数单位是____，它有____个这样的单位。",
        answer: "1/8，3",
        explanation: "分数单位是1/8，分子3表示有3个这样的单位。"
      },
      {
        id: "m5p45",
        type: "填空题",
        difficulty: "★★",
        text: "观察一个物体时，从正面、上面、左面看到的形状可能____。",
        answer: "不同",
        explanation: "从不同方向观察同一物体，看到的形状可能不同。"
      },
      {
        id: "m5p46",
        type: "填空题",
        difficulty: "★★",
        text: "图形的平移不改变图形的____和____。",
        answer: "形状，大小",
        explanation: "平移只改变位置，不改变形状和大小。"
      },
      {
        id: "m5p47",
        type: "应用题",
        difficulty: "★★★",
        text: "一个长方体水箱，长10分米，宽8分米，深5分米，装满水后倒入棱长10分米的正方体水箱中，水面高多少分米？",
        answer: "4分米",
        explanation: "水的体积10×8×5=400立方分米；正方体底面积10×10=100平方分米；水面高400÷100=4分米。"
      },
      {
        id: "m5p48",
        type: "应用题",
        difficulty: "★★",
        text: "妈妈买2.5千克苹果，每千克6.8元，应付多少元？",
        answer: "17元",
        explanation: "2.5×6.8=17元。"
      },
      {
        id: "m5p49",
        type: "应用题",
        difficulty: "★★★",
        text: "一辆汽车行100千米耗油8.5升，照这样计算，行300千米耗油多少升？",
        answer: "25.5升",
        explanation: "8.5÷100×300=0.085×300=25.5升。"
      },
      {
        id: "m5p50",
        type: "应用题",
        difficulty: "★★",
        text: "一根铁丝长12米，用去它的1/4，还剩多少米？",
        answer: "9米",
        explanation: "用去12×1/4=3米，剩12-3=9米。"
      },
      {
        id: "m5p51",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p52",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长8cm宽3cm高8cm，表面积多少？",
        answer: "224平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(24+24+64)=224。"
      },
      {
        id: "m5p53",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p54",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p55",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p56",
        type: "计算题",
        difficulty: "★",
        text: "1/9 + 1/5",
        answer: "14/45",
        explanation: "通分后分母45，分子5+9=14。"
      },
      {
        id: "m5p57",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p58",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p59",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p60",
        type: "应用题",
        difficulty: "★",
        text: "长方体长3cm宽7cm高9cm，表面积多少？",
        answer: "222平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(21+63+27)=222。"
      },
      {
        id: "m5p61",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p62",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p63",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p64",
        type: "计算题",
        difficulty: "★★",
        text: "1/6 + 1/3",
        answer: "9/18",
        explanation: "通分后分母18，分子3+6=9。"
      },
      {
        id: "m5p65",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p66",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p67",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p68",
        type: "应用题",
        difficulty: "★",
        text: "长方体长8cm宽8cm高9cm，表面积多少？",
        answer: "416平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(64+72+72)=416。"
      },
      {
        id: "m5p69",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p70",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p71",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p72",
        type: "计算题",
        difficulty: "★",
        text: "1/9 + 1/6",
        answer: "15/54",
        explanation: "通分后分母54，分子6+9=15。"
      },
      {
        id: "m5p73",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p74",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p75",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p76",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长3cm宽8cm高10cm，表面积多少？",
        answer: "268平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(24+80+30)=268。"
      },
      {
        id: "m5p77",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p78",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p79",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p80",
        type: "计算题",
        difficulty: "★",
        text: "1/2 + 1/7",
        answer: "9/14",
        explanation: "通分后分母14，分子7+2=9。"
      },
      {
        id: "m5p81",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p82",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p83",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p84",
        type: "应用题",
        difficulty: "★",
        text: "长方体长6cm宽7cm高10cm，表面积多少？",
        answer: "344平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(42+70+60)=344。"
      },
      {
        id: "m5p85",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p86",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p87",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p88",
        type: "计算题",
        difficulty: "★★",
        text: "1/6 + 1/3",
        answer: "9/18",
        explanation: "通分后分母18，分子3+6=9。"
      },
      {
        id: "m5p89",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p90",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p91",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p92",
        type: "应用题",
        difficulty: "★",
        text: "长方体长3cm宽6cm高8cm，表面积多少？",
        answer: "180平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(18+48+24)=180。"
      },
      {
        id: "m5p93",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p94",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p95",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p96",
        type: "计算题",
        difficulty: "★",
        text: "1/3 + 1/3",
        answer: "6/9",
        explanation: "通分后分母9，分子3+3=6。"
      },
      {
        id: "m5p97",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p98",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p99",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p100",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长10cm宽7cm高7cm，表面积多少？",
        answer: "378平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(70+49+70)=378。"
      },
      {
        id: "m5p101",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p102",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p103",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p104",
        type: "计算题",
        difficulty: "★",
        text: "1/5 + 1/8",
        answer: "13/40",
        explanation: "通分后分母40，分子8+5=13。"
      },
      {
        id: "m5p105",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p106",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p107",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p108",
        type: "应用题",
        difficulty: "★",
        text: "长方体长5cm宽7cm高8cm，表面积多少？",
        answer: "262平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(35+56+40)=262。"
      },
      {
        id: "m5p109",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p110",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p111",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p112",
        type: "计算题",
        difficulty: "★★",
        text: "1/8 + 1/8",
        answer: "16/64",
        explanation: "通分后分母64，分子8+8=16。"
      },
      {
        id: "m5p113",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p114",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p115",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p116",
        type: "应用题",
        difficulty: "★",
        text: "长方体长5cm宽9cm高3cm，表面积多少？",
        answer: "174平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(45+27+15)=174。"
      },
      {
        id: "m5p117",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p118",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p119",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p120",
        type: "计算题",
        difficulty: "★",
        text: "1/5 + 1/5",
        answer: "10/25",
        explanation: "通分后分母25，分子5+5=10。"
      },
      {
        id: "m5p121",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p122",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p123",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p124",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长7cm宽8cm高8cm，表面积多少？",
        answer: "352平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(56+64+56)=352。"
      },
      {
        id: "m5p125",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p126",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p127",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p128",
        type: "计算题",
        difficulty: "★",
        text: "1/6 + 1/3",
        answer: "9/18",
        explanation: "通分后分母18，分子3+6=9。"
      },
      {
        id: "m5p129",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p130",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p131",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p132",
        type: "应用题",
        difficulty: "★",
        text: "长方体长6cm宽7cm高8cm，表面积多少？",
        answer: "292平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(42+56+48)=292。"
      },
      {
        id: "m5p133",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p134",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p135",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p136",
        type: "计算题",
        difficulty: "★★",
        text: "1/8 + 1/2",
        answer: "10/16",
        explanation: "通分后分母16，分子2+8=10。"
      },
      {
        id: "m5p137",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p138",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p139",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p140",
        type: "应用题",
        difficulty: "★",
        text: "长方体长9cm宽6cm高6cm，表面积多少？",
        answer: "288平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(54+36+54)=288。"
      },
      {
        id: "m5p141",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p142",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p143",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p144",
        type: "计算题",
        difficulty: "★",
        text: "1/3 + 1/6",
        answer: "9/18",
        explanation: "通分后分母18，分子6+3=9。"
      },
      {
        id: "m5p145",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p146",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p147",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p148",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长7cm宽9cm高3cm，表面积多少？",
        answer: "222平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(63+27+21)=222。"
      },
      {
        id: "m5p149",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p150",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p151",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p152",
        type: "计算题",
        difficulty: "★",
        text: "1/7 + 1/8",
        answer: "15/56",
        explanation: "通分后分母56，分子8+7=15。"
      },
      {
        id: "m5p153",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p154",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p155",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p156",
        type: "应用题",
        difficulty: "★",
        text: "长方体长6cm宽8cm高7cm，表面积多少？",
        answer: "292平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(48+56+42)=292。"
      },
      {
        id: "m5p157",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p158",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p159",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p160",
        type: "计算题",
        difficulty: "★★",
        text: "1/6 + 1/3",
        answer: "9/18",
        explanation: "通分后分母18，分子3+6=9。"
      },
      {
        id: "m5p161",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p162",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p163",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p164",
        type: "应用题",
        difficulty: "★",
        text: "长方体长3cm宽3cm高7cm，表面积多少？",
        answer: "102平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(9+21+21)=102。"
      },
      {
        id: "m5p165",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p166",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p167",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p168",
        type: "计算题",
        difficulty: "★",
        text: "1/7 + 1/7",
        answer: "14/49",
        explanation: "通分后分母49，分子7+7=14。"
      },
      {
        id: "m5p169",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p170",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p171",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p172",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长8cm宽4cm高6cm，表面积多少？",
        answer: "208平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(32+24+48)=208。"
      },
      {
        id: "m5p173",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p174",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p175",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p176",
        type: "计算题",
        difficulty: "★",
        text: "1/8 + 1/5",
        answer: "13/40",
        explanation: "通分后分母40，分子5+8=13。"
      },
      {
        id: "m5p177",
        type: "填空题",
        difficulty: "★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p178",
        type: "选择题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p179",
        type: "判断题",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p180",
        type: "应用题",
        difficulty: "★",
        text: "长方体长8cm宽4cm高7cm，表面积多少？",
        answer: "232平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(32+28+56)=232。"
      },
      {
        id: "m5p181",
        type: "简便运算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p182",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p183",
        type: "单位换算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p184",
        type: "计算题",
        difficulty: "★★",
        text: "1/9 + 1/9",
        answer: "18/81",
        explanation: "通分后分母81，分子9+9=18。"
      },
      {
        id: "m5p185",
        type: "填空题",
        difficulty: "★★★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p186",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p187",
        type: "判断题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p188",
        type: "应用题",
        difficulty: "★",
        text: "长方体长3cm宽6cm高10cm，表面积多少？",
        answer: "216平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(18+60+30)=216。"
      },
      {
        id: "m5p189",
        type: "简便运算",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p190",
        type: "解方程",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p191",
        type: "单位换算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p192",
        type: "计算题",
        difficulty: "★",
        text: "1/6 + 1/3",
        answer: "9/18",
        explanation: "通分后分母18，分子3+6=9。"
      },
      {
        id: "m5p193",
        type: "填空题",
        difficulty: "★",
        text: "长方体体积=长×宽×____",
        answer: "高",
        explanation: "长方体体积公式V=abh。"
      },
      {
        id: "m5p194",
        type: "选择题",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p195",
        type: "判断题",
        difficulty: "★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p196",
        type: "应用题",
        difficulty: "★★",
        text: "长方体长10cm宽4cm高5cm，表面积多少？",
        answer: "220平方厘米",
        explanation: "表面积=2(ab+bc+ac)=2(40+20+50)=220。"
      },
      {
        id: "m5p197",
        type: "简便运算",
        difficulty: "★★★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p198",
        type: "解方程",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p199",
        type: "单位换算",
        difficulty: "★",
        text: "判断：两个合数一定不互质。（  ）",
        answer: "×",
        explanation: "如4和9都是合数，但互质（最大公因数1）。"
      },
      {
        id: "m5p200",
        type: "计算题",
        difficulty: "★",
        text: "1/7 + 1/6",
        answer: "13/42",
        explanation: "通分后分母42，分子6+7=13。"
      }
    ]
  },
  grade6: {
    旧年级巩固: [
      {
        id: "m6r1",
        type: "计算题",
        difficulty: "★",
        text: "0.4×0.5",
        answer: "0.2",
        explanation: "4×5=20，两位小数，得0.2。"
      },
      {
        id: "m6r2",
        type: "计算题",
        difficulty: "★★",
        text: "1.5×0.6",
        answer: "0.9",
        explanation: "15×6=90，两位小数，得0.9。"
      },
      {
        id: "m6r3",
        type: "计算题",
        difficulty: "★★",
        text: "4.2÷0.6",
        answer: "7",
        explanation: "4.2÷0.6=42÷6=7。"
      },
      {
        id: "m6r4",
        type: "计算题",
        difficulty: "★★",
        text: "0.81÷0.9",
        answer: "0.9",
        explanation: "0.81÷0.9=8.1÷9=0.9。"
      },
      {
        id: "m6r5",
        type: "计算题",
        difficulty: "★★",
        text: "3.6÷0.12",
        answer: "30",
        explanation: "3.6÷0.12=360÷12=30。"
      },
      {
        id: "m6r6",
        type: "简便运算",
        difficulty: "★★",
        text: "简便计算：0.25×4.4",
        answer: "1.1",
        explanation: "0.25×4×1.1=1×1.1=1.1。"
      },
      {
        id: "m6r7",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：1.25×2.5×32",
        answer: "100",
        explanation: "1.25×2.5×8×4=(1.25×8)×(2.5×4)=10×10=100。"
      },
      {
        id: "m6r8",
        type: "解方程",
        difficulty: "★★",
        text: "解方程：x÷0.5=8",
        answer: "4",
        explanation: "x=8×0.5=4。"
      },
      {
        id: "m6r9",
        type: "解方程",
        difficulty: "★★★",
        text: "解方程：5x-3.2=11.8",
        answer: "3",
        explanation: "5x=11.8+3.2=15，x=3。"
      },
      {
        id: "m6r10",
        type: "解方程",
        difficulty: "★★★",
        text: "解方程：4(x+2)=20",
        answer: "3",
        explanation: "x+2=20÷4=5，x=3。"
      },
      {
        id: "m6r11",
        type: "填空题",
        difficulty: "★★",
        text: "一个三角形面积24平方厘米，底8厘米，高____厘米。",
        answer: "6",
        explanation: "高=面积×2÷底=24×2÷8=6厘米。"
      },
      {
        id: "m6r12",
        type: "填空题",
        difficulty: "★★",
        text: "一个平行四边形面积45平方厘米，高9厘米，底____厘米。",
        answer: "5",
        explanation: "底=面积÷高=45÷9=5厘米。"
      },
      {
        id: "m6r13",
        type: "填空题",
        difficulty: "★★★",
        text: "梯形上底3厘米下底7厘米面积25平方厘米，高____厘米。",
        answer: "5",
        explanation: "高=面积×2÷(上底+下底)=25×2÷10=5厘米。"
      },
      {
        id: "m6r14",
        type: "填空题",
        difficulty: "★★",
        text: "12和18的最大公因数是____，最小公倍数是____。",
        answer: "6，36",
        explanation: "12=2²×3，18=2×3²，最大公因数2×3=6，最小公倍数2²×3²=36。"
      },
      {
        id: "m6r15",
        type: "填空题",
        difficulty: "★★",
        text: "把24分解质因数：____。",
        answer: "24=2×2×2×3",
        explanation: "24=2³×3=2×2×2×3。"
      },
      {
        id: "m6r16",
        type: "选择题",
        difficulty: "★★",
        text: "下面各数中，是合数的是（  ）。",
        options: [
          "11",
          "13",
          "15",
          "17"
        ],
        answer: 2,
        explanation: "15=3×5是合数；11、13、17都是质数。"
      },
      {
        id: "m6r17",
        type: "填空题",
        difficulty: "★★",
        text: "一个长方体长6厘米宽4厘米高5厘米，体积____立方厘米。",
        answer: "120",
        explanation: "6×4×5=120立方厘米。"
      },
      {
        id: "m6r18",
        type: "填空题",
        difficulty: "★★★",
        text: "一个长方体长6厘米宽4厘米高5厘米，表面积____平方厘米。",
        answer: "148",
        explanation: "2×(6×4+6×5+4×5)=2×(24+30+20)=2×74=148。"
      },
      {
        id: "m6r19",
        type: "填空题",
        difficulty: "★",
        text: "正方体棱长4厘米，体积____立方厘米。",
        answer: "64",
        explanation: "4×4×4=64立方厘米。"
      },
      {
        id: "m6r20",
        type: "填空题",
        difficulty: "★★",
        text: "正方体棱长4厘米，表面积____平方厘米。",
        answer: "96",
        explanation: "4×4×6=96平方厘米。"
      },
      {
        id: "m6r21",
        type: "填空题",
        difficulty: "★",
        text: "2.5升=____毫升。",
        answer: "2500",
        explanation: "1升=1000毫升，2.5升=2500毫升。"
      },
      {
        id: "m6r22",
        type: "填空题",
        difficulty: "★",
        text: "3.06立方米=____立方分米。",
        answer: "3060",
        explanation: "1立方米=1000立方分米，3.06立方米=3060立方分米。"
      },
      {
        id: "m6r23",
        type: "填空题",
        difficulty: "★★",
        text: "3/5的分数单位是____，它有____个这样的单位。",
        answer: "1/5，3",
        explanation: "分数单位是1/5，分子3表示有3个。"
      },
      {
        id: "m6r24",
        type: "填空题",
        difficulty: "★★",
        text: "把5/6和3/8通分，公分母是____。",
        answer: "24",
        explanation: "6和8的最小公倍数是24，5/6=20/24，3/8=9/24。"
      },
      {
        id: "m6r25",
        type: "填空题",
        difficulty: "★★",
        text: "2/5=____/15=____/25。",
        answer: "6，10",
        explanation: "2/5分子分母同乘3得6/15；同乘5得10/25。"
      },
      {
        id: "m6r26",
        type: "选择题",
        difficulty: "★★",
        text: "下面是最简分数的是（  ）。",
        options: [
          "4/6",
          "3/8",
          "9/12",
          "10/15"
        ],
        answer: 1,
        explanation: "3和8只有公因数1，3/8是最简分数。"
      },
      {
        id: "m6r27",
        type: "填空题",
        difficulty: "★★",
        text: "5又2/7里面有____个1/7。",
        answer: "37",
        explanation: "5又2/7=37/7，有37个1/7。"
      },
      {
        id: "m6r28",
        type: "计算题",
        difficulty: "★★",
        text: "1/4+1/4",
        answer: "1/2",
        explanation: "2/4=1/2。"
      },
      {
        id: "m6r29",
        type: "计算题",
        difficulty: "★★",
        text: "5/8-1/8",
        answer: "1/2",
        explanation: "4/8=1/2。"
      },
      {
        id: "m6r30",
        type: "计算题",
        difficulty: "★★★",
        text: "1/2+1/3",
        answer: "5/6",
        explanation: "通分：3/6+2/6=5/6。"
      },
      {
        id: "m6r31",
        type: "计算题",
        difficulty: "★★★",
        text: "3/4-1/6",
        answer: "7/12",
        explanation: "通分：9/12-2/12=7/12。"
      },
      {
        id: "m6r32",
        type: "应用题",
        difficulty: "★★",
        text: "一块三角形菜地底40米高30米，面积多少平方米？",
        answer: "600平方米",
        explanation: "40×30÷2=600平方米。"
      },
      {
        id: "m6r33",
        type: "应用题",
        difficulty: "★★★",
        text: "一个长方体鱼缸长50厘米宽40厘米高30厘米（无盖），做这个鱼缸需要多少平方厘米玻璃？",
        answer: "7400平方厘米",
        explanation: "底+四周：50×40+50×30×2+40×30×2=2000+3000+2400=7400平方厘米。"
      },
      {
        id: "m6r34",
        type: "应用题",
        difficulty: "★★",
        text: "一个长方体水箱长4分米宽3分米高5分米，能装水多少升？",
        answer: "60升",
        explanation: "4×3×5=60立方分米=60升。"
      },
      {
        id: "m6r35",
        type: "应用题",
        difficulty: "★★",
        text: "小红看一本书，第一天看1/4，第二天看1/4，还剩几分之几没看？",
        answer: "1/2",
        explanation: "1-1/4-1/4=1/2。"
      },
      {
        id: "m6r36",
        type: "填空题",
        difficulty: "★",
        text: "用数对(3,6)表示位置，表示第____列第____行。",
        answer: "3，6",
        explanation: "数对(列,行)，是第3列第6行。"
      },
      {
        id: "m6r37",
        type: "填空题",
        difficulty: "★★",
        text: "方程3x=15的解是x=____。",
        answer: "5",
        explanation: "x=15÷3=5。"
      },
      {
        id: "m6r38",
        type: "判断题",
        difficulty: "★",
        text: "含有未知数的式子叫方程。",
        answer: "错误",
        explanation: "含有未知数的等式才叫方程，必须先是等式。"
      },
      {
        id: "m6r39",
        type: "判断题",
        difficulty: "★★★",
        text: "2.5÷0.4的商是6，余数是1。",
        answer: "错误",
        explanation: "余数是0.1而不是1，2.5-6×0.4=2.5-2.4=0.1。"
      },
      {
        id: "m6r40",
        type: "选择题",
        difficulty: "★★",
        text: "a÷b=c(a,b,c均不为0)，若a和b同时乘10，则c（  ）。",
        options: [
          "乘10",
          "除以10",
          "不变",
          "乘100"
        ],
        answer: 2,
        explanation: "被除数和除数同时乘相同的数(0除外)，商不变。"
      },
      {
        id: "m6r41",
        type: "计算题",
        difficulty: "★★",
        text: "7.5-2.85",
        answer: "4.65",
        explanation: "7.5-2.85=4.65。"
      },
      {
        id: "m6r42",
        type: "计算题",
        difficulty: "★★",
        text: "3.14+1.86",
        answer: "5",
        explanation: "3.14+1.86=5。"
      },
      {
        id: "m6r43",
        type: "应用题",
        difficulty: "★★",
        text: "小明带50元买文具，买笔用去12.8元，买本子用去18.5元，还剩多少元？",
        answer: "18.7元",
        explanation: "50-12.8-18.5=18.7元。"
      },
      {
        id: "m6r44",
        type: "应用题",
        difficulty: "★★★",
        text: "甲乙两车从相距480千米的两地相向开出，甲每小时行60千米，乙每小时行40千米，几小时后相遇？",
        answer: "4.8小时",
        explanation: "480÷(60+40)=480÷100=4.8小时。"
      },
      {
        id: "m6r45",
        type: "填空题",
        difficulty: "★★",
        text: "在2、3、5中，既是奇数又是质数的有____。",
        answer: "3和5",
        explanation: "3和5既是奇数又是质数；2是质数但是偶数。"
      },
      {
        id: "m6r46",
        type: "填空题",
        difficulty: "★★",
        text: "10以内所有质数的和是____。",
        answer: "17",
        explanation: "10以内质数有2、3、5、7，2+3+5+7=17。"
      },
      {
        id: "m6r47",
        type: "计算题",
        difficulty: "★★",
        text: "5/12+1/12",
        answer: "1/2",
        explanation: "6/12=1/2。"
      },
      {
        id: "m6r48",
        type: "填空题",
        difficulty: "★★",
        text: "一个数最大的因数是它____，最小的因数是____。",
        answer: "本身，1",
        explanation: "一个数最大因数是本身，最小因数是1。"
      },
      {
        id: "m6r49",
        type: "应用题",
        difficulty: "★★★",
        text: "一个长方体长8厘米宽6厘米高5厘米，如果高增加2厘米，体积增加多少立方厘米？",
        answer: "96立方厘米",
        explanation: "增加的体积=底面积×增加的高=8×6×2=96立方厘米。"
      },
      {
        id: "m6r50",
        type: "应用题",
        difficulty: "★★",
        text: "一根绳子长5米，剪去1/5米，还剩多少米？",
        answer: "4.8米",
        explanation: "注意是1/5米不是1/5，5-1/5=5-0.2=4.8米。"
      },
      {
        id: "m6r51",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+12 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r52",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径11cm，周长多少？（π取3.14）",
        answer: "69.08cm",
        explanation: "周长=2πr=2×3.14×11=69.08cm。"
      },
      {
        id: "m6r53",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r54",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+7 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r55",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r56",
        type: "计算题",
        difficulty: "★",
        text: "6/3 × 3/6",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r57",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r58",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r59",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r60",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径15cm，周长多少？（π取3.14）",
        answer: "94.20cm",
        explanation: "周长=2πr=2×3.14×15=94.20cm。"
      },
      {
        id: "m6r61",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r62",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r63",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+11 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r64",
        type: "计算题",
        difficulty: "★★",
        text: "8/4 × 4/8",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r65",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r66",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r67",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r68",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径11cm，周长多少？（π取3.14）",
        answer: "69.08cm",
        explanation: "周长=2πr=2×3.14×11=69.08cm。"
      },
      {
        id: "m6r69",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+17 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r70",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r71",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+17 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r72",
        type: "计算题",
        difficulty: "★",
        text: "5/5 × 5/5",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r73",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r74",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r75",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r76",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径10cm，周长多少？（π取3.14）",
        answer: "62.80cm",
        explanation: "周长=2πr=2×3.14×10=62.80cm。"
      },
      {
        id: "m6r77",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r78",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r79",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r80",
        type: "计算题",
        difficulty: "★",
        text: "8/5 × 5/8",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r81",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r82",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r83",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r84",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径15cm，周长多少？（π取3.14）",
        answer: "94.20cm",
        explanation: "周长=2πr=2×3.14×15=94.20cm。"
      },
      {
        id: "m6r85",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r86",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r87",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r88",
        type: "计算题",
        difficulty: "★★",
        text: "5/4 × 4/5",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r89",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r90",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r91",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r92",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径11cm，周长多少？（π取3.14）",
        answer: "69.08cm",
        explanation: "周长=2πr=2×3.14×11=69.08cm。"
      },
      {
        id: "m6r93",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+11 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r94",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r95",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r96",
        type: "计算题",
        difficulty: "★",
        text: "2/8 × 8/2",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r97",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r98",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+11 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r99",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r100",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径14cm，周长多少？（π取3.14）",
        answer: "87.92cm",
        explanation: "周长=2πr=2×3.14×14=87.92cm。"
      },
      {
        id: "m6r101",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r102",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r103",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r104",
        type: "计算题",
        difficulty: "★",
        text: "4/6 × 6/4",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r105",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r106",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r107",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+17 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r108",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径12cm，周长多少？（π取3.14）",
        answer: "75.36cm",
        explanation: "周长=2πr=2×3.14×12=75.36cm。"
      },
      {
        id: "m6r109",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r110",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r111",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r112",
        type: "计算题",
        difficulty: "★★",
        text: "5/2 × 2/5",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r113",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r114",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r115",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r116",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径14cm，周长多少？（π取3.14）",
        answer: "87.92cm",
        explanation: "周长=2πr=2×3.14×14=87.92cm。"
      },
      {
        id: "m6r117",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r118",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+18 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r119",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+16 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r120",
        type: "计算题",
        difficulty: "★",
        text: "3/7 × 7/3",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r121",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r122",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r123",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r124",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径15cm，周长多少？（π取3.14）",
        answer: "94.20cm",
        explanation: "周长=2πr=2×3.14×15=94.20cm。"
      },
      {
        id: "m6r125",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r126",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r127",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r128",
        type: "计算题",
        difficulty: "★",
        text: "8/2 × 2/8",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r129",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r130",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r131",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r132",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径6cm，周长多少？（π取3.14）",
        answer: "37.68cm",
        explanation: "周长=2πr=2×3.14×6=37.68cm。"
      },
      {
        id: "m6r133",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r134",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r135",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r136",
        type: "计算题",
        difficulty: "★★",
        text: "2/8 × 8/2",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r137",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r138",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+17 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r139",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r140",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径4cm，周长多少？（π取3.14）",
        answer: "25.12cm",
        explanation: "周长=2πr=2×3.14×4=25.12cm。"
      },
      {
        id: "m6r141",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r142",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r143",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+12 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r144",
        type: "计算题",
        difficulty: "★",
        text: "5/4 × 4/5",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r145",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r146",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+16 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r147",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r148",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径14cm，周长多少？（π取3.14）",
        answer: "87.92cm",
        explanation: "周长=2πr=2×3.14×14=87.92cm。"
      },
      {
        id: "m6r149",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r150",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r151",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r152",
        type: "计算题",
        difficulty: "★",
        text: "9/5 × 5/9",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r153",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r154",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r155",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r156",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径12cm，周长多少？（π取3.14）",
        answer: "75.36cm",
        explanation: "周长=2πr=2×3.14×12=75.36cm。"
      },
      {
        id: "m6r157",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+12 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r158",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r159",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+16 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r160",
        type: "计算题",
        difficulty: "★★",
        text: "2/5 × 5/2",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r161",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r162",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r163",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r164",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径11cm，周长多少？（π取3.14）",
        answer: "69.08cm",
        explanation: "周长=2πr=2×3.14×11=69.08cm。"
      },
      {
        id: "m6r165",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+14 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r166",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+18 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r167",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+19 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r168",
        type: "计算题",
        difficulty: "★",
        text: "7/2 × 2/7",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r169",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r170",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+15 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r171",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r172",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径5cm，周长多少？（π取3.14）",
        answer: "31.40cm",
        explanation: "周长=2πr=2×3.14×5=31.40cm。"
      },
      {
        id: "m6r173",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+12 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r174",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r175",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+10 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r176",
        type: "计算题",
        difficulty: "★",
        text: "2/6 × 6/2",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r177",
        type: "填空题",
        difficulty: "★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r178",
        type: "选择题",
        difficulty: "★★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r179",
        type: "判断题",
        difficulty: "★★★",
        text: "1+2+3+...+5 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r180",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径6cm，周长多少？（π取3.14）",
        answer: "37.68cm",
        explanation: "周长=2πr=2×3.14×6=37.68cm。"
      },
      {
        id: "m6r181",
        type: "简便运算",
        difficulty: "★",
        text: "1+2+3+...+11 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r182",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+10 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r183",
        type: "单位换算",
        difficulty: "★★",
        text: "1+2+3+...+8 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r184",
        type: "计算题",
        difficulty: "★★",
        text: "7/9 × 9/7",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r185",
        type: "填空题",
        difficulty: "★★★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r186",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r187",
        type: "判断题",
        difficulty: "★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r188",
        type: "应用题",
        difficulty: "★",
        text: "圆的半径9cm，周长多少？（π取3.14）",
        answer: "56.52cm",
        explanation: "周长=2πr=2×3.14×9=56.52cm。"
      },
      {
        id: "m6r189",
        type: "简便运算",
        difficulty: "★★",
        text: "1+2+3+...+16 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r190",
        type: "解方程",
        difficulty: "★★",
        text: "1+2+3+...+6 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r191",
        type: "单位换算",
        difficulty: "★★★",
        text: "1+2+3+...+11 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r192",
        type: "计算题",
        difficulty: "★",
        text: "3/9 × 9/3",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      },
      {
        id: "m6r193",
        type: "填空题",
        difficulty: "★",
        text: "____决定圆的位置，____决定圆的大小。",
        answer: "圆心、半径",
        explanation: "圆心确定位置，半径确定大小。"
      },
      {
        id: "m6r194",
        type: "选择题",
        difficulty: "★",
        text: "1+2+3+...+18 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r195",
        type: "判断题",
        difficulty: "★★",
        text: "1+2+3+...+16 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r196",
        type: "应用题",
        difficulty: "★★",
        text: "圆的半径4cm，周长多少？（π取3.14）",
        answer: "25.12cm",
        explanation: "周长=2πr=2×3.14×4=25.12cm。"
      },
      {
        id: "m6r197",
        type: "简便运算",
        difficulty: "★★★",
        text: "1+2+3+...+20 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r198",
        type: "解方程",
        difficulty: "★",
        text: "1+2+3+...+13 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r199",
        type: "单位换算",
        difficulty: "★",
        text: "1+2+3+...+9 (高斯求和)",
        answer: "计算得出",
        explanation: "首项加末项乘项数除以2。"
      },
      {
        id: "m6r200",
        type: "计算题",
        difficulty: "★",
        text: "7/5 × 5/7",
        answer: "1",
        explanation: "互为倒数的两个数乘积为1。"
      }
    ],
    新学期预习: [
      {
        id: "m6p1",
        type: "计算题",
        difficulty: "★★",
        text: "2/3×6",
        answer: "4",
        explanation: "2×6÷3=4。"
      },
      {
        id: "m6p2",
        type: "计算题",
        difficulty: "★★★",
        text: "2/5×3/4",
        answer: "3/10",
        explanation: "分子2×3=6，分母5×4=20，6/20=3/10。"
      },
      {
        id: "m6p3",
        type: "计算题",
        difficulty: "★★★",
        text: "6÷3/4",
        answer: "8",
        explanation: "6×4/3=8。"
      },
      {
        id: "m6p4",
        type: "计算题",
        difficulty: "★★★",
        text: "5/8÷5/6",
        answer: "3/4",
        explanation: "5/8×6/5=6/8=3/4。"
      },
      {
        id: "m6p5",
        type: "计算题",
        difficulty: "★★★",
        text: "1-2/5×1/4",
        answer: "9/10",
        explanation: "先乘：2/5×1/4=2/20=1/10，1-1/10=9/10。"
      },
      {
        id: "m6p6",
        type: "简便运算",
        difficulty: "★★★",
        text: "简便计算：4/9×5+4/9×4",
        answer: "4",
        explanation: "4/9×(5+4)=4/9×9=4。"
      },
      {
        id: "m6p7",
        type: "填空题",
        difficulty: "★",
        text: "分数乘分数，用分子相乘的积作分子，分母相乘的积作____。",
        answer: "分母",
        explanation: "分数乘分数，分子乘分子作分子，分母乘分母作分母。"
      },
      {
        id: "m6p8",
        type: "填空题",
        difficulty: "★★",
        text: "12的1/3是____。",
        answer: "4",
        explanation: "12×1/3=4。"
      },
      {
        id: "m6p9",
        type: "填空题",
        difficulty: "★★",
        text: "甲数是乙数的3/4，是把____看作单位\"1\"。",
        answer: "乙数",
        explanation: "甲数与乙数比较，乙数是单位\"1\"。"
      },
      {
        id: "m6p10",
        type: "填空题",
        difficulty: "★★",
        text: "3/4的倒数是____。",
        answer: "4/3",
        explanation: "乘积为1的两个数互为倒数，3/4的倒数是4/3。"
      },
      {
        id: "m6p11",
        type: "填空题",
        difficulty: "★",
        text: "0____倒数。（填\"有\"或\"没有\"）",
        answer: "没有",
        explanation: "0没有倒数。"
      },
      {
        id: "m6p12",
        type: "填空题",
        difficulty: "★★",
        text: "3:5的比值是____。",
        answer: "3/5",
        explanation: "比值=前项÷后项=3÷5=3/5。"
      },
      {
        id: "m6p13",
        type: "填空题",
        difficulty: "★★",
        text: "把8:12化成最简整数比是____。",
        answer: "2:3",
        explanation: "8:12=(8÷4):(12÷4)=2:3。"
      },
      {
        id: "m6p14",
        type: "填空题",
        difficulty: "★★★",
        text: "0.25:1/2化成最简整数比是____。",
        answer: "1:2",
        explanation: "0.25:0.5=25:50=1:2。"
      },
      {
        id: "m6p15",
        type: "填空题",
        difficulty: "★★",
        text: "表示两个比相等的式子叫____。",
        answer: "比例",
        explanation: "表示两个比相等的式子叫比例。"
      },
      {
        id: "m6p16",
        type: "填空题",
        difficulty: "★★",
        text: "在比例2:3=4:6中，外项是____和____。",
        answer: "2，6",
        explanation: "比例两端的项叫外项，中间的项叫内项。"
      },
      {
        id: "m6p17",
        type: "填空题",
        difficulty: "★★★",
        text: "如果a:b=c:d，那么ad=____（比例的基本性质）。",
        answer: "bc",
        explanation: "比例的两个外项之积等于两个内项之积，即ad=bc。"
      },
      {
        id: "m6p18",
        type: "选择题",
        difficulty: "★★",
        text: "下面能组成比例的是（  ）。",
        options: [
          "2:3和4:5",
          "1:2和3:6",
          "2:4和3:5",
          "5:2和10:3"
        ],
        answer: 1,
        explanation: "1:2=0.5，3:6=0.5，比值相等能组成比例。"
      },
      {
        id: "m6p19",
        type: "填空题",
        difficulty: "★",
        text: "圆心决定圆的____，半径决定圆的____。",
        answer: "位置，大小",
        explanation: "圆心决定位置，半径决定大小。"
      },
      {
        id: "m6p20",
        type: "图形题",
        difficulty: "★★",
        text: "一个圆的半径是3厘米，直径是多少厘米？周长是多少厘米？（π取3.14）",
        answer: "直径6厘米，周长18.84厘米",
        explanation: "直径=2r=6厘米；周长=2πr=2×3.14×3=18.84厘米。"
      },
      {
        id: "m6p21",
        type: "图形题",
        difficulty: "★★★",
        text: "一个圆的直径是10厘米，它的面积是多少平方厘米？（π取3.14）",
        answer: "78.5",
        explanation: "r=5厘米，面积=πr²=3.14×25=78.5平方厘米。"
      },
      {
        id: "m6p22",
        type: "选择题",
        difficulty: "★★",
        text: "圆的周长与直径的比值是（  ）。",
        options: [
          "2",
          "π",
          "3",
          "4"
        ],
        answer: 1,
        explanation: "圆的周长与直径的比值是圆周率π。"
      },
      {
        id: "m6p23",
        type: "填空题",
        difficulty: "★",
        text: "圆有____条对称轴。",
        answer: "无数",
        explanation: "圆是轴对称图形，有无数条对称轴。"
      },
      {
        id: "m6p24",
        type: "填空题",
        difficulty: "★",
        text: "25%=____（分数）=____（小数）。",
        answer: "1/4，0.25",
        explanation: "25%=25/100=1/4=0.25。"
      },
      {
        id: "m6p25",
        type: "填空题",
        difficulty: "★★",
        text: "一件衣服打八折出售，就是按原价的____%出售。",
        answer: "80",
        explanation: "八折即80%。"
      },
      {
        id: "m6p26",
        type: "选择题",
        difficulty: "★★★",
        text: "一种商品先涨价10%再降价10%，现价与原价相比（  ）。",
        options: [
          "高",
          "低",
          "相等",
          "无法确定"
        ],
        answer: 1,
        explanation: "原价1，涨价后1.1，再降价1.1×0.9=0.99，低于原价。"
      },
      {
        id: "m6p27",
        type: "应用题",
        difficulty: "★★★",
        text: "某班有学生45人，今天缺席3人，今天的出勤率是多少？（百分号前保留一位小数）",
        answer: "93.3%",
        explanation: "(45-3)÷45×100%=42÷45×100%≈93.3%。"
      },
      {
        id: "m6p28",
        type: "填空题",
        difficulty: "★",
        text: "像-5、-2这样的数叫____。",
        answer: "负数",
        explanation: "比0小的数是负数。"
      },
      {
        id: "m6p29",
        type: "填空题",
        difficulty: "★",
        text: "0既不是正数也不是____。",
        answer: "负数",
        explanation: "0既不是正数也不是负数。"
      },
      {
        id: "m6p30",
        type: "填空题",
        difficulty: "★★",
        text: "如果存入2000元记作+2000元，那么取出500元记作____元。",
        answer: "-500",
        explanation: "存入记正，取出记负，取出500元记作-500元。"
      },
      {
        id: "m6p31",
        type: "填空题",
        difficulty: "★",
        text: "圆柱有____个底面。",
        answer: "2",
        explanation: "圆柱有两个完全相同的圆形底面。"
      },
      {
        id: "m6p32",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱的侧面沿高展开是____形。",
        answer: "长方",
        explanation: "圆柱侧面沿高剪开展开是长方形。"
      },
      {
        id: "m6p33",
        type: "图形题",
        difficulty: "★★★",
        text: "一个圆柱底面半径2厘米，高5厘米，它的侧面积是多少平方厘米？（π取3.14）",
        answer: "62.8",
        explanation: "侧面积=底面周长×高=2×3.14×2×5=62.8平方厘米。"
      },
      {
        id: "m6p34",
        type: "图形题",
        difficulty: "★★★",
        text: "一个圆柱底面半径2厘米，高5厘米，它的体积是多少立方厘米？（π取3.14）",
        answer: "62.8",
        explanation: "体积=πr²h=3.14×4×5=62.8立方厘米。"
      },
      {
        id: "m6p35",
        type: "填空题",
        difficulty: "★★",
        text: "圆锥的体积等于和它等底等高的圆柱体积的____。",
        answer: "三分之一",
        explanation: "圆锥体积=等底等高圆柱体积×1/3。"
      },
      {
        id: "m6p36",
        type: "图形题",
        difficulty: "★★★",
        text: "一个圆锥底面积12平方厘米，高5厘米，体积是多少立方厘米？",
        answer: "20",
        explanation: "V=底面积×高÷3=12×5÷3=20立方厘米。"
      },
      {
        id: "m6p37",
        type: "填空题",
        difficulty: "★★",
        text: "扇形统计图用整个圆表示____，用扇形表示____。",
        answer: "总数，各部分",
        explanation: "整个圆表示总数，各扇形表示各部分占总数的百分比。"
      },
      {
        id: "m6p38",
        type: "选择题",
        difficulty: "★★",
        text: "要反映各部分数量与总数之间的关系，用（  ）统计图最合适。",
        options: [
          "条形",
          "折线",
          "扇形",
          "都可以"
        ],
        answer: 2,
        explanation: "扇形统计图能清楚地反映各部分与总数的关系。"
      },
      {
        id: "m6p39",
        type: "填空题",
        difficulty: "★★",
        text: "确定物体的位置，除了距离，还要知道____。",
        answer: "方向",
        explanation: "确定位置需要方向和距离两个条件。"
      },
      {
        id: "m6p40",
        type: "填空题",
        difficulty: "★★",
        text: "在地图上，通常用____等方向描述物体的位置。",
        answer: "东、南、西、北",
        explanation: "地图上通常按东、南、西、北等方向确定位置。"
      },
      {
        id: "m6p41",
        type: "填空题",
        difficulty: "★★",
        text: "把一个图形按2:1放大，就是各边放大到原来的____倍。",
        answer: "2",
        explanation: "2:1放大即各边放大到原来的2倍。"
      },
      {
        id: "m6p42",
        type: "选择题",
        difficulty: "★★★",
        text: "把图形按1:3缩小，面积缩小到原来的（  ）。",
        options: [
          "1/3",
          "1/6",
          "1/9",
          "3"
        ],
        answer: 2,
        explanation: "面积比是边长比的平方，(1/3)²=1/9。"
      },
      {
        id: "m6p43",
        type: "应用题",
        difficulty: "★★★",
        text: "一个圆的周长是31.4厘米，它的面积是多少？（π取3.14）",
        answer: "78.5平方厘米",
        explanation: "r=31.4÷(2×3.14)=5厘米；面积=πr²=3.14×25=78.5平方厘米。"
      },
      {
        id: "m6p44",
        type: "应用题",
        difficulty: "★★★",
        text: "一段公路，甲队单独修10天完成，乙队单独修15天完成，两队合修几天完成？",
        answer: "6天",
        explanation: "1÷(1/10+1/15)=1÷(3/30+2/30)=1÷(5/30)=6天。"
      },
      {
        id: "m6p45",
        type: "应用题",
        difficulty: "★★★",
        text: "一本书，小明第一天看了1/4，第二天看了余下的1/3，还剩这本书的几分之几？",
        answer: "1/2",
        explanation: "第一天剩1-1/4=3/4；第二天看3/4×1/3=1/4；剩3/4-1/4=1/2。"
      },
      {
        id: "m6p46",
        type: "应用题",
        difficulty: "★★★",
        text: "一个圆柱形水桶底面直径4分米，高5分米，能装水多少升？（π取3.14）",
        answer: "62.8升",
        explanation: "r=2分米，体积=πr²h=3.14×4×5=62.8立方分米=62.8升。"
      },
      {
        id: "m6p47",
        type: "应用题",
        difficulty: "★★★",
        text: "一堆圆锥形沙堆，底面周长18.84米，高1.5米，沙堆体积多少？（π取3.14）",
        answer: "14.13立方米",
        explanation: "r=18.84÷(2×3.14)=3米；体积=πr²h÷3=3.14×9×1.5÷3=14.13立方米。"
      },
      {
        id: "m6p48",
        type: "应用题",
        difficulty: "★★★",
        text: "一件商品原价200元，先降价20%后又涨价20%，现价多少元？",
        answer: "192元",
        explanation: "降价后200×(1-20%)=160元；涨价后160×(1+20%)=192元。"
      },
      {
        id: "m6p49",
        type: "应用题",
        difficulty: "★★★",
        text: "在比例尺1:2000000的地图上，量得两地相距5厘米，实际距离多少千米？",
        answer: "100千米",
        explanation: "5×2000000=10000000厘米=100千米。"
      },
      {
        id: "m6p50",
        type: "应用题",
        difficulty: "★★★",
        text: "六(1)班40人参加植树，男生和女生人数比是5:3，男女生各多少人？",
        answer: "男生25人，女生15人",
        explanation: "总份数5+3=8；男生40×5/8=25人；女生40×3/8=15人。"
      },
      {
        id: "m6p51",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p52",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径3cm，高19cm，体积多少？（π取3.14）",
        answer: "536.94立方厘米",
        explanation: "V=πr²h=3.14×3²×19=536.94。"
      },
      {
        id: "m6p53",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p54",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p55",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p56",
        type: "计算题",
        difficulty: "★",
        text: "7:3 = x:14，求x",
        answer: "32.666666666666664",
        explanation: "比例内项之积等于外项之积：3x=7×14，x=32.666666666666664。"
      },
      {
        id: "m6p57",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p58",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p59",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p60",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径3cm，高7cm，体积多少？（π取3.14）",
        answer: "197.82立方厘米",
        explanation: "V=πr²h=3.14×3²×7=197.82。"
      },
      {
        id: "m6p61",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p62",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p63",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p64",
        type: "计算题",
        difficulty: "★★",
        text: "6:5 = x:12，求x",
        answer: "14.4",
        explanation: "比例内项之积等于外项之积：5x=6×12，x=14.4。"
      },
      {
        id: "m6p65",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p66",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p67",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p68",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径6cm，高10cm，体积多少？（π取3.14）",
        answer: "1130.40立方厘米",
        explanation: "V=πr²h=3.14×6²×10=1130.40。"
      },
      {
        id: "m6p69",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p70",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p71",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p72",
        type: "计算题",
        difficulty: "★",
        text: "4:8 = x:8，求x",
        answer: "4",
        explanation: "比例内项之积等于外项之积：8x=4×8，x=4。"
      },
      {
        id: "m6p73",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p74",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p75",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p76",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径9cm，高15cm，体积多少？（π取3.14）",
        answer: "3815.10立方厘米",
        explanation: "V=πr²h=3.14×9²×15=3815.10。"
      },
      {
        id: "m6p77",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p78",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p79",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p80",
        type: "计算题",
        difficulty: "★",
        text: "5:6 = x:10，求x",
        answer: "8.333333333333334",
        explanation: "比例内项之积等于外项之积：6x=5×10，x=8.333333333333334。"
      },
      {
        id: "m6p81",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p82",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p83",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p84",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径3cm，高12cm，体积多少？（π取3.14）",
        answer: "339.12立方厘米",
        explanation: "V=πr²h=3.14×3²×12=339.12。"
      },
      {
        id: "m6p85",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p86",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p87",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p88",
        type: "计算题",
        difficulty: "★★",
        text: "2:4 = x:4，求x",
        answer: "2",
        explanation: "比例内项之积等于外项之积：4x=2×4，x=2。"
      },
      {
        id: "m6p89",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p90",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p91",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p92",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径9cm，高9cm，体积多少？（π取3.14）",
        answer: "2289.06立方厘米",
        explanation: "V=πr²h=3.14×9²×9=2289.06。"
      },
      {
        id: "m6p93",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p94",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p95",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p96",
        type: "计算题",
        difficulty: "★",
        text: "5:3 = x:10，求x",
        answer: "16.666666666666668",
        explanation: "比例内项之积等于外项之积：3x=5×10，x=16.666666666666668。"
      },
      {
        id: "m6p97",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p98",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p99",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p100",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径9cm，高8cm，体积多少？（π取3.14）",
        answer: "2034.72立方厘米",
        explanation: "V=πr²h=3.14×9²×8=2034.72。"
      },
      {
        id: "m6p101",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p102",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p103",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p104",
        type: "计算题",
        difficulty: "★",
        text: "7:7 = x:14，求x",
        answer: "14",
        explanation: "比例内项之积等于外项之积：7x=7×14，x=14。"
      },
      {
        id: "m6p105",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p106",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p107",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p108",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径3cm，高12cm，体积多少？（π取3.14）",
        answer: "339.12立方厘米",
        explanation: "V=πr²h=3.14×3²×12=339.12。"
      },
      {
        id: "m6p109",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p110",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p111",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p112",
        type: "计算题",
        difficulty: "★★",
        text: "3:9 = x:6，求x",
        answer: "2",
        explanation: "比例内项之积等于外项之积：9x=3×6，x=2。"
      },
      {
        id: "m6p113",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p114",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p115",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p116",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径6cm，高13cm，体积多少？（π取3.14）",
        answer: "1469.52立方厘米",
        explanation: "V=πr²h=3.14×6²×13=1469.52。"
      },
      {
        id: "m6p117",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p118",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p119",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p120",
        type: "计算题",
        difficulty: "★",
        text: "2:2 = x:4，求x",
        answer: "4",
        explanation: "比例内项之积等于外项之积：2x=2×4，x=4。"
      },
      {
        id: "m6p121",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p122",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p123",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p124",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径7cm，高5cm，体积多少？（π取3.14）",
        answer: "769.30立方厘米",
        explanation: "V=πr²h=3.14×7²×5=769.30。"
      },
      {
        id: "m6p125",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p126",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p127",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p128",
        type: "计算题",
        difficulty: "★",
        text: "9:5 = x:18，求x",
        answer: "32.4",
        explanation: "比例内项之积等于外项之积：5x=9×18，x=32.4。"
      },
      {
        id: "m6p129",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p130",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p131",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p132",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径3cm，高10cm，体积多少？（π取3.14）",
        answer: "282.60立方厘米",
        explanation: "V=πr²h=3.14×3²×10=282.60。"
      },
      {
        id: "m6p133",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p134",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p135",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p136",
        type: "计算题",
        difficulty: "★★",
        text: "5:4 = x:10，求x",
        answer: "12.5",
        explanation: "比例内项之积等于外项之积：4x=5×10，x=12.5。"
      },
      {
        id: "m6p137",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p138",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p139",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p140",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径3cm，高13cm，体积多少？（π取3.14）",
        answer: "367.38立方厘米",
        explanation: "V=πr²h=3.14×3²×13=367.38。"
      },
      {
        id: "m6p141",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p142",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p143",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p144",
        type: "计算题",
        difficulty: "★",
        text: "9:8 = x:18，求x",
        answer: "20.25",
        explanation: "比例内项之积等于外项之积：8x=9×18，x=20.25。"
      },
      {
        id: "m6p145",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p146",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p147",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p148",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径6cm，高10cm，体积多少？（π取3.14）",
        answer: "1130.40立方厘米",
        explanation: "V=πr²h=3.14×6²×10=1130.40。"
      },
      {
        id: "m6p149",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p150",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p151",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p152",
        type: "计算题",
        difficulty: "★",
        text: "6:5 = x:12，求x",
        answer: "14.4",
        explanation: "比例内项之积等于外项之积：5x=6×12，x=14.4。"
      },
      {
        id: "m6p153",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p154",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p155",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p156",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径4cm，高20cm，体积多少？（π取3.14）",
        answer: "1004.80立方厘米",
        explanation: "V=πr²h=3.14×4²×20=1004.80。"
      },
      {
        id: "m6p157",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p158",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p159",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p160",
        type: "计算题",
        difficulty: "★★",
        text: "9:3 = x:18，求x",
        answer: "54",
        explanation: "比例内项之积等于外项之积：3x=9×18，x=54。"
      },
      {
        id: "m6p161",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p162",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p163",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p164",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径7cm，高9cm，体积多少？（π取3.14）",
        answer: "1384.74立方厘米",
        explanation: "V=πr²h=3.14×7²×9=1384.74。"
      },
      {
        id: "m6p165",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p166",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p167",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p168",
        type: "计算题",
        difficulty: "★",
        text: "9:5 = x:18，求x",
        answer: "32.4",
        explanation: "比例内项之积等于外项之积：5x=9×18，x=32.4。"
      },
      {
        id: "m6p169",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p170",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p171",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p172",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径6cm，高11cm，体积多少？（π取3.14）",
        answer: "1243.44立方厘米",
        explanation: "V=πr²h=3.14×6²×11=1243.44。"
      },
      {
        id: "m6p173",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p174",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p175",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p176",
        type: "计算题",
        difficulty: "★",
        text: "5:3 = x:10，求x",
        answer: "16.666666666666668",
        explanation: "比例内项之积等于外项之积：3x=5×10，x=16.666666666666668。"
      },
      {
        id: "m6p177",
        type: "填空题",
        difficulty: "★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p178",
        type: "选择题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p179",
        type: "判断题",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p180",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径6cm，高8cm，体积多少？（π取3.14）",
        answer: "904.32立方厘米",
        explanation: "V=πr²h=3.14×6²×8=904.32。"
      },
      {
        id: "m6p181",
        type: "简便运算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p182",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p183",
        type: "单位换算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p184",
        type: "计算题",
        difficulty: "★★",
        text: "7:2 = x:14，求x",
        answer: "49",
        explanation: "比例内项之积等于外项之积：2x=7×14，x=49。"
      },
      {
        id: "m6p185",
        type: "填空题",
        difficulty: "★★★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p186",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p187",
        type: "判断题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p188",
        type: "应用题",
        difficulty: "★",
        text: "圆柱底面半径5cm，高5cm，体积多少？（π取3.14）",
        answer: "392.50立方厘米",
        explanation: "V=πr²h=3.14×5²×5=392.50。"
      },
      {
        id: "m6p189",
        type: "简便运算",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p190",
        type: "解方程",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p191",
        type: "单位换算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p192",
        type: "计算题",
        difficulty: "★",
        text: "4:7 = x:8，求x",
        answer: "4.571428571428571",
        explanation: "比例内项之积等于外项之积：7x=4×8，x=4.571428571428571。"
      },
      {
        id: "m6p193",
        type: "填空题",
        difficulty: "★",
        text: "圆柱体积=底面积×____",
        answer: "高",
        explanation: "V=Sh。"
      },
      {
        id: "m6p194",
        type: "选择题",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p195",
        type: "判断题",
        difficulty: "★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p196",
        type: "应用题",
        difficulty: "★★",
        text: "圆柱底面半径9cm，高10cm，体积多少？（π取3.14）",
        answer: "2543.40立方厘米",
        explanation: "V=πr²h=3.14×9²×10=2543.40。"
      },
      {
        id: "m6p197",
        type: "简便运算",
        difficulty: "★★★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p198",
        type: "解方程",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p199",
        type: "单位换算",
        difficulty: "★",
        text: "零下3°C记作____°C",
        answer: "-3",
        explanation: "零下用负数表示。"
      },
      {
        id: "m6p200",
        type: "计算题",
        difficulty: "★",
        text: "8:9 = x:16，求x",
        answer: "14.222222222222221",
        explanation: "比例内项之积等于外项之积：9x=8×16，x=14.222222222222221。"
      }
    ]
  }
};
