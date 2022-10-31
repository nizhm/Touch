<template>
  <div class="audio-capture">
    <video
      ref="audio"
      class="audio"
    ></video>
    <p>
      <button @click="getAudio">Start</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AudioCapture',
  methods: {
    async getAudio() {
      const constraints = {
        audio: true
      }
      let videoStream = null
      try {
        videoStream = await navigator.mediaDevices.getUserMedia(constraints)
      } catch (e) {
        console.error(e)
      }
      const audio = this.$refs.audio
      audio.srcObject = videoStream
      audio.play()
    }
  }
}
</script>

<style>
  .audio-capture .audio {
    width: 500px;
    height: 100px;
    border: 1px solid darkgrey;
  }
</style>
