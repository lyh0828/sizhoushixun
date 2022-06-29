<template>

 <el-tabs stretch  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="宠物店" name="first">
         <div class="center">
            <div class="header">
                 <mt-swipe :auto="3000">
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
         <el-tab-pane label="宠友动态" name="three">
              <div class="center">
                  <div class="sx">筛选</div>
                  <ul class="ul">
                    <li class="li1">
                      <img class="img22" src="../../images/cy4.webp" >
                        <div class="texts">
                            <span class="kg">陪一只猫长大是最快乐的事</span>
                        </div>
                   
                    </li>
                    <li class="li1">
                      <img class="img22" src="../../images/cy2.webp" >
                        <div class="texts">
                            <span class="kg">看这它慵懒的样子，好幸福，羡慕</span>
                        </div>
                   
                    </li>
                    <li class="li1">
                      <img class="img22" src="../../images/cy3.webp" >
                        <div class="texts">
                            <span class="kg">狗狗是人类的朋友</span>
                        </div>
                   
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
      };
    },
     created(){
        this.getnewslist()

    },
    methods: {
    getnewslist(){
            this.$http.get('petsmartinfo').then(result=>{
                 console.log(result.body)
                   this.newsList= result.body
                
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
  .center{
    .header{
      display:flex;
      flex-direction: row;

    }
  }
  .sx{
    background-color:snow ;
    width:390px;
    margin:auto;
    height:40px;
    line-height:40px;
    text-align: center;
  }
          .li1{
    list-style: none;
    position:relative;
	border-radius:10px;
  margin-bottom:15px;

    .img22{
         width:390px;
        margin:auto;
        height:150px;
	border-radius:10px;

    }
    .texts{
      border-radius:0px 0px 10px 10px;
      position:absolute;
      margin:auto;
      height:40px;
      top:110px;
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
</style>