<template>
  <div class="page-container">
    <el-row>
      <el-input v-model="inputText"
                placeholder="请输入内容"></el-input>
      <el-button type="primary"
                 @click="send">提交</el-button>
      <div>{{text}}</div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      inputText: '',
      ws: new WebSocket('ws://47.110.149.190:3000/')
    }
  },
  mounted () {
    this.ws.onopen = () => {
      console.log('ws open')
      this.text = 'OPEN'
    }
    this.ws.onclose = () => {
      console.log('ws close')
      this.text = 'CLOSE'
    }
    this.ws.onmessage = e => {
      console.log(e.data)
      this.text = e.data
    }
  },
  methods: {
    send () {
      this.ws.send(this.inputText)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/index'
</style>

