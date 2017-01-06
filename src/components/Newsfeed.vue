<template>
  <div id="newsfeed" class="ui centered grid">
    <h3>Newsfeed</h3>
    <ul id="posts">
      <li v-for="post in posts" class="ui fluid card">
        <div class="content">
          <div class="left aligned header">
            {{ post.title}}
          </div>
          <div class="left aligned meta">
            <a href="/user/:post.userId">{{userNameFromId(post.userId)}}</a>
          </div>
        </div>
        <div class="content">
          <div class="left aligned descritption">
            {{post.body}}
          </div>
        </div>
        <div class="extra content">
          <div class="">
            <h3 class="left aligned header">
              Comments
            </h3>
            <div class="content">
              <div class="ui comments">
                <div v-for="comment in loadComments(post.id)" class="comment">
                  <div class="content">
                    <div class="left aligned author">
                      {{comment.name}}
                    </div>
                    <div class="left aligned text">
                      {{comment.body}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
        posts: [],
        users: [],
        comments: []
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
      userNameFromId: function(userId) {
        var ret = -1
        this.users.forEach(function(user) {
          if ( user.id == userId ) {
            ret = user.name
          }
        })
        return ret
      },
      loadComments: function(passedId) {
        var ret = []
        this.comments.forEach(function(comment) {
          if ( comment.postId == passedId ) {
            ret.push(comment)
          }
        })
        return ret
      },
    },
  mounted: function() {
    this.getParam("posts")
    this.getParam("users")
    this.getParam("comments")
  }
}
</script>
<style>
  #newsfeed .card {
    background-color: lightgray
  }
</style>
