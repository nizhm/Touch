<template>
  <div class="login">
    <p class="user-item">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="user.name">
    </p>
    <p class="user-item">
      <label for="pwd">Password:</label>
      <input type="text" id="pwd" v-model="user.pwd">
    </p>
    <p class="user-item">
      <button @click="submitLogin">Login</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    submitLogin() {
      const { name, pwd } = this.user
      if (!name) {
        alert('Name required!')
        return
      }
      if (!pwd) {
        alert('Password required!')
        return
      }
      window.sessionStorage.setItem('token', `${name} ${pwd}`)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
.login .user-item label {
  display: inline-block;
  width: 100px;
  padding-right: 10px;
  text-align: right;
}
</style>
