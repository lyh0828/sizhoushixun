<template>
    <div class="addremind">
       
        
              <img src="../../images/02.png" class="add">
           
        <ul>
            <li >
                <router-link to="/remindinfo" v-model='jianzhijia' @click="jianzhijia">
                     <img  src="../../images/remind01.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo" v-model="xiumao">
                     <img src="../../images/remind02.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo" v-model="huanshui">
                     <img src="../../images/remind03.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo" v-model="tianliang">
                     <img src="../../images/remind04.png" alt="">
                </router-link>
            </li>
              <li>
               <router-link to="/remindinfo" v-model="qingli">
                     <img src="../../images/remind05.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/remindinfo" v-model="yimiao">
                     <img src="../../images/remind06.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo" v-model="tijian">
                     <img src="../../images/remind07.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/remindinfo" v-model="maiyao">
                     <img src="../../images/remind08.png" alt="">
                </router-link>
            </li>
              <li>
               <router-link to="/remindinfo" v-model="jueyu">
                     <img src="../../images/remind09.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/remindinfo" v-model="shuaya">
                     <img src="../../images/remind10.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo" >
                     <img src="../../images/remind11.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo">
                     <img src="../../images/remind12.png" alt="">
                </router-link>
            </li>
              <li>
               <router-link to="/remindinfo">
                     <img src="../../images/remind13.png" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/remindinfo">
                     <img src="../../images/remind14.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo">
                     <img src="../../images/remind15.png" alt="">
                </router-link>
            </li>
            <li>
               <router-link to="/remindinfo">
                     <img src="../../images/remind16.png" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jianzhijia:'剪指甲',
        }
    },
    methods: {
        jianzhijia(){
          localStorage.setItem("jianzhijia", JSON.stringify(this.jianzhijia)); //存储到浏览器中

        }
    },
}
</script>
<style lang="scss" scoped>
    .addremind{
        margin-top:45px;
        height: 660px;
        background-color: rgb(252, 245, 229);
        background-image: url('../../images/remindback.png');
        .add{
            display: inline-block;
            width: 50px;
            margin-top: 10px;
            margin-left:170px ;
        }
        h2{
            color: rgb(251, 126, 113);
            font-weight: 400;
            letter-spacing: 18px;
            padding: 10px;
           
        }
        ul{
        padding: 0;
        }
        li{
            display: inline-block;
            padding: 4px;
        }
        img{
            width: 90px;
        }
    }
</style>