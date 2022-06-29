<template>
  <div class="l">
        <mt-header fixed title="登录"></mt-header>
        
        <div class="img">
          <!-- <img :src="pic" width="120" height="120"/> -->
        </div>

        <p class="title">游客登录</p>

        
        <br>

        <div class="l">
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<br>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

          <br/>

          <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
			<router-link to="/my">
          <mt-button type="primary" @click="login" size="small" class="pos">登录</mt-button>

			</router-link>
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
        vue.$router.push("/home")
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
  width: 100vw;
  height: 100vh;
//   background: url(../assets/images/bg.jpg) no-repeat;
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
  color:#fff
}

.l{
  margin: 30px 10px;
}

.pos{
  position: relative;
  left:20px;
  top:30px;
}
}

</style> 
