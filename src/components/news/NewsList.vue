<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url"/>
          <div class="mui-media-body">
            {{ item.title }}
            <p class="mui-ellipsis">
              <span>时间:{{ item.add_time }}</span>
              <span>点击:{{ item.click }}</span>
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
      newsList:[]
    }
  },
  created(){
    this.getnewslist()
  },
  methods: {
    //获取新闻列表数据的方法
    getnewslist(){
      this.$http.get("api/getnewslist").then(result =>{
        console.log(result.body)
        if (result.body.status === 0) {
          this.newsList = result.body.message
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
    font-size: 12px;
    color: cornflowerblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>