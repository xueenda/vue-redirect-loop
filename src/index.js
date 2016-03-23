import Vue from 'vue';
import fastclick from 'fastclick';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './routes'

Vue.config.debug = true;

Vue.use(VueRouter)

export var router = new VueRouter()

configRouter(router)

const App = Vue.extend(require('./views/App.vue'))

router.start(App, '#app')

fastclick.attach(document.body);
