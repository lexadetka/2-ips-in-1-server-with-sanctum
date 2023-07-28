<script setup>
axios.defaults.withCredentials=true
</script>
<template>
  <div class="w-25">
    <input type="text" class="form-control" placeholder="data1" v-model="data1">
    <input type="text" class="form-control" placeholder="data2" v-model="data2">
    <button class="btn btn-outline-primary" @click="testPatch">testPatch</button>
    <div v-if="postData" class="postData">
      {{postData}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "testPatch",
  data(){
    return{
      postData: null,
      data1: '',
      data2: ''
    }
  },
  mounted() {
    this.getCsrf()
  }
  ,
  methods: {
    testPatch(){
      axios.post('https://api.alexeybychkovski.site/api/patch', {_method:'patch',data1: this.data1, data2: this.data2})
          .then(res=>{
            this.postData = res.data
          })
    },
    getCsrf(){
      axios.get('https://api.alexeybychkovski.site/sanctum/csrf-cookie').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.postData{
  border: 2px solid red;
}
</style>