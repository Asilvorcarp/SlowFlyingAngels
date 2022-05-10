import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
// import MySwiper from '../../components/index/MySwiper'
import { Swiper, SwiperItem } from "@tarojs/components";
import CAR_SVG from "../../assets/img/cars/CAR.svg";
import SUV_SVG from "../../assets/img/cars/SUV.svg";
import BigSUV_SVG from "../../assets/img/cars/BigSUV.svg";

/*
 * img: 图片
 * carName: 车名
 * price: 价格 (为空则不显示)
*/
// 如果props.img是数字，则显示对应车型；否则视为图片链接。

export default function Car(props) {
  if (props.img == 1) {
    props.img = CAR_SVG;
  }else if (props.img == 2) {
    props.img = SUV_SVG;
  }else if (props.img == 3) {
    props.img = BigSUV_SVG
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >

      <AtAvatar image={props.img}></AtAvatar>
      <Text
        style={{
          fontSize: 12,
          textAlign: "center",
          fontFamily: "PingFang SC",
        }}
      >
        {props.carName}
      </Text>
      <Text
        style={{ fontSize: 12, textAlign: "center", fontFamily: "PingFang SC" }}
      >
        {props.price}
        {props.price ? "￥" : ""}
      </Text>
    </View>
  );
}
