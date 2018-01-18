import axios from 'axios'
import init from 'tools/init.js'
import app from 'tools/app.js'
import Vue from 'vue'
import App from './app'
import router from './router'
import './css/iconfont.css'
import './css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import layout from 'tools/layout'
Vue.config.productionTip = false
Vue.use(app)
Vue.use(ElementUI)
Vue.use(layout)
 /* main.js是vue程序的入口。
 * 引入了一个全局组件，公共数据存储以及方法的获取
 * 
 * 判断登录状态
 * 
 * 导航守卫
 * 
 * 
 * */

initProject()
//初始化
function initProject(){
	init()
	.then(res=>{
			Vue.directive('layout', function (el, binding) {
				console.log(binding.value)
			  el.style.backgroundColor = binding.value
			})
			console.log(res)
			Vue.prototype.options = res
			//导航守卫
			router.beforeEach((to, from, next) => {
			    next()
			})
			
		/* eslint-disable no-new */
		new Vue({
		  el: '#app',
		  router,
		  template: '<App/>',
		  components: { App }
		})
	})
}


