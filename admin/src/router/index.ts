import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import ProductList from '../views/products/ProductList.vue'
// @ts-ignore
import ProductTypeList from '../views/products/type/List.vue'

import CaseList from "@/views/cases/CaseList.vue";


import NewsList from "@/views/news/NewsList.vue";
import NewsTypeList from "@/views/news/type/List.vue";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      { name: "home", path: "/", component: Home },

      {name: "courses-crud",path: "/products/list",component: ProductList,props: true, },
      {name: "products-crud",path: "/products/type/list",component: ProductTypeList,props: true, },

      {name: "cases-crud",path: "/cases/list",component: CaseList,props: true, },

      {name: "news-crud",path: "/news/list",component: NewsList,props: true, },
      {name: "news-type-crud",path: "/news/type/list",component: NewsTypeList,props: true, },



    ],
  },
];


const router = new VueRouter({
  routes,
});

export default router
