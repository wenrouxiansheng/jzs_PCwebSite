
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
                path: '/guitar/adult',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/guitar/adult')),//成人吉他
            },
            {
                path: '/guitar/child',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/guitar/child')),//少儿吉他
            },
            {
                path: '/piano/adult',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/piano/adult')),//成人钢琴
            },
            {
                path: '/piano/child',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/piano/child')),//少儿钢琴
            },
            {
                path: '/drumKit/adult',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/drumKit/adult')),//成人架子鼓
            },
            {
                path: '/drumKit/child',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/drumKit/child')),//少儿架子鼓
            },
            {
                path: '/ukulele/adult',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/ukulele/adult')),//成人尤克里里
            },
            {
                path: '/ukulele/child',
                component: lazy(() => import('@pcPage/instrumentalMusic/threeLevel/ukulele/child')),//少儿尤克里里
            },


            //二级
            {
                path: '/children',
                component: lazy(() => import('@pcPage/instrumentalMusic/children')),//少儿器乐
            },
            {
                path: '/adultIM',
                component: lazy(() => import('@pcPage/instrumentalMusic/adult')),//成人器乐
            },
            {
                path: '/guitar',
                component: lazy(() => import('@pcPage/instrumentalMusic/guitar')),//吉他综合
            },
            {
                path: '/piano',
                component: lazy(() => import('@pcPage/instrumentalMusic/piano')),//钢琴综合
            },
            {
                path: '/drumKit',
                component: lazy(() => import('@pcPage/instrumentalMusic/drumKit')),//架子鼓综合
            },
            {
                path: '/ukulele',
                component: lazy(() => import('@pcPage/instrumentalMusic/ukulele')),//尤克里里综合
            },

            {
                path: '/',
                component: lazy(() => import('@pcPage/instrumentalMusic')),//器乐培训综合
            },
        ]
    },
    {
        path: '/fineArt',//艺术考级
        children: [
            //三级页面
            {
                path: '/pencilSketch/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/pencilSketch/adult')),//成人素描
            },
            {
                path: '/pencilSketch/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/pencilSketch/child')),//少儿素描
            },
            {
                path: '/oilPainting/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/oilPainting/adult')),//成人油画
            },
            {
                path: '/oilPainting/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/oilPainting/child')),//少儿油画
            },
            {
                path: '/caricature/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/caricature/adult')),//成人漫画
            },
            {
                path: '/caricature/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/caricature/child')),//少儿漫画
            },
            {
                path: '/gouache/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/gouache/adult')),//成人水粉
            },
            {
                path: '/gouache/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/gouache/child')),//少儿水粉
            },
            {
                path: '/sketch/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/sketch/adult')),//成人速写
            },
            {
                path: '/sketch/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/sketch/child')),//少儿速写
            },
            {
                path: '/chinesePainting/adult',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/chinesePainting/adult')),//成人国画
            },
            {
                path: '/chinesePainting/child',
                component: lazy(() => import('@pcPage/fineArt/threeLevel/chinesePainting/child')),//少儿国画
            },


            //二级页面
            {
                path: '/children',
                component: lazy(() => import('@pcPage/fineArt/children')),//少儿美术
            },
            {
                path: '/adult',
                component: lazy(() => import('@pcPage/fineArt/adult')),//成人美术
            },
            {
                path: '/pencilSketch',
                component: lazy(() => import('@pcPage/fineArt/pencilSketch')),//素描综合
            },
            {
                path: '/sketch',
                component: lazy(() => import('@pcPage/fineArt/sketch')),//速写综合
            },
            {
                path: '/oilPainting',
                component: lazy(() => import('@pcPage/fineArt/oilPainting')),//油画综合
            },
            {
                path: '/caricature',
                component: lazy(() => import('@pcPage/fineArt/caricature')),//漫画综合
            },
            {
                path: '/gouache',
                component: lazy(() => import('@pcPage/fineArt/gouache')),//水粉综合
            },
            {
                path: '/chinesePainting',
                component: lazy(() => import('@pcPage/fineArt/chinesePainting')),//国画综合
            },
            {
                path: '/creativeArt',
                component: lazy(() => import('@pcPage/fineArt/creativeArt')),//创意美术
            },
            {
                path: '/',
                component: lazy(() => import('@pcPage/fineArt')),//美术综合
            },
        ]
    },
    {
        path: '/artGrading',//艺术考级
        children: [
            //舞蹈考级
            {
                path: '/artExamDance/latinGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/latinGrading')),//国标舞考级
            },
            {
                path: '/artExamDance/folkGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/folkGrading')),//民族舞考级
            },
            {
                path: '/artExamDance/jazzGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/jazzGrading')),//爵士舞考级
            },
            {
                path: '/artExamDance/balletGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/balletGrading')),//芭蕾舞考级
            },
            {
                path: '/artExamDance/classicalGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/classicalGrading')),//古典舞考级
            },
            {
                path: '/artExamDance/hiphopGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/hiphopGrading')),//街舞考级
            },
            {
                path: '/artExamDance/modernGrading',
                component: lazy(() => import('@pcPage/artGrading/artExamDance/modernGrading')),//现代舞考级
            },
            {
                path: '/artExamDance',
                component: lazy(() => import('@pcPage/artGrading/artExamDance')),//舞蹈考级综合
            },

            //声乐考级
            {
                path: '/artExamMusic',
                component: lazy(() => import('@pcPage/artGrading/artExamMusic')),//声乐考级综合
            },
            {
                path: '/',
                component: lazy(() => import('@pcPage/artGrading')),//考级综合
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