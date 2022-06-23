<template>
  <div class="con">
    <div class="main">
      <p class="mainTitle">小店铺</p>
      <ul>
        <li v-for="item in GoodsList" :key="item.id">
          <router-link :to="'/productinfo/'+item._id">
           <!-- <router-link > -->

            <img :src="item.Img" />
            <span>{{ item.Title }}</span>
            <span style="color: red">￥{{ item.Price }}</span>
            <span style="color: lightgray">销售量:{{ item.Quantity }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goods",
  data() {
    return {
      GoodsList: [],
    };
  },
  created() {
    this.getproductslist();
  },
  methods: {
    getproductslist() {
      this.$http
        .get("products")
        .then((result) => {
          console.log(result.body);

          this.GoodsList = result.body;
        })
        .catch((err) => {});
    },
  },
};
</script>
<style lang="scss">
.coin {
  background-color: rgb(255, 230, 231);
}
.main {
  // background-color: rgb(255, 230, 231);

  .mainTitle {
    padding-top: 50px;
    margin-bottom: 35px;
    text-align: center;
    font-size: 33px;
    color: #3e1e07;
  }
  ul {
    margin: 0 10px 300px -30px;
    li {
      float: left;
      width: 190px;
      background-color: snow;
      box-shadow: 0px 0px 5px 0px #aaa;
      border-radius: 10px;
      margin-bottom: 20px;
      margin-right: 5px;
      overflow: auto;

      img {
        width: 190px;
        height: 100%;
        border-radius: 10px 10px 0 0;
      }
      span {
        display: inline-block;
        line-height: 35px;
        height: 35px;
        text-align: center;
        width: 190px;
        color: black;
      }
    }
  }
}
</style>