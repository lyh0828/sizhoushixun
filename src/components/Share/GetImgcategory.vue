<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in imgcategoryList" :key="item.id">
        <router-link :to="'/home/getimages/'+item.id">
          <div class="mui-media-body">
            {{ item.title }}
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
      imgcategoryList:[]
    }
  },
  created(){
    this.getimgcategoryList()
  },
  methods: {
    //获取新闻列表数据的方法
    getimgcategoryList(){
      this.$http.get("api/getimgcategory").then(result =>{
        console.log(result.body)
        if (result.body.status === 0) {
          this.imgcategoryList = result.body.message
        } else {
          console.log("数据加载失败！!")
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.mui-table-view{
  li{
    font-size: 20px;
    color: cornflowerblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>