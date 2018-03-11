<template>
  <div class="right">
    <div class="right-top">
      <p>我的订单</p>
    </div>
    <div class="order">
      <p>订单号：</p>
      <input type="text" v-model="No" placeholder="请输入订单号搜索">
      <li @click="search">搜索</li>
    </div>
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
          <p>订单号：</p>
          <span>{{aa.businessNo}}</span>
          <p>下单时间：</p>
          <span>{{new Date(aa.createTime).getFullYear()+'-'+
                  new Date(aa.createTime).getMonth()+'-'+
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
                <div class="img">
                  <!-- <img :src="imgSrc+dd.providerImg" alt=""> -->
                </div>
                <div class="xdfw">
                  <p>{{dd.providerName}}</p>
                  <p>{{dd.serviceName}}</p>
                </div>
                <p>￥{{dd.unitPrice}}.00</p>
                <span class="one">{{dd.buyNum}}</span>
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
            <div class="zhong">
              <p class="xg">付款</p>
              <p class="scdd" @click="sc(aa.id)">删除订单</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="molu">
      <span class="sy" @click="prev" >上一页</span>
      <span class="noone">{{count}}</span>
      <p v-if="prevTip"></p><span @click="next" >下一页</span><p v-if="nextTip">xiayiye</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      nextTip: "",
      prevTip: "",
      count: 1,
      startNum:0,
      No:undefined,
      data: "",
      startDate: "",
      da: "",
      endDate: "",
      yfk:'',
      // imgSrc: "http://123.58.241.146:8088/xinda/pic",
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    };
  },
  methods:{
     next() {
      this.prevTip = 0;
      if (this.arrLength < 3) {
        this.nextTip = 1;
        return;
      } else {
        
        this.startNum+=2;
        this.xr(2)
        
      }
    },
    prev() {
      this.nextTip = 0;
      if (this.count == 1) {
        this.prevTip = 1;
        return;
      }
      this.startNum-=2;
        this.xr(0)
      
    },
     search(){
       this.startNum=0;
       this.count=1;
      this.xr()
    },
    xr(i){
      this.ajax
      .post("/xinda-api/business-order/grid", this.qs.stringify({
        limit:2,
        start:this.startNum,
        businessNo:this.No
      }))
      .then(data => {
        if(data.data.data.length==0){
          return
        }
        if(i==2){
          this.count++;
        }
        if(i==0){
          this.count--;
        }
        let orderList = data.data.data;   
        // console.log(data)    
        var j=0;
        for (let i in orderList) {
          this.ajax
            .post(
              "/xinda-api/service-order/grid",
              this.qs.stringify({
                businessNo: orderList[i].businessNo
              })
            )
            .then(data => {
              // console.log(data)
              orderList[i].service = data.data.data;
              j++
              if (j == orderList.length ) {
                this.da = orderList;
              };
              if(orderList[i].status == 1){
                this.yfk = '等待买家付款'
              }else {
                this.yfk = '已付款'
              }
          });
        }
    });
    },
    scfw(){
    this.ajax
      .post(
        "/xinda-api/business-order/grid",
        this.qs.stringify({
        
        })
      )
      .then(data => {
        console.log(2222,this.da)
        this.orderList = data.data.data;
      })
    },
    sc(id){
      this.ajax
      .post("/xinda-api/business-order/del",
        this.qs.stringify({
          id:id
        })
      )
      .then(data => {
        console.log(111111,data)
        this.xr()
        this.scfw() 
      })
    },
   
  },

  created() {
    this.xr()
  }
};
</script>

<style lang="less">
.el-input--prefix .el-input__inner {
  padding: 0;
}
.el-input__inner {
  height: 23px;
}
.el-input__icon {
  line-height: 0;
}
.el-input__prefix {
  left: 85px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.right {
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 22px;
  .right-top {
    width: 875px;
    height: 21px;
    border-bottom: 2px solid #f7f7f7;
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
    // height: 404px;
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
      // height: 172px;
      margin-top: 10px;
      border: 1px solid #e8e8e8;
      .order-time {
        height: 37px;
        display: flex;
        background-color: #f7f7f7;
        font-size: 12px;
        align-items: center;
        p {
          display: inline-block;
          margin-left: 23px;
        }
      }
      .details {
        // height: 134px;
        display: flex;
        .det-left {
          // height: 134px;
          width: 815px;
          font-size: 12px;
          border-right: 1px solid #e8e8e8;
          .manei {
            height: 67px;
            display: flex;
            border-top: 1px solid #e8e8e8;
            .zuo {
              width: 533px;
              // height: 67px;
              display: flex;
              align-items: center;
              border-right: 1px solid #e8e8e8;
              .img {
                width: 48px;
                margin-left: 12px;
                overflow: hidden;
              }
              .xdfw {
                margin-left: 11px;
                width: 279px;
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
</style>
