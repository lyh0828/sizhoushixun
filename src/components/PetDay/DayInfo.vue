
<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <div class="mui-input-row mui-search">
					<input type="search" class="mui-input-clear" placeholder="搜索">
			</div>
        </div>
        <div class="main">
            <img class="imgMain" :src="img_url">
            <div class="mainInfo">
                <p class="mainInfoT">{{ title }}</p>
                <p class="mainInfoM">{{ content }}</p>
                <div>
                    <a class="iconTime"><span class="mui-icon-extra mui-icon-extra-outline">{{ time }} </span></a>
                    <a id="icon-person" class="iconPeople"><span class="mui-icon mui-icon-person">{{ seen }}人看过</span></a>
                </div>
                <router-link :to="'/home/daylist/perhome/'+dayinfo._id" class="mainInfoPic" >
                        <img :src="headimg_url">
                    <div>{{ nickname }}</div>
                </router-link>
                <hr>
                <a class="iconD">
                    <span class="mui-icon-extra mui-icon-extra-cate"></span>
                    <span class="iconDPing">欢迎您的评论</span>
                </a>
                <div class="mui-input-row" style="margin: 10px 5px 5px 5px;">
                    <textarea id="textarea" rows="5" placeholder="在这里留下您的评论" style=" border-radius: 30px;"></textarea>
                </div>
                <router-link to="">
                    <button @click="go" id="ok" class="mint-button mint-button--primary mint-button--normal">
                        <label class="mint-button-text" >确定</label>
                    </button>
                </router-link>
                
                <button id="cancle" class="mint-button mint-button--default mint-button--normal"><label
                        class="mint-button-text">取消</label>
                </button>

            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
            dayinfo:[],
            title:""
        }
    },
    created() {
        this.getdayinfo()
    },
    methods: {
        getdayinfo(){
            this.$http.get("dayinfos/info"+ '?id=' + this.$route.params.id).then(result =>{
                console.log(result.body)
               // if (result.body.status === 0){
                    this.dayinfo = result.body
                    this.title = result.body.title;
                    this.img_url = result.body.img_url;
                    this.time = result.body.time;
                    this.seen = result.body.seen;
                    this.nickname = result.body.nickname;
                    this.headimg_url = result.body.headimg_url;
               // }else{

                //    console.log('数据加载失败')
               // }
            })
        },
        go() {
            this.$toast({
                message: '添加成功',
                position: 'center',
                duration: 3000
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.con {
    margin-top: 40px;
    margin-bottom: 50px;

    ul {
        li {
            list-style: none;
        }
    }

    .top {
        height: 40px;
        background-color: snow;
        display: table;
        width: 100%;

        img {
            height: 40px;
            margin: 5px -10px 0 5px;
            border-radius: 50px;
        }

        .topFont {
            font-size: 30px;
            font-style: floor($number: 0);
            vertical-align: middle;
            display: table-cell;
            font-weight: bold;
        }
        div{
            float: right;
            width: 150px;
            height: 50px;
            margin: 2px 20px 0 0;
            padding-top: 12px;
            input{
                border-radius: 45px;
                background-color: snow;
                border:.5px solid #fad7be;
            }
        }

        .iconSearch {
            vertical-align: middle;
            display: table-cell;

            span {
                font-size: 30px;
                font-weight: bold;
            }
        }
    }

    .main {
        background-color: #FCF5F0;
        margin-bottom: 60px;

        .imgMain {
            width: 400px;
            border-radius: 15px 15px 0 0;
            margin: 30px 0 0 5px;
            box-shadow: 1px 0px 0px 0px #aaa;
        }

        .mainInfo {
            background-color: snow;
            height: 100%;

            .mainInfoT {
                font-size: 25px;
                padding: 20px 0 10px 17px;
                color: black;
                font-weight: 100px;
            }

            .mainInfoM {
                margin: -10px 15px 10px 17px;
            }

            .iconTime {
                color: rgb(94, 94, 94);
                margin: 0 220px 0 20px;

                span {
                    font-size: 15px;
                }

            }

            .iconPeople {
                color: rgb(94, 94, 94);

                span {
                    font-size: 15px;
                }
            }

            .mainInfoPic {
                height: 80px;
                display: block;

                img {
                    height: 50px;
                    width: 50px;
                    float: left;
                    border-radius: 50%;
                    margin: 20px 20px 0 10px;

                }

                div {
                    color: black;
                    width: 300px;
                    font-size: 20px;
                    float: left;
                    margin: 35px 0 0 -5px;
                    
                }
            }

            hr {
                width: 380px;
                border: .3px solid rgb(237, 232, 232);
            }

            .iconD {
                .mui-icon-extra-cate {
                    color: rgb(123, 123, 123);
                    font-size: 30px;
                    margin: 10px 0px 0 10px;
                }

                .iconDPing {
                    padding-bottom: -20px;
                    font-size: 10px;
                    color: rgb(123, 123, 123);
                }
            }
            #ok{
                margin: 0 20px 5px 20px;
                border-radius: 35px;
                width: 80px;
            }
            #cancle{
                margin: 0 20px 5px 20px;
                border-radius: 35px;
                border: 2px solid rgb(35, 34, 34);
                width: 80px;

            }
        }
    }
}
</style>