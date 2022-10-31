<template>
  <div class="home">
    <p class="total">
      <span>Total:</span>
      <span>{{ devicesList.length }}</span>
    </p>
    <ul class="devices">
      <li
        v-for="(device, idx) in devicesList"
        :key="idx"
        class="device-item"
      >
        <span>{{ device.toJSON() }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      devicesList: []
    }
  },
  async created() {
    let list = null
    try {
      list = await navigator.mediaDevices.enumerateDevices()
      this.devicesList = list
    } catch (e) {
      console.error(e)
      alert(e.message)
    }
  }
}
</script>

<style>
  .home {
    width: 1200px;
    margin: 0 auto;
  }
  .home .total {
    text-align: left;
    padding-left: 20px;
  }
  .home .device-item {
    text-align: left;
    line-height: 32px;
    height: 64px;
  }
</style>
