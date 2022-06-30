<template>
    <div class="container">
         <div class="center">
    <div class="title">{{title}}</div>
    <img  class="img" :src="img">
    <div class="detail">{{details}}</div>
    <div class="t-a">
      <div class="time">{{time}}</div>
      <span class="mui-icon mui-icon-location"></span>
       <div class="address">{{address}}</div>
    </div>
    <div class="t-b">
      <span class="mui-icon-extra mui-icon-extra-heart"></span>
        <div class="tel">{{click}}</div>

    </div>
</div>        
    </div>
</template>
<script>
// import mui from '../../lib/mui/js/mui.js' 
export default {
     data(){
        return{
          //  id:'',
           details:'',
           address:'',
           time:'',
           img:'',
           click:'',
           title:'',
            // sheetVisible: false,
            //  actions: []

        }
    },
    // mounted() {
    //   this.actions = [
    //     {
    //     name: '复制',
    //     method: this.copy
    //      }, 
    //     {
    //     name: '呼叫',
    //     method: this.call
    //     },
    //      {
    //     name: '添加到手机通讯录',
    //     method: this.add
    //     }
    //  ]

    // },
    created(){
        this.getPetInfo();
    },
    methods:{
        getPetInfo(){
            this.$http.get("http://36.138.183.223:3000/petnewsinfo/show?id="+this.$route.params.id).then(result=>{
                console.log(result.body)
                // if(result.body.status===0){
                    //  this.id=result.body._id
                      this.details=result.body.details
                       this.address=result.body.address
                        this.time=result.body.time
                          this.img=result.body.img
                             this.click=result.body.click
                               this.title=result.body.title

            })
        },
      //     copy() {
      //  mui.toast('复制成功',{ duration:'short', type:'div' })
      // },
      // call() {
      //          mui.toast('即将跳转',{ duration:'short', type:'div' })

      // },
      // add(){
      //         mui.toast('即将跳转',{ duration:'short', type:'div' })

      // }
    },
     filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }
}
</script>
<style scoped lang="scss">
.container{
  margin-top:40px;
  margin-right:10px;
}
.center{
        width:412px;
        /* border:1px solid red; */
        margin:auto;
        padding-top: 10px;
        padding-bottom: 50px;
      }
      .title{
        font-size: 20px;
        font-weight: 800;
        color:#808080;
        margin:auto;
        padding-bottom: 20px;
        width:400px;
      }
      .img{
        width:410px;
        height:250px;
        margin:auto;
      }
      .detail{
        width:410px;
        height:auto;
        padding-bottom:5px;
        margin-top:10px;
        margin-bottom:10px;
        line-height: 30px;
        font-size: 18px;
      }
      .t-a{
        display:flex;
        flex-direction: row;
        margin-bottom:25px;
        
      }
      .t-b{
        display:flex;
        flex-direction: row;
     
        
      }
      .time{
        padding-right:125px;
      }
      .tel{
        padding-right:30px;
      }
          
</style>