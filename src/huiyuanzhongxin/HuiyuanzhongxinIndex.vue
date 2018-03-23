<template>
  <div class="right">
    <div class="right-top">
      <span>
        <router-link to="/shoujihuiyuanzhongxin" tag="div">
          {{xy}}
        </router-link>
      </span>
      <p>我的订单</p>
    </div>
    <div class="order">
      <p>订单号：</p>
      <input type="text" @keypress="qwe" v-model="No" placeholder="请输入订单号搜索">
      <li @click="search">搜索</li>
    </div>
    <p class="ddch">{{dingdcx}}</p>
    <div class="time">
      <p>创建时间：</p>
      <el-date-picker class="rili" v-model="startDate" type="date"></el-date-picker>
      <el-date-picker class="rili" v-model="endDate" type="date"></el-date-picker>
    </div>
    
    <div class="list">
      <ul>
        <li class="sp">商品名称</li>
        <li class="dj">单价</li>
        <li class="sl">数量</li>
        <li class="zje">总金额</li>
        <li class="zt">订单状态</li>
        <li class="cz">订单操作</li>
      </ul>
      <div class="list-top"  v-for="aa in da" :key="aa.id">
        <div class="order-time">
          <div>
            <p>订单号：</p>
            <span>{{aa.businessNo}}</span>
          </div>
          <p class="dengdai">{{yfk}}</p>
          <p class="xiadan">下单时间：</p>
          <span class="xiadan">{{
                  new Date(aa.createTime).getFullYear()+'-'+
                  (new Date(aa.createTime).getMonth()+1)+'-'+
                  new Date(aa.createTime).getDate()+' '+
                  new Date(aa.createTime).getHours()+':'+
                  new Date(aa.createTime).getMinutes()+':'+
                  new Date(aa.createTime).getSeconds()
          }}</span>
        </div>
        <div class="details" >
          <div class="det-left">
            <div class="manei" v-for="dd in aa.service" :key="dd.id">
              <div class="zuo">
                <div class="imgg">
                  <img src='../assets/images/logoxz_01.png' alt="">
                </div>
                <div class="xdfw">
                  <p class="prov">{{dd.providerName}}</p>
                  <p class="baogao">{{dd.serviceName}}</p>
                  <span class="xiadan">下单时间：</span>
                  <span class="xiadan">{{
                          new Date(aa.createTime).getFullYear()+'-'+
                          (new Date(aa.createTime).getMonth()+1)+'-'+
                          new Date(aa.createTime).getDate()+' '+
                          new Date(aa.createTime).getHours()+':'+
                          new Date(aa.createTime).getMinutes()+':'+
                          new Date(aa.createTime).getSeconds()
                  }}</span>
                  <div class="pl">
                    <span class="yuan">￥{{dd.unitPrice}}</span>
                    <span>元</span>
                    <span class="xone">x{{dd.buyNum}}</span>
                  </div>
                </div>
                <div class="price">
                    <span>￥{{dd.unitPrice}}.00</span>
                  <span class="one">{{dd.buyNum}}</span>
                </div>
              </div> 
              <div class="zongjia">
                <p>￥{{dd.totalPrice}}.00</p>
              </div>
              <div class="ddzhuangt">
                <p>{{yfk}}</p>
              </div>
            </div>
          </div>
          <div class="det-right">
            <!-- PC -->
            <div class="zhong">
              <p class="xg" @click="fukuan(aa.businessNo,aa.totalPrice)">付款</p>
              <p class="scdd" @click="open2(aa.id)">删除订单</p>
            </div>
          </div>
          <div class="fksc">
            <div class="zongqian">
              <span>合计 :</span>
              <span class="aato">￥{{aa.totalPrice}}</span>
            </div>
            <div class="ddfk">
              <!-- 手机 -->
              <span class="aato" @click="open2(aa.id)" >删除订单</span>
              <span class="fuk" @click="fukuan(aa.businessNo,aa.totalPrice)">付款</span>
            </div>
          </div>
          <div class="dicolor"></div>
        </div>
      </div>
    </div>
    <div class="meidd" v-if="mnr">
      <span>还没有订单！</span>
    </div>
    <div class="molu" v-if="!mnr">
      <span class="sy" @click="prev" >上一页</span>
      <span class="noone">{{count}}</span>
      <p v-if="prevTip"></p><span class="sy" @click="next" >下一页</span><p v-if="nextTip">xiayiye</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dingdcx:'',
      mnr: false,
      xy: "<",
      nextTip: "",
      prevTip: "",
      count: 1,
      startNum: 0,
      No: undefined,
      data: "",
      startDate: undefined,
      da: "",
      endDate: undefined,
      yfk: "",
      id: "",
      // imgSrc: "http://123.58.241.146:8088/xinda/pic",
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    };
  },
  methods: {
    open2(id) {
      this.$confirm("此操作将删除该订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.ajax
            .post(
              "/xinda-api/business-order/del",
              this.qs.stringify({
                id: id
              })
            )
            .then(data => {
              this.xr("sc");
              this.$message({
                type: "success",
                message: "删除成功!"
              });
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
    qwe(e) {
      if (e.keyCode == 13) {
        this.search();
      }
    },
    fukuan(asd, mmm) {
      this.$router.push({
        path: "/dingdanxiangqing",
        query: {
          businessNo: asd,
          op: mmm
        }
      });
    },
    next() {
      this.prevTip = 0;
      if (this.arrLength < 3) {
        this.nextTip = 1;
        return;
      } else {
        this.startNum += 2;
        this.xr(2);
      }
    },
    prev() {
      this.nextTip = 0;
      if (this.count == 1) {
        this.prevTip = 1;
        return;
      }
      this.startNum -= 2;
      this.xr(0);
    },
    search() {
      if(this.No == undefined){
        this.dingdcx = '请输入订单号'
      }
      this.startNum = 0;
      this.count = 1;
      this.xr();
    },
    xr(i) {
      this.$parent.$parent.$parent.status = "Lwait";
      if (window.innerWidth < 768) {
        this.$parent.$parent.$parent.status = "wait";
      }
      if (i == "csh") {
        this.$parent.$parent.$parent.status = "wait";
      }
      this.ajax
        .post(
          "/xinda-api/business-order/grid",
          this.qs.stringify({
            limit: 2,
            start: this.startNum,
            businessNo: this.No
          })
        )
        .then(data => {
          if (data.data.data.length == 0) {
            this.$parent.$parent.$parent.status = "wait1";
            this.mnr = !this.mnr;
            if (i == "sc") {
              this.da = "";
              if (this.count > 1) {
                this.startNum -= 2;
                this.xr();
                this.count--;
                this.mnr = !this.mnr;
              }
            }
            if (i == 2) {
              this.mnr = !this.mnr;
              return;
            }
          }
          if (i == 2) {
            this.count++;
          }
          if (i == 0) {
            this.count--;
          }
          let orderList = data.data.data;
          var j = 0;
          // this.$parent.$parent.$parent.status = "Lwait";
          for (let i in orderList) {
            this.ajax
              .post(
                "/xinda-api/service-order/grid",
                this.qs.stringify({
                  businessNo: orderList[i].businessNo
                })
              )
              .then(data => {
                this.$parent.$parent.$parent.status = "wait1";
                orderList[i].service = data.data.data;
                j++;
                if (j == orderList.length) {
                  this.da = orderList;
                }
                if (orderList[i].status == 1) {
                  this.yfk = "等待买家付款";
                } else {
                  this.yfk = "已付款";
                }
              });
          }
        });
    },
    sc(id) {
      this.open2(id);
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.$parent.$parent.$parent.status = "wait";
    this.xr("csh");
  }
};
</script>

<style lang="less">
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 111px;
  .el-input__inner {
    padding: 0;
    height: 23px;
  }
  .el-input__icon {
    line-height: 0;
  }
  .el-input__prefix {
    left: 85px;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width: 768px) {
  * {
    margin: 0;
    padding: 0;
  }
  .right {
    width: 100%;
    display: inline-block;
    .meidd {
      width: 100%;
      height: 150%;
      // background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #dfd7d7;
        font-size: 50px;
      }
    }
    .right-top {
      height: 40px;
      display: -webkit-box;
      justify-content: center;
      align-items: center;
      background-color: #e5e5e5;
      p {
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
      }
      span {
        font-size: 30px;
        position: absolute;
        margin-left: 5px;
      }
    }
    .order {
      display: none;
    }
    .time {
      display: none;
    }
    .list {
      width: 100%;
      ul {
        display: none;
      }
      .list-top {
        // display: none;
        .order-time {
          height: 37px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          align-items: center;
          .dengdai {
            margin-right: 10px;
          }
          p {
            display: inline-block;
            margin-left: 10px;
          }
          .xiadan {
            display: none;
          }
        }
        .details {
          // display: flex;
          .fksc {
            display: flex;
            font-size: 14px;
            justify-content: space-between;
            height: 30px;
            align-items: center;
            .zongqian {
              margin-left: 10px;
            }
            .aato {
              color: red;
              margin-right: 20px;
            }
            .ddfk {
              margin-right: 20px;
              .fuk {
                padding: 5px 15px;
                background-color: #2693d4;
                color: #fff;
              }
            }
          }
          .dicolor {
            height: 20px;
            background-color: #f8f8f8;
            margin-top: 5px;
          }
          .det-left {
            width: 100%;
            font-size: 12px;
            .manei {
              height: 105px;
              .zuo {
                width: 100%;
                height: 100px;
                background-color: #f8f8f8;
                display: flex;
                // justify-itme: flex-start;
                align-items: center;
                .price {
                  display: none;
                }
                .imgg {
                  width: 80px;
                  // height: 70%;
                  margin-left: 12px;
                  overflow: hidden;
                  img {
                    width: 60px;
                    // height: 100%;
                  }
                }
                .xdfw {
                  margin-left: 10px;
                  width: 100%;
                  .baogao {
                    font-size: 14px;
                  }
                  .prov {
                    display: none;
                  }
                  .pl {
                    margin-top: 10px;
                    font-size: 14px;
                    .yuan {
                      color: red;
                    }
                    .xone {
                      margin-left: 10px;
                    }
                  }
                }
                .one {
                  margin-left: 15px;
                }
              }
              .zongjia {
                display: none;
              }
              .ddzhuangt {
                display: none;
              }
            }
            .mn-bot {
              // border-top: 1px solid #e8e8e8;
            }
          }
          .det-right {
            display: none;
          }
        }
      }
    }
    .molu {
      display: flex;
      justify-content: center;
      margin-top: 37px;
      span {
        border: 1px solid #cccccc;
        width: 66px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
      }
      .sy {
        cursor: pointer;
      }
      .noone {
        width: 37px;
        margin: 0 6px;
        border: 1px solid #2693d4;
        color: #2693d4;
      }
    }
  }
}
@media (min-width: 769px) {
  * {
    margin: 0;
    padding: 0;
  }
  .right {
    width: 936px;
    display: inline-block;
    margin: 36px 0 0 22px;
    .meidd {
      width: 934px;
      height: 320px;
      margin-top: 22px;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #dfd7d7;
        font-size: 50px;
      }
    }
    .right-top {
      width: 875px;
      height: 21px;
      border-bottom: 2px solid #f7f7f7;
      span {
        display: none;
      }
      p {
        display: inline-block;
        padding: 0 29px 7px;
        font-size: 14px;
        line-height: 14px;
        color: #52a3da;
        border-bottom: 2px solid #2693d4;
        z-index: 2;
        position: absolute;
        margin-left: 9px;
      }
    } 
    .ddch{
        color: red;
        font-size:14px;
        margin-left:76px;
      } 
    .order {
      margin: 22px 0 0 2px;
      height: 26px;
     
      p {
        font-size: 14px;
        display: inline-block;
      }
      input {
        width: 261px;
        height: 21px;
        margin-left: 13px;
      }
      li {
        display: inline-block;
        list-style: none;
        padding: 5px 20px;
        color: #52a3da;
        font-size: 13px;
        line-height: 13px;
        border: 1px solid #2693d4;
        border-radius: 10%;
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .time {
      margin: 22px 0 0 2px;
      height: 26px;
      p {
        display: inline-block;
        font-size: 14px;
      }
      .rili {
        width: 111px;
      }
    }
    .list {
      margin-top: 22px;
      ul {
        display: flex;
        height: 34px;
        background-color: #f7f7f7;
        align-items: center;
        li {
          font-size: 12px;
          font-weight: bold;
        }
        .sp {
          margin-left: 37px;
        }
        .dj {
          margin-left: 275px;
        }
        .sl {
          margin-left: 89px;
        }
        .zje {
          margin-left: 89px;
        }
        .zt {
          margin-left: 93px;
        }
        .cz {
          margin-left: 86px;
        }
      }
      .list-top {
        margin-top: 10px;
        border: 1px solid #e8e8e8;
        .order-time {
          height: 37px;
          display: flex;
          background-color: #f7f7f7;
          font-size: 12px;
          align-items: center;
          .dengdai {
            display: none;
          }
          p {
            display: inline-block;
            margin-left: 23px;
          }
        }
        .details {
          display: flex;
          .fksc {
            display: none;
          }
          .dicolor {
            display: none;
          }
          .det-left {
            width: 815px;
            font-size: 12px;
            border-right: 1px solid #e8e8e8;
            .manei {
              height: 67px;
              display: flex;
              border-top: 1px solid #e8e8e8;
              .zuo {
                width: 533px;
                display: flex;
                align-items: center;
                border-right: 1px solid #e8e8e8;
                .imgg {
                  width: 10%;
                  height: 80%;
                  margin-left: 12px;
                  overflow: hidden;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .xdfw {
                  margin-left: 11px;
                  width: 279px;
                  span {
                    display: none;
                  }
                }
                .one {
                  margin-left: 83px;
                }
              }
              .zongjia {
                width: 138px;
                border-right: 1px solid #e8e8e8;
                color: #53a4db;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .ddzhuangt {
                width: 142px;
                color: #53a4db;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .mn-bot {
              border-top: 1px solid #e8e8e8;
            }
          }
          .det-right {
            width: 118px;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #e8e8e8;
            .zhong {
              width: 56px;
              height: 45px;
              .xg {
                display: inline-block;
                padding: 0 13px;
                color: #52a3da;
                border: 1px solid #2693d4;
                border-radius: 10%;
                cursor: pointer;
              }
              .scdd {
                color: red;
                margin-top: 7px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .molu {
      display: flex;
      justify-content: center;
      margin-top: 37px;
      span {
        border: 1px solid #cccccc;
        width: 66px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
      }
      .sy {
        cursor: pointer;
      }
      .noone {
        width: 37px;
        margin: 0 6px;
        border: 1px solid #2693d4;
        color: #2693d4;
      }
    }
  }
}
</style>
