<template>
  <!-- <h2>宠物丢失组件</h2> -->
  <div class="lost-container">
    <div class="lost-img">
      <img class="lost-img1" src="../../images/L2.png" />
      <img class="lost-img2" src="../../images/11.png" />
    </div>
    <div class="author">
        <div class="author-img">
            <img class="img1" src="../../images/01.png">
            <img class="img2" src="../../images/L3.png">
            <span class="name">小饼干</span>
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
                <span class="lost-time">2021.8.5上午2-10点</span>
            </div>
            <div class="address">
                <span class="shijian">走失地址：</span>
                <span class="lost-address">天津市大学软件学院</span>
            </div>
            <div>
                <span class="shijian">宠物特征：</span>
                <span class="special">肚子下被剃毛了，身上有芯片...</span>
            </div>
            <div class="picture">
                <img class="picture1" src="https://img0.baidu.com/it/u=3048947508,3919270582&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=485">
                <img  class="picture1" src="https://img2.baidu.com/it/u=2066877075,4169070272&fm=253&fmt=auto&app=138&f=JPEG?w=679&h=500">
                <img  class="picture1" src="https://img0.baidu.com/it/u=960501234,1772203118&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=329">
            </div>
            <div class="location">
                <span class="mui-icon mui-icon-location"></span>
                <span>深圳市南山区</span>
                <span class="kilometer">距您~641.6km</span>
            </div>
            <span class="see">7229人浏览昨天10:48</span>
            <div class="zan">
                <span>1人点赞</span>
                <img src="../../images/02.png">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
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
              margin-left: 125px;
              color:#808080;
          }
      }
      .content{
          display: flex;
          flex-direction: column;
          margin: 0 10px 10px 10px;
          font-size: 18px;
          .content-time{
              font-size: 18px;
          }
          .shijian{
              color:crimson;
              font-weight:500;
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
              margin-left: 140px;
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
          }
          img{
              width: 38px;
              width: 38px;
              border-radius: 50%;
              margin-left: 8px;
          }
      }
  }
}
</style>