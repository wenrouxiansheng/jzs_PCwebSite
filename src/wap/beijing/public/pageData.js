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
            name: "孟繁颖", duration: "7年", img: require("../assets/teacherList/teacher4_05.png").default, address: "/site/wap/beijing/teacherDetail/1",
            course: "古典舞、芭蕾舞、民族民间舞、爵士舞、踢踏舞、肚皮舞",
            honor: `获校园舞蹈大赛第二名、黑龙江省舞蹈大赛独舞第一名<br>
            2002年在校期间参加中国冰雪节开幕式与国母彭丽媛同台演出并伴舞<br>
            2005-2008年任职于黑龙江省歌舞艺术剧院国家二级舞蹈演员<br>
            2007年参加《同一首歌》担任舞蹈演员<br>
            2008年与东方歌舞团合作出演歌舞剧《火凤凰》<br>
            2009年中央电视台春节联欢晚会<br>
            2010年上海世博会开闭幕式，广州亚运会开幕式<br>
            2011年国际大学生运动会开幕式、快乐女声全国巡演舞台总监<br>
            2012年与王亚彬同台国家大剧院普京访华慰问演出<br>
            2013年舞台剧《给未知恋人的爱情短信》舞台总监<br>`
        },
        {
            name: "许杨", duration: "9年", img: require("../assets/teacherList/teacher2_05.png").default, address: "/site/wap/beijing/teacherDetail/2",
            course: "童声、美声、民族、通俗唱法",
            honor: `1989年6岁考入北京市少年宫独唱班学习童声唱法<br>
            1990年参加全国迎亚运少儿歌唱比赛获得二等奖<br>
            1995年考入中国交响乐团附属少年及女子合唱团并随团进行多次演出<br>
            2001年考入维也纳国立音乐与艺术大学 声乐 本硕连读<br>
            2010年加入维也纳国家歌剧院合唱团<br>
            在维也纳留学期间，曾多次参加大使馆组织的各项文艺活动，并受到大使接见；多次在奥地利、意大利、捷克等国家歌剧院进行演出；曾多次参加欧洲各国声乐比赛并获得优秀表演等奖项`
        },
        {
            name: "孙亚秋", duration: "4年", img: require("../assets/teacherList/teacher3_05.png").default, address: "/site/wap/beijing/teacherDetail/3",
            course: "儿童画，创意美术，水彩，水粉，素描，彩铅，油画",
            honor: `2010年软笔楷书作品获吉林省规范汉字书写大赛优秀奖<br>
            2011年美术作品&lt;蓝色衬布&gt;获吉林省第三届大学生艺术节二等奖<br>
            2013年油画作品&lt;九月&gt;获吉林省四平市第八届九月鲜花书法美术作品展一等奖<br>
            2013年油画作品&lt;松情&gt;发表于吉林省长白山写生作品展<br>
            2013年油画方向学术论文获吉林省美学学会优秀论文二等奖<br>
            吉林省美术家协会会员`
        },
        {
            name: "向定军", duration: "5年", img: require("../assets/teacherList/teacher6_05.png").default, address: "/site/wap/beijing/teacherDetail/4",
            course: "架子鼓、架子鼓考级、少儿架子鼓",
            honor: `2010年迷笛音乐节参与现场演出并担任主鼓手<br>
            2011年糖果音乐节上担任主架子鼓鼓手<br>
            2012年Jojo Mayer亚洲演奏会受邀鼓手，并在当年发表单曲MV<br>
            2013年参与美国、加拿大、澳大利亚等11国的鼓手交流大会<br>
            2013年参加亚洲节拍大赛，获得大赛二等奖<br>
            2014年参加北京春节联欢晚会，担任乐队副鼓手<br>
            2007年至今，一直致力于爵士鼓的研究与深造，并且融合了非洲鼓、拉丁打击乐等多种打击乐风格，有自己独创的教学科研方案，适用于全年龄阶段学员<br>
            2014年进入北京高畅现代音乐进修，并在北京各大酒吧有专场演出经验`
        },
        {
            name: "张培佩", duration: "3年", img: require("../assets/teacherList/teacher9.jpg").default, address: "/site/wap/beijing/teacherDetail/5",
            course: "芭蕾舞、古典舞、民族民间舞、爵士舞、少儿舞蹈",
            honor: `2010年为天狮集团周年庆晚会担任舞蹈导演<br>
            2010年为索尼爱立信亚洲总部年会担任舞蹈编排<br>
            2011年为博尔特公司年会担任舞蹈编排工作<br>
            2012年至2015年连续三年担任廊坊电视台舞蹈编排<br>
            2017年为北京BTV青年台编排舞蹈<br>
            中国舞蹈家协会会员<br>
            曾获得大学生艺术节优秀教师荣誉<br>
            曾获得小荷风采优秀指导教师荣誉<br>
            曾获得BTV青年台优秀指导教师荣誉
            `
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