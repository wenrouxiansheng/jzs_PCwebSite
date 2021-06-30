
import { lazy } from 'react'

export const pcPathName = "/site/pc";
export const routeList = [
    { path: '/home', component: lazy(() => import('@pcPage/homePage')) },//首页

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
                component: lazy(() => import('@pcPage/brandIntroduction')),
            },
        ]
    },
    {
        path: '/danceTraining',//舞蹈培训
        children: [
            //三级页面
            {
                path: '/folkDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/folk/child')),//少儿民族舞
            },
            {
                path: '/folkDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/folk/adult')),//成人民族舞
            },
            {
                path: '/classicalDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/classical/child')),//少儿古典舞
            },
            {
                path: '/classicalDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/classical/adult')),//成人古典舞
            },
            {
                path: '/chineseDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/chinese/child')),//少儿中国舞
            },
            {
                path: '/chineseDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/chinese/adult')),//成人中国舞
            },
            {
                path: '/jazzDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/jazz/child')),//少儿爵士舞
            },
            {
                path: '/jazzDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/jazz/adult')),//成人爵士舞
            },
            {
                path: '/balletDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/ballet/child')),//少儿芭蕾舞
            },
            {
                path: '/balletDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/ballet/adult')),//成人芭蕾舞
            },
            {
                path: '/latinDance/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/latin/child')),//少儿拉丁舞
            },
            {
                path: '/latinDance/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/latin/adult')),//成人拉丁舞
            },
            {
                path: '/hipHop/child',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/hipHop/child')),//少儿街舞
            },
            {
                path: '/hipHop/adult',
                component: lazy(() => import('@pcPage/danceTraining/threeLevel/hipHop/adult')),//成人街舞
            },


            //二级
            {
                path: '/childrenDance',
                component: lazy(() => import('@pcPage/danceTraining/childrenDance')),//少儿舞蹈
            },
            {
                path: '/adultDance',
                component: lazy(() => import('@pcPage/danceTraining/adultDance')),//成人舞蹈
            },
            {
                path: '/folkDance',
                component: lazy(() => import('@pcPage/danceTraining/folkDance')),//民族舞综合
            },
            {
                path: '/classicalDance',
                component: lazy(() => import('@pcPage/danceTraining/classicalDance')),//古典舞综合
            },
            {
                path: '/balletDance',
                component: lazy(() => import('@pcPage/danceTraining/balletDance')),//芭蕾舞综合
            },
            {
                path: '/chineseDance',
                component: lazy(() => import('@pcPage/danceTraining/chineseDance')),//中国舞综合
            },
            {
                path: '/jazzDance',
                component: lazy(() => import('@pcPage/danceTraining/jazzDance')),//爵士舞综合
            },
            {
                path: '/latinDance',
                component: lazy(() => import('@pcPage/danceTraining/latinDance')),//拉丁舞综合
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
        path: '/vocalMusic',//声乐培训
        children: [
            //三级页面
            {
                path: '/adult/karaokeCamp',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/adult/karaokeCamp')),//卡拉OK
            },
            {
                path: '/adult/popMusic',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/adult/popMusic')),//流行唱法
            },
            {
                path: '/adult/folkSongs',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/adult/folkSongs')),//民族唱法
            },
            {
                path: '/adult/belCanto',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/adult/belCanto')),//美声唱法
            },
            {
                path: '/child/musician',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/child/musician')),//音乐大师课
            },
            {
                path: '/child/musicBasis',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/child/musicBasis')),//少儿音基
            },
            {
                path: '/child/solfeggio',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/child/solfeggio')),//视唱练耳
            },
            {
                path: '/child/musicTheory',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/child/musicTheory')),//基础乐理
            },

            //二级
            {
                path: '/childrenMusic',
                component: lazy(() => import('@pcPage/vocalMusic/childrenMusic')),//少儿声乐
            },
            {
                path: '/adultMusic',
                component: lazy(() => import('@pcPage/vocalMusic/adultMusic')),//成人声乐
            },
            {
                path: '/',
                component: lazy(() => import('@pcPage/vocalMusic')),//声乐培训综合
            },



        ]
    },
    {
        path: '/instrumentalMusic',//器乐培训
        children: [
            //三级页面
            {
                path: '/adult/karaokeCamp',
                component: lazy(() => import('@pcPage/vocalMusic/threeLevel/adult/karaokeCamp')),//卡拉OK
            },

            {
                path: '/',
                component: lazy(() => import('@pcPage/instrumentalMusic')),//器乐培训综合
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