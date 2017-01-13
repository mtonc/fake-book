<template>
  <div id="app" class="ui centered grid">
    <div class="ten wide column">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Newsfeed from './components/Newsfeed.vue'

export default {
  name: 'app',
  components: {
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
