
 <template>
  <div class="shopcart" style="position: relatives; margin-top: 40px">
    <div class="background">
      <div class="title">
        <!-- <img src="../../images/shopcart.jpg" style="width:30%;"  alt=""> -->
        <span style="font-size: 26px">购物车</span>
        <span class="iconfont icon-gouwuchekong gouwuche"> </span>
      </div>
    </div>
    <!-- 数据库取到的数据 -->
    <div id="j_tb">
      <div class="mui-card">
        <form class="mui-input-group">
          <label>
            <input
              type="radio"
              style="
                width: 25px;
                height: 25px;
                margin-top: 20px;
                margin-left: 20px;
              "
              v-bind:checked="checked"
              @click="CheckedAll"
            />
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" :src="img" />
                  <!-- 标题和价格 -->
                  <div class="mui-media-body">
                    <p class="mui-ellipsis">
                      {{ title }}
                    </p>
                    <p
                      style="
                        font-size: 20px;
                        color: rgb(38, 162, 255);
                        padding-top: 10px;
                      "
                    >
                      ￥{{ price }}
                    </p>
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
                    v-model="number"
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
    </div>

    <div class="mui-bar mui-bar-tab quanxuan" style="margin-bottom: 50px">
      <div class="mui-content">
        <div class="mui-card">
          <form class="mui-input-group">
            <input
              type="checkbox"
              style="
                width: 20px;
                height: 20px;
                margin-left: 2px;
                margin-top: 10px;
              "
              name="vehicle"
              value=""
              id="j_cbAll"
              class="checkbox"
            />

            <label
              style="
                display: inline;
                font-size: 16px;
                padding-right: 95px;
                line-height: 40px;
              "
              >全选</label
            >
            <span
              >合计：
              <span v-text="sum"> ￥</span>
            </span>
            <router-link :to="'/petshopping/order/' + id">
              <button
                @click="gotosum"
                style="
                  width: 120px;
                  background-color: rgb(38, 162, 255);
                  height: 46px;
                  border-radius: 10px;
                  position: fixed;
                  right: 0;
                  color: #fff;
                "
              >
                结算
              </button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      id: "",
      number: 1,
      title: "",
      price: "",
      img: "",
      sum: "0",
      total: "",
    };
  },
  computed: {},
  created() {
    this.getcartinfo();
    this.sum = this.price;
  },
  mounted() {
    // 全选与取消全选
    var j_cbAll = document.getElementById("j_cbAll");
    var j_tbs = document.getElementById("j_tb").getElementsByTagName("input");
    j_cbAll.onclick = function () {
      for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].checked = this.checked;
      }
    };
    // 下面复选框需要全部选中，上面的全选才能选中
    // 做法：给下面所有复选框绑定点击事件，
    for (var i = 0; i < j_tbs.length; i++) {
      j_tbs[i].onclick = function () {
        // flag 1.设置一个变量控制全选按钮是否选中，默认为true
        var flag = true;
        for (var i = 0; i < j_tbs.length; i++) {
          if (!j_tbs[i].checked) {
            // 2.当有没被选中的时候，变量就是false
            flag = false;
            break;
          }
        }
        // 3.把flag变量赋给全选按钮，
        j_cbAll.checked = flag;
      };
    }
  },
  methods: {
    add() {
      this.number += 1;
      this.sum = this.price * this.number;
      localStorage.setItem("number", JSON.stringify(this.number)); //存储到浏览器中
      localStorage.setItem("sum", JSON.stringify(this.sum)); //存储到浏览器中
    },
    subtraction() {
      if (this.number > 1) {
        this.number -= 1;
        this.sum = this.price * this.number;
        localStorage.setItem("number", JSON.stringify(this.number)); //存储到浏览器中
        localStorage.setItem("sum", JSON.stringify(this.sum)); //存储到浏览器中
      } else {
        this.number == 1;
      }
    },
    // 获取加入购物车的数据
    getcartinfo() {
      this.$http
        .get("products/shopcart/" + "?id=" + this.$route.params.id)
        .then((result) => {
          console.log(result.body);
          this.id = result.body._id;
          this.title = result.body.Title;
          this.price = result.body.Price;
          this.img = result.body.Img;
        })
        .catch((err) => {});
    },
    CheckedAll() {
      this.sum = 0;
      if ((this.checked = !this.checked)) {
        this.sum = this.price * this.number;

        localStorage.setItem("number", JSON.stringify(this.number)); //存储到浏览器中
        localStorage.removeItem("sum");
        localStorage.setItem("sum", JSON.stringify(this.sum)); //存储到浏览器中
      } else {
        localStorage.removeItem("number");
        localStorage.removeItem("sum");

        this.sum = 0;
      }
    },
    gotosum() {
      if (this.checked) {
        this.$message.error(res.msg || "请至少选择一个商品");
      }
    },
  },
  watch: {},
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
  .checkbox {
    border-radius: 50%;
  }
}
.mui-card {
  box-shadow: 0px 0px 5px 0px #aaa;
  border-radius: 13px;
}
/* .mui-input-group .mui-input-row {
    height: 200px;
} */
</style>
