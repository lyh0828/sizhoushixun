<template>
    <div class="container">
       <div class="content">
            <div class="container1">
                <a href="#/petsmart"> <img  :src="photo"></a>
               
                <div class="p2">
                    <p>{{nichen}}</p>                  
                    <p class="address"> <span id="ia" class="mui-icon mui-icon-location"></span>{{address}}</p>
                </div>
                <div class="btn">
                 <button type="button" class="mui-btn mui-btn-success mui-icon mui-icon-plus">关注</button>
                </div>
                <span  id="i" class="mui-icon-extra mui-icon-extra-share"></span>
                 
            </div>
            <div class="container2">
                    <mt-swipe :auto="2000">
                        <mt-swipe-item>
                        <img :src="img1" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                        <img :src="img2" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                        <img :src="img3" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                        <img :src="img4" alt="">
                        </mt-swipe-item>
				    </mt-swipe>
                    
            </div>
            <div class="container3">
                  <p class="title">{{title}}</p>
                  <p  class="details">{{details}}</p>
                  <div class="ys">#春日爱宠出街指南</div>
                  <p  class="time">{{time}}</p>
                  <hr>

            </div>
            <div class="container4">
                <h4>评论</h4>
                <img class="tx" src="../../images/tx.jpg" alt="">
				<textarea  fouces id="textarea" rows="2" v-model="pinglun" placeholder="爱评论的人运气都不会差哦~"></textarea>
                <button type="button" id="fb" class="mui-btn mui-btn-success mui-icon mui-icon-plus" v-on:click="addInfo">发布</button>
            </div>
            <div class="container5">
                <ul v-for="item in pinglunlist" :key="item._id">
                  <div class="p1">
                        <img  src="https://img2.baidu.com/it/u=343850545,2320437498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
                         <p class="name">{{item.sname}}</p>
                  </div>
                  <p class="pl">{{item.pinglun}}</p>
                    <!-- <img  id="i1" @click="changeImage" rel="nofllow" src="../../images/k1.png" > -->
                  <!-- <a class="active" :style="{color:state?'#ccc':'red'}" @click="state=!state"><span id="i" class="mui-icon-extra mui-icon-extra-heart-filled"></span></a> -->
                        <span id="i" class="mui-icon-extra mui-icon-extra-heart"></span>
                   <span id="del" class="mui-icon mui-icon-trash" @click="del(item._id)"></span>
                  <div class="hr"></div>

                            

                           
                </ul>

               
            </div>
            <div class="container5">
                <ul v-for="item in pinglunlist2" :key="item._id">
                  <div class="p1">
                        <img  :src="item.photo">
                         <p class="name">{{item.sname2}}</p>
                  </div>   
                    <p class="pl">{{item.pinglun2}}</p>
                     <a class="active" ><span id="i" class="mui-icon-extra mui-icon-extra-heart"></span></a>
                    <mt-button id="mt"  @click.native="sheetVisible = true" class="btn"> 
		              <span class="mui-icon mui-icon-forward"></span>
                    </mt-button>
                    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
                  <div class="hr"></div>
                </ul>
            </div>
       </div>                 
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js' 

export default {
       inject:["reload"],
     data(){
        return{

           click:'',
           address:'',
           time:'',
           nichen:'',
           img1:'',
           img2:'',
           img3:'',
           img4:'',
           photo:'',
           title:'',
           details:'',
           pinglun:'',
           sname:localStorage.getItem('name'),//读取本地数据
           pinglunlist:'',
           sname2:'',
           pinglun2:'',
           pinglunlist2:'',

        sheetVisible: false,
        actions: []

        }
    },
     mounted() {
      this.actions = [
        {
        name: '复制',
        method: this.copy
         }, 
        {
        name: '回复',
        method: this.say
        },
         {
        name: '举报',
        method: this.jubao
        }
     ]

    },
    created(){
    
        this.getPetInfo();
        this.getPetInfo2();
        this.getPetInfo3();

    },
    methods:{
        changeImage(){
         
                          const element=document.getElementById('i1')
                          console.log(element)
                            if(element.src.match("s"))
                            {
                                element.src="../../images/k1.png";
                            }
                            else
                            {
                                element.src="../../images/s.png";
                            }
                        },
         getPetInfo2(){
            this.$http.get("http://36.138.183.223:3000/pinglun").then(result=>{
                console.log(result.body)
                 this.pinglunlist=result.body
            })
        },
        getPetInfo(){
            this.$http.get("http://36.138.183.223:3000/petfriendinfo/show?id="+this.$route.params.id).then(result=>{
                console.log(result.body)
                    this.title=result.body.title
                    this.nichen=result.body.nichen
                    this.img1=result.body.img1
                    this.img2=result.body.img2
                    this.img3=result.body.img3
                    this.img4=result.body.img4
                    this.photo=result.body.photo
                    this.address=result.body.address
                    this.time=result.body.time
                    this.click=result.body.click
                    this.details=result.body.details

            })
        },
         getPetInfo3(){
            this.$http.get("http://36.138.183.223:3000/pinglun2").then(result=>{
                console.log(result.body)
                 this.pinglunlist2=result.body
            })
        },

        //点发布评论
        addInfo(){
            var btnArray = ['否', '是'];
            mui.confirm('添加这条信息，确认？', '添加', btnArray, (e)=> {
            if (e.index == 1) {
                mui.toast('成功',{ duration:'short', type:'div' })
                this.$http.post('http://36.138.183.223:3000/pinglun/new',{
                    sname:this.sname,
				    pinglun:this.pinglun,
				 },{emulateJSON:true}).then(res=>{
                        // this.reload()
                        // this.$router.go(0)
                        window.location.reload();
                        
				   });
                this.reload()
                
            } else {
                    mui.toast('已取消',{ duration:'short', type:'div' })
            }
        },'div')

				},
        del(id){
				var btnArray = ['否', '是'];
				mui.confirm('删除这条信息，确认？', '删除', btnArray, (e)=> {
					if (e.index == 1) {
                        mui.toast('删除成功',{ duration:'short', type:'div' })
                        this.$http.get('http://36.138.183.223:3000/pinglun/delete', {params: {id: id}}).then(function(res){
						this.pinglunlist=res.body
					});
                        this.reload()
                     
					} else {
                          mui.toast('已取消',{ duration:'short', type:'div' })
					}
				},'div')
			} ,

     copy() {
       mui.toast('复制成功',{ duration:'short', type:'div' })
      },
     jubao() {
       mui.toast('再想想',{ duration:'short', type:'div' })
      },
    say(){
              mui.toast('即将跳转',{ duration:'short', type:'div' })

      }


    }
}
</script>
<style scoped lang="scss">
.content{
    margin-top:50px;
    padding-bottom:20px;
    margin-bottom:50px;
}
.container1{
    display:flex;
    margin-left:5px;
img{
  width:30px;
  height:30px;
  border-radius: 50%;
}
#ia{
     font-size:18px;
     color:#808080;
}
.p2{
    flex:7;
    p{
        margin-left:10px;
        margin-bottom:0px;
        padding-bottom: 0px;
    }
}
.btn{
    flex:3;
}
#i{
    display:block;
    margin-right:10px;
}
}
.container3{
.title{
    margin-left:10px;
     font-size:20px;
     color:#333;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     font-weight: 800;
}
.details{
    font-size:16px;
     color:#333;
     line-height:40px;
     font-weight: 500;
     width:400px;
     margin:auto;
     display:block;
}
.time{
    margin-left:10px;
     font-size:14px;

}
.ys{
    text-align: center;
    margin-left:10px;
    width:150px;
    background-color: #4c82d9;
    font-size:14px;
    font-weight: 600;

}
hr{
    color:#ccc;
    width:95%;
    margin:auto;

}
}
.container4{
    margin-left:10px;
    img{
       position:relative;
       top:-40px;
    }
    .tx{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    #textarea{
        margin-left:10px;
        margin-right:10px;
        width:250px;
    }
    #fb{
        position: relative;
        top:3px;
    }
}
.container5{
    ul{
        margin:0px;
        padding-left:10px;
    }
    img{
       width:30px;
        height:30px;
        border-radius:50%;
    }
    .p1{
        display:flex;
        flex-direction: row;
    }
    .name{
        margin-left:10px;
        font-size:14px;
        
    }
    .pl{
         margin-left:35px;
        font-size:16px;
        color:black;
        margin-top:10px;
    }
    #i{
        font-size:20px;
        // color:red;
        color:#4c82d9;
        position: relative;
        top:-60px;
        left:350px;
    }
    #del{
        position: relative;
        top:-10px;
        left:323px;
        color:red;
    }
    #mt{
        position: relative;
        top:-10px;
        left:325px;
        width:20px;
        height:20px;
        padding:0px;
    }
    .hr{
        width:95%;
        margin:auto;
        background-color:#ccc;
         height:1px;
         margin-bottom:8px;
    }
}
.mui-btn-success{
  color: #fff;
  border: 1px solid #4c82d9 ;
  background-color: #4c82d9;
}
	.mint-swipe{
	height:270px;
	width:100%;
	max-width: 100%;
	// border-radius:15px;
	margin-bottom:10px;
	padding:0px;
	img{
		width:412px;
		height:270px;
	// border-radius:15px;
	}
} 

</style>