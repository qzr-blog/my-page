<template>
  <div class="header">
    <div class="nav">
      <ul class='menu'>
        <li v-for='item in menuList'>{{ item.text }}</li>
      </ul>
      <div>
        <img :src="myPhoto" class='my-photo' @click='changePop'>
        <div class="pop" v-if='show'>
          <div class="pop-img" v-for='(item, index) in contact' @mouseenter.stop.prevent="showPop(index)" @mouseleave.stop.prevent='hidePop(index)'>
            <div class='pop-div' >
              <a :href="item.url">
                <img :src="item.src" :alt="item.url" class='pop-div-img'>
              </a>
              <pop v-if='item.show && item.img'><img :src="item.img" class='pop-if-img'></pop>
            </div>           
          </div>
        </div>
      </div>
    </div>
    <p>这是我的个人简介</p>
  </div>
</template>

<script>
  import pop from "components/pop";

  export default {
    components: {
      pop
    },
    data(){
      return {
        show: false,
        github: require('assets/svg/github.svg'),
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
            show: false
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
            show: false
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
      showPop(index) {
        this.contact[index].show = true
      },
      hidePop(index) {
        this.contact[index].show = false
      },
      changePop() {
        console.log('sdf')
        this.show = !this.show
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

  .pop-div-img
    width 30px
    height 30px
    margin 5px 10px
    // position relative

  .pop
    position absolute
    background-color black
    margin-top 10px

  .pop-div
    position relative

  .pop-if-img
    height 250px
</style>