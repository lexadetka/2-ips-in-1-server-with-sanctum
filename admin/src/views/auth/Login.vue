<script setup>
axios.defaults.withCredentials = true
import router from "../../router";
</script>
<template>
  <div class="w-25">
    <input type="text" class="form-control" placeholder="login" v-model="email">
    <input type="password" class="form-control" placeholder="password" v-model="password">
    <button class="btn btn-success" @click="login">Login</button>
    <button v-if="token"  class="btn btn-outline-primary" @click="getUser">get user</button>
    <button v-if="token"  class="btn btn-outline-primary" @click="$router.push({name:'testPost'})">Test Post</button>
  </div>
  <div v-if="user" class="mt-3 user-info">
    {{ user }}
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      user: '',
      token: null
    }
  },
    mounted() {
      this.getToken
    },
    methods: {
      getToken(){
        this.token = localStorage.getItem('x_csrf_token')
      },
      async login() {
      axios.get('https://api.alexeybychkovski.site/sanctum/csrf-cookie')
          .then(res => {
            axios.post('https://api.alexeybychkovski.site/login', {email: this.email, password: this.password})
                .then(r => {

                  localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN'])
                  window.location.reload();
                  router.push({name:'testPatch'})
                }).catch(err=>{
              console.log(err.response.data.message)
            })
          })
    },
    getUser() {
      axios.get('https://api.alexeybychkovski.site/api/user')
          .then(res => {
            console.log(res)
            this.user = res.data
          })
    }
  }
 }
</script>

<style scoped>
.user-info {
  border: 2px red solid;
}
</style>