<template>
    <div class="container">
       <div class="content">
            <div class="container1">
                <img  :src="photo">
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


            </div>
       </div>                 
    </div>
</template>
<script>
export default {
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
        }
    },
    created(){
        this.getPetInfo();
    },
    methods:{
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
        }

    }
}
</script>
<style scoped lang="scss">
.content{
    margin-top:50px;
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