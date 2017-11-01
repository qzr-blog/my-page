<template>
  <div class='container'>
    <slot class='music-look music' @click='changeMusic' id='music-img'></slot>
  </div>
</template>

<script>
  
</script>

<style lang="stylus">
  .container
    position absolute
    right 50px
    top -100px
    display inline-block
</style>