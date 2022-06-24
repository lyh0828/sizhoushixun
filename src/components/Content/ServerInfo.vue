<template>
    <div class="serveContainer">
        <span></span>
        <!-- <img class="serve-img" src="../../images/fw4.png" alt=""> -->
        <div class="content" v-for="item in serverList" :key="item._id">
            <div class="avatar" >
            <img :src="item.avatar" alt="">
            <div class="name">
                <span>{{ item.name }}</span>
                <img src="../../images/fw1.png">
            </div>
            <img class="fw2" src="../../images/fw2.png" alt="">
        </div>
        <div class="pingjia">
            <img src="../../images/fw3.png" alt="">
            <span>{{ item.pingfen }}</span>
            <span>{{ item.cishu }}</span>
        </div>
        <div class="serve-duixiang">
            <span>服务对象</span>
            <span class="lei">{{ item.dog }}</span>
            <span class="lei">{{ item.cat }}</span>
        </div>
        <div class="serve-shan">
            <span>专家擅长</span>
            <span class="bing">{{ item.bing1 }}</span>
            <span class="bing">{{ item.bing2 }}</span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      serverList:[]
    }
  },
  created(){
    this.getserverlist()
  },
  methods: {
    //获取社区论坛信息的方法
    getserverlist(){
      this.$http.get("serverinfos").then(result =>{
        console.log(result.body)
        this.serverList=result.body
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.serveContainer{
    display: flex;
    flex-direction: column;
    margin-top: 39px;
    .serve-img{
        width: 100%;
        height: 50px;
    }
    .content{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 205px;
        background:aliceblue;
        border-radius: 5%;
        margin: 5px 10px 5px 5px;
        
    }
    .avatar{
        display: flex;
        flex-direction: row;
        margin: 10px 10px 10px 10px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .name{
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            margin-left: 10px;
            span{
                font-size: 16px;
            }
            img{
                width: 20px;
                height: 20px;
                margin-top: 5px;
            }
        }
        .fw2{
                width: 50px;
                height: 30px;
                margin-left: 200px;
            }
    }
    .pingjia{
        display: flex;
        flex-direction: row;
        margin-left: 67px;
        img{
            width: 20px;
            height: 20px;
        }
        span{
            margin-left: 10px;
            color: #808080;
        }
    }
    .serve-duixiang{
        display: flex;
        flex-direction: row;
        margin-left: 67px;
        margin-top: 5px;
        color: #808080;
        font-size: 16px;
        .lei{
            margin-left: 10px;
        }
    }
    .serve-shan{
        display: flex;
        flex-direction: row;
        margin-left: 67px;
        margin-top: 5px;
        color: #808080;
        font-size: 16px;
        .bing{
            margin-left: 10px;
        }
    }

}
</style>
