//此处作为项目的入口文件
//导入vue插件
import Vue from 'vue'

//导入app组件
import app from './App.vue'
//导入路由
import router from './router';
//导入vue的ajax插件
import VueResource from 'vue-resource';
//导入mint-ui组件库
 import MintUi from 'mint-ui';

 //将VueResource安装到vue
 Vue.use(VueResource)
 //设置API请求的根路径
 Vue.http.options.root="http://36.138.183.223:3000/"
 Vue.http.options.emulateJSON = true;//全局启用emulateJSON选项，post请求时使用
//导入mint-ui的样式
import 'mint-ui/lib/style.css';
//导入主css样式
import './css/sass/index.scss';
 // 引入图标css
 import './css/iconfont.css'
//mui的导入
// import  './lib/mui/js/mui.min.js';
// import './lib/mui/js/mui.picker.min.js';

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

import './lib/mui/css/app.css';
import './lib/mui/css/mui.picker.min.css';

Vue.prototype.mui=mui;

//将mint-ui安装到vue中
Vue.use(MintUi)
//按需引入mint-ui中的组件
// import { Header } from 'mint-ui';
//以组件的形式引用给vue
// Vue.component(Header.name,Header)

// 创建vue实例
const vm = new Vue({
    el:'#app',
    render: c=>c(app),
    // 挂载路由
    router
})