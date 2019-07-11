<template>
  <div>
    <mavon-editor :value="info"
                  :subfield="prop.subfield"
                  :defaultOpen="prop.defaultOpen"
                  :toolbarsFlag="prop.toolbarsFlag"
                  :editable="prop.editable"
                  :scrollStyle="prop.scrollStyle"
                  :navigation="prop.navigation"></mavon-editor>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  $api: any;
  info: string = "";

  mounted() {
    this.$api.basic.getInfo().then((res: any) => {
      this.$nextTick(() => {
        this.info = res.data;
      });
    });
  }

  private get prop(): object {
    let data = {
      subfield: false, // 单双栏模式
      defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
      editable: false,
      toolbarsFlag: false,
      scrollStyle: true,
      navigation: true
    };
    return data;
  }
}
</script>

<style lang='stylus' scoped></style>