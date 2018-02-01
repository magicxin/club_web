import Vue from 'vue'
var mount = function(id, _component) {
	console.log(_component)
//  let components = _Vue.$store.state.components
//  let component = components.find(c => c.info.id === id)
    return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
        setTimeout(() => {
            let data={}
            if (_component.attributes) {
                Object.keys(_component.attributes).forEach(key => {
                    data[key] = _component.attributes[key].value
                })
            }
            let vm = new Vue({
                name: id.toString(),
                data() {
                    return data
                },
                template: _component.template,
                el: document.getElementById(id),
                mounted() {
                	console.log('mounted')
                    this.$el.id = id
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
            resolve(vm)

        }, 1000)
    })
}

export default mount
