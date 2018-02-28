<template>
  <div class="zj">
      <div class="left">
        <ul class="d1"><input type="text" placeholder="请输入手机号码"></ul>
        <ul class="d2"><input type="text" placeholder="请输入验证码"></ul>
        <ul class="d3"><input type="text"  placeholder="请输入验证码"><span>点击获取</span></ul>
        <ul class="d4"><input type="text"  placeholder="请输入新密码"></ul>
        <ul class="d5"><input type="text"  placeholder="请再次确认密码"></ul>
        <ul class="d6">确认修改</ul>
      </div>   
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.$parent.ask = "想起密码来了？";
    this.$parent.meth = "立即登录";
    this.$parent.tb = "忘记密码";
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
