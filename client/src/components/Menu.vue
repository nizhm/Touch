<template>
  <nav class="menu">
    <ul class="menu-list">
      <li
        v-for="(route, idx) in visibleMenuList"
        :key="idx"
        class="menu-item"
      >
        <span
          v-if="idx !== 0"
          class="divider"
        >|</span>
        <router-link
          :to="route.path"
          class="link"
        >{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    visibleMenuList() {
      const routes = this.$router.options.routes
      return routes.filter(route => !route.hidden)
    }
  }
}
</script>

<style>
nav {
  padding: 10px 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #409EFF;
}

.menu .menu-list {
  list-style: none;
  height: 32px;
  line-height: 32px;
  border-bottom: 1px solid;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu .menu-list .menu-item .divider {
  padding: 0 8px;
}

.menu .menu-list .menu-item .link {
  text-decoration: none;
}
</style>
