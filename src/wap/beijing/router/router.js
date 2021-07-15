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

        //教师详情
        { path: '/teacherDetail/:sign', component: lazy(() => import('../views/secondLevelPage/teacherDetail')) },
        //校区详情
        { path: '/schoolDetail/:sign', component: lazy(() => import('../views/secondLevelPage/schoolDetail')) },




        //考级综合
        //考级三级
        { path: '/musicGradingTest/child', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/childMusic')) },
        { path: '/musicGradingTest/adult', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/adultMusic')) },
        { path: '/IMGradingTest/child', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/childIM')) },
        { path: '/IMGradingTest/adult', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/adultIM')) },
        { path: '/danceGradingTest/child', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/childDance')) },
        { path: '/danceGradingTest/adult', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/adultDance')) },
        { path: '/fineArtsGradingTest/child', component: lazy(() => import('../views/secondLevelPage/gradingTest/fineArts/childFineArts')) },
        { path: '/fineArtsGradingTest/adult', component: lazy(() => import('../views/secondLevelPage/gradingTest/fineArts/adultFineArts')) },


        //舞蹈考级
        { path: '/danceGradingTest/folk', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/folk')) },
        { path: '/danceGradingTest/jazz', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/jazz')) },
        { path: '/danceGradingTest/modern', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/modern')) },
        { path: '/danceGradingTest/ballet', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/ballet')) },
        { path: '/danceGradingTest/hipHop', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/hipHop')) },
        { path: '/danceGradingTest/latin', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/latin')) },
        { path: '/danceGradingTest/classical', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/classical')) },


        //声乐考级
        { path: '/musicGradingTest/popMusic', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/popMusic')) },
        { path: '/musicGradingTest/folk', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/folk')) },
        { path: '/musicGradingTest/belCanto', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/belCanto')) },

        //小升初，初升高考试
        { path: '/musicGradingTest/juniorMusic', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/juniorMusic')) },
        { path: '/musicGradingTest/highMusic', component: lazy(() => import('../views/secondLevelPage/gradingTest/music/highMusic')) },
        { path: '/IMGradingTest/juniorIM', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/juniorIM')) },
        { path: '/IMGradingTest/highIM', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/highIM')) },
        { path: '/fineArtsGradingTest/juniorArt', component: lazy(() => import('../views/secondLevelPage/gradingTest/fineArts/juniorArt')) },
        { path: '/fineArtsGradingTest/highArt', component: lazy(() => import('../views/secondLevelPage/gradingTest/fineArts/highArt')) },
        { path: '/danceGradingTest/juniorDance', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/juniorDance')) },
        { path: '/danceGradingTest/highDance', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance/highDance')) },



        //器乐考级
        { path: '/IMGradingTest/guitar', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/guitar')) },
        { path: '/IMGradingTest/piano', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/piano')) },
        { path: '/IMGradingTest/drumKit', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic/drumKit')) },


        //考级二级
        { path: '/musicGradingTest', component: lazy(() => import('../views/secondLevelPage/gradingTest/music')) },
        { path: '/IMGradingTest', component: lazy(() => import('../views/secondLevelPage/gradingTest/instrumentalMusic')) },
        { path: '/danceGradingTest', component: lazy(() => import('../views/secondLevelPage/gradingTest/dance')) },
        { path: '/fineArtsGradingTest', component: lazy(() => import('../views/secondLevelPage/gradingTest/fineArts')) },
        { path: '/artGradingTest', component: lazy(() => import('../views/secondLevelPage/gradingTest')) },




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

        //舞蹈二级页面
        { path: '/dance/child', component: lazy(() => import('../views/secondLevelPage/dance/childDance')) },
        { path: '/dance/adult', component: lazy(() => import('../views/secondLevelPage/dance/adultDance')) },
        { path: '/dance/folkDance', component: lazy(() => import('../views/secondLevelPage/dance/folkDance')) },
        { path: '/dance/classicalDance', component: lazy(() => import('../views/secondLevelPage/dance/classicalDance')) },
        { path: '/dance/chineseDance', component: lazy(() => import('../views/secondLevelPage/dance/chineseDance')) },
        { path: '/dance/ballet', component: lazy(() => import('../views/secondLevelPage/dance/ballet')) },
        { path: '/dance/jazz', component: lazy(() => import('../views/secondLevelPage/dance/jazz')) },
        { path: '/dance/latinDance', component: lazy(() => import('../views/secondLevelPage/dance/latinDance')) },
        { path: '/dance/hiphop', component: lazy(() => import('../views/secondLevelPage/dance/hiphop')) },
        { path: '/dance', component: lazy(() => import('../views/secondLevelPage/dance')) },






        //声乐二级页面
        { path: '/music/child', component: lazy(() => import('../views/secondLevelPage/vocalMusic/childVocalMusic')) },
        { path: '/music/adult', component: lazy(() => import('../views/secondLevelPage/vocalMusic/adultVocalMusic')) },
        { path: '/music/popularSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/popularSinging')) },
        { path: '/music/belCanto', component: lazy(() => import('../views/secondLevelPage/vocalMusic/belCanto')) },
        { path: '/music/folkSinging', component: lazy(() => import('../views/secondLevelPage/vocalMusic/folkSinging')) },
        { path: '/music/childrenVoice', component: lazy(() => import('../views/secondLevelPage/vocalMusic/childrenVoice')) },
        { path: '/music/soundBase', component: lazy(() => import('../views/secondLevelPage/vocalMusic/soundBase')) },
        { path: '/music/solfeggio', component: lazy(() => import('../views/secondLevelPage/vocalMusic/solfeggio')) },
        { path: '/music/musicMaster', component: lazy(() => import('../views/secondLevelPage/vocalMusic/musicMaster')) },
        { path: '/music/karaokeTraining', component: lazy(() => import('../views/secondLevelPage/vocalMusic/karaokeTraining')) },
        { path: '/music', component: lazy(() => import('../views/secondLevelPage/vocalMusic')) },



        //器乐三级
        { path: '/IM/guitar/child', component: lazy(() => import('../views/threeLevelPage/IM/childrenGuitar')) },
        { path: '/IM/guitar/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultGuitar')) },
        { path: '/IM/piano/child', component: lazy(() => import('../views/threeLevelPage/IM/childrenPiano')) },
        { path: '/IM/piano/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultPiano')) },
        { path: '/IM/drumKit/child', component: lazy(() => import('../views/threeLevelPage/IM/childDrumKit')) },
        { path: '/IM/drumKit/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultDrumKit')) },
        { path: '/IM/ukulele/child', component: lazy(() => import('../views/threeLevelPage/IM/childUkulele')) },
        { path: '/IM/ukulele/adult', component: lazy(() => import('../views/threeLevelPage/IM/adultUkulele')) },

        //器乐二级
        { path: '/IM/child', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/childIM')) },
        { path: '/IM/adult', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/adultIM')) },
        { path: '/IM/guitar', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/guitar')) },
        { path: '/IM/piano', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/piano')) },
        { path: '/IM/drumKit', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/drumKit')) },
        { path: '/IM/ukulele', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic/ukulele')) },
        { path: '/IM', component: lazy(() => import('../views/secondLevelPage/instrumentalMusic')) },



        //美术三级
        { path: '/fineArts/pencilSketch/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childPencilSketch')) },
        { path: '/fineArts/pencilSketch/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultPencilSketch')) },
        { path: '/fineArts/chinese/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childChinese')) },
        { path: '/fineArts/chinese/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultChinese')) },
        { path: '/fineArts/sketch/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childSketch')) },
        { path: '/fineArts/sketch/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultSketch')) },
        { path: '/fineArts/oilPainting/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childOilPainting')) },
        { path: '/fineArts/oilPainting/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultOilPainting')) },
        { path: '/fineArts/gouache/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childGouache')) },
        { path: '/fineArts/gouache/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultGouache')) },
        { path: '/fineArts/caricature/child', component: lazy(() => import('../views/threeLevelPage/fineArts/childCaricature')) },
        { path: '/fineArts/caricature/adult', component: lazy(() => import('../views/threeLevelPage/fineArts/adultCaricature')) },

        //美术二级
        { path: '/fineArts/child', component: lazy(() => import('../views/secondLevelPage/fineArts/childFineArts')) },
        { path: '/fineArts/adult', component: lazy(() => import('../views/secondLevelPage/fineArts/adultFineArts')) },
        { path: '/fineArts/pencilSketch', component: lazy(() => import('../views/secondLevelPage/fineArts/pencilSketch')) },
        { path: '/fineArts/sketch', component: lazy(() => import('../views/secondLevelPage/fineArts/sketch')) },
        { path: '/fineArts/oilPainting', component: lazy(() => import('../views/secondLevelPage/fineArts/oilPainting')) },
        { path: '/fineArts/gouache', component: lazy(() => import('../views/secondLevelPage/fineArts/gouache')) },
        { path: '/fineArts/caricature', component: lazy(() => import('../views/secondLevelPage/fineArts/caricature')) },
        { path: '/fineArts/creativeArt', component: lazy(() => import('../views/secondLevelPage/fineArts/creativeArt')) },
        { path: '/fineArts/chinese', component: lazy(() => import('../views/secondLevelPage/fineArts/chinese')) },
        { path: '/fineArts', component: lazy(() => import('../views/secondLevelPage/fineArts')) },




    ]
}
export default router