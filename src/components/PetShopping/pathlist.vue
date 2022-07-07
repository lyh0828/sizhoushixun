<template>
  <div class="order">
    <!-- <span v-if="pathStatus">添加地址</span>
    <span v-else>编辑地址</span> -->

    <van-address-edit
    v-if="pathStatus"
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onAdd"
    />
<van-address-edit
v-else
  :area-list="areaList"
:address-info='AddressInfo'

  show-set-default
  show-search-result
 
  
  @save="onUpdate"


/>
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";

export default {
  inject: ["reload"],
  data() {
    return {
   _id:'',
   name:'',
   tel:"",
   province:'',
   city:"",
   country:"",
   addressDetail:'',

      areaList,
      searchResult: [],
    };
  },
  created() {
    let key=JSON.parse(this.$route.params.key)
    if(key=='add'){
      this.pathStatus=true
    }else{
      // console.log(key)
      this.AddressInfo=key;
      this.AddressInfo.isDefault=this.AddressInfo.isDefault==1?true:false
    }
    
  },
  methods: {
    // 点击保存触发==>新增
    onAdd(content) {
      // 设置默认地址按钮 采用三目运算符
      content.isDefault = content.isDefault == true ? 1 : 0;
      // 添加地址的请求
      this.$http.post("shopinfo/new", content).then(
        (res) => {
          console.log(res.body);
          this.$router.push("/path");
          this.reload();
        },
        (err) => {}
      );
    },
          getaddressinfo(){
            this.$http.get("shopinfo/edit?id="+this.$route.params.id).then(result=>{
                console.log(result.body)
                // if(result.body.status===0){
                    //  this.AddressInfo.id=result.body._id,
                     this.name=result.body.name,
                     this.tel=result.body.tel,
                     this.province=result.body.province,
                     this.city=result.body.city,
                     this.country=result.body.country,
                     this.addressDetail=result.body.addressDetail
                    
            })
        },
    // 点击保存触发==>修改
     onUpdate(content){
      console.log('1111')
console.log(AddressInfo)
// 					this.$http.post('shopinfo/edit',content).
// 		then(res=>{
//  this.$router.push("/path");
//                         this.reload()
			
				
// 				   }, (err) => {}
//            )
				},
  
      //  getaddressinfo(){
      //       this.$http.get("shopinfo/edit?id="+this.$route.params.id).then(result=>{
      //           console.log(result.body)
      //           // if(result.body.status===0){
      //                this.id=result.body._id,
      //                this.name=result.body.name,
      //                this.tel=result.body.tel,
      //                this.province=result.body.province,
      //                this.city=result.body.city,
      //                this.country=result.body.country,
      //                this.addressDetail=result.body.addressDetail
                    
      //       })
      //   },
  },
};
</script>
<style lang="scss">
.order {
  margin-top: 43px;
}
.van-button--round {
  background-color: rgb(38, 162, 255);
  border: rgb(38, 162, 255);
}
.van-field__body{
  input{
    border: none;
  }
}
.van-cell-title{
  span{
    padding-top: 10px;
  }
}
</style>