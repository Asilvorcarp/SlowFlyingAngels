import Taro from "@tarojs/taro";
import React, { Component, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import SfaMap from "../map/map";

export default class Fmap extends Component {
  constructor(props) {
    super(props);
    this.state = { fold: 0 };
  }
  handleClick0() {
    this.setState({ fold: 1 });
  }
  handleClick1() {
    this.setState({ fold: 0 });
  }
  render() {
    if (this.state.fold)
      return (
        <>
          <Text onClick={this.handleClick1.bind(this)} style={{
            textAlign:"center",
            width:"100%",
            height:"33px",
            color:"rgba(0,0,0,0.5)",
            fontSize: "9px",
            lineHeight:"33px",
            backgroundColor:"#FFFFFF"

          }}>展开地图</Text>
        </>
      );
    else
      return (
        <>
          <SfaMap></SfaMap>
          <Text onClick={this.handleClick0.bind(this)} className='mapButton' style={{
            textAlign:"center",
            width:"100%",
            height:"33px",
            color:"rgba(0,0,0,0.5)",
            fontSize: "9px",
            lineHeight:"33px",
            backgroundColor:"#FFFFFF"

          }}>收起地图</Text>
        </>
      );
  }
}
