<template>
	<div class="header">
		<div class="show">
			<div class="nav">
				<pop :contact="contact" :myPhoto="myPhoto">
					<music :imgSrc="imgSrc" :audioSrc="audioSrc" :music="false"></music>
				</pop>
				<ul class="menu">
					<li v-for="item in menuList" :key="item.menuList">{{ item.text }}</li>
				</ul>
			</div>
		</div>
		<div></div>
	</div>
</template>

<script>
import pop from "components/common/pop";
import music from "components/common/music";


export default {
	components: {
		pop,
		music,
	},
	data () {
		return {
			imgSrc: require("assets/svg/音乐.svg"),
			audioSrc: [
				require("assets/audio/消愁.mp3"),
				require("assets/audio/像我这样的人.mp3")
			],
			myPhoto: require("assets/img/portrait.jpg"),
			contact: [
				{
					alt: "github",
					src: require("assets/svg/github.svg"),
					url: "https://github.com/HoldSworder",
					show: false
				},
				{
					alt: "邮箱",
					src: require("assets/svg/邮箱.svg"),
					url: "javascript;",
					show: false,
					big: true
				},
				{
					alt: "QQ",
					src: require("assets/svg/qq.svg"),
					url: "javascript;",
					img: require("assets/img/qq.png"),
					show: false
				},
				{
					alt: "微信",
					src: require("assets/svg/微信.svg"),
					url: "javascript;",
					img: require("assets/img/wx.png"),
					show: false
				},
				{
					alt: "微博",
					src: require("assets/svg/微博.svg"),
					url: "http://www.weibo.com/5490397983/profile?topnav=1&wvr=6",
					show: false,
					big: true
				}
			],
			menuList: [
				{
					text: "首页",
					url: ""
				},
				{
					text: "状态",
					url: ""
				},
				{
					text: "项目",
					url: ""
				},
				{
					text: "关于",
					url: ""
				}
			],

		};
	},
	methods: {}
};
</script>

<style lang="stylus">
.menu li
	display inline-block
	margin-right 70px
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

.show
	height 40vh
	// background-image url('../assets/img/background.jpg')
	background-image url('http://ozilwgpje.bkt.clouddn.com/blog/home.jpg?imageslim') /* config */
</style>