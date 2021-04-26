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
    ClassScene = lazy(() => import('./brandIntroduction/index/classScene')),
    History = lazy(() => import('./brandIntroduction/history')),
    CurriculumPlan = lazy(() => import('./brandIntroduction/curriculumPlan')),
    CourseNavList = lazy(() => import('./danceTraining/imgNav')),
    CourseFlow = lazy(() => import('./danceTraining/courseFlow')),
    LearningGoal = lazy(() => import('./danceTraining/learningGoal')),
    Table = lazy(() => import('./common/table')),
    QuestionConsultation = lazy(() => import('./common/questionConsultation')),
    Form = lazy(() => import('./common/form')),
    CategoryIntroduction = lazy(() => import('./danceTraining/categoryIntroduction')),
    ZoomCarousel = lazy(() => import('./brandIntroduction/index/classScene/zoomCarousel')),
    TeacherStandards = lazy(() => import('./aboutUs/teacherStandards')),
    TeachersClassification = lazy(() => import('./aboutUs/teachersClassification')),
    TeacherDetail = lazy(() => import('./aboutUs/teacherDetail')),
    Paragraph = lazy(() => import('./aboutUs/paragraph')),
    ImgTextCrossing = lazy(() => import('./aboutUs/imgTextCrossing')),
    ImgBlindPlatoon = lazy(() => import('./aboutUs/imgBlindPlatoon')),
    ArtNewsList = lazy(() => import('./aboutUs/artNewsList')),
    ContactInfo = lazy(() => import('./aboutUs/contactInfo'));

export default function switchComponents(name, props) {
    switch (name) {
        case 'Banner': return <Banner {...props} />; //banner图 list数据一个就是单图显示多图就是轮播
        case 'Title': return <Title {...props} />; //标题
        case 'ImgAndText': return <ImgAndText {...props} />; //图文左右
        case 'SchoolListImgText': return <SchoolListImgText {...props} />; //学校多图
        case 'ListOfOptionsImg': return <ListOfOptionsImg {...props} />; //列表选项多图
        case 'ExamLevelList': return <ExamLevelList {...props} />; //考级列表
        case 'TeacherList': return <TeacherList {...props} />; //教师列表
        case 'GloryList': return <GloryList {...props} />; //学员风采
        case 'BrandHonor': return <BrandHonor {...props} />; //品牌荣誉列表
        case 'AddModule': return <AddModule />; //添加模块
        case 'Exhibition': return <Exhibition {...props} />; //品牌介绍
        case 'Introduce': return <Introduce {...props} />; //品牌介绍 规模
        case 'ClassScene': return <ClassScene {...props} />; //品牌介绍 这个没写
        case 'History': return <History {...props} />; //品牌介绍 - 历史历程
        case 'CurriculumPlan': return <CurriculumPlan {...props} />;//品牌介绍 - 课程计划介绍
        case 'CourseNavList': return <CourseNavList {...props} />;//儿童舞蹈 图片导航
        case 'CourseFlow': return <CourseFlow {...props} />;//儿童舞蹈 图片导航
        case 'LearningGoal': return <LearningGoal {...props} />;//儿童舞蹈 学习目标
        case 'Table': return <Table {...props} />;//儿童舞蹈 学习目标
        case 'QuestionConsultation': return <QuestionConsultation {...props} />;//儿童舞蹈 问题列表
        case 'Form': return <Form {...props} />;//提交表单公共使用
        case 'CategoryIntroduction': return <CategoryIntroduction {...props} />;//课程类别介绍
        case 'ZoomCarousel': return <ZoomCarousel {...props} />;//课程类别介绍
        case 'TeacherStandards': return <TeacherStandards {...props} />;//关于我们教师介绍
        case 'TeachersClassification': return <TeachersClassification {...props} />;//关于我们 教师列表
        case 'TeacherDetail': return <TeacherDetail {...props} />;//关于我们 教师详情
        case 'Paragraph': return <Paragraph {...props} />;//关于我们 段落
        case 'ImgTextCrossing': return <ImgTextCrossing {...props} />;//关于我们 图文宫格
        case 'ImgBlindPlatoon': return <ImgBlindPlatoon {...props} />;//关于我们 图片菱形排版
        case 'ArtNewsList': return <ArtNewsList {...props} />;//关于我们 新闻列表
        case 'ContactInfo': return <ContactInfo {...props} />;//关于我们 联系方式
        default: return <div>没有找到组件</div>
    }
}