<template>
  <div>
    <router-view></router-view>
    <div class="bt">首页/支付</div>
    <div class="stat">{{mess}}</div>
    <div class="gre">
        <img :src="imgSrc">
        <div class="nr">
            <ul>{{mess}}!</ul>
            <li>{{zfzt}}<br><span :class="wd">{{span}}</span></li>
            <p>如有问题，请联系客服：<span >010-83421842</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      mess: "支付失败",
      imgSrc: require("../assets/images/fail.png"),
      zfzt: "支付未成功：让我们再试一次吧！",
      span: "返回支付首页",
      wd: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@media screen and (min-width: 768px) {
  .bt {
    width: 1200px;
    margin: 25px auto;
    font-size: 14px;
  }
  .stat {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    border-bottom: 1px solid #bcbdbd;
    color: #5caedf;
    padding-bottom: 9px;
  }
  .gre {
    width: 1005px;
    height: 260px;
    background: #f7f7f7;
    margin: 12px auto;
    display: flex;
    align-items: flex-start;
    padding: 123px 0 0 195px;
    img {
      margin-right: 75px;
    }
    ul {
      color: #2494d6;
      font-size: 30px;
    }
    li {
      font-size: 18px;
      margin: 25px 0 10px;
      span.span {
        color: #2494d6;
        border: 1px solid;
        border-radius: 4px;
        padding: 8px 15px;
        font-size: 14px;
      }
    }
    p {
      font-size: 13px;
      span {
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .bt {
    // width: 1200px;
    margin: 25px auto;
    font-size: 14px;
    padding: 0 20px;
  }
  .stat {
    padding: 0 20px;
    margin: 0 auto;
    font-size: 14px;
    border-bottom: 1px solid #bcbdbd;
    color: #5caedf;
    padding-bottom: 9px;
  }
  .gre {
    overflow: hidden;
    background: #f7f7f7;
    margin: 0 auto;
    img {
      margin: 20px auto 0;
      display: block;
    }
    ul {
      color: #2494d6;
      font-size: 30px;
      text-align: center;
    }
    li {
      text-align: center;
      font-size: 18px;
      margin: 25px 0 10px;
      span.span {
        color: #2494d6;
        border: 1px solid;
        border-radius: 4px;
        padding: 8px 15px;
        font-size: 14px;
        margin-top: 20px;
        display: inline-block;
      }
    }
    p {
      text-align: center;
      margin-bottom: 10px;
      font-size: 13px;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
