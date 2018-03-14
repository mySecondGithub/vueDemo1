<template>
	<div>
		<article class="middle">
			<div class="container">
				<p class="comfirm">确认订单页</p>
				<p class="write">
					<span>填写并核对订单信息</span>
					<span>配送至：</span>
				</p>
				<div class="message">
					<p>
						<span>收货人信息：</span>
						<!--<a href="address.html">新增收货地址</a>-->
						<router-link to="/address">
							立即购买
						</router-link>
					</p>
					<ul>
						<li>
							<a href="#">陆仁贾</a>
							<span>陆仁贾</span>
							<span>广东省广州市广州天河区体育西陆168号（时尚天河）</span>
							<span>188****2580</span>
							<a href="###">默认地址</a>
							<a href="###">编辑</a>
							<a href="###" class="del">删除</a>
						</li>
					</ul>
					<a href="###" class="more"><span>更多地址</span> &gt;&gt;</a>
				</div>
				<p class="check">填写并核对订单信息</p>
				<p class="reduce">
					<a href="#">满减</a>
					<span>活动商品已购买2件（已减<b>&yen;66.8</b>）</span>
					<a href="#">&gt; 去凑单 &gt;</a>
				</p>
				<ul class="product">
					<li class="on pro">
						<div>
							<img src="../assets/images/checked.png" class="border"/>
							<input type="hidden" value="1" class="checked"/>
						</div>
						<div>
							<!--<a href="pro_details.html"><img src="../assets/images/comfirm_order1.jpg"/></a>-->
							<router-link to="/prodetails"> 
							<a href="javascript:;"><img src="../assets/images/comfirm_order1.jpg"/></a>
							</router-link>
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
							<span class="price">&yen; 1350.00</span>
							<span>0.8kg</span>
						</div>
						<div>
							<span class="num">X1</span>
						</div>
						<div>
							<span>有货</span>
						</div>
					</li>
					<li class="on pro">
						<div>
							<img src="../assets/images/checked.png" class="border"/>
							<input type="hidden" value="1" class="checked"/>
						</div>
						<div>
							<!--<a href="pro_details.html"><img src="../assets/images/comfirm_order1.jpg"/></a>-->
							<router-link to="/prodetails"> 
							<a href="javascript:;"><img src="../assets/images/comfirm_order1.jpg"/></a>
							</router-link>
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
							<span class="price">&yen; 1350.00</span>
							<span>0.8kg</span>
						</div>
						<div>
							<span class="num">X1</span>
						</div>
						<div>
							<span>有货</span>
						</div>
					</li>
				</ul>
				<p class="count">
					<span>两件商品，总商品金额：</span>
					<span class="total">&yen;2700.00</span>
				</p>
				<p class="cashback">
					<span>返现</span>
					<span class="less">&yen;-66.8</span>
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
						<span>应付金额：总价：<b class="payable">&yen;2700.00</b></span>
						<span>收货人：陆仁贾 188****2580</span>
					</p>
				</div>
				<!--<a href="pay.html" class="sub">提交订单</a>-->
				<router-link to="/pay" class="sub">
					提交订单
				</router-link>
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
						<router-link to="/prodetails" tag="li"> 
							<a href="javascript:;"><img src="../assets/images/shou_list38.jpg"/></a>
						</router-link>
					</ul>
				</div>
			</div>	
		</article>
	</div>
</template>
<script>
	
</script>
<style scoped>
	@import '../assets/css/comfirm_order.css'
</style>