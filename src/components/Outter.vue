<template>
  <div>
    <h3 v-bind:class="style">欢迎{{reverseInfo}}-----{{info}}</h3>
    <P v-show="b">这是一段文字{{reverseInfo}}</P>
    <P>{{fullName}}</P>
    <button v-on:click='foo'>按钮</button>
    <p>我被点击了{{cont}}次</p>
    <input type="text" v-model="info">

    <router-view></router-view>
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
      cont:0
    };
  }, // data:function(){return...}
  methods: {
    foo: function(event) {
      // this.info = "登录";
      // this.style = "green";
      this.fullName='陈 恒通';
      this.b=0;
      console.log(event.target)
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
<style scoped>
.test {
  color: red;
}
.green {
  color: green;
}
</style>
