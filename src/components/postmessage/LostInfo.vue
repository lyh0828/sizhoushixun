<template>
    <div>
          <div class="info-header">
            <a   id="icon-person" class="active">
                <span class="mui-icon mui-icon-person-filled"></span>
            </a>
            <router-link to="/foundinfo"  >
                 <button  type="button" class="mui-btn  " >
					我捡到了
			</button>
            </router-link>

           <router-link to="/lostinfo" >
                <button type="button" class="mui-btn mui-active">
                    我丢失了
            </button>
           </router-link>
        </div>

        <div class="info-messages">
            <div class="mui-input-row">
                <label>标题</label>
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>宠物种类</label>
                <!-- <select class="species">
						<option value="cat">猫咪</option>
						<option value="dog">狗狗</option>
                        <option value="qita">其他爱宠</option>
				</select> -->
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>

			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>宠物性别</label>
                <div class="sexcontainer">
                     <input class="sex" type="radio" name="sex" value="male">公
                     <input class="sex"  type="radio" name="sex" value="female">母 
                </div>
                  
                 <!-- <select class="species">
						<option value="cat">公</option>
						<option value="dog">母</option>
				</select> -->
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>丢失的地点</label>
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>丢失的时间</label>
                <!-- <button id="demo1" data-options="{}" class="btn mui-btn mui-btn-block">选择日期时间 ...</button> -->
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row" >
                <label>详情</label>
				<textarea id="textarea" rows="5" placeholder="不要着急，尽可能的把信息描述详尽，以便于尽快找到！好运~~"></textarea>
			</div>
        </div>
        <div class="photos">
            <p>请上传照片</p>
            <form class="container" enctype="multipart/form-data" method="post" id='formBox' name="form"> 
                <input type="file" id="chooseImage" name="file">
                 <!-- 保存用户自定义的背景图片 -->
                 <!-- <img id="cropedBigImg" value='custom' alt="lorem ipsum dolor sit" data-address='' title="自定义背景"/> -->
            </form>
        </div>
        <div class="phone">
            <div   class="mui-input-row">
                <label class="lb">
                    <a id="icon-phone"><span class="mui-icon mui-icon-phone"></span></a>
                </label>
                <input type="text" class="mui-input-clear" placeholder="请输入你的手机号" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <div class="mui-input-row">
                <label class="lb">
                    <a><span class="mui-icon mui-icon-weixin"></span></a>
                </label>
                <input type="text" class="mui-input-clear" placeholder="请填写你的微信号" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
        </div>
        <div class="btn">
            <router-link to="/petlost">
                 <button type="button" class="mui-btn mui-btn-primary mui-btn-block">发布</button>
            </router-link>
        </div>


    </div>

</template>
<script>
export default {
    
}
</script>

<style  lang="scss" scoped>
// .v-enter,.v-leave-to{
// 				opacity: 0;
// 				transform: translateX(50px);
// 			}
// 			.v-enter-active,.v-leave-active{
// 				transition: all 0.5s ease;
// 			}
.info-header{
    margin-right:10px;
    margin-left:15px;
    margin-top:50px;
    margin-bottom:10px;
    width:90%;
    height:40px;
    // border:1px solid red;
    float:left;

    .active{
        margin-right:60px;
        .mui-icon.mui-icon-person-filled{
          font-size:30px;
        }
        width:50px;
        height:40px;
    }
    .mui-btn{
        margin-right:50px;
    }
}
.info-messages{
    // margin-left:15px;
    clear:both;
    width:100%;
    height:450px;
    // border:1px solid red;
    background-color:#FFF;
    // border-radius: 15px;
    hr{
        width:95%;
        margin-left:5px;
    }
    .line{
        width:95%;
        margin:auto;
        // height:1px ;
        border:0.5px solid #808080;
    }
    .mui-input-row{
        label{
            width:30%;
        }
      .mui-input-clear{
         width:70%;
      }
      .sexcontainer{
         margin-top:15px;
        display:flex;
        flex-direction: row;
      }
      .sex{
        width:10%;
      }
        #textarea{
             border-radius: 15px;
            background-color:#fff;
            width:70%;
         }
   }
}
.photos{
    margin-top:10px;
    margin-bottom:10px;
    width:100%;
    height:200px;
    border:1px solid red;
    background-color:#FFF;
    // border-radius:15px;
    hr{
        width:95%;
        margin-left:5px;
    }
    .file{
          border:1px solid red;
        .update{
            width:100px;
            height:100px;
            border:1px solid red;
        }
        .img{
            width:100px;
            height:100px;

        }
    }
}
.phone{
    .lb{
        width:20%;
    }
    .mui-input-clear{
        width:80%;
    }
 }
 .mui-btn-block {
    font-size: 18px;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 6px 0; 
}
 .btn{
    margin-left:40px;
    margin-top:10px;
    margin-bottom:10px;
    width:80%;
    height:100px;
 }
</style>