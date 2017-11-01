<template>
  <div>
    <img :src="imgSrc" class='music-look music' @click='changeMusic' id='music-img'></img>
    <audio loop='loop' autoplay='autoplay' id='audio'>
      <source v-for='item in audioSrc' :src='item'></source>
    </audio>
    {{ imgSrc }}
  </div>
</template>

<script>
  export default {
    props: [
      'imgSrc',
      'audioSrc'
    ],
    data() {
      return {
        
      }
    },
    methods: {
      changeMusic() {
        let audio = document.querySelector('#audio')
        let img = document.querySelector('#music-img')

        if (this.music) {
          audio.pause()
          this.music = false
          img.style.animationPlayState = 'paused'
        }else{
          audio.play()
          this.music = true
          img.style.animationPlayState = 'running'
        }                
      }
    }
  }
</script>

<style lang="stylus">
  //旋转
  @keyframes rotate
    from transform rotate(0deg)
    to transform rotate(360deg)

  .music
    animation rotate 5s infinite
    animation-timing-function linear
    animation-play-state running

  .music-look
    width 30px
    padding 5px 10px 5px 10px
</style>