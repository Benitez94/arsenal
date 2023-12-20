<template>
  <div id="app">
     <nav>
       <router-link to="/">Arsenal</router-link>
     </nav>
     <router-view />
  </div>
 </template>
 
 <script>
 export default {
  name: 'App',
 };
 </script>

<style>

 #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #34495e; 
    margin-top: 40px; 
    background-color: #ecf0f1; 
    padding: 10px; 
  }
</style>
