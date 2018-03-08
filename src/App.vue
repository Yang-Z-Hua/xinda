<template>
  <div id="app">
    <div class="head">
      <ul class="mmm">
        <div class="left">
          <li><router-link to="/inner/huiyuanzhongxin">{{user}}</router-link> 欢迎来到信达！</li>
          <li @click="logOut">{{tuichu}}</li>
          <li><a href="#/outter/login">{{denglu}}</a></li>
          <li><a href="#/outter/register">{{ljzc}}</a></li>
        </div>
        <div class="right">
          <router-link to="/inner/gouwuche">购物车<span>{{number}}</span>件</router-link>
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
  data() {
    return {
      user: "",
      denglu: "登录",
      ljzc: "立即注册",
      tuichu: "",
      number:''
    };
  },
  created() {
    
  },
  methods: {
    logOut() {
      this.ajax
        .post("/xinda-api/sso/logout", this.qs.stringify({}))
        .then(data => {});
      this.user = "";
      this.tuichu = "";
      this.denglu = "登录";
      this.ljzc = "立即注册";
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang='less'>
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
.mmm .left li:nth-child(2) {
  cursor: pointer;
}
.mmm .left li {
  margin-right: 18px;
}
.mmm .right {
  display: flex;
  margin: 0 0 0 auto;
  a {
    color: black;
    span {
      color: #2693d4;
      padding: 0 4px;
    }
  }
}
.mmm .right li {
  color: #2693d4;
  margin-left: 17px;
}
.mmm .right ul {
  cursor: pointer;
}
.foot {
  height: 41px;
  background-color: #cbcccc;
  text-align: center;
  line-height: 41px;
  font-size: 14px;
}
a {
  text-decoration: none;
  color: #2693d4;
}
</style>
