<template>
	<div class="ma-aside" :style="{width:width,height:height,padding:padding}">
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
			},
			padding: {
				type: String,
				required: false,
				default(){
					return '1em'
				}
			},
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