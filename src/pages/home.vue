<template>
	<div class="home">
		
	</div>
</template>

<script>
	
import logo from 'assets/logo.png'
	export default {
		data(){
			return {
				logo,
				red:'red'
			}
		},
		created(){
			console.log(this.options)
		},
		components:{
			
		}
	}
</script>

<style>
	.home{
		height:50%;
	}
</style>