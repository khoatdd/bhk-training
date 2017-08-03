// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
var classie = require('./assets/js/loader/classie')
window.classie = classie
var Snap = require("imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js")
window.Snap = Snap
require('./assets/js/loader/svgLoader')

import {store} from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})