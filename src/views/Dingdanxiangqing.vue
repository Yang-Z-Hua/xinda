<template>
  <div class="goods_all">
    <p class="goods_one">首页/支付</p>
    <p class="goods_one goods_two">订单详情</p>
    <div class="goods_thr">
      <ul>
        <li>订单编号：<a class="goodsp_1">{{businessOrder.businessNo}}</a></li>
        <li>创建时间：{{createTime}}</li>
        <li>订单金额<a>{{businessOrder.totalPrice}}</a>元</li>
      </ul>
    <div class="goods_thr goods_thr2" v-for="(item,index) in serviceOrderList" :key="index">      
        <ul>
          <li>服务名称：{{item.serviceName}}</li>
          <li>单价：<a>{{item.unitPrice}}</a>元</li>
          <li>数量：<a>{{item.buyNum}}</a></li>
          <li>服务总额：<a>{{item.unitPrice*item.buyNum}}</a>元</li>
        </ul>
    </div> 
    </div>
    <p class="goods_one goods_way">支付方式</p>
    <p class="goods_one goods_noway">非网银支付</p>
    <div class="goods_box1">
      <input type="radio" class="goods_d" name="fname" @click="sbank">
      <img src="../assets/images/dingdan1.jpg" alt="" class="iimg1">
    </div>
    <p class="goods_one goods_noway">平台支付</p>
    <div class="goods_bb">    
      <div class="goods_box1">
        <input type="radio" class="goods_d" name="fname" @click="sweixin">
        <img src="../assets/images/dingdan2.jpg" alt="" class="iimg2">        
      </div>
      <div class="goods_box1">
        <input type="radio" class="goods_d" name="fname" @click="szhifubao">
        <img src="../assets/images/dingdan3.jpg" alt="" class="iimg2">        
      </div>
    </div>
    <a class="goods_one goods_zizhu">自助转账</a><a class="goods_xiaozi">因限额不能支付时，建议使用自助转账</a>
    <div class="goods_bank">
      <input type="radio" class="goods_d goods_ds" name="fname" @click="sxiane">
      <img src="../assets/images/dingdan.jpg" alt="" class="iimg3">              
    </div>
    <p class="goods_red">注：转账时请将订单编号备注在付款信息里：转账完成后，请通知客服</p>
    <div class="goods_jiesuan">
      <a class="goods_am">金额总计</a><a class="goods_shuzi">￥{{all}}.00</a>
      <div class="goods_kuang"><a @click="chuxian" class="goods_end" :href="sdsd">去结算</a></div>
    </div>
    <div class="imgw1" v-show="pic">
      <a href="javascript:void(0)"  @click="X" class="guanbi">×</a>
      <img :src="iii" class="imgw">   
      <p class="img_p">请使用扫一扫 进行扫码支付</p>
      <div><router-link class="ak ak1" to="./zhifu/zhifuchenggong">已完成支付</router-link><router-link class="ak" href="javascript:void(0)" to="./zhifu/zhifushibai">支付遇到问题</router-link></div> 
      <a class="img_p2" href="javascript:void(0)" @click="fanhui">返回重新选择支付方式</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sub_1:'800.00',
      sub_a:'1',
      sub_2:'1800.00',
      sub_b:'1',
      iiiiii:'',
      all: '',
      asd:'#',
      businessOrder:'',
      serviceOrderList:'',
      sd:'',
      createTime:'',
      pic:0,
      iii:'',
      sdsd:'javascript:void(0)',
    }
  },
  methods:{
  timestampToTime(we) {
        var date = new Date(we);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    },
  sweixin(){
    this.iii = './static/weixin.jpg'
  },
  szhifubao(){
    this.iii = './static/taobao.jpg'
  },
  X(){
    this.pic  = 0    
  },
  fanhui(){
    this.pic  = 0    
  },
  chuxian(){
    if(this.iii){
      this.pic  = 1
    }else{
      this.pic  = 0    
    }
  },
  sbank(){
    this.iii = './static/yinhang.png'
    },
  sxiane(){
    this.iii = './static/yinhang.png'    
    }
  },
  created() {
    this.all = this.$route.query.op
    this.ajax.post('/xinda-api/business-order/detail',this.qs.stringify({
      businessNo:this.$route.query.businessNo
    }))
    .then((data)=>{
      console.log(data.data.data)
      this.businessOrder = data.data.data.businessOrder;
      this.serviceOrderList = data.data.data.serviceOrderList;
      this.sd = data.data.data.businessOrder.createTime
      this.createTime = this.timestampToTime(this.sd)
    })
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.goods_all{
  width: 1238px;   
  margin: 7px auto 0;
  font-size: 14px;
}
.goods_one{
  margin-left: 22px;
}
.goods_two{
  color: #3d9bd9;
  margin-top: 18px;
  padding-bottom: 7px;
  border-bottom: 1px solid #bdbdbd;
}
// 订单详细信息
.goods_thr{
  margin-top: 38px;
  ul{
    height: 75px;
    display: flex;
    background-color: #f7f7f7;
    border: 1px solid #b6b6b6;
    li{
      width: 400px;
      text-align: center;
      line-height: 70px;
    }
  }
}
.goods_thr2{
  margin-top: 0;
}
a{
  color: #62a8dc;
}
.goods_way{
  margin-top: 45px;
  padding-bottom: 7px;
  border-bottom: 1px solid #bdbdbd;
  color: #76b0de;
}
.goods_noway{
  margin: 21px 0 26px 22px;
}
// 非网银支付
.goods_box1{
  width: 207px;
  height: 50px;
  border: 1px solid #efefef;
  margin-left: 24px;
  .iimg1{
    margin: 5px 0 0 30px;
  }
  .iimg2{
    margin: 9px 0 0 30px;    
  }
}
.iimg3{
    margin: 5px 0 0 30px;    
  }
.goods_bb{
  display: flex;
}
.goods_d{
  margin: -24px 0 0 3px;
  vertical-align: middle;
}
// bank
.goods_zizhu{
  display: inline-block;
  margin: 38px 16px 0 22px;
  color: #242424;
}
.goods_xiaozi{
  color: #242424;
  font-size: 12px;
}
.goods_bank{
  width: 422px;
  height: 68px;
  border: 1px solid #efefef;
  margin: 23px 0 0 24px;
}
// 红字
.goods_red{
  font-size: 1px;
  color: #ff6867;
  margin: 13px 0 0 22px;
}
// 结算
.goods_jiesuan{
  width: 190px;
  height: 80px;
  position: relative;
  margin: 80px 0 0 999px;
}
.goods_am{
  color: #020202;
  margin-top: 5px;
  display: inline-block;
}
.goods_shuzi{
  // margin-left: 10px;
  position: absolute;
  font-family: '黑体';
  font-weight: bold;
  color: #2793d3;
  font-size: 30px;
}
.goods_kuang{
  border: 1px solid #2693d4;
  width: 102px;
  height: 26px; 
  margin: 12px 0 0 77px;
  border-radius: 5px;
}
.goods_end{
  text-decoration: none;
  text-align: center;
  line-height: 26px;
  display: block;
}
.imgw1{
  width: 332px;
  height: 364px;
  position: absolute;
  top: 605px;
  left: 542px;
  background-color: #ffffff;
  box-shadow: 0 0 10px #a7a3a3;
  .guanbi{
    width: 332px;
    height: 40px;
    background-color: #f8f8f8;
    display: block;
    font-weight: bold;
    font-size: 25px;
    float: right;
  }
  .imgw{
    width: 188px;
    height: 188px;
    margin: 19px 0 0 74px;
 }
  .img_p{
    text-align: center;
  }
  .ak{
    font-size: 12px;
    padding: 5px 5px;
    border: 1px solid #6fc2c6;
    margin: 7px 13px 0 ;
    display: inline-block;
  }
  .ak1{
    margin-left: 72px;
  }
  .img_p2{
    color: #4eb5ba;
    margin-top: 20px;
    text-align: center;
    display: block;
  }
}
</style>
