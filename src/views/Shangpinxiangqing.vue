<template>
  <div>
    <div class="outer">
      <li class="top"><p>首页/</p><p>{{lei}}</p></li>
      
      
      <!-- 中间主要部分 -->


      <div class="content">
        <!-- 左部图片 -->
        <ul class="left"><img :src="img" alt=""></ul>

        <!-- 中间详细介绍 -->

        <ul class="center">
          <li><h2>{{title1}}</h2></li>
          <li class="introduce"><p>{{info}}</p></li>
          <li class="price"><p>价格</p><span>￥{{Price}}</span><p>{{unit}}</p></li>
          <div class="type">
            <ul><p>类型:</p></ul>
            <ul>
              <li><p>{{lei}}</p></li>
            </ul>
          </div>
          <li class="area"><p>地区：</p><p>{{arr.providerRegionText}}</p></li>
          <div class="num">
            <p>购买数量:</p>
            <li>
              <button @click="n--">-</button>
              <span>{{n}}</span>
              <button @click="n++">+</button>
            </li>
          </div>
          <li class="buy">
            <button class="but_1">立即购买</button>
            <button class="but_2">加入购物车</button>
          </li>
        </ul>

        <!-- 右部信息框 -->

        <ul class="right">
          <li class="first">
            <h2>顶级服务商</h2>
            <p>{{provider}}</p>
            <button>马上咨询</button>
          </li>
          <li class="second">
            <button>查看服务商</button>
          </li>
        </ul>
      </div>

      <!-- 中部广告 -->

      <img src="../assets/images/center.png" alt="" class="guanggao">
      
      <!-- 下部评价及服务项 -->

      <div class="message">

        <!-- 头部公告样式 -->

        <ul class="m_title">
          <li><p :class="changebg1" @click="bottom1()">服务内容</p><p :class="changebg2" @click="bottom2()">商品评价</p></li>
        </ul>

        <!-- 服务详情 -->
        <ul class="provide_message" v-show="show">
          <p v-html="serve"></p>
        </ul>

        <!-- 详细评价 -->

        <div class="appraise" v-show="disshow">
            <ul class="parsent">
              <li class="good"><span>{{goodParsent}}%</span><p>好评 </p></li>
              <div>
                <li><p>好评（{{goodParsent}}%）</p><span></span></li>
                <li><p>中评（{{middleParsent}}%）</p><span></span></li>
                <li><p>差评（{{badParsent}}%）</p><span></span></li>
              </div>
              <li class="buy">
                <p>客户印象</p>
                <p>暂无已添加的印象标签</p>
              </li>
            </ul>
            <ul class="word">
              <li><p>全部评价（{{all}}）</p></li>
              <li><p>好评（{{good}}）</p></li>
              <li><p>中评（{{middle}}）</p></li>
              <li><p>差评（{{bad}}）</p></li>
            </ul>
            <div class="in">
              <ul>
                <li class="appraise_title">
                  <p>评价</p>
                  <p>满意度</p>
                  <p>用户</p>
                </li>
                <li class="button">
                  <button disabled >上一页</button>
                  <p>1</p>
                  <button disabled >下一页</button>
                </li>
              </ul>         
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc:'http://123.58.241.146:8088/xinda/pic',
      arr:'',
      title1:'',
      img:'',
      info:'',
      Price:'',
      unit:'',
      provider:'',
      n:'1',
      currentIndex:-1,
      serve:'',
      all:'',
      goodParsent:'',
      middleParsent:'',
      badParsent:'',
      good:'',
      middle:'',
      bad:'',
      show:true,
      disshow:false,
      changebg2:'',
      changebg1:'num1',
      lei:''
    }
  },
  created(){
    window.scrollTo(0,0),
    this.ajax.post('/xinda-api/product/package/detail',this.qs.stringify({
        sId:this.$route.query.id,
    }))
    .then((data)=>{
      this.arr = data.data.data;
      this.title1 = this.arr.product.name;
      this.img = this.imgSrc+this.arr.product.img;
      this.info = this.arr.provider.providerInfo;
      this.Price = this.arr.product.marketPrice;
      this.unit = this.arr.unit;
      this.provider = this.arr.provider.name;
      this.serve = this.arr.providerProduct.serviceContent;
      this.send(this.title1);
    });
    
    this.ajax.post('/xinda-api/product/judge/detail',this.qs.stringify({
       serviceId:'efddc8a338944e998ff2a7142246362b',
    }))
    .then((data)=>{
      this.arr1 = data.data.data;
      this.good = this.arr1.goodNum;
      this.middle = this.arr1.midNum;
      this.bad = this.arr1.badNum;
      this.all = this.good+this.bad+this.middle;
      this.goodParsent = this.good*1/1*this.all;
      this.middleParsent = this.middle*1/1*this.all;
      this.badParsent = this.bad*1/1*this.all;
      
    })
  },
  
  methods:{
    test(num){
      this.currentIndex = num;
    },
    bottom1(eve){
      this.show = true;
      this.disshow = false;
      this.changebg1 = 'num1';
      this.changebg2 = 'num2';
    },
    bottom2(){
      this.disshow = true;
      this.changebg2 = 'num1';
      this.changebg1 = 'num2';
      this.show = false;
    },
    
    send(back){
      this.ajax.post('/xinda-api/product/style/list')
    .then((data)=>{
      var da = data.data.data;
      var x='';
      var y='';
      var z='';
      for(x in da){
          for(y in da[x].itemList){
            var erji = da[x].itemList[y];
            for(z in erji.itemList){
              if(erji.itemList[z].name == back){
                this.lei = da[x].name;
              }
            }
          
          }
        }
    })
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.outer{
  display: flex;
  flex-direction: column;
  align-items: center;
  .top{
    display: flex;
    width: 1200px;
    line-height: 43px;
    font-size: 14px;
    margin: 14px 0 0 0;
    color: #686868;
  }

  // 中间主要部分
  .content{
    width: 1200px;
    display: flex;

    // 左部图片

    .left{
      width: 525px;
      img{
      width: 525px;
      }
    }

    // 中间详细介绍

    .center{
      margin-left: 32px;
      width: 379px;
      h2{
        line-height: 50px;
      }
      p{
        font-size: 13px;
        color: #676767;
      }
      .introduce{
        line-height: 25px;
        text-indent: 2em
      }
      .price{
        display: flex;
        width: 387px;
        height: 75px;
        background-color: #f7f7f7;
        line-height: 75px;
        padding-left: 8px;
        span{
          font-size: 30px;
          color: #ff0101;
          line-height: 65px;
        }
      }
      .type{
        display: flex;
        line-height:27px;
        li{
          line-height: 19px;
          padding: 4px 6px;
          margin-bottom: 5px;
          p{
          color: #52a5db;
          }
        }
      }
      .area{
        display: flex;
        margin: 10px 0;
      }
      .num{
        display: flex;
        line-height: 24px;
        li{
          display: flex;
          margin-left: 5px;
          button{
            width: 30px;
            height: 24px;
            outline: none;
            border: 1px solid #ccc;
            background-color: #f7f8fa;
          }
          span{
            width: 48px;
            height: 22px;
            text-align: center;
            border: 1px solid #ccc;
            border-left: none;
            border-right: none;
          }
        }
      }
      .buy{
          margin-top: 15px;
          margin-left: 60px;
        button{
          outline: none;
          border: none;
          font-size: 12px;
          line-height: 25px;
          width: 93px;
          height: 25px;        
        }
        .but_1{
          color: #fff;
          background-color: #2693d4;
          margin-right: 20px;
        }
        .but_2{
          background-color: #fff;
          border: 1px solid #2693d4;
          color: #2693d4;
        }
      }
    }

    // 右部信息框

    .right{
      width: 198px;
      height: 232px;
      border:1px solid #2693d4;
      margin: 57px 0 0 54px;
      .first{
        width: 100%;
        height: 158px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
        button{
          width: 88px;
          height: 22px;
          outline: none;
          border: 1px solid #2693d4;
          color: #52a5db;
          background-color: #fff;
        }
      }
      .second{
        width: 100%;
        height: 74px;
        background-color: #bdddf2;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
          width: 110px;
          height: 30px;
          margin: auto;
          border: none;
          background-color: #2693d4;
          color: #fff;
        }
      }
    }
  }
}

.guanggao{
  margin: 20px 0;
}

// 下部评价及服务项

.message{
  width: 1200px;
  
  .m_title{
    width: 100%;
    border-bottom: 1px solid #ccc;
    line-height: 41px;
    display: flex;
    border: 1px solid #ccc;
    background-color: rgb(240, 238, 238);
    li{
      display: flex;
      text-align: center;
      p{
        width: 135px;
        cursor: pointer;
      }
      .num1{
        background-color: #2693d4;
        color: #fff;
      }
      .num2{
        background-color: rgb(240, 238, 238);
        color: black;
      }
    }
  }

  // 服务详情


  .provide_message{
    padding-bottom: 50px;
    padding-top: 50px;
    border: 1px solid #ccc;
    border-top: none;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #676767;
    line-height: 30px;
    margin-bottom: 69px;
    p{
      margin-left: 10px;
    }
  }

  // 详细评价
  
  .appraise{
      width: 100%;
      .parsent{
        width: 100%;
        height: 120px;
        border: 1px solid #ccc;
        border-top: none;
        display: flex;
        align-items: center;
        li{
          display: flex;
        }
        .good{
          color: #2693d4;
          margin: 0 15px;
          span{
            font-size: 45px;
            font-weight: bold;
          }
          p{
            padding-top: 28px;
            margin-left: 9px;
          }
        }
        div{
          line-height: 25px;
          margin-left: 10px;
        }
        .buy{
          height: 80px;
          flex-direction: column;
          margin-left: 500px;
          border-left: 1px solid #ccc;
          padding-left: 30px;
          line-height: 27px;
        }
      }
      .word{
        width: 1200px;
        height: 48px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        display: flex;
        li{
          line-height: 48px;
          text-align: center;
          width: 117px;
          height: 48px;
          border-right: 1px solid #ccc;
        }
      }
      .in{
        width: 1160px;
        height: 500px;
        border: 1px solid #ccc;
        border-top: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        ul{
          width: 1100px;
          padding: 20px;
          border-left: 1px solid #ccc;
          display: flex;
          flex-direction: column;
        }
        li{      
          display: flex;
          line-height: 35px;
          justify-content: space-around;
          margin-left: 10px;
          
          
        }
        .button{
          justify-content: center;
          text-align: center;
          margin: 10px;
          margin-top: 50px;
          button{
            width: 50px;
            height: 30px;
            outline: none;
            border: 1px solid #ccc;
            margin: 0 5px;
          }
           p{
             width: 25px;
             line-height: 25px;
             border: 1px solid rgb(74, 177, 177);
           }
          }
        .appraise_title{
          border-bottom: 1px solid #ccc;
        }
      }
    }
}
</style>
