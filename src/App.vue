<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="home" >Home</router-link>
    <router-link to="upload" >Upload</router-link>
    <router-link to="users" >Usuarios</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
