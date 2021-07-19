//教师目前都是用声乐的   可以区分扩展
const data = {

    //舞蹈页面公用数据
    danceChange: [
        { img: require('../assets/dance/folkDance/change1.png').default, text: "增加协调能力，锻炼身体协调适应性" },
        { img: require('../assets/dance/folkDance/change2.png').default, text: "增加身体柔韧度，身材匀称，身姿挺拔" },
        { img: require('../assets/dance/folkDance/change3.png').default, text: "提升个人气质，身体素质明显提升" },
        { img: require('../assets/dance/folkDance/change4.png').default, text: "社交类的舞蹈，可以和别人更好沟通" },
        { img: require('../assets/dance/folkDance/change5.png').default, text: "性格更开朗，气质优雅，具备一定审美能力" },
    ],
    danceChangeAdult: [
        { img: require('../assets/dance/folkDance/adult/change1.png').default, text: "增加协调能力，锻炼身体协调适应性" },
        { img: require('../assets/dance/folkDance/adult/change2.png').default, text: "增加身体柔韧度，身材匀称，身姿挺拔" },
        { img: require('../assets/dance/folkDance/adult/change3.png').default, text: "提升个人气质，身体素质明显提升" },
        { img: require('../assets/dance/folkDance/adult/change4.png').default, text: "社交类的舞蹈，可以和别人更好沟通" },
        { img: require('../assets/dance/folkDance/adult/change5.png').default, text: "性格更开朗，气质优雅，具备一定审美能力" },
    ],
    danceChangechild: [
        { img: require('../assets/dance/folkDance/child/change1.png').default, text: "形体优美，气质优雅，具备一定的审美能力" },
        { img: require('../assets/dance/folkDance/child/change2.png').default, text: "对舞蹈表演产生兴趣，善用肢体语言表现自己最美的一面" },
        { img: require('../assets/dance/folkDance/child/change3.png').default, text: "站有站相、坐有坐相，身材匀称，身姿挺拔" },
        { img: require('../assets/dance/folkDance/child/change4.png').default, text: "柔韧性、灵活性、协调性变好，身体素质明显提升" },
        { img: require('../assets/dance/folkDance/child/change5.png').default, text: "性格变得开朗活泼，自信大方，表现欲、表现力增强" },
        { img: require('../assets/dance/folkDance/child/change6.png').default, text: "得到很多比赛、表演的机会，自信满满，性格开朗活泼" },
        { img: require('../assets/dance/folkDance/child/change7.png').default, text: "与小伙伴一起跳舞，配合度、协作能力明显提升" },
    ],
    danceClass: [
        { img: require('../assets/dance/class/class1.png').default },
        { img: require('../assets/dance/class/class2.png').default },
        { img: require('../assets/dance/class/class3.png').default },
    ],
    danceChildClass: [
        { img: require('../assets/dance/class/child1.png').default },
        { img: require('../assets/dance/class/child2.png').default },
        { img: require('../assets/dance/class/child3.png').default },
    ],
    danceAdultClass: [
        { img: require('../assets/dance/class/adult1.png').default },
        { img: require('../assets/dance/class/adult2.png').default },
        { img: require('../assets/dance/class/adult3.png').default },
    ],


    //声乐页面公用数据
    adultMusic: [
        { img: require('../assets/music/popularSinging/change1.png').default, text: "正确的发声是唱歌的基础，融入音乐知识学习，让您轻松发声" },
        { img: require('../assets/music/popularSinging/change2.png').default, text: "让声音更富有质感和情感" },
        { img: require('../assets/music/popularSinging/change3.png').default, text: "尝试更多种类的歌曲，唱得更高，嗓子不累" },
        { img: require('../assets/music/popularSinging/change4.png').default, text: "选择适合个人声音条件的歌曲进行学习，培养个人特色和魅力" },
        { img: require('../assets/music/popularSinging/change5.png').default, text: "乐曲蕴含丰富的文化内容，有助拓宽知识面" },
        { img: require('../assets/music/popularSinging/change6.png').default, text: "音乐助您情感更细腻，促进与人交流，提高社交能力" },
    ],
    childMusic: [
        { img: require('../assets/music/childrenVoice/change1.png').default, text: "能够正确发音、咬字清晰，语言表达能力提升" },
        { img: require('../assets/music/childrenVoice/change2.png').default, text: "学会科学用嗓，说话声音变甜美" },
        { img: require('../assets/music/childrenVoice/change3.png').default, text: "气息均匀，呼吸顺畅，肺部得到锻炼、身强体健" },
        { img: require('../assets/music/childrenVoice/change4.png').default, text: "得到很多比赛、表演的机会，自信满满，性格开朗活泼" },
        { img: require('../assets/music/childrenVoice/change5.png').default, text: "教小朋友唱歌，跟朋友一起唱歌，成为大家喜欢的“团宠”" },
    ],
    musicTeacher: [
        {
            name: "宁山原", duration: "3年", img: require("../assets/teacherList/teacher1.png").default, address: "/site/wap/shanghai/teacherDetail/0",
            course: "少儿创意、装饰画、素描、彩铅、水彩、油画",
            honor: `荣获全国第六届”中国梦想杯”银奖<br>
            2018“童心绘梦想‘’全国少儿安全美术教育作品大展中获一等奖 <br>
            2019年，黑龙江省美术书法作品展览中获书法二等奖。<br>
            2019.10 油画作品《四丰*夜》获得中华人民共和国成立70周年暨首届佳木斯美术作品双年展优秀奖`
        },
        {
            name: "宋莉莉", duration: "5年", img: require("../assets/teacherList/teacher2.png").default, address: "/site/wap/shanghai/teacherDetail/1",
            course: "国标舞蹈、拉丁舞、摩登舞、交谊舞",
            honor: `2017江西省第二届“院校杯”全国体育舞蹈公开赛高等院校A组S冠军<br>
            2017“中传锦绣杯”中国·江西体育舞蹈（国际标准舞）全国公开赛高等院校A组S第一<br>
            山东第七届国际舞蹈全国公开赛公开A组S第一`
        },
        {
            name: "陈素华", duration: "3年", img: require("../assets/teacherList/teacher3.png").default, address: "/site/wap/shanghai/teacherDetail/2",
            course: "民族民间、芭蕾基训、古典基训、古典身韵",
            honor: `北京舞蹈学院中国舞教师专业资格证书<br>
            亳州学校第十四届舞蹈大赛团体一等奖<br>
            合肥市舞蹈大赛最佳指导奖<br>
            小荷花舞蹈大赛最佳指导奖`
        },
        {
            name: "曲柏然", duration: "4年", img: require("../assets/teacherList/teacher4.png").default, address: "/site/wap/shanghai/teacherDetail/3",
            course: "民族唱法、美声唱法、童声唱法、流行唱法",
            honor: `2017年：参演国家艺术基金滚动项目 大型民族歌剧《星星之火》并全年多次巡演<br>
            2018年：参演沈阳音乐学院建校80周年校庆“我们从延安走来”<br>
            2019年：参演我和我的祖国巡演系列音乐会之“在田间地头里歌唱”<br>`
        },
        {
            name: "王攀", duration: "4年", img: require("../assets/teacherList/teacher5.png").default, address: "/site/wap/shanghai/teacherDetail/4",
            course: "民族民间、古典基训、古典身韵、芭蕾基训、现代舞",
            honor: `《情满太行》获得第五届保定市舞蹈大赛专业组一等奖<br>
            《蒙古族课堂教学组合》一等奖<br>
            《太行赤子李保国》在第八届河北省舞蹈比赛暨第九届华北五省市(区)舞蹈大赛选拔赛中荣获专业青年组一等奖<br>
            河北省首届高校少数民族舞蹈大赛中表演的原创维族舞作品《绽放青春》获专业组一等奖<br>`
        },
        {
            name: "刘子耀", duration: "6年", img: require("../assets/teacherList/teacher6.png").default, address: "/site/wap/shanghai/teacherDetail/5",
            course: "民族唱法、美声唱法、童声唱法、流行唱法",
            honor: `2015年参加中国音乐学院天凡之音声乐研修班<br>
            2016年年荣获山东省技能大赛声乐美声组金奖<br>
            2017年荣获中白国际交流“一带一路”比赛声乐组一等奖<br>
            2018年荣获中白国际交流“丝绸之路”比赛声乐组一等奖<br>
            2018年参演中白留学生新春联欢晚会<br>
            2018年在白俄罗斯举办硕士研究生专场毕业音乐会`
        },

    ],
    musicShow: {
        background: require('../assets/music/show/bg.png').default,
        list: [
            { img: require('../assets/music/show/honor1.png').default, title: "“青春风采”国际青少年艺术节开幕式", text: "桔子树学员登上亮相国家级艺术殿堂——北京音乐厅，绽放青春风采" },
            { img: require('../assets/music/show/honor2.png').default, title: "炫丽童年梦艺术大赛", text: "桔子树学员受关工委邀请参加全国总决赛，登上国家大剧院舞台" },
            { img: require('../assets/music/show/honor3.png').default, title: "世界华人青少年艺术节", text: "桔子树学员在北京选拔赛、马来西亚吉隆坡总决赛中大放异彩" },
            { img: require('../assets/music/show/honor5.png').default, title: "“青春风采”国金桔杯艺术大赛际青少年艺术节开幕式", text: "桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季" },
        ]
    },
    musicClass: [
        { img: require('../assets/music/class/class1.png').default },
        { img: require('../assets/music/class/class2.png').default },
        { img: require('../assets/music/class/class3.png').default },
    ],

    //器乐页面公用数据
    IMShow: {
        background: require('../assets/instrumentalMusic/guitar/perform3.png').default,
        list: [
            { img: require('../assets/instrumentalMusic/guitar/perform1.png').default, title: "“青春风采”国际青少年艺术节开幕式", text: "桔子树学员登上亮相国家级艺术殿堂——北京音乐厅，绽放青春风采" },
            { img: require('../assets/instrumentalMusic/guitar/perform2.png').default, title: "世界华人青少年艺术节", text: "桔子树学员在北京选拔赛、马来西亚吉隆坡总决赛中大放异彩" },
            { img: require('../assets/instrumentalMusic/guitar/perform3.png').default, title: "李斯特杯香港国际钢琴公开赛", text: "桔子树学员登上世界级舞台，在国家未来大剧院歌剧厅奏响华美乐章" },
            { img: require('../assets/instrumentalMusic/guitar/perform4.png').default, title: "金桔杯艺术大赛", text: "桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季" },
        ]
    },
    adultIM: [
        { img: require('../assets/instrumentalMusic/guitar/swiper1.png').default, text: "学习乐器，全面锻炼大脑" },
        { img: require('../assets/instrumentalMusic/adultDrumKit/change2.png').default, text: "学乐器大量练习，会让您更有耐心、坚持不懈" },
        { img: require('../assets/instrumentalMusic/adultPiano/change3.png').default, text: "乐器演奏促进手眼、手脚的协调与配合" },
        { img: require('../assets/instrumentalMusic/adultUkulele/change4.png').default, text: "演奏乐器是一种创造性行为，有助提高创新力" },
        { img: require('../assets/instrumentalMusic/adultUkulele/change5.png').default, text: "乐曲蕴含丰富的文化内容，有助拓宽知识面" },
    ],
    childIM: [
        { img: require('../assets/instrumentalMusic/childDrumKit/change1.png').default, text: "学习乐器，全面锻炼孩子大脑" },
        { img: require('../assets/instrumentalMusic/childrenGuitar/change2.png').default, text: "学乐器大量练习，会让孩子更有耐心、坚持不懈" },
        { img: require('../assets/instrumentalMusic/childPiano/change3.png').default, text: "乐器演奏促进孩子手眼、手脚的协调与配合" },
        { img: require('../assets/instrumentalMusic/childUkulele/change4.png').default, text: "演奏乐器是一种创造性行为，有助提高孩子数学成绩" },
        { img: require('../assets/instrumentalMusic/childUkulele/change5.png').default, text: "学习乐器要不断阅读理解，有助提高孩子阅读理解能力" },
    ],
    classIM: [
        { img: require('../assets/instrumentalMusic/adultPiano/class1.png').default },
        { img: require('../assets/instrumentalMusic/childrenGuitar/class1.png').default },
        { img: require('../assets/instrumentalMusic/adultGuitar/class1.png').default },
    ],

    //美术页面公用数据
    adultArt: [
        { img: require('../assets/finieArts/pencilSketch/swiper1.png').default, text: "建立正确的审美观念开发想象力" },
        { img: require('../assets/finieArts/pencilSketch/swiper2.png').default, text: "提高对事物认知能力，增强动手能力" },
        { img: require('../assets/finieArts/pencilSketch/swiper3.png').default, text: "养成细致的观察能力，善于思考，培养耐力" },
    ],
    childArt: [
        { img: require('../assets/finieArts/childPencilSketch/change1.png').default, text: "培养孩子的想象力和创造力，让孩子更聪明" },
        { img: require('../assets/finieArts/childPencilSketch/change2.png').default, text: "孩子学会画画，有利于情绪的更好疏解" },
        { img: require('../assets/finieArts/childPencilSketch/change3.png').default, text: "孩子能够拥有更丰富的人生体验" },
        { img: require('../assets/finieArts/childPencilSketch/change4.png').default, text: "孩子培养良好的审美品位，增加社会竞争力" },
        { img: require('../assets/finieArts/childPencilSketch/change5.png').default, text: "孩子多一个兴趣，排解寂寞" },
    ],
    artClassroom: [
        { img: require('../assets/finieArts/pencilSketch/class1.png').default },
        { img: require('../assets/finieArts/pencilSketch/class2.png').default },
        { img: require('../assets/finieArts/pencilSketch/class3.png').default },
    ],
    childArtClassroom: [
        { img: require('../assets/finieArts/childPencilSketch/class1.png').default },
        { img: require('../assets/finieArts/childPencilSketch/class2.png').default },
        { img: require('../assets/finieArts/childPencilSketch/class3.png').default },
    ],
    artImage: [
        { img: require('../assets/finieArts/pencilSketch/p1.png').default },
        { img: require('../assets/finieArts/pencilSketch/p2.png').default },
        { img: require('../assets/finieArts/pencilSketch/p3.png').default },
        { img: require('../assets/finieArts/pencilSketch/p4.png').default },
    ]

}
export default data;