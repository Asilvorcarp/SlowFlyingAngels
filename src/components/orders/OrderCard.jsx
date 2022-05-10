import Taro, {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  render
} from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtCard, AtTabBar, AtAvatar } from "taro-ui";
import "./OrderCard.scss";
import Car from "../index/car";
import nav_svg from "./icons/nav_button.svg";

export default function OrderCard(props) {

  // props: {
  //   carType: 1/2/3,
  //   address: string,
  //   time: "2022-02-18T17:30:00",
  //   price: int,
  //   status: 0/1/2/3/4/5, // todo 已预约 已完成 已取消
  // }

  let getDiffTimeStr = () => {
    let time = new Date(props.time);
    let now = new Date();
    let timeDiff = time.getTime() - now.getTime();
    let timeDiffDays = (timeDiff / (1000 * 3600 * 24)).toFixed(0);
    console.log('timeDiffDays', timeDiffDays);

    let timeDiffString = "";
    if (timeDiffDays == 0) {
      timeDiffString = "今天";
    } else if (timeDiffDays == 1) {
      timeDiffString = "明天";
    } else if(timeDiffDays == 2) {
      timeDiffString = "后天";
    } else if(timeDiffDays > 2) {
      return ""; // means don't show time diff
    }
    timeDiffString = timeDiffString + time.getHours() + ":" + time.getMinutes();

    console.log("time", time);
    console.log("timeDiffString", timeDiffString);
    return timeDiffString;
  }

  let carTypeString = props.carType == 1 ? "小型车" : props.carType == 2 ? "SUV型车" : "大SUV/商务车";
  let timeDiffStr = getDiffTimeStr();

  // todo
  // let statusString = props.status == 0 ? "已预约" : props.status == 1 ? "已完成" : props.status == 2 ? "已取消" : props.status == 3 ? "已拒绝" : props.status == 4 ? "已接单" : "";

  useReady(() => {
    // console.log(props); // debug
    timeDiffStr = getDiffTimeStr();
  })

  useDidShow(() => {
    timeDiffStr = getDiffTimeStr();
  })

  useDidHide(() => {})

  usePullDownRefresh(() => {
    console.log("refresh");
    timeDiffStr = getDiffTimeStr();
  })

  // todo css 提取

  return (
    <View
      style={{
        position: "relative", //父级使用相对定位
        background: "#FFFFFF",
        marginTop: 13,
        borderRadius: 11,
        padding: "15px 12px 10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {/* the car image */}
        <View style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
        }}>
          <Car img={props.carType}/>
        </View>
        <View style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 0 10px",
            gap: "5px",
        }}>
          <Text style={{
            fontFamily: 'PingFang SC',
            fontStyle: "normal",
            fontWeight: "555",
            fontSize: "15px",
          }}>
            {carTypeString}清洗
          </Text>

          {/* the location row */}
          <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "left",
          }}>
            {/* the location icon */}
            <View style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              marginRight: "3.5px",
            }}>
              <Text className="iconfont icon-location"/>
            </View>
            <Text style={{
              fontFamily: 'PingFang SC',
              fontSize: "12px",
              lineHeight: "15px",
            }}>
              {props.address}
              <Text className="iconfont icon-arrow-right"/>
            </Text>
          </View>

          {/* the time row */}
          <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "left",
            color: "#FF5555",
          }}>
            {/* the calendar icon */}
            <View style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              marginRight: "3.5px",
            }}>
              <Text className="iconfont icon-calendar"/>
            </View>
            <Text style={{
              fontFamily: 'PingFang SC',
              fontSize: "12px",
              lineHeight: "15px",
            }}>
              {timeDiffStr!='' ? timeDiffStr+' ('+props.time.replace(/T/g, ' ').replace(/:..$/, '')+')' : props.time.replace(/T/g, ' ').replace(/:..$/, '')}
              <Text className="iconfont icon-arrow-right"/>
            </Text>
          </View>

        </View>
        <View style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          <Text style={{
            fontFamily: 'PingFang SC',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(255, 0, 0, 0.76)",
            textAlign: "right",
          }}>
            已预约
            {/* // todo 不同状态的颜色 */}
          </Text>
          <Text className="price">
            ￥<Text className="price-inside">{Math.floor(props.price)}</Text>
            .{(props.price-Math.floor(props.price)).toFixed(2).replace("0.", "")}
          </Text>
        </View>
      </View>

      {/* buttons  */}
      <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
        }}>
        <Text className="button">
          更改时间
        </Text>
        <Text className="button">
          服务评价
        </Text>
      </View>
      

      {/* <View
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
      </View> */}
    </View>
  );
}
