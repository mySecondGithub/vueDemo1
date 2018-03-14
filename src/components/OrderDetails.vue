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
							<!--<li class="on"><a href="user.html">个人资料</a></li>
							<li><a href="address.html">收货地址</a></li>-->
							<router-link to="/user" tag="li" active-class="on">
								<a href="javascript:;">个人资料</a>
							</router-link>
							<router-link to="/address" tag="li">
								<a href="javascript:;">收货地址</a>
							</router-link>
							<li><a href="###">修改密码</a></li>
						</ul>
					</div>
					<div class="bottom_right">
						<div class="myOrder">
							<p>我的订单</p>	
							<p>
								<a href="order.html">我的订单 &gt; </a>
								<router-link to="/order">
									我的订单 &gt; 
								</router-link>
								<span>订单详情</span>
							</p>
							<p>
								<span>订单编号：</span>
								<span>21154878166</span>
							</p>
							<p>
								<span>订单状态：</span>
								<span>等待付款</span>
							</p>
							<p>
								<span>收货人：</span>
								<span>陆仁贾</span>
							</p>
							<p>
								<span>地址：</span>
								<span>广州天河区体育西路168号</span>
							</p>
							<p>
								<span>手机号码：</span>
								<span>188****2580</span>
							</p>
							<p>
								<span>电话邮箱：</span>
								<span>868956@******COM</span>
							</p>
						</div>
						<div class="way">
							<p>支付及配送方式</p>
							<p>
								<span>支付方式：</span>
								<span>在线支付</span>
							</p>
							<p>
								<span>运费：</span>
								<span>00.00元</span>
							</p>
							<p>
								<span>送货日期：</span>
								<span>工作日。双休日与假日均送货</span>
							</p>
						</div>
						<div class="bill">
							<p>发票信息</p>
							<p>
								<span>发票类型：</span>
								<span>普通发票</span>
							</p>
							<p>
								<span>发票抬头：</span>
								<span>个人</span>
							</p>
							<p>
								<span>发票内容：</span>
								<span>明细</span>
							</p>
						</div>
						<div class="product">
							<p>
								<span>商品图片</span>
								<span>商品名称</span>
								<span>商品属性</span>
								<span>商品价格</span>
								<span>商品数量</span>
								<span>库存状态</span>
							</p>
							<ul>
								<li class="on">
									<ul>
										<li>
											<a href="pro_details.html"><img src="../assets/images/comfirm_order1.jpg"/></a>
										</li>
										<li>
											<a href="pro_details.html">【世纪沉香坊】</a>
											<a href="pro_details.html">加里曼丹 10MM *19颗 8克</a>
										</li>
										<li>
											<span>颜色：棕色</span>
											<span>规格：10MM</span>
										</li>
										<li>
											<span>&yen; 1350.00</span>
											<span>0.8kg</span>
										</li>
										<li>
											<span>X1</span>
										</li>
										<li>
											<span>有货</span>
										</li>
									</ul>
								</li>
								<li class="on">
									<ul>
										<li>
											<a href="pro_details.html"><img src="../assets/images/comfirm_order1.jpg"/></a>
										</li>
										<li>
											<a href="pro_details.html">【世纪沉香坊】</a>
											<a href="pro_details.html">加里曼丹 10MM *19颗 8克</a>
										</li>
										<li>
											<span>颜色：棕色</span>
											<span>规格：10MM</span>
										</li>
										<li>
											<span>&yen; 1350.00</span>
											<span>0.8kg</span>
										</li>
										<li>
											<span>X1</span>
										</li>
										<li>
											<span>有货</span>
										</li>
									</ul>
								</li>
							</ul>
							<div class="msg">
								<p class="count">
									<span>两件商品，总商品金额：</span>
									<span>&yen;2700.00</span>
								</p>
								<p class="cashback">
									<span>返现</span>
									<span>&yen;-66.8</span>
								</p>
								<p class="freight">
									<span>运费</span>
									<span>&yen;00.00</span>
								</p>
								<p class="service">
									<span>服务费</span>
									<span>&yen;00.00</span>
								</p>
								<p class="exchange">
									<span>退换无忧</span>
									<span>&yen;00.00</span>
								</p>
								<div class="info">
									<p>寄送至：广东省广州市广州天河区体育西路168号（时尚天河）</p>
									<p>
										<span>应付金额：总价：<b>&yen;2700.00</b></span>
										<span>收货人：陆仁贾 188****2580</span>
									</p>
								</div>
							</div>
							<a href="javascript:history.back();">返回</a>
						</div>
					</div>
				</div>
			</div>	
		</article>
	</div>
</template>
<style scoped>
	@import '../assets/css/order_details.css'
</style>