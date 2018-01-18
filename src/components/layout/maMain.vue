<template>
	<div class="ma-main"  :style="{height:height}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'ma-main',
		props:{
			height: {
				type: String,
				required: false,
				default(){
					return '100%'
				}
			}
		}
	}
</script>

<style>
.ma-main{
	width:100%;
	box-sizing: border-box;
	border:1px solid #000;
}
</style>