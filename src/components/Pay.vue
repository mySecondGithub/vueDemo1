<template>
	<div>
		<article class="middle">
			<div class="container">
				<div class="top">
					<p>收银台</p>
					<p>
						<span>订单提交成功，请您尽快付款！订单号21154878166</span>
						<span>应付金额<b>2700.00</b>元</span>
					</p>
					<p>
						<span>请您 在24小时内完成支付，否则订单会被自动取消（库存紧俏商品支付时限以下订单详情页为准）。</span>
						<!--<a href="order_details.html">订单详情&or;</a>-->
						<router-link to="/orderDetails">
							订单详情&or;
						</router-link>
					</p>
				</div>
				<div class="bottom">
					<p>以下支付由###提供</p>
					<p>白条额度未激活，<a href="#">立即激活</a>即可消费</p>
					<form class="bank">
						<p>
							<span class="input">
							<img src="../assets/images/pay_icon.png" alt="pay_icon" class="border" />
							<input type="hidden" checked="checked"/>
							</span>
							<span class="check">银行卡</span>
							<span>支付<b>2700.00</b>元</span>
						</p>
						<label class="comfirm">
							<input type="text"  placeholder="请输入银行卡时行识别"/>
							<input type="submit" value="确定"/>
						</label>
						<div class="payType">
							<a href="###"><img src="../assets/images/pay.png" alt="pay" /><span>快捷支付</span></a>
							<a href="###" class="on">网银支付</a>
						</div>
						<div class="way">
							<div class="shortcut">
								<a href="###" class="on">微信支付</a>
								<a href="###">支付宝支付</a>
								<a href="###">QQ支付</a>
							</div>
							<div class="img">
								<ul> 
									<li class="on">
										<a href="###"><img src="../assets/images/pay_bank1.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank2.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank3.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank4.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank5.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank6.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank7.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank8.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank9.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank10.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank11.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank6.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank7.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank8.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank9.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank10.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank11.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank10.jpg"/></a>
									</li>
									<li>
										<a href="###"><img src="../assets/images/pay_bank11.jpg"/></a>
									</li>
									<li>
										<a href="###" id="more">更多银行</a>
									</li>
								</ul>
							</div>
						</div>
						<label class="pay">
							<input type="password" placeholder="请输入密码"/>
							<input type="submit" value="立即支付" class="sub"/>
						</label>
					</form>
				</div>
			</div>	
		</article>
	</div>
</template>
<script>
	
</script>
<style>
	@import '../assets/css/pay.css'
</style>