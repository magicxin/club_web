<template>
	<div class="ma-container" :style="{height:height,'flex-flow':direction}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'ma-container',
		props:{
			height: {
				type: String,
				required: false,
				default(){
					return '100%'
				}
			},
			direction: {
				type: String,
				required: false,
				default(){
					return 'row'
				}
			}
		}
	}
</script>

<style>
.ma-container{
	display:flex;
	box-sizing: border-box;
	border:1px solid #000;
}
</style>