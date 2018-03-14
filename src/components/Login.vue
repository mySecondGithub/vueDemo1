<template onload="getCookie()">
	<div>
		<header class="header">
			<div class="container">
				<div class="logo">
					<a href="index.html"><img src="../assets/images/logo.png"/></a>
				</div>
			</div>
		</header>
		<article class="middle">
			<div class="container">
				<p>用户登录</p>
				<!--<a href="register.html">立即注册</a>-->
				<router-link to="/reg">
					立即注册
				</router-link>
				<h4>欢迎您登录</h4>
				<div class="form">
					<form action="User.vue" onsubmit="return submitInput()">
						<label>
							登录账号：&nbsp;&nbsp;<input type="text" name="username" id="email" onchange="testEmail(this.value)"/>
							<div class="user_prompt">
								你的账号不合法，请重新输入你的邮箱！
							</div>
						</label>
						<br />
						<label>
							密码：&nbsp;&nbsp;<input type="password" name="password" id="password" onchange="testPassword(this.value)"/>
							<div class="pass_prompt">
								你输入的密码与账号的密码不一致，请重新输入！
							</div>
						</label>
						<a href="###">忘记密码？</a>
						<br />
						<label>
							验证码：&nbsp;&nbsp;<input type="text" name="code" id="code" onchange="testCode(this.value)"/>
							<div class="code_prompt">
								验证码不能为空！
							</div>
						</label>
						<a href="###" class="code">
							<img src="../assets/images/code_1.jpg"/>
						</a>
						<a href="###">看不清</a>
						<br />
						<label>
							<img src="../assets/images/checked.png" class="border"/>
							<input type="hidden" name="checkbox" checked="checked" id="rememberMe"/>
							<span class="check">请保存我这次的登录信息</span>
						</label>
						<br />
						<label>
							<input type="submit" name="submit" id="submit" value="登录" />
						</label>
					</form>
				</div>
			</div>
		</article>
		<footer class="footer">
			<p>世纪沉香坊有限公司 WowSai.com Copyright&copy 2008-2013 [京ICP备10020900][京公网安备11010502026420][京IPC证090011号]</p>
		</footer>
	</div>
</template>
<style scoped>
	@import '../assets/css/login.css'
</style>