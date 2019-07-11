<template>
  <div class="page-container">
    <mavon-editor v-model="value"
                  @save="saveMark" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  value = "";
  defaultData = "preview";

  saveMark(value:string, render:string) {
    console.log(value);
    console.log(render);
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'
</style>