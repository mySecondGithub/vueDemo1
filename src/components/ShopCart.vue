<template>
	<div>
		<article class="middle">			 
			<div class="container">
				<p class="myCart">
					<span>我的购物车</span>
				</p>
				<div class="all">
					<span>全部商品(<b class='checkedNum'>0</b>)</span>
					<div class="select_wrap">
						<select>
							<option value="广州天河区">广州天河区</option>
							<option value="广州天河区">广州白云区</option>
							<option value="广州天河区">广州越秀区</option>
							<option value="广州天河区">深圳宝安区</option>
							<option value="广州天河区">深圳龙岗区</option>
						</select>
					</div>
					<span>配送至：</span>
				</div>
				<p class="count">
					<img src="../assets/images/checked.png" class="border"/>
					<input type="hidden" value="1"/>
					<span class="border">全选</span>
					<span>商品</span>
					<span>单价</span>
					<span>数量</span>
					<span>小计（元）</span>
					<span>操作</span>
				</p>
				<p class="select">
					<input type="button" value="满减"/>
					<span>活动商品已购买<b class='checkedNum'>2</b>件（已减<b> &yen; 66.8</b>）</span>
					<a href="#">&gt;去凑单&gt;</a>
					<span>&yen; 66800减  &nbsp;&yen;666.80</span>
				</p>
				<ul id="carTbody">
					
				</ul>
				<p class="pay">
					<span class="border">全选</span>
					<span onclick="del()">删除选中的商品</span>
					<span>移到我的关注</span>
					<span>清除下柜的商品</span>
					<span>已选择<b class='checkedNum'>2</b>件商品</span>
					<span>总价：</span>
					<span id="totalSum">￥2700.00</span>
					<!--<a href="comfirm_order.html">去结算</a>-->
					<router-link to="/comfrimOrder">
						去结算
					</router-link>
				</p>
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
	@import '../assets/css/shop_cart.css'
</style>