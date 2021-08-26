import React, { Component, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Skeleton } from "antd";
import routeList from "./routeList";
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
  componentDidMount() {
    let awaitTime = 0;
    let timer = setInterval(() => {
      const service = document.querySelector("#udesk_container");
      if (service) {
        service.style.display = "none";
        clearInterval(timer);
      } else {
        awaitTime = 1500;
      }
    }, awaitTime);
  }
  render() {
    return (
      <Suspense fallback={Loading}>
        <Switch>
          {routeList.map((item, index) => {
            return <Route {...item} key={index} />;
          })}
          <Redirect to="/site/wap/beijing/home" />
        </Switch>
      </Suspense>
    );
  }
}
