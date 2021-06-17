import { lazy } from 'react'

const router = {
    publicPath: '/site/wap/beijing',
    list: [
        { path: '/home', component: lazy(() => import('../views')) },
        { path: '/brandIntroduction', component: lazy(() => import('../views/brandIntroduction')) },
        { path: '/teachersList', component: lazy(() => import('../views/teachersList')) },
        { path: '/studentShow', component: lazy(() => import('../views/studentShow')) },
        { path: '/newsList', component: lazy(() => import('../views/newsList')) },
        { path: '/modelOfTeaching', component: lazy(() => import('../views/modelOfTeaching')) },
        { path: '/schoolList', component: lazy(() => import('../views/schoolList')) },
        { path: '/aboutUs', component: lazy(() => import('../views/aboutUs')) },


        { path: '/dance/folkDance', component: lazy(() => import('../views/secondLevelPage/dance/folkDance')) },
        { path: '/dance/classicalDance', component: lazy(() => import('../views/secondLevelPage/dance/classicalDance')) },
        { path: '/dance/chineseDance', component: lazy(() => import('../views/secondLevelPage/dance/chineseDance')) },
        { path: '/dance/ballet', component: lazy(() => import('../views/secondLevelPage/dance/ballet')) },
        { path: '/dance/jazz', component: lazy(() => import('../views/secondLevelPage/dance/jazz')) },
        { path: '/dance/latinDance', component: lazy(() => import('../views/secondLevelPage/dance/latinDance')) },
        { path: '/dance/hiphop', component: lazy(() => import('../views/secondLevelPage/dance/hiphop')) },

        { path: '/dance/folkDance/child', component: lazy(() => import('../views/threeLevelPage/dance/childrenFolk')) },
        { path: '/dance/folkDance/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultFolk')) },

        { path: '/music/popularSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/popularSinging')) },

    ]
}
export default router