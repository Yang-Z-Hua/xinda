<template>
  <div>
    <div class="bt">首页/公司工商</div>
    <div class="all">
      <div class="left">
        <div class="sh">
          <ul class="d">
            <li>服务分类</li>
            <li >
              <p @click="fwflClick(index)" :class="index==background?'blue':''" v-for="(data,index) in data1" :key="data.name">{{data.name}}</p>
            </li>
          </ul>
          <ul class="d d2">
            <li>类型</li>
            <li >
              <p @click="lxclick(index)" :class="index==backgroundlx?'blue':''" v-for="(b,index) in sleType" :key="b.name">{{b.name}}</p>
            </li>
          </ul>
          <ul class="d">
            <li>服务区域</li>
            <li><Area display="lby"/></li>
          </ul>
        </div>
        <div class="xia">
          <div class="head1">
            <span>综合排序</span>
            <span>价格</span>
          </div>
          <div class="sp">
            <span>商品</span>
            <span>价格</span>
          </div>
          <div class="xq">
            <div class="list" v-for="a in arr" :key="a.serviceInfo">
              <img :src='imgSrc+a.productImg' alt="">
              <div class="zcfgs">
                <ul>{{a.serviceInfo}}</ul>
                <li>{{a.serviceName}}</li>
                <li><span>{{a.providerName}}</span><span>{{a.regionName}}</span></li>
              </div>
              <div class="sizeal">
                <ul>￥{{a.marketPrice}}</ul>
                <li><span>立即购买</span><span>加入购物车</span></li>
              </div>
            </div>
          </div>
        </div>
        <div class="fanye">
          <span @click="prev" :class="shang1">上一页</span>
          <ul>{{number}}</ul>
          <span @click="next" :class="xia1">下一页</span>
        </div>
      </div>
      <div class="right">
        <div>
          <img src="../assets/images/lb1.jpg" alt="">
          <li>平台担保</li>
        </div>
        <div>
          <img src="../assets/images/lb2.jpg" alt="">
          <li>优质服务</li>
        </div>
        <div>
          <img src="../assets/images/lb3.jpg" alt="">
          <li>过程监督</li>
        </div>
        <div>
          <img src="../assets/images/lb4.png" alt="">
          <li>增值服务</li>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import Area from '../components/Area.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      arr:'',
      imgSrc:'http://123.58.241.146:8088/xinda/pic',
      number:'1',
      num:0,
      sleType:'',//公司注册/变更
      shang1:'grey',
      xia1:'blue',
      data1:'' , //主页传过来的大类
      data:'',
      background:'',
      backgroundlx:'',
      id2:'',
      id3:'',
    };
  },
  created() {
     this.ajax
      .post(
        "/xinda-api/product/style/list",
        this.qs.stringify({
        })
      )
      .then(data => {
        this.data=data;
        this.data1=this.$route.query.id;
        this.id2=this.$route.query.id2;
        this.id3=this.$route.query.id3;
        this.chen();
        this.fwfl(this.data1);
      });
  },
  components:{
    Area
  },
  watch:{
    $route(){
      this.data1=this.$route.query.id;
      this.id2=this.$route.query.id2;
      this.id3=this.$route.query.id3;
      this.chen();
      this.fwfl(this.data1);
    }
  },
  methods:{
    next(){
      if(this.number==2){
        this.xia1='grey'
      }
      if(this.number==3){
        return
      }
      this.num+=3;
      this.number++;
      this.chen();
      this.shang1='blue'
    },
    prev(){
      if(this.number==2){
        this.shang1='grey'
      }
      if(this.number==1){
        return
      }
      this.num-=3;
      this.xia1='blue',
      this.number--;
      this.chen()
    },
    fwfl(a){   //服务分类
        var data=this.data.data.data[a];
        this.data1=data.itemList;
        console.log(this.id2)
        for(this.b in this.data1){
          if(this.id2==undefined||this.b==this.id2){
            this.fwflClick(this.b);
            break
          }
        }
    },
    fwflClick(index){
      this.type(index)
      this.background=index;
    },
    lxclick(index){
      this.backgroundlx=index;
    },
    type(a){//产品类型列表
        var data=this.data.data.data[this.$route.query.id].itemList[a].itemList;
        this.sleType=data;
        for(this.b in this.sleType){
          if(this.id3==undefined||this.b==this.id3){
            this.lxclick(this.b);
            break;
          }
        }
    },
    chen(){   //产品服务列表
      this.ajax
      .post(
        "/xinda-api/product/package/grid",
        this.qs.stringify({
         start:this.num,
         limit:3,
         productTypeCode: "1",  
         providerId: "a7304eecbd7246b4b424874e0359eab0",
        })
      )
      .then(data => {
        this.arr=data.data.data
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .bt{
        width: 1200px;
        margin: 25px auto 0;
        font-size: 14px;
    }
  .all{
    width: 1200px;
    margin: 0 auto 5px;
    display:flex;
    .left{
      .sh{
        width: 950px;
        // height: 163px;
        background: #f7f7f7;
        border-bottom: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        .d{
          .blue{
            background: #2693d4;
            color: white
          }
          display: flex;
          li:nth-child(1){
            border: 1px solid #cccccc;
            border-bottom: none;
            border-right: none;
            width: 100px;
            // height: 40px;
            text-align: center;
            line-height: 40px;
            font-weight: bold;
          }
          li:nth-child(2){
            border: 1px solid #cccccc;
            width: 848px;
            border-bottom: none;
            border-right: none;
            padding:0 0 5px 10px;
            // height: 40px;
            
            p{
              
              padding: 5px 13px;
              border-radius: 4px;
              display: inline-block;
              margin-top: 5px;
              cursor: pointer;
            }
            .djsj{
              background: #2693d4;
              color: white
            }
          }
        }
        
      }
      .xia{
        width: 950px;
        margin-top: 25px;
        border: 1px solid #cccccc;
        .head1{
          height: 41px;
          border-bottom: 1px solid #cccccc;
          line-height: 41px;
          background: #f7f7f7;
          span{
            padding:  0 25px;
          }
        };
        .sp{
          height: 50px;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          margin: 0 8px;
          padding: 0 30px;
        }
        .xq{
          margin: 0 8px;
          .list{
            display: flex;
            padding: 10px 0;
            align-items: flex-start;
            border-bottom: 1px solid #cccccc;
            img{
              width: 98px;
              height: 98px;
              border: 1px solid #cccccc;
              margin-right: 12px
            }
            .zcfgs ul{
              font-weight: bold;
            }
            .zcfgs li{
              font-size: 14px;
              color: #404040;
              line-height: 1;
              margin-top: 20px;
            }
            .sizeal{
              margin: 0 0 0 auto
            }
            .sizeal ul{
              color: red;
              font-size: 24px;
              text-align: center
            }
            .sizeal li span{
              color: white;
              background: #2693d4;
              font-size: 14px;
              line-height: 1;
              padding: 8px 17px;
              margin-left: 11px;
              border-radius: 2px;
              display: inline-block;
              margin-top: 25px;
            }
          }
        }
      }
      .fanye{
        margin: 29px auto 202px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        span{
          cursor: pointer;
          // color: #cccccc;
          border: 1px solid ;
          line-height: 1;
          padding: 10px 13px
        }
        span.grey{
          color: #cccccc;
        }
        span.blue{
          color: #2693d4;
        }
        ul{
          color: #2693d4;
          border: 1px solid ;
          line-height: 1;
          padding: 10px 13px;
          margin: 0 6px
        }
      }
    }
    .right{
      width: 236px;
      height: 645px;
      margin-left: 10px;
      border: 1px solid #cccccc;
      div{
        img{
          margin: 0 auto;
          display: block;
          margin-top: 10px;
        }
        li{
          text-align: center;
          border-bottom: 1px solid #cccccc;
          margin: 18px 35px;
          padding-bottom: 4px
        }
      }
    }
  }
</style>
