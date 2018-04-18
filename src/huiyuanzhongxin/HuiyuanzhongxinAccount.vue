<template>
<div class="right">
  <div>
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
      <span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </span>
    </div>
    <div class="information">
      <div class="xingming">
        <p>姓</p>
        <p class="mingbx">名：</p>
        <input @blur="name" v-model="mingzi" type="text" placeholder="请输入姓名">
        
      </div>
      <p class="ts">{{mingzits}}</p>
      <div class="xingbie">
        <p>性</p>
        <p class="mingbx">别：</p>
        <input type="radio"  value="1" class="nan" v-model="sex">男
        <input type="radio"  value="2" class="nv" v-model="sex" >女
      </div>
      <div class="youxiang">
        <p>邮</p>
        <p class="mingbx">箱：</p>
        <input @blur="email"  v-model="pgone" type="text" placeholder="请输入邮箱">
        
      </div> 
       <p class="ts">{{pgonets}}</p>
      <div class="diqu">
        <p>所在地区：</p>
        <div class="shq">
            <Area @confirm='bianma' :youbian='kk' display='ar'/>
            <span class="ts">{{areaTip}}</span>
        </div>
      </div>
      <p class="baocun" @click="open2">保存</p>
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
      <p class="baocun" @click="open3">保存</p>
    </div>  
    <div class="beijingse"></div>
  </div>
  </div>
</div>
</template>

<script>
import Area from "../components/Area";
export default {
  name: "HelloWorld",
  created() {
    window.scrollTo(0, 0);
    this.$parent.$parent.$parent.status = "wait";
    this.user = this.$parent.$parent.$parent.user;
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        this.data = data.data.data;
        this.kk=this.data.regionId
        this.mingzi = this.data.name;
        this.pgone = this.data.email;
        this.$parent.$parent.$parent.status = "wait1";
        if (this.data.gender == 1) {
          this.sex = 1;
        } else {
          this.sex = 2;
        }
      });
  },
  data() {
    return {
      kk:'',
      areaTip: "",
      imageUrl: "",
      xy: "<",
      pgone: "", //邮箱
      pgonets: "", //邮箱提示
      mingzi: "", //姓名
      mingzits: "", //姓名提示
      sex: "",
      youbian: "",
      aaa: false,
      bbb: false,
      user: "",
      old: "",
      oldTip: "",
      new1: "",
      reNew1: "",
      passwordTip: "",
      xinmim: ""
    };
  },
  components: {
    Area
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    email() {
      var a = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!a.test(this.pgone)) {
        this.pgonets = "请输入正确邮箱格式！";
        return -1;
      } else {
        this.pgonets = "";
        return 1;
      }
    },
    name() {
      var a = /^\S{2,6}$/;
      if (!a.test(this.mingzi)) {
        this.mingzits = "姓名格式不正确！";
        return -1;
      } else {
        // this.mingzits = "";
        return 1;
      }
    },
    open2() {
      if (this.name() == -1) {
        return;
      } else {
        this.mingzits = "";
      }
      if (this.email() == -1) {
        return;
      } else {
        this.pgonets = "";
      }
      if (this.youbian == "") {
        this.areaTip = "请修改地区!";
        return;
      } else {
        this.areaTip = "";
      }
      this.$confirm("是否修改当前用户信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
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
              this.youbian=''
              this.$message({
                type: "success",
                message: "修改成功!"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改="
          });
        });
    },
    open3() {
      this.$confirm("是否修改当前密码?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (this.new1 != this.reNew1) {
            this.passwordTip = "两次密码不匹配";
          } else {
            this.passwordTip = "";
            this.ajax
              .post(
                "/xinda-api/sso/change-pwd",
                this.qs.stringify({
                  oldPwd: md5(this.old),
                  newPwd: md5(this.new1)
                })
              )
              .then(data => {
                this.oldTip = data.data.msg;
              });
          }
          // this.$message({
          //   type: 'success',
          //   message: '修改成功!'
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    },
    //
    ymm() {
      var pa = /^(\w){6,20}$/;
      if (!pa.test(this.new1)) {
        this.xinmim = "请输入6-12位密码";
      } else {
        this.xinmim = "";
        return 1;
      }
    },
    save() {
      this.open3();
    },
    bianma(a) {
      this.youbian = a;
    },
    send() {
      this.open2();
    }
  }
};
</script>

<style>
span.ts {
  margin-left: 0 !important;
  margin-top: 3px;
  display: block
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.avatar {
  width: 70px;
  height: 70px;
  display: block;
}
.el-icon-plus:before{
    line-height: 70px;
}
</style>
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
  * {
    margin: 0;
    padding: 0;
  }
  .right {
    width: 100%;
    display: inline-block;
    // margin-top: 36px;
    font-size: 14px;
    .tckuang {
      width: 100%;
      height: 100%;
      z-index: 66;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      // display: none;
    }
    .tckuangg {
      width: 100%;
      height: 100%;
      z-index: 67;
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
      .tss {
        font-size: 18px;
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
        cursor: pointer;
      }
      .qx {
        background: #9c9c9c;
        cursor: pointer;
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
      .mingbx {
        padding-left: 27px;
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
    }
    .ts {
      margin-left: 72px;
      color: red;
    }
  }
  // 手机端修改密码
  * {
    margin: 0;
    padding: 0;
  }
  .tip {
    color: red;
    line-height: 25px;
    margin-left: 110px;
  }
  .rig {
    width: 100%;
    display: inline-block;
    margin-top: 15px;
    font-size: 14px;
    margin-bottom: 20px;
    .rig-top {
      height: 21px;
      border-bottom: 2px solid #2693d4;
      .xgmi {
        margin-left: 10px;
      }
      .wd {
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
  * {
    margin: 0;
    padding: 0;
  }
  .tckuang {
    display: none;
  }
  .tckuang {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 66;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    .tanchuk {
      // margin:185px 0 0 100px;
      width: 400px;
      height: 170px;
      z-index: 66;
      position: absolute;
      background: #fff;
      border: 1px solid #ccc;
      .tss {
        font-size: 18px;
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
        cursor: pointer;
      }
      .qx {
        background: #9c9c9c;
        cursor: pointer;
      }
    }
  }
  .rig {
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
        margin: 20px 0 0 95px;
        display: inline-block;
        padding: 5px 20px;
        color: #2992d3;
        border: 1px solid #2693d4;
        border-radius: 10%;
        cursor: pointer;
      }
    }
    .ts {
      margin-left: 97px;
      color: red;
    }
  }
}
</style>
