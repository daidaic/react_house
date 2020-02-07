import React from "react";

// 导入要使用的组件
// import { Button } from "antd-mobile";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
//导入首页和城市选择的两个组件(页面)
import Home from "./pages/Home";
import CityList from "./pages/CityList";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Button>登录</Button> */}


        {/* 配置路由 */}
        {/* 默认路由 实现路由的重定向 */}
        <Route  path="/" exact render = { () => <Redirect to="/home" />}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
