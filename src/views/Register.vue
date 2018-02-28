<template>
    <div class="zj">
      <div class="left">
        <ul class="d1"><input type="text"></ul>
        <ul class="d2"><input type="text"></ul>
        <ul class="d3"><input type="text"><span>点击获取</span></ul>
        <ul class="d4">
          <select name="" id="">
            <option value="">省</option>
          </select>
          <select name="" id="">
            <option value="">市</option>
          </select>
          <select name="" id="">
            <option value="">区</option>
          </select>
        </ul>
        <ul class="d5"><input type="text"></ul>
        <ul class="d6">立即注册</ul>
      </div>   
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    this.$parent.ask='已有账号？';
    this.$parent.meth='立即登录';
    this.$parent.tb='欢迎注册';
    this.$parent.de = "login";
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  
</style>
