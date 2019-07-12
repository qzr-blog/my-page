<template>
  <div class="page-container">
    <mavon-editor v-model="value"
                  @save="saveMark" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Edit extends Vue {
  value = "";
  defaultData = "preview";
  $api: any;

  saveMark(value: string, render: string) {
    console.log(value);
    console.log(render);
    this.$api.basic.createInfo({content: value}).then((res: any) => {
      console.log(res);
    });
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'
</style>