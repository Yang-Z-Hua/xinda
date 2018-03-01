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
    <div class="goods_box1">
      <input type="radio" class="goods_d">
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
      sub:'2000',
      sub_1:'800',
      sub_a:'1',
      sub_2:'1800',
      sub_b:'1',
      iiiiii:''
    }
  },
  methods:{
    
  },
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
</style>
