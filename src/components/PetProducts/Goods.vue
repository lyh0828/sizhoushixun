<template>
  <div class="con">
    <div class="main">
      <p class="mainTitle"></p>
      <router-link  to="/search"
      >
        <input type="search" placeholder="搜索您喜欢的产品">
      <div class="search-btn" >🔍</div>
      </router-link>

 
 <ul class="goodslist"  >
        <li v-for="item in GoodsList" :key="item.id">
          <router-link :to="'/productinfo/'+item._id">
         

            <img :src="item.Img" />
            <span class="goodlisttitle">{{ item.Title }}</span>
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
  this.getproductslist()
},
 updated() {
    // console.log(this.$refs.Title.innerHTML)
    
 
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
  input{
    width: 90%;
  }
  .search-btn{
display: inline-block;
color: #f1b0aa;
  }
  .mainTitle {
    padding-top: 50px;
    margin-bottom: 35px;
    display: inline-block;
    font-size: 26px;
    color: #f1b0aa;
    line-height: 50px;
  }
  ul {
    margin: 0 10px 300px -30px;
    li {
     display: inline-block;
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
.goodslist{
  height: 200px;
}
.goodlisttitle{
  overflow: hidden;
  text-overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>


