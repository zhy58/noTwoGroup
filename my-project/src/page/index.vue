<template id="index">
	<div class="page_index">
		<!-- logo -->
		<div class="index_top container">
			<div class="logo1 left-float">
				<img src="../assets/images/index_02.png">
			</div>
			<div class="logo2 right-float text-center">
				<img src="../assets/images/index_05.png" class="pre">
			</div>
		</div>
		<!-- 大图 -->
		<div class="big_img">
			<img src="../assets/images/index_03.jpg" class="pre">		
		</div>
		<!-- 首页功能列表 -->
		<div class="page_list">
			<ul class="page_list_ul">
				<li>
					<router-link :to="{path:'/'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_10.png">
					</div>
					<h4>首页</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_12.png">
					</div>
					<h4>关于仕馨</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/news'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_14.png">
					</div>
					<h4>专业服务体系</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_16.png">
					</div>
					<h4>分店介绍</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_23.png">
					</div>
					<h4>套餐服务</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_25.png">
					</div>
					<h4>妈妈见证</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_26.png">
					</div>
					<h4>月子资讯</h4>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/about'}">
					<div class="page_list_img">
						<img class="pre" src="../assets/images/index_28.png">
					</div>
					<h4>预约参观</h4>
					</router-link>
				</li>
			</ul>
		</div>		
		<!-- 热点推荐&&视频专区 -->
		<div class="recommend">
			<div class="re text-center">
				<div class="recommend_list inline-block bg1">
					<h4>热点推荐</h4>
				</div>
				<div class="recommend_list inline-block bg2">
					<h4>视频专区</h4>
				</div>			
			</div>
			<div class="recommend_text container">
				<ul class="recommend_text_ul">
					<li>
						<span class="prink_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
					<li>
						<span class="bule_color">●</span>
						<span class="text_hide">美女辣妈 · 入住仕馨真的是一个明智......</span>
						<span class="right-float">─ 2017-05-19</span>
					</li>
				</ul>
			</div>		
		</div>
		<!-- 分店介绍 -->
		<div class="introduce  margin-top">
			<!-- title标题 -->
			<div class="title text-center">
		        <p>
				<span class="left"></span>
		        <span class="text">分店介绍</span>
		        <span class="right"></span>
		        </p>
		        <span>Branch</span>
		    </div>
			<!-- 分店介绍轮播 -->
		    <div class="store container">
		    	<mt-swipe :auto="4000">
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_43.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_45.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_43.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_45.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_43.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_45.jpg" class="pre">
				  </mt-swipe-item>
				  <mt-swipe-item class="store_ul">
				  	<img src="../assets/images/index_43.jpg" class="pre">
				  </mt-swipe-item>
				</mt-swipe>				
			</div>
		</div>		
		<!-- 点击查看全部 -->
		<div class="re text-center">
			<div class="see inline-block">
				<img src="../assets/images/index_50.png" class="pre">
			</div>
		</div>
		<!-- 专业月子服务 -->
		<div class="Hf_title text-center">
	        <p>
			<span class="span_border"></span>
	        <span class="text">专业月子服务</span>
	        <span class="span_border"></span>
	        </p>
	        <span>Branch</span>
	    </div>    
		<!-- 专业月子服务图片列表 -->
	    <div class="service_list">
			<!-- 半屏图 -->
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>

	    	<!-- 全屏图 -->
	    	<div class="service_img inline-block full">
	    		<img src="../assets/images/index_60.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    	<!-- 半屏图 -->
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    	<!-- 半屏图 -->
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    	<div class="service_img inline-block">
	    		<img src="../assets/images/index_54.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>

	    	<!-- 全屏图 -->
	    	<div class="service_img inline-block full">
	    		<img src="../assets/images/index_60.jpg" class="pre">
	    		<div class="pic_text">
	    			<span>Neonatal health care</span>
	    			<span>新生儿健康护理</span>    			
	    		</div>
	    		<p class="understand">点击了解</p>
	    	</div>
	    </div>
		<!-- 仕馨口碑 -->
	    <div class="index_comment">	    
			<div class="title text-center">
		        <p>
				<span class="left"></span>
		        <span class="text">仕馨口碑</span>
		        <span class="right"></span>
		        </p>
		        <span>public praise</span>
		    </div>
		    <div class="re text-center index_text">
				<div class="recommend_list inline-block bg1">
					<h4>大众点评</h4>
				</div>
				<div class="recommend_list inline-block bg2">
					<h4>微信朋友圈</h4>
				</div>
				<div class="recommend_list inline-block bg2">
					<h4>新浪微博</h4>
				</div>		
			</div>
			<div class="index_text container">
				<p class="text-center">自2009年始，仕馨月子会所始终立于月子服务前线，历经8年的砥砺前行和经验累积，以饱含赤诚真心的专业姿态，服务了10000多个妈妈科学坐月子，见证她们恢复孕前的健康美丽；凭借经验丰富的科学方式，给予了5000多名宝宝贴心满月呵护，见证他们聪明健康的启航。 这短暂一个月的相伴，带着爱意次第相传，我们听到万千个声音，甚觉欣喜与荣幸，她们说……</p>
			</div>
			<!-- 评论 -->
			<div class="container margin-top">
				<!-- 一个评论的大盒子 -->
				<div class="comment">
					<div class="head_portrait">
						<div class="inline-block">
							<img src="" alt="">
						</div>
					</div>
					<!-- 星星 -->
					<div class="stars">
						<ul class="stars_ul">
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
						</ul>					
					</div>
					<!-- 言论 -->
					<div class="comment_text">
						<p class="small_font">28天的时间一晃而过，在这里育婴室5楼的责任护士子晴、绍兴、冬梅对我们宝宝的贴心照顾，让我......</p>
					</div>				
				</div>

				<div class="comment">
					<div class="head_portrait">
						<div class="inline-block">
							<img src="" alt="">
						</div>
					</div>
					<div class="stars">
						<ul class="stars_ul">
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
							<li>
								<img src="../assets/images/index_04.png" class="pre">
							</li>
						</ul>					
					</div>
					<div class="comment_text">
						<p class="small_font">28天的时间一晃而过，在这里育婴室5楼的责任护士子晴、绍兴、冬梅对我们宝宝的贴心照顾，让我......</p>
					</div>				
				</div>			
			</div>
		</div>
		<!-- 点击查看全部 -->
		<div class="re text-center">
			<div class="see inline-block">
				<img src="../assets/images/index_50.png" class="pre">
			</div>
		</div>
		<!-- 品牌荣誉 -->
		<div class="title text-center" style="margin-top: 1rem;">
	        <p>
			<span class="left"></span>
	        <span class="text">品牌荣誉</span>
	        <span class="right"></span>
	        </p>
	        <span>Brand honor</span>
	    </div>
	    <!--品牌荣誉图片 -->
	    <div class="honor_list index_text">
	    	<div class="honor_list01 inline-block">
	    		<div class="honor_list_img">
	    			<img src="../assets/images/index_80.jpg" class="pre">
	    		</div>
	    		<div class="honor_list_img">
	    			<img src="../assets/images/index_80.jpg" class="pre">
	    		</div>
	    	</div>
	    	<div class="honor_list02 inline-block">
	    		<div class="honor_list_top">
	    			<img src="../assets/images/index_87.jpg" class="pre">
	    		</div>
	    		<div class="honor_list_bottom">
	    			<img src="../assets/images/index_96.jpg" class="pre">
	    		</div>
	    	</div>
	    	<div class="honor_list01 inline-block">
	    		<div class="honor_list_img">
	    			<img src="../assets/images/index_80.jpg" class="pre">
	    		</div>
	    		<div class="honor_list_img">
	    			<img src="../assets/images/index_80.jpg" class="pre">
	    		</div>
	    	</div>
	    	<div class="honor_list04 inline-block">
	    		<img src="../assets/images/index_84.jpg" class="pre">
	    	</div>
	    </div>		
		<!-- 微信二维码 -->
		<div class="footer index_text">
			<div class="footer_top">
				<div class="footer_top_center">
					<div class="box_img margin-right">
						<img src="../assets/images/index_102.jpg" class="pre">
						<span>关注官方微信</span>
					</div>
					<div class="box_img">
						<img src="../assets/images/index_104.jpg" class="pre">
						<span>关注官方微博</span>
					</div>
					<p class="text-center" style="margin-top: 0.5rem;">Copyright2011 仕馨月子会所 （粤ICP备17008523号-1）</p>
				</div>
			</div>
		</div>
		<!-- 底部导航 -->
		
	</div>
</template>

<style scoped>	
	.index_top{
		height: 3rem;
		background: white;
	}
	.logo2{
		height: 1.5rem;
		width: 1.5rem;
	}
	.logo1{
		height: 3rem;
	}
	.index_top img{
		height: 100%;
	}
	/*big_img*/
	.big_img{
		height: 10rem;
		background: #e5e5e5;
	}
	/**/
	.page_list{
		height: 12rem;
	}
	.page_list_ul li{
		float: left;
		width: 4.5rem;
		text-align: center;
		margin-top: 1.625rem;
		display: inline-block;
	}
	.page_list_img{
		width: 2rem;
		display: inline-block;	
	}
	.page_list_ul li h4{
		font-size: 0.65rem;
	}
	.recommend{
		margin-top: 2rem;
	}
	.recommend .re{
		height: 2.8rem;
	}
	.recommend_list{
		width: 4.125rem;
		height: 1.25rem;
		margin-right: 0.75rem;
	}
	.recommend_list h4{
		font-size: 0.65rem;
		text-align: center;
		line-height: 1.25rem;
		color: white;
	}
	.bg1,.bg2{
		border-bottom-left-radius: 0.7rem;
		border-top-right-radius: 0.7rem;
		text-align: center;
	}
	.bg1{
		background: #EE8FB3;
		border: 0.05rem solid #EE8FB3;
	}
	.bg2{
		background: #74C5BE;
		border: 0.05rem solid #74C5BE;
	}
	.recommend_text{
		height: 10.625rem;
	}
	.recommend_text_ul{
		border: 0.05rem solid #dcdcdc;
		padding:0 0.3rem;
	}
	.introduce{
		height: 14.5rem;
	}
	.introduce .store{
		height:11.375rem;
	}
	.introduce .store .store_ul{
		/*width: 15.5rem;*/
		height:11.375rem;
		/*float: left;*/
		/*margin-left: 1rem;*/
	}
	.introduce .store .store_ul img{
		height: 100%;
	}
	.recommend_text_ul li{
		height: 1.5rem;			
		line-height: 1.5rem;
		font-size: 0rem;
		position: relative;			
	}
	.recommend_text_ul li span{
		display: inline-block;
		font-size: 0.6rem;
	}
	.prink_color{
		color: #EE8FB3;
	}
	.recommend_text_ul li .prink_color,
	.recommend_text_ul li .bule_color{			
		width: 0.5rem;
		position: absolute;
		top: 0rem;
		left: 0rem;
	}
	.text_hide{
		width: 10.5rem;
		padding-left: 0.5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}		
	.margin-top{
		margin-top: 0.8rem;
	}
	.margin-right{
		margin-right:1.2rem;
	}
	.see{
		width: 5rem;
		height: 1.25rem;
	}
	.service_img{
		margin-top: 0.5rem;
		margin-left: 0.4rem;
		width: 8.25rem;
		height: 6.25rem;
		position: relative;
	}
	.full{
		width: 17.2rem;
	}
	.service_img .pre,
	.big_img .pre
	{
		margin:0;
	}
	.pic_text{
		position:absolute;
		top: 0.5rem;
		left: 0.5rem;
		font-size: 0.65rem;
		color: #fdfdfd;			
	}
	.pic_text span{
		display: inline-block;
		text-shadow: 0.05px 0.05rem 0.05rem #8f9091;
	}
	.understand{
		width: 3.2rem;
		height: 1.2rem;
		position: absolute;
		bottom: 0.5rem;
		left: 0.5rem;
		color: #fdfdfd;
		text-shadow: 0.05px 0.05rem 0.05rem #8f9091;
		border: 0.05rem solid #fff;
		border-bottom-left-radius: 0.7rem;
		border-top-right-radius: 0.7rem;
		text-align: center;
	}
	.index_text{
		margin-top: 1.5rem;
	}
	.index_comment .comment{
		height: 2.75rem;
		border: 0.05rem solid #dcdcdc;
		margin: 0.5rem 0;
	}
	.head_portrait{
		width: 2.75rem;
		height: 2.75rem;			
		text-align: center;
		display: inline-block;
		float: left;	
	}
	.index_comment .comment .inline-block{
		border-radius: 50%;
		background: #ccc;
		width: 2.25rem;
		height: 2.25rem;
		margin-top: 0.25rem;			
	}
	.comment .stars,.stars_ul{
		height: 1rem;
		line-height: 1rem;
		display: block;
	}
	.stars_ul li{
		width: 0.625rem;
		height: 0.625rem;
		display: inline-block;
	}
	.stars_ul li img{
		width: 100%;
		margin: 0;
	}
	.comment_text{
		height: 1.75rem;
		width: calc(100vw - 4.5rem);
		/*white-space: nowrap;*/
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.comment_text .small_font{
		font-size: 0.6rem;
		line-height: 0.7rem;			
	}
	.honor_list{
		height: 5.5rem;
		text-align: center;			
	}
	.honor_list01 .honor_list_img{
		width: 3.375rem;
		height: 2.45rem;
		margin-bottom: 0.5rem; 
	}
	.honor_list02 .honor_list_top{
		width: 2.375rem;
		height: 3.1rem;			
		margin-bottom: 0.5rem; 
	}
	.honor_list02 .honor_list_bottom{
		width: 2.375rem;
		height: 1.775rem;			
		margin-bottom: 0.5rem; 
	}
	.honor_list04{
		width: 7.5rem;
		margin-bottom: 0.5rem;
	}		
	.honor_list02{
		width: 2.375rem;
	}
	.honor_list .pre{
		margin:0;
	}
	.footer{
		height: 9rem;
	}
	.footer_top{
		height: 7rem;
		padding-top: 1.5rem;
	}
	.footer_top_center{
		width: 18rem;
		text-align: center;
	}
	.box_img{
		width: 4.5rem;
		height: 5.5rem;
		display: inline-block;
		position: relative;			
	}
	.box_img span{
		font-size: 0.7rem;
		display: inline-block;
		position:absolute;
		width: 4.5rem;
		height: 1rem;
		left: 0rem;
		bottom: -0.4rem;
	}
</style>

<script type="es6">
	require('mint-ui/lib/style.css');
	export default{
		name:'index',
		data(){
			return {

			}
		}
	}
</script>
