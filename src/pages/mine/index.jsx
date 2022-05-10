import Taro from "@tarojs/taro";
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtTabBar } from 'taro-ui'
import OrderCard from "../../components/orders/OrderCard";
import './index.scss'

export default class OrdersIndex extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor() {
    super(...arguments);
    this.state = {
      currentTab: 0,
      current: 3,
    };
  }

  handleTabClick(value) {
    this.setState({
      currentTab: value,
    });
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
        Taro.redirectTo({
          url: "/pages/order/index",
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

  render () {
    return (
      <View className='orders-index'>

        <AtTabs
          // animated={false} // 是否开启动画
          current={this.state.currentTab}
          tabList={[
            { title: '全部' },
            { title: '已预约' },
            { title: '已完成' },
            { title: '已取消' },
          ]}
          onClick={this.handleTabClick.bind(this)}>
          <AtTabsPane current={this.state.currentTab} index={0} >

            <View 
              style={{
                marginLeft: 10,
                marginRight: 10,
                display: "flex",
                flexDirection: "column",
                minHeight:"700px",
                // justifyContent: "space-between",
              }}
            >
              <OrderCard
                carType = {1}
                address = "弯湾洗车行 杭州市上城区凯旋街道凯旋路137号"
                time = "2022-05-12T17:30:00"
                price = {30}
                status = {0}
              ></OrderCard>
              <OrderCard
                carType = {2}
                address = "弯湾洗车行 杭州市上城区凯旋街道凯旋路137号"
                time = "2022-05-15T12:30:00"
                price = {35.60}
                status = {0}
              ></OrderCard>

            </View>

          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={3}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页四的内容</View>
          </AtTabsPane>
        </AtTabs>

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
    )
  }
}

// todo 在中间放个 “预约” 进行预约的操作
// todo 订单表示已有的订单

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