<template>
  <div class="right">
    <div class="right-top">
      <p>我的订单</p>
    </div>
    <div class="order">
      <p>订单号：</p>
      <input type="text" placeholder="请输入订单号搜索">
      <li>搜索</li>
    </div>
    <div class="time">
      <p>创建时间：</p>
      <input type="text">
      <input type="text">
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
      <div class="list-top">
        <div class="order-time">
          <p>订单号：s347484929274490</p>
          <p>下单时间：2017-04-01 01:23:32</p>
        </div>
        <div class="details">
          <div class="det-left">
            <div class="manei">
              <div class="zuo">
                <div class="img">

                </div>
                <div class="xdfw">
                  <p>信达北京服务中心</p>
                  <p>注册分公司</p>
                </div>
                <span>￥800.00</span>
                <span class="one">1</span>
              </div>
              <div class="zongjia">
                <p>￥800.00</p>
              </div>
              <div class="ddzhuangt">
                <p>等待买家付款</p>
              </div>
            </div>
            <div class="manei">
              <div class="zuo">
                <div class="img">

                </div>
                <div class="xdfw">
                  <p>信达北京服务中心</p>
                  <p>注册分公司</p>
                </div>
                <span>￥800.00</span>
                <span class="one">1</span>
              </div>
              <div class="zongjia">
                <p>￥800.00</p>
              </div>
              <div class="ddzhuangt">
                <p>等待买家付款</p>
              </div>
            </div>
          </div>
          <div class="det-right">
            <div class="zhong">
              <p class="xg">修改</p>
              <p class="scdd">删除订单</p>
            </div>
           
          </div>
        </div>
      </div>
            <div class="list-top">
        <div class="order-time">
          <p>订单号：s347484929274490</p>
          <p>下单时间：2017-04-01 01:23:32</p>
        </div>
        <div class="details">
          <div class="det-left">
            <div class="manei">
              <div class="zuo">
                <div class="img">

                </div>
                <div class="xdfw">
                  <p>信达北京服务中心</p>
                  <p>注册分公司</p>
                </div>
                <span>￥800.00</span>
                <span class="one">1</span>
              </div>
              <div class="zongjia">
                <p>￥800.00</p>
              </div>
              <div class="ddzhuangt">
                <p>等待买家付款</p>
              </div>
            </div>
            <div class="manei">
              <div class="zuo">
                <div class="img">

                </div>
                <div class="xdfw">
                  <p>信达北京服务中心</p>
                  <p>注册分公司</p>
                </div>
                <span>￥800.00</span>
                <span class="one">1</span>
              </div>
              <div class="zongjia">
                <p>￥800.00</p>
              </div>
              <div class="ddzhuangt">
                <p>等待买家付款</p>
              </div>
            </div>
            <!-- <div class="mn-bot">
              
            </div> -->
          </div>
          <div class="det-right">
            <div class="zhong">
              <p class="xg">修改</p>
              <p class="scdd">删除订单</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="molu">
      <span class="sy" v-on:click="count--">上一页</span>
      <span class="noone">{{count}}</span>
      <span class="sy" v-on:click="count++">下一页</span>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'HelloWorld',
  data () {
    return {
      count:1,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
*{margin: 0;padding: 0;}
.right{
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 22px;
  .right-top{
    width: 875px;
    height: 21px;
    border-bottom: 2px solid #f7f7f7;
    p{
      display: inline-block;
      padding:  0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      color: #52a3da;
      border-bottom:2px solid #2693d4;
      z-index: 2;
      position: absolute;
      margin-left: 9px;
    }
  }
  .order{
    margin: 22px 0 0 2px;
    height: 26px;
    p{
      font-size: 14px;
      display: inline-block;
    }
    input{
      width: 261px;
      height: 21px;
      margin-left: 13px;
    }
    li{
      display: inline-block;
      list-style: none;
      padding: 5px 20px;
      color: #52a3da;
      font-size: 13px;
      line-height: 13px;
      border:1px solid #2693d4;
      border-radius:10%;
      margin-left: 10px;
    }
  }
  .time{
    margin: 22px 0 0 2px;
    height: 26px;
    p{
      display: inline-block;
      font-size: 14px;    
    }
    input{
      width: 109px;
      height: 22px;
    }
  }
  .list{
    height: 404px;
    margin-top:22px;
    ul{
      display: flex;
      height: 34px;
      background-color: #f7f7f7; 
      align-items: center;
      li{
        font-size: 12px;
        font-weight: bold; 
      }
      .sp{
        margin-left:37px;
      }
      .dj{
        margin-left:275px;
      }
     .sl{
        margin-left:89px;
      }
     .zje{
        margin-left:89px;
      }
     .zt{
        margin-left:93px;
      }
     .cz{
        margin-left:86px;
      }
    }
    .list-top{
      height: 172px;
      margin-top: 10px;
      border: 1px solid #e8e8e8;
      .order-time{
        height: 37px;
        display: flex;
        background-color: #f7f7f7;
        align-items: center;
        p{
          display: inline-block;
          font-size:12px;
          margin-left:23px;
        }
      }
      .details{
        height: 134px;
        display: flex;
        .det-left{
          height: 134px;
          width: 815px;
          font-size: 12px;
          border-right: 1px solid #e8e8e8;
          .manei{
            height: 67px;
            display: flex;
            border-top: 1px solid #e8e8e8;
            .zuo{
              width: 533px;
               height: 67px;
               display: flex;
               align-items: center;
              border-right: 1px solid #e8e8e8;
              .img{
                width: 48px;
                height: 48px;
                background-color: red;
                margin-left: 12px;
              }
              .xdfw{
                margin-left: 11px;
                width: 279px;
              }
              .one{
                margin-left: 83px;
              }
            } 
            .zongjia{
              width:138px;
              border-right: 1px solid #e8e8e8;
              color: #53a4db;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .ddzhuangt{
              width:142px;
              color: #53a4db;
              display: flex;
              align-items: center;
               justify-content: center;
            }
          }
          .mn-bot{
            border-top:  1px solid #e8e8e8;
          }
        }
        .det-right{
          width: 118px;
          font-size: 14px;
           display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #e8e8e8;
          .zhong{
            width: 56px;
            height: 45px;
            .xg{
              display: inline-block;
              padding: 0 13px;
              color: #52a3da;
              border:1px solid #2693d4;
              border-radius:10%;
            }
            .scdd{
              color: red;
              margin-top: 7px;
            }
          }
        }
      }
    }
  }
  .molu{
    display: flex;
    justify-content: center;
    margin-top:37px;
    span{
      border: 1px solid #cccccc;
      width: 66px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #cccccc;
    }
    .sy{
      cursor:pointer;
    }
    .noone{
      width: 37px;
      margin: 0 6px;
      border:1px solid #2693d4;
      color: #2693d4;
    }
  }
}
</style>
