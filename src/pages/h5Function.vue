<template>
	<ma-container class="h5function">
		<ma-aside>
			<ma-box >组件</ma-box>
			<layout direction="column">
				<div class="components" v-for="(item,index) in components" :draggable="true" @dragstart="dragStart" :data-name="item.name">{{item.name}}</div>
			</layout>
			<ma-box border="1px solid #ccc" margin="1em 0 0 0">配置选项</ma-box>
			<layout justify="flex-start" padding="1em 0 0 1em">
				<ma-box :background="colors.hex" @tap="showPhotoshop" width="10px" height="10px"  class="color-pick">
					<div class="photoshop" @click="stopEvent">
						<Photoshop v-if="show_photoshop" v-model="colors" @ok="onOk"></photoshop>
					</div>
				</ma-box>
			</layout>
			<layout direction="column" align="flex-start" padding="1em">
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">字体颜色：</ma-box> <ma-input border="1px solid #000" :model="mcolor"></ma-input>
				</layout>
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">边框：</ma-box> <ma-input border="1px solid #000" :model="mborder"></ma-input>
				</layout>
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">字体大小：</ma-box> <ma-input border="1px solid #000" :model="mfontsize"></ma-input>
				</layout>
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">padding：</ma-box> <ma-input border="1px solid #000" :model="mpadding"></ma-input>
				</layout>
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">margin：</ma-box> <ma-input border="1px solid #000" :model="mmargin"></ma-input>
				</layout>
				<layout justify="space-between" :over="true" margin="0 0 .5em 0">
					<ma-box fontsize="10px">角度：</ma-box> <ma-input border="1px solid #000" :model="mradius"></ma-input>
				</layout>
			</layout>
		</ma-aside>
		<ma-main>
			<div class="phone-container">
					<div id="preview" @drop="drop" @dragover="dragOver"></div>
			</div>
			<div class="css-container">
				<div v-html="template"></div>
			</div>
		</ma-main>
	</ma-container>
</template>

<script>

import service from 'services/h5function'
import h5Function from 'utilities/biomp'
import phone from 'assets/h5function/iphone6_front_white.png'
import { Photoshop } from 'vue-color'
	export default {
		name:'h5function',
		data(){
			return {
				  colors:{
				  	  hex: '#194d33',
					  hsl: {
					    h: 150,
					    s: 0.5,
					    l: 0.2,
					    a: 1
					  },
					  hsv: {
					    h: 150,
					    s: 0.66,
					    v: 0.30,
					    a: 1
					  },
					  rgba: {
					    r: 25,
					    g: 77,
					    b: 51,
					    a: 1
					  },
					  a: 1
				  },
				  'mcolor':'',
				  'mborder':'',
				  'mpadding':'',
				  'mmargin':'',
				  'mfontsize':'',
				  'mradius':'',
				  show_photoshop:false,
				  components:[{
				  	name:'layout'
				  },{
				  	name:'flex'
				  },{
				  	name:'mabox'
				  },{
				  	name:'mainput'
				  },{
				  	name:'macontainer'
				  },{
				  	name:'maheader'
				  },{
				  	name:'mafooter'
				  },{
				  	name:'maaside'
				  }],
				  template:''
				}
		},
		watch:{
			colors(newV,oldV){
				return newV
			}
		},
		mounted(){
			let that = this
//			h5Function(document.getElementById('preview'));
			h5Function(document.getElementById('preview'), {
				    innerHTML: this.template,
				    view: 'front',
				    image: phone,
				    width:'320',
				    height:'480'
				});
			this.axios.get('/create_file')
			.then(res=>{
				console.log(res)
			})
		},
		methods:{
			stopEvent(){
				window.event.stopPropagation()
			},
			onOk(){
				window.event.stopPropagation()
				this.show_photoshop = false
			},
			showPhotoshop(){
				window.event.preventDefault()
				this.show_photoshop = !this.show_photoshop
			},
			dragStart(e){
				e.dataTransfer.setData("Text",e.target.id);
			},
			drop(e){
				e.preventDefault();
				this.template = `<ma-box>aaa</ma-box>`
			},
			dragOver(e){
				e.preventDefault();
			}
		},
		components:{
			Photoshop
		}
	}
</script>

<style scoped="scoped">
	.ma-aside {
		display:flex;
		flex-flow: column;
	}
	.h5function{
		height:100%;
	}
	.phone-container{
		height:100%;
		position:relative;
		display:flex;
		flex:1 1 0;
		border:1px solid #000;
	}
	.css-container{
		flex:1 1 0;
		border:1px solid #000;
	}
	.color-pick{
		position:relative;
	}
	.photoshop{
		position:absolute;
		top:0;
		left:2em;
		z-index:1000;
	}
	.components{
		width:100%;
		height:50px;
		border:1px solid #000;
		cursor: pointer;
	}
	.ma-main{
		display:flex;
	}
</style>