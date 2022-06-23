
<template>
  <div style="margin-top:45px;">
    <div class="wrapper">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <span style="font-weight: 700">品牌特卖</span>

          <a href="#">
            <img src="../../images/wrapper01.png" alt="" />
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <span style="font-weight: 700">小剧场</span>

          <a href="#">
            <img src="../../images/wrapper02.png" alt="" />
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <span style="font-weight: 700">萌爪联盟</span>

          <a href="#">
            <img src="../../images/wrapper03.png" alt="" />
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <span style="font-weight: 700">人气产品</span>

          <a href="#">
            <img src="../../images/wrapper04.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
    <div class="classify">
     <router-link to="/petproducts/goods">
     <h3> 用品小店铺</h3>
     </router-link>
    </div>
   
   <div class="wrapper2">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="/petproducts/catsnacks">
            <span class="iconfont icon-maoliang" style="color:rgb(247,153,159);">
              <span>猫咪主粮</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to=""> 
            <span class="iconfont icon-chongwumao" style="color:rgb(255,213,0);">
              <span>猫咪零食</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="/petproducts/catdaily">
            <span class="iconfont icon-chongwusheying" style="color:rgb(237,76,165);">
              <span>猫咪日用</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="/petproducts/cattoy">
            <span class="iconfont icon-chongwulianyi" style="color:rgb(255,95,95);">
              <span>猫咪玩具</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="">
            <span class="iconfont icon-xiedaichongwu" >
              <span>狗狗主粮</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <a href="#">
            <span class="iconfont icon-chongwuwanju" style="color:rgb(255,206,12);">
              <span>狗狗零食</span>
            </span>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="">
            <span class="iconfont icon-chongwu" style="color:rgb(71,167,221);">
              <span>狗狗日用</span>
            </span>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
          <router-link to="">
            <span class="iconfont icon-chongwujiyang" style="color:rgb(187,239,187);">
              <span>狗狗玩具</span>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

// import Classify from "../PetProducts/classify.vue";

export default {
  name: "Classify",
  data() {
    return {};
  },
  components: {
// Classify
  
  },
  created() {
    mui.init({
      swipeBack: true, //启用右滑关闭功能
    });
    var slider = mui("#slider");
    document.getElementById("switch").addEventListener("toggle", function (e) {
      if (e.detail.isActive) {
        slider.slider({
          interval: 5000,
        });
      } else {
        slider.slider({
          interval: 0,
        });
      }
    });
  },
};
</script>
<style lang="scss" >
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
}

.wrapper {
  background-color: #fff;
  margin: 10px 0 10px 0;

  background-image: radial-gradient(rgb(255, 244, 242), rgb(255, 255, 255));
}

.mui-table-view.mui-grid-view.mui-grid-9 {
  //   background-color: rgb(255, 244, 242);
  background-image: radial-gradient(rgb(255, 244, 242), rgb(255, 255, 255));

  background-image: radial-gradient(#fff4f2, #fff);
  border: none;
  border: 11px solid rgb(241, 176, 170);
  background-color: #fff;
  border-radius: 15px;

  margin-left: 1%;
  margin-right: 2%;
  width: 98%;
  li {
    // border: none;
    width: 50%;
    height: 90px;
    background-color: #fff;

    span {
      margin-left: -99px;
      color: #000;
      display: block;
      margin-top: -1px;
    }
  }

  img {
    width: 80px;

    height: 76px;
    margin-left: 76px;
    margin-top: -20px;
  }
}

.classify {
  background-color: #fff;
  width: 100%;
  height: 60px;
  h3 {
    color: black;
    letter-spacing: 6px;
    text-align: center;
    line-height: 60px;
  }
}
.wrapper2 {
  background-color: #fff;
  margin: 10px 0 10px 0;

  background-image: radial-gradient(rgb(255, 244, 242), rgb(255, 255, 255));
.mui-table-view.mui-grid-view.mui-grid-9 {
  //   background-color: rgb(255, 244, 242);
  background-image: radial-gradient(rgb(255, 244, 242), rgb(255, 255, 255));
  border: none;
  li {
   
    width: 47%;
    margin: 5px;
    height: 69px;
    margin-left: 5px;
    
    border-radius: 13px;

    span {
      position: relative;
      margin-left: -7px;
      font-size: 20px;
    }
  }

  img {
    width: 80px;
    height: 70px;
    // background-image: radial-gradient(rgb(255, 244, 242), rgb(255, 255, 255));
  }
}
}

</style>

