 
<template>
  <div class="container">
    <div class="main">
      <div class="box">
        <div class="title">
          <!-- <img src=""  alt class="logo" /> -->
          <span class="title-hn">{{name}}</span>
        </div>
        <div id="content" class="content">
          <div v-for="(item,index) in info" :key="index">
            <div class="info_r info_default" v-if="item.type == 'leftinfo'">
              <!-- <span class="circle circle_r"></span> -->
              <img :src="avatar"  class="logo" />
              <div class="con_r con_text">
                <div>{{item.content}}</div>
                <div v-for="(item2,index) in item.question" :key="index">
                  <div class="con_que" @click="clickRobot(item2.content,item2.id)">
                    <div class="czkj-question-msg">
                      {{item2.index}}
                      {{item2.content}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="time_r">{{item.time}}</div>
            </div>
 
            <div class="info_l" v-if="item.type == 'rightinfo'">
              <div class="con_r con_text">
                <span class="con_l">{{item.content}}</span>
                <span class="circle circle_l">
                  <img src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" class="pic_l" />
                </span>
              </div>
              <div class="time_l">{{item.time}}</div>
            </div>
          </div>
        </div>
 
        <div class="setproblem">
          <textarea
            placeholder="请输入您的问题..."
            style="height: 50px;width: 100%;resize:none;padding-right:80px;outline: none;border-color:#ccc;border-radius:5px;"
            id="text"
            v-model="customerText"
            @keyup.enter="sentMsg()"
          ></textarea>
          <button @click="sentMsg()" class="setproblems">
 
            <span style="vertical-align: 4px;">发 送</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "onlineCustomer",
    components: {},
    computed: {},
    data() {
      return {
          name:'',
        customerText: "",
        info: [
          {
            type: "leftinfo",
            time: this.getTodayTime(),
            name: "robot",
            content:
              "欢迎您光临本店，有什么可以帮助您的吗？",
            question: [],
          },
        ],
        timer: null,
        robotQuestion: [
          { id: 1, content: "什么是副产品，对宠物有害吗？", index: 1 },
          { id: 2, content: "想为宠物提供家庭自制粮，应该联系谁？", index: 2 },
          { id: 3, content: "如何鼓励猫咪摄入水？", index: 3 },
          {
            id: 4,
            content: "狗狗应该多久洗一次澡？",
            index: 4,
          },
          { id: 5, content: "给狗狗看病该去兽医站还是宠物医院？", index: 5 },
        ],
        robotAnswer: [
          {
            id: 1,
            content:
              "副产品与其他成分完全一样，在这个意义上，它的名字并不反应其营养质量，因此，它们也可以成为宠物食品的优秀原料。",
            index: 1,
          },
          { id: 2, content: "你可以请你的兽医帮助寻找兽医营养师，也可以联系你所在的地区的兽医学校去咨询。", index: 2 },
          { id: 3, content: "可以喂食罐头食品，也可以在房子的不同房间使用多个水碗，或者购买一个饮水机。", index: 3 },
          {
            id: 4,
            content: "在夏天天气炎热的时候主人可以每一到两星期就给狗狗洗一次澡，在冬天一个月洗一次就够了。但这只是一般情况，实际的洗澡频率还是需要根据以下情况判定：狗狗的品种、皮肤与毛发质量，生活环境，是否有皮肤过敏或皮肤病。",
            index: 4,
          },
          { id: 5, content: "给狗狗看病比较适合去兽医站。要是只为了看病的话去这两个都可以的。一般大点的兽医站都比较正规，会有比较系统的诊疗程序。", index: 5 },
        ],
      };
    },
    created() {
        this.getchat();
      this.showTimer();
      
    },
    watch: {},
    methods: {
         getchat(){
            this.$http.get("serverinfos/chat?id=" + this.$route.params.id).then(result =>{
                console.log(result.body)
               // if (result.body.status === 0){
                   this.id=result.body._id
                    this.avatar = result.body.avatar;
                    this.name = result.body.name;
               // }else{

                //    console.log('数据加载失败')
               // }
            })
        },
      // 用户发送消息
      sentMsg() {
        clearTimeout(this.timer);
        this.showTimer();
        let text = this.customerText.trim();
        if (text != "") {
          var obj = {
            type: "rightinfo",
            time: this.getTodayTime(),
            content: text,
          };
          this.info.push(obj);
          this.appendRobotMsg(this.customerText);
          this.customerText = "";
          this.$nextTick(() => {
            var contentHeight = document.getElementById("content");
            contentHeight.scrollTop = contentHeight.scrollHeight;
          });
        }
      },
      // 机器人回答消息
      appendRobotMsg(text) {
        clearTimeout(this.timer);
        this.showTimer();
        text = text.trim();
        let answerText = "";
        let flag;
        for (let i = 0; i < this.robotAnswer.length; i++) {
          if (this.robotAnswer[i].content.indexOf(text) != -1) {
            flag = true;
            answerText = this.robotAnswer[i].content;
            break;
          }
        }
        if (flag) {
          let obj = {
            type: "leftinfo",
            time: this.getTodayTime(),
            name: "robot",
            content: answerText,
            question: [],
          };
          this.info.push(obj);
        } else {
          answerText = "您可能想问：";
          let obj = {
            type: "leftinfo",
            time: this.getTodayTime(),
            name: "robot",
            content: answerText,
            question: this.robotQuestion,
          };
          this.info.push(obj);
        }
        this.$nextTick(() => {
          var contentHeight = document.getElementById("content");
          contentHeight.scrollTop = contentHeight.scrollHeight;
        });
      },
      sentMsgById(val, id) {
        clearTimeout(this.timer);
        this.showTimer();
 
        let robotById = this.robotAnswer.filter((item) => {
          return item.id == id;
        });
        let obj_l = {
          type: "leftinfo",
          time: this.getTodayTime(),
          name: "robot",
          content: robotById[0].content,
          question: [],
        };
        let obj_r = {
          type: "rightinfo",
          time: this.getTodayTime(),
          name: "robot",
          content: val,
          question: [],
        };
        this.info.push(obj_r);
        this.info.push(obj_l);
        this.$nextTick(() => {
          var contentHeight = document.getElementById("content");
          contentHeight.scrollTop = contentHeight.scrollHeight;
        });
      },
      // 点击机器人的单个问题
      clickRobot(val, id) {
        this.sentMsgById(val, id);
      },
      // 结束语
      endMsg() {
        let happyEnding = {
          type: "leftinfo",
          time: this.getTodayTime(),
          content: "感谢您的光临!如果还有什么问题，欢迎随时与我联系!期待您下次光临!",
          question: [],
        };
        this.info.push(happyEnding);
        this.$nextTick(() => {
          var contentHeight = document.getElementById("content");
          contentHeight.scrollTop = contentHeight.scrollHeight;
        });
 
      },
      showTimer() {
        this.timer = setTimeout(this.endMsg, 1000*60);
      },
      getTodayTime() {
        // 获取当前时间
        var day = new Date();
        let seconds = day.getSeconds();
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let minutes = day.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        } else {
          minutes = minutes;
        }
        let time =
          day.getFullYear() +
          "-" +
          (day.getMonth() + 1) +
          "-" +
          day.getDate() +
          " " +
          day.getHours() +
          ":" +
          minutes +
          ":" +
          seconds;
        return time;
      },
    },
    mounted() {},
    props: {},
    destroyed() {},
  };
</script>
<style lang="scss">
  .main {
    width: 100%;
    margin-top: 40px;
    // height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(149, 179, 212, 1) 0%,
        rgba(74, 131, 194, 1) 100%
    );
    overflow: hidden;
    .box {
      width: 100%;
      height: 700px;
      background-color: #fafafa;
      position: relative;
      padding: 1.25rem;
      .logo{
          width: 50px;
          height: 50px;
          border-radius: 50%;
      }
      #content {
        height: 500px;
        overflow-y: scroll;
        font-size: 14px;
        width: 100%;
        // .circle {
        //   display: inline-block;
        //   width: 34px;
        //   height: 34px;
        //   border-radius: 50%;
        //   background-color: #eff1f3;
        // }
        .con_text {
          color: #333;
          margin-bottom: 5px;
        }
        .con_que {
          color: #1c88ff;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
        .info_r {
          position: relative;
          .circle_r {
            position: absolute;
            left: 0%;
          }
          .pic_r {
            width: 17px;
            height: 17px;
            margin: 8px;
          }
          .con_r {
            display: inline-block;
            /* max-width: 253px; */
            width: 55%;
            min-height: 55px;
            /* min-height: 20px; */
            background-color: #e2e2e2;
            border-radius: 6px;
            padding: 10px;
            // margin-left: 40px;
          }
          .time_r {
            margin-left: 45px;
            color: #999999;
            font-size: 12px;
          }
        }
        .info_l {
          text-align: right;
          // margin-right: 20px;
          color: #ffffff;
          color: #3163C5;
          margin-top: 10px;
 
          // .circle_l {
          //   // vertical-align: -10px;
          // }
          .pic_l {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 8px 10px;
          }
          .time_l {
            margin-right: 45px;
            color: #999999;
            font-size: 12px;
            margin-top: 5px;
          }
          .con_l {
            display: inline-block;
            width: 220px;
            min-height: 51px;
            background-color:lightblue;
            border-radius: 6px;
            padding: 10px;
            text-align: left;
            color: #fff;
            margin-right: 5px;
          }
        }
        #question {
          cursor: pointer;
        }
      }
    }
  }
  .setproblem {
    width: 100%;
    height: 62px;
    background-color: #ffffff;
    position: relative;
    margin-top: 30px;
    
  }
  .setproblem textarea {
    color: #999999;
    padding: 10px;
    box-sizing: border-box;
  }
  .setproblem button {
    width: 5.875rem;
    height: 2.5rem;
    margin-top: -14px;
    font-size: 12px;
    background: lightblue;
    opacity: 1;
    border-radius: 4px;
    color: #ffffff;
    position: absolute;
    right: 2%;
    top: 30%;
    cursor: pointer;
    border: none;
  }
 
  .czkj-item-title {
    line-height: 25px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
 
  .czkj-item-question {
    cursor: pointer;
    display: block;
    padding: 8px;
    position: relative;
    border-bottom: 1px dashed #ccc;
    line-height: 20px;
    min-height: 20px;
    overflow: hidden;
  }
 
  .czkj-question-msg {
    float: left;
    font-size: 14px;
    color: #3163C5;
  }
</style>