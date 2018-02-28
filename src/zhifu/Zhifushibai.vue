<template>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.$parent.mess='支付失败',
    this.$parent.imgSrc=require("../assets/images/fail.png"),
    this.$parent.zfzt='支付未成功：让我们再试一次吧！',
    this.$parent.span='返回支付首页',
    this.$parent.wd='span'
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
