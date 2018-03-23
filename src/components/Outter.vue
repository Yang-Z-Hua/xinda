<template>
  <div>
    <div class="head-2">
      <img src="../assets/images/logo.jpg" alt="" @click="tiao">
      <ul>{{tb}}</ul>
    </div>
    <div class="middl-2">
      <div class="whit">
        <div class="bt">
          <span><router-link to="/inner/shoujihuiyuanzhongxin"><</router-link></span>
          <span>{{phoneTittle}}</span>
        </div>
        <router-view></router-view>
        <div class="midd"></div>
        <div class="right">
          <ul>{{ask}}</ul>
          <ul>
            <router-link :to="de">{{meth}}>></router-link>
          </ul>
          <img src="../assets/images/zhuce_03.png" alt="">
        </div>
      </div>
    </div>
    <div class="db">
      <ul>{{ask}}</ul>
      <ul><router-link :to="de">{{meth}}</router-link></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      ask: "",
      meth: "",
      tb: "",
      de: "",
      phoneTittle: "",
      arr: [
        require("../assets/images/close.png"),
        require("../assets/images/open.png")
      ]
    };
  },
  methods: {
    tiao() {
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less'>
.d5 {
  position: relative;
  img {
    position: absolute;
    left: 260px;
    top: 5px;
    width: 25px;
  }
}
@media screen and (min-width: 768px) {
  .db {
    display: none;
  }
  .head-2 {
    img {
      cursor: pointer;
    }
    width: 1200px;
    margin: 25px auto;
    display: flex;
    ul {
      border-left: 1px solid #b4b4b4;
      font-size: 18px;
      line-height: 47px;
      padding-left: 25px;
      margin-left: 25px;
    }
  }
  .middl-2 {
    height: 650px;
    background: #f5f5f5;
    overflow: hidden;
    .whit {
      width: 1200px;
      height: 435px;
      margin: 42px auto;
      background: white;
      display: flex;
      .bt {
        display: none;
      }
      .right {
        margin-top: 30px;
        ul {
          margin-bottom: 15px;
        }
        ul:nth-child(2) {
          color: #349ad7;
        }
      }
      .midd {
        height: 260px;
        border-left: 1px solid #dadada;
        margin: 50px 168px;
      }
    }
  }
  .zj {
    display: flex;
    padding: 50px 0 0 145px;
    .tip{
      color: red
    }
    .d2 input,
    .d3 input {
      width: 172px;
    }
    .d2 img {
      vertical-align: middle;
      margin-left: 36px;
      margin-top: -2px;
      cursor: pointer;
    }
    .d3 span.qq {
      border: 1px solid;
      color: #2693d4;
      font-size: 16px;
      padding: 4.5px 12px;
      margin-left: 10px;
      vertical-align: middle;
      border-radius: 4px;
    }
    .d6 {
      font-size: 17px;
      border: 1px solid;
      color: #2693d4;
      width: 290px;
      text-align: center;
      line-height: 34px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .zj input {
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 32px;
    width: 280px;
    margin-bottom: 18px;
    padding-left: 10px;
  }
  a {
    text-decoration: none !important;
  }
}
@media screen and (max-width: 768px) {
  .head-2 {
    display: none;
  }
  .db {
    background: #4d4d4d;
    height: 69px;
    width: 100% !important;
    color: white;
    display: flex;
    position: absolute;
    top: 500px;
    line-height: 69px;
    padding: 0 20px;
    box-sizing: border-box;
    ul:nth-child(2) {
      margin: 0 0 0 auto;
      background: #2693d4;
      height: 45px;
      line-height: 45px;
      padding: 0 30px;
      margin-top: 12px;
      a {
        color: white;
      }
    }
  }
  .middl-2 {
    // height: 100vh;
    background: #f8f8f8;
    overflow: hidden;
    .whit {
      .bt {
        height: 58px;
        background: #e5e5e5;
        line-height: 58px;
        font-size: 32px;
        span:nth-child(1) {
          position: absolute;
          left: 10px;
          a {
            color: black;
          }
        }
        span:nth-child(2) {
          text-align: center;
          display: block;
          font-size: 20px;
        }
      }
      margin: 0 auto;
      // background: white;
      display: block;
      .right {
        display: none;
      }
      .left {
        margin: 0 auto;
      }
      .midd {
        display: none;
      }
    }
  }
  .zj {
    display: flex;
    padding: 40px 0 250px;
    margin: 0 auto;
    .d2 input,
    .d3 input {
      width: 172px;
    }
    .d2 img {
      vertical-align: middle;
      margin-left: 36px;
      margin-top: -2px;
      cursor: pointer;
    }
    .d3 span.qq {
      border: 1px solid;
      color: #2693d4;
      font-size: 18px;
      padding: 5px 10px;
      margin-left: 10px;
      vertical-align: middle;
      border-radius: 4px;
    }

    .d6 {
      font-size: 17px;
      border: 1px solid;
      color: white;
      background: #2693d4;
      width: 95%;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 35px;
    }
  }
  .zj input {
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 40px;
    width: 95%;
    margin-bottom: 18px;
    padding-left: 10px;
  }
  a {
    text-decoration: none !important;
  }
}
</style>
