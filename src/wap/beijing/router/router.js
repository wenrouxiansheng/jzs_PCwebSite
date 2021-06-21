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
        { path: '/music/belCanto', component: lazy(() => import('../views/secondLevelPage/vocalMusic/belCanto')) },
        { path: '/music/folkSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/folkSinging')) },
        { path: '/music/childrenVoice', component: lazy(() => import('../views/secondLevelPage/vocalMusic/childrenVoice')) },
        { path: '/music/soundBase', component: lazy(() => import('../views/secondLevelPage/vocalMusic/soundBase')) },
        { path: '/music/solfeggio', component: lazy(() => import('../views/secondLevelPage/vocalMusic/solfeggio')) },
        { path: '/music/musicMaster', component: lazy(() => import('../views/secondLevelPage/vocalMusic/musicMaster')) },
        { path: '/music/karaokeTraining', component: lazy(() => import('../views/secondLevelPage/vocalMusic/karaokeTraining')) },





        { path: '/IM/guitar', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/guitar')) },
        { path: '/IM/piano', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/piano')) },
        { path: '/IM/drumKit', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/drumKit')) },
        { path: '/IM/ukulele', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/ukulele')) },


        { path: '/fineArts/pencilSketch', component: lazy(() => import('../views/secondLevelPage/fineArts/pencilSketch')) },
        { path: '/fineArts/sketch', component: lazy(() => import('../views/secondLevelPage/fineArts/sketch')) },
        { path: '/fineArts/oilPainting', component: lazy(() => import('../views/secondLevelPage/fineArts/oilPainting')) },
        { path: '/fineArts/gouache', component: lazy(() => import('../views/secondLevelPage/fineArts/gouache')) },
        { path: '/fineArts/caricature', component: lazy(() => import('../views/secondLevelPage/fineArts/caricature')) },
        { path: '/fineArts/creativeArt', component: lazy(() => import('../views/secondLevelPage/fineArts/creativeArt')) },

    ]
}
export default router