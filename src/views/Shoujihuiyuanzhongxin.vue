<template>
  <div class="public">
    <div class="huiyuandl">
        <div><img class="tupian" src="../assets/images/u7066.png" alt=""></div>
        <div class="zd" v-if="ab">
          <a href="#/outter/register"><p>注册</p></a>
          <a href="#/outter/login"><p>登录</p></a>
        </div>
    </div>
        <div class="bottom">
          <router-link to="/Huiyuanzhongxin/Huiyuanzhongxinindex" tag="div">
            <div class="ddzh" >
              <div>
                <img src="../assets/images/u5092.png" alt="">
                <p>我的订单</p>
              </div>
              <span>{{xy}}</span>
            </div>
          </router-link>

          <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinAccount"  tag="div">
            <div class="ddzh">
              <div>
                <img src="../assets/images/u5102.png" alt="">
                <p>账户设置</p>
              </div>         
               <span>{{xy}}</span>
            </div>
          </router-link>
        </div>
        <div @click="logOut" class="tui" v-if="cd"><p class="tcdl">退出登录</p></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      xy: ">",
      ab: true,
      cd: true
    };
  },
  methods: {
    logOut() {
      this.status = "wait";
      this.ajax
        .post("/xinda-api/sso/logout", this.qs.stringify({}))
        .then(data => {
          this.ab=1;
          this.cd=0
        });
    }
  },
  created() {
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        if (data.data.data) {
          this.ab = !this.ab;
        } else {
          this.cd = !this.cd;
        }
      });
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width: 768px) {
  .public {
    width: 100%;
    .huiyuandl {
      text-align: center;
      margin-top: 140px;
      .tupian {
        width: 25%;
      }
      .zd {
        margin-top: 15px;
      }
      p {
        display: inline-block;
        padding: 7px 25px;
        margin: 0 10px;
        border-radius: 5px;
        color: #fff;
        background-color: #2693d4;
      }
    }
    .tui {
      text-align: center;
      // display: none;
    }
    .tcdl {
      display: inline-block;
      margin-top: 40px;
      color: #fff;
      padding: 12px 125px;
      background-color: #2693d4;
    }
    .bottom {
      margin-top: 80px;
      .ddzh {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        margin: 1rem 2rem;
        background: #f7f7f7;
        line-height: 50px;
        color: #ccc;
        span {
          font-size: 25px;
          vertical-align: middle;
          padding-right: 5px;
        }
        p {
          margin-left: 10px;
          font-size: 17px;
          line-height: 17px;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
        }
        img {
          margin-left: 5px;
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .public {
    display: none;
  }
}
</style>
