<template>
<div>
    <router-link v-if="!token" :to="{name: 'login'}" class="btn btn-outline-primary  nav-btn-link">Login</router-link>
    <router-link v-if="!token" :to="{name: 'registration'}" class="btn btn-outline-primary nav-btn-link">Registration</router-link>
    <router-link v-if="token" :to="{name: 'testPatch'}" class="btn btn-outline-primary nav-btn-link">test patch</router-link>
    <router-link v-if="token" :to="{name: 'testPost'}" class="btn btn-outline-primary nav-btn-link">test post</router-link>
    <button v-if="token" class="btn btn-success" @click="logout">Logout</button>



</div>
</template>

<script>
import axios from "axios";
import router from "../router";


export default {
  name: "navbar",

  data(){
    return{
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
    getToken(){
      this.token = localStorage.getItem('x_xsrf_token')
    },
    logout(){
      axios.post('https://api.alexeybychkovski.site/logout').then(res=>{
        localStorage.removeItem('x_xsrf_token')
        window.location.reload();
        router.push({name: 'login'})
      })

    }
  }
}
</script>

<style scoped>
.nav-btn-link{
  margin-right: 5px;
}
</style>