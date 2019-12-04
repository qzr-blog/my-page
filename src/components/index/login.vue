<template class="login-box">
  <el-dialog title="登录"
             :modal-append-to-body="false"
             :visible="signShow">

    <el-form :model="loginForm"
             label-width="100px">

      <el-form-item label="用户名"
                    prop="name">
        <el-input placeholder="请输入用户名"
                  v-model="loginForm.name"
                  clearable></el-input>
      </el-form-item>

      <el-form-item label="密码"
                    prop="name">
        <el-input placeholder="请输入密码"
                  v-model="loginForm.password"
                  show-password></el-input>
      </el-form-item>

    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary"
                 @click="signup">注 册</el-button>
      <el-button type="primary"
                 @click="check">登 录</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  loginForm: any = {
    name: "",
    password: ""
  };

  get signShow() {
    return this.$store.getters['page/getSignShow']
  }

  check() {
    this.$store.dispatch("user/login", {
      name: this.loginForm.name,
      password: this.loginForm.password
    });
  }

  signup() {
    this.$api.basic.signUp({
      name: this.loginForm.name,
      password: this.loginForm.password
    }).then((res: any) => {
      console.log(res)
    })
  }

  cancel() {
    this.$store.commit('page/SET_SIGNSHOW', false)
  }
}
</script>

<style lang='stylus' scoped>
.login-box
  z-index 10
</style>