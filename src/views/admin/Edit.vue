<template>
  <div class="page-container">
    <span>
      <el-input type="text"
                placeholder="请输入内容"
                v-model="text"
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

  saveMark(value: string, render: string) {
    console.log(value);
    console.log(render);

    // this.$api.info.createInfo({content: value}).then((res: any) => {
    //   console.log(res);
    // });
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'
.page-container 
  display block
</style>