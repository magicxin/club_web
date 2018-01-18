<template>
	<div class="ma-header"  :style="{height:height}">
		
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
	border:1px solid #000;
}
</style>