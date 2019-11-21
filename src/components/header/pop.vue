<template>
  <div class="content">
    <div>
      <img :src="myPhoto"
           class='my-photo hvr-bounce-in'
           @click='changePop'>
      <el-collapse-transition>
        <div class="pop container"
             v-show='show'>
          <div class="pop-img"
               v-for='(item, index) in contact'
               :key="item.alt"
               @mouseenter="showPop(index)"
               @mouseleave='hidePop(index)'>
            <div class='pop-div'
                 @click="checkAlt(item.alt)">
              <a :href="item.url">
                <img :src="item.src"
                     :alt="item.url"
                     class='pop-div-img hvr-bounce-in '>
                <img :src="item.img"
                     class='pop-if-img'
                     v-if='item.show && item.img'>
              </a>

            </div>
          </div>
          <slot></slot>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'contact',
    'myPhoto'
  ],
  data () {
    return {
      show: false,
    }
  },
  methods: {
    checkAlt (alt) {
      if (alt == '登录') this.signIn()
    },
    signIn () {
      
      console.log('登录')
    },
    showPop (index) {
      this.contact[index].show = true
    },
    hidePop (index) {
      this.contact[index].show = false
    },
    changePop () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  position fixed
  right 0

.container
  position absolute

.my-photo
  width 50px
  height 50px
  border-radius 50px
  overflow hidden
  display inline-block

.pop-div-img
  width 30px
  height 30px
  margin 5px 10px
  filter contrast(1%) !important
  // position relative

.pop
  position absolute
  margin-top 10px

.pop-div
  position relative

.pop-if-img
  height 250px
  position absolute
  right 5rem
  bottom -5rem

// 弹跳效果
.hvr-bounce-in
  display inline-block
  vertical-align middle
  -webkit-transform perspective(1px) translateZ(0)
  transform perspective(1px) translateZ(0)
  box-shadow 0 0 1px transparent
  -webkit-transition-duration 0.5s
  transition-duration 0.5s

.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active
  -webkit-transform scale(1.2)
  transform scale(1.2)
  -webkit-transition-timing-function cubic-bezier(0.47, 2.02, 0.31, -0.36)
  transition-timing-function cubic-bezier(0.47, 2.02, 0.31, -0.36)
</style>