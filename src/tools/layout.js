import maContainer from 'components/layout/maContainer'
import maHeader from 'components/layout/maHeader'
import maAside from 'components/layout/maAside'
import maMain from 'components/layout/maMain'
import layout from 'components/layout/layout'
import flex from 'components/layout/flex'
import maBox from 'components/layout/maBox'
import maInput from 'components/layout/maInput'
const components = {
  install: function(Vue) {
    Vue.component(maContainer.name, maContainer)
    Vue.component(maHeader.name, maHeader)
    Vue.component(maAside.name, maAside)
    Vue.component(maMain.name, maMain)
    Vue.component(layout.name, layout)
    Vue.component(flex.name, flex)
    Vue.component(maBox.name, maBox)
    Vue.component(maInput.name, maInput)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(components) 
}
export default components