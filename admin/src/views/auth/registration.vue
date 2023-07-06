<template>
<div class="w-25">
  <input type="text" class="form-control" placeholder="name" v-model="name">

  <input type="text" class="form-control" placeholder="email" v-model="email">

  <input type="password" class="form-control" placeholder="password" v-model="password">

  <input type="password" class="form-control" placeholder="confirm password" v-model="password_confirmation">

  <button class="btn btn-success mt-2" @click="registration">registration</button>
</div>
</template>

<script>
import router from "../../router";

axios.defaults.withCredentials=true
import axios from "axios";

export default {
  name: "registration",
  data(){
    return{
      name: '',
      email:'',
      password:'',
      password_confirmation:'',
      errors: null
    }
  },
  mounted() {
    axios.get('http://localhost:8080/sanctum/csrf-cookie')
        .then(r=>{
          console.log(r)
        })
  },
  methods:{
    registration(){
      this.errors = null
      axios.post('http://localhost:8080/register',
          {email: this.email, name: this.name, password: this.password, password_confirmation: this.password_confirmation})
          .then(res=>{
            console.log(res)
            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
            router.push({name:'testPatch'})
          }).catch(err=>{

      })
    }
  }
}
</script>

<style scoped>
.form-control{
  margin-top: 4px ;
}
</style>