<template>
    <div class="con">
        <div class="top">
            <p>意见反馈</p>
        </div>
        <div class="fankui">
            <p class="fankuiT">选择反馈类型</p>
            <div class="fankui1">
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>功能询问</label>
                    <input name="checkbox" value="Item 1" type="checkbox">
                </div>
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>产品BUG</label>
                    <input name="checkbox" value="Item 1" type="checkbox">
                </div>
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>给我们点赞</label>
                    <input name="checkbox" value="Item 1" type="checkbox">
                </div>
            </div>
            <div class="fankui2">
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>意见建议</label>
                    <input name="checkbox" value="Item 1" type="checkbox">
                </div>
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>交流群举报</label>
                    <input name="checkbox" value="Item 2" type="checkbox">
                </div>
                <div class="mui-input-row mui-checkbox mui-left">
                    <label>其他问题</label>
                    <input name="checkbox" value="Item 2" type="checkbox">
                </div>
            </div>
        </div>
        <div class="miaoshu">
            <p>反馈描述</p>
            <el-input type="textarea" class="miaoshuinput" placeholder="请详细描述您的问题或建议，我们会及时处理您的反馈" v-model="textarea"
                clearable="true" maxlength="120" show-word-limit>
            </el-input>

            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange" :file-list="fileList">
                <el-button size="small" type="primary">上传图片</el-button>
            </el-upload>
        </div>
        <p class="lianxi">联系方式</p>
        <el-input class="lxinput" rows="5" v-model="input" clearable="true" placeholder="请留下任意一种联系方式 微信、电话。QQ">
        </el-input>
        <el-button class="buttonlx" round>圆角按钮</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea: '',
            input:''
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
.con {
    margin-top: 40px;
    background-color: white;
    height: 600px;


    .top {
        color: black;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 50px;
        top: 40px;
        position: fixed;
        width: 100%;

        p {
            font-size: 20px;
            color: black;
        }
    }

    .fankui {
        margin-top: 90px;
        font-size: 17px;
        padding-top: 10px;
        background-color: white;

        .fankuiT {
            margin-top: 10px;
            padding-left: 23px;
            font-size: 18px;
            margin-bottom: 20px;
        }

        .fankui1 {
            width: 40%;
            float: left;
            font-size: 15px;
        }

        .fankui2 {
            width: 40%;
            float: right;
            font-size: 15px;
            margin-right: 20px;
        }
    }

    .miaoshu {
        p {
            margin-top: 152px;
            margin-left: 20px;
            font-size: 18px;
        }

        .miaoshuinput {
            margin-top: 20px;
            width: 85%;
            margin-left: 20px;
        }

        .upload-demo {
            margin: 0 0 10px 30px;
        }
    }

    .lianxi {
        margin-left: 20px;
        font-size: 18px;
        margin: 30px;
    }

    .lxinput {
        width: 85%;
        margin-left: 20px;
    }

    .buttonlx {
        background-color: #e4cc04;
        width: 70%;
        height: 40px;
        margin-left: 50px;
        font-size: 17px;
        color: black;
    }


}
</style>