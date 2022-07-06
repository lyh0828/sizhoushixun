<template>
<div>
        <div class="info-header">
            <a   href="#/home"  id="icon-person" class="active">
                <span class="mui-icon mui-icon-person-filled"></span>
            </a>
            <router-link to="/foundinfo"  >
                 <button  type="button" class="mui-btn">
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
                <input type="text" class="mui-input-clear" placeholder="请输入" v-model='title' data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
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
                <label>丢失的地点</label>
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5" v-model="found_address"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <!-- <div class="line"></div> -->
            <div class="mui-input-row">
                <label>丢失的时间</label>
                
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

				<textarea id="textarea" rows="5" v-model="details" placeholder="尽可能把宠物特征描写详细,以便找到自己的宠物，祝好运哦~~~"></textarea>
			</div>

        </div>
        <div class="photos">
            <p class="title">请上传图片</p>
            <hr>
            <!-- 上传多张图片相关代码 -->
            <!-- <el-form ref="form" :model="Form" label-width="80px">
             <el-upload class="a" action="students/new" list-type="picture-card"  :auto-upload="true" :limit="4" :before-upload="beforeProductUpload" :on-exceed="handleExceed">
             <i slot="default" class="el-icon-plus"></i> -->
            <!-- <div  slot-scope="{file}">
            <img style="width:100px;height:100px;" class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
            <span style="width:100px;height:100px;" class="el-upload-list__item-actions">
                <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
                >
                <i class="el-icon-zoom-in"></i>
                </span>
                <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
                >
                <i class="el-icon-download"></i>
                </span>
                <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
                >
                <i class="el-icon-delete"></i>
                </span>
            </span>
            </div> -->
        <!-- </el-upload>
        <el-dialog :visible.sync="dialogVisible" id="dialog">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
            </el-form>     -->

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

            <!-- <router-link to="/petclaimed"> -->

            <router-link to="/petlost">

              <button type="submit" class="mui-btn mui-btn-primary mui-btn-block" @click="addInfo">发布</button>
            </router-link>
        </div>

    </div>
</template>
<script>
export default {
    inject:["reload"],

     data() {
      return {
          imageUrl:'',//上传的图片
            baseImg:'', //默认的图片
        // Form:{
        //     imageurl:[],
        // },
        // dialogImageUrl: '',
        // dialogVisible: false,
        // disabled: false,

        details:'',
        found_address:'',
        found_time:'',
        gender:'',
        species:'',
        tel:'',
        weixin:'',
        title:'',

        picture:'https://img1.baidu.com/it/u=3368527245,2581594750&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"',
        name:'她她她',
        details:'',
        found_address:'',
        found_time:'',
        // gender:'',
        // species:'',
        // tel:'',
        // weixin:'',
        // title:'',
        kilometer:'距您~600km',
        picture2:'https://img2.baidu.com/it/u=718082790,1704772640&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=544',
        picture3:'https://img2.baidu.com/it/u=851461786,2792229215&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        see:'7229人浏览昨天10:48',
        zan:'10人点赞',
        img:'https://img1.baidu.com/it/u=592570905,1313515675&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

       
      };
    },
     created(){
        this.baseImg=require('../../images/photo.jpg')
    },
    methods: {
         change(e) {
      console.log(e.target.files[0].name);
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

      }

     },
       //下面为上传多张图片相关代码---没成功，先注释
    //  handleRemove(file,fileList) {
    //     console.log(file,fileList);
    //   },
    //   handlePictureCardPreview(file) {
    //     this.dialogImageUrl = file.url;
    //     this.dialogVisible = true;
    //   },
    //   handleDownload(file) {
    //     console.log(file);
    //   },
    //   handleExceed(files, fileList) {
    //     this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    //   },
    //  beforeProductUpload(file){
    //       var _this = this
    //     return new Promise(function(resolve, reject) {
    //       var reader = new FileReader()
    //      reader.readAsDataURL(file)// 这里是最关键的一步，转换成base64
    //       reader.onload = function(event) {
    //         _this.Form.imageurl.push(event.target.result) //定义参数获取图片路径
    //         console.log(event.target.result)
    //         console.log(_this.Form.imageurl)
    //       }
    //     //   console.log("-------------")
    //     //   console.log(this.Form.imageurl)
    //     })
         
    //   },

//点发布按钮，进行添加数据，走post请求
     addInfo(){
        // console.log(this.Form.imageUrl)
        var form = {
            // title:this.title,
                    picture:this.picture,
                    name:this.name,
					// species:this.species,
					// gender:this.gender,
					address:this.found_address,
					time1:this.found_time,
                    special:this.details,
                    picture1:this.imageUrl,
                    // imgdata1:this.Form.imageurl,
                    kilometer:this.kilometer,
                    picture2:this.picture2,
                    picture3:this.picture3,
                    see:this.see,
                    zan:this.zan,
                    img:this.img,
                    // tel:this.tel,
                    // weixin:this.weixin
        }
				this.$http.post('lostinfos/new',form).then(res=>{
					// if(res.body.status==0)
					// {
					// 	window.history.back(-1);
					// 	alert('成功');
					// }
					// else{alert('失败')}
                    console.log(res.body)
                    // this.$message('发布成功')
                    // this.Form = ''
                    // console.log('上传成功')
                        this.reload()

					// this.list=res.body
                },err =>{

                })
				}
    }
}
    



</script>
<style  lang="scss" scoped>

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



.a{
    height:100px;
    padding-left:20px;
}
.a>>>.el-upload--picture-card{
    width:100px;
    height:100px;
    line-height:100px;
    
}
.a>>>.el-upload-list__item{
 width:100px;
    height:100px;
}
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
    // height:260px;
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

        .img{
            width:100px;
            height:100px;

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
 
