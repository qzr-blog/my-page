<template>
  <div class="page-container">
    <el-form ref="form"
             :model="form">
      <el-form-item label="购买金额（元）"
                    :rules="[
                        { type: 'number', message: '必须为数字值'}
                      ]">
        <el-input v-model.number="form.rmb"></el-input>
      </el-form-item>
      <el-form-item label="金价"
                    :rules="[
                        { type: 'number', message: '必须为数字值'}
                      ]">
        <el-input v-model.number="form.yxb"></el-input>
      </el-form-item>
      <el-form-item label="寄售比例（/100w）"
                    :rules="[
                        { type: 'number', message: '必须为数字值'}
                      ]">
        <el-input v-model.number="form.bl"></el-input>
      </el-form-item>
      <el-collapse>
        <el-collapse-item title="高级"
                          name="1">

          <el-form-item label="手续费">
            <el-checkbox-group v-model="form.poundage">
              <el-checkbox label="mail">邮寄手续费</el-checkbox>
              <el-checkbox label="net">网站手续费</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="网站手续费"
                        v-if="form.poundage.indexOf('net') != -1"
                        :rules="[
                          { type: 'number', message: '必须为数字值'}
                        ]">
            <el-input v-model.number="form.poundNum">
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
          <el-form-item label="魔王契约"
                        v-if="form.poundage.indexOf('mail') != -1">
            <el-radio-group v-model="form.cont">
              <el-radio label="true">有</el-radio>
              <el-radio label="false">无</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>

    <div>
      <h1>获得金币</h1>
      <div class="resText">{{calcYxb + 'W'}}</div>
    </div>
    <div>
      <h1>等于折扣</h1>
      <div class="resText">{{calcDis + '折'}}</div>
    </div>
    <div>
      <h1>折合代币</h1>
      <div class="resText">{{calcDb + '元'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        rmb: 0,
        yxb: 0,
        bl: 0,
        poundage: [],
        cont: 'false',
        poundNum: 0
      }
    }
  },
  computed: {
    calcDis () {
      if (this.form.yxb == 0 || this.form.bl == 0) {
        return 0
      }

      if (this.form.poundage.length == 0) {
        return ((100 / this.form.yxb) / (this.form.bl * 0.01) * 10).toFixed(1)
      } else if (this.form.poundage.length == 1) {
        if (this.form.poundage.indexOf('mail') != -1) {
          let mailNum = this.form.cont == 'false' ? 0.95 : 0.97
          return (((100 / this.form.yxb) * mailNum) / (this.form.bl * 0.01) * 10).toFixed(1)
        } else {
          return ((100 / this.form.yxb) / (this.form.bl * 0.01 * ((100 - this.form.poundNum) / 100)) * 10).toFixed(1)
        }
      } else {
        let mailNum = this.form.cont == 'false' ? 0.95 : 0.97
        return (((100 / this.form.yxb) * mailNum) / (this.form.bl * 0.01 * ((100 - this.form.poundNum) / 100)) * 10).toFixed(1)
      }
    },
    calcYxb () {
      if (this.form.poundage.length == 0) {
        return this.form.rmb * this.form.yxb
      } else if (this.form.poundage.length == 1) {
        if (this.form.poundage.indexOf('mail') != -1) {
          let mailNum = this.form.cont == 'false' ? 0.95 : 0.97
          return (this.form.rmb * this.form.yxb) * mailNum
        } else {
          return (this.form.rmb * this.form.yxb) * ((100 - this.form.poundNum) / 100)
        }
      } else {
        let mailNum = this.form.cont == 'false' ? 0.95 : 0.97
        return (this.form.rmb * this.form.yxb) * ((100 - this.form.poundNum) / 100) * mailNum
      }
    },
    calcDb () {
      return this.calcYxb * this.form.bl * 0.0001
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/index'
.resText
  font-size 30px
  color black
  margin 10px 0
.page-container
  display flex
  justify-content space-evenly
</style>
