<template>
    <div>
        <br>
        <br>
            <h4 class="title">宠物认领详情页</h4>  
             <br>
            标题<p>{{title}}</p>
            宠物种类 <p>{{species}}</p>
            宠物性别: <p>{{gender}}</p>
            捡到地点<p>{{found_address}}</p>
            捡到时间 <p class='time'>{{found_time}}</p>
            宠物详情<p>{{detail}}</p><br>
            宠物图片<img  :src="img"><br>
            手机号 <p>{{tel}}</p>
            微信<p>{{weixin}}</p>
              <br>
                <br>
                  <br>
                  
           

        
                
    </div>
</template>
<script>
export default {
     data(){
        return{
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
    },
    methods:{
        getPetInfo(){
            this.$http.get("students/show?id="+this.$route.params.id).then(result=>{
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
        }
    },
     filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }
}
</script>
<style scoped lang="scss">
 img{
        height:120px;
        width:150px;
          border-radius: 15px;
        //   margin-left:-15px;
        }


</style>