
import { lazy } from 'react'
const pcRouter = {
    path: '/pc',
    children: [
        {
            path: '/home',
            component: lazy(() => import('@pcPage/homePage'))//首页
        },
        {
            path: '/brandIntroduction',//品牌介绍
            children: [
                
                {
                    path: '/course',
                    component: lazy(() => import('@pcPage/brandIntroduction/curriculumPlan')),//教研课程
                },
                {
                    path: '/history',
                    component: lazy(() => import('@pcPage/brandIntroduction/developmentHistory')),//历史历程
                },
                {
                    path: '/',
                    component: lazy(() => import('@pcPage/brandIntroduction')),//品牌介绍
                },
            ]
        },
        {
            path: '/danceTraining',//舞蹈培训
            children: [
                {
                    path: '/childrenDance',
                    component: lazy(() => import('@pcPage/danceTraining/childrenDance')),//少儿舞蹈
                },
                {
                    path: '/hipHop',
                    component: lazy(() => import('@pcPage/danceTraining/hipHop')),//街舞综合页
                },
                {
                    path: '/',
                    component: lazy(() => import('@pcPage/danceTraining')),//舞蹈培训综合
                },
                
            ]
        },
        {
            path: '/artGrading',//艺术考级
            children: [
                {
                    path: '/artExamDance/latinGrading',
                    component: lazy(() => import('@pcPage/artGrading/artExamDance/latinGrading')),//国标舞考级
                },
                {
                    path: '/artExamDance',
                    component: lazy(() => import('@pcPage/artGrading/artExamDance')),//舞蹈考级综合
                },
                
                
            ]
        },
        {
            path: '/artGrading',//艺术考级
            children: [
                {
                    path: '/artExamDance/latinGrading',
                    component: lazy(() => import('@pcPage/artGrading/artExamDance/latinGrading')),//国标舞考级
                },
                {
                    path: '/artExamDance',
                    component: lazy(() => import('@pcPage/artGrading/artExamDance')),//舞蹈考级综合
                },
            ]
        },
        {
            path: '/aboutUs',//关于我们
            children: [
                {
                    path: '/teachers',
                    component: lazy(() => import('@pcPage/aboutUs/teachers')),//师资力量
                },
                {
                    path: '/studentHonor',
                    component: lazy(() => import('@pcPage/aboutUs/studentHonor')),//学员风采
                },
                {
                    path: '/artNews',
                    component: lazy(() => import('@pcPage/aboutUs/artNews')),//艺术头条
                },
                {
                    path: '/contactUs',
                    component: lazy(() => import('@pcPage/aboutUs/contactUs')),//联系我们
                },
                
            ]
        },
        {
            path: '/campusDistribution',//校区分布
            component: lazy(() => import('@pcPage/campusDistribution'))
        },
    ]
}
export default pcRouter
/**
 * {
            path: '/brandIntroduction',
            component: lazy(() => import('@pcPage/brandIntroduction'))

        },
        {
            path: '/brandIntroduction/course',
            component: lazy(() => import('@pcPage/brandIntroduction/curriculumPlan'))
        },
        {
            path: '/brandIntroduction/history',
            component: lazy(() => import('@pcPage/brandIntroduction/developmentHistory')),
        },
 */