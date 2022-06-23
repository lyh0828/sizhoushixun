<template>
    <div class="app-container">
        <!-- 顶部区域 -->
        <header class="mint-header" >
          <div class="mint-header-button is-left">
              <a href="#/" class="router-link-active">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
              </a>
          </div>
                <h1 class="mint-header-title">爱宠之家平台</h1> 
                <div class="mint-header-button is-right">
                    <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon"><i class="mintui mintui-more"></i></span>
                    <label class="mint-button-text"></label>
                    </button>
                </div>
        </header>

        <!-- <mt-header fixed title="爱宠之家平台"></mt-header> -->
        
        <!-- 中间内容 -->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>

        <!-- 底部导航 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/info">
				<span class="mui-icon mui-icon-plus"></span>
				<span class="mui-tab-label">发布信息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped>
 .mint-header{
    z-index: 100;
    height:40px;
    line-height:50px;
    width:100%;
    position: fixed;
     /* overflow: hidden; */
     top:0;
    /* margin-bottom:-14px; */
  }

/* .app-container{
    padding-top: 40px;
} */
/* .v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
} */
</style> 
