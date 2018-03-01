<template>
<div class="right">
  <div class="right-top">
      <p class="wddd">账户设置</p>
    <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinForget"  tag="div">
      <p class="xgmm">修改密码</p>
    </router-link>
  </div>
  <div class="touxiang">
    <p>当前头像：</p>
    <span></span>
  </div>
  <div class="information">
     <div class="xingming">
       <p>姓名：</p>
       <input type="text">
     </div>
     <div class="xingbie">
       <p>性别：</p>
       <p class="nan">男</p>
       <p class="nv">女</p>
     </div>
     <div class="youxiang">
       <p>邮箱：</p>
       <input type="text" placeholder="请输入邮箱">
     </div>  
     <div class="diqu">
       <p>所在地区：</p>
       <div class="shq">
          <select name="" id="">
            <option value="">北京</option>
          </select>
          <select name="" id="">
            <option value="">北京市</option>
          </select>
          <select name="" id="">
            <option value="">海淀区</option>
          </select>
       </div>
     </div>
     <p class="baocun">保存</p>
  </div>
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
*{margin: 0;padding: 0;}
.right{
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 22px;
  font-size: 14px;
  .right-top{
    width: 875px;
    height: 21px;
    border-bottom: 2px solid #f7f7f7;
    .wddd{
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
    .xgmm{
      display: inline-block;
      padding:  0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      z-index: 2;
      position: absolute;
      margin-left: 135px;
    }
  }
  .touxiang{
    height: 96px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    span{
      width: 96px;
      height: 96px;
      background-color: red;
      margin-left: 28px;
    }
  }
  .information{
    height: 230px;
    margin-top: 27px;
    .xingming{
      display: flex;
      height: 25px;
    }
    input{
      margin-left: 56px;
    }
    .xingbie{
      display: flex;
      height: 64px;
      align-items: center;
      .nan{
        margin-left: 77px;
      }
      .nv{
        margin-left: 55px;
      }
    }
    .youxiang{
      display: flex;
      height: 25px;
    }
    .diqu{
      display: flex;
      margin-top:20px;
      .shq{
        margin-left: 28px;
        select{
          height: 23px;
        }
      }
    }
    .baocun{
      margin: 41px 0 0 95px;
      display: inline-block;
      padding: 5px 20px;
      color: #2992d3;
      border: 1px solid #2693d4;
      border-radius: 10%;
    }
  }
}
</style>
