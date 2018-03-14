<template>
	<div>
		<article class="middle">
			<div class="container">
				<div class="top">
					<p>用户中心</p>
				</div>
				<div class="bottom">
					<div class="bottom_left">
						<ul>
							<li><h4>订单中心</h4></li>
							<!--<li><a href="order.html">我的订单</a></li>-->
							<router-link to="/order" tag="li">
								<a href="javascript:;">我的订单</a>
							</router-link>
							<li><a href="###">团购订单</a></li>
							<li><a href="###">本地生活订单</a></li>
							<li><a href="###">取消订单记录</a></li>
							<li><h4>关注中心</h4></li>
							<li><a href="###">关注的商品</a></li>
							<li><a href="###">关注的店铺</a></li>
							<li><a href="###">关注的品牌</a></li>
							<li><a href="###">关注的活动</a></li>
							<li><h4>客服服务</h4></li>
							<li><a href="###">退换货服务</a></li>
							<li><a href="###">价格保护</a></li>
							<li><a href="###">意见建议</a></li>
							<li><a href="###">购买咨询</a></li>
							<li><a href="###">售后服务</a></li>
							<li><h4>个人设置</h4></li>
							<!--<li><a href="user.html">个人资料</a></li>
							<li class="on"><a href="address.html">收货地址</a></li>-->
							<router-link to="/user" tag="li">
								<a href="javascript:;">个人资料</a>
							</router-link>
							<router-link to="/address" tag="li" active-class="on">
								<a href="javascript:;">收货地址</a>
							</router-link>
							<li><a href="###">修改密码</a></li>
						</ul>
					</div>
					<div class="bottom_right">
						<div class="address">
							<p>收货地址列表页s</p>
							<p>
								<a href="###"><img src="../assets/images/add.png"/></a>
								<span>您已经创建了<b>2</b>个收货地址，最多可以 创建<b>20</b>个</span>
							</p>
							<ul>
								<li class="info">
									<p>陆仁贾天河区</p>
									<p>
										<span>*</span>
										<span>收货人：</span>
										<span>陆仁贾</span>
									</p>
									<p>
										<span>*</span>
										<span>所在地区：</span>
										<span>广东广州天河区</span>
									</p>
									<p>
										<span>*</span>
										<span>地址：</span>
										<span>体育西路168号</span>
									</p>
									<p>
										<span>*</span>
										<span>手机号码：</span>
										<span>188****2580</span>
									</p>
									<p>
										<span>*</span>
										<span>固定电话：</span>
										<span>020-860080666</span>
									</p>
									<p>
										<span>*</span>
										<span>电子邮箱：</span>
										<span>868986@****COM</span>
									</p>
									<p>
										<a href="###">设为默认</a>
										<a href="###">使用轻松购</a>
										<a href="###">编辑</a>
									</p>
								</li>
								<li class="info">
									<p>陆仁贾天河区</p>
									<p>
										<span>*</span>
										<span>收货人：</span>
										<span>陆仁贾</span>
									</p>
									<p>
										<span>*</span>
										<span>所在地区：</span>
										<span>广东广州天河区</span>
									</p>
									<p>
										<span>*</span>
										<span>地址：</span>
										<span>体育西路168号</span>
									</p>
									<p>
										<span>*</span>
										<span>手机号码：</span>
										<span>188****2580</span>
									</p>
									<p>
										<span>*</span>
										<span>固定电话：</span>
										<span>020-860080666</span>
									</p>
									<p>
										<span>*</span>
										<span>电子邮箱：</span>
										<span>868986@****COM</span>
									</p>
									<p>
										<a href="###">设为默认</a>
										<a href="###">使用轻松购</a>
										<a href="###">编辑</a>
									</p>
								</li>
							</ul>
						</div>
						<div class="page">
							<ul>
								<li><a href="###">上一页</a></li>
								<li class="on"><a href="#">1</a></li>
								<li><a href="###">2</a></li>
								<li><a href="###">3</a></li>
								<li><a href="###">4</a></li>
								<li><a href="###">5</a></li>
								<li><a href="###">6</a></li>
								<li><a href="###">...</a></li>
								<li><a href="###">下一页</a></li>
							</ul>
						</div>
					</div>	
				</div>
			</div>	
		</article>
	</div>
</template>
<style scoped>
	@import '../assets/css/address.css'
</style>