<template>
    <div>
        
            <div class="info-messages">
                <div class="mui-input-row">
                <label>标题</label>
                <input type="text" class="mui-input-clear"  placeholder="请输入" v-model='title' data-input-clear="5">
                <!-- <span class="title">{{title}}</span> -->
                <span class="mui-icon mui-icon-clear mui-hidden"></span>
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
                <input type="text" class="mui-input-clear" placeholder="请输入" v-model='species' data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>

			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>宠物性别</label>
                <div class="sexcontainer">
                     <input class="sex" type="radio" name="sex" value="公"  v-model='gender'>公
                     <input class="sex"  type="radio" name="sex" value="母"  v-model='gender'>母 
                </div>
                  
                 <!-- <select class="species">
						<option value="cat">公</option>
						<option value="dog">母</option>
				</select> -->
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>捡到的地点</label>
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5" value="found_address" v-model="found_address"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>捡到的时间</label>
                <el-date-picker
      v-model="found_time"
      value-format="timestamp"
      type="datetime"
      placeholder="选择日期时间"
     >
    </el-date-picker>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row" >
                <label>详情</label>
				<textarea id="textarea" rows="5" v-model="details" placeholder="尽可能把宠物特征描写详细,方便宠物找到主人"></textarea>
			</div>

        </div>
        <div class="photos">
            <p class="title">请上传图片</p>
            <hr>
                <div class="file">
                    <input type="file" class="update" accept="image/*" @change="change($event)"  ref="updata">
                    <img :src="imageUrl?imageUrl:baseImg" alt="" class="img">
                </div>
                
        </div>
        <div class="phone">
            <div   class="mui-input-row">
                <label class="lb">
                    <a id="icon-phone"><span class="mui-icon mui-icon-phone"></span></a>
                </label>
                <input type="text" class="mui-input-clear" placeholder="请输入你的手机号" data-input-clear="5" v-model="tel">
			</div>
            <div class="mui-input-row">
                <label class="lb">
                    <a><span class="mui-icon mui-icon-weixin"></span></a>
                </label>
                <input type="text" class="mui-input-clear" placeholder="请填写你的微信号" data-input-clear="5" v-model="weixin">
			</div>
        </div>
        <div class="btn">
            <router-link to="/fabu">
                 <button type="submit" class="mui-btn mui-btn-primary mui-btn-block" v-on:click="addInfo">发布</button>
            </router-link>
        </div>

    </div>
</template>
<script>
export default {
   
    data(){
        return {
            imageUrl:'',//上传的图片
            baseImg:'', //默认的图片
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
        }
    
    },
    created(){
        this.getPetInfo();
         this.baseImg=require('../../images/photo.jpg')
    },
    methods:{
           change(e) {
      console.log(e.target.files[0].name);
      // 判断是不是规定格式
      // let name  =  e.target.files[0].name

      // 获取到第一张图片
      let file = e.target.files[0]

      // 创建文件读取对象
      var reader = new FileReader()
      var that = this 

      //  将文件读取为DataURL
      reader.readAsDataURL(file)

      // 读取成功调用方法
      reader.onload = e => {
        console.log('读取成功');

        // e.target.result 获取 读取成功后的  文件DataURL
        that.imageUrl = e.target.result

        // 如果要将图片上传服务器，就在这里调用后台方法
      }

     },
            getPetInfo(){
            this.$http.get("petclamiedinfo/edit?id="+this.$route.params.id).then(result=>{
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
       addInfo(){
					this.$http.post('petclamiedinfo/edit',{
					title:this.title,
					species:this.species,
					gender:this.gender,
					found_address:this.found_address,
					found_time:this.found_time,
                    details:this.details,
                    img:this.imageUrl,
                    tel:this.tel,
                    weixin:this.weixin
				 },{emulateJSON:true}).then(res=>{
					// if(res.body.status==0)
					// {
					// 	window.history.back(-1);
					// 	alert('成功');
					// }
					// else{alert('失败')}
					
					this.list=res.body
				   })
				}

    }
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

// .info-header{
//     margin-right:10px;
//     margin-left:15px;
//     margin-top:50px;
//     margin-bottom:10px;
//     width:90%;
//     height:40px;
//     // border:1px solid red;
//     float:left;

//     .active{
//         margin-right:60px;
//         .mui-icon.mui-icon-person-filled{
//           font-size:30px;
//         }
//         width:50px;
//         height:40px;
//     }
//     .mui-btn{
//         margin-right:50px;
//     }
// }
.info-messages{
    margin-top:50px;
    // margin-left:15px;
    clear:both;
    width:100%;
    height:450px;
    // border:1px solid red;
    background-color:#FFF;
    // border-radius: 15px;
    color:#808080;
    hr{
        width:95%;
        margin-left:5px;
        color:#808080;
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
    // border:1px solid red;
    background-color:#FFF;
    // border-radius:15px;
    .title{
        display:block;
        font-size:16px;
        margin-left:10px;
        padding-top:10px;
    }
    hr{
        width:95%;
        margin-left:5px;
        color:#808080;
    }
    .file{
        margin-left:10px;
        // border:1px solid red;
         position: relative;
        .update{
            position: absolute;
            top:0px;
            width:100px;
            height:100px;
            // border:1px solid red;
            z-index: 10;
            opacity: 0;
        }
        .img{
            position: absolute;
            top:0px;
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
