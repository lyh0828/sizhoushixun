<template>
  <div class="home">
    <!-- <div class="topbar">
      <img class="topbar-img" src="../../images/10.png" />
    </div> -->

    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <router-link to="/sort">
          <img
            src="https://img1.baidu.com/it/u=1308062,1060823281&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=188"
          />
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to="/sort">
          <img
          src="https://img0.baidu.com/it/u=1275718207,2852747973&fm=253&fmt=auto&app=138&f=JPEG?w=970&h=448"

        />
         </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to="/sort">
           <img src="http://img.boqiicdn.com/Data/U/P/img7231595305e41e14f.jpg" />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 栅格系统 -->
    <div class="list">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/mypet">
            <img src="../../images/01.png" />
            <div class="mui-media-body">我的宠物</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/addremind">
            <img src="../../images/02.png" />
            <div class="mui-media-body">添加提醒</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/news">
            <!-- <router-link to="/petnews"> -->
            <img src="../../images/03.png" />
            <div class="mui-media-body">宠物新闻</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="serverinfo">
            <img src="../../images/04.png" />
            <div class="mui-media-body">服务</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="/home/raiselist">
            <img src="../../images/05.png" />
            <div class="mui-media-body">领养动态</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <router-link to="/home/group">
            <img src="../../images/06.png">
            <div class="mui-media-body">趣味逗宠</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <router-link to="/petsmart">
                <img src="../../images/07.png">
                <div class="mui-media-body">宠物智能</div>
            </router-link>  
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">

          <router-link  to="/home/peteat">
            <img src="../../images/08.png">
            <div class="mui-media-body">宠物饮食</div>
          </router-link>

        </li>
      </ul>
    </div>
    <!-- 栅格系统 -->
    <div class="middle">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
          <router-link to="/daylist">
            <img
              src="https://img0.baidu.com/it/u=2774035686,2091476564&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=500"
            />
            <div class="mui-media-body">宠物日常</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
          <router-link to="/petproducts">
            <img
              src="https://img1.baidu.com/it/u=3935860372,2123648088&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
            />
            <div class="mui-media-body">宠物用品销售</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 社区论坛 -->
    <div class="bottom">
      <div class="text">
        <template>
          <el-tabs
            v-model="activeName"
            stretch="boolean"
            type="card"
            @tab-click="handleClick"
          >
            <el-tab-pane label="社区论坛" name="first">
              <div class="all" v-for="item in newsList" :key="item._id">
                <div class="author">
                  <img class="author-img" :src="item.picture" />
                  <div class="author-info">
                    <span class="name">{{ item.name }}</span>
                    <span class="time">{{ item.time }}</span>
                  </div>
                </div>
                <div class="content">
                  <span class="title">{{ item.title }}</span>
                  <span class="bottom-content">{{ item.content }}</span>
                </div>
                <div class="zan">
                  <span>{{ item.zan }}</span>
                  <img :src="item.img" />
                  <img :src="item.picture1" />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="综合" name="second">
              <div class="zonginfo" v-for="item in newsList" :key="item._id">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                  <li
                    class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2" >
                    <a href="#">
                      <img :src="item.picture" />
                      <div class="mui-media-body">{{ item.title }}</div>
                    </a>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2 ">
                    <a href="#">
                      <img :src="item.picture3" />
                      <div class="mui-media-body">{{ item.title1 }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="笔记攻略" name="third">
              <div class="notes" v-for="item in serverList" :key="item._id">
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                      <img class="mui-media-object mui-pull-left" :src="item.image"/>
                      <div class="mui-media-body">
                        {{item.text1}}
                        <p>{{item.text2}}</p>
                        <p class="mui-ellipsis"> {{item.text3}} </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [],
      activeName: "first",
      serverList:[]
    };
  },
  created() {
    this.getnewslist();
    this.getserverlist()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //获取社区论坛信息的方法
    getnewslist() {
      this.$http.get("lostinfos").then((result) => {
        console.log(result.body);
        this.newsList = result.body;
      });
    },
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
.home {
  touch-action: none;
  margin: 0px;
  padding: 0px;
  background-color: rgb(244, 244, 244);
  .notes{
    margin-bottom: 10px;
  }
  .zonginfo {
    .mui-table-view.mui-grid-view.mui-grid-9 {
      background: snow;
      border: none;
      li {
        border: none;
        width: 50%;
        height: 240px;
        margin-top: 2px;
      }
      img {
        width: 100%;
        height: 170px;
        border-radius: 5%;
      }
      .mui-media-body {
        font-size: 14px;
      }
    }
  }
  // .topbar {
  //   margin-top: 40px;
  // }
  // .topbar-img {
  //   width: 100%;
  //   height: 100px;
  // }
  .mint-swipe {
    width: 100%;
    height: 200px;
    margin-top: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // list
  .list {
    margin-top: 5px;
    .mui-table-view.mui-grid-view.mui-grid-9 {
      background: snow;
      border: none;
      width: 100%;
      height: 100%;
      li {
        border: none;
        width: 25%;
        height: 140px;
        margin-top: -15px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
      }
      .mui-media-body {
        font-size: 14px;
      }
    }
  }
  .middle {
    margin-top: 5px;
    .mui-table-view.mui-grid-view.mui-grid-9 {
      background: snow;
      border: none;
      li {
        border: none;
        width: 50%;
        height: 200px;
        margin-top: 2px;
      }
      img {
        width: 100%;
        height: 130px;
        border-radius: 10%;
      }
      .mui-media-body {
        font-size: 14px;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 375px;
    padding: 5px 15px 10px 13px;
    .text {
      margin: 5px 0 10px 0;
      font-weight: 500;
      font-size: 17px;
      .text1 {
        margin-left: 15px;
      }
      .text2 {
        margin-left: 80px;
      }
      .text3 {
        margin-left: 80px;
      }
    }
    .all {
      width: 100%;
      height: 240px;
      background: floralwhite;
      border-radius: 5%;
      .author {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        margin: 10px 10px 10px 10px;
        .author-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .author-info {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .name {
            font-size: 14px;
            color: dimgray;
          }
          .time {
            margin-top: 5px;
            font-size: 13px;
            color: #808080;
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        margin: 10px 10px 10px 10px;
        .title {
          font-size: 16px;
          letter-spacing: 1px;
        }
        .bottom-content {
          margin-top: 8px;
          font-size: 16px;
          color: #808080;
          letter-spacing: 1px;
        }
      }
      .zan {
        display: flex;
        flex-direction: row;
        width: 384px;
        height: 45px;
        border: 1px solid floralwhite;
        background: cornsilk;
        border-radius: 5%;
        color: #808080;
        span {
          margin: 10px 5px 0 5px;
          font-size: 16px;
        }
        img {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>