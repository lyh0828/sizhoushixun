<template>
    <div class="container">
         <div class="header">
            <div class="header-left">
                <a href="#/petclaimed" class="router-link-active">
                              <img class="aczj-icon" src="../../images/icon.png" alt="">
                  <!-- <mt-button id="btn0" icon="back" ></mt-button> -->
                </a>
            </div>
            <div class="header-right">
               <h4 class="title">宠物认领详情</h4>  
            </div>
       </div>
       <div class="content">
          <div class="content1">
            <p class="bt"> 标题 | <span class="title">{{title}}</span></p>
             <img  :src="img">
             <p class="bt">备注详情 | <span class="title">{{details}}</span></p>
          </div>
          <div class="content23">
              <div class="content2">
                <p class="bt">宠物品种:<span class="title">{{species}}</span></p>
                <p class="bt"> 宠物性别:<span class="title">{{gender}}</span></p>
                <p class='bt'>捡到时间:<span class="title">{{found_time |dateFormat}}</span></p>
                <p ><span class="mui-icon mui-icon-location"></span><span class="title">{{found_address}}</span></p>


              </div>
              <div class="content3">
                <p class="tip">认领请联系|留言</p>
                <!-- 点击手机号从底部弹出行动表 -->
                <mt-button  @click.native="sheetVisible = true" class="btn">
                    <span class="mui-icon mui-icon-phone"></span>
                    <span class="title">{{tel}}</span>
                </mt-button>
                <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

               <p  class="bt"><span class="mui-icon mui-icon-weixin"></span><span class="title">{{weixin}}</span></p>
               <router-link to="/goodscomments">
                 <i class="el-icon-edit" style="font-size:16px;color:blueviolet">留言</i>
               </router-link>
              </div>
          </div>
          

       </div>
                          
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js' 
export default {
     data(){
        return{
           id:'',
           details:'',
           found_address:'',
           found_time:'',
           gender:'',
           img:'',
           species:'',
           tel:'',
           weixin:'',
           title:'',
  
  sheetVisible: false,
             actions: []


        }
    },
    // 行动表相关代码
        mounted() {
      this.actions = [
        {
        name: '复制',
        method: this.copy
         }, 
        {
        name: '呼叫',
        method: this.call
        },
         {
        name: '添加到手机通讯录',
        method: this.add
        }
     ]
    },
    created(){
        this.getPetInfo();
    },

    methods:{
      //获取每个宠物认领对应的详情数据
        getPetInfo(){
            this.$http.get("petclamiedinfo/show?id="+this.$route.params.id).then(result=>{
                console.log(result.body)
                // if(result.body.status===0){
                  this.id=result.body._id
                  this.details=result.body.details
                  this.found_address=result.body.found_address
                  this.found_time=result.body.found_time
                  this.gender=result.body.gender
                  this.img=result.body.img
                  this.species=result.body.species
                  this.tel=result.body.tel
                  this.weixin=result.body.weixin
                  this.title=result.body.title
            })
        },
      copy() {
       mui.toast('复制成功',{ duration:'short', type:'div' })
      },
      call() {
               mui.toast('即将跳转',{ duration:'short', type:'div' })

      },
      add(){
              mui.toast('即将跳转',{ duration:'short', type:'div' })

      }


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
  font: 14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;

  background-color:#f4f4f4;
}
 p{
  font-size:16px;
  color:#808080;
  }
   .bt{
          color:black;
          font-size:18px;
         }
         .title{
          color:#808080;
            font-size:16px;
         }
.header{
  margin-top:50px;
  width:100%;
  padding-left:20px;
  // border:1px solid red;
  display:flex;
  flex-direction: row;
  .header-left{
   margin-left:10px;
    .aczj-icon{
        width:50px;
        height:40px;
        border-radius: 10px;
    }
  }
  .header-right{
    margin-left:100px;
    .title{
      color:black;

    }
  }

}
.content{
  //  border:1px solid red;
     margin-top:10px;
    width:100%;
    //  padding-left:20px;
     .content1{
        //  border:1px solid red;
         margin-top:20px;
         width:95%;
         margin:auto;
         height:auto;
         background-color:#fff;
         border-radius: 10px;
         padding-top:10px;
         padding-left:10px;
        padding-bottom:10px;
         img{
        height:150px;
        width:200px;
          border-radius: 15px;
        //   margin-left:-15px;
        }
     }
     .content23{
        padding-bottom:20px;

      .bt{
        display:block;
        margin-top:15px;
        
         }
          .title{
          color:#808080;
          font-size:16px;
         }

      display:flex;
      flex-direction: row;
       width:95%;
         margin:auto;
        //  border:1px solid red;

      .content2,.content3{
        margin-top:20px;
        padding-left:10px;
        padding-top:10px;
        padding-bottom:20px;
        width:47%;
        height:250px;
        background-color:#fff;
        border-radius: 10px;
      }
      .content2{
        margin-right:20px;
      }
      .content3{
        .tip{
        margin-top:20px;

        }

      }
     }

}


</style>


