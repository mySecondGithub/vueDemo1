<template onload="proNum()">
	<div>
		<article class="middle">
			<div class="container">
				<div class="details_top">
					<div class="top_left">
						<div id="smll_box">
							<img src="../assets/images/pro_details1.jpg" alt="pro_details1" />
							<div id="box1"></div>
						</div>
						<div id="box"></div>
						<div class="lunbo">
							<a href="javascript:void(0)" class="prev"><img src="../assets/images/prev.png" alt="prev" /></a>
							<ul>
								<li class="on"><a href="###"><img src="../assets/images/pro_details1.jpg" alt="pro_details1" /></a></li>
								<li><a href="###"><img src="../assets/images/comments1.jpg" alt="comments1" /></a></li>
								<li><a href="###"><img src="../assets/images/comments2.jpg" alt="comments2" /></a></li>
								<li><a href="###"><img src="../assets/images/index_pro20.jpg" alt="index_pro20" /></a></li>
							</ul>
							<a href="javascript:void(0)" class="next"><img src="../assets/images/next.png" alt="next"/></a>
						</div>
					</div>
					<div class="top_right">
						<p>世纪沉香坊 加里曼丹 沉香佛珠 保真沉香手链 男女款 20g</p>
						<div class="prices">
							<span>价格 &yen; 13240.00</span>
							<span>浏览量 : 66</span>
							<span>累计评价 : 26</span>
						</div>	
						<p>配 送 至北京朝阳区三环以内 有货，仅剩1件店铺单笔订单不满300元，收运费20元 由世纪沉香坊官<br/>方旗舰店负责发送，并提供售后服务。</p>
						<div class="type">
							<span>选择款式</span>
							<a href="###" class="on">人气款8MM*108颗</a>
							<a href="###">花斑款8MM*108颗</a>
							<a href="###">人气款8MM*108颗</a>
						</div>
						<div class="staging">
							<span>白条分期</span>
							<span class="on">30天免息</span>
							<span>30天免息</span>
							<span>30天免息</span>
							<span>30天免息</span>
						</div>
						<div class="num">
							<input type="text" value="1" id="pro_num" onblur="changeValue()" maxlength="3"/>
							<a href="javascript:void(0)" id="pro_add" onclick="add()">+</a>
							<a href="javascript:void(0)" id="pro_reduce" onclick="reduce()">-</a>
						</div>
						<span>库存66件</span>
						<div class="button" >
							<!--<a href="comfirm_order.html">立即购买</a>-->
							<router-link to="/comfrimOrder">
								立即购买
							</router-link>
							<button type="button" onclick="setProduct()">
								<img src="../assets/images/nav_icon2.png"/>
								<span>加入购物车</span>
							</button>
						</div>
					</div>
				</div>
				<div class="details_middle">
					<div class="middle_left">
						<h4>产品分类</h4>
						<ul>
							<!--<li><a href="product.html">所有商品</a></li>
							<li><a href="product.html">最新上架</a></li>
							<li><a href="product.html">沉香串珠</a></li>
							<li><a href="product.html">16MM*14颗</a></li>
							<li><a href="product.html">6MM*108颗</a></li>
							<li><a href="product.html">8MM*108颗</a></li>
							<li><a href="product.html">其他规格</a></li>
							<li><a href="product.html">沉香雕件</a></li>
							<li><a href="product.html">精品雕件</a></li>
							<li><a href="product.html">珍品雕件</a></li>
							<li><a href="product.html">收藏典范</a></li>
							<li><a href="product.html">香道熏材</a></li>
							<li><a href="product.html">碎料香粉</a></li>
							<li><a href="product.html">烟片</a></li>
							<li><a href="product.html">香炉</a></li>
							<li><a href="product.html">线香盘香</a></li>
							<li><a href="product.html">套装礼盒</a></li>
							<li><a href="product.html">随形专区</a></li>
							<li><a href="product.html">随形 - 沉水浮</a></li>
							<li><a href="product.html">随形 - 沉水</a></li>
							<li><a href="product.html">奇楠专区</a></li>
							<li><a href="product.html">原材专区</a></li>
							<li><a href="product.html">摆件专区</a></li>
							<li><a href="product.html">一周新品</a></li>-->
							<router-link to="/product" tag="li">
								<a href="javascript:;">所有商品</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">最新上架</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">沉香串珠</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">16MM*14颗</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">6MM*108颗</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">其他规格</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">沉香雕件</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">精品雕件</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">珍品雕件</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">收藏典范</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">香道熏材</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">碎料香粉</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">烟片</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">香炉</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">线香盘香</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">套装礼盒</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">随形专区</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">随形 - 沉水浮</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">随形 - 沉水</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">奇楠专区</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">原材专区</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">摆件专区</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">一周新品</a>
							</router-link>
							<router-link to="/product" tag="li">
								<a href="javascript:;">所有商品</a>
							</router-link>
						</ul>
					</div>
					<div class="middle_right">
						<div class="pro_details">
							<div class="top">
								<a href="###" class="on">商品详情</a>
							    <a href="###">累计评价</a>
							</div>
							<div class="bottom">
								<div class="details">
									<p><span>品牌：寻香记&nbsp; 关注</span><img src="../assets/images/red_heart.png"/></p>
									<p>商品名称：世纪沉香坊 加里曼丹 沉香佛珠 保真沉香手链 男女款 20G</p>
									<p>商品编号：11441400719</p>
									<p>店铺：世纪沉香坊官方旗舰店</p>
									<p>商品毛重：100.00G&nbsp; 款式：手链</p>	
									<p>适用人群：情侣</p>
									<p>用途：馈赠，自戴，其它</p>
									<div class="pro_show">
										<div class="top">
											<h4>商品展示</h4>
										</div>
										<div class="bottom">
											<ul>
												<li>
													<img src="../assets/images/pro_details3.jpg" alt="pro_details3" />
												</li>
												<li>
													<img src="../assets/images/pro_details4.jpg" alt="pro_details4" />
												</li>
												<li>
													<img src="../assets/images/pro_details5.jpg" alt="pro_details5" />
												</li>
												<li>
													<img src="../assets/../assets/images/pro_details6.jpg" alt="pro_details6" />
												</li>
												<li>
													<img src="../assets/../assets/../assets/images/pro_details7.jpg" alt="pro_details7" />
												</li>
												<li>
													<img src="../assets/images/pro_details8.jpg" alt="pro_details8" />
												</li>
												<li>
													<img src="../assets/images/pro_details9.jpg" alt="pro_details9" />
												</li>
												<li>
													<img src="../assets/images/pro_details10.jpg" alt="pro_details10" />
												</li>
												<li>
													<img src="../assets/images/pro_details11.jpg" alt="pro_details11" />
												</li>
												<li>
													<img src="../assets/images/pro_details12.jpg" alt="pro_details12" />
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="evaluate">
									<p class="situation">
										<a href="###" class="on">全部</a>
										<a href="###">图片（68）</a>
										<a href="###">追评（68）</a>
									</p>
									<div class="content">
										<div class="all">
											<ul>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
												<li>
													<div class="name">
														<span>C******9(匿名):</span>
														<img src="../assets/images/comments_jewel.jpg" alt="comments_jewel" />
													</div>
													<div class="text">
														<p>2001 - 5000个V5 会员</p>
														<p>香韵醇厚，油脂纹理清晰，只是价格有些偏贵。老板非常好，帮我解答了不少问题。谢谢！全5支持！</p>
														<p>2017年04月01日 00:12</p>
													</div>
												</li>
											</ul>
										</div>
										<div class="images">
											<ul>
												<li><a href="###"><img src="../assets/images/comments2.jpg"/></a></li>
												<li><a href="###"><img src="../assets/images/comments2.jpg"/></a></li>
												<li><a href="###"><img src="../assets/images/comments2.jpg"/></a></li>
												<li><a href="###"><img src="../assets/images/comments2.jpg"/></a></li>
												<li><a href="###"><img src="../assets/images/comments2.jpg"/></a></li>
											</ul>
										</div>
										<div class="say_again">
											<ul>
												<li><span>用了几天之后感觉不错，追加好评。</span></li>
												<li><span>用了几天之后感觉不错，追加好评。</span></li>
												<li><span>用了几天之后感觉不错，追加好评。</span></li>
												<li><span>用了几天之后感觉不错，追加好评。</span></li>
												<li><span>用了几天之后感觉不错，追加好评。</span></li>
											</ul>
										</div>
									</div>
									<div class="page">
										<ul>
											<li><a href="#">上一页</a></li>
											<li class="on"><a href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#">6</a></li>
											<li><a href="#">...</a></li>
											<li><a href="#">下一页</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="details_bottom">
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
			</div>	
		</article>
	</div>
</template>
<script>
	import '../assets/js/pro_comments.js'
	export default{
		mounted(){
			this.boxShow();
		},
		methods:{
			boxShow(){
					    var smll_box = document.getElementById("smll_box");
						var box1 = document.getElementById("box1");
						var box = document.getElementById("box");
						var img = document.createElement("img");
						img.style.position="absolute";
						img.style.width="1600px";
						img.style.height="1600px";
						box.appendChild(img);
					
						smll_box.onmouseover = function(){
							box1.style.display = "block";
							box.style.display = "block";
							img.src = smll_box.getElementsByTagName("img")[0].src;
						}
						smll_box.onmouseout = function(){
							box1.style.display = "none";
							box.style.display = "none";
						}
						smll_box.onmousemove = function(e){
							var e = e || window.event;
							var imgX = e.pageX;
							var imgY = e.pageY;
							var box1Left = imgX - smll_box.offsetLeft - box1.offsetWidth/2;
							var box1Top = imgY - smll_box.offsetTop - box1.offsetHeight/2;
							if(box1Left < 0){
								box1Left = 0;
							}else if(box1Left > smll_box.offsetWidth - box1.offsetWidth){
								box1Left = smll_box.offsetWidth - box1.offsetWidth;
							}
							if(box1Top < 0){
								box1Top = 0;
							}else if(box1Top > smll_box.offsetHeight - box1.offsetHeight){
								box1Top = smll_box.offsetHeight - box1.offsetHeight;
							}
							box1.style.left = box1Left + "px";
							box1.style.top = box1Top + "px";
							var count = img.offsetWidth/smll_box.getElementsByTagName("img")[0].offsetWidth;
							img.style.left = -box1Left*count + "px";
							img.style.top = -box1Top*count + "px";

				}
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/pro_details.css'
</style>