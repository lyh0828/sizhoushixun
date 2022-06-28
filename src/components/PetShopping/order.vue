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
             <span class="pathgoods">收货地址:{{shengshi}}  {{quyu}}</span>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
           
           
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
      <!-- 商品信息部分 -->
      <div class="goods">
        <ul>
          <li>
            <div>
              <img
                :src="img"
                alt=""
              />
            </div>
            <div class="goodscontent">
              <h4>{{title}}</h4>
               <div class="goodstotal">
              <span>￥{{price}}</span>
              <span>×1</span>
            </div>
            </div>
           
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <div class="total">
        <span>共</span>
        <b>1</b>
        <span>件,</span>
        <span>总金额:</span>
        <em>￥93.00</em>
      </div>
      <div class="topay">提交订单</div>
    </footer>
  </div>
</template>
<script>
// import mui from '../../lib/mui/js/mui.js'

export default {
  data() {
    return {
        title:"",
        price:"",
        img:"",
        shengshi:'',
        quyu :'',
          slots: [
        {
          flex: 1,
          values: ['广东', '上海', '江苏', '辽宁', '四川', '河北'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['广州', '深圳', '珠海', '汕头', '韶关', '佛山','沈阳', '大连', '鞍山', '南京', '苏州', '无锡','武汉', '黄石', '十堰', '成都', '攀枝花', '西安','铜川', '宝鸡', '石家庄', '唐山', '秦皇岛', '沧州'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  created() {
    this.gotopayment()
  },
  methods: {
   
    onValuesChange(picker, values) {
			console.log(picker)
			console.log(values)
         this.shengshi= picker.getValues()[0]
         this.quyu= picker.getValues()[1]

    },
       gotopayment() {
      this.$http
        .get("products/shopcart/" + '?id='+this.$route.params.id)
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
  span {
    padding-right: 6px;
  }
}
// 支付方式样式
.payment {
  padding: 15px;
  margin-top: 15px;
  font-size: 16px;
  background-color: #fff;
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
// 商品信息样式
.goods {
  padding: 0.16rem 0.4rem;
  margin-top: 10px;
  font-size: 16px;
  background-color: #fff;
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
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15px;
.goodstotal {
  display: flex;
  justify-content: space-between;
}
      }
    }
  }
}
.pathgoods{
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
</style>
