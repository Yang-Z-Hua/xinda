<template>
  <div>
    <div class="head-1">
      <div class="sh">
        <div class="logo">
          <img src="./../assets/images/logo.jpg" alt="" @click="tiao">
          <ul>
            <li>北京市</li>
            <p>[切换城市]</p>
          </ul>
        </div>
        <div class="search">
          <div class="cp">
            <span @click="bs(1)" :class="cpfw1">产品 |</span>
            <span @click="bs(0)" :class="cpfw2"> 服务商</span>
        </div>
          <div class="mdd">
            <input placeholder="搜索您需要的服务或服务商" list="dataList" type="text" v-model="searchFor" @keypress="inpu">
            <datalist id="dataList">
              <option v-for="val in list" :key="val.id" :value="val.serviceName"></option>
            </datalist>
            <span @click="searchService"><img src="../assets/images/jj.png" alt=""></span>
          </div>
          <div class="bott">
            <span>热门服务：</span>
            <span>社保开户</span>
            <span>公司注册</span>
          </div>
        </div>
        <div class="phone">
          <img src="../assets/images/phone.jpg" alt="">
          <span>010-83421842</span>
        </div>
      </div>
      <div class="xia">
        <li @mouseover="blo">全部产品
        <div :class="allproduct">
          <div class="product_list">
            <ul v-for="(a,index) in arr1" :key="index">
              <li class="title">
                <img :src='img[index]' alt="">
                <p>{{a.name}}</p>
              </li>
              <li class="example">
                <a v-for="(b,key1) in arr1[index].itemList" :key="key1" @click="secondGo(a,b,index)">{{b.name}}</a>
              </li>
              <li class="message">
                <div v-for="(b,key1) in arr1[index].itemList" :key="key1">
                  <li class="secondTitle"><p>{{b.name}}></p></li>
                  <li class="thirdTitle"><a v-for="(c,key2) in arr1[index].itemList[key1].itemList" :key="key2" @click="thirdGo(a,c,index,b)">{{c.name}}</a></li>            
                </div>
              </li>
            </ul>
          </div>
        </div>

        </li>
        <li :class="arr[0]" @click="csfw(0)">财税服务</li>
        <li :class="arr[1]" @click="gsgs(1)">公司工商</li>
        <li :class="arr[2]" @click='qq(2)'>
          <router-link to="/inner/jiamengwomen">加盟我们</router-link>
        </li>
        <li :class="arr[3]" @click='qq(3)'>
          <router-link :to="{path:'/inner/dianpu',query:{all:1}}">店铺</router-link>
        </li>
      </div>
    </div>
    <router-view></router-view>
    <div class="foot-1">
      <div class="mmm-1">
        <ul>关于我们</ul>
        <li>联系我们：contact@xinkeher.com</li>
        <li>公司地址：北京市朝阳区大望路soho现代城</li>
        <li>官方客服电话:010-83421842</li>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data: "",
      list: "",
      searchFor: "",
      arr: ["", "", "", ""],
      cpfw1: "blue",
      cpfw2: "",
      i: 1,
      arr1: "",
      allproduct: "allproduct",
      img: {},
      fwsAll:''
    };
  },
  created() {
    this.ajax.post("/xinda-api/provider/grid").then(data => {
      this.dataqq = data.data.data;
    });
    this.ajax.post("/xinda-api/product/style/list").then(data => {
      this.arr1 = data.data.data;
      var j = 1;
      for (let i in this.arr1) {
        this.img[i] = require("../assets/images/xlogo/d" + j + ".png");
        j++;
      }
    });
    if (this.i) {
      this.chen("/xinda-api/product/package/search-grid");
    }
  },
  methods: {
    blo() {
      this.allproduct = "allproduct";
    },
    tiao() {
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.$router.push({
        path: "/"
      });
    },
    secondGo(a, b, index) {
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.allproduct = "allproduct1";
      this.$router.push({
        path: "/inner/liebiaoye",
        query: {
          firstName: a.name,
          id: index,
          id2: b.id,
          code: b.code
        }
      });
    },
    thirdGo(a, c, index, b) {
      this.allproduct = "allproduct1";
      this.$router.push({
        path: "/inner/liebiaoye",
        query: {
          firstName: a.name,
          id: index,
          id2: b.id,
          id3: c.id
        }
      });
    },
    chen(a) {
      this.$parent.status = "wait";
      this.ajax
        .post(
          a,
          this.qs.stringify({
            searchName: this.searchFor
          })
        )
        .then(data => {
          this.$parent.status = "wait1";
          this.list = data.data.data;
        });
    },
    bs(i) {
      //搜索服务商或者产品
      if (i) {
        this.chen("/xinda-api/product/package/search-grid");
        this.cpfw1 = "blue";
        this.cpfw2 = "";
        this.i = 1;
      } else {
        this.list = [{ serviceName: "大唐" }, { serviceName: "云智慧" }];
        this.cpfw2 = "blue";
        this.cpfw1 = "";
        this.i = 0;
      }
    },
    qq(i) {
      //  加盟我们、店铺点击变色
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.arr[i] = "bian";
    },
    inpu(e) {
      //搜索框加入摁回车键搜索功能
      if (e.keyCode == 13) {
        this.searchService();
      }
    },
    searchService() {
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      if (this.i) {
        //搜索产品走这一步，默认搜索产品
        this.$parent.status = "wait";
        this.ajax
          .post(
            "/xinda-api/product/package/search-grid",
            this.qs.stringify({
              searchName: this.searchFor
            })
          )
          .then(data => {
            this.$parent.status = "wait1";
            if (data.data.data.length == 1) {
              //一件产品跳到商品详情
              this.$router.push({
                path: "/inner/shangpinxiangqing",
                query: {
                  id: data.data.data[0].id
                }
              });
            } else {
              //多件产品跳到列表页
              this.$router.push({
                path: "/inner/search",
                query: {
                  searchName: this.searchFor
                }
              });
            }
          });
      } else {
        //搜索服务商
        this.$parent.status = "wait";
        // window.onscroll = function() {
        //   window.scrollTo(0, 0);
        // };
        this.ajax
          .post(
            "/xinda-api/provider/search-grid",
            this.qs.stringify({
              searchName: this.searchFor
            })
          )
          .then(data => {
            this.$parent.status = "wait1";
            window.onscroll = function() {};
            this.$router.push({
              path: "/inner/dianpu",
              query: {
                arr: data.data.data
              }
            });
          });
      }
    },
    csfw(i) {
      //点击财税服务
      this.$parent.status = "wait";
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.arr[i] = "bian";
      this.$router.push({
        path: "/inner/liebiaoye",
        query: {
          id: "2e110f0df53243c197fede52fba8e5d0",
          id2: undefined,
          id3: undefined,
          firstName: "财税服务",
          code: 3
        }
      });
    },
    gsgs(i) {
      //点击公司工商
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.arr[i] = "bian";
      this.$router.push({
        path: "/inner/liebiaoye",
        query: {
          id: "5af629246fa34f6f8d49758c6a7b25f1",
          id3: undefined,
          id2: undefined,
          firstName: "公司工商",
          code: 4
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less'>
@media screen and (max-width: 768px) {
  .head-1 {
    display: none;
  }
  .foot-1 {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .head-1 {
    width: 1200px;
    height: 148px;
    margin: 0 auto;
    border-bottom: 1px solid #2693d4;
  }
  .head-1 .sh {
    display: flex;
    .logo {
      display: flex;
      img {
        margin-top: 40px;
        cursor: pointer;
      }
      ul {
        margin: 50px 0 0 26px;
        font-size: 14px;
        p {
          color: #2693d4;
        }
      }
    }
    .search {
      margin: 25px 0 0 110px;
      line-height: 1;
      .cp {
        font-size: 14px;
        span {
          cursor: pointer;
        }
        .blue {
          color: #2693d4;
        }
      }
      input {
        outline: none;
        width: 470px;
        height: 37px;
        border: 2px solid #2693d4;
        margin-top: 5px;
        padding-left: 10px;
      }
      .mdd span {
        cursor: pointer;
        display: inline-block;
        width: 100px;
        height: 41px;
        background: #2693d4;
        margin-top: 5px;
        vertical-align: top;
        img {
          margin: 10px 0 0 40px;
        }
      }
      .bott span {
        font-size: 11px;
        color: #c7c7c7;
      }
    }
    .phone {
      margin: 40px 0 0 auto;
      img {
        vertical-align: middle;
      }
    }
  }
  .head-1 .xia {
    .allproduct {
      display: none;
      width: 1000px;
      // display: flex;
      position: absolute;
      z-index: 9999;
      top: 32px;
      left: 0;
      .product_list {
        width: 200px;
        background-color: #1b2d43;
        position: absolute;
        z-index: 9;
        ul {
          padding: 18px 14px 18px;
          position: relative;
          p {
            color: #d5d7d9;
            margin: 0 9px;
          }
          a {
            color: #d5d7d9;
            margin: 0 2px 0 18px;
            text-decoration: none;
            cursor: pointer;
          }
          li {
            display: flex;
            flex-wrap: wrap;
          }
          .title {
            line-height: 26px;
            font-size: 16px;
          }
          .example {
            line-height: 28px;
            font-size: 14px;
            padding-left: 17px;
          }
          .message {
            width: 916px;
            // height: 100%;
            background-color: #2693d4;
            opacity: 0.9;
            position: absolute;
            top: 0;
            a {
              color: white;
            }
            a:hover {
              color: black;
            }
            left: 200px;
            // opacity: 0.4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 16px;
            a {
              border-left: 1px solid #ccc;
              padding: 0 5px 0 10px;
              margin: 10px 0;
            }
            div {
              width: 800px;
              display: flex;
              line-height: 17px;
              li {
                display: flex;
                flex-wrap: wrap;
              }
              .secondTitle {
                width: 120px;
                padding-top: 10px;
                p {
                  color: white;
                }
              }
              .thirdTitle {
                width: 900px;
              }
            }
            display: none;
          }
        }
        ul:hover .message {
          display: flex;
        }
        .list_bottom {
          padding: 18px 14px 19px;
        }
        ul:hover {
          background-color: #2693d4;
        }
      }
    }
    .allproduct1 {
      display: none;
    }
    display: flex;
    position: relative;
    > li {
      font-size: 18px;
      color: #555555;
      padding: 4px 20px 4px;
      margin: 15px 0 0 84px;
      cursor: pointer;
      a {
        color: black;
      }
    }
    li:nth-child(1) {
      position: relative;
    }
    li:nth-child(1):hover {
      color: white;
      background: #2693d4;
      .allproduct {
        display: block;
      }
    }
    .bian {
      color: white;
      background: #2693d4;
      a {
        color: white;
      }
    }
  }
  .foot-1 {
    height: 200px;
    background-color: #f8f8f8;
  }
  .foot-1 .mmm-1 {
    width: 1200px;
    padding-left: 25px;
    overflow: hidden;
    margin: 0 auto;
    line-height: 1;
    li {
      font-size: 12px;
      margin-top: 12px;
    }
    ul {
      font-size: 16px;
      margin: 38px 0;
    }
  }
}
</style>
