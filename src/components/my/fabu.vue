<template>
    <div class="center">
        <router-link  to="/petclaimed" >
                <div class="header">
                <span class="mui-icon mui-icon-paperplane"></span> 点击前往宠物认领中心
        </div>
        </router-link>
        
        <h4 class="title">我的发布</h4>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item._id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<!-- {{item.title}} -->
							<p class='mui-ellipsis'>
                                
                                 <span >标题:{{item.title}}</span>
                                 <br>
                                <span >时间：{{item.found_time | dateFormat}}</span>
                                <br>
                                <span>捡到地点:{{item.found_address}}</span>
                            </p>
                            <a><span class="mui-icon mui-icon-trash" @click="del(item._id)"></span></a> 
                            <router-link :to="'/editPetClimedInfo/'+item._id" >
                                <a><span class="mui-icon mui-icon-compose" ></span></a>
                            </router-link>
						</div>
				</li>
		</ul>
    </div>
</template>
<script>
export default {
     data(){
        return{
            newsList:[]
        }
    },
    created(){
        this.getnewslist()
    },
    methods:{
        getnewslist(){
            this.$http.get('petclamiedinfo').then(result=>{
                 console.log(result.body)
                // if(result.body.status===0){
                   this.newsList= result.body
                // }else{
                //     console.log('数据加载失败')
                // }
            })
        },
        del(id){
            this.$http.get('petclamiedinfo/delete', {params: {id: id}}).then(function(res){
						this.newsList=res.body
					})
        },
    },
    filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }
}
</script>
<style scoped lang="scss">
.center{
      background-color:#f4f4f4;
      margin-top:50px;
      margin-bottom:20px;
      height:auto;
      .header{
        width:380px;
            margin:auto;
             background-color:antiquewhite;
             border-radius:20px;
             text-align: center;
            //  padding-top:20px;
             height:80px;
             font-size:18px;
             line-height:80px;
            vertical-align: center;
      }
      .title{
        margin-left:20px;
        margin-top:10px;

        margin-bottom:10px;
      }
.mui-table-view{
padding-bottom:20px;
 background-color:#f4f4f4;
    li{
        width:380px;
        margin:auto;
        font-size: 12px;
        color:rgb(118,12,240);
        background-color:#fff;
        border-radius:20px;
        margin-top:10px;

        // display:flex;
        img{
            width:80;
            height:80px;
             line-height: 42px;
             max-width: 80px;
        }
  }
}
}

</style>
