<template>
  <div id="app">
    <nav>
<!--      <router-link to="/" @click="submitLogout">Logout</router-link>-->
      <template v-if="hasLogin">
        <span> | </span>
        <router-link to="/home">Devices</router-link>
        <span> | </span>
        <router-link to="/video-call">VideoCall</router-link>
        <span> | </span>
        <router-link to="/video">Video</router-link>
        <span> | </span>
        <router-link to="/audio">Audio</router-link>
        <span> | </span>
        <router-link to="/screen">Screen</router-link>
      </template>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hasLogin: false
    }
  },
  methods: {
    submitLogout() {
      window.sessionStorage.removeItem('token')
      window.location.reload()
    }
  },
  created() {
    this.hasLogin = true
    // const token = window.sessionStorage.getItem('token')
    // if (!token) {
    //   this.hasLogin = false
    //   this.$router.push({ name: 'login' })
    // } else {
    //   this.hasLogin = true
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
