<template>

  <div class="outer">
    <div class="top">
      <img :src="imgSrc+arr.providerImg" alt="">
      <li>
        <h2>{{arr.name}}</h2>
        <p class="adress">{{arr.regionName}}</p>
      </li>
    </div>
    <div class="content">
      <div class="left">
        <h3>公司介绍</h3>
        <p>{{arr.providerInfo}}</p>
        <li>
          <img src="../assets/images/u4654.png" alt="">
        </li>
      </div>
      <div class="right">
        <ul class="top_list">
          <li @click="service_product()" :class="change1">
            <p>服务产品</p>
          </li>
          <li @click="talk()" :class="change2">
            <p>客服</p>
          </li>
          <li @click="book()" :class="change3">
            <p>资质证书</p>
          </li>
        </ul>  
        <ul class="bottom">

          <!-- 微信端======================================== -->
          <div class="weichat_searve">
            <p>所有服务</p>
            <div></div>
          </div>
          <div class="weichat_list">
            <div v-for="(four,underNum) in data_2" :key="underNum" class="weichat_goos_list">
              <div class="left"><img :src="imgSrc+four.productImg" alt="" @click="go_shopping(four)" @error='defaultImg'></div>
              <div class="right">
                <p class="service_t" @click="go_shopping(four)">{{four.serviceName.split('（')[0]}}</p>
                <p class="service_i">{{four.serviceInfo}}</p>
                <li>
                  <img src="../assets/images/adress.png" alt="">
                  <p>{{four.regionName.split('-')[1]}} {{four.regionName.split('-')[2]}}</p>
                  <span>￥ {{four.price}}.00 </span>
                  <p>{{four.unit}}</p>
                </li>
              </div>
            </div>
          </div>
   <!-- 微信端最底部======================================== -->


          <!-- 客户端 -->
          <li :class="bot_1">
            <div>
              <li class="service_title"><h2>服务内容</h2></li>
              <ul>
                <div v-for="(inn,sum) in data_2" :key="sum" class="serve_introduce">
                  <h4>{{inn.serviceName}}</h4>
                  <img src="../assets/images/biaoqian.png" alt="">
                  <p class="longword">{{inn.serviceInfo}}</p>
                  <p class="sale">銷量：</p>
                  <h1>￥   {{inn.price}}.00</h1>
                  <div class="oldprice">
                    <p>原价{{inn.marketPrice}}.00</p>
                    <li></li>
                    <p class="look" @click="more(inn)">查看详情》</p>
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li :class="bot_2">
            <h3>工作时间：{{arr.workTime}}</h3>
            <h3>QQ咨询：{{arr.qq}}</h3>
          </li>
          <li :class="bot_3">
            <img :src="imgSrc+arr.orgCertPath" @error='defaultImg1' alt="" class="bottom_img">
          </li>
        </ul>
      </div>
    </div>
    <Page @confirm='zhang' :TotalCount='totalCount' :fanye='fanye' :reset='reset' />
  </div>
</template>

<script>
const defaultImgUrl = require("../assets/images/notFound.jpg");
const defaultImgUrl1 = require("../assets/images/u4652.png");
import Page from "../components/Page.vue";

export default {
  name: "HelloWorld",
  created() {
    if(window.screenX<768){
      this.fanye=12;
    }else{
      this.fanye=6;
    }
    
    this.requi();
    window.scrollTo(0, 0);
    var th = this;
    this.ajax
      .post(
        "/xinda-api/provider/detail",
        this.qs.stringify({
          id: this.$route.query.id
        })
      )
      .then(data => {
        this.arr = data.data.data;
      });
  },
  data() {
    return {
      startFro: "",
      msg: "Welcome to Your Vue.js App",
      arr: "",
      array: [],
      data: "",
      data_1: "",
      data_2: "",
      data_3: "",
      data_wei: "",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      change1: "style1",
      change2: "",
      change3: "",
      bot_1: "style4",
      bot_2: "style3",
      bot_3: "style3",
      currentUnder: 0
    };
  },
  components: {
    Page
  },
  methods: {
    zhang(Num) {
      this.startFro = Num;
      this.requi();
    },
    requi() {
      window.scrollTo(0, 400);
      this.ajax
        .post(
          "/xinda-api/product/package/grid",
          this.qs.stringify({
            providerId: this.$route.query.id,
            limit: this.fanye,
            start: this.startFro
          })
        )
        .then(data => {
          this.data_2 = data.data.data;
          this.totalCount = data.data.totalCount;
        });
    },
    defaultImg(e) {
      // 错误图片的代替
      e.target.src = defaultImgUrl;
    },
    defaultImg1(e) {
      // 错误图片的代替
      e.target.src = defaultImgUrl1;
    },
    more(inn) {
      this.$router.push({
        path: "/inner/Shangpinxiangqing",
        query: {
          id: inn.id,
          newPrice: inn.price
        }
      });
    },
    test() {
      this.change;
    },
    service_product() {
      this.change1 = "style1";
      this.change2 = "style2";
      this.change3 = "style2";
      this.bot_1 = "style4";
      this.bot_2 = "style3";
      this.bot_3 = "style3";
    },
    talk() {
      this.change1 = "style2";
      this.change2 = "style1";
      this.change3 = "style2";
      this.bot_1 = "style3";
      this.bot_2 = "style4";
      this.bot_3 = "style3";
    },
    book() {
      this.change1 = "style2";
      this.change2 = "style2";
      this.change3 = "style1";
      this.bot_1 = "style3";
      this.bot_2 = "style3";
      this.bot_3 = "style4";
    },
    choose(key_1) {
      this.currentUnder = key_1;
      this.ajax
        .post(
          "/xinda-api/product/package/grid",
          this.qs.stringify({
            providerId: this.$route.query.id
          })
        )
        .then(data => {
          this.data_1 = data.data.data;
          this.data_2 = this.data_1.slice(key_1 * 6, key_1 * 6 + 6);
          let number = Math.ceil(this.data_1.length / 6);
          for (let i = 0; i < number; i++) {
            this.array[i] = i + 1;
          }
        });
    },
    go_shopping(four) {
      this.$router.push({
        path: "/inner/Shangpinxiangqing",
        query: {
          id: four.id,
          newPrice: four.price
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

// PC端
@media screen and (min-width: 768px) {
  .top {
    width: 1200px;
    height: 179px;
    border: 1px solid #e9e9e9;
    margin-top: 7px;
    display: flex;
    align-items: center;
    img {
      height: 60px;
      margin-left: 62px;
    }
    p {
      font-size: 14px;
      color: #676767;
      margin-top: 16px;
    }
    li {
      margin-left: 30px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 80px;
    position: relative;
    .left {
      margin: 0 11px;
      width: 300px;
      height: 583px;
      border: 1px solid #e9e9e9;
      h3 {
        line-height: 51px;
        margin-left: 8px;
      }
      p {
        line-height: 23px;
        font-size: 12px;
        color: #676767;
        margin: 22px 26px;
      }
      li {
        width: 300px;
        height: 251px;
        border-top: 1px solid #e9e9e9;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .right {
      margin: 0 10px;
      width: 875px;
      height: 583px;
      .top_list {
        width: 100%;
        height: 39px;
        border: 1px solid #e9e9e9;
        display: flex;
        li {
          line-height: 39px;
          width: 100px;
          text-align: center;
          margin: 0 10px;
          cursor: pointer;
        }
      }

      .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e9e9e9;
        li {
          width: 100%;
          height: 542px;
          div {
            width: 100%;
            img {
              width: 198px;
            }
            ul {
              height: 447px;
              display: flex;
              flex-wrap: wrap;
              p {
                font-size: 14px;
                line-height: 35px;
                color: #3f3f3f;
              }
              .serve_introduce {
                margin: 15px 5px 0;
                width: 251px;
                height: 171px;
                border: 1px solid #ccc;
                display: flex;
                flex-direction: column;
                padding: 14px;
                h4 {
                  margin: 5px 0 9px 0;
                  overflow: hidden; /*超出长度的文字隐藏*/
                  text-overflow: ellipsis; /*文字隐藏以后添加省略号*/
                  white-space: nowrap;
                }
                .longword {
                  overflow: hidden; /*超出长度的文字隐藏*/
                  text-overflow: ellipsis; /*文字隐藏以后添加省略号*/
                  white-space: nowrap;
                }
                div {
                  width: 100%;
                  height: 18px;
                  line-height: 18px;
                  padding: 0;
                  display: flex;
                  justify-content: space-between;
                  position: relative;
                  li {
                    width: 118px;
                    height: 1px;
                    border-top: 1px solid #6a423a;
                    position: absolute;
                    bottom: 0;
                  }
                  p {
                    font-size: 14px;
                    color: #3f3f3f;
                  }

                  .look {
                    cursor: pointer;
                    color: #74b3de;
                  }
                }
              }
              h1 {
                width: 256px;
                color: #2693d4;
                line-height: 40px;
              }
            }
          }
          h3 {
            width: 875px;
            line-height: 50px;
          }
        }
        .service_title {
          width: 100%;
          height: 93px;
          border: 1px solid #e9e9e9;
          line-height: 93px;
          text-align: center;
        }
        .weichat_searve {
          display: none;
        }
        .weichat_list {
          display: none;
        }
        .weichat_bottom_title {
          display: none;
        }
      }
    }
  }
  .style1 {
    color: #74b3df;
    p {
      border-bottom: 2px solid #2693d4;
    }
  }
  .style2 {
    color: black;
    border-bottom: 2px solid #fff;
  }
  .style3 {
    display: none;
  }
  .style4 {
    display: flex;
  }
  .bot_1 {
    display: flex;
    justify-content: flex-end;
    button {
      padding: 8px 10px;
      font-size: 13px;
      border: 1px solid #ccc;
      background-color: #f4f4f4;
      margin: 5px 3px;
      outline: none;
      cursor: pointer;
    }
    ul {
      display: flex;
      li {
        width: 37px;
        height: 34px;
        border: 1px solid #ccc;
        font-size: 13px;
        line-height: 34px;
        text-align: center;
        margin: 5px 3px;
        background-color: #f4f4f4;
        cursor: pointer;
      }
    }
  }
  .chooseIt {
    background-color: #bcdff3;
    color: #2891d3;
  }
  .noclick {
    color: grey;
    outline: none;
    cursor: crosshair;
  }
  .bottom_img {
    width: 250px;
    height: 400px;
    margin: 20px 180px;
  }
}

// =========================================以下是微信端
@media screen and (max-width: 768px) {
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    img {
      width: 100px;
      margin: 80px 0 30px;
    }
    .adress {
      display: none;
    }
  }
  .content {
    .left {
      h3 {
        display: none;
      }
      p {
        font-size: 15px;
        margin: 30px 10px;
        line-height: 30px;
        text-indent: 2em;
      }
      img {
        display: none;
      }
    }
    .right {
      .top_list {
        display: none;
      }
      .bottom {
        .service_title {
          display: none;
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
        .weichat_list {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .weichat_goos_list {
            width: 100%;
            display: flex;
            margin: 10px 5px;
            border-bottom: 1px solid #ccc;
            .left {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2%;
              img {
                display: block;
                width: 90%;
                height: 100%;
                border: 2px solid #e3e3e3;
              }
            }
            .right {
              display: flex;
              flex-direction: column;
              font-size: 14px;
              width: 60%;
              position: relative;
              .service_t {
                font-size: 16px;
                line-height: 28px;
                width: 100%;
              }
              .service_i {
                line-height: 20px;
                width: 100%;
                height: 100px;
              }
              li {
                width: 100%;
                display: flex;
                font-size: 12px;
                position: absolute;
                bottom: 6%;
                line-height: 16px;
                img {
                  width: 8px;
                  height: 12px;
                  margin: 1%;
                }
                span {
                  margin: 0 0 0 10%;
                  color: red;
                  font-size: 18px;
                  font-weight: bold;
                }
              }
            }
          }
        }
        li {
          display: none;
        }
      }
    }
  }
  .bot_1 {
    display: none;
  }
  h4 {
    font-weight: bold;
  }
}
</style>
