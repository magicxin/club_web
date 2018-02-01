<template>
  <div :style="layoutCss" :id="id" class="ma-box" @click="handleAccept">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'ma-box',
    props: {
    	id:{
    		type: String
    	},
    	display:{
    		type: String, // 布局方向
        default () {
          return 'flex'
        }
    	},
    	justify:{
    		type: String, // 布局方向
        default () {
          return 'center'
        }
    	},
    	align:{
    		type: String, // 布局方向
        default () {
          return 'center'
        }
    	},
      color: {
        type: String, // 布局方向
        default () {
          return '#333'
        }
      },
      padding:{
      	type: String, // 布局方向
      	required:false
      },
      margin:{
      	type: String, // 布局方向
        default () {
          return '0'
        }
      },
      border:{
      	type: String, // 布局方向
        default () {
          return 'none'
        }
      },
      borderradius:{
      	type: String, // 布局方向
        default () {
          return 'none'
        }
      },
      background:{
      	type: String, // 布局方向
        default () {
          return 'none'
        }
      },
      fontsize:{
      	type: String, // 布局方向
        default () {
          return '14px'
        }
      },
      width:{
      	type: String, // 布局方向
        default () {
          return '100%'
        }
      },
      height:{
      	type: String, // 布局方向
        default () {
          return ''
        }
      },
      wrap:{
      	default () {
          return 'nowrap'
        }
      },
      lineheight:{
      	default () {
          return false
        }
      }
    },
    data () {
      return {
        layout: null
      }
    },
    computed: {
      layoutCss () {
        return {
          'color':this.color,
          'padding':this.padding,
          'margin':this.margin,
          'border':this.border,
          'border-radius':this.borderradius,
          'background':this.background,
          'font-size':this.fontsize,
          'height':this.height?this.height:null,
          'width':this.width?this.width:null,
          'justify-content':this.justify?this.justify:null,
          'align-items':this.align?this.align:null,
          'display':this.display?this.display:null,
          'flex-wrap':this.wrap,
          'line-height':this.lineheight?this.lineheight:null
        }
      }
    },
    methods:{
    	handleAccept(){
    		this.$emit('tap')
    	}
    }
  }
</script>

<style scoped>
	.ma-box{
		word-wrap: break-word; 
		word-break: normal; 
	}
</style>
