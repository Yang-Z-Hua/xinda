<template>
<div>
  <div class="fanye">
      <span @click="prev" :class="shang1">上一页</span>
      <ul>{{number}}</ul>
      <!-- <p v-if="prevTip">当前是第一页!!</p> -->
      <span @click="next" :class="xia1">下一页</span>
      <!-- <p v-if="nextTip">当前是最后一页!!</p> -->
      <p>(共{{TotalCount%fanye?parseInt(TotalCount/fanye)+1:TotalCount/fanye}}页)</p>
  </div>
      <div class="tip" v-if="prevTip||nextTip">没有更多了!!!</div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      shang1: "blue",
      xia1: "blue",
      number: 1,
      nextTip: "",
      prevTip: "",
      num: 0,
      sx: 1
    };
  },
  watch: {
    nage() {
      if (this.nage == 1) {
        this.nextTip = 1;
        this.num -= this.fanye;
      } else {
        this.prevTip = 1;
        this.num += this.fanye;
      }
    },
    number() {
      console.log(this.number)
      if(this.number==1){
        this.num=0;
        this.shang1='grey'
        if(this.TotalCount <= this.number * this.fanye){
          this.xia1='grey'
        }else{
          this.xia1='blue'
        }
      }else{
        this.shang1='blue';
        if(this.TotalCount <= this.number * this.fanye){
          this.xia1='grey'
        }else{
          this.xia1='blue'
        }
      }
    },
    TotalCount() {
      if(this.number==1){
        this.shang1='grey'
        if(this.TotalCount <= this.number * this.fanye){
          this.xia1='grey'
        }else{
          this.xia1='blue'
        }
      }else{
        this.shang1='blue';
        if(this.TotalCount <= this.number * this.fanye){
          this.xia1='grey'
        }else{
          this.xia1='blue'
        }
      }
    }
  },
  props: {
    display: String,
    are: String,
    fanye: String,
    number: String,
    nage: String,
    TotalCount: String
  },
  methods: {
    next() {
      // 下一页
      this.sx = 1;
      this.prevTip = 0;
      this.num += this.fanye; //从第几条开始
      this.$emit("confirm", this.num, this.sx);
      // this.chen(this.fyCode, this.fyId, this.pxIndex);
    },
    prev() {
      //上一页
      this.sx = 0;
      this.nextTip = 0;
      this.num -= this.fanye;
      this.$emit("confirm", this.num, this.sx);
    }
  }
};
</script>

<style scoped lang='less'>
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
    span.grey {
      color: #cccccc;
    }
    span.blue {
      color: #2693d4;
    }
    ul {
      color: #2693d4;
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
    span.grey {
      color: #cccccc;
    }
    span.blue {
      color: #2693d4;
    }
    ul {
      color: #2693d4;
      border: 1px solid;
      line-height: 1;
      padding: 10px 13px;
      margin: 0 6px;
    }
  }
}
</style>
