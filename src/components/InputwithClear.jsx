import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text, Image ,Input} from "@tarojs/components";
import clear from "../assets/order/clear.svg"

/**
 * 带有删除按钮的输入框组件
 * 可以传入ID名后自己在外面通过css的ID选择器定义样式
 * @param {string} type 输入框类型，同原生Input组件
 * @param {string} placeholder 占位符，同原生Input组件
 * @param {string} placeholderStyle 占位符样式，同原生Input组件
 * @param {string} inputID Input框的ID
 * @param {string} buttonID 删除按钮的ID
 */
export default class InputwithClear extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  handleClick() {
    this.setState({ content: "" });
  }
  render() {
      return (
          <>
          <Input type={this.props.type} placeholder={this.props.placeholder} placeholderStyle={this.props.placeholderStyle}  id={this.props.inputID}  value={this.state.content} focus/>
          <Image src={clear} onClick={this.handleClick.bind(this)} id={this.props.buttonID}/>
          </>        
      )
      }
}
