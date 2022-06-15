<template>
    <div class="newsinfo">
        <!-- <h2>新闻详情页--{{ this.$route.params.id}}</h2> -->
        <router-link :to="'/home/newsgetcomments/'+this.$route.params.id">发表评论</router-link>
        <h3 class="title">{{ title }}</h3>
        <p class="title2">
            <span>点击:{{ click }}</span>
            <span>发表时间:{{ add_time }}</span>
        </p>
        <div class="content">
          <h3>介绍:</h3>
          <h5 v-html="content"></h5>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      title:'',
      title2:''
    }
  },
  created(){
    this.getnewsinfo()
  },
  methods: {
    //获取新闻列表数据的方法
    getnewsinfo(){
      this.$http.get("api/getnew/"+this.$route.params.id).then(result =>{
        console.log(result.body)
        if (result.body.status === 0) {
          //获取title
          this.title = result.body.message[0].title
          //获取click
          this.click = result.body.message[0].click
          //获取时间
          this.add_time = result.body.message[0].add_time
          //获取内容
          this.content = result.body.message[0].content

        } else {
          console.log("数据加载失败！!")
        }
       })
    }
  },
}
</script>
<style lang="scss" scoped>
.newsinfo{
    padding: 20px;
    .title{
        font-size: 20px;
    }
}
</style>