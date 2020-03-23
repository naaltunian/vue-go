<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Vue-Go</router-link>
    <div class="right menu">
      <div class="right-navigation">
        <a class="item" href="#">Users</a>
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