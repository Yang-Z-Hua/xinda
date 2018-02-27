<template>
  <div id="app">
    <h1>公共顶部</h1>
    <router-link to="/outter/register">注册</router-link>
    <router-view></router-view>
    <h1>公共底部</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding: 0;margin: 0;} 
</style>
