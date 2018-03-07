<template>
  <div id="app">

    <div class="head">
      <ul class="mmm">
        <div class="left">
          <li><router-link to="/inner/huiyuanzhongxin">{{user}}</router-link> 欢迎来到信达！</li>
          <li>{{tuichu}}</li>
          <li><a href="#/outter/login">{{denglu}}</a></li>
          <li><a href="#/outter/register">{{ljzc}}</a></li>
        </div>
        <div class="right">
          <ul>购物车<span>0</span>件</ul>
          <li>服务商入口</li>
        </div>
      </ul>
    </div>
    <router-view></router-view>    
        <div class="foot">ⒸCopyright 2016北京信达科技有限公司 京ICP备 16011621号</div>  
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      user:'',
      denglu:'登录',
      ljzc:'立即注册',
      tuichu:''
    }

  }
}


</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  min-width: 1200px;
}
.head {
  height: 35px;
  background-color: #f2f2f2;
  line-height: 35px;
}
.mmm {
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  display: flex;
}
.mmm .left {
  display: flex;
  color: #2693d4;
}
.mmm .left li:nth-child(1) {
  color: black;
}
.mmm .left li {
  margin-right: 18px;
}
.mmm .right {
  display: flex;
  margin: 0 0 0 auto;
}
.mmm .right li {
  color: #2693d4;
  margin-left: 17px;
}
.foot {
  height: 41px;
  background-color: #cbcccc;
  text-align: center;
  line-height: 41px;
  font-size: 14px;
}
a{
  text-decoration: none;
  color: #2693d4;
}
</style>
