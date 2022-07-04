<template>
    <div class="remindinfo">
      <div class="detailinfo">
       <img :src="img" alt="">
        <span>{{name}}</span>
      </div>
        <h2>
       
        计划时间
      </h2>

     <div id="date_time_picker">
 
    <van-button plain type="primary" @click="showPopFn()">点击选择日期</van-button>
    <van-field v-model="timeValue" placeholder="选择的日期结果" readonly />
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="datetime" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()"  />
    </van-popup>
 
  </div>
  <!-- <button @click="close">关闭提醒</button> -->
     <audio loop id="remindmp3">
  <source src="../../images/remind.mp3" type="audio/mpeg" >

</audio>

<van-dialog
  v-model="showdia"
  title="标题"
  show-cancel-button
>
</van-dialog>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js' 
export default {
    data() {
        return {
          showdia:false,
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
       name:'',
       img:""
        }
    },
    created() {
       this.getremind()

  
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
       getremind() {
      this.$http
        .get("addremind/info/" + '?id='+this.$route.params.id)
        .then((result) => {
          console.log(result.body)
         this.name= result.body.name;
          this.img = result.body.img;
         
        })
        .catch((err) => {});
    },
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
           this.ssecond = systemTime.getSeconds();

console.log(this.shour,this.sminute)
         if(this.hour==this.shour&&this.minute==this.sminute&&this.ssecond==0){
            var mp3=document.getElementById('remindmp3')
             mp3.play() ;           
            console.log("111")
            this.timeValue="",
            this.shour="",
            this.sminute=""
            // this.showdia=true
          this.$dialog.alert({
         title: "提醒", //加上标题
         message: this.name+"时间到了", //改变弹出框的内容
         showCancelButton: true //展示取水按钮
})
.then(() => { //点击确认按钮后的调用
          var mp4=document.getElementById('remindmp3')
                mp4.pause() 
          console.log('111')
})
.catch(() => { //点击取消按钮后的调用
          var mp4=document.getElementById('remindmp3')
                mp4.pause() 
          console.log('111')
})
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
        h2{
          font-size: 20px;
              margin-left: 20px;
              margin-top: 20px;
        }
    }
    .add{
         width: 17%;
    height: 66%;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
    }
    .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: inline-block;
    box-sizing: border-box;
    width: 75%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
   

    margin-left: -4px;
    left: 0;
    }
    .van-button--plain.van-button--primary {

    background-color: rgb(38, 162, 255);
    border: 1px solid rgb(38, 162, 255);
    color: #fff;
    position: relative;
    margin-right: 10px;
 
        left: 299px;
    top: 48px;
    height: 37px;
    }
    .van-cell{
      background-color: rgb(239, 239, 244);
    }
    .detailinfo{
      width: 100%;
      height: 100px;
      img{
        margin:20px;
        width: 20%;
        border-radius: 50%;

      }
      span{
      
            margin-top: 42px;
    position: absolute;
    font-size: 20px;
    font-weight: 500;
      }
    }
</style>