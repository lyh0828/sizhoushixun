<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in goodsList" :key="item.id">
        <router-link :to="'/home/goodsinfo/' + item.id">
          <div class="mui-media-body">
            {{ item.title }}
            <img class="mui-media-object mui-pull-left" :src="item.img_url" />
            <p class="mui-ellipsis">
              <span>时间:{{ item.add_time }}</span><br />
              <span>摘要:{{ item.zhaiyao }}</span><br />
              <span>点击:{{ item.click }}</span><br />
              <span>销售价格:{{ item.sell_price }}</span><br />
              <span>市场价格:{{ item.market_price }}</span><br />
              <span>库存数量:{{ item.stock_quantity }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    //获取新闻列表数据的方法
    getgoodslist() {
      this.$http.get("api/getgoods?pageindex=number").then((result) => {
        console.log(result.body);
        if (result.body.status === 0) {
          this.goodsList = result.body.message;
        } else {
          console.log("数据加载失败！!");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    font-size: 12px;
    color: deepskyblue;
    display: flex;
    justify-content: space-between;
  }
  .mui-ellipsis{
      color: slateblue;
  }
}
</style>