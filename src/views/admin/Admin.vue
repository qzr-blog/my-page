<template>
  <div class="page-container">
    <el-table :data="tableData"
              border
              style="width: 100%">
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
                     size="small">编辑</el-button>
          <el-button type="text"
                     size="small"
                     @click="deleteInfo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  $api: any;

  handleClick(id: any) {
    console.log(id);
  }

  deleteInfo(data: any) {
    this.$api.info.delete({id: data.id}).then((res:any) => {
      console.log(res)
      this.getOverview()
    })
  }

  getOverview() {
    this.$api.basic.getOverview().then((res: any) => {
      this.tableData = res.data;
    });
  }

  mounted() {
    this.getOverview()
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/index'
</style>