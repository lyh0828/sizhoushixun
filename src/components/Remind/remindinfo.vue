<template>
<div class="remindinfo">
  <h3>⌚设置时间提醒</h3>
  <div class="hello">
    <canvas id="canvas" width="300" height="300"></canvas>
    <div class="date">
      {{date}}
    </div>
  </div>
      <div class="container">
        <div class="clocksqure">
        <div class="box fl"></div>
      <div class="time fl"></div>
      <div class="clear"></div>
        </div>    
    </div>
      <div class="set">
        <input
          type="text"
          name="hour"
          id="hour"
          value=""
        
          v-model="h"
        />
        时
        <input
          type="text"
          name="min"
          id="min"
          value=""
         
          v-model="m"
        />
        分
        <input
          type="text"
          name="sec"
          id="sec"
          value=""
       
          v-model="s"
        />
        秒
    
       
        <div class="clear"></div>
     <div class="sumbtn">
       <button id='btn' type="button" class="fr mui-btn mui-btn-blue mui-btn-outlined">添加提醒</button>
        <button id="remindstop" @click="remindstop" class="remindstop">关闭提醒</button>
     </div>
      </div>
    <div>
    <audio loop id="remindmp3">
  <source src="../../images/remind.mp3" type="audio/mpeg" >

</audio>
    </div> 
</div>

</template>

<script>
import mui from '../../lib/mui/js/mui.js' 

export default {
  name: 'remind',
  data () {
    return {
     
      date:new Date().toLocaleString(),
        h: "",
      m: "",
      s: "",
    }
  },
    created() {
    this.clock();
  },
  mounted() {
      var timer;
    timer = setInterval(() => {
      this.clock();
    }, 500),
    this.initPage()
    let _this = this
    _this.timer = setInterval(()=>{
      _this.date = new Date().toLocaleString()
    })
  },
  computed: {

  },
  methods:{
    initPage() {
      let canvas = document.getElementById('canvas')
      const _this = this
      if(canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.translate(150,150)
        setInterval(()=>{
            _this.initCanvas(ctx)
        },1000)
      }
    },
    initCanvas(ctx) {
        this.clearCanvas(ctx)
        let time = new Date()
        let secondes = time.getSeconds()
        let minutes = time.getMinutes()
        let hours = time.getHours()
        hours = hours > 12 ? hours -12 : hours
        let minute = minutes + secondes / 60
        let hour = hours + minutes / 60
        let monthStr = (time.getMonth() +1) > 9 ? time.getMonth() + 1 : '0'+ (time.getMonth() + 1)
        let dayStr = time.getDay() > 9 ? time.getDay() : '0'+time.getDay()
        ctx.save()


        //draw Numbers #EEAD0E
        ctx.font = '25px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for(let i = 1;i<13;i++) {
          let theta = Math.PI*2/12*i - Math.PI/2
          var x = 150 * 0.8 * Math.cos(theta);
          var y = 150 * 0.8 * Math.sin(theta);
          ctx.fillText(i, x, y);
        }
        ctx.restore()

        //draw Hours
        ctx.save()
        ctx.rotate(Math.PI*2/12*hour - Math.PI/2)
        ctx.beginPath()
        ctx.moveTo(-15,-5)
        ctx.lineTo(-15,5)
        ctx.lineTo(55,1)
        ctx.fill()
        ctx.restore()

        //draw Minutes
        ctx.save()
        ctx.rotate(Math.PI*2/60*minute - Math.PI/2)
        ctx.beginPath()
        ctx.moveTo(-15,-4)
        ctx.lineTo(-15,4)
        ctx.lineTo(95,1)
        ctx.fill()
        ctx.restore()

        //draw seconds
        ctx.save()
        ctx.rotate(Math.PI*2/60*secondes - Math.PI/2)
        ctx.fillStyle = 'rgb(254,228,3)'
        ctx.beginPath()
        ctx.moveTo(-15,-2)
        ctx.lineTo(-15,2)
        ctx.lineTo(105,1)
        ctx.fill()
        ctx.restore()

        ctx.save()
        ctx.font = '20px'
        ctx.fillStyle = 'pink'
        ctx.fillText('爱宠之家',-10,-80)
        ctx.restore()

        ctx.save()
        ctx.font = '30px'
        ctx.fillText((monthStr+'-'+dayStr),70,3)
        ctx.restore()

    },
    clearCanvas(ctx) {
      ctx.clearRect(-150,-150,300,300)
    },
        clock() {
      var oBox = document.querySelector(".box");
      var oTime = document.querySelector(".time");

      var oHour = document.getElementById("hour");
      var oMin = document.getElementById("min");
      var oSec = document.getElementById("sec");


      var h;
      var m;
      var s;
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
      oBox.innerText = hour + ":" + minute + ":" + second;

      oBtn.onclick = function () {
        //获取value值
      //   var h;
      // var m;
      // var s;
        this.h = oHour.value;
       this. m = oMin.value;
        this.s = oSec.value;
        //  oHour.value = "";
        // oMin.value = "";
        // oSec.value = "";
		document.getElementById("btn").addEventListener('tap', function() {
				mui.toast('添加成功');
			});
      };
      if (hour == this.h && minute == this.m && second == this.s) {

                var mp3=document.getElementById('remindmp3')
             mp3.play() ;           
        oHour.value = "";
        oMin.value = "";
        oSec.value = "";
        this.h="",
        this.m="",
        this.s=""
      }
    },
     remindstop(){
         var mp4=document.getElementById('remindmp3')
                mp4.pause() 
                document.getElementById("remindstop").addEventListener('tap', function() {
				mui.toast('关闭闹钟');
			});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.remindinfo{
  margin-top: 66px;
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

// .fr {
//   float: right;
// }
// 输出提醒时间框的样式
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

// .set button {
//   margin-top: 6px;
//   background-color: pink;
//   display: inline-block;
// }
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

