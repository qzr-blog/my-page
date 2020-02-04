<template>
  <!-- <el-header> -->
  <div class="header">
    <div class="nav">
      <!-- <ul class='menu'>
        <li v-for='item in menuList'
            :key="item.text">{{ item.text }}</li>
      </ul> -->
      <nav-menu></nav-menu>
      <pop :myPhoto='myPhoto'>
        <music :imgSrc='imgSrc'
               :audioSrc='audioSrc'
               :music='false'></music>
      </pop>
    </div>
  </div>
  <!-- </el-header> -->
</template>

<script>
import pop from "components/header/pop.vue"
import music from 'components/header/music.vue'
import navMenu from 'components/header/navMenu.vue'


export default {
  components: {
    pop,
    music,
    navMenu
  },
  data () {
    return {
      imgSrc: require('assets/svg/音乐.svg'),
      audioSrc: [
        require('assets/audio/猪叫.mp3')
      ],
      myPhoto: require('assets/img/portrait.jpg'),
    }
  },
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu li
  display inline-block
  margin-right 30px
  font-size 18px
.menu
  display inline-block
.nav
  display flex
  align-items center
  justify-content space-between
  // margin 0 10px
  // padding-top 10px
  // padding-left 20px
  color white
</style>