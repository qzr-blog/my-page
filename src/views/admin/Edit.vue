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
                  @save="saveMark"
                  ref="md"
                  @imgAdd="imgAdd" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { delHtmlTag } from "@/common/js/tool";
import axios from "axios";
import api from "api/base";

@Component
export default class Edit extends Vue {
  value = "";
  defaultData = "preview";
  title: string = "";

  saveMark(value: string, render: string) {
    const text = delHtmlTag(render);
    const query: any = this.$route.query;

    if (Object.keys(query).length !== 0) {
      this.$api.info
        .update({ id: query.id, title: this.title, content: value, text })
        .then((res: any) => {
          this.$message({
            showClose: true,
            message: "OK",
            type: "success"
          });
        });
    } else {
      this.$api.info
        .create({ title: this.title, content: value, text })
        .then((res: any) => {
          this.$message({
            showClose: true,
            message: "OK",
            type: "success"
          });
        });
    }
  }

  getInfo(id: number) {
    this.$api.info.get({ id }).then((res: any) => {
      this.value = res.data.content;
      this.title = res.data.title;
    });
  }

  imgAdd(pos: any, $file: any) {
    const file = new FormData();
    file.append("image", $file);
    this.$axios({
      method: "post",
      url: api.uploadImg,
      headers: { "Content-Type": "multipart/form-data" },
      data: file
    }).then((res: any) => {
      const url = res.data;
      const md = this.$refs.md as any
      md.$img2Url(pos, url);
    });
  }

  mounted() {
    const query: any = this.$route.query;
    if (Object.keys(query).length !== 0) this.getInfo(query.id);
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'

.page-container
  display block
</style>