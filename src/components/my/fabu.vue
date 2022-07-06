<template>
    <div class="center">
        <router-link  to="/petclaimed" >
                <div class="header">
                <span class="mui-icon mui-icon-paperplane"></span> 点击前往宠物认领中心
        </div>
        </router-link>
        
        <h3 class="title">我的发布</h3>
         <ul class="mui-table-view" >
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item._id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<!-- {{item.title}} -->
							<p class='mui-ellipsis'>
                                
                                 <span class="tip">标题:{{item.title}}</span>
                                 <br>
                                <span>时间：{{item.found_time | dateFormat}}</span>
                                <br>
                                <span>捡到地点:{{item.found_address}}</span>
                            </p>
                            <a class="color"><span class="mui-icon mui-icon-trash" @click="del(item._id)"></span></a> 
                        
                            <span class="kg"></span>
                            <!-- 修改功能跳转 -->
                            <router-link :to="'/editPetClimedInfo/'+item._id" >
                                <a><span class="mui-icon mui-icon-compose" ></span></a>
                            </router-link>
						</div>
				</li>
		</ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js' 
export default {
    inject:["reload"],
     data(){
        return{
            newsList:[],
     
        }
    },
    created(){
        this.getnewslist()
    },
    methods:{
// 删除功能
        del(id) {
                // console.log(this.month)
				var btnArray = ['否', '是'];
				mui.confirm('删除这条信息，确认？', '删除', btnArray, (e)=> {
					if (e.index == 1) {
                        mui.toast('删除成功',{ duration:'short', type:'div' })
                        this.$http.get('petclamiedinfo/delete', {params: {id: id}}).then(function(res){
						this.newsList=res.body
					});
                        this.reload()
                     
					} else {
                          mui.toast('已取消',{ duration:'short', type:'div' })
					}
				},'div')
			} ,
        // 获取发布页面数据
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
      .mui-table-view::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 1px;
  content: '';
//   background-color: #c8c7cc;
}
.mui-table-view::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
//   height: 1px;
//   content: '';
//   -webkit-transform: scaleY(.5);
//   transform: scaleY(.5);
//   background-color: #c8c7cc;
}
.mui-table-view{
padding-bottom:20px;
 background-color:#f4f4f4;
 .kg{
    // display:block;
    padding-left:30px;
    width:80px;
    background-color:#fff;
 }
 .color{
    color:red;
 }
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
             border-radius: 10px;
        }
        .tip{
            color:black;
            font-size:16px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
  }
}}


</style>

