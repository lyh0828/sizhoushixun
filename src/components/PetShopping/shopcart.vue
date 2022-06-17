<template>
  <div class="shopcart" style="position: relatives;margin-top:40px;">
    <div class="background">
      <div class="title">
        <!-- <img src="../../images/shopcart.jpg" style="width:30%;"  alt=""> -->
        <span style="font-size: 26px">购物车</span>
        <span class="iconfont icon-gouwuchekong gouwuche"> </span>
      </div>
    </div>
    <div class="mui-card">
      <form class="mui-input-group">
        <div class="mui-input-row mui-radio mui-left" style="height: 140px">
          <label>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                  <img
                    class="mui-media-object mui-pull-left"
                    src="../../images/cat01.png"
                  />
                  <div class="mui-media-body">
                    <p class="mui-ellipsis">
                      伟嘉 海洋鱼味妙鲜包 成猫 85g*12袋
                    </p>
                    <p style="font-size:20px; color:rgb(38, 162, 255);padding-top:10px;">￥34.90</p>
                  </div>
                </a>
              </li>
            </ul>
          </label>
          <input name="radio1" type="radio" checked />
          <div class="mui-card">
            <form class="mui-input-group">
              <div class="mui-input-row">
                <div class="mui-numbox">
                  <button
                    class="mui-btn mui-btn-numbox-minus"
                    type="button"
                    @click="subtraction"
                  >
                    -
                  </button>
                  <input
                    class="mui-input-numbox"
                    type="number"
                    :value="value"
                  />
                  <button
                    class="mui-btn mui-btn-numbox-plus"
                    type="button"
                    @click="add"
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>

    <div class="mui-bar mui-bar-tab quanxuan" style="margin-bottom: 50px ">
      <div class="mui-content">
        <div class="mui-card">
          <form class="mui-input-group">
            <div class="mui-input-row mui-radio mui-left">
              <label style="display:inline;font-size:16px;padding-right:69px; line-height:40px;">全选</label>
              <span
                >合计：
                <span> ￥34.90</span>
              </span>
              <button style="width:130px; background-color:rgb(38, 162, 255);height: 100%;
    border-radius: 10px;">结算（1）</button>
              <input name="radio1" type="radio" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
    };
  },

  methods: {
    add() {
      this.value += 1;
    },
    subtraction() {
      if (this.value > 1) {
        this.value -= 1;
      } else {
        this.value == 1;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.background {
  width: 100%;
  height: 50px;
  background-color: rgb(38, 162, 255);
  // background-image: url(../../images/shopcart.jpg);
  border-radius: 0 0 45px 45px;
}
.title {
  width: 100%;
  height: 70px;
  color: #fff;
  position: absolute;
  margin-top: 20px;
  span {
    padding: 30px;
    font-size: 20px;
  }
  .icon-gouwuchekong:before {
    content: "\e600";
    margin-left: 181px;
  }
}
/* .mui-input-group .mui-input-row {
    height: 200px;
} */
</style>
