<template>
	<div class="ma-header" :style="{height:height,background:background}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'ma-header',
		props:{
			height: {
				type: String,
				required: false,
				default(){
					return '50px'
				}
			},
			background: {
				type: String,
				required: false
			}
		}
	}
</script>

<style>
.ma-header{
	width:100%;
	display:flex;
	flex-flow:row;
	box-sizing: border-box;
}
</style>