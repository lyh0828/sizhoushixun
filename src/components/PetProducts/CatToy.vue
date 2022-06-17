<template>
<div style="margin-top:45px;">

<h2>猫咪零食</h2>



         <div class="mui-content" style="background-color:#fff">

		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link to="/home/productInfo">
                          <div class="mui-media-body">伟嘉 海鲜鱼味妙鲜包</div>
		                <img class="mui-media-object" src="../../images/cat01.png">
		              </router-link>
                      <span style=" padding-top:10px;	color: #FF7F50;" >￥39.90元
                          <p style="color: #D9D9D9; display:inline-block;">1200人购买</p>
                      </span>
                      </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                         
		                <img class="mui-media-object" src="../../images/cat02.png">
                         <div class="mui-media-body">天然猫罐头</div>
                          
		              </a>
                  <div style="padding-top:10px;">
                      <span style="	color: #FF7F50;" >￥10.50元
                          <p style="color: #D9D9D9; display:inline-block;">580人购买</p>
                      </span>
                  </div>
                     
                      
                      </li>
		    </ul>   
            <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                          <div class="mui-media-body">泰国进口珍致 猫罐头</div>
                          
                          
		                <img class="mui-media-object" src="../../images/cat03.png">
		              </a>
                       <span style="	color: #FF7F50;" >￥56.0元
                          <p style="color: #D9D9D9; display:inline-block;">12人购买</p>
                      </span></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                         
		                <img class="mui-media-object"  src="../../images/cat04.png">
                         <div class="mui-media-body">爱丽思IRIS 鸡肉+金枪鱼</div>
                        
		              </a>
                       <span style="	color: #FF7F50;" >￥7.99元
                          <p style="color: #D9D9D9; display:inline-block;">1600人购买</p>
                      </span>
                      </li>
		    </ul> 
            <ul class="mui-table-view mui-grid-view" >
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                          <div class="mui-media-body">猫用小鱼饼干</div>
		                <img class="mui-media-object" src="../../images/cat05.png">
		              </a>
                       <div style="padding-top:10px;">
                      <span style="	color: #FF7F50;" >￥19.90元
                          <p style="color: #D9D9D9; display:inline-block;">580人购买</p>
                      </span>
                  </div>
                      </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                         
		                <img class="mui-media-object"  src="../../images/cat06.png">
                         <div class="mui-media-body">柏可心 薄荷饼干（馋嘴猫配方）</div>
                         
		              </a>
                        <div style="padding-top:10px;">
                      <span style="	color: #FF7F50;" >￥15.50元
                          <p style="color: #D9D9D9; display:inline-block;">580人购买</p>
                      </span>
                  </div>
                      </li>
		    </ul>  
              <ul class="mui-table-view mui-grid-view" >
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                          <div class="mui-media-body">三文鱼肉条零食</div>
		                <img class="mui-media-object" src="../../images/cat07.png">
		              </a>
                       <div style="padding-top:10px;">
                      <span style="	color: #FF7F50;" >￥4.50元
                          <p style="color: #D9D9D9; display:inline-block;">580人购买</p>
                      </span>
                  </div>
                      </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
                         
		                <img class="mui-media-object"  src="../../images/cat08.png">
                         <div class="mui-media-body">柏可心 小虾干</div>
                         
		              </a>
                       <div style="padding-top:10px;">
                      <span style="	color: #FF7F50;" >￥12.90元
                          <p style="color: #D9D9D9; display:inline-block;">580人购买</p>
                      </span>
                  </div>
                      </li>
		    </ul>  
		</div>
</div>
  
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.doglist {
  width: 700px;
  height: 600px;
  margin: 20px auto;

  /* position: fixed; */
}
.productlist {
  height: 480px;
  border: 1px solid #e7e7e7;
}
/* 左边列表 */
.list-left {
  display: inline-block;
}
.list-left img {
  width: 328px;
  height: 477px;
}
.list-left .overflow {
  width: 298px;
  height: 148px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 100px;
  bottom: -297px;
  padding: 15px;
}
.overflow span {
  margin: 10px auto;
  color: rgb(102, 102, 102);
}
.overflow ul {
  width: 315px;
  height: 102px;
}
.overflow li {
  width: 105px;
  height: 24px;
  line-height: 24px;
  margin-top: 10px;
}
/* 右边列表 */
.productlist .list-right {
  /* float: right; */
  /* display: inline-block; */
  position: relative;
  width: 868px;
 

  margin-left: 328px;
  margin-top: -481px;
}


.productlist .list-right ul {
  list-style: none;
  display: inline-block;
  margin: 0 0;
  padding: 0;
}
.productlist .list-right ul li {
  width: 389px;
  height: 299px;
  border-bottom: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
}
.productlist .list-right ul li span {
  color: black;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  margin-left: -350px;
  position: absolute;
  margin-top: 20px;
}
.productlist .list-right ul li p {
  position: absolute;
  margin-top: -230px;
  margin-left: 20px;
}
.productlist .list-right ul li:nth-child(2) {
  width: 479px;
  height: 149px;
  float: right;
  position: absolute;
  margin-left: 389px;
  margin-top: -299px;
  border-bottom: 1px solid #e7e7e7;
}
.productlist .list-right ul li:nth-child(2) span {
  color: black;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  position: absolute;
  margin-top: 20px;
}
.productlist .list-right ul li:nth-child(2) p {
  position: absolute;
  margin-top: -80px;
  margin-left: 120px;
}
.productlist .list-right ul li:nth-child(3) {
  width: 479px;
  height: 149px;
  float: right;
  position: absolute;
  margin-left: 389px;
  margin-top: -150px;
   border-top: 1px solid #e7e7e7;
}
.productlist .list-right ul li:nth-child(3) span {
  color: black;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  position: absolute;
  /* margin-top: 20px; */
}
.productlist .list-right ul li:nth-child(3) p {
  position: absolute;
  margin-top: -75px;
  margin-left: 120px;
}
.threebox {
  width: 870px;
  height: 167px;
}
.threebox img {
  width: 286px;
  height: 176px;
}
.threebox span {
  display: inline-block;
  position: absolute;
  margin-left: 30px;
  margin-top: 20px;
  font-size: 20px;
}
.threebox div {
  display: inline-block;
}
.brands ul {
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  width: 1199px;
  height: 66px;
  padding: 0;
  margin: 0;
}
.brands li {
    width: 144px;
    height: 66px;
    border-left: 1px solid #e7e7e7;
    display: inline-block;
    overflow: hidden;
    text-align: center;
}
.brands img{
  width: 100px;
  height: 48px;
  margin-top: 10px;
}
</style>