<template>
  <div class="goods_all">
    <p class="goods_one">首页/支付</p>
    <p class="goods_one goods_two">订单详情</p>
    <div class="goods_thr">
      <ul>
        <li>订单编号：<a class="goodsp_1">{{number_1}}</a></li>
        <li>创建时间：2017-07-01 01：12：21</li>
        <li>订单金额<a>{{sub}}</a>元</li>
      </ul>
      <ul>
        <li>服务名称：注册分公司</li>
        <li>单价：<a>{{sub_1}}</a>元</li>
        <li>数量：<a>{{sub_a}}</a></li>
        <li>服务总额：<a>{{sub_1*sub_a}}</a>元</li>
      </ul>
      <ul>
        <li>服务名称：代理记账</li>
        <li>单价：<a>{{sub_2}}</a>元</li>
        <li>数量：<a>{{sub_b}}</a></li>
        <li>服务总额：<a>{{sub_2*sub_b}}</a>元</li>
      </ul>
    </div>
    <p class="goods_one goods_way">支付方式</p>
    <p class="goods_one goods_noway">非网银支付</p>
    <div class="goods_box1">
      <input type="radio" class="goods_d">
    </div>
    <p class="goods_one goods_noway">平台支付</p>
    <div class="goods_bb">    
      <div class="goods_box1">
        <input type="radio" class="goods_d">
      </div>
      <div class="goods_box1">
        <input type="radio" class="goods_d">
      </div>
    </div>
    <a class="goods_one goods_zizhu">自助转账</a><a class="goods_xiaozi">因限额不能支付时，建议使用自助转账</a>
    <div class="goods_bank">
        <input type="radio" class="goods_d goods_ds">      
    </div>
    <p class="goods_red">注：转账时请将订单编号备注在付款信息里：转账完成后，请通知客服</p>
    <div class="goods_jiesuan">
      <a class="goods_am">金额总计</a><a class="goods_shuzi">￥{{all}}</a>
      <div class="goods_kuang"><a href="#" class="goods_end">去结算</a></div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number_1:'S6272827272727211',
      sub:'2000.00',
      sub_1:'800.00',
      sub_a:'1',
      sub_2:'1800.00',
      sub_b:'1',
      iiiiii:'',
      all: '800.00'
    }
  },
  methods:{
    
  },
    created() {
    this.ajax.post('/xinda-api/pay/detail',this.qs.stringify({

    }))
    .then((data)=>{
      console.log(data)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.goods_all{
  width: 1238px;
  height: 1008px;
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
  width: 1202px;
  height: 227px;
  margin: 38px auto 0;
  border: 1px solid #b6b6b6;
  ul{
    height: 75px;
    border-bottom: 1px solid #b6b6b6;
    display: flex;
    li{
      width: 400px;
      text-align: center;
      line-height: 70px;
      background-color: #f7f7f7;
    }
  }
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
}
.goods_bb{
  display: flex;
}
.goods_d{
  margin: 17px 0 0 3px;
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
.goods_ds{
  margin-top: 28px;
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
</style>
