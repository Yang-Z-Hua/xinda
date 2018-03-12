<template>
<div class="right">
  <div class="right-top">
  <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinAccount"  tag="div">
      <p class="wddd">账户设置</p>
    </router-link>
      <p class="xgmm">修改密码</p>
  </div>
  <div class="password">
    <div class="jmm">
      <p>旧密码：</p>
      <input type="password" v-model="old">
      <li class="tip">{{oldTip}}</li>
    </div>
    <div class="xmm">
      <p>新密码：</p>
      <input type="password" v-model="new1">
    </div>
    <div class="zcsr">
      <p>再次输入新密码：</p>
      <input type="password" v-model="reNew1">
      <li class="tip">{{passwordTip}}</li>
    </div>
    <p class="baocun" @click="save">保存</p>
  </div>
</div>
</template>

<script>
import md5 from 'md5'
export default {
  name: "HelloWorld",
  data() {
    return {
      user:'',
      old:'',
      oldTip:'',
      new1:'',
      reNew1:'',
      passwordTip:''
    };
  },
  created(){
    this.user=this.$parent.$parent.$parent.user;
  },
  methods:{
    save(){
      if(this.new1!=this.reNew1){
        this.passwordTip='两次密码不匹配'
      }else{
        this.passwordTip='';

        this.ajax
          .post(
            "/xinda-api/sso/change-pwd",
            this.qs.stringify({
              oldPwd:md5(this.old) ,	 
              newPwd:md5(this.new1)
            })
          )
          .then(data => {
          console.log(data)
          this.passwordTip=data.data.msg
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.tip{
  color: red;
  line-height: 25px;
  margin-left: 10px
}
.right {
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 22px;
  font-size: 14px;
  .right-top {
    width: 875px;
    height: 21px;
    border-bottom: 2px solid #f7f7f7;
    .wddd {
      display: inline-block;
      padding: 0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      z-index: 2;
      position: absolute;
      margin-left: 9px;
    }
    .xgmm {
      display: inline-block;
      padding: 0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      color: #52a3da;
      border-bottom: 2px solid #2693d4;
      z-index: 2;
      position: absolute;
      margin-left: 135px;
    }
  }
  .password {
    margin-top: 37px;
    input {
      height: 23px;
    }
    .jmm {
      display: flex;
      input {
        margin-left: 85px;
      }
    }
    .xmm {
      display: flex;
      margin: 20px 0;
      input {
        margin-left: 85px;
      }
    }
    .zcsr {
      display: flex;
      input {
        margin-left: 29px;
      }
    }
    .baocun {
      margin: 29px 0 0 143px;
      display: inline-block;
      padding: 5px 20px;
      color: #2992d3;
      border: 1px solid #2693d4;
      border-radius: 10%;
    }
  }
}
</style>
