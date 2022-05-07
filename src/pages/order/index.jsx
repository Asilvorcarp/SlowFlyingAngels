import Taro from "@tarojs/taro";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  Input,
  Radio,
  RadioGroup,
  Label,
} from "@tarojs/components";
import "./index.scss";
import { AtCard, AtTabBar, AtAvatar, AtInput } from "taro-ui";
import InputwithClear from "../../components/InputwithClear";
import location from "../../assets/order/location.svg"
import calander from "../../assets/order/calander.svg"
import angle from "../../assets/order/angle.svg"

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
      list: [
        {
          value: "先生",
          text: "先生",
          checked: true,
        },
        {
          value: "女士",
          text: "女士",
          checked: false,
        },
      ],
    };
  }

  handleClick(value) {
    this.setState({
      current: value,
      value: "",
    });
    switch (
      value //todo 有待优化的实现方式
    ) {
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
  handleChange(value) {
    this.setState({
      value,
    });
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
        <View id="carBox">
          <Text style={{ fontSize: 18, fontFamily: "PingFang SC",position: "absolute",
              top: 11,
              left: 18, }}>
            车型选择：
          </Text>
          <Text id="carInfo">小型车一般是指排量在1.0-1.3左右的车型，比如欧洲E-NCAP，日本J-NCAP，C-NCAP等等。不过现在微型车和小型车，也包括其他相近车型的划分越来越模糊，一般是根据生产厂商的定位以及这款车的前身来确定其界别。</Text>
        </View>

        <View id="store_time_Box">
          <Text
            style={{
              fontSize: 18,
              fontFamily: "PingFang SC",
              position: "absolute",
              top: 11,
              left: 18,
            }}
          >
            门店与场次选择：
          </Text>
          <Text id="store">门店</Text>
          <Text id="time">场次</Text>
          <View id="selectedStore" onClick={()=>{Taro.redirectTo({url: "/pages/order/storeSelect/index"})}}>杭州市上城区凯旋街道凯旋路137号</View>
          <View id="selectedTime">明天下午5:30 (2022/02/18 17:30)</View>
          <Image src={location} style={{position:"absolute",top:49,left:65,width:13,height:19}}/>
          <Image src={calander} style={{position:"absolute",top:88,left:65,width:16,height:18}}/>
          <Image src={angle} style={{position:"absolute",top:55,left:310,width:6,height:10}} onClick={()=>{Taro.redirectTo({url: "/pages/order/storeSelect/index"})}}/>
          <Image src={angle} style={{position:"absolute",top:91,left:310,width:6,height:10}}/>
        </View>

        <View id="inforBox">
          <Text
            style={{
              fontSize: 18,
              fontFamily: "PingFang SC",
              position: "absolute",
              top: 11,
              left: 18,
            }}
          >
            联系方式：
          </Text>
          <Text id="personName">联系人</Text>
          <InputwithClear
            type="text"
            placeholder="输入联系人姓名"
            placeholderStyle="font-size:12Px"
            inputID="InputName"
            buttonID="InputNameButton"
          />
          <RadioGroup className="radioBox">
            {this.state.list.map((item, i) => {
              return (
                <Radio
                  className="radio"
                  value={item.value}
                  checked={item.checked}
                  color="#FF5555"
                  style={{fontWeight:"bold"}}
                >
                  {item.text}
                </Radio>
              );
            })}
          </RadioGroup>
          <Text id="phoneNumber">手机号</Text>
          <InputwithClear
          type="number"
          placeholder="输入手机号"
          placeholderStyle="font-size:12Px"
          inputID="InputPhone"
          buttonID="InputPhoneButton"
        />
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
