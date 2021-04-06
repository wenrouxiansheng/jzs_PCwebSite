import { lazy } from 'react'
const Banner = lazy(() => import('./homePage/bannerCarousel')),//不能直接在判断里引入
    Title = lazy(() => import('./homePage/title')),
    ImgAndText = lazy(() => import('./homePage/imgAndText')),
    SchoolListImgText = lazy(() => import('./homePage/schoolListImgText')),
    ListOfOptionsImg = lazy(() => import('./homePage/listOfOptionsImg')),
    ExamLevelList = lazy(() => import('./homePage/examLevelList')),
    TeacherList = lazy(() => import('./homePage/teacherList')),
    GloryList = lazy(() => import('./homePage/gloryList')),
    BrandHonor = lazy(() => import('./homePage/brandHonor'));

export default function switchComponents(name, props, index) {
    let component = null;
    switch (name) {
        case 'Banner': component = <Banner {...props} only={index} />; break;//banner图 list数据一个就是单图显示多图就是轮播
        case 'Title': component = <Title {...props} only={index} />; break;//标题
        case 'ImgAndText': component = <ImgAndText {...props} only={index} />; break;//图文左右
        case 'SchoolListImgText': component = <SchoolListImgText {...props} only={index} />; break;//学校多图
        case 'ListOfOptionsImg': component = <ListOfOptionsImg {...props} only={index} />; break;//列表选项多图
        case 'ExamLevelList': component = <ExamLevelList {...props} only={index} />; break;//考级列表
        case 'TeacherList': component = <TeacherList {...props} only={index} />; break;//教师列表
        case 'GloryList': component = <GloryList {...props} only={index} />; break;//学员风采
        case 'BrandHonor': component = <BrandHonor {...props} only={index} />; break;//品牌荣誉列表
        default: component = <Banner {...props} only={index} />
    }
    return component
}