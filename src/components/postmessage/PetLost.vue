<template>
  <!-- <h2>宠物丢失组件</h2> -->
  <div class="lost-container">
    <div class="lost-img">
      <img class="lost-img1" src="../../images/L2.png" />
      <img class="lost-img2" src="../../images/11.png" />
    </div>
    <div class="author" v-for="item in petlostList" :key="item._id">
        <div class="author-img">
            <img class="img1" :src="item.picture">
            <img class="img2" src="../../images/L3.png">
            <span class="name">{{ item.name }}</span>
            <div class="detail">
                <router-link to="">
                  <span>查看详情</span>
                  <span class="mui-icon mui-icon-eye"></span>
                </router-link>
            </div>
        </div>
        <div class="content">
            <div class="content-time">
                <span class="shijian">走失时间：</span>
                <span class="lost-time">{{ item.time1 }}</span>
            </div>
            <div class="address">
                <span class="shijian">走失地址：</span>
                <span class="lost-address">{{ item.address }}</span>
            </div>
            <div>
                <span class="shijian">宠物特征：</span>
                <span class="special">{{ item.special}}</span>
            </div>
            <div class="picture">
                <img class="picture1" :src="item.picture1">
                <img  class="picture1" :src="item.picture2">
                <img  class="picture1" :src="item.picture3">
            </div>
            <div class="location">
                <span class="mui-icon mui-icon-location"></span>
                <span>{{item.address}}</span>
                <span class="kilometer">{{item.kilometer}}</span>
            </div>
            <span class="see">{{item.see}}</span>
            <div class="zan">
                <span>{{item.zan}}</span>
                <img :src="item.img">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            petlostList:[]
        }
    },
    created() {
        this.getpetlostlist()
    },
    methods: {
        //获取宠物丢失列表
        getpetlostlist(){
            this.$http.get("lostinfo").then(result =>{
                console.log(result.body)
                this.petlostList=result.body
                // if(result.body.status == 0){
                //     this.petlostlist = result.body.message
                // }else{
                //     console.log("数据加载失败！")
                // }
            })
        }
    },
};
</script>
<style lang="scss" scoped>
.lost-container {
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  .lost-img {
    display: flex;
    flex-direction: row;
    .lost-img1{
        width: 55px;
        height: 55px;
        border-radius: 10%;
    }
    .lost-img2 {
      width: 100%;
      height: 100%;
      margin-left: 5px;
    }
  }
  .author{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 490px;
      background: snow;
      margin-top: 1px;
      .author-img{
          display: flex;
          flex-direction: row;
          margin: 10px 0 10px 10px;
          .img1{
              width: 50px;
              height: 50px;
              border-radius: 50%;
          }
          .img2{
              width: 50px;
              height: 20px;
              margin-top: 15px;
              margin-left: 10px;
          }
          .name{
              font-size: 16px;
              color: #808080;
              margin-top: 15px;
              margin-left: 10px;
          }
          .detail{
              font-size: 14px;
              margin-top: 10px;
              margin-left: 100px;
              color:#808080;
          }
      }
      .content{
          display: flex;
          flex-direction: column;
          margin: 0 10px 10px 10px;
          font-size: 18px;
          .content-time{
              font-size: 17px;
          }
          .shijian{
              color:crimson;
              font-weight:500;
          }
          .lost-time{
              font-size: 17px;
              color: darkslategrey;
              letter-spacing: 1px;
          }
          .lost-address{
              font-size: 16px;
              color: darkslategrey;
              letter-spacing: 1px;
          }
          .special{
              font-size: 16px;
              color: darkslategrey;
              letter-spacing: 1px;
          }
          .address{
              margin: 7px 0 7px 0;
          }
          .picture{
              display: flex;
              flex-direction: row;
              margin: 10px 10px 10px 0;
              img{
                  width: 125px;
                  height: 120px;
                  margin: 0 7px 0 0;
              }
          }
      }
      .location{
          margin: 0 0 10px 5px;
          color:cadetblue;
          font-size: 15px;
          .kilometer{
              margin-left: 110px;
          }
      }
      .see{
          font-size: 18px;
          color: #808080;
          margin: 0 0 5px 5px;
      }
      .zan{
          display: flex;
          flex-direction: row;
          width: 390px;
          height: 45px;
          border: 1px solid floralwhite;
          background:floralwhite;
          border-radius: 5%;
          color: #808080;
          span{
              margin: 10px 5px 0 5px;
              font-size: 16px;
          }
          img{
              width: 43px;
              height: 43px;
              border-radius: 50%;
              margin-left: 8px;
          }
      }
  }
}
</style>