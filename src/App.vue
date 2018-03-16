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
    <!-- 手机端公共底部 -->
    <div class="phonePub">
      <div :class="cl[0]" @click="bs(0)">
        <img src="../src/assets/images/home.png" alt="">
        <ul>首页</ul>
      </div>
      <div :class="cl[1]" @click="bs(1)">
        <img src="../src/assets/images/dp.png" alt="">
        <ul>店铺</ul>
      </div>
      <div :class="cl[2]" @click="bs(2)">
        <img src="../src/assets/images/gwc.png" alt="">
        <ul>购物车</ul>
      </div>
      <div :class="cl[3]" @click="bs(3)">
        <img src="../src/assets/images/my.png" alt="">
        <ul>我的</ul>
      </div>
      
    </div>
    <!-- pc公共底部 -->
    <div class="foot">ⒸCopyright 2016北京信达科技有限公司 京ICP备 16011621号</div>  
    <div :class="status">
      <img src="../src/assets/images/logoxz_01.png" alt="">
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
      status: "wait1",
      scroll: "",
      cl: ["", "", "", ""]
    };
  },
  watch: {
    status() {
      if (this.status == "wait" || this.status == "Lwait")
        window.onscroll = function() {
          window.scrollTo(0, 0);
        };
      else {
        window.onscroll = function() {};
      }
    }
  },
  created() {
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        //判断是否登录
        if (data.data.data) {
          this.user = data.data.data.cellphone;
          (this.denglu = ""), (this.ljzc = ""), (this.tuichu = "[退出]");
          this.sty = "show";
        } else {
          this.sty = "hide";
        }
      });
    this.ajax.post("/xinda-api/cart/list", this.qs.stringify({})).then(data => {
      //初始化右上角购物车件数
      this.number = data.data.data.length;
    });
  },
  methods: {
    bs(a) {
      switch (a) {
        case 0: {
          this.$router.push({
            path: "/inner/index"
          });
          break;
        }
        case 1: {
          this.$router.push({
            path: "/inner/dianpu",
            query: {
              all: 1
            }
          });
          break;
        }
        case 2: {
          this.$router.push({
            path: "/inner/gouwuche"
          });
          break;
        }
        case 3: {
          this.$router.push({
            path: "/inner/shoujihuiyuanzhongxin"
          });
          break;
        }
      }
      this.cl = ["", "", "", ""];
      for (let i in this.cl) {
        this.cl[i] = " ";
        this.cl[a] = "cl";
      }
      console.log(this.cl);
    },
    logOut() {
      //退出登录
      this.status = "wait";
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
  ul {
    display: none;
  }
  img {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .wait {
    cursor: wait !important;
    display: block;
    position: fixed;
    top: 183px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 1;
    opacity: 0.9;
    ul {
      text-align: center;
    }
    img {
      display: block;
      margin: 30vh auto 5px;
      animation: chen 1s linear infinite;
    }
    @keyframes chen {
      form {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .phonePub {
    display: none;
  }
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
  .wait {
    cursor: wait !important;
    display: block;
    position: fixed;
    top: -70px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 1;
    opacity: 0.9;
    ul {
      text-align: center;
    }
    img {
      display: block;
      margin: 50vh auto 5px;
      animation: chen 1s linear infinite;
    }
    @keyframes chen {
      form {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  #app {
    padding-bottom: 90px;
  }
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
  .phonePub {
    width: 100vw;
    position: fixed;
    bottom: -2px;
    height: 70px;
    border-top: 1px solid #e0e0e0;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    .cl {
      color: #2694d3;
      img {
        top: 90px;
        filter: drop-shadow(0 -90px 0px #2694d3);
      }
    }
    img {
      width: 25px;
      display: block;
      margin: 10px auto 4px;
      position: relative;
    }
  }
}
</style>
