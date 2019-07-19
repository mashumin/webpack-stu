<template>
<div>
  <!-- 顶部header -->
	<div class="header">
<mt-header fixed title="布偶猫的那些事"></mt-header>
	</div>
  
  <!-- 中间的路由 -->
  <router-view></router-view>
  <!-- 底部tab区域 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/message">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/outher">
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart-filled"></span>
				<span class="mui-tab-label">其他</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
</div>
</template>

<script>

</script>
<style>
  .header{
		margin-bottom: 40px;
	}
</style>