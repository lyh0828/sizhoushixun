<template>
<div>
<div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;">
          <img src="../../images/catinfo01.png" alt="" style="width:100%;height:200%;">
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" style="font-size:21px;">
            <br>
						<p>此商品参与“潮礼抢先囤”活动</p>
						<p style="color: #333; padding-bottom:10px;">伟嘉 海洋鱼味妙鲜包 成猫 85g*12袋</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">❤推荐</a>
					<router-link  to="/petshopping/shopcart" class="mui-card-link">+加入购物车</router-link >
				</div>
			</div>
       
			<div class="mui-card" style="margin-bottom: 35px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							<p >选择</p>
              颜色分类
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							<p >发货</p>
              江苏扬州  | 快递：免运费
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							<p >保障</p>
              价保服务·假一赔四·退货运费险
						</a>
					</li>
          <li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							<p >配方</p>
              海洋鱼 鸡肉 鲜肝
						</a>
					</li>
				</ul>
			</div>
      <div class="mui-content">
			<div class="mui-content-padded">
			
			
					<img src="../../images/catinfo02.png" data-preview-src="" data-preview-group="1" />
				
			
			
					<img src="../../images/catinfo03.png" data-preview-src="" data-preview-group="1" />
				
			
				
					<img src="../../images/catinfo04.png" data-preview-src="" data-preview-group="1" />
          	<img src="../../images/catinfo05.png" data-preview-src="" data-preview-group="1" />
				
			
			
					<img src="../../images/catinfo06.png" data-preview-src="" data-preview-group="1" />
				
			
				
					<img src="../../images/catinfo07.png" data-preview-src="" data-preview-group="1" />
		<img src="../../images/catinfo08.png" data-preview-src="" data-preview-group="1" />
    	<img src="../../images/catinfo09.png" data-preview-src="" data-preview-group="1" />
			</div>
		</div>
</div>
</template>

<script>

export default {
  name: "productInfo",
  data() {
    return {
      //产品的个数
      count: 1,
    };
  },


};
</script>

<style lang="less" scoped>
.mui-table-view-cell{
  p{
    color: gray;
    display: inline-block;
    padding-right: 15px;
  }
}
.mui-content-padded{
  img{
    width: 100%;
    margin-top: -6px;
  }
}
</style>