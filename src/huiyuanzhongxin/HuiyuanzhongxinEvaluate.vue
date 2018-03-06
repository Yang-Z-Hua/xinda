<template>
  <div class="right">
    <div class="right-top">
      <p>评价</p>
    </div>
    <div class="right-di">
        <div class="di-shang">
            <div class="zuo">
                <p>服务单号：</p>
                <span>B1245634571384</span>
            </div>
            <div class="zuo">
                <p>购买内容：</p>
                <span>test</span>
            </div>
            <div class="zuo">
                <p>购买时间：</p>
                <span>2016-11-11</span>
            </div>
        </div>
        <div class="pingjia">
            <p>评价：</p>
            <input type="radio" name="radio" vulue="1">好评
            <input type="radio" name="radio" vulue="1">中评
            <input type="radio" name="radio" vulue="1">差评
        </div>
        <div class="pingfen">
            <p>评分：</p>
            <div class="wuxing">
                <p class="all">
                    <input type="radio" name="b" value="0" v-model="inputdata"/>
                    <span>★</span>
                    <input type="radio" name="b" value="1" v-model="inputdata" />
                    <span>★</span>
                    <input type="radio" name="b" value="2" v-model="inputdata" />
                    <span>★</span>
                    <input type="radio" name="b" value="3" v-model="inputdata" />
                    <span>★</span>
                    <input type="radio" name="b" value="4" v-model="inputdata" />
                    <span>★</span>
                    <!-- <input type="radio" name="b" value="5" v-model="inputdata" />
                    <span>★</span> -->
                </p>
            </div>
        </div>
        <div class="ganshou">
            <p>感受：</p>
            <textarea name="a"></textarea>
        </div>
        <p class="tijiao">提交</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
            inputdata:'5'
        }
    },
    methods:{

    },
    watch: {
    inputdata(value) {
    console.log(value)
    }
  }
}
</script>

<style scoped lang="less">
*{margin: 0;padding: 0;}
.right{
  width: 936px;
  display: inline-block;
  margin: 36px 0 0 8px;
  .right-top{
    width: 875px;
    height: 21px;
    margin-left: 14px;
    border-bottom: 2px solid #f7f7f7;
    p{
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
  }
  .right-di{
    margin: 22px 0 0 44px;
    font-size: 14px;
    .zuo{
        display:inline-flex;
        width: 215px;
    }
    .pingjia{
        margin-top: 35px;
        display: flex;
        align-items: center;
        input{
            margin-left: 30px;
        }
    }
    .pingfen{
        margin-top: 35px;
        display: flex;
        align-items: center;
        .wuxing{
            margin-left: 30px;
        }
    }
    .ganshou{
        margin-top: 35px;
        display: flex;
        textarea{
            width: 715px;
            height: 140px;
            border: 1px solid;
            margin-left: 35px;
        }
    }
    .tijiao{
        margin: 20px 0 0 645px;
        display: inline-block;
        color: #fff;
        padding: 10px 60px;
        border-radius: 5px;
        background-color: #2693d4;
    }
  }
}
.all>input{
    opacity:0;
    position:absolute;
    width:2em;
    height:3em;
}
// .all>span:nth-of-type(1){
//     display:none;
// }
.all>span{
    font-size:2em;
    color:gold;
    // -webkit-transition:color.2s;
    // transition:color.2s;
}
.all>input:checked~span{
    color:#666;
}
.all>input:checked+span{
    color:gold;
}
</style>