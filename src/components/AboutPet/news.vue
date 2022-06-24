<template>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="热点新闻" name="first">
      
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
        
    </el-tab-pane>
    <el-tab-pane label="话题新闻" name="second">

        <div class="center">
         <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList2' :key="item._id">
					 <!-- <router-link :to="'/petnewsdetails/'+item._id"> -->
						<img class="mui-media-object mui-pull-left" :src="item.picture1">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                 <span >{{item.click}}</span>
                                
                                <span >时间：{{item.time1 | dateFormat}}</span>
                                <br>
                                <span><span class="mui-icon-extra mui-icon-extra-like"></span>{{item.zan}}</span>
                            </p>
						</div>
					<!-- </router-link> -->
				</li>
		</ul>
    </div>

    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        newsList:[],
        newsList2:[]
      };
    },
     created(){
        this.getnewslist(),
        this.getnewslist2()

    },
    methods: {
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
            getnewslist2(){
            this.$http.get('lostinfos').then(result=>{
                 console.log(result.body)
                // if(result.body.status===0){
                   this.newsList2= result.body
                // }else{
                //     console.log('数据加载失败')
                // }
            })
        },

      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }

  };
</script>
<style scoped lang="scss">
.el-tabs.el-tabs--top{
    margin-top:40px;
    padding-left:10px;
    padding-right:10px;
}
.el-tabs__content{
    height:1000px;
}
.el-tab-pane{
    height:auto;
    padding-bottom:20px;
margin-bottom:10px;
}
.el-tabs__nav{
  padding-left:10px;
}
.center{
    //   background-color:#f4f4f4;
    //   margin-top:45px;
.mui-table-view{
    li{
        font-size: 16px;
        color:black;
        // display:flex;
        img{
            width:80;
            height:80px;
             line-height: 42px;
             max-width: 80px;
             border-radius:15px;
        }
  }
}
}


</style>