<template>
  <div class="home">
    <div class="topbar">
      <img class="img3" src="https://gw.alicdn.com/imgextra/i4/O1CN019XWXNq1aAPOVMYSiu_!!6000000003289-2-tps-167-63.png">
      <input type="text" id="text" placeholder="寻找宝贝店铺">
      <router-link to="/home/SearchGetprodlist">
        <input type="submit" id="submit" value="搜索">
      </router-link>
      
      <img class="img4" src="https://gw.alicdn.com/imgextra/i4/O1CN01ftum4629SHP6bCqTm_!!6000000008066-2-tps-99-99.png">
    </div>
    <div class="header">
    <!-- 栅格系统   12/3=4-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="http://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg_.webp" />
          <div class="mui-media-body">天猫商品</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="http://gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/home/getimgcategory">
          <img src="http://gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">飞猪旅行</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="http://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">天猫超市</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/imgextra/i1/O1CN018Ilnep1Qt9ryh1Vue_!!6000000002033-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">淘宝吃货</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/imgextra/i2/O1CN01gUIFrA1OuPj70aTIW_!!6000000001765-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">省钱卡</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/imgextra/i3/O1CN013WcsZW1jfr4AXnmVl_!!6000000004576-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">领淘金币</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/imgextra/i2/O1CN01ZOR1cv1yjGFORGh1V_!!6000000006614-2-tps-183-144.png_q90.jpg_.webp"/>
          <div class="mui-media-body">阿里拍卖</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="">
          <img src="//gw.alicdn.com/tfs/TB1WgOmesieb18jSZFvXXaI3FXa-183-144.png_q90.jpg_.webp?getAvatar=1"/>
          <div class="mui-media-body">分类</div>
        </router-link>
      </li>
    </ul>
  </div>

    <div class="middle">
      <!-- 栅格系统 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		   <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
         <span>聚划算</span>
         <button class="btn1">品牌折扣</button>
         <a href="#">
		        <img class="img1" src="http://gw.alicdn.com/tps/O1CN01xvzb531CAouY6s3Dq_!!41-2-lubanu.png_140x140q90.jpg_.webp">
            <img class="img2" src="http://gw.alicdn.com/tps/O1CN01g6pSWl1xwFx4dKhTD_!!6000000006507-0-yinhe.jpg_180x180q90.jpg_.webp">
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
         <span>天天特卖</span>
         <button class="btn1">1元秒杀</button>
         <a href="#">
		        <img class="img1" src="http://gw.alicdn.com/tps/O1CN01aPHVjJ1cYLLjC8ews_!!6000000003612-0-yinhe.jpg_140x140q90.jpg_.webp">
            <img class="img2" src="http://gw.alicdn.com/tps/O1CN01xYiXTE28HSQlQoBJN_!!6000000007907-0-yinhe.jpg_180x180q90.jpg_.webp">
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
         <span>有好货</span>
         <button class="btn2">好口碑</button>
         <a href="#">
		        <img class="img1" src="http://gw.alicdn.com/tps/TB1jLCZEvb2gK0jSZK9XXaEgFXa.jpg_140x140q90.jpg_.webp">
            <img class="img2" src="http://gw.alicdn.com/tps/TB11jqbMCzqK1RjSZFjSuvlCFXa.jpg_180x180q90.jpg_.webp">
         </a>
       </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-3">
         <span>每日好店</span>
         <button class="btn3">特色</button>
         <a href="#">
		        <img class="img1" src="http://gw.alicdn.com/tps/TB1DHqxlVooBKNjSZFPSuta2XXa.jpg_140x140q90.jpg_.webp">
            <img class="img2" src="http://gw.alicdn.com/tps/TB1mIGmUxjaK1RjSZFASuvdLFXa.jpg_180x180q90.jpg_.webp">
         </a>
       </li>
		 </ul> 
    </div>

    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
          <img src="http://gw.alicdn.com/imgextra/i4/2212399693216/O1CN01cYB1SH1ZcyVQT4Hcp_!!2212399693216-0-alimamacc.jpg_q90.jpg_.webp">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="http://gw.alicdn.com/imgextra/i2/6000000000464/O1CN01sN115O1FIYXD0CFkY_!!6000000000464-0-lubanimage.jpg_q90.jpg_.webp">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="http://gw.alicdn.com/imgextra/i4/6000000004690/O1CN01SWdh931kW4JBWbFjF_!!6000000004690-0-lubanimage.jpg_q90.jpg_.webp">
      </mt-swipe-item>
    </mt-swipe>
    <div class="sh">
    <img src="http://gw.alicdn.com/bao/uploaded/i1/4224138847/O1CN01LqAcNf2FDyg5qFNSW_!!0-item_pic.jpg_320x320q90.jpg_.webp">
    <div class="info">
      <span class="wen">思意达牛头奶棒糖无添加蔗糖奶片棒棒糖小孩儿童零食健康营养糖果</span><br><br>
      <div>
        <span class="wrap">￥</span>
        <span class="wrap-1">12.9</span>
        <span class="wrap-2">55人已购买</span>
      </div>
    </div>
  </div>
  <!-- 商品页 -->
  <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i4/2117067306/O1CN01rbvPkc23qCOnCBhyO_!!0-item_pic.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <span>2022年新款夏季印花圆领短袖T恤男士ins潮流青少年宽松纯棉上衣服</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">99</span>
                        <span class="recommend-payed">25人已购买</span>
                      </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i3/467494362/O1CN01tFdAGS1i5qO7oM4im_!!467494362.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <span>飞法国单！上身特轻薄透气~减龄小草莓刺绣宽松圆领短袖T恤上衣女</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">108</span>
                        <span class="recommend-payed">200+人已购买</span>
                      </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i1/696493885/O1CN01k1mim41eZNPbwUEWq_!!696493885-0-lubanu-s.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <div class="mui-media-body">
                      <span>回力老爹鞋子女春款ins潮超火2022新款春季女鞋休闲鞋百搭运动鞋</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">119</span>
                        <span class="recommend-payed">18人已购买</span>
                      </div>
                    </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i3/2201428954859/O1CN01p9icvk1llT8uqzP9r_!!0-item_pic.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <div class="mui-media-body">
                      <span>全自动晴雨伞两用小清新折叠太阳伞女学生防晒防紫外线遮阳伞ins</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">13.99</span>
                        <span class="recommend-payed">2000+人已购买</span>
                      </div>
                    </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i4/1114818756/O1CN01VrWiZk2EYId6LXHSX_!!1114818756.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <div class="mui-media-body">
                      <span>微胖女生穿搭吊带连衣裙夏胖妹妹mm大码显瘦牛仔背带裙女夏季薄款</span>
                     <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">79</span>
                        <span class="recommend-payed">5人已购买</span>
                      </div>
                    </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i2/2116492261/O1CN019kATd21SZaCWHMqJz_!!2116492261.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <div class="mui-media-body">
                      <span>高级感炸街奶牛卫衣女秋季无帽宽松长袖薄款拼接假两件上衣潮ins</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">32.8</span>
                        <span class="recommend-payed">9人已购买</span>
                      </div>
                    </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i3/355739614/O1CN01VXjy8L2KtGXGO83A7_!!0-item_pic.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <div class="mui-media-body">
                      <span>舒客儿童电动牙刷宝宝小孩软毛3-6-10岁2岁以上自动B32s</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">169</span>
                        <span class="recommend-payed">1000+人已购买</span>
                      </div>
                    </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="http://gw.alicdn.com/bao/uploaded/i1/2136345979/O1CN01GJkZb61u2Qjx5KkUI_!!0-item_pic.jpg_320x320q90.jpg_.webp">
		                <div class="mui-media-body">
                      <span>衫岛日系发泡印花情侣短袖T恤男2021夏季新款宽松圆领体恤潮</span>
                      <div class="recommend-price-box">
                        <span class="recommend-sign recommend-h">￥</span>
                        <span class="recommend-price">68</span>
                        <span class="recommend-payed">9+人已购买</span>
                      </div>
                    </div>
                </a>
            </li>
		    </ul>    
		</div>

  </div>
  <!-- 商品页 -->
</template>

<script>

export default {

};
</script>
<style lang="scss" scoped>
.home {
  background-color: snow;
  margin: 0px;
  padding: 0px;
}
.topbar{
  margin: 0px;
  padding: 0px;
  width: 486px;
  height: 63px;
  position: relative;
  .img3{
    width: 72px;
    height: 27px;
  }
  .img4{
    width:43px;
    height: 43px;
    padding:10px 0 0 10px;
  }
  #text{
    width: 280px;
    height: 45px;
    border-radius: 20px;
    border: 1.5px solid #ff5000;
  }
  #submit{
    width: 60px;
    height: 41px;
    border-radius: 20px;
    background-color: #ff5000;
    border: 1.5px;
    margin-top: 15px;
  }
}

.header{
  position: relative;
.mui-table-view.mui-grid-view.mui-grid-9{
  background-color: snow;
  border: none;
  li {
    border: none;
    width: 20%;
    
  }
  img {
    width: 79px;
    height: 62px;
  }
  .mui-media-body{
    font-size: 16px;
    color: #666666;
   
  }
}
}

// 轮播图
.mint-swipe{
    height: 324px;
    width: 235px;
      img{
          width:100%;
          height: 100%;
      }
    // .mint-swipe-item{
    //     &:nth-child(1){
    //         background-color: aquamarine;
    //     }
    //     &:nth-child(2){
    //         background-color:deeppink;
    //     }
    //     &:nth-child(3){
    //         background-color:darksalmon;
    //     }
    // }
}
.middle{
  position: relative;
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: snow;
    border: none;
    li{
      width: 50%;
      height: 110px;
      span{
        font-size: 16px;
        font-weight: bold;
        color: #111111;
        margin-left: -67px;
      }
      .btn1{
        margin: 0;
        padding: 0;
        font-size: 12px;
        width: 58px;
        height: 20px;
        background-color: rgb(255, 66, 0);
        color: white;
      }
      .btn2{
        margin: 0;
        padding: 0;
        font-size: 12px;
        width: 58px;
        height: 20px;
        background-color: rgb(0, 144, 234);
        color: white;
      }
      .btn3{
        margin: 0;
        padding: 0;
        font-size: 12px;
        width: 58px;
        height: 20px;
        background-color: rgb(255, 151, 17);;
        color: white;
      }
      .img1{
        width: 67px;
        height: 67px;
        margin-bottom: 14px;
      }
      .img2{
        width: 85px;
        height: 85px;
        margin-top: -20px;
      }
    }
    
  }
}
.sh{
  position: relative;
  float: right;
  margin-top: -300px;
  height: 300px;
  img{
    width: 236px;
    height: 230px;
    margin-left: -20px;
    margin-top: -16px;
    border-radius: 5px;
  }
  .info{
    width: 235px;
    height: 115px;
    color: #333;
    .wen{
      font-size: 15px;
    }
    .wrap{
      font-size: 13px;
      color: #ff5000;
    }
    .wrap-1{
      font-size: 17px;
      color: #ff5000;
    }
    .wrap-2{
      font-size: 13px;
      color: #999999;
    }
  }
  }
 

.mui-content{
  img{
    border-radius: 5px;
  }
  li{
    height: 330px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
			height: 100px;
      font-size: 16px;
      line-height: 23px;
	}
  .recommend-price-box{
    margin-top: 10px;
  }
  .recommend-sign.recommend-h{
    font-size: 13px;
    margin-left: -50px;
    color: #ff5000;
  }
  .recommend-price{
    font-size: 17px;
    color: #ff5000;
  }
  .recommend-payed{
    font-size: 13px;
    color: #999999;
    margin-top: 3px;
  }

  

}


</style>