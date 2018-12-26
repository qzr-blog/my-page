<template>
  <div class="container">
    <div class="content">
      首页
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/index'
.container
  // padding 10px
  width 100%
  height calc(100vh - 60px)
  display flex
  justify-content center
  background white
.content
  padding 10px
  color $color-dialog-background
</style>