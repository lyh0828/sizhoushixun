<template>
  <div class="myorder">
    <div><h4>我的订单</h4></div>
    <van-tabs v-model="activeName">
      <!-- 待付款 -->
      <van-tab title="待付款" name="a">
        <div class="waitpay">
          <div class="waitl">
            <span style="font-size: 26px; font-weight: 700">等待买家付款</span>
            <van-count-down
              :time="time"
              format=" HH 时 mm 分 ss 秒"
              auto-start
              style="color: gray; padding: 10px"
            />
            <!-- <span style="display:block;color:gray;padding:10px;">剩23小时59分自动关闭</span> -->
          </div>
          <div class="payaddress">
            <van-icon
              name="location"
              color="red"
              style="margin-top: 10px; margin-left: 10px"
              size="30"
            />
            <span style="margin-top: 10px; display: block; margin-left: 20px"
              >刘双双 134223244555</span
            >
            <span style="display: block; padding: 10px; margin-left: 20px"
              >天津市 东丽区</span
            >
          </div>
          <div class="orderid">
            <span style="margin-left: 20px; margin-top: 10px">订单编号：</span>
            <input
              type="text"
              v-model="orderid"
              style="border: none; width: 70%; text-align: right"
            />
            <!-- <span style="position:absolute; right:10px;" >{{orderid}}</span> -->
            <div class="jiaoyi">
              <span style="margin-left: 20px">交易快照</span>
              <span style="color: gray; right: 10px; position: absolute"
                >发生交易争议时，可作为判断依据</span
              >
            </div>
          </div>
          <div class="paymentbtn">
            <button>修改地址</button>
            <button>继续付款</button>
          </div>
        </div>
      </van-tab>
      <!-- 待发货 -->
      <van-tab title="待发货" name="b">
        <div class="waittake">
          <span class="takel">
            <van-icon name="shop-o" dot />
            小壹旗舰店 >
          </span>
          <span class="taker">卖家已付款</span>
          <van-card
            num="1"
            price="39.80"
            desc="2.8kg/袋，科学混比，可直冲厕所"
            title="小壹混合猫砂膨润土豆腐砂可冲马桶去味抗菌除臭无尘20斤猫咪用品"
            thumb="https://img.alicdn.com/imgextra/i1/737500034/O1CN01nXIQkI1C7cDXRX47w_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
          >
            <template #tags>
              <van-tag plain type="danger">07月01日 17：46前发货</van-tag>
            </template>

            <template #footer>
              <van-button size="mini">提醒发货</van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
      <!-- 待收货 -->
      <van-tab title="待收货" name="c">
        <div class="waittake">
          <span class="takel">
            <van-icon name="shop-o" dot />
            小壹旗舰店 >
          </span>
          <span class="taker">卖家已发货</span>
          <van-card
            num="1"
            price="39.80"
            desc="2.8kg/袋，科学混比，可直冲厕所"
            title="小壹混合猫砂膨润土豆腐砂可冲马桶去味抗菌除臭无尘20斤猫咪用品"
            thumb="https://img.alicdn.com/imgextra/i1/737500034/O1CN01nXIQkI1C7cDXRX47w_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
          >
            <template #tags>
              <van-tag plain type="danger">07月01日 17：46前发货</van-tag>
            </template>

            <template #footer>
              <van-button size="mini">延长收货</van-button>
              <van-button size="mini" @click="showPopup">查看物流</van-button>
              <van-button size="mini" class="oktake">确认收货</van-button>
            </template>
          </van-card>
        </div>
        <div class="waittake">
          <span class="takel">
            <van-icon name="shop-o" dot />
            喜多多宠物精品 >
          </span>
          <span class="taker">卖家已发货</span>
          <van-card
            num="1"
            price="29.80"
            desc="可爱日系甜美猫咪宠物用品衣服"
            title="牵引绳蝴蝶结胸背带狗狗遛狗神器"
            thumb="https://img.alicdn.com/imgextra/i1/1913300048/O1CN01k4nvcy1CE1iGMvczD_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
          >
            <template #tags>
              <van-tag plain type="danger">06月29日 20：46前发货</van-tag>
            </template>

            <template #footer>
              <van-button size="mini">延长收货</van-button>
              <van-button size="mini" @click="showPopup">查看物流</van-button>
              <van-button size="mini" class="oktake">确认收货</van-button>
            </template>
          </van-card>
        </div>
        <div class="waittake">
          <span class="takel">
            <van-icon name="shop-o" dot />
            小壹旗舰店 >
          </span>
          <span class="taker">卖家已发货</span>
          <van-card
            num="1"
            price="39.80"
            desc="2.8kg/袋，科学混比，可直冲厕所"
            title="小壹混合猫砂膨润土豆腐砂可冲马桶去味抗菌除臭无尘20斤猫咪用品"
            thumb="https://img.alicdn.com/imgextra/i1/737500034/O1CN01nXIQkI1C7cDXRX47w_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
          >
            <template #tags>
              <van-tag plain type="danger">07月01日 17：46前发货</van-tag>
            </template>
            <template>
              <div class="payment">
                <span class="paymentl">含运费险服务</span>
                <span class="paymentr">实付款￥39.80</span>
              </div>
            </template>

            <template #footer>
              <van-button size="mini">延长收货</van-button>
              <van-button size="mini" @click="showPopup">查看物流</van-button>
              <van-button size="mini" class="oktake">确认收货</van-button>
            </template>
          </van-card>
        </div>
        <div class="waittake">
          <span class="takel">
            <van-icon name="shop-o" dot />
            猫狗用品店AC >
          </span>
          <span class="taker">卖家已发货</span>
          <van-card
            num="1"
            price="129.80"
            desc=" 3元店铺优惠券"
            title="猫窝冬季保暖猫咪床房子型狗屋四季通用可拆洗幼猫封闭式宠物用品"
            thumb="https://img.alicdn.com/imgextra/i2/32046475/O1CN01t6hCtL1xhbF2ipPjY_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
          >
            <template #tags>
              <van-tag plain type="danger">06月25日 21：00前发货</van-tag>
            </template>

            <template #footer>
              <van-button size="mini">延长收货</van-button>
              <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

              <van-popup
                v-model="show"
                closeable
                position="bottom"
                :style="{ height: '90%' }"
              >
                <!-- 百度地图 -->
                <baidu-map
                  class="map bm-view"
                  @ready="handler"
                  :center="center"
                  :zoom="15"
                  :map-click="false"
                  ak="iR8dSw5MMixdYGoXYlf84pjeizKNkIwF"
                >
                  <div>
                    <bm-marker
                      :dragging="true"
                      animation="BMAP_ANIMATION_BOUNCE"
                      :position="center"
                      @dragend="dragend"
                    ></bm-marker>
                  </div>
                </baidu-map>

                <van-steps direction="vertical" :active="0">
                  <van-step>
                    <h4>快件离开天津中转部已发往天津东丽无暇街</h4>
                    <p>202207-02 01:54</p>
                  </van-step>
                  <van-step>
                    <h4>快件已到达天津中转部</h4>
                    <p>2022-06-30 23:40</p>
                  </van-step>
                  <van-step>
                    <h4>快件已到达义乌中专部</h4>
                    <p>2022-07-01 00:39</p>
                  </van-step>
                  <van-step>
                    <h4>快件离开义乌苏溪已发往天津中转部</h4>
                    <p>2022-06-30 23:40</p>
                  </van-step>
                  <van-step>
                    <h4>包裹正在等待揽收</h4>
                    <p>2022-06-30 10:00</p>
                  </van-step>
                  <van-step>
                    <h4>商品已经下单</h4>
                    <p>2022-06-29 09:30</p>
                  </van-step>
                </van-steps>
              </van-popup>
              <van-button size="mini" @click="showPopup">查看物流</van-button>
              <van-button size="mini" class="oktake">确认收货</van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citylocation: "",
      show: false,
      autoLocationPoint: { lng: 0, lat: 0 },
      initLocation: false,
      center: { lng: 0, lat: 0 },
      zoom: 15,
      activeName: "a",
      month: "",
      day: "",
      hour: "",
      minutes: "",
      seconds: "",
      orderid: "",
      time: 24 * 60 * 60 * 1000,
    };
  },
  created() {
    this.randomNumber();
  },
  methods: {
    // 百度地图的方法
    handler: function ({ BMap, map }) {
      // var map=new BMap.Map("container")
      map.enableScrollWheelZoom(true); //开启滚轮缩放
      const hide = alert("是否允许进行定位", 0);
      const _this = this;
      console.log('11111')
      console.log(_this);
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function (r) {
          setTimeout(hide, 1000);
          console.log(r);
          _this.center = { lng: r.longitude, lat: r.latitude }; // 设置center属性值 获取经纬度
          // 自定义覆盖物
          _this.initLocation = true;
        },
        { enableHighAccuracy: true }
      );

      window.map = map;
      // 赋值，方便调用，本节被用到
      this.BMap = BMap;
      this.map = map;
    },

// 获取浏览器当前定位
// getCurlocation() { 
//             if (!this.BMap) return false
//             let BMap = this.BMap
//             let geolocation = new BMap.Geolocation()
//             let _this = this
//             geolocation.getCurrentPosition(function(r) {
//                 _this.map_center = r.point
//                 _this.shop_lng = r.point.lng
//                 _this.shop_lat = r.point.lat
               
//             })
//         },

    // 获取浏览器当前定位
    // getCurlocation() {
    //   if (!this.BMap) return false;
    //   let BMap = this.BMap;
    //   let geolocation = new BMap.Geolocation();
    //   let _this = this;
    //   geolocation.getCurrentPosition(function (r) {
    //     _this.map_center = r.point;
    //     _this.shop_lng = r.point.lng;
    //     _this.shop_lat = r.point.lat;
    //   });
    // },

    // 拖动结束后

    dragend(e) {
      this.position = e.point;
      const _this = this; 
    // 获取经纬度
      console.log(e.point);    
          // 获取经纬度
      console.log(this.position);
      // 创建地理编码实例
      const gc = new this.BMap.Geocoder();
      gc.getLocation(e.point, function (rs) {
          //  打印出拖拽后的地点,城市,区
        console.log(rs);

      

       _this.addr = rs.address;
      });
    },
    showPopup() {
      this.show = true;
    },
    randomNumber() {
      const now = new Date();
      this.month = now.getMonth() + 1;
      this.day = now.getDate();
      this.hour = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
      if (this.hour < 10) {
        this.hour ? "0" + this.hour : this.hour;
      }
      if (this.month < 10) {
        this.month ? "0" + this.month : this.month;
      }
      if (this.day < 10) {
        this.day ? "0" + this.day : this.day;
      }
      if (this.minutes < 10) {
        this.minutes ? "0" + this.minutes : this.minutes;
      }
      if (this.seconds < 10) {
        this.seconds ? "0" + this.seconds : this.seconds;
      }
      let orderCode =
        now.getFullYear().toString() +
        this.month +
        this.day +
        this.hour +
        this.minutes +
        this.seconds +
        Math.round(Math.random() * 1000000);
      this.orderid = orderCode;
    },
  },
};
</script>

<style lang='scss' scoped>
.myorder {
  margin-top: 40px;
  h4 {
    background-color: #fff;
    height: 100px;
    height: 49px;
    line-height: 49px;
    margin-bottom: 0;
    padding-left: 10px;
  }
}
.bm-view {
  width: 100%;
  height: 200px;
}
// 待收货列表
.waittake {
  margin: 0 0 20px 0;
  background-color: rgb(250, 250, 250);
  height: 210px;
  padding: 10px;
  .takel {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 700;
  }
  .taker {
    right: 21px;
    position: absolute;
    font-size: 16px;
    color: rgb(238, 10, 36);
  }
}
// 快递物流
.van-step--vertical {
  display: block;
  /* float: none; */
  padding: 10px 10px 10px 0;
  line-height: 18px;
  float: left;
  p {
    float: left;
  }
}
.van-card__title {
  max-height: 32px;
  font-weight: 700;
  line-height: 16px;
  font-size: 16px;
  margin-top: 5px;
  // letter-spacing: 1px;
  overflow: hidden;
  text-overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.van-card__footer .van-button {
  margin-left: 5px;
  width: 93px;
  height: 35px;
  border-radius: 20px;
  font-size: 15px;
  //  color:rgb(238, 10,36);
}
.oktake {
  color: rgb(238, 10, 36);
  border: 1px solid rgb(238, 10, 36);
}
.van-card__footer {
  margin-top: 25px;
  margin-right: -15px;
}

// 待付款
.waitpay {
  margin-top: 20px;
}
.payaddress {
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
}
.orderid {
  height: 128px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 12px;
}
.paymentbtn {
  float: right;
  margin-top: 10px;
  button {
    height: 45px;
    width: 108px;
    font-size: 16px;
    border-radius: 20px;
  }
}
.jiaoyi {
  margin-top: 20px;
}
</style>
