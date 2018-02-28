<template>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.$parent.mess='支付成功',
    this.$parent.imgSrc=require("../assets/images/success.png"),
    this.$parent.zfzt='我们将尽快确认您的付款信息。',
    this.$parent.span='',
    this.$parent.wd=''
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
