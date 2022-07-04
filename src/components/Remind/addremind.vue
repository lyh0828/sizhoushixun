<template>
    <div class="addremind">
       <h3 style="margin:20px auto;">添加提醒</h3>
        
              <!-- <img src="../../images/02.png" class="add"> -->
           
        <ul>
            
            <li v-for="item in remindList" :key="item.id">
              
                <router-link :to="'/remindinfo/'+item._id">
                     <img  :src="item.img" alt="" class="remindimg">
                     <span class="remindname">{{item.name}}</span>
                </router-link>
              
            </li>
              
         
      
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
         remindList:[],
        }
    },
    created() {
        this.addremind()
    },
    methods: {
           addremind() {
      this.$http
        .get("addremind")
        .then((result) => {
          console.log(result.body);

          this.remindList = result.body;
        })
        .catch((err) => {});
    },
    },
}
</script>
<style lang="scss" scoped>
    .addremind{
        margin-top:45px;
        height: 660px;
        background-color: rgb(252, 245, 229);
        // background-image: url('../../images/remindback.png');
        .add{
            display: inline-block;
            width: 50px;
            margin-top: 10px;
            margin-left:170px ;
        }
        h2{
            color: rgb(251, 126, 113);
            font-weight: 400;
            letter-spacing: 18px;
            padding: 10px;
           
        }
        ul{
        padding: 0;
        }
        li{
            display: inline-block;
            padding: 6px;
            width: 103px;
        }
        img{
            width: 90px;
        }
    }
    .remindimg{
        border-radius: 50%;
        background-color: rgb(251, 221, 194);
        // display: inline-block;
    }
.remindname{
    display: block;
    padding: 0 20px;
}
    
</style>