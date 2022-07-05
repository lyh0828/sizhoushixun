<template>

 <el-tabs stretch  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="宠物店" name="first">
         <div class="center">
            <div class="header">
              <!-- 轮播图 -->
                 <mt-swipe :auto="2000">
                    <mt-swipe-item>
                      <img src="../../images/h1.webp" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                      <img src="../../images/h.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                      <img src="../../images/h3.webp" alt="">
                    </mt-swipe-item>
				      	</mt-swipe>
            </div>
            <h4>内容</h4>
            <ul class="ul">
                <li class="li" v-for='item in newsList' :key="item._id">
                  <router-link :to="'/petshop/'+item._id">
                       <img class="img2" :src="item.img" >
                        <div class="texts">
                            <span class="kg">{{item.title}}</span>
                            <span class="kg">{{item.juli}}</span>
                            <span class="kg">服务{{item.cishu}}次</span>
                            <p >{{item.danwei}}</p>
                        </div>
                  </router-link>
                </li>
            </ul> 
        </div> 
      </el-tab-pane>

        <el-tab-pane label="宠物医疗" name="second">
              <div class="center">
                <div class="header">
                  <input style="width:350px;margin-right:10px;" type="text">
                  <span class="mui-icon mui-icon-chat"></span>
                </div>
                <div class="ul1">
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
              <!-- mui-col-xs-4 意思是屏幕窄的时候，12/4=3列 
                mui-col-sm-3  意思是屏幕大的时候12/3=4列 如果要调成5列，则需要先调成四列，然后改每一列的宽度-->
              
                      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                          <img src="../../images/i1.jpg" alt="">
                          <div class="mui-media-body">快速问诊</div></a>
                      </li>
                      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                          <img src="../../images/i2.jpg" alt="">
                          <div class="mui-media-body">健康报告</div></a>
                      </li>
                      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                          <img src="../../images/i3.jpg" alt="">
                          <div class="mui-media-body">咨询案例</div></a>
                      </li>
                   </ul> 
              </div>
              <div class="cc">
                <div class="ct1">
                     <p  class="t1">咨询案例</p>
                </div>
                <div class="ct2 ct3">
                  <p class="t1">猫咪肠胃不好怎么办？</p>
                  <p class="t2">首先要控制好猫咪的食量,采用少食多餐制,这样能减轻猫咪的肠胃负担,增加对营养的消化吸收。</p>
                </div>
              
                <div class="ct2">
                  <p class="t1">狗狗为什么喜欢追尾巴？</p>
                  <p class="t2">尾巴有寄生虫狗狗的尾巴也会寄生很多体外寄生虫，寄生虫使得狗狗的尾巴瘙痒难耐，为了减缓这种瘙痒，狗狗就会转圈圈咬尾巴，试图甩出这些寄生虫，要是你家狗狗突然追着自己的尾巴玩，铲屎官要注意狗狗身上是不是有虫了。.</p>
                </div>
                <img class="db" src="../../images/db.png" alt="">
                 <div class="bj"> </div>
              </div>
             

              </div>
        </el-tab-pane>
         <el-tab-pane  style="" label="宠友动态" name="three">
                <div class="center">
                    <ul class="ul3">
					          <li  class="li3" v-for="item in List" :key="item._id">
		                    <router-link :to="'/petfrienddetails/'+item._id">
                         
		                       <img class="img1" :src="item.img1">
                            <div class="info">
                                <p class='title'>{{item.title}}</p>
                                  <div class="info2">
                                      <img  class="photo" :src="item.photo" alt="">
                                      <div class="nichen">{{item.nichen}}</div>
                                      <span id="i" class="mui-icon-extra mui-icon-extra-heart"></span>
                                      <div class="click">{{item.click}}</div>
                                  </div>
                                   
                          </div>
                        </router-link>
                    </li>
			        </ul>
      
                </div>  
                

        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
     data() {
      return {
        activeName: 'first',
        newsList:[],
        List:[]
      };
    },
     created(){
        this.getnewslist(),
        this.getnewslist2()

    },
    methods: {
      //获取宠物店信息
    getnewslist(){
            this.$http.get('petsmartinfo').then(result=>{
                 console.log(result.body)
                   this.newsList= result.body
                
            })
        },
        //获取宠友动态信息
        getnewslist2(){
          this.$http.get('http://36.138.183.223:3000/petfriendinfo').then(result=>{
                 console.log(result.body)
                   this.List= result.body
                
            })
        },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>
<style scoped lang="scss">
.el-tabs.el-tabs--top{
    margin-top:40px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
}
.el-tabs__content{
    height:1000px;
}
.el-tab-pane{
    height:auto;
    padding-bottom:20px;
margin-bottom:20px;
}
.el-tabs__nav{
  padding-left:10px;
}
.center{
  margin:0px;
  .header{
margin-bottom:0px;
	.mint-swipe{
	height:170px;
	width:100%;
	max-width: 100%;
	border-radius:15px;
	margin-bottom:10px;
	padding:0px;
	img{
		width:400px;
		height:170px;
	border-radius:15px;
	}
} 
  }
    .ul{
        padding:0px;
        .li{
    list-style: none;
    position:relative;
	border-radius:10px;
  margin-bottom:15px;

    .img2{
         width:390px;
        margin:auto;
        height:200px;
	border-radius:10px;

    }
    .texts{
      border-radius:0px 0px 10px 10px;
      position:absolute;
      margin:auto;
      height:60px;
      top:140px;
      // left:10px;
      width:390px;
      // border:1px solid red;
      color:#fff;
      background-color: rgba(37, 35, 35, 0.7);
      padding-top:7px;
      padding-left:10px;
      .kg{
      padding-right:20px;

      }
      p{
        display:block;
        padding-top:5px;
        padding-bottom:5px;
margin-bottom:0px;
        color:#fff;
        font-size: 14px;
        font-weight: 800;
      }
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
        .cc{
   
      width:100%;
      // padding-left:10px;
      padding-right:10px;
      // border:1px solid red;
      .ct1{
      // border:1px solid red;
      background-color:#fff;
      height:30px;
      width:412px;
      margin-bottom:5px;
      padding-top:5px;
      padding-left:10px;
        .t1{
          color:black;
        }

      }
      .ct2{
           padding-top:5px;
      padding-left:10px;
           background-color:#fff;
                height:150px;
      width:412px;
      margin-bottom:5px;

          .t1{
            font-size:18px;
            font-weight:800;
            color:#333;
          }
          .t2{
            width:380px;
          }
      }
      .ct3{
        height:100px;
      }
    }
    .db{
      width:412px;
      margin:auto;
    }
    .bj{
        height:20px;

    }
    .ul3{
        margin:0px;
      padding:0px;
      width:100%;
      height:100%;
      padding-left:8px;
      display:flex;
      flex-direction: row;
      flex-wrap:wrap;
 .li3{

  list-style:none;
  width:46%;
  // height:150px;
  // border:1px solid red;
  border-radius: 5px;
  margin-right:15px;
  margin-bottom:10px;

 }
    }
.img1{
  width:180px;
  height:230px;
  border-radius: 5px;
}
.photo{
  width:30px;
  height:30px;
  border-radius: 50%;
}
.title{
  font-size:18px;
font-weight:600;
color:#333;
}
.info2{
  display: flex;
  flex-direction: row;
}
.nichen{
    display:block;
    width:250px;
    margin-left:5px;
}
#i{
margin-top:5px;
color:#808080;

 margin-right:8px;
 font-size:18px;
}
  .nichen,.click{
font-size:14px;
color:#808080;
margin-top:5px;
  }
  .click{
    position:relative;
    right:5px;
  }

}
</style>