<template>
  <div id="user" class="ui grid">
    <div class="ui items">
      <div class="item">
        <div class="ui small bordered image">
          <img src="noImg.jpg">
        </div>
        <div class="content">
          <div class="header">
            {{user.name}}
          </div>
          <div class="meta">
            <span>Username: {{user.username}}</span>
          </div>
          <div class="description">
            <div class="phone">
              <i class="volume control phone icon"></i>: {{user.phone}}
            </div>
            <div class="email">
              <i class="mail icon"></i>: {{user.email}}
            </div>
            <div class="website">
              <i class="world icon"></i>: {{user.website}}
            </div>
            <div v-if="user.address" class="address">
              <div class="street">
                <i class="home icon">: </i>{{user.address.street}}, {{user.address.suite}}<br/>
                <i class="icon"></i>{{user.address.city}} {{user.address.zipcode}}
              </br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var baseURL = 'https://jsonplaceholder.typicode.com'
  export default {
    name: 'user',
    data: function() {
      return {
        user: {},
        albums: [],
      }
    },
    methods: {
      getUser: function() {
        this.$http.get(baseURL + "/users/" + this.$route.params.id).then(function(response) {
          this.user = response.body
        }, function(response) {
          conlsole.log(responese)
          return 0
        })
      },
      getAlbums: function() {
        this.$http.get(baseURL + "/albums?userId=" + this.$route.params.id).then(function(response) {
          this.albums = response.body.map(function(i) {
            i.photos = []
            return i
          })
          this.getPhotos(this)
        }, function(response) {
          console.log(response)
          return 0
        })
      },
      getPhotos: function(vm) {
        if (vm.albums.length > 0) {

          vm.albums.forEach(function(element, index, array) {

            vm.$http.get(baseURL + "/photos?albumId=" + element.id).then(function(response) {

              console.log(response)
              element.photos = response.body

            }, function(response) {
              console.log(response)
              return 0
            })
          })
        } else {
          console.log("Poop")
        }
      }
    },
    mounted: function() {
      this.getUser()
      this.getAlbums()
    }
  }
</script>

<style>

</style>
