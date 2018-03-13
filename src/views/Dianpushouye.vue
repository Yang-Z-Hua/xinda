<template>
  <div class="outer">
    <div class="top">
      <img :src="imgSrc+arr.providerImg" alt="">
      <li>
        <h2>{{arr.name}}</h2>
        <p>{{arr.regionName}}</p>
      </li>
    </div>
    <div class="content">
      <div class="left">
        <h3>公司介绍</h3>
        <p>{{arr.providerInfo}}</p>
        <li>
          <img src="../assets/images/u4654.png" alt="">
        </li>
      </div>
      <div class="right">
        <ul class="top_list">
          <li @click="service_product()" :class="change1">
            <p>服务产品</p>
          </li>
          <li @click="talk()" :class="change2">
            <p>客服</p>
          </li>
          <li @click="book()" :class="change3">
            <p>资质证书</p>
          </li>
        </ul>  
        <ul class="bottom">
          <li :class="bot_1">
            <div>
              <li class="service_title"><h2>服务内容</h2></li>
              <ul>
                <img src="../assets/images/serve.png" alt="">
              </ul>
            </div>
          </li>
          <li :class="bot_2">
            <h3>工作时间：{{arr.workTime}}</h3>
            <h3>QQ咨询：{{arr.qq}}</h3>
          </li>
          <li :class="bot_3">
            <img :src="imgSrc+arr.businessCertPath" alt="">
          </li>
        </ul>
      </div>
    </div>
    <span :class="bot_1"><img src="../assets/images/next.png" alt=""></span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    created() {
      window.scrollTo(0,0),
      this.ajax.post('/xinda-api/provider/detail',this.qs.stringify({
        id:this.$route.query.id
    }))
    .then((data)=>{
      this.arr = data.data.data;
      console.log(data)
      })
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:'',
      imgSrc:'http://123.58.241.146:8088/xinda/pic',
      change1:'style1',
      change2:'',
      change3:'',
      bot_1:'style4',
      bot_2:'style3',
      bot_3:'style3',
    }
  },
  methods:{
    test(){
      this.change
    },
    service_product(){
      this.change1 = 'style1';
      this.change2 = 'style2';
      this.change3 = 'style2';
      this.bot_1 = 'style4';
      this.bot_2 = 'style3';
      this.bot_3 = 'style3';
    },
    talk(){
      this.change1 = 'style2';
      this.change2 = 'style1';
      this.change3 = 'style2';
      this.bot_1 = 'style3';
      this.bot_2 = 'style4';
      this.bot_3 = 'style3';
    },
    book(){
      this.change1 = 'style2';
      this.change2 = 'style2';
      this.change3 = 'style1';
      this.bot_1 = 'style3';
      this.bot_2 = 'style3';
      this.bot_3 = 'style4';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.outer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top{
  width: 1200px;
  height: 179px;
  border: 1px solid #e9e9e9;
  margin-top: 7px;
  display: flex;
  align-items: center;
  img{
    height: 60px;
    margin-left: 62px;
  }
  p{
    font-size: 14px;
    color: #676767;
    margin-top: 16px;
  }
  li{
    margin-left: 30px;
  }
}
.content{
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 80px;
  position: relative;
  .left{
    width: 300px;
    height: 583px;
    border: 1px solid #e9e9e9;
    h3{
      line-height: 51px;
      margin-left: 8px;
    }
    p{
      line-height: 23px;
      font-size: 12px;
      color: #676767;
      margin:22px 26px;
    }
    li{
      width: 300px;
      height: 251px;
      border-top: 1px solid #e9e9e9;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .right{
    width: 875px;
    height: 583px;
    .top_list{
      width: 100%;
      height: 39px;
      border: 1px solid #e9e9e9;
      display: flex;
      li{
        line-height: 39px;
        width: 100px;
        text-align: center;
        margin: 0 10px;
        cursor: pointer;
      }
    }
    
    .bottom{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border:1px solid #e9e9e9;
      li{
        width: 100%;
        height: 542px;
        div{
          width: 100%;
          ul{
            height: 447px;
            img{
              margin: 20px 18px;
            }
          }
        }
        h3{
          width: 875px;
          line-height: 50px;
        }
      }
      .service_title{
        width: 100%;
        height: 93px;
        border: 1px solid #e9e9e9;
        line-height: 93px;
        text-align: center;
      }
    }
  }

}
.style1{
  color: #74b3df;
  border-bottom: 2px solid #2693d4;
}
.style2{
  color: black;
  border-bottom: 2px solid #fff;
}
.style3{
  display: none;
}
.style4{
  display: flex;
}
  span{
    width: 1200px;
    display: flex;
    justify-content: flex-end;
    img{
      margin-bottom: 78px;
    }
  }
</style>
