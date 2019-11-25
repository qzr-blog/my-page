<template>
  <el-dialog title="登录"
             :modal-append-to-body="false"
             :visible="dialongShow">

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
                 @click="check">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() dialongShow: boolean = false;

  loginForm: any = {
    name: "",
    password: ""
  };

  check() {
    this.$emit('update:dialongShow', false)
    this.$api.login({
      name: this.loginForm.name,
      password: this.loginForm.password
    }).then((res: any) => {
      res
    })
  }

  cancel() {
    this.$emit('update:dialongShow', false)
  }
}
</script>

<style lang='stylus' scoped></style>