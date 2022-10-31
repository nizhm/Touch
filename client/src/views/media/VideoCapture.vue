<template>
  <div class="video-capture">
    <video
      ref="video"
      class="video"
    ></video>
    <p>
      <button @click="getVideo">Start</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'VideoCapture',
  methods: {
    async getVideo() {
      const constraints = {
        video: true
      }
      let videoStream = null
      try {
        videoStream = await navigator.mediaDevices.getUserMedia(constraints)
      } catch (e) {
        console.error(e)
        alert(e.message)
      }

      const video = this.$refs.video
      video.srcObject = videoStream
      video.play()
    }
  }
}
</script>

<style>
  .video-capture .video {
    width: 300px;
    height: 300px;
    border: 1px solid darkgrey;
  }
</style>
