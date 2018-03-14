<template>
  <div id="app" @scroll="wait()">
    <div class="head">
      <ul class="mmm">
        <div class="left">
          <li><router-link to="/inner/huiyuanzhongxin">{{user}}</router-link> 欢迎来到信达！</li>
          <li @click="logOut">{{tuichu}}</li>
          <li><a href="#/outter/login">{{denglu}}</a></li>
          <li><a href="#/outter/register">{{ljzc}}</a></li>
        </div>
        <div class="right">
          <router-link :class="sty" to="/inner/gouwuche">购物车<span>{{number}}</span>件</router-link>
          <li>服务商入口</li>
        </div>
      </ul>
    </div>
    <router-view></router-view>    
    <div class="foot">ⒸCopyright 2016北京信达科技有限公司 京ICP备 16011621号</div>  
    <div :class="status">
      <img src="../src/assets/images/wait.jpg" alt="">
      <ul>正在加载，请稍等....</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: undefined,
      denglu: "登录",
      ljzc: "立即注册",
      tuichu: "",
      number: "0",
      sty: "hide",
      status: ""
    };
  },
  created() {
    // window.onscroll=this.wait;
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        if (data.data.data) {
          this.user = data.data.data.cellphone;
          (this.denglu = ""), (this.ljzc = ""), (this.tuichu = "[退出]");
          this.sty = "show";
        } else {
          this.sty = "hide";
        }
      });
    this.ajax.post("/xinda-api/cart/list", this.qs.stringify({})).then(data => {
      console.log("购物车", data.data.data.length);
      this.number = data.data.data.length;
    });
  },
  methods: {
    wait() {
      window.scrollTo(0, 0);
    },
    logOut() {
      this.ajax
        .post("/xinda-api/sso/logout", this.qs.stringify({}))
        .then(data => {});
      this.user = "";
      this.tuichu = "";
      this.denglu = "登录";
      this.sty = "hide";
      this.ljzc = "立即注册";
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang='less'>
.wait1 {
  display: none;
}
.Lwait {
  cursor: wait !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background-color: w;
  ul {
    display: none;
  }
  img {
    display: none;
  }
}
.wait {
  cursor: wait !important;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 12;
  opacity: 0.8;
  ul {
    text-align: center;
  }
  img {
    // position: absolute;
    // top: 30%;
    // left: 50%;
    display: block;
    margin: 40vh auto 0;
  }
}
@media screen and (min-width: 768px) {
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
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
}
@media screen and (max-width: 768px) {
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .head {
    display: none;
  }

  .foot {
    display: none;
  }
  a {
    text-decoration: none;
    color: #2693d4;
  }
}
</style>
