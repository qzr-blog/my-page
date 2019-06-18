<template>
  <el-menu default-active="0"
           class="el-menu"
           mode="horizontal">
    <el-menu-item v-for="(item, index) of hasMenuList"
                  :index="index + ''"
                  :key="item.text"
                  @click="goRouter(item.path)">{{item.text}}
    </el-menu-item>
    <el-submenu :index="index + getIndex + ''"
                v-for="(item, index) of noMenuList"
                :key="item.text"
                popper-class="el-submenu">
      <template slot="title">{{item.text}}</template>
      <el-menu-item v-for="(i, ind) of item.children"
                    :key="i.text"
                    :index="`${index}-${ind}`"
                    @click="goRouter(i.path)">
        {{i.text}}
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        text: '首页',
        path: '/'
      }, {
        text: '项目',
        path: '',
        children: [{
          text: 'dnf折扣计算',
          path: '/project/calc'
        }, {
          text: '聊天室',
          path: '/project/websocket'
        }, {
          text: '俄罗斯方块',
          path: '/project/tetris'
        }]
      }, {
        text: '关于',
        path: '/about'
      }, {
        text: '状态',
        path: '/state'
      }, {
        text: '编辑',
        path: '/edit'
      }]
    }
  },
  computed: {
    getIndex () {
      let index = 0
      for (const item of this.menuList) {
        if (item.children) index++
      }
      return index
    },
    hasMenuList () {
      return this.menuList.filter(x => {
        return !x.children
      })
    },
    noMenuList () {
      return this.menuList.filter(x => {
        return x.children
      })
    }
  },
  methods: {
    goRouter (path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-menu
  width 100%

.el-menu li
  width 8%
  display flex
  justify-content center

.el-submenu
  display flex
  justify-content center
</style>
