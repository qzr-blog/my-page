<template>
  <div class="header">
    <div class="nav">
      <ul class='menu'>
        <li v-for='item in menuList'>{{ item.text }}</li>
      </ul>
      <div>
        <img :src="myPhoto" class='my-photo'>
        <div class="pop">
          <div class="pop-img" v-for='item in contact'>
            <a :href="item.url">
              <img :src="item.src" :alt="item.url">
            </a>
          </div>
        </div>
      </div>
    </div>
    <p>这是我的个人简介</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        github: require('assets/svg/github.svg'),
        myPhoto: require('assets/img/portrait.jpg'),
        contact: [
          {
            alt: 'github',
            src: require('assets/svg/github.svg'),
            url: "https://github.com/HoldSworder"
          },
          {
            alt: '邮箱',
            src: require('assets/svg/邮箱.svg'),
            url: 'javascript;'
          },
          {
            alt: 'QQ',
            src: require('assets/svg/qq.svg'),
            url: 'javascript;'
          },
          {
            alt: '微信',
            src: require('assets/svg/微信.svg'),
            url: 'javascript;'
          },
          {
            alt: '微博',
            src: require('assets/svg/微博.svg'),
            url: 'http://www.weibo.com/5490397983/profile?topnav=1&wvr=6'
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
    }
  }
</script>

<style lang="stylus">
  .my-photo
    width 50px
    height 50px
    border-radius 50px
    overflow hidden
    display inline-block

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

  .pop-img img 
    width 30px
    height 30px
    margin 5px 10px

  .pop
    position absolute
    background-color black
    margin-top 10px
    

</style>