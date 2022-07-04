<template>
  <div class="order">
    <section>
      <div class="path">
        <h3 class="pathtitle">收货信息:</h3>
        <!-- 选择收货地址弹出框的设置 -->
        <van-cell
          is-link
          @click="showPopupinfo"
          class="topay"
          v-model="choiceaddressinfo"
          >选择地址
          <!-- 选择好的信息填充位置 -->
          <ul>
            <li>
              <span
                >{{ province }} {{ country }} {{ city }}
                {{ addressDetail }}</span
              >
            </li>
            <li>
              <span>{{ name }}</span>
              <span>{{ tel }}</span>
            </li>
          </ul>
        </van-cell>
        <!-- 收货信息弹框的内容 列表渲染 -->
        <van-popup
          id="vanpopup"
          v-model="showinfo"
          closeable
          close-icon-position="top-left"
          position="bottom"
          :style="{ height: '70%' }"
        >
          <ul class="userinfolist">
            <li
              v-for="item in addressList"
              :key="item.id"
              @click="useaddress(item._id)"
              style="
                margin-top: 40px;
                margin-left: 20px;
                border-bottom: 1px solid lightgray;
                padding-bottom: 10px;
              "
            >
              <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              <div>
                <span class="name" style="font-size: 20px">{{
                  item.name
                }}</span>
                <span class="tel" style="color: gray">{{ item.tel }}</span>
              </div>
              <div>
                <span class="active" v-if="item.isDefault == 1">[默认]</span>
                <span
                  >{{ item.province }} {{ item.city }} {{ item.country
                  }}{{ item.addressDetail }}</span
                >
              </div>
            </li>
          </ul>

          <!-- <div class="addpath" @click="golist">添加地址</div> -->
        </van-popup>
        <!-- </div> -->
        <!-- 添加地址 -->
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
                <span>×{{ number }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h4 style="margin-left: 10px">备注</h4>
      <div class="mui-input-row" style="margin: 10px 5px">
        <textarea
          id="textarea"
          rows="5"
          placeholder="选填，请先和商家协商一致，付款后商家可见"
        ></textarea>
      </div>
    </section>
    <!-- 底部 提交订单 -->
    <footer>
      <div class="total">
        <span>共</span>
        <b>1</b>
        <span>件,</span>
        <span>总金额:</span>
        <em>￥{{ sum }}</em>
      </div>

      <van-cell is-link @click="showPopup" class="topay">提交订单</van-cell>
      <van-popup
        id="vanpopup"
        v-model="show"
        closeable
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '60%' }"
      >
        <ul>
          <li class="paymentprice">￥{{ price }}</li>
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
import mui from "../../lib/mui/js/mui.js";

import { Toast } from "mint-ui";
import VDistpicker from "v-distpicker";
export default {
  components: { VDistpicker },

  data() {
    return {
      addaddress: false,
      choiceaddressinfo: "", //收货信息位置
      addressList: [],
      showinfo: false,

      sum: "",
      number: "",
      showmima: "false",
      value: "",
      errorInfo: "",
      showKeyboard: true,
      show: false,

      name: "",
      tel: "",
      province: "",
      country: "",
      city: "",
      addressDeatail: "",
      addInp: false,
      mask: false,
      title: "",
      price: "",
      img: "",

      sheetVisible: false,
      actions: [],
    };
  },
  // meta: {
  //   keepAlive: true, //为需要缓存的组件
  //   isBack: false, //标识是否是从地址页面反面的
  // },
  // beforeRouteEnter(to, from, next) {
  //   if (from.path == "/pathindex") {
  //     to.meta.isBack = true;
  //   } else {
  //     to.meta.isBack = false;
  //   }
  //   next();
  // },
  created() {
    this.getaddress(); //收货人信息
    this.gotopayment();
    this.getaddressinfo();
    this.number = localStorage.getItem("number");
    this.sum = localStorage.getItem("sum");
  },
  mounted() {
    // mui('body').on('tap', '.mui-popover-action li>a', function() {
    // 			var a = this,
    // 				parent;
    // 			//根据点击按钮，反推当前是哪个actionsheet,一直推到actionsheet节点为止,parent为#delete/#forward/#picture,目的是找到这个actionsheet,接下来进行显示和隐藏操作
    // 			for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
    // 				// 循环到#delete/#forward/#picture节点时,退出循环
    // 				if (parent.classList.contains('mui-popover-action')) {
    // 					break;
    // 				}
    // 			}
    // 			//关闭actionsheet,显示和隐藏操作
    // 			mui('#' + parent.id).popover('toggle');
    // 		})
  },
  //  watch: {
  //   value(value) {
  //     if (value.length === 6 && value !== '123456') {
  //       this.errorInfo = '密码错误';
  //     } else {
  //       this.errorInfo = '';
  //     }
  //   },
  // },
  activated() {
    if (!this.$route.meta.isBack) {
      this.gotopayment();
    }
    this.$route.meta.isBack = false;
  },
  methods: {
    //收货信息的点击事件
    showPopupinfo() {
      this.showinfo = true;
    },
    // 购物者列表获取
    getaddressinfo() {
      this.$http

        .get("shopinfo/info/" + "?id=" + this.$route.params.id)
        .then((result) => {
          console.log(result.body);
          this.name = result.body.name;
          this.tel = result.body.tel;
          this.province = result.body.province;
          this.province = result.body.province;
          this.country = result.body.country;
          this.city = result.body.city;
          this.addressDetail = result.body.addressDetail;
        })
        .catch((err) => {});
    },
    // 收货信息的遍历
    getaddress() {
      this.$http
        .get("shopinfo")
        .then((result) => {
          console.log(result.body);

          this.addressList = result.body;
        })
        .catch((err) => {});
    },

    // 添加地址按钮
    golist() {
      // this.$router.push({
      //   name: "pathlist",
      // });
      this.addaddress = true;
    },
    // 点击使用地址的事件
    useaddress(id) {
      this.show = false;
      this.$http
        .get("shopinfo/info/", { params: { id: id } })
        .then((result) => {
          console.log(result.body);
          this.name = result.body.name;
          this.tel = result.body.tel;
          this.province = result.body.province;
          this.province = result.body.province;
          this.country = result.body.country;
          this.city = result.body.city;
          this.addressDetail = result.body.addressDetail;
        })
        .catch((err) => {});
      this.showinfo = false;
    },
    // 删除
    deleteaddress(pid) {
      this.$http
        .get("shopinfo/delete", { params: { id: pid } })
        .then((result) => {
          this.addressList = result.body;
        })
        .catch((err) => {});
      this.showinfo = false;
    },
    // 底部 提交订单按钮事件
    showPopup() {
      this.show = true;
    },
    //  点击确认付款的事件
    paymentok() {
      // this.showmima = !this.showmima;
      // this.show2 = !this.show2;

      Toast("付款成功");
      this.show = false;
    },

    showPop() {
      mui("#sheet1").popover("toggle");
    },
    sel(data) {
      console.log(data); //使用value值
    },
    choose() {
      this.show = !this.show;
    },
    onChangeProvince(a) {
      console.log(a);
      this.txt1 = a.value + "-";
    },
    onChangeCity(a) {
      console.log(a);
      this.txt2 = a.value + "-";
    },
    onChangeArea(a) {
      console.log(a);
      this.txt3 = a.value;
      this.show = false;
    },

    onValuesChange(picker, values) {
      console.log(picker);
      console.log(values);
      this.shengshi = picker.getValues()[0];
      this.quyu = picker.getValues()[1];
    },
    // 商品的列表
    gotopayment() {
      this.$http
        .get("products/order/" + "?id=" + this.$route.params.id)
        .then((result) => {
          console.log(result.body);

          this.title = result.body.Title;
          this.price = result.body.Price;
          this.img = result.body.Img;
          console.log(this.$route.params.id);
        })
        .catch((err) => {});
      localStorage.setItem("orderId", JSON.stringify(this.$route.params.id)); //存储到浏览器中
      localStorage.setItem("123", JSON.stringify(this.$route.params.id)); //存储到浏览器中
    },
  },
};
</script>
<style lang="scss" scoped>
.order {
  margin-top: 40px;
}
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
.paymentprice {
  height: 100px;
  font-size: 46px;
  text-align: center;
  margin-top: 50px;
}
.paymentphone {
  border-bottom: 1px solid lightgray;
  padding: 8px 0;
}
.paymentphone span {
  display: inline-block;
}
.paymentphone span:first-child {
  color: gray;
  margin-left: 10px;
}
.paymentphone span:last-child {
  float: right;
  margin-right: 16px;
}
.paymentcard {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 13px 0;
}
.paymentcard span:first-child {
  margin-left: 10px;
}
.paymentcard span:last-child {
  float: right;
  margin-right: 16px;
}
.paymentok {
  width: 90%;
  margin-left: 19px;
  background-color: #007aff;
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 91px;
  height: 44px;
}

// 地址弹出框
.path {
  .useinfolist {
    padding: 20px;
    .userinfo {
      background-color: red;
      padding: 20px;
      border-bottom: 1px solid lightgray;
    }
  }
  .active {
    color: red;
  }
}
</style>
