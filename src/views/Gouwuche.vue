<template>
  <div>
    <!-- pc -->
    <div>
      <div class="shopping" v-show="ssp">
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
        <div v-for="(item,index) in shop" :key="index">
          <p class="shopping_dianpu">店铺：{{item.providerName}}</p>
          <ul class="shopping_details" v-show="shopping_show">
            <img :src="'http://123.58.241.146:8088/xinda/pic'+item.providerImg" alt="">
            <li class="shopping_g">{{item.serviceName}}</li>
            <li>￥{{item.unitPrice}}</li>
            <li class="jiajia">
              <a @click="jjian(item)" href="javascript:void(0)" class="asp">-</a>
              <span>{{item.buyNum}}</span>
              <a @click="jjia(item)" href="javascript:void(0)" class="asp">+</a>
            </li>
            <li class="shopping_c1">￥{{item.unitPrice*item.buyNum}}</li>
            <el-button type="text" @click="open2(item.serviceId)" ><a href="javascript:void(0)" class="dell">删除</a></el-button>
          </ul>
        </div>
        <div class="goods_jiesuan">
          <a class="goods_am">金额总计</a><a :class="goods_shuzi">￥{{total}}.00</a>
          <div class="sd">
            <div class="goods_kuang"><router-link to="/"  class="goods_end">继续购物</router-link></div>
            <div class="goods_kuang"><a  @click="jiesuan" class="goods_end" href="javascript:void(0)">去结算</a></div>
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
      <div class="shopping_kong" v-show="swp">
        <p>购物车为空，请返回继续购物</p>
        <router-link to="/" class="shouye_pc">返回首页</router-link>         
      </div>
    </div>
    <!-- 微信端 -->
    <div class="weixin_p">
      <div :class="shopping_phone">
        <div class="ph_top">
          <p class="ph_1">购物车里有<a>{{shopping_number1}}</a>件商品</p>
        </div>
        <div class="ph_con" v-for="(item,index) in shop" :key="index" @mouseover="outt(item.serviceId,item.buyNum)">
          <p class="ph_dianpu">{{item.providerName}}</p>
          <ul class="ph_details" v-show="shopping_show">
            <img :src="'http://123.58.241.146:8088/xinda/pic'+item.providerImg" alt="" class="ph_img">
            <ul class="ph_g">
              <ul class="ph_g3">
                <li class="ph_g1">{{item.serviceName}}</li>
                <!-- <li @click="shopping_del(item.serviceId)" class="ph_dell"><a href="javascript:void(0)">删除订单</a></li> -->
                <el-button type="text" @click="open2(item.serviceId)" ><a href="javascript:void(0)" class="dell">删除订单</a></el-button>
              </ul>  
              <li class="ph_g2"><a class="ph_red">￥{{item.unitPrice}}</a>　元</li>
              <li class="ph_jiajia">购买数量 : <a @click="key=1,--item.buyNum" href="javascript:void(0)" class="asph">-</a>{{item.buyNum=item.buyNum>=1?item.buyNum:1}}<a @click="key=1,++item.buyNum" href="javascript:void(0)" class="asph">+</a></li>
              <li class="ph_c">北京市　朝阳区</li>
            </ul>
          </ul>
        </div>
        <p class="ph_bo">共计<a class="ph_ta">{{shopping_number1}}</a>件商品　小计：<a class="ph_ta">￥{{total}}.00</a></p>
        <ul class="ph_bottom">
          <li class="ph_wub">合计 : <a class="ph_ta">￥{{total}}.00</a></li>
          <li class="ph_sy"><a @click="jiesuan" href="javascript:void(0)">去结算</a></li>
        </ul>  
      </div>
      <div :class="shp_kong">
        <img src="../assets/images/gou_kong.jpg" alt="" class="kong">
        <div class="qu"><router-link to="/" class="shouye">去首页</router-link></div>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      shopping_number1: "",
      shopping_show: 1,
      culb: "",
      vfvfv: "http://123.58.241.146:8088/xinda/pic",
      shop: [],
      goods_shuzi: "goods_shuzi",
      jian: "",
      allm: "",
      key: 1,
      shopping_phone: "shopping_phon",
      shp_kong: 0,
      ssp: 1,
      rq: 0,
      time: []
    };
  },
  methods: {
    ...mapActions(["setNum"]),
    ...mapActions(["jianNum"]),
    //
    open2(serviceID) {
      this.$confirm("此操作将永久删除该产品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$parent.$parent.status = "wait";
          this.ajax
            .post(
              "/xinda-api/cart/del",
              this.qs.stringify({
                id: serviceID
              })
            )
            .then(data => {
              this.$parent.$parent.status = "wait1";
              this.spxr();
              this.jianNum();
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //
    jiesuan() {
      this.ajax
        .post("/xinda-api/cart/submit", this.qs.stringify({}))
        .then(data => {
          this.setNum(0);
          this.$router.push({
            path: "/dingdanxiangqing",
            query: {
              businessNo: data.data.data,
              op: this.total
            }
          });
        });
    },
    jjia(item) {
      item.buyNum++;
      var this1 = this;
      // console.log(111,this.time);
      this.time[this.rq] = new Date().getTime();
      (function(a) {
        var id = setTimeout(function() {
          if (this1.time[a + 1] && this1.time[a + 1] - this1.time[a] < 300) {
            return;
          } else {
            console.log(this1);
            this1.outt(item.serviceId, item.buyNum);
          }
        }, 300);
      })(this.rq);
      this1.rq++;
    },
    jjian(item) {
      item.buyNum--;
      var this1 = this;
      this.time[this.rq] = new Date().getTime();
      (function(a) {
        var id = setTimeout(function() {
          if (this1.time[a + 1] && this1.time[a + 1] - this1.time[a] < 300) {
            return;
          } else {
            console.log(this1);
            this1.outt(item.serviceId, item.buyNum);
          }
        }, 300);
      })(this.rq);
      this1.rq++;
    },
    spxr() {
      this.ajax
        .post("/xinda-api/cart/list", this.qs.stringify({}))
        .then(data => {
          this.shop = data.data.data;
          this.shopping_number1 = data.data.data.length;
          if (this.shopping_number1 == 0) {
            this.shopping_phone = "sp";
            this.shp_kong = "sp_";
            this.ssp = 0;
            this.swp = 1;
          } else {
            this.shopping_phone = "shopping_phon";
            this.shp_kong = "sp1";
            this.ssp = 1;
            this.swp = 0;
          }
        });
    }, //商品渲染
    outt(serviceID, sd) {
        this.ajax
          .post(
            "/xinda-api/cart/set",
            this.qs.stringify({
              id: serviceID,
              num: sd
            })
          )
          .then(data => {});
        this.key = 0;
      }
  },
  watch: {
    shopping_number1(n, o) {
      if (n != o) {
        this.$parent.$parent.number = n;
      }
    }
  },
  computed: {
    total() {
      let total = 0;
      this.shop.forEach(item => {
        total += item.unitPrice * item.buyNum;
      });
      return total;
    }
  },
  created() {
    this.$parent.ccc++
    this.$parent.$parent.status = "wait";
    this.spxr();
    this.ajax
      .post("/xinda-api/recommend/list", this.qs.stringify({}))
      .then(data => {
        this.culb = data.data.data.hq;
        this.$parent.$parent.status = "wait1";
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
// 外框
@media screen and (min-width: 768px) {
  .weixin_p {
    display: none;
  }
  .shopping {
    width: 1205px;
    margin: 24px auto 80px;
    font-size: 14px;
    color: #2a2a2a;
    position: relative;
    overflow: hidden;
  }
  .shopping_kong {
    width: 1205px;
    margin: 24px auto 80px;
    text-align: center;
    p {
      font-size: 30px;
      color: #5e5555;
    }
    .shouye_pc {
      display: block;
      margin-top: 20px;
    }
  }
  .shopping_ag {
    color: #75b2df;
    padding: 18px 0 6px 70px;
    border-bottom: 1px solid #bdbdbd;
  }

  // 菜单列表
  .shopping_list {
    display: flex;
    li {
      margin: 23px 85px 10px 80px;
    }
  }
  .shopping_dianpu {
    margin: 18px 0 0 80px;
  }
  // 详情
  .shopping_details {
    display: flex;
    width: 1205px;
    height: 78px;
    background-color: #f7f7f7;
    margin: 18px 0 0 0;
    img {
      width: 124px;
      height: 57px;
      margin: 10px 36px 0 9px;
    }
    li {
      margin: 23px 75px 10px 75px;
      .asp {
        background-color: #bdbdbd;
        font-size: 20px;
        text-align: center;
        width: 16px;
        display: inline-block;
        font-weight: bold;
        color: #202020;
        text-decoration: none;
      }
    }
    .shopping_c1 {
      color: #4ca1d7;
    }
  }
  .shopping_remen {
    padding: 56px 0 7px 71px;
    border-bottom: 1px solid #bdbdbd;
    color: #65a8dc;
  }
  // 结算
  .goods_jiesuan {
    width: 221px;
    height: 80px;
    position: relative;
    margin: 80px 0 0 983px;
  }
  .goods_am {
    color: #020202;
    margin-top: 5px;
    display: inline-block;
  }
  .goods_shuzi {
    // margin-left: 10px;
    position: absolute;
    font-family: "黑体";
    font-weight: bold;
    color: #2793d3;
    font-size: 30px;
  }
  .goods_kuang {
    border: 1px solid #2693d4;
    width: 102px;
    height: 26px;
    margin: 12px 0 0 1px;
    border-radius: 5px;
  }
  .goods_end {
    text-decoration: none;
    text-align: center;
    line-height: 26px;
    display: block;
  }
  .sd {
    display: flex;
  }
  .shopping_box2 {
    width: 267px;
    height: 191px;
    border: 1px solid #eeeeee;
  }
  .shopping_ia {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    div {
      text-align: center;
    }
  }
  .shopping_p1 {
    font-size: 18px;
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    margin: 10px auto 0;
    text-overflow: ellipsis;
  }
  .shopping_img1 {
    margin: 13px 0 0 -50px;
  }
  .shopping_p2 {
    white-space: nowrap;
    overflow: hidden;
    margin: 0 auto;
    text-overflow: ellipsis;
    width: 230px;
  }
  .shopoing_p3 {
    margin: 9px 2px 3px -190px;
  }
  .shopoing_p4 {
    color: #2694d3;
    font-size: 45px;
    font-family: "黑体";
  }
  .shopoing_p5 {
    margin: 5px 36px 3px 4px;
    display: inline-block;
    text-decoration: line-through;
  }
  .shopoing_p6 {
    text-decoration: none;
    color: #53a2db;
  }
  .shopping_g {
    width: 120px;
    height: 45px;
  }
  .dell {
    width: 28px;
    height: 45px;
    margin-left: 80px;
  }
  .jiajia {
    height: 45px;
    span {
      display: inline-block;
      width: 16px;
      text-align: center;
    }
  }
}
@media screen and (max-width: 768px) {
  .shopping_kong{
    display: none;
  }
  .shopoing_phon {
    display: block;
  }
  .shopping {
    display: none;
  }
  .ph_null {
    display: none;
  }
  .ph_top {
    height: 40px;
    background-color: #e5e5e5;
    overflow: hidden;
  }
  .ph_con {
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 21px;
  }
  .ph_1 {
    // font-size: 24px;
    margin: 10px 0 0 21px;
  }
  .ph_box1 {
    width: 768px;
    height: 256px;
  }
  .ph_dianpu {
    font-size: 18px;
    margin: 13px 0 0 18px;
  }
  .ph_img {
    width: 22vw;
    height: 22vw;
    margin: 16px 0 0 16px;
    border: 2px solid #e3e3e3;
  }
  .ph_details {
    display: flex;
  }
  .ph_g {
    width: 67vw;
    margin: 10px 0 0 18px;
    .ph_g1 {
      font-size: 16px;
      // width: 26vw;
      display: inline-block;
    }
    .ph_g2 {
      margin-top: 5px;
    }
    .asph {
      font-weight: bold;
      // font-size: 16px;
      color: black;
      background-color: #ededed;
      padding: 5px 5px;
    }
    .ph_jiajia {
      margin-top: 5px;
      font-size: 13px;
    }
    .ph_c {
      margin-top: 5px;
      font-size: 13px;
    }
  }
  .ph_red {
    color: #ff1518;
    font-size: 18px;
    font-weight: bold;
  }
  .ph_g3 {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .ph_dell {
    // font-size: 24px;
    margin-right: 5vw;
    a {
      color: #fe0000;
    }
  }
  .ph_ta {
    color: #fd0002;
  }
  .ph_bo {
    margin: 12px 0 100px 38vw;
  }
  .ph_bottom {
    width: 100%;
    background-color: #e5e5e5;
    display: flex;
    line-height: 60px;
    position: fixed;
    bottom: 58px;
    .ph_wub {
      width: 66vw;
      text-indent: 18px;
    }
    .ph_sy {
      width: 33.5vw;
      background-color: #fb2d2d;
      // line-height: 112px;
      text-align: center;
      a {
        color: #ffffff;
      }
    }
  }
  .kong {
    width: 100vw;
    height: 100vw;
    // margin: 244px auto 0;
    display: block;
  }
  .sp {
    display: none;
  }
  .sp1 {
    display: none;
  }
  .sp_ {
    display: block;
    // margin-top:90px;
  }
  .qu {
    width: 220px;
    height: 70px;
    background-color: #2693d4;
    border-radius: 10px;
    text-align: center;
    margin: 59px auto 0;
  }
  .shouye {
    color: #ffffff;
    line-height: 70px;
    font-size: 25px;
  }
}
</style>
