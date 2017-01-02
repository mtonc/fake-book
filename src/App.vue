<template>
  <div id="app">
    <newsfeed></newsfeed>
  </div>
</template>

<script>
import Newsfeed from './components/Newsfeed.vue'

export default {
  name: 'app',
  components: {
    Newsfeed
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
