<script setup>
import {RouterView} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import router from "./router";

axios.defaults.withCredentials = true
axios.interceptors.response.use({}, err => {
  if (err && (err.response['status'] === 401 || err.response['status']=== 419)) {
    const token = localStorage.getItem('x_xsrf_token')
    if (token) {
      localStorage.removeItem('x_xsrf_token')
    }
    router.push({name: 'login'})
    window.location.reload();
  }
})
</script>

<template>
  <div class="p-5">
    <navbar></navbar>
    <router-view></router-view>
  </div>

</template>
<script>
import 'bootstrap/dist/js/bootstrap'
import navbar from "@/components/navbar.vue";

export default {
  name: 'App',
  data() {
    return {
      token: null
    }
  },
  mounted() {
    this.getToken()

  },
  updated() {
    this.getToken()
  },
  methods: {
    getToken() {
      if (localStorage.getItem('x_xsrf_token')) {
        this.token = localStorage.getItem('x_xsrf_token')
      }
    },
  },
  components: {
    navbar
  }
}
</script>
<style scoped>

</style>
