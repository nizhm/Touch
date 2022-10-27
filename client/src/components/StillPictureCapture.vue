<template>
  <div class="still-picture-capture">
    <p class="logout">
      <button @click="$emit('logout')">Logout</button>
    </p>
    <p>Still Picture Capture</p>
  </div>
</template>

<script>
export default {
  name: 'StillPictureCapture',
  methods: {
  }
}
</script>

<style lang="css">
  .still-picture-capture .logout {
    width: 100px;
    text-align: right;
  }
</style>
