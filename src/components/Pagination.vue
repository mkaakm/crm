<template>
  <div class="pagination">
    <div class="pagination-first">
      <el-pagination background
                     v-model:currentPage="currentPage2"
                     :page-sizes="[20, 40, 60, 80]"
                     :page-size="20"
                     layout="sizes"
                     :total="1000"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="pagination-second">
      <el-pagination background
                     v-model:currentPage="currentPage2"
                     :page-sizes="[20, 40, 60, 80]"
                     :page-size="20"
                     layout="prev, pager, next"
                     :total="1000"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped>
.pagination{
  display: flex;
  margin-top: 28px;
}
.pagination-first{
  margin-left: -10px;
}
.pagination-second{
  margin-left: 260px;
}
</style>
