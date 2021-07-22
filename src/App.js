
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import RouterPage from './router/router'

function App(props) {
  props.history.listen(() => {
    //监听路由跳转返回顶部
    if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
      window.scrollTo(0, 0);
    }
  }, [props.history])
  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}

export default withRouter(App);
