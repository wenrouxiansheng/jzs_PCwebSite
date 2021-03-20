import './App.css';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom'
import HomePage from './views/homePage/homePage';
import BrandIntroduction from './views/brandIntroduction/brandIntroduction';
function App() {
  return (
    <div className="App">
      <Route path="/home" component={HomePage}/>
      <Route path="/BrandIntroduction" component={BrandIntroduction}/>
    </div>
  );
}

export default App;
