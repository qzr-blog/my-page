<template>
  <div class="page-container">
    <div class="game"
         id="game">
      <div v-for="(item, i) of gameData"
           :key="i"
           class="colDiv"
           :style="{top: 20 * i + 'px'}">
        <div v-for="(ite, j) of item"
             :class="setClass(ite)"
             :key="j"
             :style="{left: 20*j + 'px'}"></div>
      </div>
    </div>
    <div>
      <div class="next"
           id="next">
        <div v-for="(item, i) of nextData"
             :key="i"
             class="colDiv"
             :style="{top: 20 * i + 'px'}">
          <div v-for="(ite, j) of item"
               :class="setClass(ite)"
               :key="j"
               :style="{left: 20*j + 'px'}"></div>
        </div>
      </div>
      <div class="info">
        <div>已用时：<span class="time">{{time}}</span>s</div>
        <div>已得分：<span class="score">{{score}}</span>分</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      time: '0',
      score: '0',
      nextData: [
        [0, 2, 0, 0],
        [0, 2, 2, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      gameData: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      nextDivs: [],
      gameDivs: [],
      x: 0,
      y: 0
    }
  },
  computed: {
    setClass () {
      return function (index) {
        switch (index) {
          case 0:
            return 'none'

          case 1:
            return 'done'

          case 2:
            return 'current'
        }
      }
    },
    calcNext () {
      let arr = this.nextData.filter(x => {
        return x.reduce((a, b) => a + b) != 0
      })
      console.log(arr)
      return arr
    }
  },
  methods: {
    move (fun) {
      this.nextData.forEach((i, index) => {
        i.forEach((j, inde) => {
          this.gameData[index + this.y][inde + this.x] = 0
        })
      })

      fun()

      this.nextData.forEach((i, index) => {
        i.forEach((j, inde) => {
          this.gameData[index + this.y][inde + this.x] = j
        })
      })
      this.$forceUpdate()
    },
    down () {
      this.move(() => this.y++)
      this.calcNext()
    },
    transverse (arrow) {
      if (arrow == 37) {
        this.move(() => this.x--)
      } else {
        this.move(() => this.x++)
      }
    }
  },
  mounted () {
    let that = this
    document.onkeydown = e => {
      let key = e.keyCode
      if (key == 40) {
        this.down()
      } else if (key == 37) {
        this.transverse(37)
      } else if (key == 39) {
        this.transverse(39)
      }
    }

    // setInterval(function () {
    //   that.down()
    // }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/index'
$backColor = #F2FAFF
.colDiv
  height 20px
.page-container
  display flex
  justify-content space-evenly
.game
  width 200px
  height 400px
  background-color $backColor
  border-left 1px solid blue
  border-right 1px solid blue
  border-bottom 1px solid blue
  position relative
.next
  width 80px
  height 80px
  background-color $backColor
  border 1px solid blue
  position relative
>>>.none, >>>.current, >>>.done
  width 20px
  height 20px
  position absolute
  box-sizing border-box
>>>.none
  background-color $backColor
>>>.current
  background-color pink
  border 1px solid red
>>>.done
  background-color gray
  border 1px solid black
</style>

