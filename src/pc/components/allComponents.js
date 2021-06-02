import { lazy } from 'react'
const Banner = lazy(() => import('./homePage/bannerCarousel')),//banner图 list数据一个就是单图显示多图就是轮播
    Title = lazy(() => import('./homePage/title')),//标题
    ImgAndText = lazy(() => import('./homePage/imgAndText')),//图文左右
    SchoolListImgText = lazy(() => import('./homePage/schoolListImgText')),//学校多图
    ListOfOptionsImg = lazy(() => import('./homePage/listOfOptionsImg')),//列表选项多图
    ExamLevelList = lazy(() => import('./homePage/examLevelList')),//考级列表
    TeacherList = lazy(() => import('./homePage/teacherList')),//教师列表
    GloryList = lazy(() => import('./homePage/gloryList')),//学员风采
    BrandHonor = lazy(() => import('./homePage/brandHonor')),//品牌荣誉列表
    AddModule = lazy(() => import('./common/addModule')),//添加模块
    Exhibition = lazy(() => import('./brandIntroduction/index/exhibition')),//品牌介绍
    Introduce = lazy(() => import('./brandIntroduction/index/introduce')),//品牌介绍 规模
    History = lazy(() => import('./brandIntroduction/history')), //品牌介绍 - 历史历程
    CurriculumPlan = lazy(() => import('./brandIntroduction/curriculumPlan')),//品牌介绍 - 课程计划介绍
    CourseNavList = lazy(() => import('./danceTraining/imgNav')),//儿童舞蹈 图片导航
    CourseFlow = lazy(() => import('./danceTraining/courseFlow')),//儿童舞蹈 图片导航
    LearningGoal = lazy(() => import('./danceTraining/learningGoal')),//儿童舞蹈 学习目标
    Table = lazy(() => import('./common/table')),//表格
    QuestionConsultation = lazy(() => import('./common/questionConsultation')),//儿童舞蹈 问题列表
    Form = lazy(() => import('./common/form')),//提交表单公共使用
    CategoryIntroduction = lazy(() => import('./danceTraining/categoryIntroduction')),//课程类别介绍
    ZoomCarousel = lazy(() => import('./brandIntroduction/index/zoomCarousel')),//课程类别介绍
    TeacherStandards = lazy(() => import('./aboutUs/teacherStandards')),//关于我们教师介绍
    TeachersClassification = lazy(() => import('./aboutUs/teachersClassification')),//关于我们 教师列表
    TeacherDetail = lazy(() => import('./aboutUs/teacherDetail')),//关于我们 教师详情
    Paragraph = lazy(() => import('./aboutUs/paragraph')),//关于我们 段落
    ImgTextCrossing = lazy(() => import('./aboutUs/imgTextCrossing')),//关于我们 图文宫格
    ImgBlindPlatoon = lazy(() => import('./aboutUs/imgBlindPlatoon')),//关于我们 图片菱形排版
    ArtNewsList = lazy(() => import('./aboutUs/artNewsList')),//关于我们 新闻列表
    ContactInfo = lazy(() => import('./aboutUs/contactInfo')),//关于我们 联系方式
    SchoolList = lazy(() => import('./campusDistribution/schoolList')),//校区分布
    ComponentContainer = lazy(() => import('./common/componentContainer'));//组件容器

export default function switchComponents(name, props, num) {
    const components = {
        'Banner': <Banner {...props} key={num} />,
        'Title': <Title {...props} key={num} />,
        'ImgAndText': <ImgAndText {...props} key={num} />,
        'SchoolListImgText': <SchoolListImgText {...props} key={num} />,
        'ListOfOptionsImg': <ListOfOptionsImg {...props} key={num} />,
        'ExamLevelList': <ExamLevelList {...props} key={num} />,
        'TeacherList': <TeacherList {...props} key={num} />,
        'GloryList': <GloryList {...props} key={num} />,
        'BrandHonor': <BrandHonor {...props} key={num} />,
        'AddModule': <AddModule />,
        'Exhibition': <Exhibition {...props} key={num} />,
        'Introduce': <Introduce {...props} key={num} />,
        'History': <History {...props} key={num} />,
        'CurriculumPlan': <CurriculumPlan {...props} key={num} />,
        'CourseNavList': <CourseNavList {...props} key={num} />,
        'CourseFlow': <CourseFlow {...props} key={num} />,
        'LearningGoal': <LearningGoal {...props} key={num} />,
        'Table': <Table {...props} key={num} />,
        'QuestionConsultation': <QuestionConsultation {...props} key={num} />,
        'Form': <Form {...props} key={num} />,
        'CategoryIntroduction': <CategoryIntroduction {...props} key={num} />,
        'ZoomCarousel': <ZoomCarousel {...props} key={num} />,
        'TeacherStandards': <TeacherStandards {...props} key={num} />,
        'TeachersClassification': <TeachersClassification {...props} key={num} />,
        'TeacherDetail': <TeacherDetail {...props} key={num} />,
        'Paragraph': <Paragraph {...props} key={num} />,
        'ImgTextCrossing': <ImgTextCrossing {...props} key={num} />,
        'ImgBlindPlatoon': <ImgBlindPlatoon {...props} key={num} />,
        'ArtNewsList': <ArtNewsList {...props} key={num} />,
        'ContactInfo': <ContactInfo {...props} key={num} />,
        'SchoolList': <SchoolList {...props} key={num} />,
        'ComponentContainer': <ComponentContainer {...props} key={num} />,
    }

    return components[name] || <div>组件名称错误</div>;
}