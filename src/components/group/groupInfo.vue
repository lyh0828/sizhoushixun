
<template>
    <div class="con">
        <div class="top">
            <span class="top1">加入交流群</span>
            <router-link to="/home/group/groupinfo/report">
            <span class="top2">举报</span></router-link>
        </div>
        <div class="image">
            <img src="../../images/erweima.jpg">


            <p>欢迎加入群</p>
        </div>

        <div class="main">
            <p class="main1">点击下方按钮 扫码进入群聊</p>
            <el-button type="text" @click="dialogVisible = true">
                加入群聊
            </el-button>
            <el-dialog title="二维码" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
                <img class="imginfo" src="../../images/erweima.jpg">
            </el-dialog>
            <p class="main2">温馨提示：若您进群后发现内容与描述不符 可截图后点击右上角进行举报 举报成功后 您将获得大量奖励或者VIP会员奖励</p>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
    }
};
</script>
<style lang="scss"scoped>
.con {
    margin-top: 40px;

    .top {
        height: 50px;
        line-height: 50px;
        width: 100%;
        background-color: white;

        .top1 {
            margin-left: 150px;
            font-size: 20px;
            font-weight: 400;
        }

        .top2 {
            margin-left: 110px;
        }
    }

    .image {
        background-color: white;
        height: 180px;
        text-align: center;

        img {
            height: 100px;
            margin-top: 20px;
        }

        p {
            color: #d78606;
        }
    }

    .main {
        text-align: center;

        .main1 {
            margin: 20px;
            font-size: 18px;
            color: black;
            font-weight: 500;
        }

        .main2 {
            text-align: left;
            width: 94%;
            margin: 30px 0 0 16px;
            color: #ff0a0aa1;
        }

        button {
            background-color: #dcce04;
            height: 40px;
            width: 200px;
            border-radius: 5px;
            color: black;
        }
        .imginfo {
            height: 200px;
        }
    }
}
</style>