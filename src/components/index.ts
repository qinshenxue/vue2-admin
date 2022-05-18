import { PluginObject } from 'vue'
import { Vue } from 'vue-property-decorator'

import SvgIcon from './SvgIcon/index.vue'

export { SvgIcon }

const plugin: PluginObject<Vue> = {
  install: function (vue) {
    vue.component(SvgIcon.name, SvgIcon)
  }
}

export default plugin
