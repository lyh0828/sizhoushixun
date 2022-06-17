<!--
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-17 10:19:48
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-17 16:40:18
 * @FilePath: \sizhoushixun\src\components\PetDay\DayList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <a class="iconSearch"><span class="mui-icon mui-icon-search"></span></a>
        </div>
        <div class="main">
            <p class="mainTitle">宠物的日记</p>
            <ul>
                <li>
                    <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F0731%2Fbizhi-0731-7777.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041598&t=e84feb81bb0122c32055de4a4a20d631">
                        <span>标题1</span>
                </li>
                <li><img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-04-24%2F5adf0cd1a98af.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041846&t=51cbe23b17cadf9f103f7952b3851f2a">
                        <span>标题2</span>
                </li>
                <li><img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F611%2F032413115228%2F130324115228-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041741&t=2622c7322c9ccef234eb920a10867963">
                        <span>标题3</span>
               </li>
                <li><img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12749108814%2F641.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041798&t=9837c72835817dc460b347c0ee673860">
                        <span>标题4</span>
               </li>
                <li><img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091020%2Fo20m41eqb4co20m41eqb4c.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041706&t=f995c6be8f11029a707899c25e2c57de">
                        <span>标题5</span>
                </li>
                <li><img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F17%2F20200217181253_NNY3y.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041877&t=70e9be3fd25e36368b716511325c9fbf">
                        <span>标题6</span>
               </li>
            </ul>
        </div>


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

<style lang="scss" scoped>
.con {
    ul {
        li {
            list-style: none;
        }
    }

    ;
    margin-top: 40px;

    .top {
        height: 40px;
        background-color: snow;
        display: table;
        width: 100%;

        img {
            height: 40px;
            margin: 5px -27px 0 5px;
            border-radius: 50px;
        }

        .topFont {
            font-size: 30px;
            font-style: floor($number: 0);
            vertical-align: middle;
            display: table-cell;
            font-weight: bold;
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
        height: 1000px;
        background-color: #FCF5F0;

        .mainTitle {
            padding-top: 50px;
            margin-bottom: 35px;
            text-align: center;
            font-size: 33px;
            color: #3e1e07;
        }

        ul {
            margin: 0 10px 3px -30px;
            height:auto;
            li {
                float: left;
                width: 190px;;
                background-color: snow;
                box-shadow:0px 0px 5px 0px #aaa;
                border-radius: 10px;
                margin-bottom: 20px;
                margin-right: 5px;
                overflow: auto;
                
                img {
                    width: 190px;
                    height: 100%;
                    border-radius: 10px 10px 0 0 ;
                }
                span{
                    display: inline-block;
                    height: 35px;
                    text-align: center;
                }
            }
        }
    }
}
</style>