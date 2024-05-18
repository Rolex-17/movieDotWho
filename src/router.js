import { createRouter, createWebHistory } from "vue-router";
import AllMoviesPage from './Pages/AllMoviesPage.vue';
import HomePage from './Pages/HomePage.vue';
import ResultPage from './Pages/ResultPage.vue';

const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:HomePage},
        {path:'/home',component:HomePage},
        {path:'/allMovies',component:AllMoviesPage},
        {path:'/result/:id',component:ResultPage}
        ]
});

export default router;