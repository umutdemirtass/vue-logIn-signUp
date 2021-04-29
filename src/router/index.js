import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import SignUp from '../components/SignUp'


Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes:[
    { path: '/', component : Login},
    {path: '/signup', component : SignUp},
    {path:'/forgot-password', component : ForgotPassword}
    ]
})
export default router;