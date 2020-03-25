<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Vue-Go</router-link>
    <div class="right menu">
      <div class="right-navigation">
        <router-link class="item" to="/">Users</router-link>
        <router-link class="item" to="/add_user">Add User</router-link>
        <router-link class="item" to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.right-navigation {
  display: flex;
}
</style>