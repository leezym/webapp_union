import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login/login'
import Registro from '../components/registro/register'
import Perfil from '../components/perfil/perfil'
import CrearProyecto from '../components/crearproyecto/crearproyecto'

Vue.use(Router)

export default new Router({
	routes: [
		{ 
			path: '/',
			name: 'login',
			component: Login
			/*beforeEnter: (to, from, next) => { 
	            delete localStorage.token;
	            next();
	        }*/
		},
		{
			path: '/home/registro',
			name: 'registro',
			component: Registro
		},
		{
			path: '/menu/perfil',
			name: 'perfil',
			component: Perfil
		},
		{
			path: '/menu/crear_proyecto',
			name: 'crearProyecto',
			component: CrearProyecto
		}
	]
})