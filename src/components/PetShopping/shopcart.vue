<template>
  <div>
    <div class="background">
      <div class="title">
        <span style="font-size: 26px">购物车</span>
        <span>降价</span>
        <span>常购</span>
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
  height: 220px;
  background-color: rgb(241, 176, 170);
}
.title {
  width: 100%;
  height: 70px;
  color: #fff;
  position: absolute;
  margin-top: 20px;
  span {
    padding: 10px;
    font-size: 20px;
  }
}
/* .mui-input-group .mui-input-row {
    height: 200px;
} */
</style>
