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
    History = lazy(() => import('./brandIntroduction/history'));

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
        case 'History': return <History {...props} />; //历史历程
        default: return <div>没有找到组件</div>
    }
}