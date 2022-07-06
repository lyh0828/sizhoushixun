<template>
  <div style="margin-top: 45px">
    <div class="mui-card">
      <div class="mui-card-header mui-card-media" style="height: 40vw">
        <img :src="imginfo" style="width: 100%; height: 200%" />
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" style="font-size: 21px">
          <br />
          <p>此商品参与“潮礼抢先囤”活动</p>
          <p style="color: #333; padding-bottom: 10px">
            {{title }}
          </p>
          <p class="price">￥{{ price }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
<van-cell title="❤推荐" @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
 

        

     
        <router-link :to="'/petshopping/shopcart/'+id" class="mui-card-link" @click="addshopcart"
          >+加入购物车</router-link
        >
  
          <!-- <router-link @click="addtoshopcart(id)" class="mui-card-link"
          >+加入购物车</router-link
        > -->
      <!-- <span @click="addshopcart(this.img,this.title,this.price)">+加入购物车</span> -->
      </div>
    </div>

    <div class="mui-card" style="margin-bottom: 35px">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>选择</p>
            颜色分类
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>发货</p>
            江苏扬州 | 快递：免运费
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>保障</p>
            价保服务·假一赔四·退货运费险
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>配方</p>
            海洋鱼 鸡肉 鲜肝
          </a>
        </li>
      </ul>
    </div>
    <div class="mui-content">
      <div class="mui-content-padded">
        <img :src="img1" data-preview-src="" data-preview-group="1" />
        <img :src="img2" data-preview-src="" data-preview-group="1" />
        <img :src="img3" data-preview-src="" data-preview-group="1" />
      </div>
    </div>
    <div class="vantcss">
    <van-goods-action safe-area-inset-bottom='false'>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
     

      id:"",
      title: "",
      price: "",
      imginfo: "",
      img1: "",
      img2: "",
      img3: "",
      shopcartList:[],
        showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  created() {
    this.getgoodsinfo();
     //指的是要做分享的页面的url送过去，请求成功才能拿到
    let url = location.href.split('#')[0];
    this.$axios({
       url:'/use/shareurl',//请求微信分享的接口地址
       method:'post',
       data:url,
    }).then(res=>{
      if(res.data.success){
        //这些配置参数必填项，后面去调微信的pai是需要传的。
        this.appId = res.data.appId;
        this.timestamp = res.data.timestamp;
        this.noncstr = res.data.noncstr;
        this.signatureInfo = res.dacta.signatureInfo;
      }
    }).catch(err=>{console.log(err)})

  },
  methods: {
         onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    // 获取详情
    getgoodsinfo() {
      this.$http
        .get("products/info/" + '?id='+this.$route.params.id)
        .then((result) => {
          console.log(result.body)
          this.id=result.body._id;
          this.title = result.body.Title;
          this.price = result.body.Price;
          this.imginfo = result.body.ImgInfo;
          this.img1 = result.body.Img1;
          this.img2 = result.body.Img2;
          this.img3 = result.body.Img3;
        })
        .catch((err) => {});
    },
     onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  
   
     
      
         
       
 
  


  }
};
</script>

<style lang="less" scoped>
.mui-table-view-cell {
  p {
    color: gray;
    display: inline-block;
    padding-right: 15px;
  }
}
.mui-content-padded {
  img {
    width: 100%;
    margin-top: -6px;
    margin-bottom: 10px;
  }
}
.van-cell {
  width: 40%;
  color: rgb(66, 137, 255);
}
.price {
  font-size: 20px;
  color: red;
}
.vantcss{
  position: fixed;
  bottom: 30px;
}
</style>

