<template>
  <div class="zj">
      <div class="left">
        <ul class="d1"><input type="text"></ul>
        <ul class="d5"><input type="text"></ul>
        <ul class="d2"><input type="text"></ul>
        <ul class="d3"><input type="text"><span>忘记密码？</span></ul>
        <ul class="d6">立即登录</ul>
      </div>   
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    this.$parent.ask = "还没有账号？";
    this.$parent.meth = "立即注册";
    this.$parent.tb = "欢迎登录";
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
div div ul.d3 input {
  display: none !important;
}
div div ul.d3 {
  margin: 0 0 20px 160px !important;
  span {
    border: none !important;
  }
}
</style>
