import Taro from "@tarojs/taro";
import React, { Component, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import SfaMap from "../map/map";
import Vector_svg from "./Vector.svg"

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
          <View onClick={this.handleClick1.bind(this)} style={{
            position:"relative",
            textAlign:"center",
            width:"100%",
            height:"33px",
            color:"rgba(0,0,0,0.5)",
            fontSize: "9px",
            lineHeight:"33px",
            backgroundColor:"#FFFFFF"

          }}>
            展开地图 
            <Image src={Vector_svg} style={{
            position:"absolute",
            left:"202px",
            top:"9px",
            width:"9px",
            height:"15px",
            transform: "rotate(180deg)",
        }}/></View>
        </>
      );
    else
      return (
        <>
          <SfaMap></SfaMap>
          <View onClick={this.handleClick0.bind(this)} className='mapButton' style={{
            position:"relative",
            textAlign:"center",
            width:"100%",
            height:"33px",
            color:"rgba(0,0,0,0.5)",
            fontSize: "9px",
            lineHeight:"33px",
            backgroundColor:"#FFFFFF"

          }}>收起地图 <Image src={Vector_svg} style={{
            position:"absolute",
            left:"202px",
            top:"10px",
            width:"9px",
            height:"15px"
        }}/></View>
          
        </>
      );
  }
}
