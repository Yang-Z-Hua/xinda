<template>
  <div>
    <div class="head-2">
      <img src="../assets/images/logo.jpg" alt="">
      <ul>欢迎注册</ul>
    </div>
    <div class="middl-2">
      <div class="whit">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      info: "注册",
      style: "test",
      n: 1,
      b: true,
      firstName: "C",
      lastName: "HT",
      cont: 0
    };
  }, // data:function(){return...}
  methods: {
    foo: function(event) {
      // this.info = "登录";
      // this.style = "green";
      this.fullName = "陈 恒通";
      this.b = 0;
      console.log(event.target);
    }
  },
  computed: {
    reverseInfo() {
      console.log(1);
      return this.info
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.head-2 {
  width: 1200px;
  margin: 25px auto;
  display: flex;
  ul {
    border-left: 1px solid #b4b4b4;
    font-size: 18px;
    line-height: 47px;
    padding-left: 25px;
    margin-left: 25px;
  }
}
.middl-2 {
  height: 650px;
  background: #f5f5f5;
  overflow: hidden;
  .whit{
    width: 1200px;
    height: 435px;
    margin: 42px auto;
    background: white;
  }
}
</style>
