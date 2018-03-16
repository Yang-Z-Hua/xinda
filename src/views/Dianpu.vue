<template>
  <div class="outer1">
    <li class="home"><p>首页/公司工商</p></li>
    <div class="company">
      <ul>
        <li class="area">服务区域</li>
        <li class="kind"><Area @confirm="close" display="lby"/></li>
      </ul>
      <ul>
        <li class="area">产品类型</li>
        <li class="kind kind_list">
          <p v-for="(name,under) in titleName" :key="under" @click="test(under)" :class="currentUnder==under?'style1':''">{{name}}</p>
        </li>
      </ul>
    </div>
    <div class="sort">
      <ul class="top">
        <li v-for="(i,number) in leiName" :key="number" @click="change(number)" :class="currentUnder_1==number?'default':''"><p>{{i}}</p></li>
      </ul>
      <div class="shoplist">
        <div v-for="(a,index) in arr" :key="index">
          <ul class="left">
            <li class="logo"><img :src="imgSrc+a.providerImg" alt=""></li>
            <li><img src="../assets/images/global.png" alt=""></li>
          </ul>
          <ul class="right">
            <h5>{{a.providerName}}</h5>
            <li><span>信誉</span></li>
            <li><span>{{a.regionName}}</span></li>
            <li class="two"><p>累计客户服务次数：{{a.orderNum}}</p><p>好评率：{{a.goodJudge*100/4*a.totalJudge}}%</p></li>
            <li class="service">
              <p v-for="b in a.productTypes.split(',')" :key="b">{{b}}</p>
            </li>
            <button @click="go(index)">进入店铺</button>
          </ul>
        </div>
        <h1 :class="worryshow">未搜索到該店鋪</h1>
      </div>
    </div>

    <!-- 下部页码数 -->
    <ul class="page">
      <button>上一页</button>
      <li><p>1</p></li>
      <button>下一页</button>
    </ul>

  </div>
</template>

<script>
import Area from "../components/Area";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: "",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      currentUnder: 0,
      currentUnder_1: 0,
      titleName: [
        "所有",
        "个人社保",
        "代理记账",
        "企业社保",
        "公司变更",
        "公司注册",
        "审计报告",
        "税务代办",
        "专利申请",
        "商标注册",
        "审计报告"
      ],
      leiName: ["综合排序", "价格", "接单数"],
      worryshow: "no"
    };
  },
  created() {
    if (this.$route.query.all == 1) {
      this.$parent.$parent.status = "wait";
        window.scrollTo(0, 0),
        this.ajax.post("/xinda-api/provider/grid").then(data => {
          this.arr = data.data.data;
          this.$parent.$parent.status = "wait1";
        });
    } else if (this.$route.query.arr.length != 0) {
      this.arr = this.$route.query.arr;
    } else if (this.$route.query.arr.length == 0) {
      this.worryshow = "yes";
    }
  },

  components: {
    Area
  },
  methods: {
    go(index) {
      this.$router.push({
        path: "/inner/Dianpushouye",
        query: {
          id: this.arr[index].id
        }
      });
    },
    test(under) {
      this.currentUnder = under;
      if (under == 0) {
        this.ajax.post("/xinda-api/provider/grid").then(data => {
          this.arr = data.data.data;
        });
      } else {
        this.ajax
          .post(
            "/xinda-api/provider/grid",
            this.qs.stringify({ productTypeCode: under })
          )
          .then(data => {
            this.arr = data.data.data;
          });
      }
    },
    close(value) {
      this.pio = value;
      console.log(this.pio);
    },
    change(number) {
      this.currentUnder_1 = number;
      if (number == 0) {
        this.ajax
          .post(
            "/xinda-api/provider/grid",
            this.qs.stringify({ productTypeCode: this.currentUnder, sort: 1 })
          )
          .then(data => {
            this.arr = data.data.data;
            console.log("店铺排序", this.dianpu);
          });
      }
      if (number == 1) {
        this.ajax
          .post(
            "/xinda-api/provider/grid",
            this.qs.stringify({ productTypeCode: this.currentUnder, sort: 2 })
          )
          .then(data => {
            this.arr = data.data.data;
            console.log("店铺排序", this.dianpu);
          });
      }
      if (number == 2) {
        this.ajax
          .post(
            "/xinda-api/provider/grid",
            this.qs.stringify({ productTypeCode: this.currentUnder, sort: 3 })
          )
          .then(data => {
            this.arr = data.data.data;
            console.log("店铺排序", this.dianpu);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.d4 {
  height: 42px;
  align-items: center;
  margin-left: 12px;
  select {
    width: 86px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-color: #f7f7f7;
    margin-right: 9px;
  }
}
.outer1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  width: 1200px;
  font-size: 14px;
  line-height: 27px;
  color: #2a2a2a;
  margin-top: 19px;
}
.company {
  width: 1199px;
  height: 86px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background-color: #f7f7f7;
  ul {
    display: flex;
    li {
      height: 42px;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .area {
      width: 98px;
      line-height: 42px;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
    }
    .kind {
      width: 1099px;
    }
    .kind_list {
      font-size: 14px;
      color: #636363;
      line-height: 25px;
      text-align: center;
      display: flex;
      align-items: center;
      p {
        width: 80px;
        height: 25px;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 12px;
      }
      p:hover {
        background-color: #2693d4;
        color: #fff;
      }
    }
  }
}
.sort {
  width: 1198px;
  height: 321px;
  border: 1px solid #ccc;
  margin-top: 24px;
  position: relative;
  .top {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 41px;
    border-bottom: 1px solid #ccc;
    display: flex;
    li {
      position: relative;
      width: 107px;
      line-height: 41px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      div {
        width: 0;
        height: 0;
        position: absolute;
        bottom: -6px;
        left: 50px;
        border-left: 4px solid transparent;
        border-top: 6px solid #2393d3;
        border-right: 4px solid transparent;
        border-bottom: none;
      }
    }
    li:hover {
      background-color: #2693d4;
      color: #fff;
    }
    .default {
      background-color: #2693d4;
      color: #fff;
    }
  }
  .shoplist {
    width: 1198px;
    height: 279px;
    position: absolute;
    bottom: 0;
    div {
      float: left;
      margin: 13px;
      width: 568px;
      height: 250px;
      border: 1px solid #ccc;
      display: flex;
      .left {
        width: 200px;
        height: 250px;
        li {
          width: 200px;
          text-align: center;
        }
        .logo {
          height: 170px;
          margin-top: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100px;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        width: 282px;
        margin-top: 20px;
        h5 {
          line-height: 25px;
        }
        li {
          display: flex;
        }
        .two {
          display: flex;
          justify-content: space-between;
        }
        span {
          font-size: 12px;
          line-height: 25px;
          color: #ccc;
        }
        p {
          font-size: 14px;
          line-height: 30px;
        }
        .service {
          color: #fff;
          line-height: 22px;
          display: flex;
          flex-wrap: wrap;
          width: 305px;
          p {
            background-color: #2393d3;
            margin: 5px 4px 0 0;
            padding: 0 7px;
            border-radius: 4px;
            font-size: 12px;
          }
        }
        button {
          width: 103px;
          height: 33px;
          border-radius: 3px;
          outline: none;
          background-color: #ff591b;
          border: none;
          color: #fff;
          position: absolute;
          bottom: 30px;
        }
      }
    }
  }
}
.page {
  width: 1200px;
  height: 36px;
  display: flex;
  justify-content: center;
  margin-top: 62px;
  margin-bottom: 148px;
  button {
    width: 68px;
    height: 36px;
    outline: none;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #ccc;
    margin: 0 3px;
  }
  li {
    width: 37px;
    height: 34px;
    border: 1px solid #2693d4;
    line-height: 34px;
    text-align: center;
    color: #2393d3;
    margin: 0 3px;
  }
}
.style1 {
  background-color: #2393d3;
  color: #fff;
}

// 未搜索到顯示
.no {
  display: none;
}
.yes {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 260px;
  color: #ccc;
}
</style>
