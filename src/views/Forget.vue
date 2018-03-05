<template>
  <div class="zj">
      <div class="left">
        <ul class="d1">
          <input v-model="phone" type="text" placeholder="请输入手机号码">
          <span class="tip">{{phoneTip}}</span>
        </ul>
        <ul class="d2">
          <input type="text" v-model="pic" placeholder="请输入图片验证码">
          <img :src="png" v-on:click='cha'>
        </ul>
        <ul class="d3">
          <input type="text"  placeholder="请输入手机验证码">
          <span @click="hq">点击获取</span>
        </ul>
        <ul class="d4"><input v-model="password" type="password" placeholder="请输入新密码"></ul>
        <ul class="d5"><input type="password" placeholder="请再次确认密码"></ul>
        <ul class="d6">确认修改</ul>
      </div>   
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.$parent.ask = "想起密码来了？";
    this.$parent.meth = "立即登录";
    this.$parent.tb = "忘记密码";
    this.$parent.de = "login";
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      png:'/xinda-api/ajaxAuthcode',
      phone:'',
      phoneTip:'',
      pic:'',
      password:'',
      yzmtg: "0", //验证码是否通过

    }
  },
  methods:{
    cha(){
        this.png+=' ';
    },
    checkphone() {
      var a = /1\d{10}/;
      if (!a.test(this.phone)) {
        this.phoneTip = "手机号错误！";
      } else {
        this.phoneTip = "";
        return 1;
      }
    },
    hq() {
      if (this.checkphone()) {
        this.ajax
          .post(
            "/xinda-api/register/sendsms",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 1,
              validCode:gb4n,						
              password:this.password

            })
          )
          .then(data => {
            console.log(data);
            if (data.data.status == -1) {
              this.picTip = data.data.msg;
              this.yzmtg = 0;
              this.png += " ";
            } else {
              this.picTip = "";
              this.yzmtg = 1;
            }
          });
      }
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .d3 input{
    display: inline-block
  }
  .d3 span{
    color: #349ad7;
    border: 1px solid;
    padding: 5px ;
    border-radius: 4px;
    margin: 5px 0 0 29px;
    vertical-align: middle
  }
</style>
