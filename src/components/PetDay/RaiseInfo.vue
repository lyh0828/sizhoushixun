
<template>
    <div class="con">
        <div class="top">
            <span>哈比的猫小院</span>
        </div>
        <div class="main">
            <div class="imgMain">
                <img src="https://adopt.wozhua.net/images/box_top.gif">
            </div>

            <div class="mainFew">
                <p>￥9.90</p>
                <div>
                    <span>哈比的猫小院</span>
                    <span class="mainFewTwo">指定领养</span>
                    <span class="mainFewOme">剩余0只</span>
                </div>
            </div>

            <div class="mainMuch">
                <p>点击“领养一只”，你即可获得本小院剩余宠物中的任意一只（此为“随机领养”模式，享受首周9.9元的体验价）；还可以“指定领养”，找到你所喜欢的宠物，专门“领养它”。</p>
            </div>
            <div class="mainCompany">
                <p>机构信息</p>
                <p>
                    <a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
                    <span>山东省烟台市芝罘区</span>
                </p>
                <p>
                    <a><span class="mui-icon-extra mui-icon-extra-cate"></span></a>
                    <span>哈比的猫小院</span>
                </p>
                
                
            </div>
        </div>
        <div class="bottom">
            <span class="bottomA">￥9.9</span>
            <span class="bottomB">领养一只</span>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.con {
    margin-top: 40px;

    .top {
        background-color: snow;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .main {
        margin-bottom: 100px;

        .imgMain {
            width: 100%;
            height: 300px;
            background-color: snow;

            img {
                height: 237px;
                width: 237px;
                background-color: snow;
                margin-left: 80px;
            }

        }

        .mainFew {
            height: 80px;
            background-color: #6FB1A5;

            p {
                font-size: 17px;
                color: white;
                padding: 10px 0 0 10px;
            }

            div {
                margin-top: 20px;
                margin-left: 10px;
                color: snow;
            }

            .mainFewOme {
                float: right;
                margin-right: 10px;

            }

            .mainFewTwo {
                float: right;
                margin-right: 10px;
                color: rgb(220, 222, 76);
            }
        }

        .mainMuch {
            background-color: snow;
            margin-top: 10px;

            p {
                padding: 20px 10px 20px 10px;
                color: black;
                font-size: 15px;
                line-height: 30px;

            }
        }
        
    }

    .bottom {
        position: fixed;
        top: 630px;
        height: 55px;
        width: 100%;
        border-top: 2px solid #6FB1A5;
        line-height: 55px;
        background-color: cadetblue;

        .bottomA {
            margin-left: 10px;
            color: #6FB1A5;
        }

        .bottomB {
            display: block;
            float: right;
            width: 100px;
            background-color: #6FB1A5;
            height: 100%;
            color: snow;
            text-align: center;
        }
    }
}
</style>