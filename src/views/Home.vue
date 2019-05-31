<template>
  <div class="page-container">
    <div class="content">
      <el-card class="box-card">
        <h2>Hello blog</h2>
        <p>爱神的箭发设计费拉开江东父老</p>
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