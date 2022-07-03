<template>
    <div class="remindinfo">
     <div id="date_time_picker">
 
    <van-button plain type="primary" @click="showPopFn()">点击选择日期</van-button>
    <van-field v-model="timeValue" placeholder="选择的日期结果" readonly />
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="datetime" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()"  />
    </van-popup>
 
  </div>
  <button @click="close">关闭提醒</button>
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
                currentDate: new Date(),
        changeDate: new Date(),

              show: false, // 用来显示弹出层
        timeValue: '',
        year:'',      //自己要设置的年份
        month:'',//自己要设置的月
        day:'',//自己要设置的日期
        hour:'',//自己要设置的小时
        minute:"",//自己要设置的分钟
         shour:'',
        sminute:"",
        }
    },
    created() {
         this.clock()
console.log(this.shour,this.sminute)
  
    },
    mounted() {
      var timers
    timers = setInterval(() => {
      this.clock();
    }, 1000)


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
        confirmFn() { // 确定按钮
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
    
     	mui.toast('添加成功');

      },
    
      clock(){
        var systemTime=new Date()
        this.shour=systemTime.getHours()
       this.sminute=systemTime.getMinutes()
        if(this.shour<10){
            this.shour="0"+this.shour;
        }
         if (this.sminute < 10) {
        this.sminute = "0" + this.sminute;
      }


console.log(this.shour,this.sminute)
         if(this.hour==this.shour&&this.minute==this.sminute){
            var mp3=document.getElementById('remindmp3')
             mp3.play() ;           
            console.log("111")
            this.timeValue="",
            this.shour="",
            this.sminute=""
        }
 
      },
        close(){
    var mp4=document.getElementById('remindmp3')
                mp4.pause() 
                console.log('关闭按钮')
 },

      
    },
   

}
</script>

<style lang="scss">
    .remindinfo{
        margin-top: 40px;
    }
</style>