<template>
  <div class="header">
    <div class="nav">
      <ul class='menu'>
        <li v-for='item in menuList'>{{ item.text }}</li>
      </ul>
      <pop :contact='contact' :myPhoto='myPhoto'>
        <music :imgSrc='imgSrc' :audioSrc='audioSrc' :music='false'></music>
      </pop>
    </div>
    <p>这是我的个人简介</p>
  </div>
</template>

<script>
  import pop from "components/pop";
  import music from 'components/music'


  export default {
    components: {
      pop,
      music
    },
    data(){
      return {

        imgSrc: require('assets/svg/音乐.svg'),
        audioSrc: [
          require('assets/audio/消愁.mp3'),
          require('assets/audio/像我这样的人.mp3')
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
        ],
        menuList: [
          {
            text: '首页',
            url: ''
          },
          {
            text: '状态',
            url: ''
          },
          {
            text: '项目',
            url: ''
          },
          {
            text: '关于',
            url: ''
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  


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
    margin 0 10px
    padding-top 10px
    padding-left 20px
    color white

  .header
    background-image url(../assets/img/background.jpg)
    height 100vh



</style>