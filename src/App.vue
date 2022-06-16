<template>
    <div class="app-container">
        <!-- 顶部区域 -->
        
        <mt-header fixed title="爱宠之家平台"></mt-header>

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
				<span class="mui-icon mui-icon-plusempty"></span>
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