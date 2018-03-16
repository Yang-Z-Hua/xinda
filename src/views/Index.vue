<template>
  <div class="outer">
    <div class="small_top">
      <ul>北京</ul>
      <img src="../assets/images/logo.jpg" alt="">
    </div>
    <div class="allproduct">
      <div class="cycle">
          <div class="swiper-container HM_lb">
              <div class="swiper-wrapper">
                  <div class="swiper-slide " style="width:100%">
                      <img class="img-responsive" src="../assets/images/cycle1.jpg" alt="">
                  </div>
                  <div class="swiper-slide " style="width:100%">
                      <img class="img-responsive" src="../assets/images/cycle2.jpg" alt="">
                  </div>
                  <div class="swiper-slide " style="width:100%">
                      <img class="img-responsive" src="../assets/images/cycle3.jpg" alt="">
                  </div>
              </div>
        <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          </div>
      </div>
    </div>

    <!-- 明星产品推荐 -->
    <ul class="product_star">
      <p>明星产品推荐</p>
      <li class="triangle"></li>
    </ul>
    <div class="star_list">
      <!-- 社保代理 -->
      <router-link :to='{path:"/inner/liebiaoye",query:{
          id: "cc7eb9bbd40f4b0e9f31c8cbcb903a59",
          firstName: "社保代理",
          code: 6,
          }}'>
        <img src="../assets/images/u10.png" alt="">
      </router-link>
      <!-- 公司工商 -->
      <router-link :to='{path:"/inner/liebiaoye",query:{
          id: "5af629246fa34f6f8d49758c6a7b25f1",
          firstName: "公司工商",
          code: 4,
          }}'>
        <img src="../assets/images/u12.png" alt="">
      </router-link>
      <!-- 财税服务 -->
      <router-link :to='{path:"/inner/liebiaoye",query:{
          id: "2e110f0df53243c197fede52fba8e5d0",
          firstName: "财税服务",
          code: 3
          }}'>
        <img src="../assets/images/u14.png" alt="">
      </router-link>
      <!-- 知识产权 -->
      <router-link :to='{path:"/inner/liebiaoye",query:{
          id: "1eff122d06604fc1aadf9e7acefba21a",
          firstName: "知识产权",
          code: 10,
          }}'>
        <img src="../assets/images/u16.png" alt="">
      </router-link>  
    </div>

    <!-- 微信端 -->
    <div class="move_lead">

    </div>

    <!-- 初创企业必备 -->
    <ul class="product_star">
      <p>初创企业必备</p>
      <li class="triangle"></li>
    </ul>
    <div class="company">
      <div v-for="(a,index) in arr.hq" :key="index">
          <li class="img"><img :src="imgSrc+a.providerImg" alt=""></li>
          <ul>
            <p class="product_title">{{a.serviceName.split('（')[0]}}</p>
            <li class="introduce_li"><p class="product_introduce">{{a.serviceInfo}}</p></li>
            <p class="product_price"><span>￥{{a.marketPrice}}</span>{{a.unit}}</p>
            <button @click="goods(a)">查看详情</button>
          </ul>
      </div>
      
    </div>
    <!-- 知识产权 -->
    <ul class="product_star">
      <p>知识产权</p>
      <li class="triangle"></li>
    </ul>
    <ul class="knowledge">
      <li class="knowledge_1"><img src="../assets/images/u82.png" alt="" class="u82"></li>
      <li class="knowledge_2">
        <img src="../assets/images/u84.png" alt="" class="u84">
        <img src="../assets/images/u86.png" alt="" class="u86">
        <img src="../assets/images/aaa.png" alt="" class="u88">
      </li>
    </ul>
    <img src="../assets/images/approve.png" alt="" class="approve">
    <!-- 推荐服务商 -->
    <ul class="recommend"> 
      <li :class="choose1" @click="see1()"><p>推荐服务商</p><span v-show="q"></span></li>
      <li :class="choose2" @click="see2()"><p>推荐服务</p><span v-show="w"></span></li>
     </ul>
    <ul class="provider">
      <div v-for="(d,check) in arr2" :key="check" @click="goShop(check)" v-show="e">
        <li><img :src="imgSrc+d.providerImg" alt=""></li>
        <h4>{{d.providerName}}</h4>
        <p>服务指数：8.4</p>
        <p>提供的服务</p>
        <ul>
          <li v-for="(type,under) in d.productTypes.split(',')" :key="under"><p>{{type}}</p></li>
          <li class="more">更多产品</li>
        </ul>
      </div>
    </ul>
    <ul v-show="r" class="again">
      <div v-for="(a,index) in arr.hq" :key="index">
          <li class="img"><img :src="imgSrc+a.providerImg" alt=""></li>
          <p class="product_title">{{a.serviceName.split('（')[0]}}</p>
          <li><p class="product_introduce">{{a.providerName}}</p></li>
          <p class="product_price"><span>￥{{a.marketPrice}}</span>{{a.unit}}</p>
          <button @click="goods(a)">查看详情</button>
      </div>
    </ul>


  <!-- 微信端底部 -->
  <div class="chat_bottom">
    <img src="../assets/images/logo.jpg" alt="">
    <p>一站式企业交易中心</p>
  </div>

    <!-- 合作伙伴 -->
    <ul class="product_star none">
      <p>合作伙伴</p>
      <li class="triangle"></li>
    </ul>
    <img src="../assets/images/zanshi2.png" alt="" class="partner">
  </div>

</template>

<script>
import "../assets/swiper.js";

export default {
  name: "HelloWorld",
  created() {
    // this.$parent.$parent.status = "wait";
    window.scrollTo(0, 0),
      this.ajax.post("/xinda-api/recommend/list").then(data => {
        this.$parent.$parent.status = "wait1";
        this.arr = data.data.data;
        console.log(this.arr);
      });
    this.ajax.post("/xinda-api/provider/search-grid").then(data => {
      this.arr2 = data.data.data;
    });
    this.ajax.post("/xinda-api/product/package/search-grid").then(data => {
      this.arr3 = data.data.data;
    });
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: "",
      arr1: "",
      arr2: "",
      arr3: "",
      q: 1,
      w: 0,
      e: 1,
      r: 0,
      choose1: "",
      choose2: "yuan",
      imgSrc: "http://123.58.241.146:8088/xinda/pic",
      currentIndex: -1
    };
  },
  mounted() {
    var mySwiper = new Swiper(".HM_lb", {
      direction: "horizontal",
      loop: true,
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要滚动条
      //   scrollbar: '.swiper-scrollbar',
      effect: "fade",
      fade: {
        crossFade: 4
      }
    });
  },
  methods: {
    goShop(check) {
      this.$router.push({
        path: "/inner/Dianpushouye",
        query: {
          id: this.arr2[check].id
        }
      });
    },
    goods(a) {
      this.$router.push({
        path: "/inner/shangpinxiangqing",
        query: {
          id: a.id,
          firstName: "zhuanli"
        }
      });
    },
    see1() {
      this.q = 1;
      this.w = 0;
      this.e = 1;
      this.r = 0;
      this.choose1 = "sty1";
      this.choose2 = "sty2";
    },
    see2() {
      this.q = 0;
      this.w = 1;
      this.e = 0;
      this.r = 1;
      this.choose1 = "sty2";
      this.choose2 = "sty1";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/swiper.css";
.outer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .small_top {
    display: none;
  }
  .allproduct {
    width: 1200px;
    display: flex;
    position: relative;
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
          width: 1000px;
          height: 100%;
          background-color: red;
          position: absolute;
          top: 0;
          left: 200px;
          opacity: 0.4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 13px;
          a {
            border-left: 1px solid #ccc;
            padding: 0 5px 0 10px;
            margin: 3px 0;
          }
          div {
            width: 1000px;
            display: flex;
            line-height: 17px;
            li {
              display: flex;
              flex-wrap: wrap;
            }
            .secondTitle {
              width: 100px;
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
    .cycle {
      width: 1200px;
      height: 400px;
      img {
        width: 1200px;
        height: 420px;
      }
    }
  }

  // 推荐服务商

  .recommend {
    width: 1200px;
    display: flex;
    border-bottom: 1px solid #2693d4;
    font-size: 14px;
    color: #2393d3;
    li {
      position: relative;
      cursor: pointer;
      p {
        margin-left: 10px;
        line-height: 30px;
      }

      span {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0px;
        height: 0px;
        border-left: 4px solid transparent;
        border-top: none;
        border-right: 4px solid transparent;
        border-bottom: 5px solid #2393d3;
      }
    }
    .yuan {
      color: black;
    }
  }

  .sty1 {
    color: #2393d3;
  }
  .sty2 {
    color: black;
  }

  .provider {
    display: flex;
    width: 1200px;
    div {
      width: 216px;
      height: 396px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 25px;
      margin: 20px 30px 0 0;
      li {
        height: 180px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 120px;
        }
      }
      h5 {
        line-height: 40px;
      }
      p {
        font-size: 14px;
      }
      ul {
        margin-top: 30px;
        width: 172px;
        height: 83px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        position: relative;
        li {
          margin: 6px 6px;
          width: 74px;
          height: 29px;
          background-color: #ffecb7;
          line-height: 74px;
          font-size: 14px;
        }
        .more {
          position: absolute;
          right: 0px;
          bottom: 0px;
        }
      }
    }
    div:hover {
      box-shadow: 0 0 3px 2px rgb(238, 235, 235);
    }
  }

  .again {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    div {
      width: 270px;
      height: 462px;
      border: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 158px;
        img {
          width: 150px;
        }
      }
      .product_title {
        font-size: 16px;
        font-weight: bold;
        color: black;
        margin-top: 20px;
      }
      li {
        height: 70px;
        margin-top: 14px;
        .product_introduce {
          font-size: 14px;
        }
      }

      .product_price {
        font-size: 14px;
        color: #3d3d3d;
        margin-top: 28px;
        span {
          font-size: 24px;
          color: #2692d2;
        }
      }
      button {
        width: 157px;
        height: 44px;
        outline: none;
        border: 2px solid #2693d4;
        border-radius: 4px;
        color: #2693d4;
        font-size: 16px;
        background-color: transparent;
        margin-top: 36px;
        cursor: pointer;
      }
    }
  }

  // 明星产品
  .product_star {
    margin-top: 45px;
    position: relative;
    width: 1200px;
    line-height: 31px;
    font-size: 14px;
    border-bottom: solid 2px #2393d3;
    p {
      margin-left: 10px;
      color: #2393d3;
    }
    li {
      position: absolute;
      bottom: 0;
      left: 40px;
      width: 0px;
      height: 0px;
      border-left: 4px solid transparent;
      border-top: none;
      border-right: 4px solid transparent;
      border-bottom: 5px solid #2393d3;
    }
  }
  .star_list {
    width: 1200px;
    height: 400px;
    margin-top: 46px;
    display: flex;
    justify-content: space-between;
    img {
      cursor: pointer;
      width: 254px;
      height: 382px;
    }
  }
  .company {
    width: 1200px;
    height: 464px;
    margin-top: 48px;
    display: flex;
    justify-content: space-between;

    div {
      width: 270px;
      height: 462px;
      border: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 158px;
        img {
          width: 150px;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .product_title {
        font-size: 16px;
        font-weight: bold;
        color: black;
        margin-top: 20px;
      }
      li {
        width: 90%;
        height: 70px;
        margin-top: 14px;
        .product_introduce {
          font-size: 14px;
        }
      }

      .product_price {
        font-size: 14px;
        color: #3d3d3d;
        margin-top: 28px;
        span {
          font-size: 24px;
          color: #2692d2;
        }
      }
      button {
        width: 157px;
        height: 44px;
        outline: none;
        border: 2px solid #2693d4;
        border-radius: 4px;
        color: #2693d4;
        font-size: 16px;
        background-color: transparent;
        margin-top: 36px;
        cursor: pointer;
      }
    }
    div:hover {
      box-shadow: 0 0 3px 2px rgb(194, 239, 245);
    }
  }

  // 知识产权
  .knowledge {
    margin-top: 48px;
    width: 1200px;
    height: 482px;
    display: flex;
    justify-content: space-between;
    .knowledge_2 {
      width: 850px;
      height: 482px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
    .u82 {
      width: 327px;
      height: 482px;
    }
    .u84 {
      width: 414px;
      height: 230px;
    }
    .u86 {
      width: 414px;
      height: 230px;
    }
  }
  .approve {
    margin-top: 43px;
  }

  .partner {
    margin-top: 48px;
    margin-bottom: 100px;
  }

  // 微信需要大屏隐藏的部分=========================
  .move_lead {
    display: none;
  }
  .chat_bottom {
    display: none;
  }
}

// 分界线==============================

@media screen and (max-width: 768px) {
  .small_top {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 72px;
    position: relative;
    ul {
      position: absolute;
      left: 0;
      line-height: 72px;
      font-size: 22px;
    }
    img {
      height: 72px;
    }
  }
  .allproduct {
    width: 100%;
    .product_list {
      display: none;
    }
    .cycle {
      width: 100%;
      img {
        width: 100%;
        height: 190px;
      }
    }
  }

  // 微信中部
  .move_lead {
    width: 100%;
    height: 392px;
  }

  // 初创企业必备

  .company {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    div {
      width: 90%;
      height: 180px;
      display: flex;
      padding: 10px;
      .img {
        width: 40%;
        border: 2px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ul {
        display: flex;
        flex-direction: column;
        width: 58%;
        margin: 0 5px;
        position: relative;
        .product_title {
          color: black;
          font-size: 22px;
          overflow: hidden; /*超出长度的文字隐藏*/
          text-overflow: ellipsis; /*文字隐藏以后添加省略号*/
          white-space: nowrap;
        }
        .product_title:hover {
          overflow: visible;
        }
        .introduce_li {
          .product_introduce {
            line-height: 30px;
          }
        }

        .product_price {
          position: absolute;
          bottom: 0;
          span {
            font-size: 26px;
            color: red;
          }
        }
        button {
          display: none;
        }
      }
    }
    // 明星产品推荐

    .star_list {
      display: none;
    }
  }

  // 知识产权部分
  .knowledge {
    .knowledge_1 {
      display: none;
    }
    .knowledge_2 {
      width: 100%;
      .u84 {
        width: 49%;
      }
      .u86 {
        width: 49%;
      }
      .u88 {
        width: 100%;
      }
    }
  }

  // 微信端底部
  .chat_bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 18px;
      color: #ccc;
    }
  }

  // 广告部分
  .approve {
    display: none;
  }
  // 合作伙伴部分
  .partner {
    display: none;
  }
  // 推荐服务商
  .recommend {
    display: none;
  }
  .provider {
    display: none;
  }
  .again {
    display: none;
  }
  .product_star {
    display: none;
  }
  .star_list {
    display: none;
  }
}
</style>
