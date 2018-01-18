<template>
  <div id="app">
  	<ma-container direction="column">
			<ma-header height="90px" v-if="!$route.meta.hideHeader"></ma-header>
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
</style>

