import Vue from 'vue'
import Router from 'vue-router'

//vistas
import Home from '@/components/Home'
import NewUser from '@/components/NewUser'
import Login from '@/components/Login'
import Users from '@/components/Users'
import Upload from '@/components/Upload'
import firebase from 'firebase'

Vue.use(Router);

let router = new Router({
  mode:"history",
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/nuevo-usuario',
      name: 'Nuevo-usuario',
      component: NewUser
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users,
      meta:{
        requiresAuth: true
      },
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload,
      meta:{
        requiresAuth: true
      },
    }
  ]
});

router.beforeEach((to, from, next)=>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
  
  if(requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('home')
  else next()
})
 
export default router