import axios from 'axios'

// import router from "./router"
// import Vue from "vue"

const http = axios.create({
    // baseURL: process.env.VUE_APP_API_URL || "/admin/api"
    baseURL:process.env.VUE_APP_API_URL
})

export default http