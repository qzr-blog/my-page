<template>
  <div class="page-container">
    <div class="content">
      <h1>本站已运行{{calcRunDay}}天</h1>
      <h1>您是到访的第{{}}人</h1>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class State extends Vue {
  startTime = "2019-01-01";

  get calcRunDay() {
    return Math.round(
      (new Date().getTime() - new Date(this.startTime).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
  }
}
</script>

<style lang='stylus' scoped>
.content
  display block
</style>