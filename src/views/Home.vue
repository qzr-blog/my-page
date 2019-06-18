<template>
  <div class="page-container">
    <div class="content">
      <div v-for="(item, index) of contentData"
           :key="index">
        <body-content :cData="item" :index="index"></body-content>
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
      time: '2019-06-18',
      content:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
      img: require("assets/img/portrait.jpg")
    },
    {
      title: "首页2",
      time: '2019-06-18',
      content:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
      img: require("assets/img/portrait.jpg")
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