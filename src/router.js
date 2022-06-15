//导入vue插件
import Vue from 'vue'
//导入vue路由插件
import VueRouter from 'vue-router';
//导入底部导航栏的三个组件
import HomeContainer from './components/tabbar/HomeContainer.vue';        //1.首页
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue';//2.购物车
import MytbContainer from './components/tabbar/MytbContainer.vue';        //3.我的淘宝
import GoodsList from './components/goods/GoodsList.vue';                 //1.1首页--天猫--商品列表页
import GoodsInfo from './components/goods/GoodsInfo.vue';                 //1.1首页--天猫--商品详情页
import NewsList from './components/news/NewsList.vue';                    //1.2首页--新闻--新闻列表页
import NewsInfo from './components/news/NewsInfo.vue';                    //1.2首页--新闻--新闻详情页
import NewsGetcomments from './components/news/NewsGetcomments.vue';      //1.2首页--新闻--新闻详情页--评论
import SearchGetprodlist from './components/search/SearchGetprodlist.vue';//1.3首页--搜索
import GetImgcategory from './components/Share/GetImgcategory.vue';       //1.1首页--图片列表
import GetImages from './components/Share/GetImages.vue';                 //1.1首页--图片列表--图片详情
//通过Vue使用路由（手动安装）
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    routes:[//匹配路由规则
       {path:'/',redirect:'/home'},                     //0.默认
       {path:'/home',component:HomeContainer},          //1.首页
       {path:'/shopcart',component:ShopcartContainer},  //2.购物车
       {path:'/mytaobao',component:MytbContainer},      //3.我的淘宝
       {path:'/home/goodslist',component:GoodsList},    //1.1首页--天猫--商品列表页
       {path:'/home/goodsinfo/:id',component:GoodsInfo},//1.1首页--天猫--商品详情页
       {path:'/home/newslist',component:NewsList},      //1.2首页--新闻--新闻列表页
       {path:'/home/newsinfo/:id',component:NewsInfo},   //1.2首页--新闻--新闻详情页
       {path:'/home/newsgetcomments/:id',component:NewsGetcomments},//1.2.1首页--新闻--新闻详情页--评论页
       {path:'/home/searchgetprodlist',component:SearchGetprodlist},//1.3首页--搜索
       {path:'/home/getimgcategory',component:GetImgcategory},    //1.1首页--图片列表
       {path:'/home/getimages/:id',component:GetImages},    //1.1首页--图片列表--图片详情
    ],
    linkActiveClass:'mui-active'
})
//暴露路由
export default router