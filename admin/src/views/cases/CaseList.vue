<template>
  <div>
    <avue-crud
        v-if="option.column"
        :page="page"
        :data="data.data"
        :option="option"
        :table-loading="option.loading"
        @row-save="create"
        @row-update="update"
        @row-del="remove"
        @on-load="changePage"
        @sort-change="changeSort"
        @search-change="search"

    >
      <template slot="display" slot-scope="scope">
        <span class="el-tag circle tag-success" v-if="scope.row.display" >√</span>
        <span class="el-tag circle tag-danger" v-if="!scope.row.display" >×</span>
      </template>
      <template slot="click" slot-scope="scope">
        <span class="el-tag circle tag-success" v-if="scope.row.click" >√</span>
        <span class="el-tag circle tag-danger" v-if="!scope.row.click" >×</span>
      </template>
      <template slot="recommend" slot-scope="scope">
        <span class="el-tag circle tag-success" v-if="scope.row.recommend" >√</span>
        <span class="el-tag circle tag-danger" v-if="!scope.row.recommend" >×</span>
      </template>
    </avue-crud>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Main from "@/views/Main.vue";

@Component({})
export default class ProductList extends Main {
  resource = "cases";

  async created() {
    this.fetchOption();
    this.fetch();
  }


}
</script>

<style scoped></style>
