<template>
  <div class="page-container">
    <mavon-editor v-model="value" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  value = "";
  defaultData = "preview";
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'
</style>