<template>
    <ul :class="style">
        <select @change="provinceChange" v-model="provinceSelect">
            <option value="0">-----省-----</option>
            <option v-for="(item,index) in province" :key="index" :value="index">{{item}}</option>
        </select>
        <select @change="cityChange" v-model="citySelect">
            <option value="0">-----市-----</option>
            <option v-for="(item,index) in city" :key="index" :value="index">{{item}}</option>
        </select>
        <select @change="areaChange" v-model="areaSelect" >
            <option value="0">-----区-----</option>
            <option v-for="(item,index) in area" :key="index" :value="index">{{item}}</option>
        </select>
        <span>{{areaCheck}}</span>
    </ul>
</template>

<script>
import areasData from "../areasData";
export default {
  name: "HelloWorld",
  data() {
    return {
      province: areasData[100000], //省份
      city: null,
      area: null,
      provinceSelect: "0", //选中的省份
      citySelect: "0", //选中的市
      areaSelect: "0", //选中的区
      style: "",
      areaCheck: "" ,//地区提示码
    };
  },
  props: {
    display: String,
    are: String,
    youbian:String,
  },
  created() {
    this.style = this.display;
  },
  watch:{
   youbian(){
     this.provinceSelect=this.youbian.substr(0,2)+'0000';
     this.provinceChange()
     this.citySelect=this.youbian.substr(0,4)+'00';
     this.cityChange();
     this.areaSelect=this.youbian;
   }
  },
  methods: {
    provinceChange() {
      this.city = areasData[this.provinceSelect];
      this.citySelect = 0;
      this.areaSelect = 0;
      this.area = null;
    },
    children() {
      this.areaCheck = this.are;
    },
    cityChange() {
      this.area = areasData[this.citySelect];
      this.areaSelect = 0;
    },
    areaChange() {
      this.$emit("confirm", this.areaSelect);
    }
  }
};
</script>

<style scoped lang='less'>
.big {
  select {
    width: 95px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 34px;
    margin-bottom: 18px;
  }
}
.lby {
  select {
    width: 95px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 25px;
    margin-bottom: 18px;
    margin: 8px 0 0 10px;
  }
}
span {
  color: red;
}
select {
  cursor: pointer;
}
</style>
