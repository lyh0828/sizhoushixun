/*
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-15 15:02:28
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-29 14:34:44
 * @FilePath: \sizhoushixun\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//此处作为项目的入口文件

Vue.config.devtools = true;

//导入vue插件
import Vue from 'vue'

//导入app组件
import app from './App.vue'
//导入路由
import router from './router';
//导入vue的ajax插件
import VueResource from 'vue-resource';
import mui from './lib/mui/js/mui.js';
Vue.prototype.mui=mui

//导入mint-ui组件库
 import MintUi from 'mint-ui';
 import { Progress } from 'mint-ui';
Vue.component(Progress.name, Progress);
 import { MessageBox } from 'mint-ui';
 Vue.component(MessageBox);
 //导入element-ui组件库
 import ElementUI from 'element-ui';
 //导入ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css';
 //将ElementUI安装到vue

Vue.use(ElementUI);

import { Dialog, Upload,DatePicker,TabPane,Backtop, dropdown} from 'element-ui';
Vue.component(Dialog);
Vue.component(Upload);
Vue.component(DatePicker);
Vue.component(TabPane);
Vue.component(dropdown);
Vue.component(Backtop);

 //将VueResource安装到vue
 Vue.use(VueResource)
 //设置API请求的根路径

 //Vue.http.options.root="http://localhost:4000/"
//  Vue.http.options.root="http://localhost:8000/"

 Vue.http.options.root="http://36.133.47.7:4000/"

 Vue.http.options.emulateJSON = true;//全局启用emulateJSON选项，post请求时使用
//导入mint-ui的样式
import 'mint-ui/lib/style.css';
//导入主css样式
import './css/sass/index.scss';
 // 引入图标css
 import './css/iconfont.css'
//mui的导入


import './lib/mui/css/mui.css';
import './lib/mui/css/mui.min.css';

import './lib/mui/css/icons-extra.css';





//将mint-ui安装到vue中
Vue.use(MintUi)
import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);

import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker);
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
