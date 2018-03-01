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
      <img src="../assets/images/u10.png" alt="">
      <img src="../assets/images/u12.png" alt="">
      <img src="../assets/images/u14.png" alt="">
      <img src="../assets/images/u16.png" alt="">
    </div>

    <!-- 初创企业必备 -->
    <ul class="product_star">
      <p>初创企业必备</p>
      <li class="triangle"></li>
    </ul>
    <div class="company">
      <div>
        <ul>
          <img src="" alt="">
          <p class="product_title">{{title1}}</p>
          <li><p class="product_introduce">{{introduce1}}</p></li>
          <p class="product_price"><span>￥{{price1}}</span>{{unit1}}</p>
          <button>查看详情</button>
        </ul>
      </div>
      <div>
        <ul>
          <img src="" alt="">
          <p class="product_title">{{title2}}</p>
          <li><p class="product_introduce">{{introduce2}}</p></li>
          <p class="product_price"><span>￥{{price2}}</span>{{unit2}}</p>
          <button>查看详情</button>
        </ul>      
      </div>
      <div>
        <ul>
          <img src="" alt="">
          <p class="product_title">{{title3}}</p>
          <li><p class="product_introduce">{{introduce3}}</p></li>
          <p class="product_price"><span>￥{{price3}}</span>{{unit3}}</p>
          <button>查看详情</button>
        </ul>
      </div>
      <div>
        <ul>
          <img src="" alt="">
          <p class="product_title">{{title4}}</p>
          <li><p class="product_introduce">{{introduce4}}</p></li>
          <p class="product_price"><span>￥{{price4}}</span>{{unit4}}</p>
          <button>查看详情</button>
        </ul>
      </div>
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
      console.log(data.data.data);
      this.title1 = data.data.data.product[0].serviceName.split('（')[0];
      this.introduce1 = data.data.data.product[0].serviceInfo;
      this.price1 = data.data.data.product[0].marketPrice;
      this.unit1 = data.data.data.product[0].unit;
      this.title2 = data.data.data.product[1].serviceName.split('（')[0];
      this.introduce2 = data.data.data.product[1].serviceInfo;
      this.price2 = data.data.data.product[1].marketPrice;
      this.unit2 = data.data.data.product[1].unit;
      this.title3 = data.data.data.product[2].serviceName.split('（')[0];
      this.introduce3 = data.data.data.product[2].serviceInfo;
      this.price3 = data.data.data.product[2].marketPrice;
      this.unit3 = data.data.data.product[2].unit;
      this.title4 = data.data.data.product[3].serviceName.split('(')[0];
      this.introduce4 = data.data.data.product[3].serviceInfo;
      this.price4 = data.data.data.product[3].marketPrice;
      this.unit4 = data.data.data.product[3].unit;
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      a:0,
      b:0,
      c:0,
      d:0,
      title1:'',
      introduce1:'',
      price1:'',
      unit1:'',
      title2:'',
      introduce2:'',
      price2:'',
      unit2:'',
      title3:'',
      introduce3:'',
      price3:'',
      unit3:'',
      title4:'',
      introduce4:'',
      price4:'',
      unit4:'',
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
    crossFade: 4,
  }
})
  },
  methods:{
  on:function(eve){
    this.a = 1;
  },
  off:function(eve){
    this.a = 0;
  },
  
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
  img{
      width:254px;
      height: 382px;
    }
}
.company{
  width: 1200px;
  height: 464px;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  ul{
    width: 270px;
    height: 462px;
    border: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    .product_title{
        font-size: 16px;
        font-weight: bold;
        color: black;
        margin-top: 48px
      }
      li{
        width: 90%;
        height: 70px;
        margin-top: 14px;
        .product_introduce{
          font-size: 14px;
      }
      }
      
      .product_price{
        font-size: 14px;
        color:#3d3d3d;
        margin-top: 28px;
        span{
          font-size: 24px;
          color:#2692d2;
        }
      }
      button{
        width: 157px;
        height: 44px;
        outline: none;
        border: 2px solid #2693d4;
        border-radius: 4px;
        color: #2693d4;
        font-size: 16px;
        background-color: transparent;
        margin-top: 36px;
      }
  }
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
