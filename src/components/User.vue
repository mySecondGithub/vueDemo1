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
							<li><a href="#">修改密码</a></li>
						</ul>
					</div>
					<div class="bottom_right">
						<div class="right_top">
							<p><img src="../assets/images/head.jpg"/><a href="###">编辑头像</a></p>
							<p><a href="###"><img src="../assets/images/user.png"/></a><span>新人会员</span></p>
							<p><a href="###"><img src="../assets/images/date.png"/></a><span>购物天数：6天</span></p>
						</div>
						<div class="right_middle">
							<form name="reg_testdate">
								<label class="call">
									<span><b>*</b>昵称：</span>
									<input type="text"  class="username"/>
								</label>
								<label class="sex" for="sex">
									<span><b>*</b>性别：</span>
									<input type="radio" name="sex"/> 
									<span>男</span>
									<input type="radio" name="sex"/> 
									<span>女</span>
								</label>
								<label class="birthday">
									<span><b>*</b>生日：</span>
									<select name="YYYY" onchange="YYYYDD(this.value)" id="year">
										<option value="请选择">请选择</option>
									</select>
									<span>年</span>
									<select name="MM" onchange="MMDD(this.value)">
										<option value="请选择">请选择</option>
									</select>
									<span>月</span>
									<select name="DD">
										<option value="请选择">请选择</option>
									</select>
									<span>日</span>
									<a href="###">填写生日有惊喜的哦</a>
								</label>
								<label class="hobby">
									<span><b>*</b>兴趣：&nbsp;选择您 感兴趣的分类，给您最新个推荐</span>
									<br />
									<br />
									<a href="###" class="on">沉香手串</a>
									<a href="###">沉香手串</a>
									<a href="###">沉香手串</a>
								</label>
								<label class="email">
									<span><b>*</b>邮箱：</span>
									<a href="###">立马验证</a>
								</label>
								<label class="name">
									<span><b>*</b>姓名：</span>
									<input type="text" />
								</label>
								<label class="address">
									<span><b>*</b>住址：</span>
									<select class="province">
										<option value="广州">广州</option>
									</select>
									<select class="city">
										<option value="天河区">天河区</option>
									</select>
									<select class="county">
										<option value="体育西">体育西</option>
									</select>
								</label>
								<label class="sub">
									<input type="submit" value="提交"/>
								</label>
							</form>
						</div>
						<div class="right_bottom">
							<p>安全小提示：</p>
							<p>1.如果您的账号登录密码忘记，可以通过验证安保问题和答案，重新设置密码。</p>
							<p>2.由于安保问题是由您 选定的3个问题和答案，为了防止遗忘，建议您 一周验证记忆一次。</p>
							<p>3.安保问题不要设置过于简单， 容易被人猜到。</p>
						</div>
					</div>
				</div>
			</div>	
		</article>
	</div>
</template>
<script>
	import '../assets/js/city.js'
	export default{
		mounted(){
			this.cityShow();
		},
		methods:{
			cityShow(){
				//城市级联的实现
				$(function(){
					$.getScript("http://localhost:8080/src/assets/js/city.js",function(data){
						var result=JSON.parse(data);
						var cityArr = [];
						var countyArr = [];
						for(var i=0;i<result.length;i++){
							if(result[i].ProSort){
								$(".province").append("<option value='"+result[i].ProID+"'>"+result[i].name+"</option>")//把数据拼接到.province下的option里
							}else if(result[i].CitySort){
								cityArr.push(result[i]);//把符合的数据放入cityArr里
							}else if(result[i].DisSort == null){
								countyArr.push(result[i]);//把符合的数据放入countyArr里
							}
						}	
						$(".province").change(function(){
							var value = $(this).val();
							$(".city option").remove();
							$(".province option").eq(0).remove();
							for(var i=0;i<cityArr.length;i++){
								if(cityArr[i].ProID == value){
				                    $(".city").append("<option value='"+cityArr[i].CityID+"'>"+cityArr[i].name+"</option>"); //把数据拼接到.city下的option里
								}
							}
							
							var value2=$(".city option").val();
							
							$(".county option").remove();
							for(var i=0;i<countyArr.length;i++){
								if(countyArr[i].CityID == value2)
								$(".county").append("<option>"+countyArr[i].DisName+"</option>")
							}
						})	
						$(".city").change(function(){
							var value = $(this).val();
							$(".county option").remove();
							for(var i=0;i<countyArr.length;i++){
								if(countyArr[i].CityID == value)
								$(".county").append("<option>"+countyArr[i].DisName+"</option>")//把数据拼接到.county下的option里
							}
						
						})
					})
				})
				//$(function(){
				//
				//	$(".province").click(function(){
				//	$(".province").css("background","none")
				//	})
				//	$(".city").click(function(){
				//	$(".city").css("background","none")
				//	})
				//	$(".county").click(function(){
				//	$(".county").css("background","none")
				//})
				//})


				//实现月份级联
				function YYYYMMDDstart(){   
					MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
					
					//先给年下拉框赋内容   
					var y  = new Date().getFullYear();  
					for (var i = (y-50); i < (y+50); i++) //以今年为准，前50年，后50年   
						   // document.reg_testdate.YYYY.options.add(new Option(" "+ i, i));   
					
					//赋月份的下拉框   
					for (var i = 1; i < 13; i++)   
						   // document.reg_testdate.MM.options.add(new Option(" " + i, i));   
					
				//	document.reg_testdate.YYYY.value = y;   
				//	document.reg_testdate.MM.value = new Date().getMonth() + 1;   
					var n = MonHead[new Date().getMonth()];   
					if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
						writeDay(n); //赋日期下拉框Author:meizz   
				//	document.reg_testdate.DD.value = new Date().getDate();   
				}   
				if(document.attachEvent)   
					window.attachEvent("onload", YYYYMMDDstart);   
				else   
				window.addEventListener('load', YYYYMMDDstart, false);   
				function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
				{   
					var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
					if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
					var n = MonHead[MMvalue - 1];   
					if (MMvalue ==2 && IsPinYear(str)) n++;   
					writeDay(n)   
				}   
				function MMDD(str)   //月发生变化时日期联动   
				{   
					var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
					if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
					var n = MonHead[str - 1];   
					if (str ==2 && IsPinYear(YYYYvalue)) n++;   
					writeDay(n)   
				}   
				function writeDay(n)   //据条件写日期的下拉框   
				{   
					var e = document.reg_testdate.DD; optionsClear(e);   
					for (var i=1; i<(n+1); i++)   
					e.options.add(new Option("  "+ i, i));   
				}   
				function IsPinYear(year)//判断是否闰平年   
				{
					return(0 == year%4 && (year%100 !=0 || year%400 == 0));
				}   
				function optionsClear(e)   
				{   
					e.options.length = 1;   
				}   

				//实现点击文本可切换来获取当前状态
				$(function(){
					$(".hobby a").click(function(){
						index=$(this).index()-3;
						$(".hobby a").eq(index).addClass("on").siblings().removeClass("on");
					})
				})

			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/user.css'
</style>