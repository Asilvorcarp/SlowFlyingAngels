import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
// import MySwiper from '../../components/index/MySwiper'
import { Swiper, SwiperItem } from "@tarojs/components";

export default function Car(props) {
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
