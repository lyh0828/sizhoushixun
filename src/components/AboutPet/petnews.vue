<template>
    <div class="center">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item._id">
					 <router-link :to="'/petnewsdetails/'+item._id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                
                                 <span >宠物性别:{{item.gender}}</span>
                                 <br>
                                <span >时间：{{item.found_time | dateFormat}}</span>
                                <br>
                                <span>捡到地点:{{item.found_address}}</span>
                            </p>
						</div>
					</router-link>
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
.center{
      background-color:#f4f4f4;
      margin-top:40px;
.mui-table-view{

    li{
        font-size: 12px;
        color:rgb(118,12,240);
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
