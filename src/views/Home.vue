<template>
  <div class="page-container">
    <div class="content">
      <el-card class="box-card">
        <h2>首页</h2>
        <p>首页首页首页</p>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Home extends Vue { 
  mounted() {
    console.log('home')
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/index'

.content
  padding 10px
  color $color-dialog-background
</style>