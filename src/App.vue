<template>
    <the-header-vue></the-header-vue>
    <!-- <home-page-vue></home-page-vue> -->
    <!-- <result-page-vue></result-page-vue> these two component will dynamically change-->
    <router-view></router-view>
    <the-footer-vue></the-footer-vue>
   </template>
   
   <script>
import TheFooterVue from './components/Layout/TheFooter.vue'
import TheHeaderVue from './components/Layout/TheHeader.vue'
   
   // import HomePageVue from './components/AllPages/HomePage.vue';
   // import ResultPageVue from './components/AllPages/ResultPage.vue';
   
   export default{
     components:{
       TheHeaderVue,
       TheFooterVue,
       // HomePageVue,
       // ResultPageVue
     }
   }
   </script>
   
   <style scoped>
   @import './assets/style.css';
   </style>
   