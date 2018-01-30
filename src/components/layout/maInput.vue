<template>
  <div :style="layoutCss" class="ma-input">
    <input type="text" :value="currentValue" @input="handleAccept" @change="changeAccept"/>
  </div>
</template>
<script>
  export default{
    name: 'ma-input',
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
      currentValue:{
        default () {
          return ''
        }
      },
    },
    data () {
      return {
        layout: null,
//      value:''
      }
    },
    watch:{
//  	value(newV,oldV){
//  		console.log(newV)
//  		this.setCurrentValue(newV);
//  	}
	value(newV,oldV){
    		return newV
    	}
    },
    methods:{
//  	setCurrentValue(value) {
//      if (value === this.currentValue) return;
//      this.currentValue = value;
//    },
      handleAccept(e){
    		this.$emit('input',e)
    	},
    	changeAccept(e){
    		this.$emit('change',e)
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
          'font-size':this.fontsize
        }
      }
    }
  }
</script>

<style scoped>
	.ma-input{
		width:100px;
		height:14px;
		display:flex;
		justify-content: center;
		align-items: center;
	}
	input {
		width:90%;
		border:none;
		outline:none;
	}
</style>
