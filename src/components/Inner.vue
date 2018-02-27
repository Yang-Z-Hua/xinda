<template>
  <div>
    <div class="head-1">

    </div>
    <router-view></router-view>
    <div class="foot-1">
      <div class="mmm-1">
        <ul>关于我们</ul>
        <li>联系我们：contact@xinkeher.com</li>
        <li>公司地址：北京市朝阳区大望路soho现代城</li>
        <li>官方客服电话:010-83421842</li>
      </div>
    </div>    
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
<style scoped lang='less'>
.head-1{
  width: 1200px;

}
  .foot-1{
    height: 200px;
    background-color: #f8f8f8;
  }
  .foot-1 .mmm-1{
    width: 1200px;
    padding-left: 25px;
    overflow: hidden;
    margin: 0 auto;
    line-height: 1;
    li{
      font-size: 12px;
      margin-top: 12px;
    }
    ul{
      font-size: 16px;
      margin: 38px 0;
    }
  }
</style>
