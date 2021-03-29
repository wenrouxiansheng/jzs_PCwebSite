import { ConfigProvider } from 'antd';
import { withRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import 'antd/dist/antd.css';
import Router from './router/router'
import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
// import SuspendedWindow from '@components/common/suspendedWindow'  右侧悬浮窗  

function App(props) {
  props.history.listen(() => {
    if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
      window.scrollTo(0, 0)
    }
  }, [props.history])

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header />
        <Nav />
        <Router />
        {/* <SuspendedWindow /> */}
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default withRouter(App);
