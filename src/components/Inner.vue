<template>
  <div>
    <h3>与首页类似的公共头部</h3>
    <router-view></router-view>
    <h3>与首页类似的公共脚部</h3>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
