<template>
    <div class="banner01">
     <div class="mui-content">
			<div style="padding: 10px 10px;">
				<div id="segmentedControl" class="mui-segmented-control">
					<a class="mui-control-item " href="#item2">待办公文（8）</a>
					<a class="mui-control-item " href="#item2">已办公文</a>
					<a class="mui-control-item mui-active" href="#item3">全部公文</a>
				</div>
			</div>
			<div>
			
				<div id="item2" class="mui-control-content">
					<div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
				</div>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
				<div id="item1" class="mui-control-content mui-active">
				</div>
				<div id="item2" class="mui-control-content">
				</div>
				<div id="item3" class="mui-control-content">
				</div>
			</div>
		</div>
				</div>
				<div id="item3" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第三个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-3
						</li>
					</ul>
				</div>
			</div>
			
			
		
		
		</div>
       
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    mounted() {
        	(function($) {
				$('#scroll').scroll({
					indicators: true //是否显示滚动条
				});
				var segmentedControl = document.getElementById('segmentedControl');
				$('.mui-input-group').on('change', 'input', function() {
					if (this.checked) {
						var styleEl = document.querySelector('input[name="style"]:checked');
						var colorEl = document.querySelector('input[name="color"]:checked');
						if (styleEl && colorEl) {
							var style = styleEl.value;
							var color = colorEl.value;
							segmentedControl.className = 'mui-segmented-control' + (style ? (' mui-segmented-control-' + style) : '') + ' mui-segmented-control-' + color;
						}
					}
				});
			})(mui);
            			var controls = document.getElementById("segmentedControls");
			var contents = document.getElementById("segmentedControlContents");
			var html = [];
			var i = 1,
				j = 1,
				m = 16, //左侧选项卡数量+1
				n = 21; //每个选项卡列表数量+1
			for (; i < m; i++) {
				html.push('<a class="mui-control-item" href="#content' + i + '">选项' + i + '</a>');
			}
			controls.innerHTML = html.join('');
			html = [];
			for (i = 1; i < m; i++) {
				html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
				for (j = 1; j < n; j++) {
					html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
				}
				html.push('</ul></div>');
			}
			contents.innerHTML = html.join('');
			 //默认选中第一个
			controls.querySelector('.mui-control-item').classList.add('mui-active');
			contents.querySelector('.mui-control-content').classList.add('mui-active');

    },
}
</script>
<style lang="scss">
    .banner01{
        touch-action: none;
        margin-top: 45px;
    }
</style>