<template>
  <div>
    <h5>这是商品详情页面</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  this.ajax.post('/xinda-api/product/package/detail',this.qs.stringify({
        sId:'0cb85ec6b63b41fc8aa07133b6144ea3'
    }))
    .then((data)=>{
      console.log(data)
    });
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
