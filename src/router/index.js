import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



// 其他
let otherRoutes = [{
	   path: '/home',
	   name: 'home', // 帖子
	  component:resolve => {require.ensure([], function(require){resolve(require('../pages/home'));}, 'home')},
	},{
	   path: '/h5function',
	   name: 'h5function', // 帖子
	  component:resolve => {require.ensure([], function(require){resolve(require('../pages/h5Function'));}, 'h5function')},
	},
	  {
		path: '*',
		redirect: '/home'
	}
]
let routes = [...otherRoutes]

export default new Router({
	routes
})