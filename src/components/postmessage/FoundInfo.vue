<template>
    <div>
        <div class="info-header">
            <a  href="#/home"  id="icon-person" class="active">
                <span class="mui-icon mui-icon-person-filled"></span>
            </a>
            <router-link to="/foundinfo"  >
                 <button  type="button" class="mui-btn mui-active">
					我捡到了
			    </button>
            </router-link>
           <router-link to="/lostinfo" >
                <button type="button" class="mui-btn">
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
            <div class="mui-input-row">
                <label>宠物种类</label>
                 <input type="text" class="mui-input-clear" placeholder="请输入" v-model='species' data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <div class="mui-input-row">
                <label>宠物性别</label>
                <div class="sexcontainer">
                     <input class="sex" type="radio" name="sex" value="公"  v-model='gender'>公
                     <input class="sex"  type="radio" name="sex" value="母"  v-model='gender'>母 
                </div>
			</div>
            <hr>
            <div class="mui-input-row">
                <label>捡到的地点</label>
                <input type="text" class="mui-input-clear" placeholder="请输入" data-input-clear="5" v-model="found_address"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
            <hr>
            <div class="mui-input-row">
                <label>捡到的时间</label>
                <!-- element时间选择器 -->
                <el-date-picker v-model="found_time" value-format="timestamp" type="datetime" placeholder="选择日期时间"></el-date-picker>
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
            <!-- 上传图片并显示出来 -->
                <div class="file">
                    <input type="file" class="update" accept="image/*" @change="change($event)"  ref="updata">
                    <img :src="imageUrl?imageUrl:baseImg" alt="" class="img">
                    <!-- imageUrl:"" 刚进入页面，空字符串转为布尔值为false，则：src="baseImg"  baseImg为默认的图片，一进页面就展示 -->
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
            <router-link to="/petclaimed">
                 <button type="submit" class="mui-btn mui-btn-primary mui-btn-block" v-on:click="addInfo">发布</button>
            </router-link>
        </div>

    </div>
</template>
<!-- <script>
 var dtpicker = new mui.DtPicker({ 
    "type": "time",
    "customData": {
        "h": [ 
            { value: "am", text: "上午" },
            { value: "pm", text: "下午" },
        ]
    } 
})
dtpicker.show(function(e) { 
    console.log(e); 
})
</script> -->
<script>
export default {
    inject:["reload"],
   
    data(){
        return {
            imageUrl:'',//上传的图片
            baseImg:'', //默认的图片
            details:'',
            found_address:'',
            found_time:'',
            gender:'',
            // img:'',
            species:'',
            tel:'',
            weixin:'',
            title:'',
        }
    },
      created(){
        this.baseImg=require('../../images/photo.jpg')//进入页面就展示默认的图片
    },
    methods:{
           change(e) {
            console.log(e.target)
            console.log(e.target.files[0].name);//获取到图片的名字
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
     //点发布按钮，进行添加数据，走post请求
    addInfo(){
				this.$http.post('petclamiedinfo/new',{
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

                        this.reload()
				
				   })
				}
    }
  

}
</script>

<style  lang="scss" scoped>
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
