<template>
  <div class="search-index">
    <Header />
    <div class="search-history">
      <h2>
        <i class="iconfont icon-shijian"></i>
        <span>⏱历史搜索</span>
        <span @click="deleteStorage">清空历史记录</span>
      </h2>
      <ul>
        <li v-for="(item, index) in searchArr" :key="index">{{ item }}</li>
      </ul>
    </div>
    <!-- 热门搜索列表--假数据 -->
    <div class="search-history">
      <h2>
        <i class="iconfont icon-shijian"></i>
        <span>🔥热门搜索</span>
        <span>更多 ></span>
      </h2>
      <ul>
        <li>爱丽丝猫粮</li>
        <li>狗狗沐浴露</li>
        <li>猫粮盆</li>
        <li>情绪安抚剂</li>
        <li>宠物狗狗衣服</li>
        <li>泰迪鸭肉鸡肉干</li>
        <li>动物奶酪</li>
        <li>狗罐头</li>
        <li>宠物火腿肠</li>
        <li>猫爬架</li>
        <li>宠物提篮航空箱</li>
        <li>宠物外出双肩包</li>
        <li>动物牵引绳</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import Header from "../PetProducts/Header.vue";
export default {
  data() {
    return {
      searchArr:[]
    };
  },
  created() {
    this.searchArr=JSON.parse(localStorage.getItem('searchList'))
  },

  components: {
    Header,
  },
  methods: {
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
<style lang="scss">
.search-index {
  margin-top: 40px;
  // display: flex;
  // flex-direction: column;
  width: 100%;
  height: 50px;
  background-color: rgb(38, 162, 255);
  // overflow: hidden;
  img {
    width: 10%;
    height: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-top: 7px;
    border-radius: 50%;
  }
}
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
section {
  flex: 1;
  background-color: #f5f5f5;
}
.search-history h2 {
  position: relative;
  padding: 14px;
  font-weight: 700;

  font-size: 15px;
}
.search-history h2 i {
  padding-right: 0.08rem;
  color: red;
  font-size: 0.48rem;
}
.search-history h2 span:last-child {
  position: absolute;
  right: 0.533333rem;
  padding-right: 6px;
}
.search-history ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.266666rem;
  list-style: none;
}
.search-history ul li {
  margin: 0.266666rem;
  padding: 5px;
  font-size: 0.373333rem;
  border: 1px solid #ccc;
}
</style>