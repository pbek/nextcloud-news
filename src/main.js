import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { Store } from 'vuex'
import axios from '@nextcloud/axios'

import App from './App.vue'
import router from './routes'
import mainStore, { MUTATIONS } from './store'

import { Tooltip } from '@nextcloud/vue'

Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC
Vue.prototype.OCA = OCA

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.directive('tooltip', Tooltip)

const store = new Store(mainStore)

/**
 * Handles errors returned during application runtime
 *
 * @param {Error} error Error thrown
 * @return Promise<Error>
 */
const handleErrors = function(error) {
	store.commit(MUTATIONS.SET_ERROR, error)
	return Promise.reject(error)
}

axios.interceptors.response.use(undefined /* onSuccessCallback is intentionally undefined (triggers on 2xx responses) */,
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	handleErrors,
)

Vue.config.errorHandler = handleErrors
export default new Vue({
	router,
	store,
	el: '#q-app',
	render: (h) => h(App),
})

/**
 * Closes warning messages generated by PHP code
 */
function closeCronWarning() {
	document.getElementById('cron-warning').style.display = 'none'
}
document.getElementById('close-cron-warning').onclick = closeCronWarning
