<template>
  <div class="shopcart" style="position: relatives;margin-top:40px;">
    <div class="background">
      <div class="title">
        <!-- <img src="../../images/shopcart.jpg" style="width:30%;"  alt=""> -->
        <span style="font-size: 26px">购物车</span>
        <span class="iconfont icon-gouwuchekong gouwuche"> </span>
      </div>
    </div>
    <div class="mui-card">
      <form class="mui-input-group">
        <!-- <div class="mui-input-row mui-radio mui-left" style="height: 140px"> -->
       
          <label>
            <input type="checkbox" style="width: 25px;  height: 25px; margin-top:20px; margin-left:20px;"  v-model="checkedNames"  @change="change_select"  >
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                  <img
                    class="mui-media-object mui-pull-left"
                    :src="img"
                  />
                  <div class="mui-media-body">
                    <p class="mui-ellipsis">
                     {{title}}
                    </p>
                    <p style="font-size:20px; color:rgb(38, 162, 255);padding-top:10px;">￥{{price}}</p>
                  </div>
                </a>
              </li>
            </ul>
          </label>

          <div class="mui-card">
            <form class="mui-input-group">
              <div class="mui-input-row">
                <div class="mui-numbox">
                  <button
                    class="mui-btn mui-btn-numbox-minus"
                    type="button"
                    @click="subtraction"
                  >
                    -
                  </button>
                  <input
                    class="mui-input-numbox"
                    type="number"
                    :value="value"
                  />
                  <button
                    class="mui-btn mui-btn-numbox-plus"
                    type="button"
                    @click="add"
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        
      </form>
    </div>

    <div class="mui-bar mui-bar-tab quanxuan" style="margin-bottom: 50px ">
      <div class="mui-content">
        <div class="mui-card">
          <form class="mui-input-group">
              <input type="checkbox" style="width:20px; height: 20px;" name="vehicle" value="" v-model="commonList2" @change="all_select_button"   /> 
              
              <label style="display:inline;font-size:16px;padding-right:95px; line-height:40px;" >全选</label>
              <span
                >合计：
                <span> ￥{{price}}</span>
              </span>
              <button style="width:130px; background-color:rgb(38, 162, 255);height: 100%;
    border-radius: 10px;">结算（1）</button>
           
            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      title:"",
      price:"",
      img:"",
    commonList2:[],
    checkedNames: [],
       dianji: 0,
      
    };
  },
created() {
  this.getcartinfo()
  
},
  methods: {
    add() {
      this.value += 1;
    },
    subtraction() {
      if (this.value > 1) {
        this.value -= 1;
      } else {
        this.value == 1;
      }
    },
      getcartinfo() {
      this.$http
        .get("products/shopcart/" + '?id='+this.$route.params.id)
        .then((result) => {
          console.log(result.body)
     
          this.title = result.body.Title;
          this.price = result.body.Price;
          this.img = result.body.Img;
  
        })
        .catch((err) => {});
    },
     all_select_button() {
                //                获取复选框是true还是false。如果是true的话就把created函数中保存的对象赋值，否则就把空数组赋值
                //                                var check = document.getElementsByTagName('input')[0].checked;
                //                                if(check == true) {
                //                                    this.checkedNames = this.commonList2;
                //                                } else {
                //                                    this.checkedNames = [];
                //                                }
                this.checkedNames = [],
                    this.dianji++;
                if(this.dianji % 2 != 0) {
                    for(let i = 0; i < this.commonList2.length - 1; i++) {
                        this.checkedNames.push(this.commonList2[i]);
                    }
                } else {
                    this.checkedNames = [];
                }
         
            },


  },
  watch:{
    
  }
};
</script>
<style lang="less" scoped>
.background {
  width: 100%;
  height: 50px;
  background-color: rgb(38, 162, 255);
  // background-image: url(../../images/shopcart.jpg);
  border-radius: 0 0 45px 45px;
}
.title {
  width: 100%;
  height: 70px;
  color: #fff;
  position: absolute;
  margin-top: 20px;
  span {
    padding: 30px;
    font-size: 20px;
  }
  .icon-gouwuchekong:before {
    content: "\e600";
    margin-left: 181px;
  }
}
/* .mui-input-group .mui-input-row {
    height: 200px;
} */
</style>
