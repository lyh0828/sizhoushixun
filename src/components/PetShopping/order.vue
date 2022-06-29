<template>
  <div class="order">
    <section>
      <div class="path">
        <h3 class="pathtitle">收货信息:</h3>
        <div class="pathcontent">
          <div>
            <span>张三</span>
            <span>1332728190432</span>
          </div>
          <div>
              <div>
	      <button @click="choose" style="display:inline-block;">选择收货地址:</button>
	      <p style="display:inline-block;margin-top:-6px;"><span>{{txt1}}</span><span>{{txt2}}</span><span>{{txt3}}</span></p>
	      <p class="pwrap" v-if="show">
	        <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
	      </p>
	    </div>

            <!-- <v-distpicker hide-area @selected="sel" :province='province' :city='myaddress'></v-distpicker> -->

            <!-- <span @click="toAddress">{{ city }}</span> -->
            <!-- <span>收货地址：北京市朝阳区向阳小区十二号楼1门602</span> -->
            <!-- <span class="pathgoods">收货地址:{{shengshi}}  {{quyu}}</span>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->
          </div>
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

     
       <!-- <div class="mui-input-row" style="margin: 10px 5px">
            <textarea
              id="textarea"
              rows="5"
              placeholder="选填，请先和商家协商一致，付款后商家可见"
            ></textarea>
          </div> -->
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
                <span>×1</span>
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
        <em>￥{{ price }}</em>
      </div>
      <div class="topay">提交订单</div>
    </footer>
  </div>
</template>
<script>
// import mui from '../../lib/mui/js/mui.js'
import VDistpicker from "v-distpicker";
export default {
  components: { VDistpicker },

  data() {
    return {
        show:false,
        txt1:'',
        txt2:'',
        txt3:'',   
      city: "请选择",

      addInp: false,

      mask: false,
      title: "",
      price: "",
      img: "",
      shengshi: "",
      quyu: "",
      //     slots: [
      //   {
      //     flex: 1,
      //     values: ['广东', '上海', '江苏', '辽宁', '四川', '河北'],
      //     className: 'slot1',
      //     textAlign: 'right'
      //   }, {
      //     divider: true,
      //     content: '-',
      //     className: 'slot2'
      //   }, {
      //     flex: 1,
      //     values: ['广州', '深圳', '珠海', '汕头', '韶关', '佛山','沈阳', '大连', '鞍山', '南京', '苏州', '无锡','武汉', '黄石', '十堰', '成都', '攀枝花', '西安','铜川', '宝鸡', '石家庄', '唐山', '秦皇岛', '沧州'],
      //     className: 'slot3',
      //     textAlign: 'left'
      //   }
      // ]
    };
  },
  created() {
    this.gotopayment();
  },
  methods: {
    sel(data){
	console.log(data)   	//使用value值
},
 choose(){
        this.show=!this.show
      },
      onChangeProvince(a){
        console.log(a) 
        this.txt1 = a.value + '-'
      },    
      onChangeCity(a){
        console.log(a)    
        this.txt2 = a.value + '-'    
      },
      onChangeArea(a){
        console.log(a)  
        this.txt3 = a.value
        this.show=false
      }   ,   

   
    
    onValuesChange(picker, values) {
      console.log(picker);
      console.log(values);
      this.shengshi = picker.getValues()[0];
      this.quyu = picker.getValues()[1];
    },
    gotopayment() {
      this.$http
        .get("products/order/" + "?id=" + this.$route.params.id)
        .then((result) => {
          console.log(result.body);

          this.title = result.body.Title;
          this.price = result.body.Price;
          this.img = result.body.Img;
        })
        .catch((err) => {});
    },
  },
};
</script>
<style lang="scss">
.order {
  margin-top: 40px;
}
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
    line-height: 45px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    background-color: rgb(38, 162, 255);
  }
}
.pwrap{

    height: 400px;

    overflow-y: auto;

    position: fixed;

    left: 0;

    bottom: 0;

    width: 100%;

  }

  .pwrap>>>.distpicker-address-wrapper{

    color: #999;

  }

  .pwrap>>>.address-header{

    position: fixed;

    bottom: 400px;

    width: 100%;

    background: #000;

    color:#fff;

  }

  .pwrap>>>.address-header ul li{

    flex-grow: 1;

    text-align: center;

  }

  .pwrap>>>.address-header .active{

    color: #fff;

    border-bottom:#666 solid 8px

  }

  .pwrap>>>.address-container .active{

    color: #000;

  }

</style>
