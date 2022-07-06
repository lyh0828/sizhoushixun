<template>
  <el-tabs stretch  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="热点新闻" name="first">
         <div class="center">
           <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item._id">
                <router-link :to="'/petnewsdetails/'+item._id">
                <img class="mui-media-object mui-pull-left" :src="item.img">
                <div class="mui-media-body">
                 <div class="title">{{item.title}}</div> 
                  <p class='mui-ellipsis'>
                                    <span class="t">事件地点<span  class="t1">{{item.address}}</span></span>
                                    <br>
                                    <span class="t">时间<span  class="t1">{{item.time }}</span></span>
                                    <br>
                                    <span class="t">点赞<span  class="t1">{{item.click}}</span></span>
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
  // 获取热点新闻列表数据
    getnewslist(){
            this.$http.get('http://36.138.183.223:3000/petnewsinfo').then(result=>{
                 console.log(result.body)
                // if(result.body.status===0){
                   this.newsList= result.body
                // }else{
                //     console.log('数据加载失败')
                // }
            })
        },
  //获取话题新闻列表数据
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
.title{
         white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
}
.t1{

margin-left:10px;

}

</style>