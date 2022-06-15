<template>
    <div class="app-container">
        <!-- 顶部区域 -->
        
        <mt-header fixed title="淘宝商城">
            <img class="fh" src="./images/fh.webp">
        </mt-header>
        <!-- <h1>这是app组件</h1> -->

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
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mytaobao">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的淘宝</span>
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
.mint-header.is-fixed{
    width: 510px;
    margin: 0 auto;
    
}
.app-container{
    padding-top: 40px;
    overflow-x: hidden;
}
.mui-bar.mui-bar-tab{
    width: 510px;
    margin: 0 auto;
}
.v-enter{
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
}
</style>