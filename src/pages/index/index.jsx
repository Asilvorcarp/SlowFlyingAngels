import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import SfaMap from "../../components/map/map";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
// import MySwiper from '../../components/index/MySwiper'
import { Swiper, SwiperItem } from "@tarojs/components";
import Car from "../../components/index/car";
import bookNow_svg from '../../assets/index/bookNow.svg'
import item1 from '../../assets/index/swiperItem1.png'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    };
  }

  handleClick(value) {
    this.setState({
      current: value,
    });
    switch (value) {
      case 0:
        // Taro.redirectTo({
        //   url: "/pages/index/index",
        // });
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
        <Swiper
          className="intro-swiper"
          style={{ height: "175px", width: "100%", borderRadius: "10px" }}
          indicatorColor="#917378"
          indicatorActiveColor="white"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              style="width: 100%; height: 100%; background: #fff; border-radius: 20px;"
              src={item1}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style="width: 100%; height: 100%; background: #fff; border-radius: 20px;"
              src={item1}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style="width: 100%; height: 100%; background: #fff; border-radius: 20px;"
              src={item1}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style="width: 100%; height: 100%; background: #fff; border-radius: 20px;"
              src={item1}
            />
          </SwiperItem>
        </Swiper>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 11,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "PingFang SC" }}>
            各项洗车服务
          </Text>
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Car
              img="https://jdc.jd.com/img/200"
              carName="小型车"
              price="25"
            ></Car>
            <Car
              img="https://jdc.jd.com/img/200"
              carName="SUV型车"
              price="30"
            ></Car>
            <Car
              img="https://jdc.jd.com/img/200"
              carName="商务车"
              price="35"
            ></Car>
            <Car img="https://jdc.jd.com/img/200" carName="..." price=""></Car>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 11,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "PingFang SC" }}>
            工作人员主页
          </Text>
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Car img="https://jdc.jd.com/img/200" carName="张三" price=""></Car>
            <Car img="https://jdc.jd.com/img/200" carName="李四" price=""></Car>
            <Car img="https://jdc.jd.com/img/200" carName="王五" price=""></Car>
            <Car img="https://jdc.jd.com/img/200" carName="..." price=""></Car>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 11,
            background:
              "linear-gradient(180deg, rgba(255, 40, 40, 0.6) 0%, rgba(255, 52, 52, 0.2625) 56.25%, rgba(221, 221, 221, 0) 100%)",
            height: 500,
          }}
        >
          <Text
            style={{ fontSize: 18, fontFamily: "PingFang SC", color: "white" }}
          >
            暖心留言墙
          </Text>
        </View>

        <View id='book-button' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
          <View
            style={{
              position: "fixed",
              width: 295,
              height: 54,
              background: "#FF5555",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 21,
              bottom: 120,
              display: "flex",
              justifyContent: "center",
            }}
            onClick={()=>{Taro.redirectTo({url: "/pages/order/index"})}}
            // 进入门店选择页面
          >
            <Image src={bookNow_svg} style='width: 35px; height: 35px; margin-top:9px;'/>
            <View style={{ marginTop: 9, marginLeft: 11 , display: 'flex', flexDirection: 'column'}}>
              <Text style={{ fontSize: 16, fontFamily: "PingFang SC", color: "white"}}>预约洗车</Text>
              <Text style={{ fontSize: 10, fontFamily: "PingFang SC", color: "white", textAlign:'center'}}>Book Now</Text>
            </View>
          </View>
        </View>

        {/* <View>
          <SfaMap />
        </View> */}

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
