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
         

    },
}
</script>
<style lang="scss">
    .banner01{
        touch-action: none;
        margin-top: 45px;
    }
</style>