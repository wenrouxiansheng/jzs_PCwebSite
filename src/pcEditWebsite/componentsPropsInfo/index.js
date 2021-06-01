//此文件装载   每个组件的原始props值    解决在添加组件时没有初始值
export default function switchInfo(name) {
    const objInfo = {
        title: {
            info: {
                "title": "为什么选择桔子树",
                "subTitle": "Core advantages"
            }
        },
        banner: {
            bannerList: [
                { id: 1, adress: "/", src: require("../assets/template/banner.png").default },
            ]
        },
        imgAndText: {
            detail: { id: 1, title: "强大的办学规模", text: "已开设北京16家，上海2家，18家直营校区，总教学面积近35000平米", src: require("../assets/template/honor2.png").default, type: "left" }
        },
        schoolListImgText: {
            list: {
                src: require('../assets/template/banner.png').default,
                title: "桔子树——中国艺术教育素质教育品牌",
                smallList: [
                    {
                        src: require('../assets/template/swiper1.png').default,
                        name: "通州校区",
                        tel: "400-900-8898"
                    },
                ]
            }
        },
        table: {
            tableData: {
                title: ["课程", "人数", "上课时常", "咨询"],
                list: [
                    [
                        {
                            rowspan: 1,
                            text: "艺考国标舞1V1"
                        },
                        {
                            rowspan: 1,
                            text: "1人"
                        },
                        {
                            rowspan: 1,
                            text: "60分钟"
                        },
                        {
                            rowspan: 1,
                            text: "<span style='color: #ff8000;'>考级咨询</span>"
                        },
                    ],
                ]
            }
        },
        listOfOptionsImg: {
            list: [
                {
                    text: "器乐培训",
                    level2: [{ text: "少儿器乐", adress: "/" }, { text: "成人器乐", adress: "/" }],
                    imgList: [
                        { text: "吉他", src: require('../assets/template/swiper1.png').default, adress: "/" },
                    ]
                }
            ]
        },
        examLevelList: {
            list: [
                { src: require('../assets/template/swiper1.png').default, text: "舞蹈考级", subText: "DANCE DISTINCTION", adress: "/" },
                { src: require('../assets/template/swiper2.png').default, text: "声乐考级", subText: "VOCAL MUSIC EMPLOYS", adress: "/" },
            ]
        },
        teacherList: {
            list: [
                {
                    info: [
                        { img: require('../assets/template/teacher.jpg').default, name: "余子涵1", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    ]
                },
            ]
        },
        gloryList: {
            data: [
                [
                    { id: 1, src: require('../assets/template/honor2.png').default, title: "桔子树4岁小学员登上央视舞台", detail: "桔子树4岁小学员" },
                ]
            ]
        },
        brandHonor: {
            list: [
                [
                    { img: require('../assets/template/honor2.png').default, detail: "2018北京文化创意大赛 全国总决赛二等奖" },
                ]
            ],
            introduceList: [
                { img: require('../../pc/assets/homePage/brandHonor/list1.png').default, text: "艺术教育培训经验", font: ["9", "年"] },
                { img: require('../../pc/assets/homePage/brandHonor/list2.png').default, text: "直营校区覆盖北京、上海", font: ["18", "家"] },
                { img: require('../../pc/assets/homePage/brandHonor/list3.png').default, text: "专业课程精心设计", font: ["88", "种"] },
                { img: require('../../pc/assets/homePage/brandHonor/list4.png').default, text: "学员信赖选择", font: ["40", "余万"] },
            ]
        },
        exhibition: {
            data: {
                title: "中国艺术教育知名品牌  实现对自我的艺术追求",
                text: "桔子树艺术教育，是中国艺术教育培训知名品牌。成立逾9年，总部位于北京市通州区万达广场A座，是集青少儿才艺培训、成人艺术培训、艺术课程研发、艺考辅导、企业服务、参赛培训等为一体的艺术教育培训综合体。",
                number1: "01",
                img: require('../assets/template/honor2.png').default,
                number2: "02"
            }
        },
        introduce: {
            list: [
                { subtitle: "办学规模", title: "强大的办学规模", text: '文案', img: require('../assets/template/swiper1.png').default },
            ]
        },
        componentContainer: {
            components: [
                {
                    component: 'Title',
                    props: {
                        info: { title: "编辑添加组件", subTitle: "add component" }
                    }
                },
            ]
        },
        history: {
            data: [
                {
                    time: 2019,
                    info: [
                        { type: 'text', text: "文案" },
                    ]
                },
            ]
        },
        curriculumPlan: {
            data: [
                {
                    id: 1, img: require('../assets/template/swiper1.png').default, text: [
                        "桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树特别的新型教学模式——坚持实施<span style='color: #ffab32'>“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人订制教学计划”。"
                    ], type: 'left'
                },
            ]
        },
        courseNavList: {
            navList: [
                { img: require('../assets/template/swiper1.png').default, text: "少儿民族舞", href: "/" },
            ]
        },
        courseFlow: {
            data: [
                { img: require('../assets/template/honor2.png').default, num: "01", text: "专业测评，了解学员上课愿望" },
            ]
        },
        learningGoal: {
            textList: [
                "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "变得更加自信", "表演细节处理"
            ],
            info: { title: "课程流程", subTitle: "" }
        },
        questionConsultation: {
            questionList: [
                "什么是小升初特长考试？"
            ]
        },
        categoryIntroduction: {
            introduction: {
                img: require('../assets/template/swiper1.png').default,
                subTitle: "吉他",
                title: "吉他",
                text: "吉他是文案表述"
            }
        },
        teacherStandards: {
            list: [
                {
                    img: require('../assets/template/honor2.png').default, title: "海外知名艺术院校归国教师", text: "此处写描述"
                },
                {
                    img: require('../assets/template/honor3.png').default, title: "国内专业艺术院校毕业教师", text: "此处写描述"
                },
            ]
        },
        paragraph: {
            style: {
                color: '#333', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px'
            },
            text: "“青春风采”国际青少年艺术节开幕式"
        },
        zoomCarousel: {
            list: [
                { src: require('../assets/template/honor2.png').default },
            ]
        },
        imgTextCrossing: {
            list: [
                {
                    img: require('../assets/template/honor2.png').default,
                    text: {
                        title: '花儿朵朵少儿舞蹈展演', subTitle: '中国舞蹈家协会主办，桔子树学员获多项殊荣'
                    },
                    type: "left"
                },
                {
                    img: require('../assets/template/honor3.png').default,
                    text: {
                        title: '李斯特怀香港国际钢琴公开赛', subTitle: '桔子树学员登上世界级舞台，在国家未来大剧院奏响华美乐章'
                    },
                    type: "left"
                },
            ]
        },
        imgBlindPlatoon: {
            imgList: [
                { img: [require('../../pc/assets/aboutUs/studentHonor/img1.png').default], id: 1 },
                {
                    img: [
                        require('../../pc/assets/aboutUs/studentHonor/img2.png').default,
                        require('../../pc/assets/aboutUs/studentHonor/img3.png').default
                    ], id: 2
                },
                {
                    img: [
                        require('../../pc/assets/aboutUs/studentHonor/img4.png').default,
                        require('../../pc/assets/aboutUs/studentHonor/img5.png').default
                    ], id: 3
                },
                {
                    img: [
                        require('../../pc/assets/aboutUs/studentHonor/img6.png').default,
                        require('../../pc/assets/aboutUs/studentHonor/img7.png').default,
                        require('../../pc/assets/aboutUs/studentHonor/img8.png').default
                    ], id: 4
                },
                {
                    img: [
                        require('../../pc/assets/aboutUs/studentHonor/img9.png').default,
                        require('../../pc/assets/aboutUs/studentHonor/img10.png').default
                    ], id: 5
                },
                {
                    img: [require('../../pc/assets/aboutUs/studentHonor/img11.png').default]
                    , id: 6
                },
            ]
        },
        contactInfo: {
            info: {
                headOffice: {
                    img: require('../../pc/assets/aboutUs/contactUs/img.png').default,
                    title: "全国总部",
                    address: "北京市通州区新华西街60号万达广场A座30层"
                },
                phoneInfo: {
                    title: "联系我们",
                    subTitle: "Contact Us",
                    phone: [
                        { text: "咨询电话：", number: ["400-900-8898"] },
                        { text: "商务合作：", number: ["010-5956-2885"] },
                        {
                            text: "人才招聘：", number: ["010-5956-2862", "010-5956-2861"]
                        },
                    ]
                },
                emailInfo: {
                    title: "官方邮箱",
                    subTitle: "The official E-mail",
                    email: "juzishuyishu2011@163.com"
                },
                weChatInfo: {
                    title: "微信有约",
                    subTitle: "WeChat about",
                    detail: [
                        { text: "订阅号：juzishujiaoyu", img: require('../../pc/assets/aboutUs/contactUs/subscribe.png').default },
                        { text: "服务号：juzishuyishujiaoyu", img: require('../../pc/assets/aboutUs/contactUs/service.png').default }
                    ]
                },
                microBlogInfo: {
                    title: "官方微博",
                    subTitle: "official micro-blog",
                    detail: [
                        { text: "官方微博：桔子树艺术教育培训", img: require('../../pc/assets/aboutUs/contactUs/wb.png').default },
                    ]
                },
            }
        }
    },
        { title, banner, imgAndText, schoolListImgText, listOfOptionsImg, examLevelList, teacherList, gloryList, brandHonor, exhibition, introduce, componentContainer, history, curriculumPlan, courseNavList, courseFlow, learningGoal, questionConsultation, categoryIntroduction, teacherStandards, paragraph, zoomCarousel, imgTextCrossing, imgBlindPlatoon, contactInfo, table } = objInfo;
    switch (name) {
        case 'Title': return title;
        case 'Banner': return banner;
        case 'ImgAndText': return imgAndText;
        case 'SchoolListImgText': return schoolListImgText;
        case 'ListOfOptionsImg': return listOfOptionsImg;
        case 'ExamLevelList': return examLevelList;
        case 'TeacherList': return teacherList;
        case 'GloryList': return gloryList;
        case 'BrandHonor': return brandHonor;
        case 'Exhibition': return exhibition;

        case 'Introduce': return introduce;
        case 'ComponentContainer': return componentContainer;
        case 'History': return history;
        case 'CurriculumPlan': return curriculumPlan;
        case 'CourseNavList': return courseNavList;
        case 'CourseFlow': return courseFlow;
        case 'LearningGoal': return learningGoal;
        case 'QuestionConsultation': return questionConsultation;
        case 'CategoryIntroduction': return categoryIntroduction;
        case 'Form': return null;

        case 'TeacherStandards': return teacherStandards;
        case 'TeachersClassification': return null;
        case 'Paragraph': return paragraph;
        case 'ZoomCarousel': return zoomCarousel;
        case 'ImgTextCrossing': return imgTextCrossing;
        case 'ImgBlindPlatoon': return imgBlindPlatoon;
        case 'ArtNewsList': return null;
        case 'ContactInfo': return contactInfo;
        case 'SchoolList': return null;
        case 'Table': return table;

        default: return "无"
    }
}
