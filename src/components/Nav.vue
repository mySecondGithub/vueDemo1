<template>
	<div>
		<div class="container">
			<div class="pro_sorting">
				<h4>全部产品分类<span>&gt;</span><span>&or;</span></h4>
				<ul>
					<!--<li><a href="product.html">奇楠专区</a></li>
					<li><a href="product.html">沉香串珠</a></li>
					<li><a href="product.html">随形专区</a></li>
					<li><a href="product.html">香道熏材</a></li>
					<li><a href="product.html">沉香雕件</a></li>
					<li><a href="product.html">沉香原材</a></li>
					<li><a href="product.html">沉香摆件</a></li>--> 
					<router-link to="/product" tag="li">
						<a href="javascript:;">奇楠专区</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">沉香串珠</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">随形专区</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">香道熏材</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">沉香雕件</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">沉香原材</a>
					</router-link>
					<router-link to="/product" tag="li">
						<a href="javascript:;">沉香摆件</a>
					</router-link>
				</ul>
			</div>
			<nav class="nav" id="nav">
				<ul>
					<!--<li class="on">
						<a href="index.html">首页</a>
					</li>
					<li>
						<a href="product.html">当日精品</a>
					</li>
					<li>
						<a href="product.html">设计精品</a>
					</li>
					<li>
						<a href="product.html">最新上市</a>
					</li>
					<li>
						<a href="product.html">人气商品</a>
					</li>-->
					<router-link to="/home" tag="li" active-class="on">
						<a href="javascript:;">首页</a>
					</router-link>
					<router-link to="/product" tag="li" active-class="on">
						<a href="javascript:;">当日精品</a>
					</router-link>
					<router-link to="/product" tag="li" active-class="on">
						<a href="javascript:;">设计精品</a>
					</router-link>
					<router-link to="/product" tag="li" active-class="on">
						<a href="javascript:;">最新上市</a>
					</router-link>
					<router-link to="/product" tag="li" active-class="on">
						<a href="javascript:;">人气商品</a>
					</router-link>
				</ul>
			</nav>
		</div>
	</div>
</template>