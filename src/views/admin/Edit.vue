<template>
  <div class="page-container">
    <span>
      <el-input type="text"
                placeholder="请输入内容"
                v-model="title"
                maxlength="10"
                show-word-limit>
      </el-input>
    </span>
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
  title: string = "";

  saveMark(value: string, render: string) {
    console.log(value);
    console.log(this.title);

    this.$api.info
      .createInfo({ title: this.title, content: value })
      .then((res: any) => {
        alert('ok')
      });
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'

.page-container
  display block
</style>