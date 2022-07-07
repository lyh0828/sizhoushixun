<template>
  <div class="pathindex">
    <section>
      <ul>
        <li v-for="item in addressList" :key="item.id" >
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="tel">{{ item.tel }}</span>
          </div>
          <div>
            <span class="active" v-if="item.isDefault == 1">[默认]</span>
            <span
              >{{ item.province }} {{ item.city }} {{ item.country
              }}{{ item.addressDetail }}</span
            >
          </div>
          <div class="delete">
            
              <!-- <span  @click="golist(item)">编辑</span> -->
          <router-link :to="'/path/pathedit/'+item._id">编辑</router-link>
           
            <span @click="deleteaddress(item._id)">删除</span>
          </div>
        </li>
      </ul>

      <div class="addpath" @click="golist('add')">添加地址</div>
    </section>
  </div>
</template>
<script>
// import mui from '../../lib/mui/js/mui.js' 
export default {
  inject:["reload"],// 注入reload变量
  data() {
    return {
    
      addressList: [],
    };
  },
  created() {
    this.getaddress();

   

  },
  methods: {
    // 住址信息的渲染
    getaddress() {
      this.$http
        .get("shopinfo")
        .then((result) => {
          console.log(result.body);

 this.addressList = result.body;

         
        //  console.log( this.addressList[0].isDefault)
        })
        .catch((err) => {});
    },
    // 添加地址按钮
    golist(option) {
      this.$router.push({
        name: "pathlist",
        params:{
          key:JSON.stringify(option)
        }
      });
    },
    // 删除
    deleteaddress(id) {
     this.$http.get('shopinfo/delete', {params: {id: id}}).then(function(res){
						this.addressList=res.body
              this.$router.push('/path')
					});
                        this.reload() //页面刷新
                     
					} ,
     
				
      // this.$http
      //   .get("shopinfo/delete", { params: { id: id } })
      //   .then((result) => {
      //     this.addressList = result.body;
      //   });

      //        this.reload()

  },
};
</script>
<style lang="scss" scoped>
.pathindex {
  margin-top: 43px;
}
section {
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #f7f7f7;
  ul {
    width: 100%;
    // display: flex;
    // flex-direction: column;
    li {
      padding: 14px 15px;
      // flex: 1;
      //   width: 100%;
      margin: 6px 0;
      background-color: #fff;

      span {
        padding-right: 15px;
        font-size: 16px;
      }
    }
    .active {
      color: #ff0000;
    }
  }
}
.addpath {
  margin-top: 30px;
  width: 90%;
  margin-left: 12px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  background-color: rgb(38, 162, 255);
  border-radius: 6px;
  color: #fff;
  border-radius: 12px;
}
.van-icon__image {
  position: absolute;
  margin-top: -17px;
}
.name {
  font-size: 18px;
}
.tel {
  color: gray;
  font-size: 16px;
}
.delete {
  display: inline-block;
  margin-left: 270px;
  margin-top: 11px;
  span {
    color: rgb(38, 162, 255);

    // margin-left: 345px;
    font-size: 18px;
  }
}

</style>