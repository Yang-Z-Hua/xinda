<template>
  <div class="zj">
      <div class="left">
        <li>{{tip}}</li>
        <ul class="d1">
          <input v-model="phone" type="text" placeholder="请输入手机号">
          <span class="tip">{{phoneTip}}</span>
        </ul>
        <ul class="d5">
          <input v-model="password" type="text"  placeholder="请输入密码">
          <span class="tip">{{passwordTip}}</span>
        </ul>
        <ul class="d2">
          <input type="text"  placeholder="请输入验证码" v-model="yzm">
          <img :src="png" v-on:click='cha'>
          <span class="tip">{{picTip}}</span>
        </ul>
        <ul class="d3"><input type="text"><span>忘记密码？</span></ul>
        <ul class="d6" @click="login">立即登录</ul>
      </div>   
    </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    created() {
      this.$parent.ask = "还没有账号？";
      this.$parent.meth = "立即注册";
      this.$parent.tb = "欢迎登录";
      this.$parent.de = "register";
    },
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        png:'/xinda-api/ajaxAuthcode',
        picTip:'',  //图片验证码提示
        phoneTip:'',
        passwordTip:'',
        phone:'',
        password:'',
        yzm:'',
        tip:''
      };
    },
    methods:{
      cha(){
        this.png+=' ';
      },
      login(){
         this.ajax
          .post(
            "/xinda-api/sso/login",
            this.qs.stringify({
              loginId: this.phone,
              password:this.password, 
              imgCode:this.yzm

            })
          )
          .then(data => {
            console.log(data);
            if(data.data.status==-1){
              this.tip=data.data.msg;
              this.cha()
            }else{
              this.tip=data.data.msg;
            }
          });

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  div div ul.d3 input {
    display: none !important;
  }
  div div ul.d3 {
    margin: 0 0 20px 160px !important;
    span {
      border: none !important;
    }
  }
  li{
    color: red
  }
</style>
