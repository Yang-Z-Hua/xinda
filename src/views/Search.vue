<template>
  <div>
    <div class="all">
      <div class="left">
        <div class="xia">
          <div class="head1">
            <span>综合排序</span>
            <span>价格</span>
          </div>
          <div class="sp">
            <span>商品</span>
            <span>价格</span>
          </div>
          <div class="xq">
            <div class="paixu">
              <ul>默认排序</ul>
              <ul>价格</ul>
            </div>
            <div class="list" v-for="a in arr" :key="a.id">
              <img :src='imgSrc+a.providerImg' alt="">
              <div class="zcfgs">
                <ul @click="xpxq(a.id)">{{a.serviceName}}</ul>
                <li>{{a.serviceInfo}}</li>
                <li>
                  <span>{{a.providerName}}</span>
                  <span>{{a.regionName}}</span>
                </li>
                <p>{{a.regionName}}</p>
              </div>
              <div class="sizeal">
                <ul>￥{{a.price}}</ul>
                <li>
                  <p :class="animi==a.id?'dong':''"></p>
                  <span @mousedown="gm(a.id)" @mouseup="gm1" :class="ljgm==a.id?'down':''" @click="buy(a.id)">立即购买</span>
                  <span @mousedown="gw(a.id)" @mouseup="gw1" :class="jrgwc==a.id?'down':''" @click="gouwuche(a.id)">加入购物车</span>
                </li>
              </div>
            </div>
            <div class="tsnr" v-if="!arrLength">当前选项无内容</div>
          </div>
        </div>
        <div class="fanye">
          <span @click="prev" :class="shang1">上一页</span>
          <ul>{{number}}</ul>
          <p v-if="prevTip">当前是第一页!!</p>
          <span @click="next" :class="xia1">下一页</span>
          <p v-if="nextTip">当前是最后一页!!</p>
        </div>
      </div>
      <div class="right">
        <div>
          <img src="../assets/images/lb1.jpg" alt="">
          <li>平台担保</li>
        </div>
        <div>
          <img src="../assets/images/lb2.jpg" alt="">
          <li>优质服务</li>
        </div>
        <div>
          <img src="../assets/images/lb3.jpg" alt="">
          <li>过程监督</li>
        </div>
        <div>
          <img src="../assets/images/lb4.png" alt="">
          <li>增值服务</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Area from "../components/Area.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: "",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      number: "1",
      num: 0,
      shang1: "grey",
      xia1: "blue",
      data: "",
      background: "",
      backgroundlx: "",
      arrLength: "",
      fyCode: "",
      fyId: "",
      i: 0,
      nextTip: "",
      prevTip: "",
      ljgm: "", //立即购买背景
      jrgwc: "", //加入购物车背景
      animi: "",
      searchName: ""
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.shang1 = "blue";
    this.searchName = this.$route.query.searchName;
    this.chen(this.$route.query.searchName);
  },
  watch: {
    $route() {
      this.searchName = this.$route.query.searchName;
      this.chen(this.$route.query.searchName);
    }
  },
  methods: {
    gm(a) {
      this.ljgm = a;
    },
    gm1() {
      this.ligm = "";
    },
    gw(a) {
      this.jrgwc = a;
    },
    gw1() {
      this.jrgwc = "";
    },
    xpxq(a) {
      this.$router.push({
        path: "/inner/shangpinxiangqing",
        query: {
          id: a
        }
      });
    },
    gouwuche(id1) {
      if (!this.$parent.$parent.user) {
        this.$router.push({
          path: "/outter/login",
          query: {
            id: id1
          }
        });
        return;
      }
      this.animi = id1;
      var qq = this;
      setTimeout(function() {
        qq.animi = "dd";
      }, 500);
      this.ajax
        .post(
          "xinda-api/cart/add",
          this.qs.stringify({
            id: id1,
            num: 1
          })
        )
        .then(data => {
          this.ajax
            .post("/xinda-api/cart/list", this.qs.stringify({}))
            .then(data => {
              this.$parent.$parent.number = data.data.data.length;
            });
        });
    },
    buy(id1) {
      if (!this.$parent.$parent.user) {
        this.$router.push({
          path: "/outter/login",
          query: {
            id: id1
          }
        });
        return;
      }
      this.ajax
        .post(
          "xinda-api/cart/add",
          this.qs.stringify({
            id: id1,
            num: 1
          })
        )
        .then(data => {
          this.$router.push({
            path: "/inner/gouwuche"
          });
        });
    },
    next() {
      this.prevTip = 0;
      if (this.arrLength < 3) {
        this.nextTip = 1;
        return;
      } else {
        this.num += 3;
        this.number++;
        this.chen(this.fyCode, this.fyId);
        this.shang1 = "blue";
      }
    },
    prev() {
      this.nextTip = 0;
      if (this.number == 1) {
        this.prevTip = 1;
        return;
      }
      this.num -= 3;
      (this.xia1 = "blue"), this.number--;
      this.chen(this.fyCode, this.fyId);
    },
    chen(search) {
      //产品服务列表
      this.ajax
        .post(
          "/xinda-api/product/package/search-grid",
          this.qs.stringify({
            start: this.num,
            limit: 3,
            searchName: this.searchName
          })
        )
        .then(data => {
          console.log(111, data.data);
          this.arr = data.data.data;
          this.arrLength = this.arr.length;
        });
    }
  }
};
</script>

<style scoped lang='less'>
@media screen and (min-width: 768px) {
  .bt {
    width: 1200px;
    margin: 25px auto 0;
    font-size: 14px;
  }
  .all {
    width: 1200px;
    margin: 0 auto 5px;
    display: flex;
    .left {
      .sh {
        width: 950px;
        // height: 163px;
        background: #f7f7f7;
        border-bottom: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        .d {
          .blue {
            background: #2693d4;
            color: white;
          }
          display: flex;
          li:nth-child(1) {
            border: 1px solid #cccccc;
            border-bottom: none;
            border-right: none;
            width: 100px;
            // height: 40px;
            text-align: center;
            line-height: 40px;
            font-weight: bold;
          }
          li:nth-child(2) {
            border: 1px solid #cccccc;
            width: 848px;
            border-bottom: none;
            border-right: none;
            padding: 0 0 5px 10px;
            p {
              padding: 5px 13px;
              border-radius: 4px;
              display: inline-block;
              margin-top: 5px;
              cursor: pointer;
            }
            .djsj {
              background: #2693d4;
              color: white;
            }
          }
        }
      }
      .xia {
        width: 950px;
        margin-top: 25px;
        border: 1px solid #cccccc;
        .head1 {
          height: 41px;
          border-bottom: 1px solid #cccccc;
          line-height: 41px;
          background: #f7f7f7;
          span {
            padding: 0 25px;
          }
        }
        .sp {
          height: 50px;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          margin: 0 8px;
          padding: 0 30px;
        }
        .xq {
          margin: 0 8px;
          .paixu {
            display: none;
          }
          .tsnr {
            text-align: center;
            font-size: 40px;
            padding: 40px;
            color: gainsboro;
          }
          .list {
            display: flex;
            padding: 10px 0;
            align-items: flex-start;
            border-bottom: 1px solid #cccccc;
            img {
              width: 98px;
              height: 98px;
              border: 1px solid #cccccc;
              margin-right: 12px;
            }
            .zcfgs {
              p {
                display: none;
              }
            }
            .zcfgs ul {
              cursor: pointer;
              font-weight: bold;
            }
            .zcfgs ul:hover {
              color: cornflowerblue;
              text-decoration: underline;
            }
            .zcfgs li {
              font-size: 14px;
              color: #404040;
              line-height: 1;
              margin-top: 20px;
              width: 600px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .sizeal {
              margin: 0 0 0 auto;
            }
            .sizeal ul {
              color: red;
              font-size: 24px;
              text-align: center;
            }
            .sizeal li {
              position: relative;
            }
            .sizeal li p.dong {
              top: 35px;
              right: 46px;
              position: absolute;
              display: inline-block;
              width: 600px;
              height: 60px;
              opacity: 0.8;
              border-radius: 5px;
              transition: transform 0.5s cubic-bezier(0.47, 0, 0.745, 0.715);
              transform: translate(375px, -540px);
              background-image: url("../assets/images/qwewe.png");
            }
            .sizeal li span.down {
              background: cyan;
              cursor: pointer;
              color: white;
              font-size: 14px;
              line-height: 1;
              padding: 8px 17px;
              margin-left: 11px;
              border-radius: 2px;
              display: inline-block;
              margin-top: 25px;
            }
            .sizeal li span {
              cursor: pointer;
              color: white;
              background: #2693d4;
              font-size: 14px;
              line-height: 1;
              padding: 8px 17px;
              margin-left: 11px;
              border-radius: 2px;
              display: inline-block;
              margin-top: 25px;
            }
          }
        }
      }
      .fanye {
        p {
          color: red;
          line-height: 35px;
          position: absolute;
          left: 580px;
        }
        position: relative;
        margin: 29px auto 202px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        span {
          cursor: pointer;
          border: 1px solid;
          line-height: 1;
          padding: 10px 13px;
        }
        span.grey {
          color: #cccccc;
        }
        span.blue {
          color: #2693d4;
        }
        ul {
          color: #2693d4;
          border: 1px solid;
          line-height: 1;
          padding: 10px 13px;
          margin: 0 6px;
        }
      }
    }
    .right {
      width: 236px;
      height: 645px;
      margin-left: 10px;
      border: 1px solid #cccccc;
      div {
        img {
          margin: 0 auto;
          display: block;
          margin-top: 10px;
        }
        li {
          text-align: center;
          border-bottom: 1px solid #cccccc;
          margin: 18px 35px;
          padding-bottom: 4px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .bt {
    display: none;
  }
  .all {
    width: 100vw;
    box-sizing: border-box;
    .left {
      .sh {
        display: none;
      }
      .xia {
        margin-top: 25px;
        .head1 {
          height: 41px;
          border-bottom: 1px solid #cccccc;
          line-height: 41px;
          background: #f7f7f7;
          span {
            padding: 0 25px;
          }
        }
        .sp {
          height: 50px;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          margin: 0 8px;
          padding: 0 30px;
        }
        .xq {
          .paixu {
            display: flex;
            justify-content: center;
            ul {
              border: 1px solid #2693d4;
              width: 112px;
              text-align: center;
              line-height: 35px;
            }
          }
          .tsnr {
            text-align: center;
            font-size: 40px;
            padding: 40px;
            color: gainsboro;
          }
          .list {
            margin-top: 10px;
            display: flex;
            padding: 10px;
            align-items: flex-start;
            border-bottom: 1px solid #cccccc;
            img {
              width: 60px;
              height: 60px;
              border: 1px solid #cccccc;
              margin-right: 12px;
            }
            .zcfgs {
              width: 240px;
              p {
                font-size: 12px;
              }
            }
            .zcfgs ul {
              cursor: pointer;
              font-weight: bold;
              font-size: 14px;
              width: 100%;
            }
            .zcfgs ul:hover {
              color: cornflowerblue;
              text-decoration: underline;
            }
            .zcfgs li {
              font-size: 12px;
              color: #404040;
              line-height: 1;
              margin-top: 10px;
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .zcfgs li:nth-child(2) {
              display: none;
            }
            .sizeal ul {
              color: red;
              font-size: 12px;
              text-align: center;
              margin: 45px 10px 0 5px;
            }
            .sizeal li {
              display: none;
            }
          }
        }
      }
      .fanye {
        p {
          color: red;
          line-height: 35px;
          position: absolute;
          left: 580px;
        }
        position: relative;
        margin: 29px auto 202px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        span {
          cursor: pointer;
          border: 1px solid;
          line-height: 1;
          padding: 10px 13px;
        }
        span.grey {
          color: #cccccc;
        }
        span.blue {
          color: #2693d4;
        }
        ul {
          color: #2693d4;
          border: 1px solid;
          line-height: 1;
          padding: 10px 13px;
          margin: 0 6px;
        }
      }
    }
    .right {
      display: none;
    }
  }
}
</style>
