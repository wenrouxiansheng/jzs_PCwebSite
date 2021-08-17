import React, { Component, Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Skeleton } from "antd";
//骨架屏
const loadingStyle = {
  width: "100vw",
  margin: "0 auto",
  height: "100vh",
  padding: "0.5rem 0.3rem",
};

const Loading = (
  <div className="lazyLoading" style={loadingStyle}>
    <Skeleton.Image active style={{ width: "6.9rem", height: "3.2rem" }} />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
  </div>
);
export default class wapBeijingRouter extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <Switch>
          {/* 钢琴展示 */}
          <Route
            path="/site/wap/activity/pianoShow"
            component={lazy(() => import("../views/pianoShow"))}
          />
          {/* 钢琴列表 */}
          <Route
            path="/site/wap/activity/pianoList"
            component={lazy(() => import("../views/pianoList"))}
          />

          <Redirect to="/site/wap/beijing/home" />
        </Switch>
      </Suspense>
    );
  }
}
