<template>
  <div class="searchlist">
    <div class="headers">
      <Header />

      <ul>
        <li
          v-for="(item, index) in headerList.data"
          :key="index"
          @click="changeTab(index)"
        >
          <div :class="headerList.currentIndex == index ? 'active' : ''">
            {{ item.name }}
          </div>
          <div class="search-filter" v-if="index != 0">
            <i
              class="iconfont icon-arrow_up_fat"
              :class="item.status == 1 ? 'active' : ''"
              @click="priceasc"
            ></i>
            <i
              class="iconfont icon-arrow_down_fat"
              :class="item.status == 2 ? 'active' : ''"
              @click="pricedesc"
            ></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li v-for="item in searchList" :key="item.id">
          <router-link :to="'/productinfo/' + item._id">
            <img :src="item.Img" alt="" />
            <h3>{{ item.Title }}</h3>
            <div class="price">
              <div>
                <span>￥</span>
                <b>{{ item.Price }}</b>
              </div>
              <!-- <router-link :to="'/petshopping/shopcart/' + item._id">
                <div>立即购买</div>
              </router-link> -->
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import Header from "../PetProducts/Header.vue";
export default {
  data() {
    return {
      
      // searchName:'',
      searchList: [],
      headerList: {
        currentIndex: 0,
        data: [
          // status:都不亮
          // status：1 上箭头亮
          // status：2 下箭头亮
          { name: "综合" },
          { name: "价格", status: 0, key: "price" },
          { name: "销量", status: 0, key: "num" },
        ],
      },
    };
  },
  components: {
    Header,
  },
  created() {
    this.GetData();
  },
  //   computed:{
  // orderBy(){
  //   // 知道当前是哪一个对象
  //   let obj=this.headerList.data[this.searchList.currentIndex]
  //   // 针对状态 判断是升序还是降序
  //   let val=obj.status=='1'?'asc':'desc';
  //   return{
  //     [obj.key]:val
  //   }
  // }
  //   },
  methods: {
    GetData() {
      this.$http
        .get("products")
        .then((result) => {
          this.searchList = result.body;        
        })
        .catch((err) => {});
    },
    // GetData() {
    //   this.$http
    //     .get("products/search",{ searchName:this.$route.query.key})
    //     .then((result) => {

    //       console.log(result.body);

    //     })
    //     .catch((err) => {});
    // },
    // GetData(){
    //   this.$http.get({
    //     url:"products/search",
    //     params:{
    //       searchName:this.$route.query.key
    //     }
    //   }).then((res)=>{
    //     console.log(res)
    //   })
    // },
    // 切换综合，销量，价格高亮
    changeTab(index) {
      // console.log(index)
      this.headerList.currentIndex = index;
      let item = this.headerList.data[index];
      //  取消所有的状态值
      this.headerList.data.forEach((v, i) => {
        if (i != index) {
          v.status = 0;
        }
      });
      // 当前点击的改变状态
      if (index == this.headerList.currentIndex) {
        item.status = item.status == 1 ? 2 : 1;
      }
      // 发送数据请求进行数据排序
      this.GetData();
    },
//     priceasc() {
//       console.log("111");
//    this.priceList.sort((a,b)=>{
// return a-b
//    })

    
   
//     },
//     pricedesc() {
//       console.log("222");
//     },
  },
};
</script>
<style lang="scss" scoped>
.search {
  input {
    line-height: 50px;
    background-color: #fff;
    margin-top: 8px;
    width: 82%;
  }
  .search-btn {
    display: inline-block;
    // color: #fff;
  }
}
.searchlist {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.headers ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin-top: 0;
  font-size: 16px;
  margin-left: -40px;
}
.headers ul li {
  display: flex;
  align-items: center;
}
.headers ul li > div {
  padding: 3px;
}
.search-filter {
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  //   overflow: hidden;
}
section ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  margin-left: -40px;
}
section ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
}
section ul li img {
  width: 180px;
  height: 180px;
}
section ul li h3 {
  color: #222;
  font-weight: 400;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  display: flex;
  justify-content: space-between;
  padding: 0.266666rem 0;
  width: 100%;
  font-size: 14px;
}
.price div:first-child span {
  color: #b0352f;
}

.price div:last-child {
  padding: 3px 6px;
  color: #fff;
  background-color: #b0352f;
  border-radius: 6px;
}
.active {
  color: red;
}
</style>
