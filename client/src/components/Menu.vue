<template>
  <nav class="menu">
    <ul class="menu-list">
      <li
        v-for="(menu, idx) in menuList"
        :key="idx"
        class="menu-item"
      >
        <span
          v-if="idx !== 0"
          class="divider"
        >|</span>
        <router-link
          :to="menu.path"
          class="link"
        >{{ menu.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      default: () => []
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
