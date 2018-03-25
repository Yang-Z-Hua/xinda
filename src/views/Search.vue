<template>
  <div>
    <div class="all">
      <div class="left">
        <div class="xia">
          <div class="head1">
            <span @click="zh" :class="px1">综合排序<ul></ul></span>
            <span @click="price" :class="px2">价格<ul></ul>
              <li class='el-icon-caret-top' :class='pxT'></li>
              <li class='el-icon-caret-bottom' :class='pxB'></li>
            </span>
          </div>
          <div class="sp">
            <span>商品</span>
            <span>价格</span>
          </div>
          <div class="xq">
                               <!-- phone -->
            <div class="paixu"> 
              <ul @click="zh" :class="px1">默认排序</ul>
              <ul @click="price" :class="px2">价格</ul>
            </div>
            <div class="list" v-for="a in arr" :key="a.id">
              <!-- <img :src="img" alt=""> -->
              <img :src='imgSrc+a.productImg' alt="" @error='defaultImg' >
              <div class="zcfgs">
                <ul @click="xpxq(a.id,a.price)">{{a.serviceName}}</ul>
                <li>{{a.serviceInfo}}</li>
                <li>
                  <span>{{a.providerName}}</span>
                  <span>{{a.regionName}}</span>
                </li>
                <p>{{a.regionName}}</p>
              </div>
              <div class="sizeal">
                <ul>￥{{a.price}}.00</ul>
                <li>
                  <span :class="ljgm==a.id?'down':''" @click="buy(a.id,a.price)">立即购买</span>
                  <span @mousedown="gw(a.id)" @mouseup="gw1" :class="jrgwc==a.id?'down':''" @click="gouwuche(a.id,a.price)">加入购物车</span>
                </li>
              </div>
            </div>
            <div class="tsnr" v-if="!arrLength">当前选项无内容</div>
          </div>
        </div>
        <Page :num='num' @confirm='zhang' :TotalCount='totalCount'  :fanye='fanye' :reset='reset' />
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
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Area from "../components/Area.vue";
import Page from "../components/Page.vue";
const defaultImgUrl = require("../assets/images/logoxz_01.png");
export default {
  name: "HelloWorld",
  data() {
    return {
      pxT: "none",
      pxB: "none",
      arr: "",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      img: require("../assets/images/zz.jpg"),
      num: 0,
      sleType: "", //公司注册/变更
      // number: 1,
      // shang1: "grey",
      // xia1: "blue",
      // nextTip: "",
      // prevTip: "",
      data1: "", //主页传过来的大类
      data: "",
      background: "",
      backgroundlx: "",
      id2: undefined,
      id3: undefined,
      code: "",
      arrLength: "",
      fyCode: "",
      fyId: "",
      i: 0,
      firstName: "",
      ljgm: "", //立即购买背景
      jrgwc: "", //加入购物车背景
      px1: "click", //排序
      px2: "", //排序
      pxIndex: 1,
      key: 1,
      totalCount: "",
      reset: "",
      fanye: 3,
      cz: 0 //重置
    };
  },
  created() {
    this.$parent.$parent.status = "wait1";
    window.scrollTo(0, 0);
    this.shang1 = "blue";
    this.searchName = this.$route.query.searchName;
    this.chen(this.index);
  },
  watch: {
    $route() {
      this.searchName = this.$route.query.searchName;
      this.chen(this.index);
    }
  },
  components: {
    Area,
    Page
  },

  computed: {
    ...mapGetters(["getNum"])
  },
  methods: {
    choose(data) {
      if (this.id3) {
        this.chen(this.index);
      } else {
        this.chen(this.index);
      }
    },
    defaultImg(e) {
      // 错误图片的代替
      e.target.src = defaultImgUrl;
    },
    gw(a) {
      //加入购物车摁下背景
      this.jrgwc = a;
    },
    gw1() {
      //加入购物车抬起背景
      this.jrgwc = "";
    },
    xpxq(a, b) {
      // 点击商品标题
      this.$parent.$parent.status = "wait";
      this.$router.push({
        path: "/inner/shangpinxiangqing",
        query: {
          id: a,
          newPrice: b
        }
      });
    },
    gouwuche(id1, b) {
      // 加入购物车
      this.$parent.$parent.status = "Lwait";
      if (!this.$parent.$parent.user) {
        // 未登录的话需要登录
        this.$confirm("您未登录，将跳转到登录页, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push({
              path: "/outter/login",
              query: {
                id: id1,
                newPrice: b
              }
            });
          })
          .catch(() => {
            this.$parent.$parent.status = "wait1";
            this.$message({
              type: "info",
              message: "已取消登录",
              duration: 700
            });
          });
        return;
      }
      // 添加到购物车并且修改右上角购物车数量
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id1,
            num: 1
          })
        )
        .then(data => {
          this.ajax
            .post("/xinda-api/cart/list", this.qs.stringify({}))
            .then(data => {
              // this.$parent.$parent.number = data.data.data.length;
              this.addNum(data.data.data.length);
              this.$parent.$parent.status = "wait1";
              this.$message({
                message: "已成功加入购物车！",
                type: "success",
                duration: 700
              });
            });
        });
    },
    ...mapActions(["addNum"]),
    buy(id1, b) {
      // 立即购买
      if (!this.$parent.$parent.user) {
        // 检测是否登录
        this.$confirm("您未登录，将跳转到登录页, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push({
              path: "/outter/login",
              query: {
                id: id1,
                newPrice: b
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消登录",
              duration: 700
            });
          });
        return;
      }
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id1,
            num: 1
          })
        )
        .then(data => {
          this.$router.push({
            path: "/inner/gouwuche"
          });
          this.ajax
            .post("/xinda-api/cart/list", this.qs.stringify({}))
            .then(data => {
              // this.$parent.$parent.number = data.data.data.length;
              this.addNum(data.data.data.length);
            });
        });
    },

    zhang(Num) {
      this.num = Num;
      this.chen(this.pxIndex);
    },
    chen(sort1) {
      //产品服务列表
      console.log(this.num, this.searchName);
      this.$parent.$parent.status = "Lwait";
      this.ajax
        .post(
          "/xinda-api/product/package/search-grid",
          this.qs.stringify({
            start: this.num,
            limit: 3,
            searchName: this.searchName,
            sort: sort1
          })
        )
        .then(data => {
          console.log(data);
          this.totalCount = data.data.totalCount;
          this.$parent.$parent.status = "wait1";
          this.arr = data.data.data;
          this.arrLength = this.arr.length;
        });
    },
    zh() {
      // 综合排序
      this.pxT = "none";
      this.pxB = "none";
      this.px1 = "click";
      this.pxIndex = 1;
      this.px2 = "";
      this.chen(this.index);
    },
    price() {
      // 价格排序
      if (this.pxIndex == 1) {
        this.pxT = "";
        this.pxB = "none";
        this.pxIndex = 2;
      } else if (this.pxIndex == 2) {
        this.pxB = "";
        this.pxT = "none";
        this.pxIndex = 3;
      } else if (this.pxIndex == 3) {
        this.pxT = "";
        this.pxB = "none";
        this.pxIndex = 2;
      }
      this.px2 = "click";
      this.px1 = "";
      this.chen(this.pxIndex);
    }
  }
};
</script>
<style scoped lang='less'>
.none{
  display: none
}
@media screen and (min-width: 768px) {
  .tip {
    display: none;
  }
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
      .xia {
        width: 950px;
        margin-top: 25px;
        border: 1px solid #cccccc;
        .head1 {
          height: 41px;
          border-bottom: 1px solid #cccccc;
          // line-height: 41px;
          background: #f7f7f7;
          span {
            padding: 0 25px;
            line-height: 41px;
            height: 100%;
            display: inline-block;
            position: relative;
            cursor: pointer;
          }
          .click {
            background: #2693d4;
            color: white;
            ul {
              left: 45%;
              position: absolute;
              border: 6px solid transparent;
              border-top: 6px solid #2693d4;
            }
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
              text-align: right;
              margin-right: 20px;
            }
            .sizeal li {
              position: relative;
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
      // .fanye {
      //   p {
      //     color: red;
      //     line-height: 35px;
      //     position: absolute;
      //     left: 580px;
      //   }
      //   position: relative;
      //   margin: 29px auto 202px;
      //   display: flex;
      //   justify-content: center;
      //   font-size: 14px;
      //   span {
      //     cursor: pointer;
      //     border: 1px solid;
      //     line-height: 1;
      //     padding: 10px 13px;
      //   }
      //   span.grey {
      //     color: #cccccc;
      //   }
      //   span.blue {
      //     color: #2693d4;
      //   }
      //   ul {
      //     color: #2693d4;
      //     border: 1px solid;
      //     line-height: 1;
      //     padding: 10px 13px;
      //     margin: 0 6px;
      //   }
      // }
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
          display: none;
          height: 41px;
          border-bottom: 1px solid #cccccc;
          line-height: 41px;
          background: #f7f7f7;
          span {
            padding: 0 25px;
          }
        }
        .sp {
          display: none;
          height: 50px;
          line-height: 50px;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          margin: 0 8px;
          padding: 0 30px;
        }
        .xq {
          .paixu {
            margin: 40px 0 30px;
            display: flex;
            justify-content: center;
            .click {
              background: #2693d4;
              color: white;
            }
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
            margin: 10px;
            display: flex;
            padding: 10px 0px;
            align-items: flex-start;
            border-bottom: 1px solid #cccccc;
            img {
              width: 40px;
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
      // .fanye {
      //   p {
      //     display: none;
      //     color: red;
      //     line-height: 35px;
      //     position: absolute;
      //     left: 580px;
      //   }
      //   position: relative;
      //   margin: 29px auto 10px;
      //   display: flex;
      //   justify-content: center;
      //   font-size: 14px;
      //   span {
      //     cursor: pointer;
      //     border: 1px solid;
      //     line-height: 1;
      //     padding: 10px 13px;
      //   }
      //   span.grey {
      //     color: #cccccc;
      //   }
      //   span.blue {
      //     color: #2693d4;
      //   }
      //   ul {
      //     color: #2693d4;
      //     border: 1px solid;
      //     line-height: 1;
      //     padding: 10px 13px;
      //     margin: 0 6px;
      //   }
      // }
      // .tip {
      //   color: red;
      //   text-align: center;
      // }
    }
    .right {
      display: none;
    }
  }
}
</style>
