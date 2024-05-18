import { createStore } from "vuex";
import moviesModule from '../Modules/movies/movies.js';

const store = createStore({
    modules:{
        movies:moviesModule
    }
})

export default store;