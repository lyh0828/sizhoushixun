<template>

    <div class="center">
        
       <div class="search">
            <div class="search-left">
					<a href="#/foundinfo" class="router-link-active">
                        <img class="aczj-icon" src="../../images/icon.png" alt="">
						<!-- <mt-button id="btn0" icon="back" ></mt-button> -->
					</a>
            </div>
            <div class="search-right">
               <input class="text" type="text" placeholder="请输入宠物种类" v-model="keywords">
               <a  class="search-btn"  >搜索
                </a>
            </div>
       </div>
       <div class="search-species">
            <!-- <input class="text"  v-model="keywords" >猫咪 -->
            <a  class="search-btn" @click="cat" >猫咪 </a>
            <a  class="search-btn" @click="dog">狗狗</a>
            <a  class="search-btn" @click="qita">其他宠物 </a>
       </div>
       <div class="switch">
            <p class="switch-tip">是否只显示已被认领的宠物</p>
            <mt-switch v-model="value" @change="turn"></mt-switch>
       </div>
        <div class="container">
			<div>
				<h4 class="title">宠物认领</h4>  
                <ul class="mui-table-view mui-grid-view ">
                  <li class="mui-table-view-cell mui-media mui-col-xs-6" >
		                
		                    <img class="mui-media-object"  src="https://img1.baidu.com/it/u=2766854106,3610915481&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656349200&t=809d0dc958e364385c595cc4bc3">
                    
                            <div class="info">
                                <div >
                                   <p class="title">捡到了狗</p> 
                                </div>
                                <div class="time_sex">
                                    <div class="sex-btn">
                                        <p class='sex'>宠物性别:母</p>
                                             <a  class="search-btn" >已认领</a>
                                    </div>
                                    <p class='time'>时间:2022/6/30</p>
                                    <p class='address'>捡到地点:路上</p>
                                </div>
                            </div>
                       
                    </li>
					<li   v-show="isShow"   class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in search(keywords)" :key="item._id">
		                 <router-link :to="'/petclaimeddetails/'+item._id">
                         
		                    <img class="mui-media-object" :src="item.img">
            
                            <div class="info">
                                <div >
                                   <p class="title">{{item.title}}</p> 
                                </div>
                                <div class="time_sex">
                                    <div class="sex-btn">
                                        <p class='sex'>宠物性别:{{item.gender}}</p>
      
                                             <a  class="search-btn" >认领中</a>
                                       
                                       
                                    </div>
                                    <p class='time'>时间:{{item.found_time | dateFormat}}</p>
                                    <p class='address'>捡到地点:{{item.found_address}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>

				</ul>
			</div>
		</div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            PetInfoList:[],
            value:false,
            name:'',
            keywords:'',
            isShow:'true'

        }
    },
    created(){
        this.getPetInfo();
    },
    methods:{
        getPetInfo(){
            this.$http.get("petclamiedinfo").then(result=>{
                console.log(result.body)
                // console.log(result.body.'imgdata1[]')
                // if(result.body.status===0){
                    this.PetInfoList=result.body
                // }else{
                //     console.log('获取数据失败')
                // }
            })
        },
        //搜索功能的实现
         search(keywords){
					// console.log(keywords)
					var newList=[];
					this.PetInfoList.forEach(item=>{
						if(item.title.indexOf(keywords)!=-1){
							// console.log(item.name.indexOf(keywords))
							console.log(item)
							newList.push(item)
						}
					})
					return newList;
				},
        cat(){
            this.keywords='猫'
        },
        dog(){
            this.keywords='狗'
        },
        qita(){
            this.keywords='小乌龟'
        },
        //
        turn(checked){
            console.log(checked)
            this.isShow=checked;
        }
      
    },
     filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }
}
</script>
<style  lang="scss" scoped>
.center{
      background-color:#efeff4;
}
.search{
    position: relative;
    margin-right:10px;
    margin-left:10px;
    margin-top:50px;
// margin-bottom:10px;
// height:40px;
    //  border:1px solid red;
     .search-left{
        width:20%;
        margin-left:10px;
     }
    .aczj-icon{
        width:50px;
        height:40px;
        border-radius: 10px;
    }
    .search-right{  
        position: absolute;
        top:0px;
        left:80px;
        width:80%;
         display:flex;
         flex-direction: row;
        padding-left:70px;

        .text{
            border-radius: 20px;
            width:250px;
        }
        .search-btn{
            // display:block;
            width:60px;
            // padding-left:10px;
            //  padding-right:10px;
            height:38px;
            position: relative;
            left:-40px;
            top:1px;
            border-radius: 20px;
            background-color: ivory;
            font-size:14px;
            color:#808080;
            line-height: 38px;
            text-align: center;
        }
    }
}
.search-species{
    width:90%;
    height:40px;
    // border:1px solid red;
    display:flex;
    flex-direction: row;
     margin-left:20px;
     margin-right:20px;
    .search-btn{
            margin-right:20px;
            width:75px;
            height:38px;
            border-radius: 20px;
            background-color:ivory;
            color:#808080;
            font-size:14px;
            line-height: 38px;
            text-align: center;
        }
}
 .switch{
    margin-left:20px;
    display:flex;
    flex-direction: row;
    .switch-tip{
        margin-right: 40px;
        margin-top:10px;
    }
 }
.container{
        padding-bottom:30px;

    h4{
        margin-left: 20px;
    }
    .mui-table-view{
        background-color:#efeff4;
        padding-left:15px;

        margin-bottom:20px;


        // height:1000px;
    }
    .mui-table-view:before {
         background-color:#efeff4;
    }
    .mui-table-view::after {
  background-color: #efeff4;
}
    .mui-table-view-cell.mui-media.mui-col-xs-6{
        // border:1px solid red;
        // margin:10px 10px 10px 10px;
        margin-right:18px;
        margin-bottom:10px;
        width:45%;
        height:270px;
        background-color:#fff;
        border-radius: 15px;
        img{
        height:120px;
        width:150px;
          border-radius: 15px;
          margin-left:-15px;
        }
        .info{
            .title{
                 width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .time_sex{
            p{
                margin-top:10px;
                text-align: left;
            }
            .sex-btn{
                display:flex;
                flex-direction: row;
            }
            .search-btn{
                margin-left:10px;
                width:75px;
                height:38px;
                border-radius: 20px;
                background-color:bisque;
                color:#808080;
                font-size:14px;
                line-height: 38px;
                text-align: center;
            }
            .time{
                 margin-top:0px;
            }
            .address{
                 overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

        }
    }
	
}
</style>
