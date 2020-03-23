<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="#">Vue-Go</a>
    <div class="right menu">
      <div class="right-navigation">
        <a class="item" href="#">Users</a>
        <a class="item" href="#">About</a>
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