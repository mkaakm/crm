<template>
  <div class="pagination">
    <div class="pagination-left">
      <el-pagination background
                     v-model:currentPage="currentPage2"
                     :page-sizes="[20, 40, 60, 80]"
                     :page-size="20"
                     :hide-on-single-page="value"
                     :total="5"
                     layout="sizes"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="pagination-right">
      <el-pagination background
                     v-model:currentPage="currentPage2"
                     :page-sizes="[20, 40, 60, 80]"
                     :page-size="20"
                     :hide-on-single-page="value"
                     :total="5"
                     layout="prev, pager, next"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationClients"
}
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 28px;
}
.pagination-left{
  margin-left: -10px;
}
.pagination-right{
  margin-left: 400px;
}
</style>
