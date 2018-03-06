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
          <li>
            <p>服务产品</p>
          </li>
          <li>
            <p>客服</p>
          </li>
          <li>
            <p>资质证书</p>
          </li>
        </ul>
        <li class="service_title"><h2>服务内容</h2></li>
        <ul class="bottom">
          <img src="../assets/images/u4634.png" alt="">
        </ul>
      </div>
    </div>
    <li class="next"><img src="../assets/images/next.png" alt=""></li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    created() {
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
    }
  },
  methods:{
    test(){
      this.change
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
        border-bottom: 2px solid red;
      }
    }
    .service_title{
      width: 100%;
      height: 93px;
      border: 1px solid #e9e9e9;
      line-height: 93px;
      text-align: center;
    }
    .bottom{
      width: 100%;
      height: 447px;
      display: flex;

      justify-content: center;
      align-items: center;
      border:1px solid #e9e9e9;
        img{
          width: 842px;
          height: 412px;
      }
    }
  }
}
.next{
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  img{
    margin-top: 43px;
    margin-bottom: 78px;
  }
}
</style>
