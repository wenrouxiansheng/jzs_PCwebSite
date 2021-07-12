import { lazy } from 'react'

const router = {
    publicPath: '/site/wap/beijing',
    list: [
        //导航页面
        { path: '/home', component: lazy(() => import('../views')) },
        { path: '/brandIntroduction', component: lazy(() => import('../views/brandIntroduction')) },
        { path: '/teachersList', component: lazy(() => import('../views/teachersList')) },
        { path: '/studentShow', component: lazy(() => import('../views/studentShow')) },
        { path: '/newsList', component: lazy(() => import('../views/newsList')) },
        { path: '/modelOfTeaching', component: lazy(() => import('../views/modelOfTeaching')) },
        { path: '/schoolList', component: lazy(() => import('../views/schoolList')) },
        { path: '/aboutUs', component: lazy(() => import('../views/aboutUs')) },




        //舞蹈二级页面
        { path: '/dance/folkDance', component: lazy(() => import('../views/secondLevelPage/dance/folkDance')) },
        { path: '/dance/classicalDance', component: lazy(() => import('../views/secondLevelPage/dance/classicalDance')) },
        { path: '/dance/chineseDance', component: lazy(() => import('../views/secondLevelPage/dance/chineseDance')) },
        { path: '/dance/ballet', component: lazy(() => import('../views/secondLevelPage/dance/ballet')) },
        { path: '/dance/jazz', component: lazy(() => import('../views/secondLevelPage/dance/jazz')) },
        { path: '/dance/latinDance', component: lazy(() => import('../views/secondLevelPage/dance/latinDance')) },
        { path: '/dance/hiphop', component: lazy(() => import('../views/secondLevelPage/dance/hiphop')) },

        //舞蹈三级页面
        { path: '/dance/folkDance/child', component: lazy(() => import('../views/threeLevelPage/dance/childrenFolk')) },
        { path: '/dance/folkDance/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultFolk')) },
        { path: '/dance/classicalDance/child', component: lazy(() => import('../views/threeLevelPage/dance/childrenClassical')) },
        { path: '/dance/classicalDance/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultClassical')) },
        { path: '/dance/chineseDance/child', component: lazy(() => import('../views/threeLevelPage/dance/childChinese')) },
        { path: '/dance/chineseDance/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultChinese')) },
        { path: '/dance/ballet/child', component: lazy(() => import('../views/threeLevelPage/dance/childBallet')) },
        { path: '/dance/ballet/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultBallet')) },
        { path: '/dance/jazz/child', component: lazy(() => import('../views/threeLevelPage/dance/childJazz')) },
        { path: '/dance/jazz/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultJazz')) },
        { path: '/dance/latinDance/child', component: lazy(() => import('../views/threeLevelPage/dance/childLatin')) },
        { path: '/dance/latinDance/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultLatin')) },
        { path: '/dance/hiphop/child', component: lazy(() => import('../views/threeLevelPage/dance/childHiphop')) },
        { path: '/dance/hiphop/adult', component: lazy(() => import('../views/threeLevelPage/dance/adultHiphop')) },

        

        //声乐二级页面
        { path: '/music/popularSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/popularSinging')) },
        { path: '/music/belCanto', component: lazy(() => import('../views/secondLevelPage/vocalMusic/belCanto')) },
        { path: '/music/folkSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/folkSinging')) },
        { path: '/music/childrenVoice', component: lazy(() => import('../views/secondLevelPage/vocalMusic/childrenVoice')) },
        { path: '/music/soundBase', component: lazy(() => import('../views/secondLevelPage/vocalMusic/soundBase')) },
        { path: '/music/solfeggio', component: lazy(() => import('../views/secondLevelPage/vocalMusic/solfeggio')) },
        { path: '/music/musicMaster', component: lazy(() => import('../views/secondLevelPage/vocalMusic/musicMaster')) },
        { path: '/music/karaokeTraining', component: lazy(() => import('../views/secondLevelPage/vocalMusic/karaokeTraining')) },




        //器乐二级
        { path: '/IM/guitar', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/guitar')) },
        { path: '/IM/piano', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/piano')) },
        { path: '/IM/drumKit', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/drumKit')) },
        { path: '/IM/ukulele', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/ukulele')) },
        //器乐三级
        { path: '/IM/guitar/child', component: lazy(() => import('../views/threeLevelPage/IM/childrenGuitar')) },
        { path: '/IM/guitar/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultGuitar')) },
        { path: '/IM/piano/child', component: lazy(() => import('../views/threeLevelPage/IM/childrenPiano')) },
        { path: '/IM/piano/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultPiano')) },
        { path: '/IM/drumKit/child', component: lazy(() => import('../views/threeLevelPage/IM/childDrumKit')) },
        { path: '/IM/drumKit/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultDrumKit')) },
        { path: '/IM/ukulele/child', component: lazy(() => import('../views/threeLevelPage/IM/childUkulele')) },
        { path: '/IM/ukulele/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultUkulele')) },

        //美术二级
        { path: '/fineArts/pencilSketch', component: lazy(() => import('../views/secondLevelPage/fineArts/pencilSketch')) },
        { path: '/fineArts/sketch', component: lazy(() => import('../views/secondLevelPage/fineArts/sketch')) },
        { path: '/fineArts/oilPainting', component: lazy(() => import('../views/secondLevelPage/fineArts/oilPainting')) },
        { path: '/fineArts/gouache', component: lazy(() => import('../views/secondLevelPage/fineArts/gouache')) },
        { path: '/fineArts/caricature', component: lazy(() => import('../views/secondLevelPage/fineArts/caricature')) },
        { path: '/fineArts/creativeArt', component: lazy(() => import('../views/secondLevelPage/fineArts/creativeArt')) },

    ]
}
export default router