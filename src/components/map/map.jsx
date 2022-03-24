import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// 引入 map 组件
import { Map } from '@tarojs/components'


export default class SfaMap extends Component {
  onTap () {}
  render () {
    return (
        <Map longitude={120.0870} latitude={30.3050} id="map" style={{width: "100%", height: 300}} scale={14}/>
    )
  }
}