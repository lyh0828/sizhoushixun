<template>
    <div id="bg">
      <div id="container">
        <header class="header">
           <div class="top_left">
               <div class="left1">
                   <img src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
               </div>
               <div class="left2">
                    <h4>{{sname}}</h4>
                    <p>{{smail}}</p>
                    <!-- <button @click.prevent="logout">退出</button> -->
               </div>
           </div>
           <div class="top_right">
               <img @click.prevent="logout" src="https://img2.baidu.com/it/u=2400964198,3630707189&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260">
           </div>
       </header>

        <!-- <h1>个人信息</h1>
      <p><span>姓名：</span>{{sname}}</p>
      <p><span>邮箱:</span>{{smail}}</p>
      <p><span>手机号：</span>{{stel}}</p>
      <button @click.prevent="logout">退出</button> -->
       <main>
          <div class="ul1">
               <ul class="mui-table-view mui-grid-view mui-grid-9">
				<!-- mui-col-xs-4 意思是屏幕窄的时候，12/4=3列 
					mui-col-sm-3  意思是屏幕大的时候12/3=4列 如果要调成5列，则需要先调成四列，然后改每一列的宽度-->
				
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://img.alicdn.com/imgextra/i1/O1CN0109fmGZ29aWSN5Qeyl_!!6000000008084-2-tps-96-96.png" alt="">
						<div class="mui-media-body">收藏</div></a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://img.alicdn.com/imgextra/i3/O1CN01kM35wj1F5Gx4IZpi5_!!6000000000435-2-tps-96-96.png" alt="">
						<div class="mui-media-body">订阅信息</div></a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://img.alicdn.com/imgextra/i1/O1CN018wxIjC25ghKrPUb39_!!6000000007556-2-tps-96-96.png" alt="">
						<div class="mui-media-body">足迹</div></a>
				</li>
			</ul> 
        </div>

        <div class="ul2">

            <ul class="mui-table-view mui-grid-view mui-grid-9">
				<!-- mui-col-xs-4 意思是屏幕窄的时候，12/4=3列 
					mui-col-sm-3  意思是屏幕大的时候12/3=4列 如果要调成5列，则需要先调成四列，然后改每一列的宽度-->
                <h4 class="title">我的</h4>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/fabu" >
                    <a href="#">
                        <img src="../../images/fabu.jpg" alt="">
                        <div class="mui-media-body">我的发布</div>
                    </a>
                </router-link>
						
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="../../images/fuwu.jpg" alt="">
						<div class="mui-media-body">我的寻物</div></a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="../../images/dingdan.jpg" alt="">
						<div class="mui-media-body">我的订单</div></a>
				</li>	
			</ul> 
        </div>

         <div class="ul3">

            <ul class="mui-table-view mui-grid-view mui-grid-9">
				<!-- mui-col-xs-4 意思是屏幕窄的时候，12/4=3列 
					mui-col-sm-3  意思是屏幕大的时候12/3=4列 如果要调成5列，则需要先调成四列，然后改每一列的宽度-->
                <h4 class="title">我的工具</h4>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://gw.alicdn.com/imgextra/i3/O1CN011LwFHp1KzfsNdSC6i_!!6000000001235-2-tps-76-76.png" alt="">
						<div class="mui-media-body">官方客服</div></a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://gw.alicdn.com/imgextra/i1/O1CN01l4vVKs1LiYf4PCH6t_!!6000000001333-2-tps-120-120.png" alt="">
						<div class="mui-media-body">试用领取</div></a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
						<img src="https://gw.alicdn.com/imgextra/i2/O1CN01HW4fU627T4pOU9aMZ_!!6000000007797-2-tps-120-120.png" alt="">
						<div class="mui-media-body">店铺会员</div></a>
				</li>
			</ul> 
        </div>
    </main>
    <div class="about">
            <mt-cell title="关于"  is-link></mt-cell>
            <mt-cell title="分享"  is-link></mt-cell>
            <mt-cell title="反馈与建议"  is-link></mt-cell>
            <mt-cell title="帮助"  is-link></mt-cell>

        </div>
      </div>
    </div>

</template>
<script>
export default {
    name:'host',
    data(){
      return{//获取用户信息到主页
        sname:localStorage.getItem('name'),
        smail:localStorage.getItem('mail'),
        stel:localStorage.getItem('tel'),
        // isAuth:"",//是否保持登录状态
      };
    },
    // created() {
    //         console.log(localStorage.getItem("Login"));
    //         if(localStorage.getItem("Login")){
    //             console.log("登录过了");//登录成功了，保留在登录页面   
    //         }else{
    //             console.log("没有登录");
    //             this.$router.push("/login");//没有登录过 返回登录页面
    //         }
    //       },
    methods:{
      //当点击退出按钮，将不保存登录状态
      logout:function()
      {
        // this.isAuth="false";//修改登录状态
        localStorage.removeItem('s');
        this.$router.replace('/login');//页面跳转至登录页面
      }
    }
}
</script>

<!-- //css -->
<style lang="scss" scoped>
.header{
      margin-top:50px;
     z-index: 2;
     padding:10px ;
        width:100%;
        height:80px;
        .top_left{
            width:60%;
            height:100%;
            float:left;
            position:relative;
            .left2{
                position:absolute;
                top:0px;
                left:90px;
            }
             .left1{
                position:absolute;
                top:0px;
                left:0px;
                img{
                    width:70px;
                    height:70px;
                    border-radius: 50%;
                }
            }
        }
        .top_right{
            width:10%;
            float:right;
                 img{
                    width:30px;
                    border-radius: 50%;
                }
        }
    }
    .ul1{
        z-index:1;
 .mui-table-view.mui-grid-view.mui-grid-9{
	width:100%;
    margin:auto;
    // margin-top:-10px;
	li{
	border:none;
	width:33.3%;
    padding-top:0px;
    padding-bottom:0px;
	}
	img{
		width:45px;
		height:45px;
	}

}
    }
.ul2,.ul3{
    .mui-table-view.mui-grid-view.mui-grid-9{
	background-color:#fff;
	border:none;
	border-radius: 20px;
	width:auto;
	margin:0px 10px 20px 10px;
    .title{
    padding-top:10px;
    padding-left:10px;
    }
	li{
	border:none;
	width:30%;
     padding-top:0px;
	}
	img{
		width:45px;
		height:45px;
	}

}
}
.ul3{
     .mui-table-view.mui-grid-view.mui-grid-9{
    li{
	border:none;
	width:25%;
     padding-top:0px;
	}
     }
}
.about{
   width:95%;
   height:280px;
//    border:1px solid red;
   border-radius:20px;
   margin-left:10px;
}
/* #container{
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
  color: white;
}
#bg{
  width: 100%;
    height: 100%;
    
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}
p{
  font-size: 20px;
  margin-top: 20px;
  text-align: left;
  margin-left: 32%;
  
}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: none;
  color: white;
  margin-left: 10px;
} */
</style>
