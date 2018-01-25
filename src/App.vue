<template>
  <div id="app">
  	<ma-container direction="column">
			<ma-header height="90px" v-if="!$route.meta.hideHeader" :background="options.COLOR">
				<ma-box justify="flex-start" padding="0 20px" fontsize="30px" color="#fff">
					maLayout
				</ma-box>
				<ma-box justify="flex-end" padding="0 2em">
					<i class="iconfont icon-github"></i>
				</ma-box>
			</ma-header>
						<keep-alive>
				      <router-view v-if="$route&&$route.meta&&$route.meta.keepAlive"></router-view>
				    </keep-alive>
				    <router-view v-if="$route&&$route.meta&&!$route.meta.keepAlive"></router-view>
		</ma-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods:{
    	
    }
  }
</script>
<style>
 html,body{
		height:100%;
		padding:0;
		margin:0;
	}
#app {
  height:100%;
}
.ma-header{
	justify-content: space-between;
}
.icon-github{
	cursor: pointer;
}
</style>

