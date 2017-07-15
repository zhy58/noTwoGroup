<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/xx">xx</router-link>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script type="es6">
import foot from './components/Hello'
export default {
  name: 'app',
  components:{
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
