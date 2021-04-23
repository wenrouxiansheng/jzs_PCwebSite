
import React, { lazy } from 'react'

//此文件汇总所有组件编辑器  通过props传递数据   根据componentInfo中的component名检索返回对应编辑器

const BannerEdit = lazy(() => import('./homePage/bannerEdit'))//横幅图编辑器
const TitleEdit = lazy(() => import('./homePage/titleEdit'))//标题编辑器
const ImgAndTextEdit = lazy(() => import('./homePage/imgAndTextEdit'))//图文编辑器
const SchoolListEdit = lazy(() => import('./homePage/schoolListEdit'))//校区图文列表编辑器
const ListOfOptionsImg = lazy(() => import('./homePage/listOptionsImgEdit'))//课程多级列表编辑器
const ExamLevelEdit = lazy(() => import('./homePage/examLevelEdit'))//考级导航编辑器
const TeacherListEdit = lazy(() => import('./homePage/teacherListEdit'))//教师列表编辑器
const GloryListEdit = lazy(() => import('./homePage/gloryListEdit'))//学员荣誉列表编辑器
const BrandHonorEdit = lazy(() => import('./homePage/brandHonorEdit'))//品牌荣誉列表编辑器
const ExhibitionEdit = lazy(() => import('./brandIntroduction/exhibitionEdit'))//品牌介绍 - 介绍编辑器
const IntroduceEdit = lazy(() => import('./brandIntroduction/introduceEdit'))//品牌介绍 - 介绍列表编辑器
const HistoryEdit = lazy(() => import('./brandIntroduction/HistoryEdit'))//品牌介绍 - 历史历程编辑器
const CurriculumPlanEdit = lazy(() => import('./brandIntroduction/curriculumPlanEdit'))//品牌介绍 - 课程介绍编辑器
const ImageNavListEdit = lazy(() => import('./trainingCourse/imageNavListEdit'))//舞蹈培训 - 图片导航 
const CourseFlowEdit = lazy(() => import('./trainingCourse/courseFlowEdit'))//舞蹈培训 - 课程流程
const LearningGoalEdit = lazy(() => import('./trainingCourse/learningGoalEdit'))//舞蹈培训 - 学习目标

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
        case 'BrandHonor': return <BrandHonorEdit detail={componentInfo} />;
        case 'Exhibition': return <ExhibitionEdit detail={componentInfo} />;
        case 'Introduce': return <IntroduceEdit detail={componentInfo} />;
        case 'History': return <HistoryEdit detail={componentInfo} />;
        case 'CurriculumPlan': return <CurriculumPlanEdit detail={componentInfo} />;
        case 'CourseNavList': return <ImageNavListEdit detail={componentInfo} />;
        case 'CourseFlow': return <CourseFlowEdit detail={componentInfo} />;
        case 'LearningGoal': return <LearningGoalEdit detail={componentInfo} />;
        default: return <div>没有找到该组件编辑器</div>;
    }
}