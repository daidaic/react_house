import React from "react";

//导入路由
import { Route } from "react-router-dom";
// 导入tabBar
import { TabBar } from "antd-mobile";
// 导入news组件
import News from "../News";
import Houselist from '../Houselist'
import Profile from '../Profile'
import Index from '../index'
// import Citylist from '../CityList'
// 导入组件自己的样式文件
import './index.css'

//tabbar数据
const tabItems = [
    {
        title:'首页',
        icon:'icon-ind',
        path:'/home'
    },
    {
        title:'找房',
        icon:'icon-findHouse',
        path:'/home/list'
    },
    {
        title:'资讯',
        icon:'icon-infom',
        path:'/home/news'
    },
    {
        title:'我的',
        icon:'icon-my',
        path:'/home/profile'
    }
]

export default class Home extends React.Component {
  state = {
      // 控制默认选中的tab菜单的
    selectedTab: this.props.location.pathname,
    // 是否隐藏底部tab栏,这个值默认false 也就是不隐藏
    hidden: false,
    // 全屏
  };
  // 渲染每个tabBar item内容
  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center"
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          style={{
            display: "block",
            marginTop: 40,
            marginBottom: 20,
            color: "#108ee9"
          }}
          onClick={e => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a
          style={{ display: "block", marginBottom: 600, color: "#108ee9" }}
          onClick={e => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  // 渲染tabbar.item
  renderTabBarItem() {
      return tabItems.map(item =>  <TabBar.Item
        icon={
            <i className= {`iconfont ${item.icon}`} />
        }
        selectedIcon={
            <i className= {`iconfont ${item.icon}`} />
        }
        title={item.title}
        key={item.title}
        // badge={'new'}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          });
           // 路由切换
           this.props.history.push(item.path)
        }}
        data-seed="logId1"
       />
         )
  };

  render() {
    return (
      <div className="home">
        {/* 子路由 */}
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/list" component={Houselist}></Route>
        <Route path="/home/profile" component={Profile}></Route>
        <Route exact path="/home" component={Index}></Route>
        {/* TabBar */}
        <TabBar
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent
        >
         {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}
