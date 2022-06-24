<template>
    		<div class="container">
				<header>
					<h3>爱宠之家</h3>
				</header>
				<main>
					<h4>账号登录</h4>
					<hr />
					<form action="">
						<div class="form-group">
							<label for="card"> 
                                 <a   id="icon-person" class="active">
                <span class="mui-icon mui-icon-person-filled"></span>
            </a></label>
						<input type="text" id="card" name="card" placeholder="请输入账号"/><br />
						</div>
						<div class="form-group">
							<label for="password">图片</label>
						<input type="text" id="password" name="password" placeholder="请输入密码"/><br />
						</div>
						<div class="form-check">
							<input type="checkbox" />
							<label for="password">记住账号</label><br />
							
						</div>
						<div class="form-submit">
                            <router-link to="/my">
                                 <input type="submit" value="登录"/>
                            </router-link>
                        
						 

						</div>			
					</form>
				</main>
		</div>
</template>
<script>
export default {
    
}
</script>
<style scoped >

*{
				margin:0px;
				padding:0px;
			}
			header{
				text-align: center;
				padding:100px 0px;
				
			}
			.container{
				width:412px;
				margin:auto;
				/*border:1px solid red;*/
				/* height:800px; */
				/* background: url(img/11.webp)  no-repeat; */
                /* background-color:bisque; */
				position:relative;
			}
			main{
				width:360px;
				position:absolute;
				left:30px;
				top:200px;
				/*border:1px solid red;*/
				padding:20px;
				background-color:snow;

			}
			main>h4{
				text-align: left;
			}
			main>hr{
				position: absolute;
				left:0px;
				width:100%;
			}
			.form-group{
				width:100%;
				margin:20px 0px;
			}
			.form-group label{	
				height:30px;
				width:20%;
				font-size:14px;
			}
			.form-group input{	
				height:30px;
				width:80%;
				font-size:14px;
				background: rgba(255,255,255,0.4);
				color:black;
				border:0px;
				outline:none;
			}
			.form-submit input{
				display: block;
				margin:20px 0px;
				width:100%;
				height:30px;
				border:0px;
				cursor: pointer;
			}


</style>