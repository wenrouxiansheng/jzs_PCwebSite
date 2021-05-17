import { lazy } from 'react'
const Banner = lazy(() => import('./homePage/bannerCarousel')),//不能直接在判断里引入
    Title = lazy(() => import('./homePage/title')),
    ImgAndText = lazy(() => import('./homePage/imgAndText')),
    SchoolListImgText = lazy(() => import('./homePage/schoolListImgText')),
    ListOfOptionsImg = lazy(() => import('./homePage/listOfOptionsImg')),
    ExamLevelList = lazy(() => import('./homePage/examLevelList')),
    TeacherList = lazy(() => import('./homePage/teacherList')),
    GloryList = lazy(() => import('./homePage/gloryList')),
    BrandHonor = lazy(() => import('./homePage/brandHonor')),
    AddModule = lazy(() => import('./common/addModule')),
    Exhibition = lazy(() => import('./brandIntroduction/index/exhibition')),
    Introduce = lazy(() => import('./brandIntroduction/index/introduce')),
    History = lazy(() => import('./brandIntroduction/history')),
    CurriculumPlan = lazy(() => import('./brandIntroduction/curriculumPlan')),
    CourseNavList = lazy(() => import('./danceTraining/imgNav')),
    CourseFlow = lazy(() => import('./danceTraining/courseFlow')),
    LearningGoal = lazy(() => import('./danceTraining/learningGoal')),
    Table = lazy(() => import('./common/table')),
    QuestionConsultation = lazy(() => import('./common/questionConsultation')),
    Form = lazy(() => import('./common/form')),
    CategoryIntroduction = lazy(() => import('./danceTraining/categoryIntroduction')),
    ZoomCarousel = lazy(() => import('./brandIntroduction/index/zoomCarousel')),
    TeacherStandards = lazy(() => import('./aboutUs/teacherStandards')),
    TeachersClassification = lazy(() => import('./aboutUs/teachersClassification')),
    TeacherDetail = lazy(() => import('./aboutUs/teacherDetail')),
    Paragraph = lazy(() => import('./aboutUs/paragraph')),
    ImgTextCrossing = lazy(() => import('./aboutUs/imgTextCrossing')),
    ImgBlindPlatoon = lazy(() => import('./aboutUs/imgBlindPlatoon')),
    ArtNewsList = lazy(() => import('./aboutUs/artNewsList')),
    ContactInfo = lazy(() => import('./aboutUs/contactInfo')),
    SchoolList = lazy(() => import('./campusDistribution/schoolList')),
    ComponentContainer = lazy(() => import('./common/componentContainer'));

export default function switchComponents(name, props, num) {
    switch (name) {
        case 'Banner': return <Banner {...props} key={num} />; //banner图 list数据一个就是单图显示多图就是轮播
        case 'Title': return <Title {...props} key={num} />; //标题
        case 'ImgAndText': return <ImgAndText {...props} key={num} />; //图文左右
        case 'SchoolListImgText': return <SchoolListImgText {...props} key={num} />; //学校多图
        case 'ListOfOptionsImg': return <ListOfOptionsImg {...props} key={num} />; //列表选项多图
        case 'ExamLevelList': return <ExamLevelList {...props} key={num} />; //考级列表
        case 'TeacherList': return <TeacherList {...props} key={num} />; //教师列表
        case 'GloryList': return <GloryList {...props} key={num} />; //学员风采
        case 'BrandHonor': return <BrandHonor {...props} key={num} />; //品牌荣誉列表
        case 'AddModule': return <AddModule />; //添加模块
        case 'Exhibition': return <Exhibition {...props} key={num} />; //品牌介绍
        case 'Introduce': return <Introduce {...props} key={num} />; //品牌介绍 规模
        case 'History': return <History {...props} key={num} />; //品牌介绍 - 历史历程
        case 'CurriculumPlan': return <CurriculumPlan {...props} key={num} />;//品牌介绍 - 课程计划介绍
        case 'CourseNavList': return <CourseNavList {...props} key={num} />;//儿童舞蹈 图片导航
        case 'CourseFlow': return <CourseFlow {...props} key={num} />;//儿童舞蹈 图片导航
        case 'LearningGoal': return <LearningGoal {...props} key={num} />;//儿童舞蹈 学习目标
        case 'Table': return <Table {...props} key={num} />;//儿童舞蹈 学习目标
        case 'QuestionConsultation': return <QuestionConsultation {...props} key={num} />;//儿童舞蹈 问题列表
        case 'Form': return <Form {...props} key={num} />;//提交表单公共使用
        case 'CategoryIntroduction': return <CategoryIntroduction {...props} key={num} />;//课程类别介绍
        case 'ZoomCarousel': return <ZoomCarousel {...props} key={num} />;//课程类别介绍
        case 'TeacherStandards': return <TeacherStandards {...props} key={num} />;//关于我们教师介绍
        case 'TeachersClassification': return <TeachersClassification {...props} key={num} />;//关于我们 教师列表
        case 'TeacherDetail': return <TeacherDetail {...props} key={num} />;//关于我们 教师详情
        case 'Paragraph': return <Paragraph {...props} key={num} />;//关于我们 段落
        case 'ImgTextCrossing': return <ImgTextCrossing {...props} key={num} />;//关于我们 图文宫格
        case 'ImgBlindPlatoon': return <ImgBlindPlatoon {...props} key={num} />;//关于我们 图片菱形排版
        case 'ArtNewsList': return <ArtNewsList {...props} key={num} />;//关于我们 新闻列表
        case 'ContactInfo': return <ContactInfo {...props} key={num} />;//关于我们 联系方式
        case 'SchoolList': return <SchoolList {...props} key={num} />;//校区分布
        case 'ComponentContainer': return <ComponentContainer {...props} key={num} />;//组件容器
        default: return <div>没有找到组件</div>
    }
}