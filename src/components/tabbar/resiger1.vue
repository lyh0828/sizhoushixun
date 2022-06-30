<<<<<<< HEAD:src/components/tabbar/resiger.vue

=======
>>>>>>> 0bb9b8426aaea1ebf89c0bb3cab3b7c1ee74304b:src/components/tabbar/resiger1.vue
<template>
  <div class="r">
    <mt-header fixed title="注册"></mt-header>

     <div class="img">
        <!-- <img :src="pic" width="120" height="120"/> -->
     </div>

     <p class="title">注册</p>

      <br>

        <div class="l">

          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

          <br/>

          <mt-field label="密码" placeholder="请输入注册密码" v-model="password"></mt-field>

          <br/>

          <mt-field label="确认密码" placeholder="请输入确认密码" v-model="chPsw"></mt-field>

          <mt-button  style="margin-left:130px" @click="register" type="primary" size="small" class="pos">注册</mt-button>
        </div>
  </div>
</template>

<script>
// import vue from '../../../src/main'
export default {
  data() {
    return {
      // pic:require("../assets/1.jpg"),
      username:"",
      password:"",
      chPsw:""
    }
  },

   watch:{
    username(newVal, oldVal){
      if(newVal == ""){
        alert('用户名不能为空');
      }
    },

    password(newVal, oldVal){
      if(newVal == ""){
        alert('密码不能为空');
      }
    },

    chPsw(newVal, oldVal){
      if(newVal == ""){
        alert('确认密码不能为空');
      }
    },
  },
  methods: {
    register(){
      localStorage.setItem("username",this.username);
      if(this.password === this.chPsw){
        localStorage.setItem("password",this.password)
      }else{
        alert("用户密码和确认密码不一致!");
        return;
      }
      alert("注册成功!");
      this.$router.push('/login')
      // vue.$router.push("/login")
    }
  },
  // deactivated:{
  //   this.$destroy('componentName')
  // }

};
</script>

<style lang="scss" scoped>
.r{
  width: 100vw;
  height: 100vh;
  background: url(../../images/login.jpg) repeat;
  background-size: 100% 100%;

  .img{
  width: 100%;
  height:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 50%;
    margin-top: 36px;
  }
}


.title{
  text-align: center;
  font-size: 30px;
  margin-top: -80px;
  color:black
}

.l{
  margin: 30px 30px;
  margin-top: -10px;
  // border: 1px solid #fff
}

.pos{
  position: relative;
  left:20px;
  top:30px;
}
}
.l >>> input {
  margin-bottom:unset;
  border: none;
}

</style> 
