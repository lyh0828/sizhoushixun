<template>
  <div style="margin-top: 45px">
    <div class="mui-card">
      <div class="mui-card-header mui-card-media" style="height: 40vw">
        <img :src="imginfo" style="width: 100%; height: 200%" />
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" style="font-size: 21px">
          <br />
          <p>此商品参与“潮礼抢先囤”活动</p>
          <p style="color: #333; padding-bottom: 10px">
            {{title }}
          </p>
          <p class="price">￥{{ price }}</p>
        </div>
      </div>
      <div class="mui-card-footer">

        <a class="mui-card-link">❤推荐</a>

        

     
        <router-link :to="'/petshopping/shopcart/'+id" class="mui-card-link"
          >+加入购物车</router-link
        >
      </div>
    </div>

    <div class="mui-card" style="margin-bottom: 35px">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>选择</p>
            颜色分类
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>发货</p>
            江苏扬州 | 快递：免运费
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>保障</p>
            价保服务·假一赔四·退货运费险
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <p>配方</p>
            海洋鱼 鸡肉 鲜肝
          </a>
        </li>
      </ul>
    </div>
    <div class="mui-content">
      <div class="mui-content-padded">
        <img :src="img1" data-preview-src="" data-preview-group="1" />
        <img :src="img2" data-preview-src="" data-preview-group="1" />
        <img :src="img3" data-preview-src="" data-preview-group="1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:"",
      title: "",
      price: "",
      imginfo: "",
      img1: "",
      img2: "",
      img3: "",
    };
  },
  created() {
    this.getgoodsinfo();
  },
  methods: {
    // 获取新闻列表数据的方法
    getgoodsinfo() {
      this.$http

        .get("products/info/" + '?id='+this.$route.params.id)

        

        .then((result) => {
          console.log(result.body)
          this.id=result.body._id;
          this.title = result.body.Title;
          this.price = result.body.Price;
          this.imginfo = result.body.ImgInfo;
          this.img1 = result.body.Img1;
          this.img2 = result.body.Img2;
          this.img3 = result.body.Img3;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="less" scoped>
.mui-table-view-cell {
  p {
    color: gray;
    display: inline-block;
    padding-right: 15px;
  }
}
.mui-content-padded {
  img {
    width: 100%;
    margin-top: -6px;
  }
}
.price {
  font-size: 20px;
  color: red;
}

</style>

