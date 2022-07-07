<template>
  <div class="searchinput">
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
     <!-- 搜索按钮 -->
      <div class="search-btn" @click="GoToSearchList">搜索</div>
   
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: this.$route.query.key || "",
      searchArr: [],
    };
  },
  created() {
    this.searchArr = JSON.parse(localStorage.getItem("searchList"));
  },
  methods: {
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
<style lang="scss">
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
</style>