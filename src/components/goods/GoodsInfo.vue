<template>
    <div class="goodsinfo">
        <!-- <h2>商品详情--{{this.$route.params.id}}</h2> -->
        <h3 class="title">{{ title }}</h3>
        <div class="content">
            <h3>介绍:</h3><br>
            <h5 v-html="content"></h5>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:''
        }
    },
    created(){
        this.getgoodsinfo()
    },
    methods: {
        //获取商品列表数据的方法
        getgoodsinfo(){
           this.$http.get("api/goods/getdesc/"+this.$route.params.id).then(result =>{
               console.log(result.body)
              if (result.body.status === 0) {
          //获取title
          this.title = result.body.message[0].title
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
.goodsinfo{
    padding: 20px;
    font-size: 20px;
}
</style>