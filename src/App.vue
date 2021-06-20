<template>
  <div id="app">
      <div class="bg-red text-yellow-600"> 123123</div>
      <button @click="logout">注销</button>
      <Property/>
  </div>
</template>

<script>
import Property from "./pages/property.vue"

export default {
  name: 'App',
  components: {
    Property
  },
  data(){
    return { user:"xiaoyue" }
  },
  provide() {
    return {
      user: this.user
    }
  },
  methods: {
    logout() {
      alert('zhuxiao')
      this.user = "已注销"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
