<template>
  <div :style="layoutCss" class="layout">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'layout',
    props: {
      direction: {
        direction: String, // 布局方向
        default () {
          return 'row'
        }
      },
      wrap: {
        type: String, // 是否换行
        default () {
          return 'nowrap'
        }
      },
      justify: {
        type: String, // 对齐
        default () {
          return 'space-around'
        }
      },
      align: {
        type: String, // 对齐
        default () {
          return 'center'
        }
      },
      full: {
        type: Boolean,
        default () {
          return false
        }
      },
      over:{
      	type: Boolean,
        default () {
          return false
        }
      },
      padding:{
      	type: String,
        default () {
          return '0'
        }
      },
      margin:{
      	type: String,
        default () {
          return '0'
        }
      },
      border:{
      	type: String,
        default () {
          return 'none'
        }
      },
      radius:{
      	type: String,
        default () {
          return 'none'
        }
      },
      backgound:{
      	type: String,
        default () {
          return 'none'
        }
      },
    },
    data () {
      return {
        layout: null
      }
    },
    computed: {
      layoutCss () {
        return {
          'flex-wrap': this.wrap,
          'flex-direction': this.direction,
          'justify-content': this.justify,
          'align-items': this.align,
          'display': 'flex',
          'height': this.full ? '100%' : null,
          'width': this.over ? '100%' : null,
          'padding':this.padding,
          'margin':this.margin,
          'border':this.border,
          'border-radius':this.radius,
          'background':this.background
        }
      }
    }
  }
</script>

<style scoped>
</style>
