<template>
  <div class="outer">
    <div class="allproduct">
      <div class="product_list">
        <ul v-on:mouseover="on" v-on:mouseout="off">
          <li class="title">
            <img src="../assets/images/tax.png" alt="">
            <p>财税服务</p>
          </li>
          <li class="example">
            <a href="##">代理记账</a>
            <a href="##">税务代办</a>
            <a href="##">审计报告</a>
          </li>
          <li v-show="a" class="message_a message">

          </li>
        </ul>
        <ul>
          <li class="title">
            <img src="../assets/images/tax.png" alt="">
            <p>公司工商</p>
          </li>
          <li class="example">
            <a href="##">公司注册</a>
            <a href="##">公司变更</a>
          </li>
          <li v-show="b" class="message_b message">

          </li>
        </ul>
        <ul>
          <li class="title">
            <img src="../assets/images/tax.png" alt="">
            <p>知识产权</p>
          </li>
          <li class="example">
            <a href="##">专利申请</a>
            <a href="##">商标注册</a>
            <a href="##">版权保护</a>
          </li>
          <li v-show="c" class="message_c message">

          </li>
        </ul>
        <ul class="list_bottom">
          <li class="title">
            <img src="../assets/images/tax.png" alt="">
            <p>社保办理</p>
          </li>
          <li class="example">
            <a href="##">企业社保</a>
            <a href="##">个人社保</a>
          </li>
          <li v-show="d" class="message_d message">

          </li>
        </ul>
      </div>
      <div class="cycle">
          <div class="swiper-container HM_lb ">
              <div class="swiper-wrapper">
                  <div class="swiper-slide " style="width:100%">
                      <img class="img-responsive" src="../assets/images/logo.jpg" alt="">
                  </div>
                  <div class="swiper-slide " style="width:100%">
                      <img class="img-responsive" src="../assets/images/logo.jpg" alt="">
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
      <div>
        <ul><img src="../assets/images/u10.png" alt=""></ul>
      </div>
      <div>
        <ul><img src="../assets/images/u12.png" alt=""></ul>
      </div>
      <div>
        <ul><img src="../assets/images/u14.png" alt=""></ul>
      </div>
      <div>
        <ul><img src="../assets/images/u16.png" alt=""></ul>
      </div>
    </div>

    <!-- 初创企业必备 -->
    <ul class="product_star">
      <p>初创企业必备</p>
      <li class="triangle"></li>
    </ul>
    <div class="company">
      <ul><img src="../assets/images/qiye.png" alt=""></ul>
      <ul><img src="../assets/images/qiye.png" alt=""></ul>
      <ul><img src="../assets/images/qiye.png" alt=""></ul>
      <ul><img src="../assets/images/qiye.png" alt=""></ul>
    </div>
    <!-- 知识产权 -->
    <ul class="product_star">
      <p>知识产权</p>
      <li class="triangle"></li>
    </ul>
    <ul class="knowledge">
      <li><img src="../assets/images/u82.png" alt="" class="u82"></li>
      <li class="knowledge_2">
        <img src="../assets/images/u84.png" alt="" class="u84">
        <img src="../assets/images/u86.png" alt="" class="u86">
        <img src="../assets/images/aaa.png" alt="" class="u88">
      </li>
    </ul>
    <img src="../assets/images/approve.png" alt="" class="approve">
    <!-- 推荐服务商 -->
    <ul class="product_star">
      <p>推荐服务商</p>
      <li class="triangle"></li>
    </ul>
    <ul class="provider">
      <img src="../assets/images/zanshi.png" alt="">
      <img src="../assets/images/zanshi.png" alt="">
      <img src="../assets/images/zanshi.png" alt="">
      <img src="../assets/images/zanshi.png" alt="">
    </ul>
    <!-- 合作伙伴 -->
    <ul class="product_star">
      <p>合作伙伴</p>
      <li class="triangle"></li>
    </ul>
    <img src="../assets/images/zanshi2.png" alt="" class="partner">
  </div>
</template>

<script>
import '../assets/swiper.js'
export default {
  name: 'HelloWorld',
  created() {
    this.ajax.post('/xinda-api/recommend/list')
    .then((data)=>{
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      a:0,
      b:0,
      c:0,
      d:0,
    }
  },
  mounted(){
     var mySwiper = new Swiper('.HM_lb', {
  direction: 'horizontal',
  loop: true,
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  // 如果需要分页器
  pagination: '.swiper-pagination',
  // 如果需要滚动条
  //   scrollbar: '.swiper-scrollbar',
  effect: 'fade',
  fade: {
    crossFade: true,
  }
})
  },
  methods:{
  on:function(eve){
    this.a = 1;
  },
  off:function(eve){
    this.a = 0;
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/swiper.css';
.outer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.allproduct{
  width: 1200px;
  height: 400px;
  display: flex;
  .product_list{
    width: 200px;
    height: 400px;
    background-color: #1b2d43;
    ul{
      padding: 18px 14px 17px;
      position: relative;
      p{
        color: #d5d7d9;
        margin: 0 9px;
      }
      a{
        color: #d5d7d9;
        margin: 0 2px 0 18px;
        text-decoration: none;
      }
      li{
        display: flex;
        flex-wrap: wrap;
      }
      .title{
        line-height: 26px;
        font-size: 16px;
      }
      .example{
        line-height: 25px;
        font-size: 14px;
        padding-left: 17px;
      }
      .message{
        width: 1000px; 
        background-color: red;
        position: absolute;
        top: 0;
        left: 200px;
      }
      .message_a{
        height: 112px;
      }
      .message_b{
        height: 88px;
      }
      .message_c{
        height: 113px;
      }
      .message_d{
        height: 89px;
      }
    }
    .list_bottom{
      padding:18px 14px 19px; 
    }
    ul:hover{
      background-color: #2693d4;
    }
  }
  .cycle{
    width: 1000px;
    height: 400px;
  }
}

// 明星产品
.product_star{
  margin-top: 45px;
  position: relative;
  width: 1200px;
  line-height: 31px;
  font-size: 14px;
  border-bottom: solid 2px #2393d3;
  p{
    margin-left: 10px;
  }
  li{
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
.star_list{
  width: 1200px;
  height: 400px;
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 276px;
      height: 404px;
    }
  }
}
.company{
  width: 1200px;
  height: 464px;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
}

// 知识产权
.knowledge{
  margin-top: 48px;
  width: 1200px;
  height: 482px;
  display: flex;
  justify-content: space-between;
  .knowledge_2{
    width: 850px;
    height: 482px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .u82{
    width: 327px;
    height: 482px;
  }
  .u84{
    width: 414px;
    height: 230px;;
  }
  .u86{
    width: 414px;
    height: 230px;;
  }
}
.approve{
  margin-top: 43px;
}
.provider{
  width: 1200px;
  display: flex;
  margin-top: 48px;
  img{
    margin-right: 39px;
  }
}
.partner{
  margin-top: 48px;
  margin-bottom: 100px;
}
</style>
