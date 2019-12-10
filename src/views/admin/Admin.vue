<template>
  <div class="page-container">
    <div>
      <div class="table-container">
        <div class="table-box">
          <el-table :data="tableData"
                    border
                    stripe>
            <el-table-column fixed
                             prop="title"
                             label="标题"
                             width="150">
            </el-table-column>
            <el-table-column prop="time"
                             label="发布时间"
                             width="120">
            </el-table-column>
            <el-table-column label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"
                           type="text"
                           size="small">查看</el-button>
                <el-button type="text"
                           @click="editInfo(scope.row)"
                           size="small">编辑</el-button>
                <el-button type="text"
                           size="small"
                           @click="deleteInfo(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="table-box">
          <el-table :data="userData"
                    border
                    stripe>
            <el-table-column fixed
                             prop="name"
                             label="用户名"
                             width="150">
            </el-table-column>
            <el-table-column prop="password"
                             label="密码"
                             width="120">
            </el-table-column>
            <el-table-column label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button type="text"
                           size="small"
                            v-if="scope.row.name !== 'const'"
                           @click="delUser(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Admin extends Vue {
  tableData = [
    {
      title: "",
      time: ""
    }
  ];

  userData = [
    {
      name: "",
      password: ""
    }
  ];

  handleClick(data: any) {
    this.$router.push(`/show/${data.id}`);
  }

  deleteInfo(data: any) {
    this.$api.info.delete({ id: data.id }).then((res: any) => {
      this.getOverview();
    });
  }

  editInfo(data: any) {
    this.$router.push({ path: `/admin/edit`, query: { id: data.id } });
  }

  getOverview() {
    this.$api.basic.getOverview().then((res: any) => {
      this.tableData = res.data;
    });
  }

  getAllUser() {
    this.$api.basic.getAllUser().then((res: any) => {
      this.userData = res.data;
    });
  }

  delUser(data: any) {
    console.log(data)
    this.$api.basic.delUser({id: data._id}).then((res: any) => {
      this.getAllUser()
    })
  }

  mounted() {
    this.getAllUser()
    this.getOverview();
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'

.table-box
  z-index 0

.table-container
  display flex
  width 70vw
  justify-content space-around
</style>