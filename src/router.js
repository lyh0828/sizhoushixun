//导入vue插件
import Vue from 'vue'
//导入vue路由插件
import VueRouter from 'vue-router';
//导入底部导航栏的三个组件
import HomeContainer from './components/tabbar/HomeContainer.vue';        //1.首页
import InfoContainer from './components/tabbar/InfoContainer.vue';        //2.发布信息
import MyContainer from './components/tabbar/MyContainer.vue';            //3.我的
//通过Vue使用路由（手动安装）
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    routes:[//匹配路由规则
       {path:'/',redirect:'/home'},                 //0.默认
       {path:'/home',component:HomeContainer},      //1.首页
       {path:'/info',component:InfoContainer},      //2.发布信息
       {path:'/my',component:MyContainer}           //3.我的
    ],
    linkActiveClass:'mui-active'
})
//暴露路由
export default router