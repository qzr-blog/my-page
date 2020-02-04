<template>
  <div>
    <img :src="imgSrc"
         class='music-look'
         @click='changeMusic'
         :class='{ musicActive: !singing }'
         id='music-img'>
    <audio id='audio'
           :autoplay='singing'
           @ended='setIndex'
           :src='audioSrc[index]'>
    </audio>
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
      index: 0,
      singing: this.music
    }
  },
  methods: {
    changeMusic () {
      let audio = document.querySelector('#audio')
      let img = document.querySelector('#music-img')

      if (this.singing) {
        audio.pause()
        this.singing = false
        img.style.animationPlayState = 'paused'
      } else {
        audio.play()
        this.singing = true
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

<style lang="stylus" scoped>
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