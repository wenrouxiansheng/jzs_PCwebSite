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
    danceClass:[
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
        { name: "王晓玉", duration: "5年", img: require("../assets/teacherList/teacher1_05.png").default, address: "#" },
        { name: "许杨", duration: "9年", img: require("../assets/teacherList/teacher2_05.png").default, address: "#" },
        { name: "孙亚秋", duration: "4年", img: require("../assets/teacherList/teacher3_05.png").default, address: "#" },
        { name: "向定军", duration: "5年", img: require("../assets/teacherList/teacher6_05.png").default, address: "#" },
        { name: "张培佩", duration: "3年", img: require("../assets/teacherList/teacher9.jpg").default, address: "#" },
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

    //美术页面公用数据
    adultArt: [
        { img: require('../assets/finieArts/pencilSketch/swiper1.png').default, text: "建立正确的审美观念开发想象力" },
        { img: require('../assets/finieArts/pencilSketch/swiper2.png').default, text: "提高对事物认知能力，增强动手能力" },
        { img: require('../assets/finieArts/pencilSketch/swiper3.png').default, text: "养成细致的观察能力，善于思考，培养耐力" },
    ],
    artClassroom: [
        { img: require('../assets/finieArts/pencilSketch/class1.png').default },
        { img: require('../assets/finieArts/pencilSketch/class2.png').default },
        { img: require('../assets/finieArts/pencilSketch/class3.png').default },
    ],
    artImage: [
        { img: require('../assets/finieArts/pencilSketch/p1.png').default },
        { img: require('../assets/finieArts/pencilSketch/p2.png').default },
        { img: require('../assets/finieArts/pencilSketch/p3.png').default },
        { img: require('../assets/finieArts/pencilSketch/p4.png').default },
    ]

}
export default data;