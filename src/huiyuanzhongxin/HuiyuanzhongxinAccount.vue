<template>
<div class="right">
  <div class="right-top">
      <p class="wddd">账户设置</p>
    <router-link to="/Huiyuanzhongxin/HuiyuanzhongxinForget"  tag="div">
      <p class="xgmm">修改密码</p>
    </router-link>
  </div>
  <div class="touxiang">
    <p>当前头像：</p>
    <span><img src="../assets/images/u7066.png" alt=""></span>
  </div>
  <div class="information">
     <div class="xingming">
       <p>姓名：</p>
       <input @blur="name"  v-model="mingzi" type="text">
       <span class="ts">{{mingzits}}</span>
     </div>
     <div class="xingbie">
       <p>性别：</p>
       <input type="radio" name="radio" vulue="1" :checked="aaa"  class="nan" @click="man">男
       <input type="radio" name="radio" vulue="2" :checked="bbb" class="nv" @click="woman" >女
     </div>
     <div class="youxiang">
      <p>邮箱：</p>
      <input @blur="email"  v-model="pgone" type="text" placeholder="请输入邮箱">
      <span class="ts">{{pgonets}}</span>
     </div>  
     <div class="diqu">
       <p>所在地区：</p>
       <div class="shq">
          <Area @confirm='bianma' display='ar'/>
       </div>
     </div>
     <p class="baocun" @click="send">保存</p>
  </div>
</div>
</template>

<script>
import Area from '../components/Area'
export default {
  name: 'HelloWorld',
  created() {
    this.ajax.post("/xinda-api/member/info",
      this.qs.stringify({

      }))
    .then((data)=>{
      this.data = data.data.data
       console.log(this.data);
       this.mingzi = this.data.name;
       this.pgone = this.data.email;
       if(this.data.gender == 1){
         this.aaa=true
       }else{
         this.bbb=true
       }
    })
  },
  data () {
    return {
      pgone:'',//邮箱
      pgonets:'',//邮箱提示
      mingzi:'',//姓名
      mingzits:'',//姓名提示 
      sex:1,
      youbian:'',
      aaa:false,
      bbb:false,
    }
  },
  components:{
    Area
  },
  methods: {
    bianma(a){
      // console.log(a)
      this.youbian=a
    },
    man(){
      this.sex=1
    },
    woman(){
      this.sex=2
    },
    send(){
        this.ajax.post("/xinda-api/member/update-info",
          this.qs.stringify({
              headImg:'/2016/10/28/152843b6d9a04abe83a396d2ba03675f',
              name:this.mingzi,
              gender:this.sex,
              email:this.pgone,
              regionId:this.youbian
          }))
        .then((data)=>{
          // console.log(data);

        })
    },
    email() {
      var a = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!a.test(this.pgone)) {
        this.pgonets = "请输入正确邮箱格式！";
      } else {
        this.pgonets = "";
        return 1;
      }
    },
    name(){
      var a = /^\S{2,6}$/;
      if(!a.test(this.mingzi)){
        this.mingzits = "姓名格式不正确！";
      }else{
        this.mingzits = "";
        return 1;
      }
    }
  }
}
</script>

<style lang="less">
.ar{
  select{
    width: 75px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #cbcbcb;
    height: 23px;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
*{margin: 0;padding: 0;}
.right{
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 22px;
  font-size: 14px;
  .right-top{
    width: 875px;
    height: 21px;
    border-bottom: 2px solid #f7f7f7;
    .wddd{
      display: inline-block;
      padding:  0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      color: #52a3da;
      border-bottom:2px solid #2693d4;
      z-index: 2;
      position: absolute;
      margin-left: 9px;
    }
    .xgmm{
      display: inline-block;
      padding:  0 29px 7px;
      font-size: 14px;
      line-height: 14px;
      z-index: 2;
      position: absolute;
      margin-left: 135px;
    }
  }
  .touxiang{
    height: 96px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    span{
      margin-left: 28px;
      overflow: hidden;
      img{
        width: 96px;
        height: 96px;
      }
    }
  }
  .information{
    height: 230px;
    margin-top: 27px;
    .xingming{
      display: flex;
      height: 25px;
    }
    input{
      margin-left: 56px;
    }
    .xingbie{
      display: flex;
      height: 64px;
      align-items: center;
      .nan{
        margin-left: 60px;
      }
      .nv{
        margin-left: 55px;
      }
    }
    .youxiang{
      display: flex;
      height: 25px;
    }
    .diqu{
      display: flex;
      margin-top:20px;
      .shq{
        margin-left: 28px;
      }
    }
    .baocun{
      margin: 41px 0 0 95px;
      display: inline-block;
      padding: 5px 20px;
      color: #2992d3;
      border: 1px solid #2693d4;
      border-radius: 10%;
      cursor: pointer;
    }
  }
  .ts{
    color:red;
  }
}
</style>
