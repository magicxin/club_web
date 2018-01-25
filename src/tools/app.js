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
 }
}
