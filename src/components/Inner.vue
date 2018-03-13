<template>
  <div>
    <div class="head-1">
      <div class="sh">
        <div class="logo">
          <img src="./../assets/images/logo.jpg" alt="">
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
        <li>全部产品</li>
        <li :class="arr[0]" @click="csfw(0)">财税服务</li>
        <li :class="arr[1]" @click="gsgs(1)">公司工商</li>
        <li :class="arr[2]" @click='qq(2)'>
          <router-link to="/inner/jiamengwomen">加盟我们</router-link>
        </li>
        <li :class="arr[3]" @click='qq(3)'>
          <router-link to="{path:'/inner/dianpu',query:{all:1}}">店铺</router-link>
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
      i: 1
    };
  },
  created() {
    if (this.i) {
      this.$parent.status = "wait";
      this.ajax
        .post(
          "/xinda-api/product/package/search-grid",
          this.qs.stringify({
            searchName: this.searchFor
          })
        )
        .then(data => {
          this.$parent.status = "";
          this.list = data.data.data;
        });
    }
  },
  methods: {
    bs(i) {
      if (i) {
        this.cpfw1 = "blue";
        this.cpfw2 = "";
        this.i = 1;
      } else {
        this.cpfw2 = "blue";
        this.cpfw1 = "";
        this.i = 0;
      }
    },
    qq(i) {
      for (let j in this.arr) {
        this.arr[j] = "";
      }
      this.arr[i] = "bian";
    },
    inpu(e) {
      if (e.keyCode == 13) {
        this.searchService();
      }
    },
    searchService() {
      if (this.i) {
        this.$parent.status = "wait";
        this.ajax
          .post(
            "/xinda-api/product/package/search-grid",
            this.qs.stringify({
              searchName: this.searchFor
            })
          )
          .then(data => {
            this.$parent.status = "";
            if (data.data.data.length == 1) {
              this.$router.push({
                path: "/inner/shangpinxiangqing",
                query: {
                  id: data.data.data[0].id
                }
              });
            } else {
              this.$router.push({
                path: "/inner/search",
                query: {
                  searchName: this.searchFor
                }
              });
            }
          });
      } else {
        this.$parent.status = "wait";
        this.ajax
          .post(
            "/xinda-api/provider/search-grid",
            this.qs.stringify({
              searchName: this.searchFor
            })
          )
          .then(data => {
            this.$parent.status = "";
            console.log(111,data.data.data);
             this.$router.push({
                path: "/inner/dianpu",
                query: {
                  arr:data.data.data
                }
              });
            // if (data.data.data.length == 1) {
            //   this.$router.push({
            //     path: "/inner/shangpinxiangqing",
            //     query: {
            //       id: data.data.data[0].id
            //     }
            //   });
            // } else {
            //   this.$router.push({
            //     path: "/inner/search",
            //     query: {
            //       searchName: this.searchFor
            //     }
            //   });
            // }
          });
      }
    },
    csfw(i) {
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
    display: flex;
    li {
      font-size: 18px;
      color: #555555;
      padding: 4px 20px 4px;
      margin: 15px 0 0 84px;
      cursor: pointer;
      a {
        color: black;
      }
    }
    li:nth-child(1):hover {
      color: white;
      background: #2693d4;
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
