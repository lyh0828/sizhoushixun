
<template>
    <div class="con">
        <div class="top">
            <input type="search" class="mui-input-clear" placeholder="请输入小院所在城市或小院名称">
        </div>
        <div class="main">
            <ul>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                    </router-link>
                        
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
                <li>
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：5</span>
                        </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style  lang="scss" scoped>
.con {
    margin-top: 40px;
    .top {
        margin: 50px 10px 10px 10px;

        input {
            border-radius: 10px;
            height: 45px;
            background-color: snow;
            margin-bottom: -8px;
        }
    }

    .main {
        padding-bottom: 50px;

        ul {
            padding: 0;
            margin: 0;

            li {
                list-style: none;
                float: left;
                width: 47%;
                border-radius: 10px;
                background-color: snow;
                margin: 5px -3px 0 9px;
                    img {
                        margin-left: 10px;

                    }

                    .mainTitle {
                        margin: 11px 0 30px 5px;
                        font-size: 17px;
                        color: black;
                    }
                    div{ 
                        width: 100%;
                        margin-bottom: 65px;
                        .mainM{ 
                            display:block;
                            color: green;
                            float: left;
                            margin-left: 8px;
                            
                        }
                        .mainN{
                            display:block;
                            color: black;
                            float: right;
                            margin-right: 8px;
                        }
                    }
                
            }
        }
    }
}
</style>