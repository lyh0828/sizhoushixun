<template>
  <div class="l">
        <mt-header fixed title="登录"></mt-header>
        
        <div class="img">
          <!-- <img :src="pic" width="120" height="120"/> -->
        </div>

        <p class="title">登录</p>

        
        <br>

        <div class="l">


          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

          <br/>

          <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>

          <mt-button type="primary" @click="login" size="small" class="pos">登录</mt-button>
        </div>
    
  </div>
</template>

<script>

// import vue from '../main'
export default {
  data() {
    return {
      // pic:require("../assets/1.jpg"),
      username:"",
      password:""
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
    }

  },
  methods: {
    login(){
      if(this.username == localStorage.getItem("username") && 
      this.password == localStorage.getItem("password")){
        this.$router.push("/my")
      }else{
        alert("用户名或密码不正确!")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-cell-wrapper{
  height:100px;
}
.mint-field-core{

  border: none;
  height: 200px;
}
.l{
  // width: 100vw;
  height: 100vh;
  background: url(../../images/login.jpg) no-repeat;
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
.mint-cell-wrapper{
  width: 100px;
  height: 50px;
}

.title{
  text-align: center;
  font-size: 30px;
  margin-top: -80px;
  color:black
}

.l{
  margin: 30px 10px;
}

.pos{
  position: relative;
  top:30px;
}
}
.l>>> input {
  margin-bottom: unset;
  border: none;
}
.mint-button--small {
  display: block;
  margin: 0 auto;
}
</style>