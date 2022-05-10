export default defineAppConfig({
  pages: [
    'pages/mine/index', //todo 临时修改主页 便于调试
    'pages/index/index',
    'pages/order/index',
    'pages/show/index',
    'pages/order/storeSelect/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
