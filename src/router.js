//导入vue插件
import Vue from 'vue'
//导入vue路由插件
import VueRouter from 'vue-router';
//导入底部导航栏的三个组件
import HomeContainer from './components/tabbar/HomeContainer.vue';        //1.首页
import LostInfo from './components/postmessage/LostInfo.vue';              //2.发布信息 和2.1 我丢失了的信息登记 同一个
import FoundInfo from './components/postmessage/FoundInfo.vue';             //2.2我捡到了的信息登记
import PetClaimed from './components/postmessage/PetClaimed.vue';         //2.1.1宠物认领
import MyContainer from './components/tabbar/MyContainer.vue';            //3.我的
import PetProduct from './components/PetProducts/index.vue' ;               //4.宠物用品销售主页
import CatSnacks from './components/PetProducts/CatSnacks.vue' ;               //4.1宠物用品--猫粮
import CatDaily from './components/PetProducts/CatDaily.vue' ;               //4.1宠物用品--猫日用
import CatToy from './components/PetProducts/CatToy.vue' ;               //4.1宠物用品--猫玩具
import info from './components/ProductInfo/info.vue' ;                //4.1.1宠物用品详情
import shopcart from './components/PetShopping/shopcart.vue' ;                //4.1.1宠物用品详情


//通过Vue使用路由（手动安装）
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    routes:[//匹配路由规则
       {path:'/',redirect:'/home'},                 //0.默认
       {path:'/home',component:HomeContainer},      //1.首页
       {path:'/info',redirect:'/foundinfo' },      //2.发布信息
       {path:'/lostinfo',component:LostInfo},    //2.1 我丢失了的信息登记
       {path:'/foundinfo',component:FoundInfo},       //2.2我捡到了的信息登记
       {path:'/petclaimed',component:PetClaimed},      //2.1.1 宠物认领
       {path:'/my',component:MyContainer} ,          //3.我的
       {path:'/petproducts',component:PetProduct},    //4.宠物用品销售主页
       {path:'/petproducts/catsnacks',component:CatSnacks},    //4.1宠物用品--猫粮
       {path:'/petproducts/catdaily',component:CatDaily},    //4.1宠物用品--猫日用
       {path:'/petproducts/cattoy',component:CatToy} ,   //4.1宠物用品--猫玩具
       {path:'/productinfo',component:info} ,   //4.1.1宠物用品详情
       {path:'/petshopping/shopcart',component:shopcart} ,   //4.1.1宠物用品详情

    
    ],
    linkActiveClass:'mui-active'
})
//暴露路由
export default router