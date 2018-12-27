<template>
  <el-menu default-active="0"
           class="el-menu"
           mode="horizontal">
    <el-menu-item v-for="(item, index) of menuList"
                  v-if="!item.children"
                  :index="index + ''"
                  :key="item.text">{{item.text}}</el-menu-item>
    <el-submenu :index="index + getIndex + ''"
                v-for="(item, index) of menuList"
                :key="item.text"
                v-if="item.children">
      <template slot="title">{{item.text}}</template>
      <el-menu-item v-for="(i, ind) of item.children"
                    :key="i.text"
                    :index="`${index}-${ind}`">
        <router-link :to="i.path">{{i.text}}</router-link>
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
        path: ''
      }, {
        text: '状态',
        path: ''
      }, {
        text: '项目',
        path: '',
        children: [{
          text: 'dnf折扣计算',
          path: '/project/calc'
        }, {
          text: '聊天室',
          path: '/project/websocket'
        }]
      }, {
        text: '关于',
        path: ''
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-menu
  width 100%
</style>
