<template>
    <div class="MaxBox">
        <div class="MaxBoxMain">
            <div class="top">我的宠物档案</div>
            <div class="center">
                <div class="left">
                    <div class="topImg">
                        <img src="../../images/1.jpg" alt="">
                    </div>
                    <div class="bottmImg">
                        <img src="../../images/2.jpg" alt="">
                    </div>
                </div>
                <div class="right">
                    <ul>
                        <li>姓名：柠檬</li>
                        <li>生日：2017.11.22</li>
                        <li>品种：比熊</li>
                        <li>性别：小姑凉</li>
                        <li>毛色：白色</li>
                        <li>疫苗日期：2018.06.28 卫佳五</li>
                        <li>驱虫日期: 2018.06.28 体内驱虫</li>
                        <li>性格：很聪明，需要适应时间傲娇的小主子，听的懂话</li>
                        <li>技能：可以使用猫砂盆、可以自己吃饭饭 ~</li>
                    </ul>
                </div>
            </div>
            <div class="bottom"></div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {

      };
    },
    created () {}, // 生命周期-创建完成
    mounted () {}, // 生命周期-创建之前
    methods: {},
  }

</script>

<style scoped>
ul {
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
.MaxBox {
  width: 100%;
  margin-top: 40px;
}
.MaxBox .MaxBoxMain .top {
  width: 100%;
  height: 50px;
  background-color: #9fd9da;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.MaxBox .MaxBoxMain .center {
  margin-top: 50px;
  width: 100%;
  display: flex;
}
.MaxBox .MaxBoxMain .center .left {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.MaxBox .MaxBoxMain .center .left .topImg,
.MaxBox .MaxBoxMain .center .left .bottmImg {
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
}
.MaxBox .MaxBoxMain .center .right {
  width: 58%;
}
.MaxBox .MaxBoxMain .center .right li {
  padding: 4px 0;
  box-sizing: border-box;
  font-size: 16px;
  color: #77424e;
}
.MaxBox .MaxBoxMain .bottom {
  width: 100%;
  height: 50px;
  background-color: #9fd9da;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

</style>