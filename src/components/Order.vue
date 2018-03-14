<template>
	<div>
		<article class="middle">
			<div class="container">
				<div class="top">
					<p>用户登录</p>
				</div>
				<div class="bottom">
					<div class="bottom_left">
						<ul>
							<li><h4>订单中心</h4></li>
							<!--<li class="on"><a href="order.html">我的订单</a></li>-->
							<router-link to="/order" tag="li" active-class="on">
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
							<li><a href="address.html">收货地址</a></li>-->
							<router-link to="/user" tag="li">
								<a href="javascript:;">个人资料</a>
							</router-link>
							<router-link to="/address" tag="li">
								<a href="javascript:;">收货地址</a>
							</router-link>
							<li><a href="###">修改密码</a></li>
						</ul>
					</div>
					<div class="bottom_right">
						<p class="type">
							<span class="on">我的订单</span>
							<span>待付款</span>
							<span>待收货</span>
							<span>待评价</span>
						</p>
						<div class="content">
							<div class="product">
								<ul>
									<li class="on">
										<div>
											<img src="../assets/images/checked.png" class="border"/>
											<input type="hidden" value="1" class="checked"/>
										</div>
										<div>
											<a href="pro_details.html"><img src="../assets/images/shop_cart1.jpg"/></a>
										</div>
										<div>
											<a href="pro_details.html">【世纪沉香坊】</a>
											<a href="pro_details.html">加里曼丹 10MM *19颗 8克</a>
										</div>
										<div>
											<span>颜色：棕色</span>
											<span>规格：10MM</span>
										</div>
										<div>
											<span>&yen; 1350.00</span>
											<span>0.8kg</span>
										</div>
										<div>
											<a href="###"  class="del">删除</a>
											<a href="###">移到我的关注</a>
										</div>
									</li>
									<li class="on">
										<div>
											<img src="../assets/images/checked.png" class="border"/>
											<input type="hidden" value="1" class="checked"/>
										</div>
										<div>
											<a href="pro_details.html"><img src="../assets/images/shop_cart1.jpg"/></a>
										</div>
										<div>
											<a href="pro_details.html">【世纪沉香坊】</a>
											<a href="pro_details.html">加里曼丹 10MM *19颗 8克</a>
										</div>
										<div>
											<span>颜色：棕色</span>
											<span>规格：10MM</span>
										</div>
										<div>
											<span>&yen; 1350.00</span>
											<span>0.8kg</span>
										</div>
										<div>
											<a href="###" class="del">删除</a>
											<a href="###">移到我的关注</a>
										</div>
									</li>
								</ul>
							</div>
							<div class="button">
								<p>总计：2700.00元。</p>
								<a href="#">取消订单</a>
								<a href="#">找人代付</a>
								<!--<a href="pay.html">立即付款</a>-->
								<router-link to="/pay">
									立即付款
								</router-link>
							</div>
							<div class="received">
								<p>你的货已从广州发往清远，预计今天到达，请注意查收。</p>
							</div>
							<div class="evaluated">
								<p>亲，收到商品后要给我们好评哦。</p>
							</div>
						</div>
						<div class="like">
							<span>猜你喜欢</span>
							<ul>
								<!--<li><a href="pro_details.html"><img src="../assets/images/shou_list33.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list34.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list35.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list36.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list37.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list38.jpg"/></a></li>-->
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list33.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list34.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list35.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list36.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list37.jpg"/></a>
								</router-link>
								<a href="javascript:;"><img src="../assets/images/shou_list38.jpg"/></a>
								</router-link>
							</ul>
						</div>
						<div class="again">
							<span>看了又看</span>
							<ul>
								<!--<li><a href="pro_details.html"><img src="../assets/images/shou_list33.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list34.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list35.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list36.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list37.jpg"/></a></li>
								<li><a href="pro_details.html"><img src="../assets/images/shou_list38.jpg"/></a></li>-->
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list33.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list34.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list35.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list36.jpg"/></a>
								</router-link>
								<router-link to="/prodetails" tag="li">
								<a href="javascript:;"><img src="../assets/images/shou_list37.jpg"/></a>
								</router-link>
								<a href="javascript:;"><img src="../assets/images/shou_list38.jpg"/></a>
								</router-link>
							</ul>
						</div>
					</div>
				</div>
			</div>	
		</article>
	</div>
</template>
<script>
	
</script>
<style>
	@import '../assets/css/order.css'
</style>