import React, { Component, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Skeleton } from "antd";
import router, { publicRoute } from "./router";
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
          {router.map((item, index) => {
            return (
              <Route {...item} path={publicRoute + item.path} key={index} />
            );
          })}
          <Redirect to="/site/wap/shanghai/home" />
        </Switch>
      </Suspense>
    );
  }
}
