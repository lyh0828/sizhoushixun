/*
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-15 15:02:28
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-07-03 22:49:27
 * @FilePath: \sizhoushixun\src\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//导入vue插件
import Vue from 'vue'
//导入vue路由插件
import VueRouter from 'vue-router';


//导入底部导航栏的三个组件
import HomeContainer from './components/tabbar/HomeContainer.vue';        //1.首页
import LostInfo from './components/postmessage/LostInfo.vue';              //2.发布信息 和2.1 我丢失了的信息登记 同一个
import FoundInfo from './components/postmessage/FoundInfo.vue';             //2.2我捡到了的信息登记
import PetClaimed from './components/postmessage/PetClaimed.vue';         //2.1.1宠物认领
import PetClaimedDetails from './components/postmessage/PetClaimedDetails.vue'; //2.1.1.1 每一个宠物的详细信息          
import Goodscomments from './components/comments/Goodscomments.vue';           //展示留言信息
import Addcomments from './components/comments/Addcomments.vue';               //2.1.1.1.1 进行添加留言


import PetLost from './components/postmessage/PetLost.vue';               //2.1.2宠物丢失
// import resiger from './components/tabbar/resiger.vue' ;              //3.注册
// import Login from './components/tabbar/login.vue';                 //3.登录
import MyContainer from './components/tabbar/MyContainer.vue';            //3.1我的
import fabu from './components/my/fabu.vue'                    //3.1我的发布
import editPetClimedInfo from './components/my/editPetClimedInfo.vue';  //3.1.1我的发布信息的修改
import PetProduct from './components/PetProducts/index.vue';               //4.宠物用品销售主页

import Goods from './components/PetProducts/Goods.vue';               //4.宠物用品销售主页
import Search from './components/PetProducts/Search.vue' ;      //4.1 搜索
import Searchindex from './components/PetProducts/Searchindex.vue' ;      //4.1 搜索

import SearchList from './components/PetProducts/SearchList.vue';     //4.1 搜索


import CatSnacks from './components/PetProducts/CatSnacks.vue';               //4.1宠物用品--猫粮

import CatToy from './components/PetProducts/CatToy.vue';               //4.1宠物用品--猫玩具
import info from './components/ProductInfo/info.vue';                //4.1.1宠物用品详情
import shopcart from './components/PetShopping/shopcart.vue';                //4.1.1宠物用品详情
import Path from './components/PetShopping/Path.vue'
import order from './components/PetShopping/order.vue';  
import detail from './components/PetShopping/detail.vue';  
import myorder from './components/PetShopping/myorder.vue';  

import pathindex from './components/PetShopping/pathindex.vue'              //4.1.1宠物用品详情
import pathlist from './components/PetShopping/pathlist.vue'
import daylist from './components/PetDay/DayList.vue';                      //5宠物日常
import dayinfo from './components/PetDay/DayInfo.vue';                      //5.1宠物日常--详情页
import perhome from './components/PetDay/PerHone.vue';                      //5.1.1宠物日常--详情页--个人主页


import addremind from './components/Remind/addremind.vue'
import remindinfo from './components/Remind/remindinfo.vue'
import peteat from './components/Eat/peteat.vue'


import raiselist from './components/PetDay/RaiseList.vue';                  //1.5 领养动态
import raiseinfo from './components/PetDay/RaiseInfo.vue';                  //1.5.1领养动态--领养详情页
import raisemore from './components/PetDay/RaiseMore.vue';                  //1.5.1.1领养动态--领养详情页--指定领养页
import raiseone from './components/PetDay/RaiseOne.vue';                    //1.5.1.2领养动态--领养详情页--领养一只


import ServerInfo from './components/Content/ServerInfo.vue';                 //6.1服务

import PetSmart from './components/PetSmart/petsmart.vue';         //6.7 宠物智能
import PetShop from './components/PetSmart/petshop.vue';         //6.7.1 宠物智能--宠物店
import PetFriend from './components/PetSmart/petFriend.vue';      //6.7.2 宠物智能--宠友信息

import News from './components/AboutPet/news.vue';         //6.3()宠物新闻

import PetNews from './components/AboutPet/petnews.vue';         //6.3宠物新闻
import PetNewsDetails from './components/AboutPet/petnewsdetail.vue';   //6.3.1宠物新闻的详情
import sort from './components/sort/sort.vue';//7.宠物分类
import mypet from './components/Content/mypet.vue';  //8.我的宠物


import group from './components/group/group.vue';                       //1.6群聊
import groupinfo from './components/group/groupInfo.vue';                       //1.趣味逗宠--趣味逗宠
import report from './components/group/report.vue';                            //1.趣味逗宠--趣味逗宠详情--举报

import host from "./components/user/host.vue";
import login from "./components/user/login.vue";
import register from './components/user/register.vue';

import chat from './components/Content/chat.vue';  //聊天


import myorderinfo from './components/PetShopping/myorderinfo.vue'
//通过Vue使用路由（手动安装）
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    // mode:'history',

    routes:[//匹配路由规则
       {path:'/',redirect:'/home'},                 //0.默认
       {path:'/home',component:HomeContainer},      //1.首页
       {path:'/addremind',component:addremind},       //1.1 添加提醒
       {path:'/remindinfo/:id',component:remindinfo},      //1.1.1 提醒详情页
       {path:'/info',redirect:'/foundinfo' },      //2.发布信息
       {path:'/lostinfo',component:LostInfo},    //2.1 我丢失了的信息登记
       {path:'/foundinfo',component:FoundInfo},       //2.2我捡到了的信息登记
       {path:'/petclaimed',component:PetClaimed},      //2.1.1 宠物认领
       {path:'/petclaimeddetails/:id',component:PetClaimedDetails},       //2.1.1.1 每一个宠物的详细信息     
       {path:'/goodscomments',component:Goodscomments},   //2.1.1.1.1展示留言
       {path:'/addcomments',component:Addcomments},   //2.1.1.1.1进行添加留言
       {path:'/myorderinfo',component:myorderinfo},   //2.1.1.1.1进行添加留言

       {path:'/petlost',component:PetLost},            //2.1.2宠物丢失
    //    {path:'/resiger',component:resiger} ,          //3注册
    //    {path:'/login',component:Login} ,          //3登录
       {path:'/my',component:MyContainer} ,          //3.1我的
       {path:'/fabu',component:fabu},     //3.1 我的发布
       {path:'/petproducts',component:PetProduct},    //4.宠物用品销售主页

        { path: '/petproducts/goods', component: Goods },    //4.宠物用品销售   
        { path: '/petproducts/goods', component: Goods },    //4.宠物用品销售

        { path: '/petproducts/catsnacks', component: CatSnacks },    //4.1宠物用品--猫粮
      
        { path: '/petproducts/cattoy', component: CatToy },   //4.1宠物用品--猫玩具
        { path: '/productinfo', component: info },   //4.1.1宠物用品详情
        { path: '/petshopping/shopcart', component: shopcart },   //4.1.1宠物用品详情
        { path: '/home/daylist', component: daylist },                 //5宠物日常
        { path: '/home/daylist/dayinfo/:id', component: dayinfo },       //5.1宠物日常--详情页
        { path: '/home/daylist/perhome/:id', component: perhome },       //5.1.1宠物日常--详情页--个人主页
        { path: '/home/raiselist', component: raiselist },                //1.5领养动态
        { path: '/home/raiselist/raiseinfo', component: raiseinfo },    //1.5.1领养动态--领养详情页
        {path:'/home/raiselist/raiseinfo/raisemore',component:raisemore},  //1.5.1.1领养动态--领养详情页--指定领养页
        {path:'/home/raiselist/raiseinfo/raiseone',component:raiseone},   //1.5.1.2领养动态--领养详情页--领养一只

        { path: '/productinfo/:id', component: info },   //4.1.1宠物用品详情
        { path: '/petshopping/shopcart/:id', component: shopcart },   //4.1.1宠物用品详情

        { path: '/home/daylist', component: daylist },                 //5宠物日常
        { path: '/home/daylist/dayinfo/:id', component: dayinfo },                 //5.1宠物日常--详情页
        { path: '/home/daylist/perhome', component: perhome },                 //5.1.1宠物日常--详情页--个人主页


        { path: '/petproducts/goods', component: Goods },    //4.宠物用品销售   
        {
            path: '/search', name: "search", component: Search,
           children:[
            {
                path: '/', name: "index", component: Searchindex,
            },
            {
                path: 'list', name: "list", component: SearchList,

            },
           ]

        },    //4.宠物用品销售   
       

        { path: '/petproducts/catsnacks', component: CatSnacks },    //4.1宠物用品--猫粮
     
        { path: '/petproducts/cattoy', component: CatToy },   //4.1宠物用品--猫玩具
        { path: '/petshopping/order', component: order },   
     
        { path: '/petshopping/order/:id', component: order },   
        { path: '/petshopping/detail/:id', component: detail },   //4.1.1宠物用品提交订单
        
        { path: '/path', component: Path,
        children:[
            {
                path: "/",
                name: "index",
                component: pathindex,
            },
            {
                path: "pathlist",
                name: "pathlist",
                component: pathlist,
            },
            {
                path: "myorder",
                name: "myorder",
                component: myorder,
            }
        ] },                 //5宠物日常

        { path: '/home/daylist', component: daylist },                 //5宠物日常
        { path: '/home/daylist/dayinfo/:id', component: dayinfo },       //5.1宠物日常--详情页
        { path: '/home/daylist/perhome/:id', component: perhome },       //5.1.1宠物日常--详情页--个人主页
        { path: '/home/raiselist', component: raiselist },                //1.5领养动态
        { path: '/home/raiselist/raiseinfo', component: raiseinfo },    //1.5.1共养动态--详情页
        { path: '/productinfo/:id', component: info },   //4.1.1宠物用品详情
        { path: '/petshopping/shopcart/:id', component: shopcart },   //4.1.1宠物用品详情

      
        { path: '/home/daylist/perhome', component: perhome },                 //5.1.1宠物日常--详情页--个人主页
        { path: '/home/peteat', component: peteat },                      //轮播图详情页

        { path: '/daylist', component: daylist },                 //5宠物日常
        { path: '/home/daylist/perhome/:id', component: perhome },                 //5.1.1宠物日常--详情页--个人主页
        { path: '/home/daylist/dayinfo/:id', component: dayinfo },                 //5.1宠物日常--详情页 
        { path: '/serverinfo', component: ServerInfo },            //6.1服务
        { path: '/petnews', component: PetNews },     //6.3宠物新闻
        { path: '/petnewsdetails/:id', component: PetNewsDetails },       //6.3.1 每一个宠物的详细信息
        { path: '/editPetClimedInfo/:id', component: editPetClimedInfo },       //6.3.1 每一个宠物的信息修改

       {path:'/daylist',component:daylist},                 //5宠物日常
       {path:'/home/daylist/perhome/:id',component:perhome},                 //5.1.1宠物日常--详情页--个人主页
       {path:'/home/daylist/dayinfo/:id',component:dayinfo},                 //5.1宠物日常--详情页 
       {path:'/serverinfo',component:ServerInfo},            //6.1服务
       {path:'/chat/:id',component:chat},//聊天

       {path:'/petsmart',component:PetSmart},     //6.7宠物智能
       {path:'/petshop/:id',component:PetShop},     //6.7.1宠物智能--宠物店详情
       {path:'/petfrienddetails/:id',component:PetFriend},     //6.7.1宠物智能--宠友信息

      

       {path:'/news',component:News},     //6.3()宠物新闻
       {path:'/petnews',component:PetNews},     //6.3宠物新闻
       {path:'/petnewsdetails/:id',component:PetNewsDetails},       //6.3.1 每一个宠物的详细信息
       {path:'/editPetClimedInfo/:id',component:editPetClimedInfo},       //6.3.1 每一个宠物的信息修改

       {path:'/home/group',component:group},                             //1.趣味逗宠
       {path:'/home/group/groupinfo',component:groupinfo},              //1.趣味逗宠--趣味逗宠详情
       {path:'/home/group/groupinfo/report',component:report},              //1.趣味逗宠--趣味逗宠详情

       {path:'/sort',component:sort},//7.宠物分类
       {path:'/mypet',component:mypet}, //8.我的宠物

       {
        //这里需要将根目录默认为Home，方便实现用户在保持登录 状态下再次登录时直接跳转至主页面
          path:"/",
          redirect:{
            name:"host"
          }
        },
        {
          path: "/host",
          name: "host",
          component: host,
        },
        {
          path: "/login",
          name: "login",
          component:login
          
        }
        ,{
          path: "/register",
          name: "register",
          component:register
            
        }

        

    ],
    linkActiveClass: 'mui-active'
})
// 前置守卫
router.beforeEach(function(to,from,next) {
    if(to.path === '/host') {
        const token = localStorage.getItem('s')
        if(token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})
// router.beforeEach((to,from,next)=>
// {
//   if(to.path == 'host') {

  
//     //登录及注册页面可以直接进入,而主页面需要分情况
//   const token = localStorage.getItem('s')
// // i  to.path=='/login'
//   if(token)
//   {
//     next();
//     console.log(localStorage.s);
//   }
//   else {
//       next('/login')
//   }
// }
// })
//   else if(to.path=='/register')
//   {
//     next();
//   }
//   else
//   {
//     if(from.path=="/login")//从登录页面可以直接通过登录进入主页面
//     {
//       next();
//     }
//     else{
//     	//从/进入,如果登录状态是true，则直接next进入主页面
//         // localStorage.s === "true"
// 	      if(token)
// 		    {
// 		      next();
// 		      console.log(localStorage['s'])
// 		    }
// 	    else {//如果登录状态是false，那么跳转至登录页面,需要登录才能进入主页面
// 	      next('/login');
// 	      console.log("需要登录")
// 	    }
//     }
//   }

//暴露路由
export default router 
