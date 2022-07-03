<template>
<div class="remindinfo">
  
  <div class="container">
        <div class="clocksqure">
        <div class="box fl"></div>
      <div class="time fl"></div>
      <div class="clear"></div>
        </div>    
    </div>
<div id="date_time_picker">
 
    <van-button plain type="primary" @click="showPopFn()">点击选择日期</van-button>
    <van-field v-model="timeValue" placeholder="选择的日期结果" readonly />
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="datetime" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" id="btn" />
    </van-popup>
 
  </div>
  <button @click="remindstop">关闭提醒</button>
     <audio loop id="remindmp3">
  <source src="../../images/remind.mp3" type="audio/mpeg" >

</audio>
</div>
  
</template>
 
<script>
import mui from '../../lib/mui/js/mui.js' 

  export default {
    data() {
      return {
        msg: '',
        currentDate: new Date(),
        changeDate: new Date(),
        show: false, // 用来显示弹出层
        timeValue: '',
        year:'',      //自己要设置的年份
        month:'',//自己要设置的月
        day:'',//自己要设置的日期
        hour:'',//自己要设置的小时
        minute:"",//自己要设置的分钟
      
      
      }
    },
   created() {
    this.clock()
    

   },
     mounted() {
     
   
   
    },
    methods: {
      showPopFn() {
        this.show = true;
      },
      showPopup() {
        this.show = true;
      },
      changeFn() { // 值变化是触发
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)

      },
     
      cancelFn(){
        this.show = true;
      },
      // 自己闹钟时间
      timeFormat(time) { // 时间格式化 2019-09-08
        this.year = time.getFullYear();
        this.month = time.getMonth() + 1;
        this.day = time.getDate();
         this.hour = time.getHours();
      this.minute = time.getMinutes();
  if (this.hour < 10) {
       this.hour = "0" + this.hour;
      }
      if (this.minute < 10) {
       this.minute = "0" + this.minute;
      }
     console.log(this.year + '年' + this.month + '月' + this.day + '日'+this.hour+'时'+this.minute+'分')
        return this.year + '年' + this.month + '月' + this.day + '日'+this.hour+'时'+this.minute+'分'
      },
      // ---------钟表的方法
     
   
   
  remindstop(){
         var mp4=document.getElementById('remindmp3')
                mp4.pause() 
              
				mui.toast('关闭闹钟');
			
    },
     confirmFn() { // 确定按钮
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      	mui.toast('添加成功');

      },
          clock() {
      var oBox = document.querySelector(".box");
      var oTime = document.querySelector(".time");

      var oHour = document.getElementById("hour");
      var oMin = document.getElementById("min");
      var oSec = document.getElementById("sec");


      
      var oBtn = document.getElementById("btn");

      var oDate = new Date();
      var hour = oDate.getHours();
      var minute = oDate.getMinutes();
      var second = oDate.getSeconds();
  

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
      // oBox.innerText = hour + ":" + minute + ":" + second;

      oBtn.onclick = function () {
      
        //获取value值
      //   var h=this.hour;
      // var m=this.minute;
     
        // this.h = ;
      //  this. m = oMin.value;
      //   this.s = oSec.value;
        //  oHour.value = "";
        // oMin.value = "";
        // oSec.value = "";
		// document.getElementById("btn").addEventListener('tap', function() {
		// 		mui.toast('添加成功');
      
			// });
      };
      if (hour == this.hour && minute == this.minute) {

                var mp3=document.getElementById('remindmp3')
             mp3.play() ;           

      }
    },
    
  
   
  }
  }
</script>
 
<style>
.remindinfo{
  margin-top:45px;
}
.clocksqure{
  border: 1px solid black;
}
  .hello {
    text-align: center;
  }
  canvas {
    /*border: 1px solid #2c3e50;*/
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .date {
    font-weight: bold;
    font-size: 20px;
  }
  .container {
  width: 350px;
  height: 130px;
  margin: 0 auto;
  background-color: pink;
  border: 2px solid #808080;
  display: none;
  padding: 50px;
  border: 1px solid red;
}

.box {
  display: inline-block;
  text-align: center;
  color: cornflowerblue;
  font-size: 50px;
}

.time {
  display: inline-block;
   /* width: 100px; */
  margin: 0 auto;
  text-align: center;
  color: cornflowerblue;
  font-size: 30px;
  margin-top: 10px;
}

.fl {
  float: left;
}

 /* .fr {
   float: right;
 } */
 /* 输出提醒时间框的样式 */
.set {
  width: 100%;
  color: gray;
  margin-top: 60px;
    margin-left: 25px;
}

.set input {
  width: 96px;
  padding: 4px 8px;

  outline: none;
      background-color: rgb(239,239,244);
}

 /* .set button {
   margin-top: 6px;
  background-color: pink;
  display: inline-block;
 } */
.sumbtn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fr{
  background-color: #F3DC8F ;
      position: absolute;
   color: #fff;
    left: 12%;
    bottom: 18%;
      width: 115px;
    height: 40px;
        text-shadow: 2px 1px 2px grey;
        border: none;
        font-size: 16px;
}
.remindstop{
    background-color: #F3DC8F  ;
     position: absolute;
   color: #fff;

        right: 17%;
    bottom: 18%;
    width: 115px;
    height: 40px;
    text-shadow: 2px 1px 2px grey;
    font-size: 16px;

}
</style>