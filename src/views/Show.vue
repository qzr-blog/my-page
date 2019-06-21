<template>
  <div>
    
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  $api: any;

  mounted() {
    this.$api.basic.getInfo()
  }
}
</script>

<style lang='stylus' scoped></style>