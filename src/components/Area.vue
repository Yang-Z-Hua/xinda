<template>
    <ul class="d4">
        <select @change="provinceChange" v-model="provinceSelect">
            <option value="0">-----省-----</option>
            <option v-for="(item,index) in province" :key="index" :value="index">{{item}}</option>
        </select>
        <select @change="cityChange" v-model="citySelect">
            <option value="0">-----市-----</option>
            <option v-for="(item,index) in city" :key="index" :value="index">{{item}}</option>
        </select>
        <select v-model="areaSelect" >
            <option value="0">-----区-----</option>
            <option v-for="(item,index) in area" :key="index" :value="index">{{item}}</option>
        </select>
    </ul>
</template>

<script>
import areasData from '../areasData';
export default {
  name: 'HelloWorld',
  data () {
    return {
      province:areasData[100000], //省份
      city:null,
      area:null,
      provinceSelect:'0',//选中的省份
      citySelect:'0',//选中的市
      areaSelect:'0',//选中的区
    }
  },
  created(){
  },
  methods:{
    provinceChange(){
      console.log(this.provinceSelect);
      this.city=areasData[this.provinceSelect];
      this.citySelect=0;
      this.areaSelect=0;
      this.area=null;
    },
    cityChange(){
      this.area=areasData[this.citySelect];
      this.areaSelect=0;
    },
  },
}
</script>

<style scoped lang='less'>

</style>
