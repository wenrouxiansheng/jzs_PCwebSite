import './App.css';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Router from './router/router'
import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
// import SuspendedWindow from '@components/common/suspendedWindow'  右侧悬浮窗  

function App() {
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

export default App;
