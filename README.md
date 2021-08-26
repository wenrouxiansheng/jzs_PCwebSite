# PC官网及建站 & Wap(北京移动官网、上海移动官网) 

### 安装依赖项
```
npm install
```
### 运行项目
```
npm run start
```
### 打包项目
```
npm run build
```
## ui框架插件等
-------------

material-ui: [官网地址](https://material-ui.com/zh/)

antd-ui: [官网地址](https://ant.design/components/overview-cn/)

ant-Motion动画组件: [官网地址](https://motion.ant.design/components/scroll-anim-cn#components-scroll-anim-demo-parallax)

braft-editor富文本编辑器: 
1. [国内镜像说明地址](https://codechina.csdn.net/mirrors/margox/braft-editor?utm_source=csdn_github_accelerator)
2. [gihub说明地址](https://github.com/margox/braft-editor)


pubsubjs：[gihub说明地址](https://github.com/mroderick/PubSubJS)

## 路由详情说明
-------------
#### 一级路由
1. 路径： src/router/router.js   
    - 用于区分H5官网及H5活动页、pc官网、pc建站

#### 二级路由
1. pc官网路由 路径：src/pc/router.js
2. pcEdit建站路由 路径：src/pcEditWebsite/views/index.js
3. H5路由 路径：src/wap/control/index.js    
    - 用于区分活动页面路由、北京H5官网路由、上海H5官网路由

#### 三级路由
1. H5活动页路由：src/wap/activityPages/router/index.js
2. H5北京官网路由：src/wap/beijing/router/index.js
3. H5上海官网路由：src/wap/shanghai/router/index.js


### 建站消息大致图
![消息传递大致图](src/pcEditWebsite/消息传递大致图.png)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
