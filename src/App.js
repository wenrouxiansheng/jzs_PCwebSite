import { ConfigProvider } from 'antd';
import { withRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import 'antd/dist/antd.css';
import Router from './router/router'
import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
import SuspendedWindow from '@components/common/suspendedWindow'  //右侧悬浮窗  
import QueueAnim from 'rc-queue-anim';

function App(props) {
  props.history.listen(() => {
    //监听路由跳转返回顶部
    if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
      window.scrollTo(0, 0);
    }
  }, [props.history])
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header />
        <Nav />
        <QueueAnim type="bottom" duration="1000" className="brandHonor-antMotion-box">
          <Router />
        </QueueAnim>
        <SuspendedWindow />
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default withRouter(App);
