<template>
    <div class="container">
       <div class="content">
            <div class="container1">
                <p class="i"><span class="mui-icon-extra mui-icon-extra-share"></span></p>
                <img  :src="img">
                <div class="title">
                    <p class="t1">{{title}}</p>
                    <p class="t2">{{danwei}}</p>
                </div>  
            </div>
            <div class="container2">
                  <p class="p1">服务{{cishu}}次</p>
                  <p  class="p2">电话：{{tel}}</p>
            </div>
            <div class="container3">
                 <h4>简介</h4>
                 <p class="details">{{details}}</p>
            </div>
            <div class="container4">
                 <p class="jl"> 距离:{{juli}}</p>
                 <p class="ad">地点：{{address}}</p>
            </div>
       </div>                 
    </div>
</template>
<script>
export default {
     data(){
        return{
           details:'',
           address:'',
           time:'',
           danwei:'',
           img:'',
           juli:'',
           tel:'',
           title:'',
           cishu:'',
        }
    },
    created(){
        this.getPetInfo();
    },
    methods:{
        //每一个宠物店详细信息请求
        getPetInfo(){
            this.$http.get("petsmartinfo/show?id="+this.$route.params.id).then(result=>{
                console.log(result.body)
                    this.details=result.body.details
                    this.address=result.body.address
                    this.time=result.body.time
                    this.img=result.body.img
                    this.tel=result.body.tel
                    this.danwei=result.body.danwei
                    this.juli=result.body.juli
                    this.cishu=result.body.cishu
                    this.title=result.body.title

            })
        }

    }
}
</script>
<style scoped lang="scss">
.container{
    background-color:#F5F5F6;
    margin-top:40px;
    .content{
        .container1{
             width:412px;
            margin:auto;
            position: relative;
            img{
                width:412px;
                margin:auto;
                height:250px;
            }
            .i{
                color:#fff;
            position:absolute;
            top:10px;
            right:10px;
            }
            .title{
            position:absolute;
            top:190px;
            padding-left:15px;
         
             .t1{
                font-size:18px;
                font-weight: 800;
                   color:#fff;
             }
             .t2{
                font-size:16px;
                font-weight: 700;
                   color:#fff;
             }

            }
        }
        .container2{
            width:100%;
            height:80px;
            display:flex;
            flex-direction: row;
            .p1{
                border-right:1px solid #ccc;
            }
            .p1,.p2{
                width:50%;
                height:70px;
                line-height:80px;
                text-align: center;
                font-size:16px;
                font-weight: 700;
                color:#333;

            }
      
        }
        .container3{
            width:100%;
            padding:0px 10px 10px 10px;
            h4{
                // padding-left:10px;
                padding-bottom:10px;
            }
            .details{
                font-size:16px;
                color:#333;
                line-height:25px;
                color:#333;
                text-indent: 2em;

            }

        }
        .container4{
            width:100%;
            padding:0px 10px 10px 10px;
            p{
                font-size:16px;

            }

        }
    }
}

</style>