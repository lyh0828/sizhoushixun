<template>
    <div class="order">
       <van-address-edit
  :area-list="areaList" 
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"

/>
    </div>
</template>
<script>
import { areaList } from '@vant/area-data';

export default {
   inject:["reload"],
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    // 点击保存触发
    onSave(content) {
// content.isDefault=content.isDefault=true?1:0;
// var form={
//   name:this.name,
//   tel:this.tel,
//   province:this.province,
//   city:this.city,
//   country:this.country,
//   isDefault:this.isDefault
// }

content.isDefault=content.isDefault==true?1:0;

this.$http.post(
'shopinfo/new',content,{token:true}

).then(res=>{
   console.log(res.body)
   this.$router.push('/path')
     this.reload()
},err =>{

                }
)
    },
 

  },
};
</script>
<style lang="scss">
    .order{
        margin-top:43px;
    }
     .van-button--round{
      background-color: rgb(38, 162,255);
      border:rgb(38, 162,255) ;
    }

</style>