<template>
  <div class="content-box">
    <el-card class="box-card">
      <h2>{{cData.title}}</h2>
      <p>{{cData.content}}</p>
    </el-card>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
interface contentObj {
  title: string;
  content: string;
}

@Component
export default class Content extends Vue {
  @Prop()
  cData: contentObj;
}
</script>

<style lang="stylus" scoped>
.content-box
  width 40vw
</style>

