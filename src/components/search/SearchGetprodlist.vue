<template>
    <div>
      <ul>
        <li class="su" v-for="item in newsList" :key="item.id">
          <!-- <h2>搜索--{{ item.id }}</h2> -->
          <h3 class="name">{{ item.name }}</h3>
          <span>时间:{{ item.ctime }}</span>
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
    this.searchgetprodlist()
  },
  methods: {
    //获取新闻列表数据的方法
    searchgetprodlist(){
      this.$http.get("api/getprodlist/").then(result =>{
        console.log(result.body)
        if (result.body.status === 0) {
          this.newsList = result.body.message
        } else {
          console.log("数据加载失败！!")
        }
       })
    }
  },
}
</script>
<style lang="scss" scoped>

</style>