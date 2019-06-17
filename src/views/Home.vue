<template>
  <div class="page-container">
    <div class="content">
      <div v-for="(item, index) of contentData"
           :key="index">
        <body-content :cData="item"></body-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import bodyContent from "components/bodyer/content.vue";

@Component({
  components: {
    bodyContent
  }
})
export default class Home extends Vue {
  contentData: Array<object> = [
    {
      title: "首页",
      content:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    },
    {
      title: "首页2",
      content:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    }
  ];

  mounted() {
    console.log("home");
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/index'

.content
  padding 10px
  color $color-dialog-background
</style>