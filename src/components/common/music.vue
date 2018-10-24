<template>
  <div>
    <img
      :src="imgSrc"
      class="music-look"
      @click="changeMusic"
      :class="{ musicActive: !music }"
      id="music-img"
    >
    <audio id="audio" :autoplay="music" @ended="setIndex" :src="audioSrc[index]"></audio>
  </div>
</template>

<script>
export default {
  props: [
    'imgSrc',
    'audioSrc',
    'music'
  ],
  data () {
    return {
      index: 0
    }
  },
  methods: {
    changeMusic () {
      let audio = document.querySelector('#audio')
      let img = document.querySelector('#music-img')

      if (this.music) {
        audio.pause()
        this.music = false
        img.style.animationPlayState = 'paused'
      } else {
        audio.play()
        this.music = true
        img.style.animationPlayState = 'running'
      }
    },
    setIndex () {
      if (this.audioSrc[this.index + 1]) {
        console.log('over')
        this.index++
      } else {
        this.index = 0
      }
    }
  },
  watch: {

  }
}
</script>

<style lang="stylus">
// 旋转
@keyframes rotate
  from transform rotate(0deg)
  to transform rotate(360deg)

.music-look
  animation rotate 5s infinite
  animation-timing-function linear
  animation-play-state running
  width 30px
  padding 5px 10px 5px 10px

.musicActive
  animation-play-state paused !important
</style>