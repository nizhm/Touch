<template>
  <div id="app">
    <HelloWorld
      v-if="unLogin"
      @login="login"
    />
    <StillPictureCapture
      v-else
      @logout="logout"
    />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import StillPictureCapture from '@/components/StillPictureCapture'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StillPictureCapture
  },
  data() {
    return {
      unLogin: true,
      storageKey: 'unLogin'
    }
  },
  methods: {
    login() {
      this.unLogin = false
      window.sessionStorage.setItem(this.storageKey, 'false')
    },
    logout() {
      this.unLogin = true
      window.sessionStorage.setItem(this.storageKey, 'true')
    }
  },
  created() {
    this.unLogin = window.sessionStorage.getItem(this.storageKey) !== 'false'
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
  margin-top: 60px;
}
</style>
