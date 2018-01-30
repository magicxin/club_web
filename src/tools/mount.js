import Vue from 'vue'
 
var mount = function(el, _component) {
	console.log(_component.attributes)
            let data={}
            if (_component.attributes) {
                Object.keys(_component.attributes).forEach(key => {
                    data[key] = _component.attributes[key].value
                })
            }
            let vm = new Vue({
                name: el.id.toString(),
                data() {
                    return data
                },
                template: _component.template,
                el: el,
                mounted() {
                    this.$el.id = el.id
//                  if (component) {
//                      component.uid = this._uid
//                  }
//
//                  //添加选中效果
//                  let info = _Vue.$store.state.currentComponent.info
//                  if (!info)
//                      this.$el.click()

                }
            })
}

export default mount
