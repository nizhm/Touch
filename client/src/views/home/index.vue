<template>
  <div class="home">
    <p class="total">
      <span>Devices Total:</span>
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
    <p class="constraints">
      <span>Supported constraints:</span>
    </p>
    <div class="constraints-box">
      <pre>{{ supportedConstraints }}</pre>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      devicesList: [],
      supportedConstraints: null
    }
  },
  async created() {
    let list = null
    let constraints = null
    try {
      list = await navigator.mediaDevices.enumerateDevices()
      constraints = await navigator.mediaDevices.getSupportedConstraints()
    } catch (e) {
      console.error(e)
      alert(e.message)
    }
    this.devicesList = list
    this.supportedConstraints = JSON.stringify(constraints, null, 2)
  }
}
</script>

<style>
  .home {
    width: 1200px;
    margin: 0 auto;
  }
  .home .total, .constraints {
    text-align: left;
    padding-left: 20px;
  }
  .constraints-box {
    border: 1px solid darkgrey;
    text-align: left;
    padding-left: 20px;
    margin-left: 20px;
  }
  .home .device-item {
    text-align: left;
    line-height: 32px;
    height: 64px;
  }
</style>
