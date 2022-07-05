<template>
    <div class="index">
        <!-- 头部 -->
     <div class="headerbox">
        <div class="header">
<span class="headertitle">爱宠之家</span>
<div class="headerico">
  <van-icon name="balance-list-o" size="30" color="#fff" style="margin-top:3px;margin-left:3px;" @click="gotoorder"/>
  <span style="color:#fff;">|</span>
  <van-icon name="location-o" size="30" color="#fff" @click="gotolocation" />
</div>
<div class="headerfin">
<span style="margin:10px 20px;">
    <van-icon name="like"  color="red" /> 
    <van-icon name="like" color="red" /> 
   <span class="fnnumber" style="color:#fff;" >粉丝数:2300</span> 
    </span>
</div>

        </div>
     </div>

        <!-- 导航条 及各部分内容 -->
        <div>   
   <div class="navlist">
    <van-tabs >
   <span class="search">
 <router-link to="/search">
   <van-icon name="search" size="40" />
            </router-link>
           </span>
  <van-tab title="首页">   
                <div class="goods">
<ul class="goodslist"  >
        <li v-for="item in GoodsList" :key="item.id">
          <router-link :to="'/productinfo/'+item._id">         
           <img :src="item.Img" />
            <span class="goodlisttitle">{{ item.Title }}</span>
            <span style="color: red">￥{{ item.Price }}</span>
            <span style="color: lightgray">销售量:{{ item.Quantity }}</span>
          </router-link>
        </li>
      </ul>
       </div>
  </van-tab>
  <van-tab title="宝贝">
  <div class="homepage">
 <img src="https://gw.alicdn.com/imgextra/i4/3435601808/O1CN01cSm2LI1PE6qIgrpkK_!!3435601808.jpg_790x10000Q75.jpg_.webp" alt="">
 <img src="https://gw.alicdn.com/imgextra/i4/3435601808/O1CN01AKncvP1PE6qVrZy3n_!!3435601808.jpg_790x10000Q75.jpg_.webp" alt="">
 <img src="https://gw.alicdn.com/imgextra/i3/3435601808/O1CN01ey9zp81PE6qVrXQ3u_!!3435601808.jpg_790x10000Q75.jpg_.webp" alt="">
      </div>
     
  </van-tab>
  <van-tab title="新品">

     <div class="new">
      <span>7月1日</span>
<img src="../../images/baobei01.png" alt="">
      <span>6月29日</span>
<img src="../../images/baobei02.png" alt="">
     <span>6月25日</span>
<img src="../../images/baobei03.png" alt="">

     </div>
  </van-tab>
  <van-tab title="超值">
          <div class="goods">
<ul class="goodslist"  >
        <li v-for="item in GoodsList" :key="item.id">
          <router-link :to="'/productinfo/'+item._id">
         

            <img :src="item.Img" />
            <span class="goodlisttitle">{{ item.Title }}</span>
            <span style="color: red">￥{{ item.Price }}</span>
            <span style="color: lightgray">销售量:{{ item.Quantity }}</span>
          </router-link>
        </li>
      </ul>
      </div>
  </van-tab>
</van-tabs>

   </div>
        </div>

       
    </div>

    
   
</template>
<script>
export default {
  name: "Goods",
  data() {
    return {
        
      GoodsList: [],
          showPopover: false,
    
    };
  },
created() {
  this.getproductslist()
},

  methods: {
    getproductslist() {
      this.$http
        .get("products")
        .then((result) => {
          console.log(result.body);

          this.GoodsList = result.body;
        })
        .catch((err) => {});
    },
//    onSelect(action) {
// if(action[0].text=='我的地址'){
// this.$router.push('/path')
// }else if(action[1].text=='我的订单'){
// this.$router.push('/myorder')

// }
  
//     }
gotoorder(){
  this.$router.push('/path/myorder')
},
gotolocation(){
  this.$router.push('/path')
}
    
 
    
  },
};
</script>
<style lang="scss" >
    .index{
        margin-top: 40px;
        
     height:100%;
            width:100%;
  background: url(../../images/shopinfo.png) no-repeat fixed ;
// background-repeat:no-repeat left top;
            background-size: cover;
            // background-attachment: fixed; 
    }
  
    // 头部
    .header{
    //  position: fixed;
        margin-top: 20px;
        margin-left: 10px;
        padding: 20px 0;
        .headertitle{
font-size: 28px;
color: #fff;
        }
.headerico{
    display: inline-block;
 
    margin-left: 187px;
    border: 1px solid #fff;
    border-radius: 20px;
    height: 36px;
    width: 79px;
}

    }
   
    // 搜索按钮
    .search{
        display: inline-block;
        // margin-top:10px;
            top: 3px;
    position: absolute;
    }
    // top列表
    .van-tabs__nav--line{
        width: 84%;
        margin-left: 54px;
        border-radius: 20px;
    }
    .van-tab--active {
   
    font-weight: 500;
    font-size: 20px;
    color: lightblue;
    }
    .van-tabs--line .van-tabs__wrap {
    height: 44px;
    margin-bottom: 15px;
    margin-top: 35px;
}
    .goods{
        margin-top: 20px;
          ul {
    margin: 0 10px 300px 12px;
    li {
     display: inline-block;
      width: 190px;
      background-color: snow;
      box-shadow: 0px 0px 5px 0px #aaa;
      border-radius: 10px;
      margin-bottom: 20px;
      margin-right: 5px;
      overflow: auto;

      img {
        width: 190px;
        height: 100%;
        border-radius: 10px 10px 0 0;
      }
      span {
        display: inline-block;
        line-height: 35px;
        height: 35px;
        text-align: center;
        width: 190px;
        color: black;
      }
    }
    
  }

    }
    .homepage{
      img{
        height: 100%;
        width: 100%;
        padding: 10px 5px;
      }
    }
    .new{
      img{
         height: 100%;
        width: 100%;
        padding: 10px 5px;
      }
      span{
        color: gray;
     
    margin-left: 10px;
    font-size: 22px;
   
    margin-top: 10px;

      }
    }
    .main {
  input{
    width: 90%;
  }
  .search-btn{
display: inline-block;
color: #f1b0aa;
  }
  .mainTitle {
    padding-top: 50px;
    margin-bottom: 35px;
    display: inline-block;
    font-size: 26px;
    color: #f1b0aa;
    line-height: 50px;
  }
  ul {
    margin: 0 10px 300px 12px;
    li {
     display: inline-block;
      width: 190px;
      background-color: snow;
      box-shadow: 0px 0px 5px 0px #aaa;
      border-radius: 10px;
      margin-bottom: 20px;
      margin-right: 5px;
      overflow: auto;

      img {
        width: 190px;
        height: 100%;
        border-radius: 10px 10px 0 0;
      }
      span {
        display: inline-block;
        line-height: 35px;
        height: 35px;
        text-align: center;
        width: 190px;
        color: black;
      }
    }
    
  }
}
.goodslist{
  height: 200px;
}
.goodlisttitle{
  overflow: hidden;
  text-overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
