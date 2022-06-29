<template>
  <div class="banner">
    <div class="mui-input-row mui-search">
      <input
        type="search"
        class="mui-input-clear"
        placeholder="🔍请输入食物的名称"
      />
    </div>
	 <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-3">
        <div
          id="segmentedControls"
          class="
            mui-segmented-control
            mui-segmented-control-inverted
            mui-segmented-control-vertical
          "
        >
		<a class="mui-control-item" href="#content1">水果</a>
      <a class="mui-control-item" href="#content2">药品补品</a>
		 <a class="mui-control-item" href="#content3">零食甜点</a>
          <a class="mui-control-item" href="#content4">饮料</a>
            <a class="mui-control-item" href="#content5">叶类蔬菜</a>
          <a class="mui-control-item" href="#content6">水产海鲜</a>
        
         
        
          
		  <a class="mui-control-item" href="#content7">奶制品</a>
		  <a class="mui-control-item" href="#content8">豆制品</a>
		  <a class="mui-control-item" href="#content9">肉蛋类</a>
		  <a class="mui-control-item" href="#content10">菌菇类</a>
		  <a class="mui-control-item" href="#content11">调味品</a>
		  <a class="mui-control-item" href="#content12">主食</a>
		  <a class="mui-control-item" href="#content13">根茎类蔬菜</a>


        </div>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-9"
        style="border-left: 1px solid #c8c7cc;margin-top:-4px;"
      >

       <div id="content1" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=941700519,2950891062&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>葡萄/葡萄干</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2316594931,1260119686&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>牛油果</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1319471531,2221472603&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=400"
                  alt=""
                />
                <span>百香果</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1990754312,2616438367&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=752"
                  alt=""
                />
                <span>石榴</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1445738122,1193391287&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                  alt=""
                />
                <span>杏</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2003469539,1821908735&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334"
                  alt=""
                />
                <span>柿子</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=963139044,2400731480&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500"
                  alt=""
                />
                <span>青梅</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1776264793,2905534108&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500"
                  alt=""
                />
                <span>枇杷</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=140719291,2978612685&fm=253&fmt=auto&app=138&f=JPEG?w=685&h=439"
                  alt=""
                />
                <span>杨桃</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=515157748,2145091960&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                  alt=""
                />
                <span>车厘子/樱桃</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=4020974992,4027586077&fm=253&fmt=auto&app=138&f=JPEG?w=310&h=310"
                  alt=""
                />
                <span>桃</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1600096700,2864888466&fm=253&fmt=auto&app=138&f=JPG?w=300&h=300"
                  alt=""
                />
                <span>黄桃</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2001232935,22004000&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500"
                  alt=""
                />
                <span>杨梅</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=476766797,686719383&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
                  alt=""
                />
                <span>李子</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2938065847,2479963825&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>菠萝/凤梨</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=885965300,2074838601&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                  alt=""
                />
                <span>草莓</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2732120175,1370954706&fm=253&fmt=auto&app=138&f=JPEG?w=510&h=340"
                  alt=""
                />
                <span>芒果</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=89907842,1614934329&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
                  alt=""
                />
                <span>香蕉</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=4124947986,2385256298&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
                  alt=""
                />
                <span>榴莲</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2998369429,2810919167&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>哈密瓜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1571014671,1329084906&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>橙子</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3650241826,2409109516&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>柚子</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2808396025,30647625&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
                  alt=""
                />
                <span>荔枝</span>
              </div>
			 
			
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00187-3677.jpg"
                  alt=""
                />
                <span>椰子</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2511795563,1990367520&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=427"
                  alt=""
                />
                <span>柠檬</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3849375323,1747395708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>苹果</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2210430247,819625441&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>木瓜</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1922465990,1802971097&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>山楂</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1500357967,2796696860&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>蓝莓</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=739776458,4240664687&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
                  alt=""
                />
                <span>西瓜</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3773671595,2226825253&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                  alt=""
                />
                <span>蔓越莓</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=578525306,1251837304&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=434"
                  alt=""
                />
                <span>梨子</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=4215836072,2127582386&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=640"
                  alt=""
                />
                <span>火龙果</span>
              </div>

            </li>
          </ul>
        </div>
	  <!-- 水产海鲜列表 -->
        <div id="content6" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3717826276,2188344229&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=323"
                  alt=""
                />
                <span>鱼骨</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1239100400,2853940828&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=559"
                  alt=""
                />
                <span>螃蟹</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1886980985,2935981679&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=577"
                  alt=""
                />
                <span>鱿鱼，章鱼</span>
              </div>
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1692292586,4222377328&fm=253&fmt=auto&app=120&f=JPEG?w=670&h=447"
                  alt=""
                />
                <span>鱼/鱼肉</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1245098509,1088754498&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=495"
                  alt=""
                />
                <span>虾</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2496023056,861102357&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=480"
                  alt=""
                />
                <span>贝类</span>
              </div>
            </li>
          </ul>
        </div>
		<!-- 药品补品 -->
        <div id="content2" class="mui-control-content">
           <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3570723528,3424869641&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=504"
                  alt=""
                />
                <span>人用钙片</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3506629849,2357284172&fm=253&fmt=auto&app=138&f=JPEG?w=455&h=459"
                  alt=""
                />
                <span>人用羊奶粉</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=691224945,1168223745&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312"
                  alt=""
                />
                <span>人类药物</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=229614397,3189131504&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=494"
                  alt=""
                />
                <span>含铁维生素</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00478-3241.jpg"
                  alt=""
                />
                <span>大黄</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2657422035,1792975511&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=466"
                  alt=""
                />
                <span>人用维生素</span>
              </div>
             
            </li>
      
          </ul>
        </div>
		<!-- 零食甜点 -->
        <div id="content3" class="mui-control-content">
           <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=4214908748,1380343675&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                  alt=""
                />
                <span>巧克力</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1774701258,2805840468&fm=253&fmt=auto&app=138&f=JPEG?w=628&h=380"
                  alt=""
                />
                <span>糖果</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2336859508,1345125376&fm=253&fmt=auto&app=138&f=JPG?w=500&h=333"
                  alt=""
                />
                <span>冰淇淋</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1922179107,3272914827&fm=253&fmt=auto&app=138&f=JPEG?w=614&h=500"
                  alt=""
                />
                <span>甜点/蛋糕</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3879510694,2985821770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>膨化食品</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=632765743,3685985363&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>火腿肠/肉肠</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00478-2950.jpg"
                  alt=""
                />
                <span>卤味</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3503068297,763511331&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>月饼</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=79180684,460864061&fm=253&fmt=auto&app=138&f=JPEG?w=668&h=500"
                  alt=""
                />
                <span>垃圾食品</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2805414747,3645973279&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                  alt=""
                />
                <span>饼干</span>
              </div>
             
            </li>
      
          </ul>
        </div>
		<!-- 饮料列表 -->
		 <div id="content4" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3586253117,2095118451&fm=253&fmt=auto&app=138&f=JPEG?w=477&h=358"
                  alt=""
                />
                <span>咖啡</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=260372648,448744814&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
                  alt=""
                />
                <span>奶茶</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1362184341,1521997824&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=5008"
                  alt=""
                />
                <span>酒精</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1070391636,2346326118&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>热可可</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3941899924,1187504345&fm=253&fmt=auto&app=120&f=JPEG?w=575&h=594"
                  alt=""
                />
                <span>苏打水</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1466951137,119200094&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500"
                  alt=""
                />
                <span>碳酸饮料</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3586995169,1192940882&fm=253&fmt=auto&app=120&f=JPEG?w=820&h=546"
                  alt=""
                />
                <span>茶</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1613198671,2679990598&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                  alt=""
                />
                <span>果汁</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1541162767,823400374&fm=253&fmt=auto&app=120&f=JPEG?w=1024&h=683"
                  alt=""
                />
                <span>酸奶</span>
              </div>
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00274-3287.jpg"
                  alt=""
                />
                <span>羊奶</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3009888167,2932714792&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800"
                  alt=""
                />
                <span>蜂蜜/蜂蜜水</span>
              </div>
             
            </li>
          </ul>
        </div>
<!-- 叶类蔬菜 -->
		 <div id="content5" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00708-1568.jpg"
                  alt=""
                />
                <span>鱼腥草</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3388282777,967780843&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=333"
                  alt=""
                />
                <span>韭菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1816264417,225703022&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=400"
                  alt=""
                />
                <span>黄花菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=4013870370,2604844673&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=379g"
                  alt=""
                />
                <span>韭黄</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1240050253,269718800&fm=253&fmt=auto&app=138&f=JPEG?w=670&h=447"
                  alt=""
                />
                <span>花菜</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2667409870,292136809&fm=253&fmt=auto&app=138&f=JPEG?w=726&h=500"
                  alt=""
                />
                <span>西兰花</span>
              </div>
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00621-1530.jpg"
                  alt=""
                />
                <span>豆苗</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3909287602,826673411&fm=253&fmt=auto&app=138&f=JPEG?w=925&h=500"
                  alt=""
                />
                <span>孢子甘蓝</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1284057565,680559014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334"
                  alt=""
                />
                <span>穿心莲</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=929802976,3247724567&fm=253&fmt=auto&app=120&f=JPEG?w=803&h=529"
                  alt=""
                />
                <span>莴笋/莴苣</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2743483901,1924334193&fm=253&fmt=auto&app=120&f=JPEG?w=900&h=500"
                  alt=""
                />
                <span>芹菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=974935098,3523218494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                  alt=""
                />
                <span>白菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2285958111,2671351545&fm=253&fmt=auto&app=138&f=JPEG?w=625&h=500"
                  alt=""
                />
                <span>菠菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=847587754,2684225056&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=410"
                  alt=""
                />
                <span>圆白菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=749042931,746508805&fm=253&fmt=auto&app=138&f=JPEG?w=900&h=500"
                  alt=""
                />
                <span>青菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2746595649,2917214060&fm=253&fmt=auto&app=120&f=JPEG?w=954&h=633"
                  alt=""
                />
                <span>生菜</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3526401313,451789542&fm=253&fmt=auto&app=138&f=JPEG?w=605&h=375"
                  alt=""
                />
                <span>空心菜</span>
              </div>

			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=4239352238,2900276336&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
                  alt=""
                />
                <span>油麦菜</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1836174919,1140408922&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>紫甘蓝</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1616482552,3846180734&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"
                  alt=""
                />
                <span>紫苏</span>
              </div>

            </li>
          </ul>
        </div>
		<!-- 水果 -->
		
<!-- 奶制品 -->
     <div id="content7" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1500680666,11072583&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=468"
                  alt=""
                />
                <span>婴儿奶粉</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=248501222,2733078366&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
                  alt=""
                />
                <span>奶油</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3954467489,2217167320&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=428"
                  alt=""
                />
                <span>牛奶</span>
              </div>
             
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1901656073,2132611883&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=460"
                  alt=""
                />
                <span>奶酪/芝士</span>
              </div>
              <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00431-701.jpg"
                  alt=""
                />
                <span>羊奶粉</span>
              </div>
             
            </li>
          </ul>
        </div>

		<!--豆制品  -->
		     <div id="content8" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3034984874,1956626245&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=406"
                  alt=""
                />
                <span>豆浆</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00678-3251.jpg"
                  alt=""
                />
                <span>豆腐</span>
              </div>
            </li>
          
      
          </ul>
        </div>
<!-- 肉蛋类 -->
		     <div id="content9" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3271521374,905614919&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=572"
                  alt=""
                />
                <span>茶叶蛋</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=4088603214,3567636829&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>生鸡蛋</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1133103023,1828908386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>咸鸭蛋</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1134539542,3303434522&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>皮蛋</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3587077718,3225182894&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350"
                  alt=""
                />
                <span>鸭骨</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2962690433,1108411087&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=760"
                  alt=""
                />
                <span>生肉</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1600930112,1575315677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=307"
                  alt=""
                />
                <span>骨头</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2675060406,1993000824&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=244"
                  alt=""
                />
                <span>内脏/猪肝</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2692457697,3199102040&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=399"
                  alt=""
                />
                <span>蛋白</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=123737085,4257088539&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"
                  alt=""
                />
                <span>猪肉</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1002655642,4080096247&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>牛骨</span>
              </div>

            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=119902505,1520691253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=515"
                  alt=""
                />
                <span>蒸蛋/水蒸蛋</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3358563133,2526211965&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=600"
                  alt=""
                />
                <span>三文鱼</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2375821421,4193574516&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>鸡肉</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3266872850,4013720767&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=320"
                  alt=""
                />
                <span>鸽子</span>
              </div>
			    <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3550967076,3349750166&fm=253&fmt=auto&app=138&f=JPG?w=602&h=500"
                  alt=""
                />
                <span>牛肉</span>
              </div>
			   
			   
			    
			  

            </li>
          </ul>
        </div>
<!-- 菌菇类 -->
		     <div id="content10" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3509091971,3135215271&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>金针菇</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1947086554,3448176690&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>银耳</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3689513278,961819774&fm=253&fmt=auto&app=138&f=JPEG?w=543&h=500"
                  alt=""
                />
                <span>木耳</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=4051274295,868338134&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
                  alt=""
                />
                <span>香菇</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=3333406990,1761389913&fm=253&fmt=auto&app=120&f=JPEG?w=1050&h=800"
                  alt=""
                />
                <span>杏鲍菇</span>
              </div>
            </li>
     
          </ul>
        </div>
<!-- 调味品 -->
		     <div id="content11" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3733222451,57297660&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>大蒜</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=1185968814,3812321279&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>花椒</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3813133646,2451599614&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=266"
                  alt=""
                />
                <span>香料</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2018629465,2731808199&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>姜</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2674944341,691726979&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>醋</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=303416802,1349357641&fm=253&fmt=auto&app=138&f=JPEG?w=641&h=428"
                  alt=""
                />
                <span>胡椒</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2766764751,3419404746&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>盐</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3047479542,3144754774&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>橄榄油</span>
              </div>
            </li>
  
          </ul>
        </div>
		<!-- 主食 -->
		     <div id="content12" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3347137150,3844446198&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400"
                  alt=""
                />
                <span>快餐/汉堡</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=149069400,3025463623&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=750"
                  alt=""
                />
                <span>油条/油饼</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3554522100,3493442739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                  alt=""
                />
                <span>面包</span>
              </div>
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=4085463670,3530706408&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>粽子</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=2246371520,3460018369&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=466"
                  alt=""
                />
                <span>汤圆</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3534459367,1535340148&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  alt=""
                />
                <span>包子</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1940358103,261561222&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=488"
                  alt=""
                />
                <span>花卷</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2599246491,3051552253&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480"
                  alt=""
                />
                <span>米糕</span>
              </div>
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=798174443,3112993698&fm=253&fmt=auto&app=138&f=JPEG?w=602&h=500"
                  alt=""
                />
                <span>米饭/白米饭</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3333476643,2549958441&fm=253&fmt=auto&app=138&f=JPEG?w=580&h=500"
                  alt=""
                />
                <span>馒头</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=1715937952,1456839940&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                  alt=""
                />
                <span>燕麦</span>
              </div>
            </li>
          </ul>
        </div>
<!-- 根茎类蔬菜 -->
		     <div id="content13" class="mui-control-content">
          <ul class="mui-table-view">
            <h4>禁吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=769229580,80032012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"
                  alt=""
                />
                <span>洋葱/大葱</span>
              </div>
			  <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1471171618,250480791&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
                  alt=""
                />
                <span>牛蒡</span>
              </div>
		
            </li>
            <h4>慎吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img0.baidu.com/it/u=3348229163,3754127126&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=427"
                  alt=""
                />
                <span>芋头</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=2173363863,3233718497&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
                  alt=""
                />
                <span>笋</span>
              </div>
            </li>
            <h4>可吃</h4>
            <li class="mui-table-view-cell">
              <div class="r-list">
                <img
                  src="https://img1.baidu.com/it/u=1331685898,1517321241&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=400"
                  alt=""
                />
                <span>土豆/马铃薯</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=421963765,2362625768&fm=253&fmt=auto&app=120&f=JPEG?w=1088&h=800"
                  alt=""
                />
                <span>白萝卜</span>
              </div>
              <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3600577801,4207172602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=381"
                  alt=""
                />
                <span>紫薯</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=2487292643,2232237713&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=5001"
                  alt=""
                />
                <span>红薯</span>
              </div>
			   <div class="r-list">
                <img
                  src="https://img2.baidu.com/it/u=3480462117,1838597541&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
                  alt=""
                />
                <span>藕</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    mui.init({
      swipeBack: true,
    });
    // 默认选中第一个
    var controls = document.getElementById("segmentedControls");
    var contents = document.getElementById("segmentedControlContents");
    controls.querySelector(".mui-control-item").classList.add("mui-active");
    contents.querySelector(".mui-control-content").classList.add("mui-active");
  },
};
</script>
<style lang="scss">
.banner {
  margin-top: 40px;
}
.mui-search input {
  padding-left: 30px;
  background-color: #fff;
  width: 96%;
  margin: 0 auto;
  margin-left: 2%;
  margin-top:10px ;
}
.r-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  padding: 10px 0;
  span {
    font-size: 14px;
    padding: 5px 0;
    color: gray;
  }
}
.mui-table-view-cell {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  img {
    width: 70px;
    height: 61px;
    border-radius: 10px;
  }
}
.mui-table-view {
  h4 {
    text-align: center;
    padding: 10px;
  }
}
.mui-fullscreen {

  margin-top: 95px;
    height: 600px;
}
.mui-row.mui-fullscreen > [class*="mui-col-"] {
  height: 100%;
}
.mui-col-xs-3,
.mui-control-content {
  overflow-y: auto;
  height: 100%;
}
.mui-segmented-control .mui-control-item {
  line-height: 50px;
  width: 100%;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  background-color: #fff;
}
</style>