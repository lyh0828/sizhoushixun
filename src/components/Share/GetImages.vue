<template>
    <div class="imagesinfo">
        <!-- <h2>图片--{{ this.$route.params.id }}</h2> -->
        <li v-for="item in imgesList" :key="item.id">
          <img  :src="item.img_url"><br>
          <h3 class="title">{{ item.title }}</h3>
          <span>摘要:{{ item.zhaiyao }}</span>
        </li>
    </div>
</template>

<script>
export default {
    data() {
    return {
      title:'',
      imgesList:[]
    }
  },
  created(){
    this.getimagesinfo()
  },
  methods: {
    //获取图片数据的方法
    getimagesinfo(){
      this.$http.get("api/getimages/"+this.$route.params.id).then(result =>{
        console.log(result.body)
        if (result.body.status === 0) {
          this.imgesList = result.body.message
          // this.img_url = result.body.message[0].img_url
          // this.title = result.body.message[0].title
          // this.zhaiyao = result.body.message[0].zhaiyao
        } else {
          console.log("数据加载失败！!")
        }
       })
    }
  },
}
</script>
<style lang="scss" scoped>
.imagesinfo{
  img{
    width:200px;
    height: 200px;
  }
  span{
    font-size: 20px;
  }
}
</style>