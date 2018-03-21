<template>
<div class="right">
  <div class="tckuang" v-if="qrscc">
  <div class="tanchuk">
    <p class="tss">提示</p>
    <p>是否确认修改？</p>
    <ul>
      <li class="qd" @click="send">确定</li>
      <li class="qx"  @click="quxiaoo">取消</li>
    </ul>
   </div>
  </div>
  <div>
  <div class="tckuangg" v-if="qrsc">
  <div class="tanchuk">
    <p class="tss">提示</p>
    <p>是否确认修改？</p>
    <ul>
      <li class="qd" @click="save">确定</li>
      <li class="qx"  @click="quxiao">取消</li>
    </ul>
   </div>
  </div>
  <div class="zhshez">
    <span class="xiaoyu">
      <router-link to="/shoujihuiyuanzhongxin" tag="div">
        {{xy}}
      </router-link>
    </span>
    <span>账户设置</span>
  </div>
  <div class="right-top">
      <p class="wddd">账户设置</p>
    <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinForget"  tag="div">
      <p class="xgmm">修改密码</p>
    </router-link>
  </div>
  <div class="dibu">
    <div class="touxiang">
      <p>当前头像：</p>
      <span><img src="../assets/images/u7066.png" alt=""></span>
    </div>
    <div class="information">
      <div class="xingming">
        <p>姓</p>
        <p class="mingbx">名：</p>
        <input @blur="name"  v-model="mingzi" type="text" placeholder="请输入姓名">
        <p class="ts">{{mingzits}}</p>
      </div>
      <div class="xingbie">
        <p>性</p>
        <p class="mingbx">别：</p>
        <input type="radio" name="radio" vulue="1" :checked="aaa"  class="nan" @click="man">男
        <input type="radio" name="radio" vulue="2" :checked="bbb" class="nv" @click="woman" >女
      </div>
      <div class="youxiang">
        <p>邮</p>
        <p class="mingbx">箱：</p>
        <input @blur="email"  v-model="pgone" type="text" placeholder="请输入邮箱">
        <span class="ts">{{pgonets}}</span>
      </div>  
      <div class="diqu">
        <p>所在地区：</p>
        <div class="shq">
            <Area @confirm='bianma' display='ar'/>
        </div>
      </div>
      <p class="baocun" @click="senn">保存</p>
      <p class="baocun1" @click="send">保存</p>
    </div>
    <div class="beijingse"></div>
  </div>
  <!-- 手机端修改密码 -->
  <div class="rig">
    <div class="rig-top">
      <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinAccount"  tag="div">
        <p class="wd">账户设置</p>
      </router-link>
        <p class="xgmi">修改密码</p>
    </div>  
    <div class="password">
      <div class="jmm">
        <p>旧密码：</p>
        <input type="password" v-model="old">
      </div>
      <p class="tip">{{oldTip}}</p>
      <div class="xmm">
        <p>新密码：</p>
        <input type="password" @blur="ymm" v-model="new1">
      </div>
      <p class="tip">{{xinmim}}</p>
      <div class="zcsr">
        <p>再次输入新密码：</p>
        <input type="password" v-model="reNew1">
      </div>
       <p class="tip">{{passwordTip}}</p>
      <p class="baocun" @click="sen">保存</p>
    </div>  
    <div class="beijingse"></div>
  </div>
  </div>
</div>
</template>

<script>
import Area from "../components/Area";
import md5 from 'md5'
export default {
  name: "HelloWorld",
  created() {
    window.scrollTo(0, 0);
    this.$parent.$parent.$parent.status='wait'
    this.user=this.$parent.$parent.$parent.user;
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        this.data = data.data.data;
        this.mingzi = this.data.name;
        this.pgone = this.data.email;
        this.$parent.$parent.$parent.status='wait1'
        if (this.data.gender == 1) {
          this.aaa = true;
        } else {
          this.bbb = true;
        }
      });
  },
  data() {
    return {
      qrscc: false,
      qrsc: false,
      xy: "<",
      pgone: "", //邮箱
      pgonets: "", //邮箱提示
      mingzi: "", //姓名
      mingzits: "", //姓名提示
      sex: 1,
      youbian: "",
      aaa: false,
      bbb: false,

      user:'',
      old:'',
      oldTip:'',
      new1:'',
      reNew1:'',
      passwordTip:'',
      xinmim:''
    };
  },
  components: {
    Area
  },
  methods: {
    ymm(){
      var pa=/^(\w){6,20}$/;
      if (!pa.test(this.new1)) {
        this.xinmim = "请输入6-12位，包含字母，数字,下划线";
      } else {
        this.xinmim = "";
        return 1;
      }
    },
    save(){
      this.qrsc = !this.qrsc;
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
          this.oldTip=data.data.msg
        });
      }
    },
    bianma(a) {
      this.youbian = a;
    },
    man() {
      this.sex = 1;
    },
    woman() {
      this.sex = 2;
    },
    senn() {
      this.qrscc = !this.qrscc;
    },
    sen() {
      this.qrsc = !this.qrsc;
    },
    quxiaoo() {
      this.qrscc = !this.qrscc;
    },
    quxiao() {
      this.qrsc = !this.qrsc;
    },
    send() {
      this.qrscc = !this.qrscc;
      this.ajax
        .post(
          "/xinda-api/member/update-info",
          this.qs.stringify({
            headImg: "/2016/10/28/152843b6d9a04abe83a396d2ba03675f",
            name: this.mingzi,
            gender: this.sex,
            email: this.pgone,
            regionId: this.youbian
          })
        )
        .then(data => {
        });
    },
    email() {
      var a = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!a.test(this.pgone)) {
        this.pgonets = "请输入正确邮箱格式！";
      } else {
        this.pgonets = "";
        return 1;
      }
    },
    name() {
      var a = /^\S{2,6}$/;
      if (!a.test(this.mingzi)) {
        this.mingzits = "姓名格式不正确！";
      } else {
        this.mingzits = "";
        return 1;
      }
    }
  }
};
</script>

<style lang="less">
.ar {
  select {
    width: 75px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 23px;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width: 768px) {
  * {margin: 0;
    padding: 0;
  }
  .right {
    width: 100%;
    display: inline-block;
    // margin-top: 36px;
    font-size: 14px;
    .tckuang{
      width:100%;
      height:100%;
      z-index:66;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      // display: none;
    }
    .tckuangg{
      width:100%;
      height:100%;
      z-index:67;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      // display: none;
    }
    .tanchuk {
        width: 70%;
        height: 150px;
        z-index: 66;
        position: absolute;
        background: #ffffff;
        .tss{
          font-size:18px;
          margin-top: 5%;
        }
        p {
          text-align: center;
          margin-top: 8%;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        li {
          display: inline-block;
          margin: 25px 20px 0 20px;
          padding: 7px 25px;
          color: #fff;
        }
        .qd {
          background: #2693d4;
        }
        .qx {
          background: #9c9c9c;
        }
      }
    .zhshez {
      height: 40px;
      display: -webkit-box;
      justify-content: center;
      align-items: center;
      background-color: #e5e5e5;
      .xiaoyu {
        font-size: 30px;
        position: absolute;
        // margin-left: 5px;
      }
    }
    .right-top {
      // width: 875px;
      height: 21px;
      border-bottom: 2px solid #2693d4;
      .wddd {
        margin: 15px 0 0 10px;
      }
      .xgmm {
        display: none;
      }
    }
    .touxiang {
      height: 96px;
      display: flex;
      align-items: center;
      margin-left: 15px;
      span {
        margin-left: 10px;
        overflow: hidden;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
    .information {
      height: 205px;
      margin-left: 15px;
      .mingbx{
        padding-left:27px;
      }
      .xingming {
        display: flex;
        height: 25px;
      }
      input {
        margin-left: 6px;
      }
      .xingbie {
        display: flex;
        height: 50px;
        align-items: center;
        .nan {
          margin-left: 5px;
        }
        .nv {
          margin-left: 30px;
        }
      }
      .youxiang {
        display: flex;
        height: 25px;
      }
      .diqu {
        display: flex;
        margin-top: 15px;
        .shq {
          margin-left: 5px;
        }
      }
      .baocun {
        margin: 20px 0 0 75px;
        display: inline-block;
        padding: 5px 20px;
        color: #2992d3;
        border: 1px solid #2693d4;
        border-radius: 10%;
        cursor: pointer;
      }
      .baocun1 {
        display: none;
      }
    }
    .ts {
      color: red;
    }
  }
  // 手机端修改密码
  * {margin: 0;padding: 0;}
  .tip{
    color: red;
    line-height: 25px;
    margin-left: 110px
  }
  .rig {
    width: 100%;
    display: inline-block;
    margin-top: 15px;
    font-size: 14px;
    margin-bottom:20px;
    .rig-top {
      height: 21px;
      border-bottom: 2px solid #2693d4;
      .xgmi{
        margin-left: 10px;
      }
      .wd{
         display: none;
      }
    }
    .password {
      margin: 23px 0 0 15px;
      input {
        height: 23px;
      }
      .jmm {
        display: flex;
        input {
          margin-left: 55px;
        }
      }
      .xmm {
        display: flex;
        margin: 20px 0;
        input {
          margin-left: 55px;
        }
      }
      .zcsr {
        display: flex;
        input {
          // margin-left: 10px;
        }
      }
      .baocun {
        margin: 29px 0 20px 113px;
        display: inline-block;
        padding: 5px 20px;
        color: #2992d3;
        border: 1px solid #2693d4;
        border-radius: 10%;
      }
    }
  }
  .beijingse {
    height: 5px;
    background-color: #e5e5e5;
  }
}

@media (min-width: 769px) {
  * { margin: 0;padding: 0;}
  .tckuang{
    display: none;
  }
  .rig{
    display: none;
  }
  .right {
    width: 936px;
    display: inline-block;
    margin: 36px 0 0 22px;
    font-size: 14px;
    .zhshez {
      display: none;
    }
    .right-top {
      width: 875px;
      height: 21px;
      border-bottom: 2px solid #f7f7f7;
      .wddd {
        display: inline-block;
        padding: 0 29px 7px;
        font-size: 14px;
        line-height: 14px;
        color: #52a3da;
        border-bottom: 2px solid #2693d4;
        z-index: 2;
        position: absolute;
        margin-left: 9px;
        cursor: pointer;
      }
      .xgmm {
        display: inline-block;
        padding: 0 29px 7px;
        font-size: 14px;
        line-height: 14px;
        z-index: 2;
        position: absolute;
        margin-left: 135px;
        cursor: pointer;
      }
    }
    .touxiang {
      height: 96px;
      margin-top: 25px;
      display: flex;
      align-items: center;
      span {
        margin-left: 28px;
        overflow: hidden;
        img {
          width: 96px;
          height: 96px;
        }
      }
    }
    .information {
      height: 230px;
      margin-top: 27px;
      .xingming {
        display: flex;
        height: 25px;
      }
      input {
        margin-left: 56px;
      }
      .xingbie {
        display: flex;
        height: 64px;
        align-items: center;
        .nan {
          margin-left: 60px;
        }
        .nv {
          margin-left: 55px;
        }
      }
      .youxiang {
        display: flex;
        height: 25px;
      }
      .diqu {
        display: flex;
        margin-top: 20px;
        .shq {
          margin-left: 28px;
        }
      }
      .baocun {
       display: none;
      }
      .baocun1 {
        margin: 41px 0 0 95px;
        display: inline-block;
        padding: 5px 20px;
        color: #2992d3;
        border: 1px solid #2693d4;
        border-radius: 10%;
        cursor: pointer;
      }
    }
    .ts {
      color: red;
    }
  }
}
</style>
