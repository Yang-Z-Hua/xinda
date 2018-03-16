<template>
  <div class="right">
    <div class="right-top">
      <p>我的订单</p>
    </div>
    <div class="evaluate">
      <div class="evaluate-top">
        <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinUser"  tag="div">               
            <p>未评价</p>
        </router-link>
        <p  class="st">已评价</p>
      </div>
      <div class="evaluate-xia">
        <div class="img">
          
        </div>
        <div class="fwnr">
          <p class="xdbj">信达北京服务中心</p>
          <p class="dh">服务单号：</p>
          <p class="num">B1823</p>
          <p>购买内容：test</p>
        </div>
        <p>购买时间：2016-01-01 02:12:21</p>
        <span>已评价</span>
      </div>
    </div>
     <div class="molu">
      <span class="sy" @click="prev" >上一页</span>
      <span class="noone">{{count}}</span>
      <span class="sy" @click="next" >下一页</span>
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
  },
   methods:{
     next() {
      this.prevTip = 0;
      if (this.arrLength < 3) {
        this.nextTip = 1;
        return;
      } else {
        this.startNum += 2;
        // this.xr(2);
      }
    },
    prev() {
      this.nextTip = 0;
      if (this.count == 1) {
        this.prevTip = 1;
        return;
      }
      this.startNum -= 2;
      // this.xr(0);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width:768px){
  
}
@media(min-width:768px){
  *{margin: 0;padding: 0;}
  .right{
    width: 936px;
    display: inline-block;
    margin: 36px 0 0 8px;
    .right-top{
      width: 875px;
      height: 21px;
      margin-left: 14px;
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
    .evaluate{
      width: 948px;
      height:193px;
      margin-top: 24px;
      border: 1px solid #cccccc;
      .evaluate-top{
        display: flex;
        height: 41px;
      background-color: #f7f7f7;
      align-items: center;
      border-bottom: 1px solid #cccccc;
        p{
          padding: 14px 30px;
          line-height: 14px;
          font-size: 14px;
          cursor: pointer;
        }
        .st{
          background-color: #2693d4;
          color: #fff;
        }
      }
      .evaluate-xia{
        height: 151px;
        display: flex;
        align-items: center;
        .img{
          width: 98px;
          height: 98px;
          background-color: red;
          border: 1px solid #cccccc;
          margin-left: 8px;
        }
        .fwnr{
          width: 174px;
          height: 91px;
          margin-left: 12px;
          p{
            font-size: 14px;
            line-height: 14px;
          }
          .xdbj{
            font-size: 16px;
            font-weight: bold;
          }
          .dh{
            display: inline-block;
            padding: 23px 0;
          }
          .num{
            color: #fc6c6b;
            display: inline-block;
            padding: 25px 0;
          }
        }
        p{
          font-size: 14px;
        }
        span{
          color: #ffffff;
          border: 1px solid #e9e9e9;
          border-radius: 5px;
          padding: 9px 29px;
          margin-left: 301px;
          font-size: 18px;
          background-color: #e9e9e9;
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
}
</style>

