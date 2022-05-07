import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import SfaMap from "../../components/map/map";
import { AtTabBar } from "taro-ui";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  constructor() {
    super(...arguments);
    this.state = {
      current: 1,
    };
  }

  handleClick(value) {
    this.setState({
      current: value,
    });
    switch (value) {
      case 0:
        Taro.redirectTo({
          url: "/pages/index/index",
        });
        break;
      case 1:
        // Taro.redirectTo({
        //   url: "/pages/show/index",
        // });
        break;
      case 2:
        Taro.redirectTo({
          url: "/pages/order/storeSelect/index",
        });
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
      <View className="index">
        <Text>Hello world!</Text>
        <SfaMap />
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
