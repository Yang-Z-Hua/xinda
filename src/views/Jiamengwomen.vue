<template>
  <div>
    <img src="../assets/images/join_1.jpg" alt="" class="join_img1">
    <div class="join_img2"><img src="../assets/images/join_8_03.jpg" alt=""></div>
    <div class="join_box1">
      <div class="join_img3"><img src="../assets/images/join_2.jpg" alt=""></div>
      <ul class="jion_f join_fs">
      <li><div><img src="../assets/images/join_3.jpg" alt=""></div><a>精准的线上曝光机会</a></li>
      <li><div><img src="../assets/images/join_4.jpg" alt=""></div><a>万亿市场份额></a></li>
      </ul>
      <ul class="jion_f">
      <li><div><img src="../assets/images/join_5.jpg" alt=""></div><a>系统化的营销解决方案</a></li>
      <li><div><img src="../assets/images/join_6.jpg" alt=""></div><a>各种补贴优惠</a></li>
      </ul>
    </div>
    <div class="join_img4"><img src="../assets/images/join_8_02.jpg" alt=""></div>  
    <div class="join_hover">
      <ul class="join_list1">
        <li class="join_list1li1"  @mouseover="evo1">工商注册</li>
        <li @mouseover="evo2">财税服务</li>
        <li class="join_list1li3" @mouseover="evo3">知识产权</li>
        <li class="join_list1li4" @mouseover="evo4">人力外包</li>
      </ul>
      <ul class="join_list2">
        <li class="join_list2li1">REGISTERED</li>
        <li>SERVICE</li>
        <li class="join_list2li3">INTELLECTUAL PROPERTY</li>
        <li class="join_list2li4">HR OUTSOURCING</li>
      </ul>
    </div>  
    <div class="join_font">
      <h3>我们需要什么样的服务商？</h3>
      <p v-show="obj.d">{{zhuce}}</p>
      <p v-show="obj.a">{{fuwu}}</p>
      <p v-show="obj.b">{{shangbiao}}</p>
      <p v-show="obj.c">{{renshi}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      zhuce:'在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务',
      fuwu:'在代理记账、审计验资等领域深耕多年，可以提供涉足各个行业优秀的财会人员；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。',
      shangbiao:'在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务',
      renshi:'在人事代理、企业社保、个人社保等领域深耕多年，具有丰富的社保代理经验。',  
      obj:{d:1,a:0,b:0,c:0},
      dsa:''
    }
  },
  methods:{
    evo1(){
      for(this.dsa in this.obj){
        this.obj[this.dsa] = 0
      }
      this.obj.d = 1;
    },
    evo2(){
      for(this.dsa in this.obj){
        this.obj[this.dsa] = 0
      }
      this.obj.a = 1;
    },
    evo3(){
      for(this.dsa in this.obj){
        this.obj[this.dsa] = 0
      }
      this.obj.b = 1;
    },
    evo4(){
      for(this.dsa in this.obj){
        this.obj[this.dsa] = 0
      }
      this.obj.c = 1;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.join_img1{
  width: 100vw;
}
.join_img2{
  width: 1121px;
  height: 578px;
  margin: 0 auto;
}
.join_box1{
  height: 570px;
  background-color: #edf1f4;
}
.join_img3{
  width: 330px;
  height: 205px;
  margin: 0 auto;
}
.jion_f{
  width: 1095px;
  height: 94px;
  display: flex;
  margin: 0 auto;
  justify-content:space-around;
  li{
    display: flex;
    div{
    width: 103px;
    height: 94px;
    }
    a{
      display: inline-block;
      margin: 35px 0 0 5px;
    }
  }
}
.join_fs{
  margin-bottom: 94px;
}
.join_img4{
  width: 1186px;
  height: 402px;
  margin: 0 auto;
}
// HOVER
.join_hover{
  width: 1149PX;
  height: 51PX;
  margin: 0 auto;
  ul{
    display: flex;
    justify-content: space-between;
  }
}
// 列表1
.join_list1{
  li:hover{
      color: springgreen;
    }
  
  .join_list1li1{
    margin: 0px 11px 0 33px;        
  }
  .join_list1li3{
    margin: 0px 9px 0 8px;        
  }
  .join_list1li4{
    margin: 0 16px 0 0px;
  }
}
// 列表2
.join_list2{
  li{
    margin-top: 10px;
  }
  .join_list2li1{
    margin: 10px 86px 0 18px;
  }
  .join_list2li3{
    margin: 10px -31px 0 32px;    
  }
  .join_list2li4{
    margin: 10px -24px 0 20px;    
  }
}
// 文字描述
.join_font{
  width: 627px;
  height: 116px;
  margin: 52px auto 77px;
  text-align: center;
  p{
    font-size: 16px;
    margin-top: 23px;
  }
}
</style>
