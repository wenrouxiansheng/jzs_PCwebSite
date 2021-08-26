import { lazy } from "react";

const routeList = [
  {
    //钢琴展示
    path: "/site/wap/activity/pianoShow",
    component: lazy(() => import("../views/pianoShow")),
  },
  {
    //钢琴列表
    path: "/site/wap/activity/pianoList",
    component: lazy(() => import("../views/pianoList")),
  },
];

export default routeList;
