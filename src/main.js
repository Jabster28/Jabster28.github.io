import Vue from 'vue';

import App from './App.vue';

import vuetify from './plugins/vuetify';

import Snippet from './components/Snippet.vue';

new Vue({
  vuetify,
  Snippet,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");


//# sourceMappingURL=main.js.map
//# sourceURL=coffeescript