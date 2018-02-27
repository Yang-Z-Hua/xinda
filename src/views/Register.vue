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
      <div class="midd"></div>
      <div class="right">
        <ul>已有账号？</ul>
        <ul>立即登录>></ul>
        <img src="../assets/images/zhuce_03.png" alt="">
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
  .zj{
    display:flex;
    padding: 50px 0 0 145px;
    .d2 input,.d3 input{
      width: 172px;
    }
    .d3 span{
      border: 1px solid ;
      color: #2693d4;
      font-size: 18px;
      padding: 4.5px 12px;
      margin-left: 10px;
      vertical-align: middle;
      border-radius: 4px
    };
    .d6{
      font-size: 17px;
      border: 1px solid ;
      color: #2693d4;
      width: 282px;
      text-align: center;
      line-height: 34px;
      border-radius: 4px;
    };
    .midd{
      height: 260px;
      border-left: 1px solid #dadada;
      margin: 20px 168px;
    }
  }
  input{
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 34px;
    width: 280px;
    margin-bottom:18px; 
  }
  select{
    width: 78px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 34px;
    margin-bottom:18px; 
  }
</style>
