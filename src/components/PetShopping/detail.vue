<template>
  <div class="order">
    <section>
      <div class="path">
        <h3 class="pathtitle">收货信息:</h3>
        <div class="pathcontent" @click="onEdit">
   <ul>
    <li>
      <span>{{province}} {{country}} {{city}} {{addressDetail}}</span>
      </li>
<li>
  <span>{{name}}</span>
  <span>{{tel}}</span>
</li>
   </ul>
          <!-- <van-contact-card
  type="edit"
  v-model="info"
  @click="onEdit"
/> -->
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="payment">
        <div class="paymenttitle">支付方式:</div>
        <div class="mui-card">
          <form class="mui-input-group">
            <div class="mui-input-row mui-radio mui-left">
              <label>微信支付</label>
              <input name="radio1" type="radio" />
            </div>
            <div class="mui-input-row mui-radio mui-left">
              <label>支付宝支付</label>
              <input name="radio1" type="radio" checked />
            </div>
            <div class="mui-input-row mui-radio mui-left">
              <label>货到付款</label>
              <input name="radio1" type="radio" checked />
            </div>
          </form>
        </div>
      </div>

    
      <!-- 商品信息部分 -->
      <div class="goods">
        <ul>
          <li>
            <div>
              <img :src="img" alt="" />
            </div>
            <div class="goodscontent">
              <h4>{{ title }}</h4>
              <div class="goodstotal">
                <span>￥{{ price }}</span>
                <span >×{{number}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 底部 提交订单 -->
    <footer>
      <div class="total">
        <span>共</span>
        <b>1</b>
        <span>件,</span>
        <span>总金额:</span>
        <em>￥{{sum}}</em>
      </div>

      <!-- <div class="topay">提交订单</div> -->
<van-cell is-link @click="showPopup" class="topay">提交订单</van-cell>
<van-popup id="vanpopup"
  v-model="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '60%' }"
>

<ul>

  <li class="paymentprice">
    ￥{{price}}
  </li>
<li class="paymentphone">
  <span>支付宝账号</span>
  <span>135******62</span>
</li>
<li class="paymentcard">
  <span> 交通银行储蓄卡(1234)</span>
  <span>></span>
 </li>

</ul>
<button class="paymentok" @click="paymentok">确认付款</button>
</van-popup>
 
    </footer>
    
  
  </div>
  
</template>
<script>
import mui from '../../lib/mui/js/mui.js'


import { Toast } from 'mint-ui';
import VDistpicker from "v-distpicker";
export default {
  components: { VDistpicker },

  data() {
    return {
      idd:'',
      sum:"",
      number:'',
      showmima:'false',
         value: '',
      errorInfo: '',
      showKeyboard: true,
      show: false,
      info:"张三 1352233443213",
  name:'',
  tel:'',
  province:"",
  country:"",
  city:"",
  addressDeatail:"",
      addInp: false,
      mask: false,
      title: "",
      price: "",
      img: "",
      shengshi: "",
      quyu: "",
      sheetVisible: false,
       actions: [],
          currentContact: {
        name: '张三',
        tel: '13000000000',
      },
    };
  },
  meta:{
keepAlive:true,  //为需要缓存的组件
isBack:false  //标识是否是从地址页面反面的
  },
  beforeRouteEnter (to, from, next) {
  if(from.path=="/pathindex"){
to.meta.isBack=true
  }else{
    to.meta.isBack=false
  }
  next()
  },
  created() {
    this.gotopayment();
    this. getaddressinfo();
    this.number=localStorage.getItem('number');
    this.sum=localStorage.getItem('sum');
    this.idd=localStorage.getItem('123');


  },
   mounted() {

   },

 activated() {
  if(!this.$route.meta.isBack){
   this.gotopayment();
  }
  this.$route.meta.isBack=false
 },
  methods: {
        // 购物者列表获取
    getaddressinfo() {
      this.$http

        .get("shopinfo/info/" + '?id='+this.$route.params.id)
        .then((result) => {
          console.log(result.body)
         this.name=result.body.name;
         this.tel=result.body.tel;
         this.province=result.body.province;
         this.province=result.body.province;
         this.country=result.body.country;
         this.city=result.body.city;
         this.addressDetail=result.body.addressDetail;
  //  console.log(this.$route.params.id)

        })
        .catch((err) => {});
    },
        showPopup() {
      this.show = true;
    },
    onEdit() {
     this.$router.push('/path')
    },
    paymentok(){
        // this.showmima = !this.showmima;
	// this.show2 = !this.show2;               
   Toast('付款成功');
    },
 
      showPop(){
  mui('#sheet1').popover('toggle');
    },
    sel(data) {
      console.log(data); //使用value值
    },
    choose() {
      this.show = !this.show;
    },

    // 商品的列表
    gotopayment() {
      this.$http
        .get("products/order/" + "?id="+ this.idd )
        .then((result) => {
          console.log(result.body);

          this.title = result.body.Title;
          this.price = result.body.Price;
          this.img = result.body.Img;
        })
        .catch((err) => {});
      // localStorage.setItem("orderId", JSON.stringify( this.$route.params.id)); //存储到浏览器中

    },
   
	
	
	

  },
};
</script>
<style lang="scss">
// .order {
//   margin-top: 40px;
// }
// 提交订单按钮样式

section {
  background-color: #f7f7f7;
  .pathtitle {
    padding: 18px;
    font-size: 18px;
  }
}
.pathcontent {
  padding: 0 15px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 15px;
  div {
    padding-top: 10px;
  }
  span {
    padding-right: 6px;
  }
}
.mui-navigate-right p {
  display: inline-block;
}
// 支付方式样式
.payment {
  padding: 15px;
  margin-top: 15px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 15px;
}
.mui-input-group {
  display: flex;
}
.mui-radio.mui-left label,
.mui-checkbox.mui-left label {
  line-height: 16px;
  font-size: 14px;
  padding-right: 11px;
  padding-left: 46px;
}
// 信息框
.mui-navigate-right {
  display: -webkit-inline-flex;
}
	span.mui-icon {
				font-size: 14px;
				color: #007aff;
				margin-left: -15px;
				padding-right: 10px;
  }
// 商品信息样式
.goods {
  padding: 0.16rem 0.4rem;
  margin-top: 10px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 15px;
  ul {
    width: 100%;
    li {
      display: flex;
      width: 100%;

      img {
        width: 74px;
        height: 74px;
      }
      .goodscontent {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15px;
        h4 {
          font-size: 14px;
          font-weight: 400;
          padding: 10px;
          color: gray;
        }
        .goodstotal {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
.pathgoods {
  padding: 10px;
}

// 底部样式
footer {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  position: fixed;
  bottom: 51px;
  border-top: 1px solid #ccc;
  .total {
    font-size: 16px;
    span {
      padding: 0 6px;
    }
    b {
      color: #b0351f;
    }
    em {
      font-size: 18px;
      color: #b0351f;
    }
  }
  .topay {
    width: 120px;
   
    color: #fff;
    text-align: center;
    font-size: 14px;
    background-color: rgb(38, 162, 255);
  }
}
.mint-button--normal {
  background-color: rgb(38, 162, 255);
}
.pwrap {
  height: 400px;

  overflow-y: auto;

  position: fixed;

  left: 0;

  bottom: 0;

  width: 100%;
}

.pwrap >>> .distpicker-address-wrapper {
  color: #999;
}

.pwrap >>> .address-header {
  position: fixed;

  bottom: 400px;

  width: 100%;

  background: #000;

  color: #fff;
}

.pwrap >>> .address-header ul li {
  flex-grow: 1;

  text-align: center;
}

.pwrap >>> .address-header .active {
  color: #fff;

  border-bottom: #666 solid 8px;
}

.pwrap >>> .address-container .active {
  color: #000;
}
p {
  text-indent: 22px;
}
span.mui-icon {
  font-size: 14px;
  color: #007aff;
  margin-left: -15px;
  padding-right: 10px;
}
#info {
  padding: 20px 10px;
}

// 提交订单弹出框样式
.paymentprice{
  height: 100px;
  font-size: 46px;
  text-align: center;
  margin-top:50px;

}
.paymentphone{
 border-bottom: 1px solid lightgray;
 padding: 8px 0;
}
.paymentphone span {
 display: inline-block;

}
.paymentphone span:first-child{
  color: gray;
 margin-left: 10px;
}
.paymentphone span:last-child{
  float: right;
  margin-right: 16px;

}
.paymentcard{
   display: inline-block;
width: 100%;
 border-bottom: 1px solid lightgray;
 padding: 13px 0;
}
.paymentcard span:first-child{
margin-left: 10px;
}
.paymentcard span:last-child{
    float: right;
  margin-right: 16px;
}
.paymentok{
    width: 90%;
    margin-left: 19px;
    background-color: #007aff;
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin-top: 91px;
    height: 44px;
}
</style>
