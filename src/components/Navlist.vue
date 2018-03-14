<template>
	<div>
		<div class="nav_left">
			<ul>
				<li><a href="#first">当日精选</a></li>
				<li><a href="#second">设计精选</a></li>
				<li><a href="#third">当日精选</a></li>
				<li><a href="#fourth">设计精选</a></li>
				<li><a href="#fifth">当日精选</a></li>
				<li><a href="#sixth">设计精选</a></li>
			</ul>
		</div>
		<div class="nav_right">
			<ul>
				<li><a href="###"><img src="../assets/images/nav_icon1.png" alt="nav_icon1"/></a></li>
				<!--<li><a href="shop_cart.html"><span>购<br />物<br />车</span><img src="../assets/images/nav_icon2.png" alt="nav_icon2"/></a></li>-->
				<router-link to="/shopCart" tag="li">
					<a href="javascript:;"><span>购<br />物<br />车</span><img src="../assets/images/nav_icon2.png" alt="nav_icon2"/></a>
				</router-link>
				<li><a href="###"><img src="../assets/images/nav_icon3.png" alt="nav_icon3"/></a></li>
				<li><a href="###"><img src="../assets/images/nav_icon4.png" alt="nav_icon4"/></a></li>
				<!--<li><a href="user.html"><img src="../assets/images/nav_icon5.png" alt="nav_icon5"/></a></li>-->
				<router-link to="/user" tag="li">
					<a href="javascript:;"><img src="../assets/images/nav_icon5.png" alt="nav_icon5"/></a>
				</router-link>
				<li><a href="###"><img src="../assets/images/nav_icon6.png" alt="nav_icon6"/></a></li>
				<!--<li><a href="order.html"><img src="../assets/images/nav_icon7.png" alt="nav_icon7"/></a></li>-->
				<router-link to="/order" tag="li">
					<a href="javascript:;"><img src="../assets/images/nav_icon7.png" alt="nav_icon7"/></a>
				</router-link>
				<li><a href="###"><img src="../assets/images/nav_icon8.png" alt="nav_icon8"/></a></li>
				<li><a href="###" id="top_btn"><img src="../assets/images/nav_icon9.png" alt="nav_icon9"/></a></li>
			</ul>
		</div>
	</div>
</template>