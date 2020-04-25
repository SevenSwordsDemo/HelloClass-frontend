import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Layout/Login.vue'
import HomePage from '../Layout/HomePage.vue'


Vue.use(Router)


export default new Router({
	routes: [
		{ path: '/' , redirect: '/login'},
		{ path: '/login' , component: Login },
		{ path: '/homepage' , component: HomePage, name: 'homepage' }
		]
})