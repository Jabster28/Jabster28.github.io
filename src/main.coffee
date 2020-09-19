import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Snippet from './components/Snippet.vue'
new Vue({
  vuetify,
  Snippet,
  render: (h) ->
    h App
}).$mount("#app")
