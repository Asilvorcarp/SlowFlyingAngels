import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
import "./OrderCard.scss";
// import nav_svg from "./icons/nav_button.svg";

export default function OrderCard(props) {
  return (
    <View
      style={{
        position: "relative", //父级使用相对定位
        width: "100%",
        height: "144px",
        background: "#FFFFFF",
        // border: "1px solid #F05757",
        // boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
        marginTop: 13,
        borderRadius: 11,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 39,
          height: 16,
          left: 20,
          top: 110,
          textAlign: "center",

          fontFamily: "PingFang SC",
          fontSize: 10,
          lineHeight: "16px", //这里非常奇怪，如果我写14，就会出问题，如果写"14px"就不会出事
          border: "1px solid #FF5555",
          color: " #FF5555",
        }}
      >
        营业中
      </View>

      <View
        style={{
          position: "absolute", //children相对父级绝对定位
          left: "10.99%",
          top: "9.03%",
          height: 17,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "17px",

          color: "#000000",
        }}
      >
        {props.storeName + "  "}
      </View>

      <View
        style={{
          position: "absolute",
          left: 14,
          top: 59,

          fontFamily: "PingFang SC",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 10,
          // lineHeight: 14,

          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {props.position}
      </View>
      <View className="nowLabel">Now</View>
      <View className="waitingTime">现在下单，等待时间小于30分钟</View>
      <View className="businessTime">{props.businessTime}</View>
      <View className="distance">{props.distance}km</View>
      <View
        className="goforOrder"
        onClick={() => {
          var pages = getCurrentPages();
          pages[pages.length - 2].setData({ storePosition: props.position });
          Taro.navigateBack({ delta: 1 });
        }}
      >
        去预约
      </View>
    </View>
  );
}
