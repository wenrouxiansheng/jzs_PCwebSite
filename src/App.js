import './App.css';
import 'antd/dist/antd.css';
import Router from './router/router'
import Header from '@components/homePage/header'
import Nav from '@components/homePage/horizontalNav'
import Footer from '@components/homePage/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
