import Vue from 'vue';
import App from './App';
import store from './store'
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 


new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {
        App
    }
})
