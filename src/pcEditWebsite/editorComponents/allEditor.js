
import React, { lazy } from 'react'

//此文件汇总所有组件编辑器  通过props传递数据   根据componentInfo中的component名检索返回对应编辑器

const BannerEdit = lazy(() => import('./homePage/bannerEdit'))//横幅图编辑器
const TitleEdit = lazy(() => import('./homePage/titleEdit'))//标题编辑器
const ImgAndTextEdit = lazy(() => import('./homePage/imgAndTextEdit'))//图文编辑器
const SchoolListEdit = lazy(() => import('./homePage/schoolListEdit'))//校区图文列表编辑器
const ListOfOptionsImg = lazy(() => import('./homePage/listOptionsImgEdit'))//课程多级列表编辑器
const ExamLevelEdit = lazy(() => import('./homePage/examLevelEdit'))//课程多级列表编辑器
const TeacherListEdit = lazy(() => import('./homePage/teacherListEdit'))//课程多级列表编辑器
const GloryListEdit = lazy(() => import('./homePage/gloryListEdit'))//课程多级列表编辑器

export default function switchComponentEdit(componentInfo) {
    if (!componentInfo) return;
    const { component } = componentInfo[0];
    switch (component) {
        case 'Banner': return <BannerEdit detail={componentInfo} />;
        case 'Title': return <TitleEdit detail={componentInfo} />;
        case 'ImgAndText': return <ImgAndTextEdit detail={componentInfo} />;
        case 'SchoolListImgText': return <SchoolListEdit detail={componentInfo} />;
        case 'ListOfOptionsImg': return <ListOfOptionsImg detail={componentInfo} />;
        case 'ExamLevelList': return <ExamLevelEdit detail={componentInfo} />;
        case 'TeacherList': return <TeacherListEdit detail={componentInfo} />;
        case 'GloryList': return <GloryListEdit detail={componentInfo} />;
        default: return <div>没有找到该组件编辑器</div>;
    }
}