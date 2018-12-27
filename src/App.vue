<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from 'components/header'
export default {
  components: {
    navHeader
  },
  name: 'app'
}
</script>

<style lang='stylus'>
@import '~assets/stylus/index'
#app
  background white
  height 100vh
  background-image url('assets/img/background.jpg')
</style>
