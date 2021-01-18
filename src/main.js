import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import tooltipDirictive from '@/directives/tooltip.directive'
import currencyFilter from '@/filters/currency.filter'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirictive)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp ({
		apiKey: "AIzaSyBEywu7xB2Zt0A5YFKZTGQx2IaCJSJ2oXE",
		authDomain: "vuecli-project-53810.firebaseapp.com",
		databaseURL: "https://vuecli-project-53810.firebaseio.com",
		projectId: "vuecli-project-53810",
		storageBucket: "vuecli-project-53810.appspot.com",
		messagingSenderId: "463859636526",
		appId: "1:463859636526:web:b17507d5e155b64571c2bf",
		measurementId: "G-GL8GK84W9N"
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app')
	}
})
