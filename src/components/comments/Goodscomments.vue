<template>
    <div class="content">
        <!-- 父组件 -->
        <cmt-box  @func='getGoodsComments'></cmt-box>
        <ul class='list-group'>
				 <li class='list-group-item' v-for='item in list' :key="item.id">
					<p>
                        <span class="mui-icon-extra mui-icon-extra-at"></span>
                        <span class="t2">{{item.species}}</span>
                    
                    </p>
                    <p>{{item.found_time | dateFormat}}</p>
                    <!-- <p>{{item.title}}</p> -->
                    <p>
                        <span class="mui-icon-extra mui-icon-extra-card"></span>
                         <span class="details">{{item.details}}</span>
                    </p>
				 </li>
		</ul>
    </div>
</template>
<script>
import icomponent from './Addcomments.vue'; //引入子组件
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.show()
    },
    methods:{
        //别人的留言
        show(){
                this.$http.get("petclamiedinfo").then(result=>{
                console.log(result.body)
                    this.list=result.body
            })
        },
        getGoodsComments( data1,data2,data3){//父组件获取到的子组件的数据
            this.list.unshift({species:data1,details:data2,found_time:data3})
        }  
    },
    components:{
				'cmt-box':icomponent
			},
            // 时间过滤器
    filters:{
        dateFormat:function renderTime(date){
        var dates = new Date(date).toJSON();
        return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')  }
         }
    
}
</script>
<style lang="scss" scoped>
.content{
    margin-top:40px;
    margin-bottom:35px;
    padding-bottom:5px;
    .list-group{
        padding-top:5px;
        list-style: none;
        // text-decoration: none;
        width:90%;
        margin:auto;
        padding-left:0px;
    padding-bottom:20px;
margin-bottom: 10px;
        .list-group-item{
            width:100%;
            margin:auto;
            // border:1px solid red;
            border-radius:20px;
            background-color: #fff;
            padding:10px 7px;
            margin-bottom: 10px;
            .t2{
                padding-left:5px;
                padding-top:5px;
                font-size:16px;
                // font-weight: 800;
                color:#808080;
            }
            .details{
                padding-left:5px;
                font-size:18px;
                font-weight: 800;
            }
        }
    }
}
#btn{
    float:right;
     margin-right:10px;
}
</style>