<template>
  <div class="hello-word">
    <p>
      <label for="name">Name: </label>
      <input id="name" type="text" v-model="user.name">
    </p>
    <p>
      <label for="pwd">Password: </label>
      <input id="pwd" type="text" v-model="user.pwd">
    </p>
    <p>
      <button @click="submitLogin">Login</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
        alert('Name Required!')
        return
      }
      if (!pwd) {
        alert('Password Required!')
        return
      }

      this.$emit('login')
    }
  }
}
</script>

<style lang="css">
  .hello-word label {
    display: inline-block;
    width: 100px;
    padding-right: 10px;
    text-align: right;
  }

  .hello-word button {
    width: 100px;
    margin-left: 36px;
  }
</style>
