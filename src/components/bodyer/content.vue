<template>
  <div class="container"
       @click="show">
    <div class="box-card"
         :class="{'box-even': index%2 !== 0 }">
      <div class="content-box">
        <h2 class="title">{{cData.title}}</h2>
        <div>
          <h2 class="time">{{cData.time}}</h2>

        </div>
        <p class="content">{{cData.text}}</p>
      </div>
      <div class="img-box">
        <img :src="cData.img">
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
interface contentObj {
  title: string;
  content: string;
  img: string;
  id: number;
  time: string;
}

@Component
export default class Content extends Vue {
  @Prop()
  cData!: contentObj;
  @Prop()
  index!: number;

  

  show() {
    this.$router.push({ path: `/show/${this.cData.id}`});
  }
}
</script>

<style lang="stylus" scoped>
title-font = 22px

.img-box
  height 100%
  width 50%
  display flex
  justify-content flex-end
  align-items center

.img-box img
  height 100%
  width 100%
  transition all 0.6s

.img-box img:hover
  transform scale(1.1)

.container
  width 60vw
  margin-bottom 20px

.box-card
  display flex
  box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  border 1px solid #EBEEF5
  background-color #FFF
  color #303133
  transition 0.3s
  border-radius 4px
  overflow hidden
  height 25vh
  justify-content space-between
  align-items center

.box-card:hover
  box-shadow 0 4px 12px 12px rgba(7, 17, 27, 0.15)

.box-card:hover .img-box img
  transform scale(1.1)

.box-even
  flex-direction row-reverse

.content-box
  padding 1.5rem

.title
  font-size title-font
  font-weight bold

.time
  color #999
  font-style italic
  padding 15px 0

.content
  color #666
  margin 0 10px 10px 0
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 3
  -webkit-box-orient vertical
  line-height 1.4em
  height 4.2em
  overflow hidden
  font-size 14px
</style>


