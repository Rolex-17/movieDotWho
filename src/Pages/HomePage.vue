<template>
    <home-main-content></home-main-content>
    <home-slider-content></home-slider-content>
    <div v-for="movie in getAllMovies" :key="movie.id">
        {{ movie.name }}
        {{ movie.images }}
        {{ movie.year }}
        {{ movie.description }}
    </div>
</template>

<script>
import HomeMainContent from '@/components/MoviesComponent/HomeMainContent.vue';
import HomeSliderContent from '@/components/MoviesComponent/HomeSliderContent.vue';


export default{
    components:{
        HomeMainContent,
        HomeSliderContent
    },
    computed:{
        getAllMovies(){
            return this.$store.getters['movies/gotAllMovies'];
        }
    },
    created(){
        this.loadAllMovies();
    },
    methods:{
        loadAllMovies(){
            this.$store.dispatch['movies/loadAllMovies']
        }
    }
}
</script>