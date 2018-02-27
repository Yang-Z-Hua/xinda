<template>
  <div class="public">
    <div class="left">
      <div class="top">
        <p>首页</p>
        <p>/</p>
        <p>公司工商</p>
      </div>
      <div class="middle">
        <div class="middle-top">
          <div><img src="../assets/images/u5086.png" alt=""></div>
          <p>12345678901</p>
        </div>
        <div class="bottom">
          <div class="dingdan">
            <img src="../assets/images/u5092.png" alt="">
            <p>我的订单</p>
          </div>
          <div>
            <img src="../assets/images/u5098.png" alt="">
            <p>用户评价</p>
          </div>
          <div>
            <img src="../assets/images/u5102.png" alt="">
            <p>账户设置</p>
          </div>
        </div>
      </div>
      
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.public{
    width: 1200px;
    margin: 26px auto;
}
.left{
  display:inline-block;
  width: 244px;
  height:552px;
}
.top{
  line-height: 14px;
  font-size:14px;
  p{
    display: inline-block;
  }
}

.middle{
    width: 242px;
    height:526px;
    margin: 13px 0 0 2px;
    .middle-top{
      height:141px;
      background-color: #e9e9e9;
      div{
          text-align: center;
         img{
          width: 100px;
          height:100px;
          margin-top: 9px;
        }
      }
      p{
        text-align: center;
      }
    }
    .bottom{
      height: 376px;
      margin-top: 9px;
      background-color: #f7f7f7;
      div{
        height: 50px;
        text-align: center;
        line-height: 50px;
        p{
          font-size: 17px;
          line-height: 17px;
          display: inline-block;
          vertical-align: middle;
        }
       
          img{
            width: 22px;
            height: 22px;
            vertical-align: middle;
          }
        
      } 
      .dingdan{
        background-color:#e9e9e9;
      }
    }
}
</style>
