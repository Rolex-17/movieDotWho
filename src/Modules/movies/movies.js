import axios from "axios";

export default{
    namespaced:true,
    state(){
        return{
            allMovies:
        }
    },
    mutations:{
        setAllMovies(state,payload){
            state.allMovies.push(payload);
        }
    },
    actions:{
        async loadAllMovies(context){
            try {
                const response =await axios.get("http://localhost:8081/api/movies");

                if(!response.ok){
                }

                context.commit('setAllMovies',response);


            } catch (error) {
                
            }
        }
    },
    getters:{
       gotAllMovies(state){
        return state.allMovies;
       } 
    }
}