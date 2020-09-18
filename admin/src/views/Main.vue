<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        style="height: 100vh"
        :default-active="$route.path"
        mode="vertical"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu
          v-for="(item, i) in menu.items"
          :key="`menu-item-${i}`"
          :index="`menu${i}`"
        >
          <template slot="title">
            <i :class="`iconfont ${item.icon}`"></i>
            <span>&nbsp;{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(t, k) in item.items"
            :key="`menu-item-${i}-${k}`"
            :index="t.path"
            >{{ t.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header><h3>中和红旗官网管理后台</h3></el-header>
      <el-main height>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
@import "https://at.alicdn.com/t/font_2071910_6z7g9wefrqa.css";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import http from "@/http";

@Component({})
export default class Main extends Vue {
  resource: any = "";
  menu: any = {
    items: [
      {
        title: "产品管理",
        icon: "icon-pc",
        items: [
          { title: "产品列表", path: "/products/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },
      {
        title: "新闻资讯",
        icon: "icon-news",

        items: [
          { title: "新闻列表", path: "/news/list" },
          { title: "新闻分类", path: "/news/type/list" },
        ],
      },
      {
        title: "经典案例",
        icon: "icon-caseseriesand",
        items: [
          { title: "案例列表", path: "/cases/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },

      {
        title: "解决方案",
        icon: "icon-solution",
        items: [
          { title: "产品列表", path: "/products/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },
      {
        title: "技术支持",
        icon: "icon-solution",
        items: [
          { title: "产品列表", path: "/products/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },
      {
        title: "红旗教育",
        icon: "icon-solution",
        items: [
          { title: "产品列表", path: "/products/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },
      {
        title: "关于我们",
        icon: "icon-solution",
        items: [
          { title: "产品列表", path: "/products/list" },
          { title: "类型管理", path: "/products/type/list" },
        ],
      },
      {
        title: "网站设置",
        icon: "icon-solution",
        items: [
          { title: "用户管理", path: "/products/list" },
          { title: "角色管理", path: "/products/type/list" },
          { title: "权限管理", path: "/products/type/list" },
        ],
      },
    ],
  };
  $http: any = http;
  data: any = {};
  page: any = {
    total: 0,
    pagerCount: 5,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [5, 10, 20, 30, 50],
    layout: "total, sizes, prev, pager, next, jumper",
    background: true,
  };
  option: any = {
    title: "",
    // dialogType:"drawer",
    index: true,
    indexLabel: "序号",
    loading: true,
    translate: false,
    enter: true,
    column: [
      {
        prop: "createdAt",
        label: "添加时间",
        sortable: true,
        search: true,
        type: "datetime",
        editDisabled: true,
        editDetail: false,
        editDisplay: false,
        addDisplay: false,
        searchRange: true,
        format: "yyyy-MM-DD HH:mm:ss",
        tip: "默认为当前时间",
      },
    ],
    search: {
      span: 4,
    },
  };
  query: any = {
    limit: 10,
  };

  async setResource(str: any) {
    this.resource = str;
  }

  async search(where: any, done: any) {
    this.option.loading = true;
    // [{ createdAt: { $gt: startTime } }, { createdAt: { $lt: endTime } }] }
    if (where["createAt"]) {
      where.unshift({
        createAt: {
          gt: where.createAt[0],
          lt: where.createAt[1],
        },
      });
    }

    for (let k in where) {
      if (k == "createdAt") {
        where[k] = {
          $gt: where[k][0],
          $lt: where[k][1],
        };
        continue;
      }
      const field = this.option.column.find(
        (v: { prop: string }) => v.prop === k
      );

      if (field.regex) {
        where[k] = { $regex: where[k] };
      }
    }

    this.query.where = where;
    this.fetch();
    done();
  }

  async changeSort({ prop, order }: any) {
    this.option.loading = true;
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1,
      };
    }
    this.fetch();
  }

  async changePage({ pageSize, currentPage }: any) {
    this.option.loading = true;
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async create(row: any, done: any) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功!");
    this.fetch();
    done();
  }

  async update(row: any, index: any, done: any) {
    this.option.loading = true;
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功!");
    this.fetch();
    done();
  }

  async remove(data: any) {
    this.option.loading = true;
    try {
      await this.$confirm(`是否确认删除名称为：${data.name}`);
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${data._id}`);
    this.$message({
      type: "success",
      message: "删除成功!",
    });
    this.fetch();
  }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option.title = res.data.title;
    this.option.column = res.data.column.concat(this.option.column);
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.data = res.data;
    this.option.loading = false;
  }
}
</script>
<style lang="scss">
.el-tag {
  font-size: 16px;
}

.circle {
  background: none;
  border-radius: 50%;
}

.tag-success {
  border: rgb(110, 197, 67);
  color: rgb(110, 197, 67);
}

.tag-danger {
  border: rgb(245, 108, 108);

  color: rgb(245, 108, 108);
}
</style>
