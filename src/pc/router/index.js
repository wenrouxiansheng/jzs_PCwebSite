import { lazy } from "react";

export const pcPathName = "/site/pc";
export const routeList = [
  { path: "/home", component: lazy(() => import("@pcPage/homePage")) }, //首页
  { path: "/template", component: lazy(() => import("@pcPage/template")) }, //模板自定义页面

  //品牌介绍
  {
    path: "/brandIntroduction/course",
    component: lazy(() => import("@pcPage/brandIntroduction/curriculumPlan")), //教研课程
  },
  {
    path: "/brandIntroduction/history",
    component: lazy(() =>
      import("@pcPage/brandIntroduction/developmentHistory")
    ), //历史历程
  },
  {
    path: "/brandIntroduction",
    component: lazy(() => import("@pcPage/brandIntroduction")), //品牌介绍
  },

  //舞蹈培训
  {
    path: "/danceTraining/folkDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/folk/child")
    ), //少儿民族舞
  },
  {
    path: "/danceTraining/folkDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/folk/adult")
    ), //成人民族舞
  },
  {
    path: "/danceTraining/classicalDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/classical/child")
    ), //少儿古典舞
  },
  {
    path: "/danceTraining/classicalDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/classical/adult")
    ), //成人古典舞
  },
  {
    path: "/danceTraining/chineseDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/chinese/child")
    ), //少儿中国舞
  },
  {
    path: "/danceTraining/chineseDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/chinese/adult")
    ), //成人中国舞
  },
  {
    path: "/danceTraining/jazzDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/jazz/child")
    ), //少儿爵士舞
  },
  {
    path: "/danceTraining/jazzDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/jazz/adult")
    ), //成人爵士舞
  },
  {
    path: "/danceTraining/balletDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/ballet/child")
    ), //少儿芭蕾舞
  },
  {
    path: "/danceTraining/balletDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/ballet/adult")
    ), //成人芭蕾舞
  },
  {
    path: "/danceTraining/latinDance/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/latin/child")
    ), //少儿拉丁舞
  },
  {
    path: "/danceTraining/latinDance/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/latin/adult")
    ), //成人拉丁舞
  },
  {
    path: "/danceTraining/hipHop/child",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/hipHop/child")
    ), //少儿街舞
  },
  {
    path: "/danceTraining/hipHop/adult",
    component: lazy(() =>
      import("@pcPage/danceTraining/threeLevel/hipHop/adult")
    ), //成人街舞
  },

  //二级
  {
    path: "/danceTraining/childrenDance",
    component: lazy(() => import("@pcPage/danceTraining/childrenDance")), //少儿舞蹈
  },
  {
    path: "/danceTraining/adultDance",
    component: lazy(() => import("@pcPage/danceTraining/adultDance")), //成人舞蹈
  },
  {
    path: "/danceTraining/folkDance",
    component: lazy(() => import("@pcPage/danceTraining/folkDance")), //民族舞综合
  },
  {
    path: "/danceTraining/classicalDance",
    component: lazy(() => import("@pcPage/danceTraining/classicalDance")), //古典舞综合
  },
  {
    path: "/danceTraining/balletDance",
    component: lazy(() => import("@pcPage/danceTraining/balletDance")), //芭蕾舞综合
  },
  {
    path: "/danceTraining/chineseDance",
    component: lazy(() => import("@pcPage/danceTraining/chineseDance")), //中国舞综合
  },
  {
    path: "/danceTraining/jazzDance",
    component: lazy(() => import("@pcPage/danceTraining/jazzDance")), //爵士舞综合
  },
  {
    path: "/danceTraining/latinDance",
    component: lazy(() => import("@pcPage/danceTraining/latinDance")), //拉丁舞综合
  },
  {
    path: "/danceTraining/hipHop",
    component: lazy(() => import("@pcPage/danceTraining/hipHop")), //街舞综合页
  },
  {
    path: "/danceTraining",
    component: lazy(() => import("@pcPage/danceTraining")), //舞蹈培训综合
  },

  //声乐培训

  //三级页面
  {
    path: "/vocalMusic/adult/karaokeCamp",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/adult/karaokeCamp")
    ), //卡拉OK
  },
  {
    path: "/vocalMusic/adult/popMusic",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/adult/popMusic")
    ), //流行唱法
  },
  {
    path: "/vocalMusic/adult/folkSongs",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/adult/folkSongs")
    ), //民族唱法
  },
  {
    path: "/vocalMusic/adult/belCanto",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/adult/belCanto")
    ), //美声唱法
  },
  {
    path: "/vocalMusic/child/musician",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/child/musician")
    ), //音乐大师课
  },
  {
    path: "/vocalMusic/child/musicBasis",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/child/musicBasis")
    ), //少儿音基
  },
  {
    path: "/vocalMusic/child/solfeggio",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/child/solfeggio")
    ), //视唱练耳
  },
  {
    path: "/vocalMusic/child/musicTheory",
    component: lazy(() =>
      import("@pcPage/vocalMusic/threeLevel/child/musicTheory")
    ), //基础乐理
  },

  //二级
  {
    path: "/vocalMusic/childrenMusic",
    component: lazy(() => import("@pcPage/vocalMusic/childrenMusic")), //少儿声乐
  },
  {
    path: "/vocalMusic/adultMusic",
    component: lazy(() => import("@pcPage/vocalMusic/adultMusic")), //成人声乐
  },
  {
    path: "/vocalMusic",
    component: lazy(() => import("@pcPage/vocalMusic")), //声乐培训综合
  },

  //器乐培训
  {
    path: "/instrumentalMusic/guitar/adult",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/guitar/adult")
    ), //成人吉他
  },
  {
    path: "/instrumentalMusic/guitar/child",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/guitar/child")
    ), //少儿吉他
  },
  {
    path: "/instrumentalMusic/piano/adult",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/piano/adult")
    ), //成人钢琴
  },
  {
    path: "/instrumentalMusic/piano/child",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/piano/child")
    ), //少儿钢琴
  },
  {
    path: "/instrumentalMusic/drumKit/adult",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/drumKit/adult")
    ), //成人架子鼓
  },
  {
    path: "/instrumentalMusic/drumKit/child",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/drumKit/child")
    ), //少儿架子鼓
  },
  {
    path: "/instrumentalMusic/ukulele/adult",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/ukulele/adult")
    ), //成人尤克里里
  },
  {
    path: "/instrumentalMusic/ukulele/child",
    component: lazy(() =>
      import("@pcPage/instrumentalMusic/threeLevel/ukulele/child")
    ), //少儿尤克里里
  },

  //二级
  {
    path: "/instrumentalMusic/children",
    component: lazy(() => import("@pcPage/instrumentalMusic/children")), //少儿器乐
  },
  {
    path: "/instrumentalMusic/adultIM",
    component: lazy(() => import("@pcPage/instrumentalMusic/adult")), //成人器乐
  },
  {
    path: "/instrumentalMusic/guitar",
    component: lazy(() => import("@pcPage/instrumentalMusic/guitar")), //吉他综合
  },
  {
    path: "/instrumentalMusic/piano",
    component: lazy(() => import("@pcPage/instrumentalMusic/piano")), //钢琴综合
  },
  {
    path: "/instrumentalMusic/drumKit",
    component: lazy(() => import("@pcPage/instrumentalMusic/drumKit")), //架子鼓综合
  },
  {
    path: "/instrumentalMusic/ukulele",
    component: lazy(() => import("@pcPage/instrumentalMusic/ukulele")), //尤克里里综合
  },

  {
    path: "/instrumentalMusic",
    component: lazy(() => import("@pcPage/instrumentalMusic")), //器乐培训综合
  },

  //艺术考级

  {
    path: "/fineArt/pencilSketch/adult",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/pencilSketch/adult")
    ), //成人素描
  },
  {
    path: "/fineArt/pencilSketch/child",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/pencilSketch/child")
    ), //少儿素描
  },
  {
    path: "/fineArt/oilPainting/adult",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/oilPainting/adult")
    ), //成人油画
  },
  {
    path: "/fineArt/oilPainting/child",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/oilPainting/child")
    ), //少儿油画
  },
  {
    path: "/fineArt/caricature/adult",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/caricature/adult")
    ), //成人漫画
  },
  {
    path: "/fineArt/caricature/child",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/caricature/child")
    ), //少儿漫画
  },
  {
    path: "/fineArt/gouache/adult",
    component: lazy(() => import("@pcPage/fineArt/threeLevel/gouache/adult")), //成人水粉
  },
  {
    path: "/fineArt/gouache/child",
    component: lazy(() => import("@pcPage/fineArt/threeLevel/gouache/child")), //少儿水粉
  },
  {
    path: "/fineArt/sketch/adult",
    component: lazy(() => import("@pcPage/fineArt/threeLevel/sketch/adult")), //成人速写
  },
  {
    path: "/fineArt/sketch/child",
    component: lazy(() => import("@pcPage/fineArt/threeLevel/sketch/child")), //少儿速写
  },
  {
    path: "/fineArt/chinesePainting/adult",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/chinesePainting/adult")
    ), //成人国画
  },
  {
    path: "/fineArt/chinesePainting/child",
    component: lazy(() =>
      import("@pcPage/fineArt/threeLevel/chinesePainting/child")
    ), //少儿国画
  },

  //二级页面
  {
    path: "/fineArt/children",
    component: lazy(() => import("@pcPage/fineArt/children")), //少儿美术
  },
  {
    path: "/fineArt/adult",
    component: lazy(() => import("@pcPage/fineArt/adult")), //成人美术
  },
  {
    path: "/fineArt/pencilSketch",
    component: lazy(() => import("@pcPage/fineArt/pencilSketch")), //素描综合
  },
  {
    path: "/fineArt/sketch",
    component: lazy(() => import("@pcPage/fineArt/sketch")), //速写综合
  },
  {
    path: "/fineArt/oilPainting",
    component: lazy(() => import("@pcPage/fineArt/oilPainting")), //油画综合
  },
  {
    path: "/fineArt/caricature",
    component: lazy(() => import("@pcPage/fineArt/caricature")), //漫画综合
  },
  {
    path: "/fineArt/gouache",
    component: lazy(() => import("@pcPage/fineArt/gouache")), //水粉综合
  },
  {
    path: "/fineArt/chinesePainting",
    component: lazy(() => import("@pcPage/fineArt/chinesePainting")), //国画综合
  },
  {
    path: "/fineArt/creativeArt",
    component: lazy(() => import("@pcPage/fineArt/creativeArt")), //创意美术
  },
  {
    path: "/fineArt",
    component: lazy(() => import("@pcPage/fineArt")), //美术综合
  },

  //艺考考级

  //舞蹈考级
  {
    path: "/artGrading/artExamDance/latinGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/latinGrading")
    ), //国标舞考级
  },
  {
    path: "/artGrading/artExamDance/folkGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/folkGrading")
    ), //民族舞考级
  },
  {
    path: "/artGrading/artExamDance/jazzGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/jazzGrading")
    ), //爵士舞考级
  },
  {
    path: "/artGrading/artExamDance/balletGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/balletGrading")
    ), //芭蕾舞考级
  },
  {
    path: "/artGrading/artExamDance/classicalGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/classicalGrading")
    ), //古典舞考级
  },
  {
    path: "/artGrading/artExamDance/hiphopGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/hiphopGrading")
    ), //街舞考级
  },
  {
    path: "/artGrading/artExamDance/modernGrading",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamDance/modernGrading")
    ), //现代舞考级
  },
  {
    path: "/artGrading/artExamDance",
    component: lazy(() => import("@pcPage/artGrading/artExamDance")), //舞蹈考级综合
  },

  //声乐考级
  {
    path: "/artGrading/artExamMusic/popMusic",
    component: lazy(() => import("@pcPage/artGrading/artExamMusic/popMusic")), //流行唱法考级
  },
  {
    path: "/artGrading/artExamMusic/folkMusic",
    component: lazy(() => import("@pcPage/artGrading/artExamMusic/folkMusic")), //民族唱法考级
  },
  {
    path: "/artGrading/artExamMusic/belCanto",
    component: lazy(() => import("@pcPage/artGrading/artExamMusic/belCanto")), //美声唱法考级
  },
  {
    path: "/artGrading/artExamMusic",
    component: lazy(() => import("@pcPage/artGrading/artExamMusic")), //声乐考级综合
  },

  //器乐考级
  {
    path: "/artGrading/artExamIM/guitar",
    component: lazy(() => import("@pcPage/artGrading/artExamIM/guitar")), //吉他考级
  },
  {
    path: "/artGrading/artExamIM/piano",
    component: lazy(() => import("@pcPage/artGrading/artExamIM/piano")), //钢琴考级
  },
  {
    path: "/artGrading/artExamIM/drumKit",
    component: lazy(() => import("@pcPage/artGrading/artExamIM/drumKit")), //架子鼓考级
  },
  {
    path: "/artGrading/artExamIM",
    component: lazy(() => import("@pcPage/artGrading/artExamIM")), //器乐考级综合
  },

  //美术考级
  {
    path: "/artGrading/artExamFineArts/pencilSketch",
    component: lazy(() =>
      import("@pcPage/artGrading/artExamFineArts/pencilSketch")
    ), //素描考级
  },
  {
    path: "/artGrading/artExamFineArts/sketch",
    component: lazy(() => import("@pcPage/artGrading/artExamFineArts/sketch")), //速写考级
  },
  {
    path: "/artGrading/artExamFineArts/colour",
    component: lazy(() => import("@pcPage/artGrading/artExamFineArts/colour")), //色彩考级
  },
  {
    path: "/artGrading/artExamFineArts",
    component: lazy(() => import("@pcPage/artGrading/artExamFineArts")), //美术考级综合
  },

  //社会考级
  {
    path: "/artGrading/social/childDance",
    component: lazy(() => import("@pcPage/artGrading/social/childDance")), //少儿舞蹈社会考级
  },
  {
    path: "/artGrading/social/adultDance",
    component: lazy(() => import("@pcPage/artGrading/social/adultDance")), //成人舞蹈社会考级
  },
  {
    path: "/artGrading/social/childMusic",
    component: lazy(() => import("@pcPage/artGrading/social/childMusic")), //少儿声乐社会考级
  },
  {
    path: "/artGrading/social/adultMusic",
    component: lazy(() => import("@pcPage/artGrading/social/adultMusic")), //成人声乐社会考级
  },
  {
    path: "/artGrading/social/childIM",
    component: lazy(() => import("@pcPage/artGrading/social/childIM")), //少儿器乐社会考级
  },
  {
    path: "/artGrading/social/adultIM",
    component: lazy(() => import("@pcPage/artGrading/social/adultIM")), //成人器乐社会考级
  },

  {
    path: "/artGrading/social/childFineArt",
    component: lazy(() => import("@pcPage/artGrading/social/childFineArt")), //少儿美术社会考级
  },
  {
    path: "/artGrading/social/adultFineArt",
    component: lazy(() => import("@pcPage/artGrading/social/adultFineArt")), //成人美术社会考级
  },
  {
    path: "/artGrading/social",
    component: lazy(() => import("@pcPage/artGrading/social")), //社会考级
  },

  //特长考试
  {
    path: "/artGrading/specialty/childDance",
    component: lazy(() => import("@pcPage/artGrading/specialty/childDance")), //小升初舞蹈考试
  },
  {
    path: "/artGrading/specialty/adultDance",
    component: lazy(() => import("@pcPage/artGrading/specialty/adultDance")), //初升高舞蹈考试
  },
  {
    path: "/artGrading/specialty/childMusic",
    component: lazy(() => import("@pcPage/artGrading/specialty/childMusic")), //小升初声乐考试
  },
  {
    path: "/artGrading/specialty/adultMusic",
    component: lazy(() => import("@pcPage/artGrading/specialty/adultMusic")), //初升高声乐考试
  },
  {
    path: "/artGrading/specialty/childIM",
    component: lazy(() => import("@pcPage/artGrading/specialty/childIM")), //小升初器乐考试
  },
  {
    path: "/artGrading/specialty/adultIM",
    component: lazy(() => import("@pcPage/artGrading/specialty/adultIM")), //初升高器乐考试
  },
  {
    path: "/artGrading/specialty/childFineArts",
    component: lazy(() => import("@pcPage/artGrading/specialty/childFineArts")), //小升初美术考试
  },
  {
    path: "/artGrading/specialty/adultFineArts",
    component: lazy(() => import("@pcPage/artGrading/specialty/adultFineArts")), //初升高美术考试
  },
  {
    path: "/artGrading/specialty",
    component: lazy(() => import("@pcPage/artGrading/specialty")), //特长考试
  },
  {
    path: "/artGrading",
    component: lazy(() => import("@pcPage/artGrading")), //考级综合
  },

  //关于我们

  {
    path: "/aboutUs/teachers",
    component: lazy(() => import("@pcPage/aboutUs/teachers")), //师资力量
  },
  {
    path: "/aboutUs/studentHonor",
    component: lazy(() => import("@pcPage/aboutUs/studentHonor")), //学员风采
  },
  {
    path: "/aboutUs/artNews",
    component: lazy(() => import("@pcPage/aboutUs/artNews")), //艺术头条
  },
  {
    path: "/aboutUs/contactUs",
    component: lazy(() => import("@pcPage/aboutUs/contactUs")), //联系我们
  },

  
  {
    path: "/campusDistribution", //校区分布
    component: lazy(() => import("@pcPage/campusDistribution")),
  },
];
