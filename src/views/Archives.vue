<template>
  <div class="page-container">
    <div class="content">
      <el-timeline>
        <el-timeline-item v-for="item in getDate" :key="getKey(item)">
          <h2 class="month" v-if="typeof item == 'string'">{{ item }}</h2>
          <li v-else>
            <router-link :to="`show/${item.id}`" class="title">{{
              item.title
            }}</router-link>
            <span class="date">{{ item.created }}</span>
          </li>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import Tool from 'common/js/tool'
export default {
  data() {
    return {
      data: {}
    }
  },

  computed: {
    getMonth() {
      const month = []
      const data = this.data
      for (const item in data) {
        if (data.hasOwnProperty(item)) {
          month.push(item)
        }
      }
      return month
    },
    getDate() {
      const arr = []
      for (const item of this.getMonth) {
        arr.push(item)
        for (const ite of this.data[item]) {
          arr.push(ite)
        }
      }
      console.log(arr)
      return arr
    }
  },

  methods: {
    getKey(key) {
      return Tool.typeOf(key) == 'String' ? key : key.title
    }
  },

  mounted() {
    this.$api.basic.getArchives().then(res => {
      this.data = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin-top 20px
.month
  font-size 24px
.title
  margin-right 10px
  font-size: 16px;
  color #2479CC
.date
  color: #999;
  font-size: 14px;
  font-style: italic;
</style>
