<template>
  <div class="screen-capture">
    <video
      ref="screen"
      class="screen"
    ></video>
    <p>
      <button @click="getScreen">Start</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ScreenCapture',
  methods: {
    async getScreen() {
      const constraints = {
        video: {
          cursor: 'always'
        },
        audio: true
      }
      let videoStream = null
      try {
        videoStream = await navigator.mediaDevices.getDisplayMedia(constraints)
      } catch (e) {
        console.error(e)
      }

      const video = this.$refs.screen
      video.srcObject = videoStream
      video.play()
    }
  }
}
</script>

<style>
  .screen-capture .screen {
    width: 1680px;
    height: 720px;
    border: 1px solid darkgrey;
  }
</style>
