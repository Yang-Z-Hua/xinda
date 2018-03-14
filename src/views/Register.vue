<template>
    <div class="zj">
      <div class="left">
        <ul class="d1">
          <input @input="checkphone" v-model="phone" type="text" placeholder='请输入手机号'>
        </ul>
          <span class="tip">{{phoneTip}}</span>
        <ul class="d2">
          <input type="text" v-model="pic" placeholder="请输入验证码">
          <img :src="png" v-on:click='cha'>
        </ul>
          <span class="tip">{{picTip}}</span>
        <ul class="d3">
          <input type="text" placeholder="请输入验证码" v-model="phoneyzm">
          <span class="qq" @click="hq">点击获取</span>
        </ul>
          <span class="tip">{{yzmcw}}</span>
        <Area ref="c1" :are='aaaa' display='big' @confirm='chose'/>
        <ul class="d5">
          <input v-model="pass" type="text" placeholder="请设置密码">
          <span class="tip">{{passTip}}</span>
        </ul>
        <ul class="d6" @click="regist">立即注册</ul>
      </div>   
    </div>
</template>

<script>
import areasData from "../areasData";
import Area from "../components/Area";
import md5 from "md5";
export default {
  name: "HelloWorld",
  data() {
    return {
      png: "/xinda-api/ajaxAuthcode",
      pic: "", //图片验证码
      picTip: "", //图片验证码提示
      phone: "", //手机号
      phoneTip: "", //手机号提示
      province: areasData[100000], //省份
      city: null,
      area: null,
      provinceSelect: "0", //选中的省份
      citySelect: "0", //选中的市
      areaSelect: "0", //选中的区
      yzmtg: "0", //验证码是否通过
      phoneyzm: "", //验证手机验证码
      yzmcw: "", //手机验证码提示
      areaNum: "1", //返回的地区号码
      aaaa: "",
      pass: "", //密码
      passTip: ""
    };
  },
  components: {
    Area
  },
  created() {
    this.$parent.ask = "已有账号？";
    this.$parent.meth = "立即登录";
    this.$parent.phoneTittle = "注册";
    this.$parent.tb = "欢迎注册";
    this.$parent.de = "login";
  },
  methods: {
    provinceChange() {
      this.city = areasData[this.provinceSelect];
      this.citySelect = 0;
      this.areaSelect = 0;
      this.area = null;
    },
    chose(value) {
      this.areaNum = value;
    },
    cityChange() {
      this.area = areasData[this.citySelect];
      this.areaSelect = 0;
    },
    cha() {
      // 验证码重载
      this.png += " ";
    },
    checkphone() {
      // 加测手机号
      var a = /1\d{10}/;
      if (!a.test(this.phone)) {
        this.phoneTip = "手机号错误！";
      } else {
        this.phoneTip = "";
        return 1;
      }
    },
    hq() {
      // 获取手机验证码
      if (this.checkphone()) {
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
    chen() {
      this.$refs.c1.children();
    },
    regist() {
      if (this.yzmtg == 0) {
        this.hq();
      }
      if (this.yzmtg == 1) {
        if (this.phoneyzm != 111111) {
          this.yzmcw = "验证码错误!!";
        } else {
          this.yzmcw = "";
          if (this.areaNum.length != 6) {
            this.aaaa = "请选择地区！";
            setTimeout(this.chen, 11);
          } else {
            this.aaaa = "";
            setTimeout(this.chen, 11);
            if (this.pass == "") {
              this.passTip = "请输入密码";
            } else {
              //注册验证
              this.passTip = "";
              this.ajax
                .post(
                  "/xinda-api/register/valid-sms",
                  this.qs.stringify({
                    cellphone: this.phone,
                    smsType: 1,
                    validCode: "111111"
                  })
                )
                .then(data => {
                  if (data.data.status < 0) {
                    this.phoneTip = data.data.msg;
                  } else {
                    this.phoneTip = "";
                    // 注册提交接口
                    this.ajax
                      .post(
                        "/xinda-api/register/register",
                        this.qs.stringify({
                          cellphone: this.phone,
                          smsType: 1,
                          validCode: "111111",
                          password: md5(this.pass),
                          regionId: this.areaNum
                        })
                      )
                      .then(data => {});
                  }
                });
            }
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
div div ul.d3 input {
  display: inline !important;
}
div div ul.d3 {
  margin: 0 !important;
  span.qq {
    border: 1px solid !important;
    cursor: pointer;
  }
}
span.tip {
  color: red;
  margin:-15px 0 10px 0;
  display: block
}
</style>
