<template>
  <div class="serveContainer">
    <span></span>
    <!-- <img class="serve-img" src="../../images/fw4.png" alt=""> -->
    <div class="content" v-for="item in serverList" :key="item._id">
      <div class="avatar">
        <img :src="item.avatar" alt="" />
        <div class="name">
          <span>{{ item.name }}</span>
          <img src="../../images/fw1.png" />
        </div>
        <div class="dialog">
          <router-link :to="'/chat/'+item._id">
            <img class="fw2" src="../../images/fw2.png" />
          </router-link>
          <!-- <el-button type="text" @click="dialogVisible = true"><img class="fw2" src="../../images/fw2.png" /></el-button>
          <el-dialog title="请输入您的问题" :visible.sync="dialogVisible" width="100%" :before-close="handleClose">
            <span>请问一个月大的猫不吃东西怎么办？才断奶没几天，朋友那儿抱的，买了脱脂羊奶也不喝，猫粮也不吃，喂它也不吃，怎么办？在线求助！</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false" >确 定</el-button >
            </span>
          </el-dialog> -->
        </div>
      </div>
      <div class="pingjia">
        <img src="../../images/fw3.png" alt="" />
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
      serverList: [],
      dialogVisible: false,
    };
  },
  created() {
    this.getserverlist();
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
    //获取社区论坛信息的方法
    getserverlist() {
      this.$http.get("serverinfos").then((result) => {
        console.log(result.body);
        this.serverList = result.body;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.serveContainer {
  display: flex;
  flex-direction: column;
  margin-top: 39px;
  .serve-img {
    width: 100%;
    height: 50px;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 205px;
    background: aliceblue;
    border-radius: 5%;
    margin: 5px 10px 5px 5px;
  }
  .avatar {
    display: flex;
    flex-direction: row;
    margin: 10px 10px 10px 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-left: 10px;
      span {
        font-size: 16px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 5px;
      }
    }
    .fw2 {
      width: 50px;
      height: 30px;
      margin-left: 200px;
    }
  }
  .pingjia {
    display: flex;
    flex-direction: row;
    margin-left: 67px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 10px;
      color: #808080;
    }
  }
  .serve-duixiang {
    display: flex;
    flex-direction: row;
    margin-left: 67px;
    margin-top: 5px;
    color: #808080;
    font-size: 16px;
    .lei {
      margin-left: 10px;
    }
  }
  .serve-shan {
    display: flex;
    flex-direction: row;
    margin-left: 67px;
    margin-top: 5px;
    color: #808080;
    font-size: 16px;
    .bing {
      margin-left: 10px;
    }
  }
}
</style>
