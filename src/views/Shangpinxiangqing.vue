<template>
  <div>
    <div class="outer">
      <li class="top"><p>首页/</p><p>{{lei}}</p></li>
      
      
      <!-- 中间主要部分 -->

      <div class="content">
      
      <div class="phone_call" v-show="c1">
        <ul class="phone_call_top">
          <li><p>免费电话咨询</p></li>
          <li @click="close()" class="closenow">X</li>
        </ul>
        <ul class="phone_call_content" v-show="c2">
          <li class="phone_call_type"><img src="../assets/images/callto.png" alt=""></li>
          <li class="phone_call_word">
            <p>输入手机号码</p>
            <p>您接听来电</p>
            <p>被叫方接听</p>
            <p class="phone_call_last">咨询结束</p>
          </li>
          <li class="phone_number">
            <input @blur="checkphone" v-model="phone" type="text" placeholder="请输入手机号">
            <span class="tip">{{phoneTip}}</span>
          </li>
          
          <li class="phone_two">
            <input type="text" v-model="checkp" placeholder="请输入图形验证码" @blur="checkpic">
            <img :src="png" v-on:click='cha'>
            <span class="tip">{{picTip}}</span>
          </li>
          <li class="phone_yanzheng">
            <input type="text" v-model="checky" placeholder="请输入验证码" @blur="checkyan">
            <button>获取验证码</button>
            <span class="tip">{{yanTip}}</span>
          </li>
          <li class="start"><button @click="start()">开始免费咨询</button></li>
          <li class="phone_ok">
            <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</p>
          </li>
        </ul>
        <ul class="call_now" v-show="c3">
          <li class="call_now_1">
            <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</p>
          </li>
          <li class="call_now_2">
            <p>正在为您接通电话</p>
            <p>请您注意接听来电</p>
          </li>
        </ul>
      </div>


        <!-- 左部图片 -->
        <ul class="left"><img :src="img" alt="" @error='defaultImg'></ul>

        <!-- 中间详细介绍 -->

        <ul class="center">
          <li class="cen_title"><h2>{{title1}}</h2></li>
          <li class="introduce"><p>{{info}}</p></li>
          <div class="small_message">
            <li class="price">
              <div class="oldPrice">
                <p>市场价:</p><span>￥{{Price}}.00</span><p>{{unit}}</p>
                <li></li>
              </div>
              <div class="newPrice">
                <p class="price1">价　格:</p><p class="price2">价格 :</p><span>￥{{Pricenow}}.00</span><p>{{unit}}</p>
              </div>  
            </li>
            <div class="type">
              <ul><p>类型:</p></ul>
              <ul>
                <li><p>{{lei}}</p></li>
              </ul>
            </div>
            <li class="area"><p>地区：</p><p>{{arr.providerRegionText}}</p></li>
          </div>
          <div class="num">
            <p>购买数量:</p>
            <li>
              <button @click="n<2?1:n--">-</button>
              <span>{{n}}</span>
              <button @click="n++">+</button>
            </li>
          </div>
          <li class="buy">
            <button class="but_1" @click="buy(n)">立即购买</button>
            <button class="but_2" @click="market(n)">加入购物车</button>
          </li>
        </ul>

        <!-- 右部信息框 -->

        <ul class="right">
          <li class="first">
            <h2>顶级服务商</h2>
            <p>{{provider}}</p>
            <button @click="open()">马上咨询</button>
          </li>
          <li class="second">
            <button @click="goProvider(arr)">查看服务商</button>
          </li>
        </ul>
      </div>

      <!-- 中部广告 -->

      <img src="../assets/images/center.png" alt="" class="guanggao">
      

        <!-- pc端隐藏，微信端显示=========== -->
        <li class="weichat_searve">
          <p>服务商家</p>
          <div></div>
        </li>
        <ul class="weichat_provider">
            <div class="left">
              <li class="logo"><img :src="img2" alt=""></li>
              <li class="glod"><img src="../assets/images/global.png" alt=""></li>
            </div>
            <div class="right">
              <p class="weichat_name">{{provider}}</p>
              <li><span>信誉</span></li>
              <li><span>{{area}}</span></li>
              <li class="two"><p>累计客户服务次数：{{sum}}</p></li>
              <button @click="backShop()">进入店铺</button>
          </div>
          </ul>



      <!-- 下部评价及服务项 -->

      <div class="message">

        <!-- 头部公告样式 -->

        <ul class="m_title">
          <li><p :class="changebg1" @click="bottom1()">服务内容</p><p :class="changebg2" @click="bottom2()">商品评价</p></li>
        </ul>
        <li class="weichat_searve">
          <p>服务介绍</p>
          <div></div>
        </li>


        <!-- 服务详情 -->
        <ul class="provide_message" v-show="show">
          <p v-html="serve"></p>
        </ul>

        <!-- 详细评价 -->

        <div class="appraise" v-show="disshow">
            <ul class="parsent">
              <li class="good"><span>{{goodParsent}}%</span><p>好评 </p></li>
              <div>
                <li><p>好评（{{goodParsent}}%）</p><span></span></li>
                <li><p>中评（{{middleParsent}}%）</p><span></span></li>
                <li><p>差评（{{badParsent}}%）</p><span></span></li>
              </div>
              <li class="buy">
                <p>客户印象</p>
                <p>暂无已添加的印象标签</p>
              </li>
            </ul>
            <ul class="word">
              <li><p>全部评价（{{all}}）</p></li>
              <li><p>好评（{{good}}）</p></li>
              <li><p>中评（{{middle}}）</p></li>
              <li><p>差评（{{bad}}）</p></li>
            </ul>
            <div class="in">
              <ul>
                <li class="appraise_title">
                  <p>评价</p>
                  <p>满意度</p>
                  <p>用户</p>
                </li>
                <li class="button">
                  <button disabled >上一页</button>
                  <p>1</p>
                  <button disabled >下一页</button>
                </li>
              </ul>         
            </div>
        </div>

      <!-- 微信端用户评价 =================== 弹出框  ===============================-->
        <li class="weichat_searve weichat_people">
          <p>用户评价</p>
          <div></div>
        </li>
        <div class="weichat_searve_contact" v-show="v1">
          <ul class="weichat_top">
            <li class="weichat_frist">免费电话咨询</li>
            <li class="xxx" @click="xxx()">X</li>
          </ul>
          <ul class="weichat_call_content" v-show="v2">
            <li class="weichat_p">
              <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</p>
            </li>
            <li class="weichat_number">
              <input type="text" @blur="checkphone1" v-model="phone1" placeholder="请输入手机号">
              <span class="tip">{{phoneTip1}}</span>
            </li>
            <li class="weichat_two">
              <input type="text" v-model="checkp1" placeholder="请输入图形验证码" @blur="checkpic1">
              <img :src="png" v-on:click='cha'>
              <span class="tip">{{picTip1}}</span>
            </li>
            <li class="weichat_yanzheng">
              <input type="text" v-model="checky1" placeholder="请输入验证码" @blur="checkyan1">
              <button>点击获取</button>
              <span class="tip">{{yanTip1}}</span>
            </li>
            <li class="weichat_start"><button @click="free()">免费咨询</button></li>
        </ul>
        <ul class="step_2" v-show="v3">
          <li class="step_2_1">
            <p>本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</p>
          </li>
          <li class="step_2_2">
            <p>正在为您接通电话</p>
            <p>请您注意接听来电</p>
          </li>
        </ul>
        </div>
        <ul class="weichat_click">
          <li class="phone" @click="contact()">
            <img src="../assets/images/call.png" alt="">
            <p>联系商家</p>
          </li>
          <li class="buylater" @click="market(n)"><p>加入购物车</p></li>
          <li class="buynow" @click="buy(n)"><p>立即购买</p></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const defaultImgUrl = require("../assets/images/notFound.jpg");
export default {
  name: "HelloWorld",
  mounted() {
    const that = this;
    window.onresize = function temp() {
      if (document.documentElement.clientWidth < 768) {
        //判断 当前页面的有效宽度
        //shou ji
        that.isPhone = "1";
      } else {
        // pc
        that.isPhone = "0";
      }
    };
  },

  data() {
    return {
      msg: "你瞅啥",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      png: "/xinda-api/ajaxAuthcode",
      phone: "", //手机号
      checkp: "", //图片
      checky: "", //验证码
      phoneTip: "", //手机号提示
      picTip: "", //图片验证提示
      yanTip: "", //验证码提示
      phone1: "", //手机号
      checkp1: "", //图片
      checky1: "", //验证码
      phoneTip1: "", //手机号提示
      picTip1: "", //图片验证提示
      yanTip1: "", //验证码提示
      arr: "",
      title1: "",
      img: "",
      info: "",
      Price: "",
      Pricenow: "",
      unit: "",
      provider: "",
      n: "1",
      currentIndex: -1,
      serve: "",
      all: "",
      goodParsent: "",
      middleParsent: "",
      badParsent: "",
      good: "",
      middle: "",
      bad: "",
      show: true,
      disshow: false,
      changebg2: "",
      changebg1: "num1",
      lei: "",
      area: "",
      sum: "",
      img2: "",
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0,
      v1: 0,
      v2: 0,
      v3: 0,
      v4: 0,
      url: ""
    };
  },
  created() {
    window.scrollTo(0, 0)
    console.log(this.$route.query.newPrice);
    // 商品详情
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({
          sId: this.$route.query.id
        })
      )
      .then(data => {
        this.arr = data.data.data;
        this.title1 = this.arr.product.name;
        this.img = this.imgSrc + this.arr.product.img;
        this.img2 = this.imgSrc + this.arr.provider.providerImg;
        this.info = this.arr.provider.providerInfo;
        this.Price = this.arr.product.marketPrice;
        this.Pricenow = this.$route.query.newPrice;
        this.unit = this.arr.unit;
        this.provider = this.arr.provider.name;
        this.area = this.arr.providerRegionText;
        this.sum = this.arr.providerBusiness.serviceNum;
        this.serve = this.arr.providerProduct.serviceContent;
        this.send(this.title1);
        this.$parent.$parent.status = "wait1";
        if (this.isPhone == "1") {
          setTimeout(() => {
            var service_table = document.querySelector(".message table");
            service_table.style.width = "261pt";
          }, 0);
        }
      });

    // 商品评价接口
    this.ajax
      .post(
        "/xinda-api/product/judge/detail",
        this.qs.stringify({
          serviceId: "efddc8a338944e998ff2a7142246362b"
        })
      )
      .then(data => {
        this.arr1 = data.data.data;
        this.good = this.arr1.goodNum;
        this.middle = this.arr1.midNum;
        this.bad = this.arr1.badNum;
        this.all = this.good + this.bad + this.middle;
        this.goodParsent = this.good * 1 / 1 * this.all;
        this.middleParsent = this.middle * 1 / 1 * this.all;
        this.badParsent = this.bad * 1 / 1 * this.all;
      });
  },

  methods: {
    ...mapActions(["addNum"]),

    defaultImg(e) {
      // 错误图片的代替
      e.target.src = defaultImgUrl;
    },
    test(num) {
      this.currentIndex = num;
    },
    bottom1(eve) {
      this.show = true;
      this.disshow = false;
      this.changebg1 = "num1";
      this.changebg2 = "num2";
    },
    bottom2() {
      this.disshow = true;
      this.changebg2 = "num1";
      this.changebg1 = "num2";
      this.show = false;
    },

    send(back) {
      this.ajax.post("/xinda-api/product/style/list").then(data => {
        var da = data.data.data;
        var x = "";
        var y = "";
        var z = "";
        for (x in da) {
          for (y in da[x].itemList) {
            var erji = da[x].itemList[y];
            for (z in erji.itemList) {
              if (erji.itemList[z].name == back) {
                this.lei = da[x].name;
              }
            }
          }
        }
      });
    },

    // 跳转到服务商页面

    goProvider(arr) {
      this.$router.push({
        path: "/inner/Dianpushouye",
        query: {
          id: this.arr.provider.id
        }
      });
    },

    // 微信跳转店铺首页
    backShop() {
      this.$router.push({
        path: "/inner/Dianpushouye",
        query: {
          id: this.arr.provider.id
        }
      });
    },
    open() {
      this.c1 = true;
      if (this.c4 == 1) {
        this.c3 = true;
      } else {
        this.c2 = true;
      }
    },

    close() {
      this.c1 = 0;
    },
    start() {
      this.c2 = 0;
      this.c3 = 1;
      this.c4 = 1;
    },
    contact() {
      this.v1 = 1;

      if (this.v4 == 0) {
        this.v2 = 1;
      } else {
        this.v3 = 1;
        this.v2 = 0;
      }
    },
    xxx() {
      this.v1 = 0;
      this.phoneTip1 = "";
      this.picTip1 = "";
      this.phoneTip = "";
      this.picTip = "";
    },
    free() {
      if (
        this.phone1 == "" ||
        this.checkp1 == "" ||
        this.checky1 == "" ||
        this.phoneTip1 != "" ||
        this.picTip1 != "" ||
        this.yanTip1 != ""
      ) {
        this.phoneTip1 = "手机号错误！";
        this.picTip1 = "图形验证码错误";
      } else {
        console.log(this.picTip1);
        this.v2 = 0;
        this.v3 = 1;
        this.v4 = 1;
      }
    },
    cha() {
      // 验证码重载
      this.png += " ";
    },
    checkphone() {
      // 加测手机号
      var a = /^1[345789]\d{9}$/;
      if (!a.test(this.phone)) {
        this.phoneTip = "手机号错误！";
      } else {
        this.phoneTip = "";
        return 1;
      }
    },
    checkphone1() {
      // 加测手机号
      var a = /^1[345789]\d{9}$/;
      if (!a.test(this.phone1)) {
        this.phoneTip1 = "手机号错误！";
      } else {
        this.phoneTip1 = "";
      }
    },
    // 验证图形验证码=========
    checkpic() {
      var a = /^\w{4}/;
      if (!a.test(this.checkp)) {
        this.picTip = "图形验证码错误";
      } else {
        this.picTip = "";
      }
    },
    checkpic1() {
      var a = /^\w{4}/;
      if (!a.test(this.checkp1)) {
        this.picTip1 = "图形验证码错误";
      } else {
        this.picTip1 = "";
      }
    },
    // 验证验证码===============
    checkyan() {},
    checkyan1() {},


    // 立即购买============
    buy(n) {
      console.log(this.$route.query.id);
      console.log(this.$route.query.newPrice);
      console.log(this.newPrice)
      // 判断是否登录==============
      this.ajax
        .post("/xinda-api/sso/login-info", this.qs.stringify({}))
        .then(data => {
          if (data.data.status == 0) {
            this.$router.push({
              path: "/outter/login",
              query: {
                id: this.$route.query.id,
                newPrice:this.$route.query.newPrice,
              }
            });
          } else {
            this.ajax
              .post(
                "xinda-api/cart/add",
                this.qs.stringify({
                  id: this.$route.query.id,
                  num: n
                })
              )
              .then(data => {
                this.$router.push({
                  path: "/inner/gouwuche"
                });
                console.log(data.data);
              });
          }
        });
    },

    // 加入购物车=============
    market(n) {
      // 判断是否登录==============
      this.ajax
        .post("/xinda-api/sso/login-info", this.qs.stringify({}))
        .then(data => {
          console.log(this.arr.product.id);
          if (data.data.status == 0) {
            this.$router.push({
              path: "/outter/login",
              query: {
                id: this.$route.query.id
              }
            });
          } else {
            this.ajax
              .post(
                "/xinda-api/cart/add",
                this.qs.stringify({
                  id: this.$route.query.id,
                  num: n
                })
              )
              .then(data => {
                this.ajax
                  .post("/xinda-api/cart/list", this.qs.stringify({}))
                  .then(data => {
                    this.addNum(data.data.data.length);
                    this.$parent.$parent.number = data.data.data.length;
                  });
              });
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.outer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 768px) {
  button {
    outline: none;
    cursor: pointer;
  }
  .top {
    display: flex;
    width: 1200px;
    line-height: 43px;
    font-size: 14px;
    margin: 14px 0 0 0;
    color: #686868;
  }

  // 中间主要部分
  .content {
    width: 1200px;
    display: flex;

    // 电话咨询部分=================

    .phone_call {
      width: 645px;
      height: 424px;
      background-color: #fff;
      position: fixed;
      z-index: 9;
      top: 10%;
      left: 25%;
      .phone_call_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        background-color: #f8f8f8;
        border-bottom: 1px solid #eeeeee;
        li {
          padding: 0 15px;
        }
        .closenow {
          cursor: pointer;
        }
      }
      .phone_call_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .phone_call_type {
          width: 70%;
          img {
            width: 100%;
            margin: 30px 0 16px;
          }
        }
        .phone_call_word {
          width: 83%;
          display: flex;
          justify-content: space-between;
          .phone_call_last {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
        li {
          width: 50%;
        }
        input {
          height: 30px;
          border-radius: 5px;
          border: 1px solid #ccc;
          color: #000;
          padding: 0 1%;
        }
        span {
          color: red;
          line-height: 30px;
          margin-left: 5px;
          position: absolute;
          top: 30px;
          left: -4px;
        }
        .phone_number {
          margin: 33px 0 13px;
          position: relative;
          input {
            width: 100%;
          }
        }
        .phone_two {
          position: relative;
          margin: 13px 0;
          display: flex;
          justify-content: space-between;
          input {
            width: 68%;
          }
        }
        .phone_yanzheng {
          position: relative;
          margin: 13px 0;
          display: flex;
          justify-content: space-between;
          input {
            width: 68%;
          }
          button {
            width: 25%;
            height: 30px;
            border-radius: 5px;
            border: 1px solid #ccc;
            color: #66799f;
            background-color: #f5f4f4;
            outline: none;
          }
        }
        .start {
          margin: 13px 0;
          button {
            width: 100%;
            height: 30px;
            border-radius: 5px;
            background-color: #4eb5ba;
            color: #fff;
            outline: none;
            border: none;
          }
        }
        .phone_ok {
          width: 100%;
          text-align: center;
          margin: 8px 0;
          font-size: 14px;
          color: #666;
        }
      }
      .call_now {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .call_now_1 {
          font-size: 24px;
          color: #000;
          width: 80%;
          margin: 20px 0 30px;
        }
        .call_now_2 {
          widows: 200px;
          height: 120px;
          font-size: 22px;
          color: #4ca8e6;
          p {
            margin: 30px 0;
          }
        }
      }
    }

    // 左部图片

    .left {
      width: 525px;
      img {
        width: 525px;
      }
    }

    // 中间详细介绍

    .center {
      margin-left: 32px;
      width: 379px;
      h2 {
        line-height: 50px;
      }
      p {
        font-size: 13px;
        color: #676767;
      }
      .introduce {
        line-height: 25px;
        text-indent: 2em;
      }
      .small_message {
        .price {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 387px;
          height: 75px;
          background-color: #f7f7f7;
          line-height: 75px;
          padding-left: 8px;
          margin-bottom: 10px;
          div {
            display: flex;
            align-items: center;
            width: 100%;
            height: 18px;
            line-height: 18px;
            p {
              width: 45px;
              margin-right: 5px;
            }
          }
          .oldPrice {
            position: relative;
            p {
              height: 18px;
            }
            span {
              color: #ccc;
            }
            li {
              width: 100px;
              border-top: 1px solid #474747;
              position: absolute;
              left: 50px;
            }
          }
          .newPrice {
            align-content: flex-start;
            .price2 {
              display: none;
            }
            span {
              color: red;
              font-size: 28px;
              font-weight: bold;
            }
          }
        }
        .type {
          display: flex;
          line-height: 27px;
          li {
            line-height: 19px;
            padding: 4px 6px;
            margin-bottom: 5px;
            border: 1px solid #52a5db;
            margin-left: 5px;
            p {
              color: #52a5db;
            }
          }
        }
        .area {
          display: flex;
          margin: 10px 0;
        }
      }
      .num {
        display: flex;
        line-height: 24px;
        li {
          display: flex;
          margin-left: 5px;
          button {
            width: 30px;
            height: 24px;
            outline: none;
            border: 1px solid #ccc;
            background-color: #f7f8fa;
          }
          span {
            width: 48px;
            height: 22px;
            text-align: center;
            border: 1px solid #ccc;
            border-left: none;
            border-right: none;
          }
        }
      }
      .buy {
        margin-top: 15px;
        margin-left: 60px;
        button {
          outline: none;
          border: none;
          font-size: 12px;
          line-height: 25px;
          width: 93px;
          height: 25px;
        }
        .but_1 {
          color: #fff;
          background-color: #2693d4;
          margin-right: 20px;
        }
        .but_2 {
          background-color: #fff;
          border: 1px solid #2693d4;
          color: #2693d4;
        }
      }
    }

    // 右部信息框

    .right {
      width: 198px;
      height: 232px;
      border: 1px solid #2693d4;
      margin: 57px 0 0 54px;
      .first {
        width: 100%;
        height: 158px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
        button {
          width: 88px;
          height: 22px;
          border: 1px solid #2693d4;
          color: #52a5db;
          background-color: #fff;
        }
      }
      .second {
        width: 100%;
        height: 74px;
        background-color: #bdddf2;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 110px;
          height: 30px;
          margin: auto;
          border: none;
          background-color: #2693d4;
          color: #fff;
        }
      }
    }
  }
}

.guanggao {
  margin: 20px 0;
}

// 下部评价及服务项

.weichat_searve {
  display: none;
}
.weichat_provider {
  display: none;
}
.weichat_click {
  display: none;
}
.message {
  width: 1200px;

  .m_title {
    width: 100%;
    border-bottom: 1px solid #ccc;
    line-height: 41px;
    display: flex;
    border: 1px solid #ccc;
    background-color: rgb(240, 238, 238);
    li {
      display: flex;
      text-align: center;
      p {
        width: 135px;
        cursor: pointer;
      }
      .num1 {
        background-color: #2693d4;
        color: #fff;
      }
      .num2 {
        background-color: rgb(240, 238, 238);
        color: black;
      }
    }
  }

  // 服务详情

  .provide_message {
    padding-bottom: 50px;
    padding-top: 50px;
    border: 1px solid #ccc;
    border-top: none;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #676767;
    line-height: 30px;
    margin-bottom: 69px;
    p {
      margin-left: 10px;
    }
  }

  // 详细评价

  .appraise {
    width: 100%;
    .parsent {
      width: 100%;
      height: 120px;
      border: 1px solid #ccc;
      border-top: none;
      display: flex;
      align-items: center;
      li {
        display: flex;
      }
      .good {
        color: #2693d4;
        margin: 0 15px;
        span {
          font-size: 45px;
          font-weight: bold;
        }
        p {
          padding-top: 28px;
          margin-left: 9px;
        }
      }
      div {
        line-height: 25px;
        margin-left: 10px;
        span {
          width: 167px;
          height: 20px;
          background-color: rgba(228, 228, 228, 1);
          margin: 5px;
        }
      }
      .buy {
        height: 80px;
        flex-direction: column;
        margin-left: 500px;
        border-left: 1px solid #ccc;
        padding-left: 30px;
        line-height: 27px;
      }
    }
    .word {
      width: 1200px;
      height: 48px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      display: flex;
      li {
        line-height: 48px;
        text-align: center;
        width: 117px;
        height: 48px;
        border-right: 1px solid #ccc;
      }
    }
    .in {
      width: 1160px;
      height: 500px;
      border: 1px solid #ccc;
      border-top: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      ul {
        width: 1100px;
        padding: 20px;
        border-left: 1px solid #ccc;
        display: flex;
        flex-direction: column;
      }
      li {
        display: flex;
        line-height: 35px;
        justify-content: space-around;
        margin-left: 10px;
      }
      .button {
        justify-content: center;
        text-align: center;
        margin: 10px;
        margin-top: 50px;
        button {
          width: 50px;
          height: 30px;
          outline: none;
          border: 1px solid #ccc;
          margin: 0 5px;
        }
        p {
          width: 25px;
          line-height: 25px;
          border: 1px solid rgb(74, 177, 177);
        }
      }
      .appraise_title {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  // 顶部
  .top {
    display: none;
  }

  // 商品详情部分
  .content {
    position: relative;
    margin-bottom: 100px;
    width: 100%;
    .left {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .center {
      position: absolute;
      width: 100%;
      bottom: -90px;
      .cen_title {
        background-color: black;
        opacity: 0.6;
        color: #fff;
        line-height: 50px;
        padding: 0 10px;
      }
      .introduce {
        background-color: black;
        opacity: 0.6;
        padding: 0 10px 10px;
        p {
          overflow: hidden; /*超出长度的文字隐藏*/
          text-overflow: ellipsis; /*文字隐藏以后添加省略号*/
          white-space: nowrap;
          color: #fff;
          font-size: 15px;
          line-height: 30px;
        }
      }
      .small_message {
        display: flex;
        flex-direction: column-reverse;
        padding: 0 25px;
        border-bottom: 5px solid #ebebeb;
        .price {
          display: flex;
          height: 44px;
          line-height: 44px;
          font-size: 15x;
          flex-direction: row-reverse;
          justify-content: flex-end;
          div {
            display: flex;
          }
          .oldPrice {
            position: relative;
            color: #ccc;
            p {
              display: none;
            }
            li {
              position: absolute;
              width: 100%;
              border-top: 1px solid #ccc;
              top: 22px;
            }
          }
          .newPrice {
            margin-right: 10px;
            .price1 {
              display: none;
            }
            .price2 {
              display: block;
            }
            span {
              color: red;
              font-size: 22px;
              font-weight: bold;
            }
          }
        }
        .area {
          display: flex;
          height: 44px;
          line-height: 44px;
          font-size: 15x;
          border-bottom: 1px solid #ccc;
        }
        .type {
          display: none;
        }
      }
      .num {
        display: none;
      }
    }
    .right {
      display: none;
    }
  }

  // 服务商
  .message {
    .m_title {
      display: none;
    }
    .provide_message {
      padding-top: 0;
      margin-bottom: 0;
      border: none;
      border-bottom: 5px solid #ebebeb;
    }
  }
  .weichat_searve {
    width: 100%;
    display: block;
    position: relative;
    border-bottom: 2px solid #2393d3;
    line-height: 35px;
    margin-top: 10px;
    font-size: 18px;
    p {
      margin-left: 2%;
    }
    div {
      position: absolute;
      left: 8%;
      bottom: 0px;
      width: 0px;
      height: 0px;
      border-left: 2px solid transparent;
      border-top: none;
      border-right: 2px solid transparent;
      border-bottom: 2px solid #2393d3;
    }
  }

  // 弹出框部分============================================
  .weichat_searve_contact {
    position: fixed;
    top: 20%;
    width: 90%;
    margin: 0 5%;
    height: 250px;
    background-color: #fff;
    .weichat_top {
      display: flex;
      width: 100%;
      height: 35px;
      background-color: #4eb5ba;
      li {
        text-align: center;
        line-height: 34px;
        color: #fff;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
      }
      .weichat_frist {
        width: 95%;
      }
      .xxx {
        width: 5%;
      }
    }
    .weichat_call_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        border: 1px solid #dcdcdc;
        color: #dcdcdc;
        line-height: 30px;
        border-radius: 4px;
        margin: 7px 0;
        padding: 0 1%;
      }
      li {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        span {
          position: absolute;
          font-size: 12px;
          color: red;
          top: 38px;
          left: 8px;
        }
      }
      .weichat_p {
        width: 88%;
        font-size: 12px;
      }
      .weichat_number {
        input {
          width: 100%;
        }
      }
      .weichat_two {
        input {
          width: 70%;
        }
      }
      .weichat_yanzheng {
        input {
          width: 70%;
        }
        button {
          width: 23%;
          height: 28px;
          border: 1px solid #5dbbc0;
          color: #5dbbc0;
          background-color: #fff;
        }
      }
      .weichat_start {
        button {
          width: 100%;
          height: 30px;
          background-color: #fff;
          color: #5dbbc0;
          border: 1px solid #5dbbc0;
          border-radius: 4px;
        }
      }
    }
    .step_2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .step_2_1 {
        width: 80%;
      }
      .step_2_2 {
        color: #5dbbc0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 120px;
        height: 80px;
        margin: 15px 0;
      }
    }
  }

  .weichat_provider {
    width: 100%;
    height: 180px;
    display: flex;
    border-bottom: 5px solid #ebebeb;
    color: #666;
    .left {
      width: 30%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logo {
        width: 100%;
        height: 70%;
        img {
          width: 60%;
        }
      }
      .glod {
        width: 100%;
        height: 30%;
        img {
          width: 60%;
        }
      }
    }
    .right {
      width: 70%;
      font-size: 12px;
      line-height: 22px;
      .weichat_name {
        margin-top: 20px;
      }
      button {
        width: 90px;
        height: 30px;
        background-color: #ff591b;
        color: #fff;
        border-right: 4px;
        border: none;
        outline: none;
        margin-top: 10px;
      }
    }
  }
  .weichat_people {
    margin-bottom: 100px;
  }

  .weichat_click {
    display: block;
    display: flex;
    width: 100%;
    height: 60px;
    li {
      height: 60px;
      width: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .phone {
      background-color: #eeeff3;
      color: #2d2d2b;
      img {
        width: 25%;
      }
    }
    .buylater {
      background-color: #2693d4;
      color: #fff;
    }
    .buynow {
      background-color: #fb4146;
      color: #fff;
    }
  }
  // 以下为客户端隐藏部分
  .guanggao {
    display: none;
  }
  .message {
    width: 100%;
  }
  .buy {
    display: none;
  }
}
</style>
