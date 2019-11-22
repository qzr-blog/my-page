<template>
  <el-dialog title="登录"
             :modal-append-to-body="false"
             :visible.sync="dialongShow">

    <el-form :model="loginForm"
             label-width="100px">

      <el-form-item label="用户名"
                    prop="name">
        <el-input placeholder="请输入用户名"
                  v-model="name"
                  clearable></el-input>
      </el-form-item>
      
      <el-form-item label="密码"
                    prop="name">
        <el-input placeholder="请输入密码"
                  v-model="password"
                  show-password></el-input>
      </el-form-item>

    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary"
                 @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() dialongShow: boolean = false;

  loginForm: any = "";
  password: number = 0;
  name: string = "";
}
</script>

<style lang='stylus' scoped></style>