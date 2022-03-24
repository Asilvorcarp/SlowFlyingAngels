import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import SfaMap from '../../components/map/map'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <SfaMap/>
      </View>
    )
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