<template>
  <div class="header">
    <div class="nav">
      <ul class='menu'>
        <li v-for='item in menuList'>{{ item.text }}</li>
      </ul>
      <div>
        <img :src="myPhoto" class='my-photo hvr-bounce-in' @click='changePop'>
        <el-collapse-transition>    
          <div class="pop" v-show='show'>
            <div class="pop-img" v-for='(item, index) in contact' @mouseenter.stop.prevent="showPop(index)" @mouseleave.stop.prevent='hidePop(index)'>
              <div class='pop-div' >
                <a :href="item.url">
                  <img :src="item.src" :alt="item.url" class='pop-div-img hvr-bounce-in ' >
                </a>
                <pop v-show='item.show && item.img'><img :src="item.img" class='pop-if-img'></pop>
              </div>           
            </div>
            <music imgSrc='imgSrc'></music>
          </div>
        </el-collapse-transition>    
      </div>
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
        imgSrc: '../assets/svg/音乐.svg',
        music: true,
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
      showPop(index) {
        this.contact[index].show = true
      },
      hidePop(index) {
        this.contact[index].show = false
      },
      changePop() {
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
    margin-top 10px

  .pop-div
    position relative

  .pop-if-img
    height 250px



  //弹跳效果
  .hvr-bounce-in 
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  
  .hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active 
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  

</style>