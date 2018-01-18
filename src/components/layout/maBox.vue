<template>
  <div :style="layoutCss" class="ma-box" @click="handleAccept">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'ma-box',
    props: {
      color: {
        type: String, // 布局方向
        default () {
          return '#333'
        }
      },
      padding:{
      	type: String, // 布局方向
        default () {
          return '4px'
        }
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
      radius:{
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
      center:{
      	default () {
          return false
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
          'border-radius':this.radius,
          'background':this.background,
          'font-size':this.fontsize,
          'height':this.height?this.height:null,
          'width':this.width?this.width:null,
          'justify-content':this.center?'center':null,
          'align-items':this.center?'center':null,
          'display':this.center?'flex':'block',
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
