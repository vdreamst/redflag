<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    >
      <template slot="display" slot-scope="scope">
        <span
          :class="`el-tag circle tag-${
            scope.row.display ? 'success' : 'danger'
          }`"
          >{{ scope.row.display ? "√" : "×" }}</span
        >
      </template>
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Main from "@/views/Main.vue";

@Component({})
export default class List extends Main {
  resource = "producttypes";
  data = [];

  async created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style scoped></style>
