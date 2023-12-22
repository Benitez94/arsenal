<template>
  <div id="app">
    <header class="encabezado">
      <div class="centrado">
        <img src="./assets/logo.png" alt="Arsenal" width="200" height="220" />
        <nav class="barra-nav">
        </nav>
      </div>
    </header>
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

.encabezado {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #c90000;
  flex-wrap: nowrap;
}

.encabezado img {
  max-height: 180px;
  object-fit: contain;
}

</style>
