<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Show' }" class="nav-link">All Books</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  created: function () {
    console.log('well created')
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .gap {
    margin-top: 50px;
  }
</style>
