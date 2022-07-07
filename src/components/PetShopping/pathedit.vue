<template>
  <div class="order">
    <!-- <span v-if="pathStatus">添加地址</span>
    <span v-else>编辑地址</span> -->

    <!-- <van-address-edit
      :area-list="areaList"
      :address-info="AddressInfo"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    /> -->
    <div class="editaddress">
      <div class="editinfo">
        <span>姓名</span> <input type="text" v-model="name" />
      </div>
      <div class="editinfo">
        <span>电话</span> <input type="text" v-model="tel" />
      </div>
      <div class="editquyu">
        <span>地区</span> <input type="text" v-model="province" />
        <input type="text" v-model="city" />
        <input type="text" v-model="county" />
      </div>
      <div class="editinfo">
        <span>详细地址</span>
        <input type="text" v-model="addressDetail" />
      </div>
    </div>

    <router-link to="/path">
      <button @click="updateaddress" class="editbtn">保存</button>
    </router-link>
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";

export default {
  inject: ["reload"],
  data() {
    return {
      id: "",
      name: "",
      tel: "",
      province: "",
      city: "",
      county: "",
      addressDetail: "",
      pathStatus: false,

      areaList,
      searchResult: [],
    };
  },
  created() {
    // if(this.$route.params.key=='add'){
    //   this.pathStatus=true
    // }
    this.getaddressinfo()
  },
  methods: {
    // 点击保存触发
    // onSave(content) {
    //   // 设置默认地址按钮 采用三目运算符
    //   content.isDefault = content.isDefault == true ? 1 : 0;
    //   // 添加地址的请求
    //   this.$http.post("shopinfo/new", content).then(
    //     (res) => {
    //       console.log(res.body);
    //       this.$router.push("/path");
    //       this.reload();
    //     },
    //     (err) => {}
    //   );
    // },
    getaddressinfo() {
      this.$http
        .get("shopinfo/edit/" + "?id=" + this.$route.params.id)
        .then((result) => {
          console.log(result.body);
          // if(result.body.status===0){
          //  this.AddressInfo.id=result.body._id,
          this.id = result.body._id;
          this.name = result.body.name,
            (this.tel = result.body.tel),
            (this.province = result.body.province),
            (this.city = result.body.city),
            (this.county = result.body.county),
            (this.addressDetail = result.body.addressDetail);
        });
    },

    updateaddress() {
      this.$http
        .post(
          "shopinfo/edit",
          {
            id: this.id,
            name: this.name,
            tel: this.tel,
            province: this.province,
            city: this.city,
            county: this.county,
            addressDetail: this.addressDetail,
          },
          { emulateJSON: true }
        )
        .then((res) => {
          this.reload();

          // this.list=res.body
        });
    },
  },
};
</script>
<style lang="scss">
.order {
  margin-top: 43px;
  background-color: #f7f7f7;
  height: 650px;
}
.van-button--round {
  background-color: rgb(38, 162, 255);
  border: rgb(38, 162, 255);
}
.editaddress {
  height: 270px;
  width: 94%;
  margin-left: 12px;
  background-color: #fff;
  margin-top: 53px;
  border-radius: 20px;
  div {
    border-bottom: 1px solid lightgrey;
    width: 86%;
    margin-left: 25px;
  }
}
.editinfo {
  span {
    padding-left: 10px;
    color: #646566;
  }
  input {
    border: none;
    width: 50%;
    margin-left: 20px;
  }
}
.editquyu {
  input:first-child {
    width: 27%;
    border: none;
    margin-left: 15px;
  }
  input {
    width: 25%;
    border: none;
  }
  span {
    padding-left: 10px;

    color: #646566;
  }
}
.editbtn {
  width: 90%;
  margin-left: 20px;
  background-color: rgb(38, 162, 255);
  border: rgb(38, 162, 255);
  color: #fff;
  margin-top: 20px;
  height: 50px;
  border-radius: 45px;
}
</style>