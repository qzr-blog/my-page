<template>
  <!-- <el-header> -->
  <div class="header">
    <div class="nav">
      <!-- <ul class='menu'>
        <li v-for='item in menuList'
            :key="item.text">{{ item.text }}</li>
      </ul> -->
      <nav-menu></nav-menu>
      <pop :contact='contact'
           :myPhoto='myPhoto'>
        <music :imgSrc='imgSrc'
               :audioSrc='audioSrc'
               :music='false'></music>
      </pop>
    </div>
  </div>
  <!-- </el-header> -->
</template>

<script>
import pop from "./header/pop.vue"
import music from './header/music.vue'
import navMenu from './header/navMenu.vue'


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
      contact: [
        {
          alt: 'github',
          src: require('assets/svg/github.svg'),
          url: "https://github.com/HoldSworder",
          show: false
        },
        {
          alt: '邮箱',
          src: require('assets/svg/邮箱.svg'),
          url: 'javascript;',
          show: false,
          big: true
        },
        {
          alt: 'QQ',
          src: require('assets/svg/qq.svg'),
          url: 'javascript;',
          img: require('assets/img/qq.png'),
          show: false
        },
        {
          alt: '微信',
          src: require('assets/svg/微信.svg'),
          url: 'javascript;',
          img: require('assets/img/wx.png'),
          show: false
        },
        {
          alt: '微博',
          src: require('assets/svg/微博.svg'),
          url: 'http://www.weibo.com/5490397983/profile?topnav=1&wvr=6',
          show: false,
          big: true
        },
      ]
    }
  },
  methods: {

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