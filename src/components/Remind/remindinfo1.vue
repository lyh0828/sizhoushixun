<template>
  <div class="remindinfo">
    <div>
      <h2>
        <img src="../../images/02.png" class="add" />
        <span>设置时间提醒</span>
      
      </h2>
<div>
    <audio loop id="remindmp3">
  <source src="../../images/remind.mp3" type="audio/mpeg" >

</audio>
    </div> 


    </div>
    <div class="container">
      <div class="box fl"></div>
      <div class="time fl"></div>
      <div class="clear"></div>
      <div class="set">
        <input
          type="text"
          name="hour"
          id="hour"
          value=""
          placeholder="时"
          v-model="h"
        />
        <input
          type="text"
          name="min"
          id="min"
          value=""
          placeholder="分"
          v-model="m"
        />
        <input
          type="text"
          name="sec"
          id="sec"
          value=""
          placeholder="秒"
          v-model="s"
        />
        <!-- <button class="fr" type="button" id="btn" @click="btn">设置</button> -->
        <button id='btn' type="button" class="fr mui-btn mui-btn-blue mui-btn-outlined">添加时间提醒</button>
        <div class="clear"></div>
     <div>
        <button id="remindstop" @click="remindstop">关闭闹钟</button>
     </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { MessageBox } from 'mint-ui';
import mui from '../../lib/mui/js/mui.js' 

export default {
  data() {
    return {
      h: "",
      m: "",
      s: "",
    };
  },
  created() {
    this.clock();
  },

  mounted() {
    //设置定时器
    var timer;
    timer = setInterval(() => {
      this.clock();
    }, 500);
  },

  methods: {
    clock() {
      var oBox = document.querySelector(".box");
      var oTime = document.querySelector(".time");

      var oHour = document.getElementById("hour");
      var oMin = document.getElementById("min");
      var oSec = document.getElementById("sec");

      // var h;
      // var m;
      // var s;

      var oBtn = document.getElementById("btn");

      var oDate = new Date();
      var hour = oDate.getHours();
      var minute = oDate.getMinutes();
      var second = oDate.getSeconds();
      if (hour >= 12) {
        oTime.innerText = "pm";
        if (hour > 13) {
          hour = hour - 12;
        }
      } else {
        oTime.innerText = "am";
      }

      //修改时分秒的格式
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      //修改innertext
      oBox.innerText = hour + ":" + minute + ":" + second;

      oBtn.onclick = function () {
        //获取value值
        this.h = oHour.value;
        this.m = oMin.value;
        this.s = oSec.value;
		document.getElementById("btn").addEventListener('tap', function() {
				mui.toast('添加成功');
			});
      };
      if (hour == this.h && minute == this.m && second == this.s) {
                //  this.$refs.guideVoice.addEventListener("canplaythrough",()=>{
                //     this.$refs.guideVoice.play()
                //  },false)
                var mp3=document.getElementById('remindmp3')
                mp3.play()            
        // document.getElementById("info").innerHTML="<source src='../../images/remind.mp3' type='audio/mpeg'>  "
        // alert("闹钟响了！")
// MessageBox('提示', '操作成功');
        oHour.value = "";
        oMin.value = "";
        oSec.value = "";
      }
    },
    remindstop(){
         var mp4=document.getElementById('remindmp3')
                mp4.pause() 
                document.getElementById("remindstop").addEventListener('tap', function() {
				mui.toast('关闭闹钟');
			});
    }
  },
};
</script>
<style scoped lang="scss">
.remindinfo{
   margin-top:40px;
}
.container {
  width: 350px;
  height: 130px;
  margin: 0 auto;
  background-color: pink;
  border: 2px solid #808080;
  display: block;
  padding: 50px;
}

.box {
  display: inline-block;
  text-align: center;
  color: cornflowerblue;
  font-size: 50px;
}

.time {
  display: inline-block;
  // width: 100px;
  margin: 0 auto;
  text-align: center;
  color: cornflowerblue;
  font-size: 30px;
  margin-top: 10px;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.set {
  width: 260px;
  color: gray;
  margin-top: 80px;
}

.container input {
  width: 60px;
  padding: 4px 8px;
  background-color: rgba(246, 192, 242, 0.7);
  outline: none;
}

.container button {
  margin-top: 6px;
  background-color: pink;
  display: inline-block;
}
</style>