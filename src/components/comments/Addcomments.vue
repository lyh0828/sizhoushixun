<template >
<div class="content">
    <!-- 子组件 -->
     <a class="i"><span class="mui-icon mui-icon-pengyouquan"></span></a>留言
     <p></p>
    <div class='form-group'>
        <label for="" class="t"><span class="mui-icon mui-icon-person"></span></label>
        <input type="text" class="text" v-model='user' >
    </div>
    <div class='form-group'>
        <label for=""  class="t"><span class="mui-icon-extra mui-icon-extra-lamp"></span></label>
        <div class="mui-input-row">
            <textarea id="textarea"  class="text" rows="5" placeholder="进行描述~~~" v-model='content'></textarea>
        </div>
    </div>

    <button type="button" id='btn' class="mui-btn mui-btn-success mui-icon mui-icon-plus mui-right" @click="add()">提交</button>
</div>
   

</template>
<script>
export default {
   data(){
       return{
           user:'',
           content:'',
           time:new Date(),
        
       }
   },
   methods:{
       add(){
           this.$emit('func',this.user,this.content,this.time)
        //    子组件通过方法把数据传给父组件
       }
   }
}
</script>
<style lang="scss">
.content{
    margin-bottom: 0px;
}
.i{
    padding-left:10px;
}
.form-group{
    display:flex;
   
    .t{
padding-top:10px;
padding-bottom:15px;
padding-left:10px;
// padding-right:20px;

width:50px;
    }
    .text{
width:342px;
border-radius: 20px;

    }
}
    #btn{
        float:right;
        margin-right:20px;
        }
</style>