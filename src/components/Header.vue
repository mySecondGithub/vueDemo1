<template>
	<div>
		<header class="header">
			<div class="header_top">
				<div class="container">
					<div class="top_left">
						<span>您好&nbsp;欢迎来到世纪沉香在线商城</span>
						<ul class="nav nav-pills">
							<!--<li><a href="login.html">登陆</a></li>-->
							<router-link to="/login" tag="li">
								<a href="javascript:;">登陆</a>
							</router-link>
							<li>|</li>
							<!--<li><a href="register.html">注册</a></li>-->
							<router-link to="/reg" tag="li">
								<a href="javascript:;">注册</a>
							</router-link>
						</ul>
					</div>
					<div class="top_right">
						<nav class="nav navbar-default" role="navigation">
							<div class="collapse navbar-collapse" id="example-navbar-collapse">
								<ul class="nav nav-pills">
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
											我关注的商品
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							               <li><a href="#">沉香珠串</a></li>
							               <li><a href="#">沉香雕件</a></li>
							               <li><a href="#">沉香摆件</a></li>
							               <li class="divider"></li>
							               <li><a href="#">沉香熏香</a></li>
							            </ul>
									</li>
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											收藏夹<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							              <li><a href="#">沉香珠串</a></li>
							               <li><a href="#">沉香雕件</a></li>
							               <li><a href="#">沉香摆件</a></li>
							               <li class="divider"></li>
							               <li><a href="#">沉香熏香</a></li>
							            </ul>
									</li>
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											企业购<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							               <li><a href="#">沉香珠串</a></li>
							               <li><a href="#">沉香雕件</a></li>
							               <li><a href="#">沉香摆件</a></li>
							               <li class="divider"></li>
							               <li><a href="#">沉香熏香</a></li>
							            </ul>
									</li>
									<li>|</li>
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											我的订单<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							               <!--<li><a href="order.html">沉香珠串</a></li>
							               <li><a href="order.html">沉香雕件</a></li>
							               <li><a href="order.html">沉香摆件</a></li>-->
							               <router-link to="/order" tag="li">
							               		<a href="javascript:;">沉香珠串</a>
							               </router-link>
							               <router-link to="/order" tag="li">
							               		<a href="javascript:;">沉香雕件</a>
							               </router-link>
							               <router-link to="/order" tag="li">
							               		<a href="javascript:;">沉香摆件</a>
							               </router-link>
							               <li class="divider"></li>
							               <!--<li><a href="order.html">沉香熏香</a></li>-->
							               <router-link to="/order" tag="li">
							               		<a href="javascript:;">沉香熏香</a>
							               </router-link>
							            </ul>
									</li>
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											商家支持<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							               <li><a href="#">沉香珠串</a></li>
							               <li><a href="#">沉香雕件</a></li>
							               <li><a href="#">沉香摆件</a></li>
							               <li class="divider"></li>
							               <li><a href="#">沉香熏香</a></li>
							            </ul>
									</li>
									<li>
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">
											<span class="glyphicon glyphicon-th-list" aria-hidden="true" ></span>
											网站导航
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu">
							               <li><a href="#">沉香珠串</a></li>
							               <li><a href="#">沉香雕件</a></li>
							               <li><a href="#">沉香摆件</a></li>
							               <li class="divider"></li>
							               <li><a href="#">沉香熏香</a></li>
							            </ul>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<div class="header_middle">
				<div class="container">
					<div class="col-xs-4">
						<div class="logo">
							<!--<a href="index.html"><img src="../assets/images/logo.jpg"/></a>-->
							<router-link to="/home" tag="li">
								<img src="../assets/images/logo.jpg"/>
							</router-link>	
						</div>	
					</div>
					<div class="col-xs-5">
						<div class="search">
							<form>
								<div class="input-group">
									<input type="text" class="form-control" placeholder="搜索关键词"/>
									<span class="input-group-btn">
										<button type="submit" class="btn btn-default">
											<span>搜索商品</span>
										</button>
									</span>
								</div>
							</form>
						</div>
						<div class="hot">
							<span>热门搜索：</span>
							<ul class="nav nav-pills">
								<!--<li><a href="product.html">沉香珠串</a></li>
								<li><a href="product.html">沉香雕件</a></li>
								<li><a href="product.html">沉香摆件</a></li>
								<li><a href="product.html">沉香熏香</a></li>-->
								<router-link to="/product" tag="li">
									<a href="javascript:;">沉香珠串</a>
								</router-link>
								<router-link to="/product" tag="li">
									<a href="javascript:;">沉香雕件</a>
								</router-link>
								<router-link to="/product" tag="li">
									<a href="javascript:;">沉香摆件</a>
								</router-link>
								<router-link to="/product" tag="li">
									<a href="javascript:;">沉香熏香</a>
								</router-link>
							</ul>
						</div>
					</div>
					<div class="col-xs-3">
						<div class="car">
							<!--<a href="shop_cart.html">
								<img src="../assets/images/cart.png"/>
								<span>我的购物车</span>
								<span>(<b class='checkedNum'></b>)</span>
							</a>-->
							<router-link to="/shopCart">
								<img src="../assets/images/cart.png"/>
								<span>我的购物车</span>
								<span>(<b class='checkedNum'></b>)</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="header_bottom">
			<NavView></NavView>
			</div>
			<Navlist v-show="navlistShow"></Navlist>
		</header>
	</div>
</template>
<script>
	import NavView from './Nav.vue'
	import Navlist from './Navlist.vue'
	import {mapGetters,} from 'vuex'
	export default{
		computed:mapGetters([
			'navlistShow'
		]),
		mounted(){
			var path = this.$route.path.substring(1);
			this.navChange(path);
		},
		watch:{
			$route(to,from){
				var path = to.path.substring(1);
				this.navChange(path);
				/*if(to.path == '/prodetails'||to.path == '/product' || to.path == "/user" || to.path == "/address" || to.path == "/comfrimOrder" || to.path == "/pay"){
					this.$store.dispatch('hideNavlist');
				}else{
					this.$store.dispatch('showNavlist');
				}*/
			}
		},
		methods:{
			navChange(path){
				if(path == 'prodetails'||path == 'product' || path == "user" || path == "address" || path == "comfrimOrder" || path == "pay" || path.indexOf('article') != -1){
					this.$store.dispatch('hideNavlist');
				}else{
					this.$store.dispatch('showNavlist');
				}
			}
		},
		components:{
			NavView,
			Navlist
		}
	}
</script>
<style>

</style>