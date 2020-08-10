import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router';
import store from '@/vuex/vuex';
import Paginate from 'vuejs-paginate';

Vue.component('Paginate', Paginate);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')