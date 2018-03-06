<template>
  <div class="outer">
    <div class="allproduct">
      <div class="product_list">
        <ul v-for="(a,index) in arr1" :key="index" @mouseover="show(index)">
          <li class="title">
            <img src="../assets/images/tax.png" alt="">
            <p @click="firstGo(index)">{{a.name}}</p>
          </li>
          <li class="example">
            <a v-for="(b,key1) in arr1[index].itemList" :key="key1" @click="secondGo(b,index)">{{b.name}}</a>
          </li>
          <li class="message">
            <div v-for="(b,key1) in arr1[index].itemList" :key="key1">
              <li class="secondTitle"><p>{{b.name}}></p></li>
              <li class="thirdTitle"><a v-for="(c,key2) in arr1[index].itemList[key1].itemList" :key="key2" @click="thirdGo(c,index,b)">{{c.name}}</a></li>            
            </div>
          </li>
        </ul>
      </div>
      <div class="cycle">
          <div class="swiper-container HM_lb">
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
      <div v-for="(a,index) in arr.hq" :key="index">
          <li class="img"><img :src="imgSrc+a.providerImg" alt=""></li>
          <p class="product_title">{{a.serviceName.split('（')[0]}}</p>
          <li><p class="product_introduce">{{a.serviceInfo}}</p></li>
          <p class="product_price"><span>￥{{a.marketPrice}}</span>{{a.unit}}</p>
          <button>查看详情</button>
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
      this.arr = data.data.data;
    });
    this.ajax.post('/xinda-api/product/style/list')
    .then((data)=>{
      this.arr1 = data.data.data;
      console.log(this.arr1)
    })
  },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:'',
      arr1:'',
      arr2:'',
      imgSrc:'http://123.58.241.146:8088/xinda/pic',
      currentIndex:-1,
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
  show(index){
    console.log(index)
  },
  // off:function(eve){
  //   this.a = 0;
  // },
  firstGo(index){
    this.$router.push({
        path:'/inner/liebiaoye',
        query:{
          id:this.arr1[index].id
        }
      })
  },
  secondGo(b,index){
    this.$router.push({
        path:'/inner/liebiaoye',
        query:{
          id:index,
          id2:b.id,
          code:b.code
        }
      })
  },
  thirdGo(c,index,b){
    this.$router.push({
        path:'/inner/liebiaoye',
        query:{
          id:index,
          id2:b.id,
          id3:c.id
        }
    })
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
  display: flex;
  .product_list{
    width: 200px;
    background-color: #1b2d43;
    ul{
      padding: 18px 14px 18px;
      position: relative;
      p{
        color: #d5d7d9;
        margin: 0 9px;
      }
      a{
        color: #d5d7d9;
        margin: 0 2px 0 18px;
        text-decoration: none;
        cursor: pointer;
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
        line-height: 28px;
        font-size: 14px;
        padding-left: 17px;
      }
      .message{
        width: 1000px; 
        height: 100%;
        background-color: red;
        position: absolute;
        z-index: 9;
        top: 0;
        left: 200px;
        opacity: .4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 13px;
        a{
          border-left: 1px solid #ccc;
          padding: 0 5px 0 10px;
          margin: 3px 0;
        }
        div{
          width: 1000px;
          display: flex;
          line-height: 17px;
          li{
            display: flex;
            flex-wrap: wrap;         
          }
          .secondTitle{
            width: 100px;
          }
          .thirdTitle{
            width: 900px;
          }
        }
        // display: none;
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
 
  div{
    width: 270px;
    height: 462px;
    border: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img{
      display: flex;
      align-items: center;
      height: 158px;
      img{
          width: 256px;    
  }
    }
    .product_title{
        font-size: 16px;
        font-weight: bold;
        color: black;
        margin-top: 20px
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
