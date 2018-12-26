<template>
  <div id="app">
    <el-container>
      <el-header class="el-header">
        <nav-header></nav-header>
      </el-header>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
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
.el-header
  padding 0
.el-main
  padding 0 5vw
</style>
