<template>
  <div>
    <div class="head-2">
      <img src="../assets/images/logo.jpg" alt="">
      <ul>{{tb}}</ul>
    </div>
    <div class="middl-2">
      <div class="whit">
        <router-view></router-view>
        <div class="midd"></div>
        <div class="right">
          <ul>{{ask}}</ul>
          <ul><router-link :to="de">{{meth}}>></router-link></ul>
          <img src="../assets/images/zhuce_03.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return{
      ask:'',
      meth:'',
      tb:'',
      de:''
    }
  }, 
  methods: {
    
  },
  computed: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less'>
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
    display: flex;
    .right{
      margin-top: 30px;
      ul{
        margin-bottom: 15px;
      };
      ul:nth-child(2){
        color: #349ad7;
      }
    };
    .midd{
      height: 260px;
      border-left: 1px solid #dadada;
      margin: 50px 168px;
    }
  }
}
.zj{
    display:flex;
    padding: 50px 0 0 145px;
    .d2 input,.d3 input{
      width: 172px;
    };
    .d2 img{
      vertical-align: middle;
      margin-left: 36px;
      margin-top: -2px
    }
    .d3 span.qq{
      border: 1px solid ;
      color: #2693d4;
      font-size: 18px;
      padding: 4.5px 12px;
      margin-left: 10px;
      vertical-align: middle;
      border-radius: 4px;
    };
    .d6{
      font-size: 17px;
      border: 1px solid ;
      color: #2693d4;
      width: 290px;
      text-align: center;
      line-height: 34px;
      border-radius: 4px;
    };
  }
  input{
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 32px;
    width: 280px;
    margin-bottom:18px; 
    padding-left: 10px;
  }
  a{
    text-decoration: none!important;
  }
</style>
