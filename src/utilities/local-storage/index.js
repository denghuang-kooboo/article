import ls from './local-storage'

let VuesessionStorage = {
  /**
   * Install plugin
   *
   * @param {Object} Vue
   * @param {Object} options
   * @returns {Storage}
   */
  install (Vue, options) {
    ls.options = Object.assign(ls.options, {
      namespace: ''
    }, options || {})

    Vue.ls = ls
    Object.defineProperty(Vue.prototype, '$ls', {
      /**
       * Define $ls property
       *
       * @return {Storage}
       */
      get () {
        return ls
      }
    })
  }
}

if (typeof window !== 'undefined') {
  window.VuesessionStorage = VuesessionStorage
}

export default VuesessionStorage
