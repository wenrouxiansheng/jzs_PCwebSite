
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
const QuestionEdit = lazy(() => import('./trainingCourse/questionEdit'))//舞蹈培训 - 问题列表
const CategoryEdit = lazy(() => import('./trainingCourse/categoryEdit'))//舞蹈培训 - 种类介绍
const ZoomCarouselEdit = lazy(() => import('./trainingCourse/zoomCarouselEdit'))//舞蹈培训 - 课堂实景列表图
const TeacherStandardsEdit = lazy(() => import('./aboutUs/teacherStandardsEdit'))//关于我们 - 教师介绍
const ImgTextCrossingEdit = lazy(() => import('./aboutUs/imgTextCrossingEdit'))//关于我们 - 图片宫格
const ImgBlindPlatoonEdit = lazy(() => import('./aboutUs/imgBlindPlatoonEdit'))//关于我们 - 图片菱形排版
const ContactInfoEdit = lazy(() => import('./aboutUs/contactInfoEdit'))//关于我们 - 联系信息
const ComponentContainerEdit = lazy(() => import('./brandIntroduction/componentContainerEdit'))//品牌介绍   组件容器
const ParagraphEdit = lazy(() => import('./aboutUs/paragraphEdit'))//段落组件
const TableEdit = lazy(() => import('./trainingCourse/tableEdit'))//表格组件

export default function switchComponentEdit(componentInfo) {
    if (!componentInfo) return;
    const { component } = componentInfo[0] || componentInfo,
        componentsEditor = {
            'Banner': <BannerEdit detail={componentInfo} />,
            'Title': <TitleEdit detail={componentInfo} />,
            'ImgAndText': <ImgAndTextEdit detail={componentInfo} />,
            'SchoolListImgText': <SchoolListEdit detail={componentInfo} />,
            'ListOfOptionsImg': <ListOfOptionsImg detail={componentInfo} />,
            'ExamLevelList': <ExamLevelEdit detail={componentInfo} />,
            'TeacherList': <TeacherListEdit detail={componentInfo} />,
            'GloryList': <GloryListEdit detail={componentInfo} />,
            'BrandHonor': <BrandHonorEdit detail={componentInfo} />,
            'Exhibition': <ExhibitionEdit detail={componentInfo} />,
            'Introduce': <IntroduceEdit detail={componentInfo} />,
            'History': <HistoryEdit detail={componentInfo} />,
            'CurriculumPlan': <CurriculumPlanEdit detail={componentInfo} />,
            'CourseNavList': <ImageNavListEdit detail={componentInfo} />,
            'CourseFlow': <CourseFlowEdit detail={componentInfo} />,
            'LearningGoal': <LearningGoalEdit detail={componentInfo} />,
            'QuestionConsultation': <QuestionEdit detail={componentInfo} />,
            'CategoryIntroduction': <CategoryEdit detail={componentInfo} />,
            'ZoomCarousel': <ZoomCarouselEdit detail={componentInfo} />,
            'TeacherStandards': <TeacherStandardsEdit detail={componentInfo} />,
            'TeachersClassification': <div>该组件依据传输数据显示，不可更改</div>,
            'TeacherDetail': <div>该组件依据传输数据显示，不可更改</div>,
            'ImgTextCrossing': <ImgTextCrossingEdit detail={componentInfo} />,
            'ImgBlindPlatoon': <ImgBlindPlatoonEdit detail={componentInfo} />,
            'ArtNewsList': <div>该组件依据传输数据显示，不可更改</div>,
            'ContactInfo': <ContactInfoEdit detail={componentInfo} />,
            'SchoolList': <div>该组件依据传输数据显示，不可更改</div>,
            'ComponentContainer': <ComponentContainerEdit detail={componentInfo} />,
            'Paragraph': <ParagraphEdit detail={componentInfo} />,
            'Table': <TableEdit detail={componentInfo} />,
        };
    return componentsEditor[component] || <div>未找到编辑器</div>;
}