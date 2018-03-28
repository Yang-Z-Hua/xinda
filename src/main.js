import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.ajax = axios;
Vue.prototype.qs = Qs;
// Vue.prototype.inpu = function (e, function1) {
//   //debounce机制
//   var this1 = this;
//   this.time[this.rq] = new Date().getTime();
//   (function (a) {
//     this1.rq++;
//     this1.timeId = setTimeout(function () {
//       if (this1.time[a + 1] && this1.time[a + 1] - this1.time[a] < 500) {
//         return;
//       } else {
//         function1();
//       }
//     }, 500);
//   })(this.rq);
// };


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
