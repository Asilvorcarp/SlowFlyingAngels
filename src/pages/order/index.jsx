import Taro from "@tarojs/taro";
import React,{ Component,useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import SfaMap from "../../components/map/map";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
// import MySwiper from '../../components/index/MySwiper'
import { Swiper, SwiperItem } from "@tarojs/components";
import Car from "../../components/index/car";
import Store from "../../components/order/Store/Store";

import bookNow_svg from '../../assets/index/bookNow.svg'
import item1 from '../../assets/index/swiperItem1.png';
import Fmap from "../../components/order/Fmap";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  constructor() {
    super(...arguments);
    this.state = {
      current: 2,
    };
    this.fold=0;
  }


  handleClick(value) {
    this.setState({
      current: value,
    });
    switch (value) { //todo 有待优化的实现方式
      case 0:
        Taro.redirectTo({
          url: "/pages/index/index",
        });
        break;
      case 1:
        Taro.redirectTo({
          url: "/pages/show/index",
        });
        break;
      case 2:
        // Taro.redirectTo({
        //   url: "/pages/order/index",
        // });
        break;
      case 3:
        Taro.redirectTo({
          url: "/pages/mine/index",
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View
        className="index"
        style={{
          margin: 10,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Fmap></Fmap>
        
          <View 
            style={{
              marginTop: -15,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              minHeight:"700px",
              // justifyContent: "space-between",
            }}
          >
            <Store
              storeName="慢飞天使杭州上城区店"
              position="杭州市上城区采荷街道凯旋路137号"
              distance= {11.6}
              nearest={false}
              businessTime="09:30 ~ 23:59"
            ></Store>
            <Store
              storeName="慢飞天使杭州浙大紫金港店"
              position="杭州市上城区凯旋街道凯旋路137号"
              distance= {0.75}
              nearest={true}
              businessTime="09:30 ~ 23:59"
            ></Store>
            <Store
              storeName="慢飞天使杭州上城区店"
              position="杭州市上城区凯旋街道凯旋路137号"
              distance= {0.75}
              nearest={false}
              businessTime="09:30 ~ 23:59"
            ></Store>
          </View>
          


        <AtTabBar
          fixed
          tabList={[
            { title: "主页", iconType: "home" },
            { title: "展示", iconType: "heart" },
            { title: "订单", iconType: "shopping-bag" },
            { title: "我的", iconType: "user" },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

// functional is like this:

// import React, { useEffect } from 'react'
// import { View } from '@tarojs/components'
// import {
//   useReady,
//   useDidShow,
//   useDidHide,
//   usePullDownRefresh
// } from '@tarojs/taro'

// function Index () {
//   // 可以使用所有的 React Hooks
//   useEffect(() => {})

//   // 对应 onReady
//   useReady(() => {})

//   // 对应 onShow
//   useDidShow(() => {})

//   // 对应 onHide
//   useDidHide(() => {})

//   // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
//   // 详情可查阅：【Hooks】
//   usePullDownRefresh(() => {})

//   return (
//     <View className='index' />
//   )
// }

// export default Index
