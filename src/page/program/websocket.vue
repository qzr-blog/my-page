<template>
  <div class="page-container">
    <el-row>

      <div class="person-num">当前在线人数{{personNum}}</div>
      <div class="text-box"
           ref="text-box">
        <p v-for="(item, index) of textArr"
           :key="index"
           :class="{myWord: item.isMy, sysWord: item.isSys}">
          <span>{{item.str}}</span>
        </p>
      </div>

      <div class="form-box">
        <el-input v-model="inputText"
                  autofocus
                  clearable
                  ref="inputText"
                  placeholder="请输入内容"
                  @keyup.enter.native="send"></el-input>
        <el-button type="primary"
                   @click="send">发送</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
import isJson from 'common/js/jsJson'
export default {
  data () {
    return {
      text: '',
      inputText: '',
      ws: new WebSocket('ws://47.110.149.190:3000/'),
      saveText: '',
      personNum: 0,
      textArr: []
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
      let data
      data = JSON.parse(e.data)
      this.personNum = data.num
      if (data.str == this.saveText) {
        let dataObj = {
          isMy: true
        }
        Object.assign(dataObj, data)
        this.textArr.push(dataObj)
      } else {
        let dataObj = {
          isMy: false
        }
        Object.assign(dataObj, data)
        this.textArr.push(dataObj)
      }
    }
  },
  methods: {
    send () {
      if (this.inputText == '') {
        return
      }
      this.saveText = this.inputText
      this.ws.send(this.inputText)
      this.inputText = ''
      this.$refs.inputText.focus()
      console.log(this.textArr)
    }
  },
  updated () {
    let textBox = document.querySelector('.text-box')
    let text = document.querySelector('.text-box p')
    this.$nextTick(() => {
      textBox.scrollTop = textBox.scrollHeight
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/index'
.sysWord
  align-self center
.sysWord span
  background transparent !important
  color #333 !important
.person-num
  margin-top 10px
.form-box
  display flex
  justify-content center
  margin-top 10px
.text-box
  display flex
  flex-direction column
  height 50vh
  border 1px solid #ccc
  padding 10px
  border-radius 10px
  margin-top 10px
  width 50vw
.my-text
  align-self flex-end
>>>.text-box p
  margin 15px 0 0 0
  word-break break-all
>>>.text-box
  overflow-y auto
>>>.text-box p span
  padding 10px
  background lightgrey
  color #444
  flex 0
  border-radius 10px
  display inline-block
  font-size 14px
  line-height 1.5
>>>.myWord
  align-self flex-end
>>>.myWord span
  color white !important
  background dodgerblue !important
</style>

