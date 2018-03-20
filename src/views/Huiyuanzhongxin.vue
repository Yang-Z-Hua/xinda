<template>
  <div class="public">
    <div class="left">
      <div class="top">
        <p>首页</p>
        <p>/</p>
        <p>个人主页</p>
      </div>
      <div class="middle">
        <div class="middle-top">
          <div><img src="../assets/images/u5086.png" alt=""></div>
          <p>{{sjh}}</p>
        </div>
        <div class="bottom">
          <router-link to="/Huiyuanzhongxin/Huiyuanzhongxinindex" tag="div">
            <div  :class="sty" v-on:click="foo">
              <img src="../assets/images/u5092.png" alt="">
              <p>我的订单</p>
            </div>
          </router-link>
          <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinUser"  tag="div">
            <div :class="styl" v-on:click="foq">
              <img src="../assets/images/u5098.png" alt="">
              <p>用户评价</p>
            </div>
          </router-link>
          <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinAccount"  tag="div">
            <div :class="style" v-on:click="foa">
              <img src="../assets/images/u5102.png" alt="">
              <p>账户设置</p>
            </div>
          </router-link>
        </div>
      </div>
      
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      sty: "dd",
      styl: "pj",
      style: "pj",
      sjh: ""
    };
  },
  methods: {
    foo: function() {
      this.sty = "dd";
      this.style = "pj";
      this.styl = "pj";
      sessionStorage.setItem("key", 1);
    },
    foq: function() {
      (this.styl = "dd"), (this.sty = "pj"), (this.style = "pj");
      sessionStorage.setItem("key", 2);
    },
    foa: function() {
      (this.style = "dd"), (this.sty = "pj"), (this.styl = "pj");
      sessionStorage.setItem("key", 3);
    }
  },
  created() {
    if (sessionStorage.getItem("key") == 1) {
      this.sty = "dd";
      this.style = "pj";
      this.styl = "pj";
    }
    if (sessionStorage.getItem("key") == 2) {
      (this.styl = "dd"), (this.sty = "pj"), (this.style = "pj");
    }
    if (sessionStorage.getItem("key") == 3) {
      (this.style = "dd"), (this.sty = "pj"), (this.styl = "pj");
    }
    console.log(sessionStorage.getItem("key"));
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        this.sjh = data.data.data.cellphone;
      });
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width: 768px) {
  .public {
    display: flex;
  }
  .left {
    display: none;
  }
  .top {
    line-height: 14px;
    font-size: 14px;
    p {
      display: inline-block;
    }
  }
  .middle {
    width: 242px;
    height: 526px;
    margin: 13px 0 0 2px;
    .middle-top {
      height: 141px;
      background-color: #e9e9e9;
      div {
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          margin-top: 9px;
        }
      }
      p {
        text-align: center;
      }
    }
    .bottom {
      height: 376px;
      margin-top: 9px;
      background-color: #f7f7f7;
      div {
        height: 50px;
        text-align: center;
        line-height: 50px;
        p {
          font-size: 17px;
          line-height: 17px;
          display: inline-block;
          vertical-align: middle;
          color: black;
          cursor: pointer;
        }
        img {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
  }
  .pj {
    background-color: #f7f7f7;
  }
  .dd {
    background-color: #e9e9e9;
  }
}
@media (min-width: 769px) {
  .public {
    display: flex;
    width: 1200px;
    // height: 650px;
    margin: 26px auto;
  }
  .left {
    display: inline-block;
    width: 244px;
    height: 552px;
  }
  .top {
    line-height: 14px;
    font-size: 14px;
    p {
      display: inline-block;
    }
  }
  .middle {
    width: 242px;
    height: 526px;
    margin: 13px 0 0 2px;
    .middle-top {
      height: 141px;
      background-color: #e9e9e9;
      div {
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          margin-top: 9px;
        }
      }
      p {
        text-align: center;
      }
    }
    .bottom {
      height: 376px;
      margin-top: 9px;
      background-color: #f7f7f7;
      div {
        height: 50px;
        text-align: center;
        line-height: 50px;
        p {
          font-size: 17px;
          line-height: 17px;
          display: inline-block;
          vertical-align: middle;
          color: black;
          cursor: pointer;
        }
        img {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
  }
  .pj {
    background-color: #f7f7f7;
  }
  .dd {
    background-color: #e9e9e9;
  }
}
</style>
