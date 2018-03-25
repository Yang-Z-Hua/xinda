<template>
<div>
  <div class="fanye" :class='de'>
      <span @click="prev" class="blue" :class='shang'>上一页</span>
      <ul v-for="(a,b) in this.arr" :key="b" :class="++b==number?'blue':''" @click="change(b)">{{b}}</ul>
      <span @click="next" class="blue" :class='xia'>下一页</span>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: [""],
      shang: "",
      xia: "",
      number: 1,
      nextTip: "",
      prevTip: "",
      num: 0,
      de: ""
    };
  },
  created() {
    this.shang = "wait111";
  },
  watch: {
    reset() {
      this.number = 1;
    },
    number() {
      this.arr.length =
        this.TotalCount % this.fanye
          ? parseInt(this.TotalCount / this.fanye) + 1
          : this.TotalCount / this.fanye;
      if (this.number == 1) {
        this.num = 0;
        this.shang = "wait111";
      } else {
        this.shang = "";
      }
      if (this.number == this.arr.length) {
        this.xia = "wait111";
      } else {
        this.xia = "";
      }
    },
    TotalCount() {
      if (this.TotalCount <= this.fanye) {
        this.xia = "wait111";
      } else {
        this.xia = "";
      }
      if (this.TotalCount == 0) {
        this.de = "none";
      } else {
        this.de = "";
      }
      this.arr.length =
        this.TotalCount % this.fanye
          ? parseInt(this.TotalCount / this.fanye) + 1
          : this.TotalCount / this.fanye;
      var arr1 = [];
      for (var i = 0; i < this.arr.length; i++) {
        arr1[i] = i;
      }
      this.arr = arr1;
    }
  },
  props: {
    fanye: String,
    TotalCount: String,
    reset: String
  },
  methods: {
    change(i) {
      this.number = i;
      this.num = (i - 1) * this.fanye;
      this.$emit("confirm", this.num);
      // num：第几条开始
    },
    next() {
      // 下一页
      if (this.arr.length == this.number) {
        return;
      } else {
        this.$parent.status = "Lwait";
        this.number++;
        this.num += this.fanye; //从第几条开始
        this.$emit("confirm", this.num);
      }
    },
    prev() {
      //上一页
      if (this.number == 1) {
        return;
      }
      this.number--;
      this.num -= this.fanye;
      this.$emit("confirm", this.num);
    }
  }
};
</script>

<style scoped lang='less'>
.wait111 {
  cursor: not-allowed !important;
}
.none {
  display: none !important;
}
ul {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .fanye {
    p {
      display: none;
      color: #2693d4;
      line-height: 35px;
      position: absolute;
      left: 580px;
    }
    position: relative;
    margin: 29px auto 10px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    span {
      cursor: pointer;
      border: 1px solid;
      line-height: 1;
      padding: 10px 13px;
    }
    .grey {
      color: #cccccc !important;
    }
    .blue {
      color: #2693d4 !important;
    }
    ul {
      color: #cccccc;
      border: 1px solid;
      line-height: 1;
      padding: 10px 13px;
      margin: 0 6px;
    }
  }
  .tip {
    color: red;
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  .tip {
    display: none;
  }
  .fanye {
    p {
      color: #2693d4;
      line-height: 35px;
      position: absolute;
      left: 580px;
    }
    position: relative;
    margin: 29px auto 202px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    span {
      cursor: pointer;
      border: 1px solid;
      line-height: 1;
      padding: 10px 13px;
    }

    .grey {
      color: #2693d4 !important;
    }
    .blue {
      color: #2693d4 !important;
    }
    ul {
      color: #cccccc;
      border: 1px solid;
      line-height: 1;
      padding: 10px 13px;
      margin: 0 6px;
    }
  }
}
</style>
