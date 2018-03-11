<template>
  <div>
    <div class="bt">首页/{{firstName}}</div>
    <div class="all">
      <div class="left">
        <div class="sh">
          <ul class="d">
            <li>服务分类</li>
            <li >
              <p @click="fwflClick(index,data.code)" :class="index==background?'blue':''" v-for="(data,index) in data1" :key="data.name">{{data.name}}</p>
            </li>
          </ul>
          <ul class="d d2">
            <li>类型</li>
            <li>
              <p @click="lxclick(index)" :class="index==backgroundlx?'blue':''" v-for="(b,index) in sleType" :key="b.name">{{b.name}}</p>
            </li>
          </ul>
          <ul class="d">
            <li>服务区域</li>
            <li><Area display="lby"/></li>
          </ul>
        </div>
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
            <div class="list" v-for="a in arr" :key="a.id">
              <img :src='imgSrc+a.productImg' alt="">
              <div class="zcfgs">
                <ul @click="xpxq(a.id)">{{a.serviceInfo}}</ul>
                <li>{{a.serviceName}}</li>
                <li><span>{{a.providerName}}</span><span>{{a.regionName}}</span></li>
              </div>
              <div class="sizeal">
                <ul>￥{{a.marketPrice}}</ul>
                <li>
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
          <p v-if="prevTip">当前是第一页!!</p><span @click="next" :class="xia1">下一页</span><p v-if="nextTip">当前是最后一页!!</p>
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
      sleType: "", //公司注册/变更
      shang1: "grey",
      xia1: "blue",
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
      nextTip: "",
      prevTip: "",
      firstName: "",
      ljgm: "", //立即购买背景
      jrgwc: "" //加入购物车背景
    };
  },
  created() {
    this.ajax
      .post("/xinda-api/product/style/list", this.qs.stringify({}))
      .then(data => {
        this.data = data;
        this.data1 = this.$route.query.id;
        this.id2 = this.$route.query.id2;
        this.id3 = this.$route.query.id3;
        this.firstName = this.$route.query.firstName;
        this.code = this.$route.query.code;
        this.fwfl(this.data1);
      });
    this.shang1 = "blue";
  },
  components: {
    Area
  },
  watch: {
    $route() {
      this.data1 = this.$route.query.id;
      this.id2 = this.$route.query.id2;
      this.id3 = this.$route.query.id3;
      this.code = this.$route.query.code;
      this.firstName = this.$route.query.firstName;
      this.fwfl(this.data1);
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
          id: a,
          id1: this.$route.query.id,
          firstName:this.$route.query.firstName
        }
      });
    },
    gouwuche(id1) {
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
              console.log();
            });
        });
    },
    buy(id1) {
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
    fwfl(a) {
      //就开始调用一次
      //服务分类
      var data = this.data.data.data[a];
      this.data1 = data.itemList;
      for (this.b in this.data1) {
        if (this.id2 == undefined || this.b == this.id2) {
          this.fwflClick(this.b, this.code);
          break;
        }
      }
    },
    fwflClick(index, code) {
      this.nextTip = 0;
      this.prevTip = 0;
      this.number = 1;
      this.num = 0;
      this.fyCode = code;
      this.fyId = undefined;
      this.backgroundlx = "";
      this.type(index);
      this.background = index;
      if (this.id3) {
        this.lxclick(this.id3);
      } else {
        this.chen(code, undefined);
      }
    },
    lxclick(index) {
      this.nextTip = 0;
      this.prevTip = 0;
      this.number = 1;
      this.num = 0;
      this.fyId = index;
      this.fyCode = undefined;
      this.backgroundlx = index;
      this.chen(0, index);
    },
    type(a) {
      //产品类型列表
      var data = this.data.data.data[this.$route.query.id].itemList[a].itemList;
      this.sleType = data;
    },
    chen(code, id) {
      //产品服务列表
      this.ajax
        .post(
          "/xinda-api/product/package/grid",
          this.qs.stringify({
            start: this.num,
            limit: 3,
            productTypeCode: code,
            productId: id
          })
        )
        .then(data => {
          this.arr = data.data.data;
          console.log(this.arr);
          this.arrLength = this.arr.length;
          this.id3 = undefined;
          this.code = undefined;
          this.id2 = undefined;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
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
          // height: 40px;

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
          .zcfgs ul {
            cursor: pointer;
            font-weight: bold;
            width: 600px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .zcfgs li {
            font-size: 14px;
            color: #404040;
            line-height: 1;
            margin-top: 20px;
          }
          .sizeal {
            margin: 0 0 0 auto;
          }
          .sizeal ul {
            color: red;
            font-size: 24px;
            text-align: center;
          }
          .sizeal li span.down {
            background: cornflowerblue;
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
        // color: #cccccc;
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
</style>
