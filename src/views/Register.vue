<template>
    <div class="zj">
      <div class="left">
        <ul class="d1">
          <input @input="checkphone" v-model="phone" type="text" placeholder='请输入手机号'>
          <span class="tip">{{phoneTip}}</span>
        </ul>
        <ul class="d2">
          <input type="text" v-model="pic" placeholder="请输入验证码">
          <img :src="png" v-on:click='cha'>
          <span class="tip">{{picTip}}</span>
        </ul>
        <ul class="d3">
          <input type="text" placeholder="请输入验证码">
          <span @click="hq">点击获取</span>
        </ul>
        <Area display='big'></Area>
        <ul class="d5"><input type="text" placeholder="请设置密码"></ul>
        <ul class="d6">立即注册</ul>
      </div>   
    </div>
</template>

<script>
import areasData from '../areasData';
import Area from '../components/Area'
export default {
  name: 'HelloWorld',
  data () {
    return {
      png:'/xinda-api/ajaxAuthcode',
      pic:'',    //图片验证码
      picTip:'',  //图片验证码提示
      phone:'',   //手机号
      phoneTip:'',//手机号提示
      province:areasData[100000], //省份
      city:null,
      area:null,
      provinceSelect:'0',//选中的省份
      citySelect:'0',//选中的市
      areaSelect:'0',//选中的区
    }
  },
  components:{
    Area
  },
  created(){
    this.$parent.ask='已有账号？';
    this.$parent.meth='立即登录';
    this.$parent.tb='欢迎注册';
    this.$parent.de = "login";
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
    cha(){
      this.png+=' ';
    },
    checkphone(){
      var a=/1\d{10}/;
      if(!a.test(this.phone)){
        this.phoneTip='手机号错误！'
      }else{
        this.phoneTip='';
        return 1;
      }
    },
    hq(){
      if(this.checkphone()){
        this.ajax.post('/xinda-api/register/sendsms',this.qs.stringify({
        cellphone: this.phone,					
        smsType:1,
        imgCode:this.pic	
        })).then((data)=>{
          console.log(data)
          if(data.data.status==-1){
            this.picTip=data.data.msg
          }else{
            this.picTip=''
          }
        })
      }      
    },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  div div ul.d3 input {
    display: inline !important;
  }
  div div ul.d3 {
    margin: 0 !important;
    span {
      border: 1px solid!important;
    }
  };
  .tip{
    color: red;
  }
</style>
