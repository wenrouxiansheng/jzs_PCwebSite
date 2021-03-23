import './App.css';
import 'antd/dist/antd.css';
import Router from './router/router'
import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
import SuspendedWindow from '@components/common/suspendedWindow'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router />
      <SuspendedWindow />
      <Footer />
    </div>
  );
}

export default App;
