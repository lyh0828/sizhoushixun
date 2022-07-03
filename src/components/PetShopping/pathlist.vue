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
// import { AddressEdit } from 'vant';
export default {
   inject:["reload"],
  data() {
    return {
      areaList,
  //     areaList:{
  //         province_list: {
  //   110000: '北京市',
  //   120000: '天津市',
  // },
  // city_list: {
  //   110100: '北京市',
  //   120100: '天津市',
  // },
  // county_list: {
  //   110101: '东城区',
  //   110102: '西城区',
  //   120101: '和平区',
  // },
  //     },
      searchResult: [],
    };
  },
  methods: {
    // 点击保存触发
    onSave(content) {
content.isDefault=content.isDefault=true?1:0;
console.log(content)
this.$http.post(
'shopinfo/new',content

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