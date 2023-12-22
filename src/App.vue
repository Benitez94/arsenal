<template>
  <div id="app">
    <nav class="barra-nav">
      <router-link to="/">Arsenal</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Arsenal', sans-serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34495e;
  margin-top: 40px;
  background-color: #ffffff;
  padding: 10px;
}

.barra-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #e20038;
}

.barra-nav a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.barra-nav a:hover {
  color: rgb(0, 0, 0);
}

</style>
