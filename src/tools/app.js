import axios from 'axios'
import Vue from 'vue'
import router from '../router'

//SyntaxError ReferenceError RangeError TypeError URLError EvalError
export default {
	install(Vue, options) {
  Vue.mixin({
      methods: {
        query(variable){
     var query = window.location.search;
     query = query.slice(1);
     console.log("格式化url结果----" + query)
     var vars = query.split("&");
     for (var i = 0; i < vars.length; i++) {
         var pair = vars[i].split("=");
         if (pair[0] == variable) {
             return pair[1];
         }
     }
     return false;
 }
      }
   })
    Vue.prototype.axios = axios 
 	Vue.prototype.setAttr = function(name,obj){
 		this[name] = obj
    						if(!name || !obj){
    							throw new TypeError('@function setAttr must contain (name,value)')
    						}
 	}
 	
 	Vue.prototype.getAttr = function(name,obj){
 		return this[name]
 	}
 	Vue.prototype.toast = createToast
 }
}

//toast
let show = false
function createToast(msg) {
  if (show == true) {
    return
  }
  show == true
  var el = document.createElement('div')
  var toast = document.body.appendChild(el)
  toast.innerHTML = msg
  toast.style.position = "absolute"
  toast.style.color = "#fff"
  toast.style.lineHeight = "1em"
  toast.style.display = "flex"
  toast.style.top = "50%"
  toast.style.left = "50%"
  toast.style.transform = "translate(-50% , -50%)"
  toast.style['background-color'] = "rgba(0, 0, 0, 0.4)"
  toast.style['border-radius'] = "4px"
  toast.style.padding = "1em"
  toast.style.zIndex = '30000000'
  setTimeout(function () {
    toast.style.display = "none"
    show = false
    document.body.removeChild(toast)
  }, 2000)
}