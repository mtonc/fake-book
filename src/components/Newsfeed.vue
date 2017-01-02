<template>
  <div id="newsfeed" class="ui centered grid">
    <h3>Newsfeed</h3>
    <ul id="posts" class="ui centered cards">
      <li v-for="post in posts" class="card">
        <div class="content">
          <div class="header">
            {{ post.title}}
          </div>
          <div class="descritption">
            {{post.body}}
          </div>
        </div>
        <div class="extra content">
          {{userIdName(post.userID)}}
        </div>
      </li>
    </ul>

    <div class="test">
      {{ test }}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'

  Vue.use(VueResource)

  var baseURL = 'https://jsonplaceholder.typicode.com'
  export default {
    name: 'newsfeed',
    data() {
      return {
        test: "This is a test",
        posts: [],
        users: []
      }
    },
    methods: {
      getParam: function(param) {
        this.$http.get(baseURL + "/" + param).then(function(response) {
          this[param] = response.body.map(function(i) {
            return i
          })
        }, function(response) {
          this[param] = this.posts.map(function() {
            return 0
          })
        })
      },
      userIdName: function(id){
        return this.users[id].name
      }
    },
    mounted: function() {
      this.getParam("posts")
      this.getParam("users")
    }
  }
</script>
<style>
  #newsfeed .card {
    background-color: lightgray
  }
</style>
