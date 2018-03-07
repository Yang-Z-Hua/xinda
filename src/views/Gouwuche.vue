<template>
  <div class="shopping">
    <p>首页/购物车</p>
    <p class="shopping_ag">全部商品（{{shopping_number1}}）</p>
    <ul class="shopping_list">
      <li>公司</li>
      <li>服务商品</li>
      <li>单价</li>
      <li>数量</li>
      <li>金额</li>
      <li>操作</li>
    </ul>
    <p class="shopping_dianpu">店铺：信达北京服务中心</p>
    <ul class="shopping_details" v-show="shopping_show">
      <img src="../assets/images/logo.jpg" alt="">
      <li>注册分公司</li>
      <li>￥{{shopping_number2}}</li>
      <li><a @click="shopping_jian" href="javascript:void(0)">-</a>{{shopping_number3}}<a @click="shopping_jia" href="javascript:void(0)">+</a></li>
      <li class="shopping_c1">￥{{shopping_number3*shopping_number2}}</li>
      <li @click="shopping_del">删除</li>
    </ul>
    <div class="goods_jiesuan">
      <a class="goods_am">金额总计</a><a class="goods_shuzi">￥{{shopping_number3*shopping_number2}}</a>
      <div class="sd">
        <div class="goods_kuang"><a href="#" class="goods_end">继续购物</a></div>
        <div class="goods_kuang"><a href="#" class="goods_end">去结算</a></div>
      </div>
    </div>
    <p class="shopping_remen">热门服务</p>
    <div class="shopping_ia">
      <div class="shopping_box2" v-for="(item,index) in culb" :key="index">
        <p class="shopping_p1">{{item.serviceName}}</p>
        <img src="../assets/images/goods_gouwu.jpg" alt="" class="shopping_img1">
        <p class="shopping_p2">{{item.serviceInfo}}</p>
        <p class="shopoing_p3">销量:</p>
        <p class="shopoing_p4">￥1400.00</p>
        <a class="shopoing_p5">原价:￥2000.00</a><a href="javascrip:void(0)" class="shopoing_p6">查看详情>>></a>
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
      shopping_number1:1,
      shopping_number2:'800.00',
      shopping_number3:1,
      shopping_show:1,
      culb:'',
      vfvfv:'http://123.58.241.146:8088/xinda/pic'
    }
  },
  methods:{
    shopping_del(){
      this.shopping_show = 0;
    },
    shopping_jian(){
      this.shopping_number3=this.shopping_number3-1
      if(this.shopping_number3<0){
        this.shopping_number3 = 0;
      }
    },
    shopping_jia(){
      this.shopping_number3=this.shopping_number3+1      
    }
  },
  created() {
    this.ajax.post('/xinda-api/recommend/list',this.qs.stringify({	

    }))
    .then((data)=>{
      console.log(data.data.data)
      this.culb = data.data.data.hq;
      console.log(this.culb)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
// 外框
.shopping{
  width: 1205px;
  margin: 24px auto 80px;
  font-size: 14px;
  color: #2a2a2a;
}
.shopping_ag{
  color: #75b2df;
  padding: 18px 0 6px 70px;
  border-bottom: 1px solid #bdbdbd;
}
// 菜单列表
.shopping_list{
  display: flex;
  li{
    margin: 23px 85px 10px 80px;
  }
}
.shopping_dianpu{
  margin-left: 80px;
}
// 详情
.shopping_details{
  display: flex;
  width: 1205px;
  height: 78px;
  background-color: #f7f7f7;
  margin: 36px 0 0 0;
    img{
      width: 124px;
      height: 57px;
      margin-right: 50px
    }
    li{
    margin: 23px 80px 10px 80px;
    a{
      background-color: #bdbdbd;
      font-size: 20px;
      font-weight: bold;
      color: #202020;
      text-decoration: none;
    }
  }
    .shopping_c1{
      color: #4ca1d7;
    }
  }
  .shopping_remen{
    padding: 56px 0 7px 71px;
    border-bottom: 1px solid #bdbdbd;
    color: #65a8dc;
  }
  // 结算
.goods_jiesuan{
  width: 221px;
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
  margin: 12px 0 0 1px;
  border-radius: 5px;
}
.goods_end{
  text-decoration: none;
  text-align: center;
  line-height: 26px;
  display: block;
}
.sd{
  display: flex;
}
.shopping_box2{
  width: 267px;
  height: 191px;
  border: 1px solid #eeeeee;
}
.shopping_ia{
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  div{
    text-align: center;
  }
}
.shopping_p1{
  font-size: 18px;
  width: 230px;
  white-space:nowrap;
  overflow:hidden;
  margin: 10px auto 0;
  text-overflow:ellipsis;
}
.shopping_img1{
  margin: 13px 0 0 -50px;
}
.shopping_p2{
  white-space:nowrap;
  overflow:hidden;
  margin: 0 auto;
  text-overflow:ellipsis;
  width: 230px;
}
.shopoing_p3{
  margin: 9px 2px 3px -190px;
}
.shopoing_p4{
  color: #2694d3;
  font-size: 45px;
  font-family: '黑体'
}
.shopoing_p5{
  margin: 5px 36px 3px 4px;
  display: inline-block;
  text-decoration:line-through;
}
.shopoing_p6{
  text-decoration: none;
  color: #53a2db;
}

</style>
