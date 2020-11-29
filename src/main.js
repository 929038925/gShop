/*
  入口JS
*/
import Vue from 'vue'
import App from './App'
import router from './router'

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

console.log(vm)
