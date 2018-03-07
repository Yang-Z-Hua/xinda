<template>
  <div>
    <div class="outer">
      <li class="top"><p>首页/</p><p>{{title1}}</p></li>
      <div class="content">
        <ul class="left"><img :src="imgSrc+img" alt=""></ul>
        <ul class="right">
          <li><h2>{{title1}}</h2></li>
          <li class="introduce"><p>{{info}}</p></li>
          <li class="price"><p>价格</p><span>￥{{Price}}</span><p>{{unit}}</p></li>
          <div class="type">
            <ul><p>类型:</p></ul>
            <ul>
              <li v-for="(a,index) in arr.serviceList" :key="index"><p>{{a.serviceName}}</p></li>
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
      </div>
      <img src="../assets/images/center.png" alt="" class="center">
      <div class="message">
        <ul class="m_title">
          <li><p>服务内容</p></li>
          <li><p>商品评价</p></li>
        </ul>
        <ul>
          123
        </ul>
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
      n:'1'
    }
  },
  created(){
  this.ajax.post('/xinda-api/product/package/detail',this.qs.stringify({
        sId:'0cb85ec6b63b41fc8aa07133b6144ea3'
    }))
    .then((data)=>{
      this.arr = data.data.data;
      this.title1 = this.arr.product.name;
      this.img = this.arr.product.img;
      this.info = this.arr.product.info;
      this.Price = this.arr.product.marketPrice;
      this.unit = this.arr.unit;
      console.log(this.arr)
    });
  },
  methods:{

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
  .content{
    width: 1200px;
    display: flex;
    .left{
      img{
      width: 525px;
      }
    }
    .right{
      margin-left: 32px;
      width: 387px;
      p{
        font-size: 13px;
        color: #676767;
      }
      .introduce{
        line-height: 50px;
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
  }
}
.center{
  margin: 22px 0 38px;
}
.message{
  width: 1200px;
  border: 1px solid #ccc;
  .m_title{
    width: 100%;
    border-bottom: 1px solid #ccc;
    line-height: 41px;
    display: flex;
    li{
      width: 135px;
      text-align: center;
    }
  }
}
</style>
