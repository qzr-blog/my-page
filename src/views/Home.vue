<template>
  <div class="page-container">
    <div class="content">
      <div v-for="(item, index) of contentData"
           :key="index">
        <body-content :cData="item"
                      :index="index"></body-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import bodyContent from "components/bodyer/content.vue";

interface overviewObj {
  title: string;
  content: string;
  img: any;
  id: number;
  time: string;
}

@Component({
  components: {
    bodyContent
  }
})
export default class Home extends Vue {
  $api: any;
  contentData: Array<object> = [];

  mounted() {
    const THAT = this;
    this.$api.basic.getOverview().then((x: any) => {
      this.$nextTick(function() {
        THAT.contentData = x.data
      });
    });
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/index'

.content
  padding 10px
  color $color-dialog-background
</style>