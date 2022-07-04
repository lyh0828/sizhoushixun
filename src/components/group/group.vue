<template>
    <div class="con">
        <div class="xuan">
            <el-dropdown>
                <span class="el-dropdown-link">
                    全国<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>北京市</el-dropdown-item>
                    <el-dropdown-item>天津市</el-dropdown-item>
                    <el-dropdown-item>河北省</el-dropdown-item>
                    <el-dropdown-item>山西省</el-dropdown-item>
                    <el-dropdown-item>河南省</el-dropdown-item>
                    <el-dropdown-item>安徽省</el-dropdown-item>
                    <el-dropdown-item>上海市</el-dropdown-item>
                    <el-dropdown-item>内蒙古自治区</el-dropdown-item>
                    <el-dropdown-item>新疆自治区</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span class="el-dropdown-link">
                    不限群型<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>铲屎官群</el-dropdown-item>
                    <el-dropdown-item>商家群</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span class="el-dropdown-link">
                    不限宠型<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>猫狗群</el-dropdown-item>
                    <el-dropdown-item>猫咪群</el-dropdown-item>
                    <el-dropdown-item>狗狗群</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span class="el-dropdown-link">
                    不限收费<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>免费群</el-dropdown-item>
                    <el-dropdown-item>收费群</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <ul>
            <li>
                <span><img src="http://p1.itc.cn/q_70/images03/20200714/85aa0f81c7964b768852db403e4907f7.gif"></span>
                <div>
                    <p class="main1">官方交流群</p>
                    <span class="main5">
                        <p class="main2">加入官方交流群，可以一起交流宠物日常，相互交流经验，小宠物能有什么坏心思呢，铲屎官们欢迎加入！</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
            <li>
                <span><img src="https://p.qqan.com/up/2022-5/202252493131092.jpg"></span>
                <div>
                    <p class="main1">铲屎官交流群</p>
                    <span class="main5">
                        <p class="main2">本群是宠物交流群，欢迎加入大家庭</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
            <li>
                <span><img src="https://p.qqan.com/up/2022-6/20226169474576.jpg"></span>
                <div>
                    <p class="main1">宠物喂养交流群</p>
                    <span class="main5">
                        <p class="main2">宠物世界，公会，红包，夺宝，技能</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
            <li>
                <span><img src="https://p.qqan.com/up/2021-9/2021915945333791.jpg"></span>
                <div>
                    <p class="main1">汪星人宠物交流群</p>
                    <span class="main5">
                        <p class="main2">热力欢迎各位爱宠人士加入本群，便于大家相互认识</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
            <li>
                <span><img src="https://p.qqan.com/up/2021-8/2021823101017380.jpg"></span>
                <div>
                    <p class="main1">宠物王国</p>
                    <span class="main5">
                        <p class="main2">欢迎各位铲屎官加入 相互交流经验 定期组织活动</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
            <li>
                <span><img src="https://p.qqan.com/up/2022-6/2022623944454702.jpg"></span>
                <div>
                    <p class="main1">宠物联盟</p>
                    <span class="main5">
                        <p class="main2">欢迎喜欢宠物的亲们的加入，关于养宠的经验，和疾病预防，大家尽情的交流吧！也可以找群主</p>
                        <router-link to="/home/group/groupinfo">
                        <span class="main3">加群</span></router-link>
                    </span>
                    <div >
                        <p class="main4">免费</p>
                        <i class="el-icon-coffee-cup"></i>
                        
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
    }
};
</script>
<style lang="scss"scoped>
.con {
    margin-top: 50px;

    .xuan {
        background-color: white;
        height: 50px;
        line-height: 50px;
        text-align: center;
        el-dropdown-item{
            width: 200px;
        }
    }

    ul {
        margin: 1px;
        padding-top: 20px;
        margin-bottom: 50px;
        background-color: white;
        li {
            list-style: none;
            padding-bottom: 110px;

            img {
                float: left;
                height: 85px;
                margin-left: 4px;
                border-radius: 10px;
            }

            div {
                float: right;
                width: 77%;

                .main1 {
                    font-size: 16px;
                    font-weight: bold;
                    color: black;
                }

                .main2 {
                    float: left;
                    width: 72%;
                    overflow: hidden;
                    height: 30px;
                    padding-top: 10px;
                }

                .main3 {
                    color: black;
                    float: right;
                    height: 30px;
                    background-color: yellow;
                    width: 70px;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 20px;
                    margin-right: 8px;
                }

                .main4 {
                    float: left;
                    margin: 0px 0 0 -65px;
                    font-size: 17px;
                    color: #b75e00;
                }
                .el-icon-coffee-cup{
                    margin: -50px 0 0 -20px;
                }
            }
        }
    }
}
</style>