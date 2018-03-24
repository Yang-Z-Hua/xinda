<template>
  <div class="zj">
      <div class="left">
        <ul class="d1">
          <input v-model="phone" type="text" placeholder="请输入手机号码">
        </ul>
          <span class="tip">{{phoneTip}}</span>
        <ul class="d2">
          <input type="text" v-model="pic" placeholder="请输入图片验证码">
          <img :src="png" v-on:click='cha'>
        </ul>
          <span class="tip">{{picTip}}</span>
        <ul class="d3">
          <input type="text" v-model="phoneyzm"  placeholder="请输入手机验证码">
          <span @click="hq">点击获取</span>
          <span :class="hq11">{{djs}}秒后获取</span>
        </ul>
          <span class="tip">{{yzmcw}}</span>
        <ul class="d4"><input v-model="password" type="password" placeholder="请输入新密码"></ul>
        <ul class="d5">
          <input v-model="password1" type="password" placeholder="请再次确认密码">
        </ul>
          <span class="tip">{{mmbyz}}</span>
        <ul class="d6" @click="reset">确认修改</ul>
      </div>   
    </div>
</template>

<script>
import md5 from "md5";
export default {
  name: "HelloWorld",
  created() {
    window.scrollTo(0, 0);
    this.$parent.ask = "想起密码来了？";
    this.$parent.meth = "立即登录";
    this.$parent.tb = "忘记密码";
    this.$parent.de = "login";
  },
  data() {
    return {
      djs: 60,
      hq11: "qq1",
      msg: "Welcome to Your Vue.js App",
      png: "/xinda-api/ajaxAuthcode",
      phone: "",
      phoneTip: "",
      pic: "",
      password: "",
      password1: "",
      yzmtg: 0, //验证码是否通过
      picTip: "", //手机验证码提示
      phoneyzm: "",
      yzmcw: " ",
      mmbyz: ""
    };
  },
  methods: {
    cha() {
      //验证码刷新
      this.png += " ";
    },
    checkphone() {
      //检测手机号
      var a = /1\d{10}/;
      if (!a.test(this.phone)) {
        this.phoneTip = "手机号错误！";
      } else {
        this.phoneTip = "";
        return 1;
      }
    },
    hq() {
      //获取手机验证码
      if (this.checkphone()) {
        //判断手机号是否合法
        this.ajax
          .post(
            "/xinda-api/register/sendsms",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 1,
              imgCode: this.pic
            })
          )
          .then(data => {
            if (data.data.status == -1) {
              // 图片验证码错误
              this.picTip = data.data.msg;
              this.yzmtg = 0;
              this.png += " ";
            } else {
              // 图片验证码正确
              this.picTip = "";
              this.yzmtg = 1;
              this.hq11 = "qq2";
              var re = this;
              var ID = setInterval(function() {
                console.log(1);
                if (re.djs == 0) {
                  re.hq11 = "qq qq1";
                  re.djs = 60;
                  clearInterval(ID);
                  return;
                }
                re.djs--;
              }, 1000);
            }
          });
      }
    },
    open2() {
      this.$confirm("修改密码成功！是否跳转到登录页？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push({
          path: "/outter/login"
        });
      });
    },
    reset() {
      // this.open2();
      // 确认修改
      if (!this.checkphone()) {
        return;
      }
      if (!this.pic) {
        this.picTip = "请输入验证码";
        return;
      }
      this.picTip = "";
      if (this.yzmtg == 0) {
        // 没有获取手机验证码
        this.yzmcw = "请获取手机验证码！";
        return;
      }
      this.yzmcw = "";
      if (this.yzmtg == 1) {
        // 以获取手机验证码
        if (this.phoneyzm != 111111) {
          this.yzmcw = "验证码错误!!";
        } else {
          this.yzmcw = "";
          if (!this.password) {
            this.mmbyz = "请输入密码！";
            return;
          }
          this.mmbyz = "";
          if (this.password != this.password1) {
            this.mmbyz = "两次密码不一致";
          } else {
            this.ajax
              .post(
                "/xinda-api/register/findpas",
                this.qs.stringify({
                  cellphone: this.phone,
                  smsType: 1,
                  validCode: 111111,
                  password: md5(this.password)
                })
              )
              .then(data => {
                // this.mmbyz = data.data.msg;
                if ((11, data.data.msg)) {
                  this.open2();
                }
              });
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.zj {
  padding-bottom: 100px;
}
.d3 span {
  position: absolute;
  left: 165px;
  top: 1px;
  color: #349ad7;
  border: 1px solid;
  padding: 5px;
  border-radius: 4px;
  margin: 5px 0 0 29px;
  vertical-align: middle;
  height: 21px;
  margin-top: 1px;
}
span.tip {
  color: red;
  position: relative;
  top: -10px;
  // display: inline-block;
}
.d3 {
  position: relative;
  .qq2 {
    display: block;
    position: absolute;
    left: 165px;
    top: 1px;
    background: white;
    color: gray;
  }
  .qq1 {
    display: none;
  }
  display: flex;
  .tip {
    border: none;
    margin-left: 0;
    color: red;
  }
}
</style>
