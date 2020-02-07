import React from 'react'
//导入组件
import { Carousel, } from 'antd-mobile';

// 导入axios
import axios from 'axios'


export default class Index extends React.Component {
    state = {
        // 图片名称 轮播图状态
        swipers: [],
        // 图片的高度
        // imgHeight: 176,
      }
      async getSwipers() {
        const res = await axios.get('http://localhost:8080/home/swiper')
        this.setState({
            swipers: res.data.body
        })
        // console.log(res)
      }
      componentDidMount() {
        this.getSwipers()
      }
      // 渲染轮播图方法

      renderSwipers() {
       return this.state.swipers.map(item => (
        <a
          key={item.id}
          href="http://baidu.cn"
          style={{ display: 'inline-block', width: '100%', height: '212px'}}
        >
          <img
            src={`http://localhost:8080${item.imgSrc}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            // 图片加载完成触发的事件
            // onLoad={() => {
            //   // fire window resize event to change height
            //   window.dispatchEvent(new Event('resize'));
            //   this.setState({ imgHeight: 'auto' });
            // }}
          />
        </a>
      ))}

      render() {
        return (
          <div className="index">
            <Carousel
              autoplay={true}
              infinite
            //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            //   afterChange={index => console.log('slide to', index)}
            >
              {this.renderSwipers()}
            </Carousel>
          </div>
        );
      }
    }