import LoginPopup from './index.vue'

const component = {}

component.install = (Vue, data) => {
  const LoginPopupClass = Vue.extend(LoginPopup)
  const instance = new LoginPopupClass({ data }).$mount()

  console.log('instance', instance)

  document.body.appendChild(instance.$el)

  Vue.prototype.$loginPopup = {
    show () {
      console.log('instance2', instance)
      instance.show = true
    }
  }
}

export default component
