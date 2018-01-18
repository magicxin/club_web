<template>
	<div class="ma-aside"  :style="{width:width,height:height}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'ma-aside',
		props:{
			width: {
				type: String,
				required: false,
				default(){
					return '300px'
				}
			},
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
.ma-aside{
	display:flex;
	flex-flow:column;
	box-sizing: border-box;
}
</style>