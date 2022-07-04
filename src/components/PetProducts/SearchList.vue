<template>
  <div class="searchlist">
    <div class="headers">

      <Header/>
      <!-- <div class="searchinput">
    <form
      action=""
      onsubmit="return false"
      style="display: inline-block; background-color: rgb(38, 162, 255)"
      @keyup.enter="GoToSearchList"
    >
      <span>🐕</span>
      <input
        type="search"
        placeholder="搜索您喜欢的产品"
        v-model="searchValue"
      />
      
      <div class="search-btn" @click="GoToSearchList">搜索</div>
      
    </form>
  </div> -->

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
           
            ></i>
            <i
              class="iconfont icon-arrow_down_fat"
              :class="item.status == 2 ? 'active' : ''"
            ></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li v-for="item in search(searchValue)" :key="item.id">
          <router-link :to="'/productinfo/' + item._id">
            <img :src="item.Img" alt="" />
            <h3>{{ item.Title }}</h3>
            <div class="price">
              <div>
                <span>￥</span>
                <b>{{ item.Price }}</b>
              </div>
              <router-link :to="'/petshopping/shopcart/' + item._id">
                <div>立即购买</div>
              </router-link>
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
        searchValue: this.$route.query.key || "",
      searchArr: [],
      // searchValue:'',
     Title:"",
      newList:[],
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
     this.searchArr = JSON.parse(localStorage.getItem("searchList"));
    this.GetData();
  },

  methods: {
    GetData() {
      this.$http
        .get("products")
        .then((result) => {
          this.searchList = result.body;
       
          // this.priceList.push(parseFloat(result.body[0].Price))
          //  this.priceList.push(parseFloat(result.body[1].Price) )
          //  this.priceList.push(parseFloat(result.body[2].Price) )
          //  this.priceList.push(parseFloat(result.body[3].Price) )
          //  this.priceList.push(parseFloat(result.body[4].Price) )
          //  this.priceList.push(parseFloat(result.body[5].Price) )
          //  this.priceList.push(parseFloat(result.body[6].Price))
          //  this.priceList.push(parseFloat(result.body[7].Price) )
          //  this.priceList.push(parseFloat(result.body[8].Price) )
          //  this.priceList.push(parseFloat(result.body[9].Price) )
          //  this.priceList.push(parseFloat(result.body[10].Price) )
          //  this.priceList.push(parseFloat(result.body[11].Price) )
          // for (var i = 0;i <= result.body.length; i++) {
           
          //   // console.log(result.body[i].Price)
          //   this.priceList.push(parseFloat(result.body[i].Price) );
          
          // }
            //console.log(this.priceList)
        
          this.searchList = result.body;        
        })
        .catch((err) => {});
    },

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

search(searchValue) {
				console.log(searchValue)
				var newList = []
				this.searchList.forEach(item => {
					// 如果keywords为空,item.name.indexOf(keywords)=0,也满足条件 所以会将list中的数据全部遍历出来
					if (item.Title.indexOf(searchValue) != -1) {
						newList.push(item)
					}
				})
				return newList
			},
          // 搜索按钮的方法
    GoToSearchList() {
      console.log(this.searchValue);
    
      //  如果搜索的关键词为空，则不跳转
      if (!this.searchValue) return;
      //  判断之前有没有搜索的本地存储
      if (!localStorage.getItem("searchList")) {
        localStorage.setItem("searchList", "[]");
      } else {
        this.searchArr = JSON.parse(localStorage.getItem("searchList"));
      }
      // 增加数据
      this.searchArr.unshift(this.searchValue);
      // 给本地存储赋值
      localStorage.setItem("searchList", JSON.stringify(this.searchArr));
     //   路径如果没有变化不跳转
    if(this.searchValue===this.$route.query.key) return
     // 跳转页面
      this.$router.push({
        name: "list",
        query: {
          key: this.searchValue,
        },
      });
    },
    // 清除历史记录
    deleteStorage() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true,
      }).then((res) => {
        if (res == "confirm") {
          localStorage.removeItem("searchList");
          //清除数据
          this.searchArr = [];
        }
      });
    },
    
   

  },
};
</script>
<style lang="scss" scoped>
.searchinput {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    line-height: 50px;
    background-color: #fff;
    margin-top: 8px;
    width: 82%;
  }
  .search-btn {
    display: inline-block;
    color: #fff;
  }
}
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
  // margin-left: -40px;
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
