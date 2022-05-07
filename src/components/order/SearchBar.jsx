import Taro from "@tarojs/taro";
import React, { Component, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtSearchBar} from "taro-ui";

export default class SearchBar extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          value: ''
        }
      }
    onChange (value) {
    this.setState({
        value: value
    })
    }
    render () {
    return (
        <AtSearchBar
        actionName='搜索门店'
        placeholder="搜索门店"
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        />
    )
    }
}
