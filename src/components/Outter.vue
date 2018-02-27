<template>
  <div>
    <h4>与注册有关的公共头部</h4>
    <router-view></router-view>
    <h4>与注册有关的公共头部</h4>
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
