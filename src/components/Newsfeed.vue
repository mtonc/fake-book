<template>
  <div id="newsfeed" class="ui centered grid">
    <h3 class="ui center aligned header">Newsfeed</h3>
    <ul id="posts">
      <li v-for="post in posts" class="ui fluid card">
        <div class="content">
          <div class="left aligned header">
            {{ post.title}}
          </div>
          <div class="left aligned meta">
            <router-link :to="{ name: 'user', params: {id: post.userId}}">{{userNameFromId(post.userId)}}</router-link>
          </div>
        </div>
        <div class="content">
          <div class="left aligned descritption">
            {{post.body}}
          </div>
        </div>
        <div class="extra content">
          <a @click="loadComments(post)">
            <h3 class="left aligned title">
              Comments
            </h3>
          </a>
          <transition>
          <div class="content">
            <div class="ui comments">
              <div v-for="comment in post.comments" class="comment">
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
        </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  var baseURL = 'https://jsonplaceholder.typicode.com'
  export default {
    name: 'newsfeed',
    data: function() {
      return {
        posts: [],
        users: [],
        comments: []
      }
    },
    computed: {},
    methods: {
      getParam: function(param) {
        this.$http.get(baseURL + "/" + param).then(function(response) {
          this[param] = response.body.map(function(i) {
            i.comments = []
            return i
          })
        }, function(response) {
          //this[param] = this.posts.map(function() {
          return 0
            //  })
        })
      },
      userLink: function(userId) {
        return '/user/' + userId
      },
      userNameFromId: function(userId) {
        var ret = -1
        this.users.forEach(function(user) {
          if (user.id == userId) {
            ret = user.name
          }
        })
        return ret
      },
      loadComments: function(post) {
        // var ret = []
        // this.comments.forEach(function(comment) {
        //   if ( comment.postId == passedId ) {
        //     ret.push(comment)
        //   }
        // })
        // return ret
        var vm = this
        this.$http.get(baseURL + '/comments?postId=' + post.id).then(function(response) {
          var index = vm.posts.findIndex(function(element){
            return element.id == post.id
          })
          post.comments = response.body
        }, function(response) {
          console.log(response)
          return 0
        })

      },
    },
    mounted: function() {
      this.getParam("posts")
      this.getParam("users")
        //this.getParam("comments")
    }
  }
</script>
<style>
  #newsfeed .card {
    background-color: lightgray
  }
</style>
