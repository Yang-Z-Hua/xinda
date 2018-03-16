<template>
  <div>
    <div class="product_list">
      <ul v-for="(a,index) in arr1" :key="index">
        <li class="title">   
          <!-- 一级标题 -->
          <p>{{a.name}}</p>
        </li>
        <li class="message">
          <div v-for="(b,key1) in arr1[index].itemList" :key="key1">
            <!-- 二级标题 -->
            <li class="secondTitle">
              <p>{{b.name}}</p>
            </li>
            <li class="thirdTitle">
              <!-- 三级标题 -->
              <a v-for="(c,key2) in arr1[index].itemList[key1].itemList" :key="key2" @click="thirdGo(a,c,index,b)">{{c.name}}<p>></p></a>
            </li>            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data: "",
      cpfw1: "blue",
      cpfw2: "",
      i: 1,
      arr1: "",
      allproduct: "allproduct"
    };
  },
  created() {
    this.ajax.post("/xinda-api/product/style/list").then(data => {
      this.arr1 = data.data.data;
    });
    if (this.i) {
      this.chen("/xinda-api/product/package/search-grid");
    }
  },
  methods: {
    thirdGo(a, c, index, b) {
      this.allproduct = "allproduct1";
      this.$router.push({
        path: "/inner/liebiaoye",
        query: {
          firstName: a.name,
          id: index,
          id2: b.id,
          id3: c.id
        }
      });
    },
    chen(a) {
      this.$parent.status = "wait";
      this.ajax
        .post(
          a,
          this.qs.stringify({
            searchName: this.searchFor
          })
        )
        .then(data => {
          this.$parent.status = "wait1";
          this.list = data.data.data;
          console.log(this.list);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less'>
.product_list {
  width: 100%;
  ul {
    padding: 18px 0;
    border-bottom: 1px solid #f4f4f4;
    p {
      color: black;
    }
    .title {
      line-height: 26px;
      font-size: 16px;
      width: 25vw;
      text-align: center;
    }
    .message {
      overflow: scroll;
      height: 85vh;
      width: 75vw;
      position: absolute;
      top: 0;
      left: 25vw;
      display: none;
      font-size: 16px;
      a {
        color: black;
        border-bottom: 1px solid #ccc;
      }
      div {
        line-height: 17px;
        .secondTitle {
          padding-left: 20px;
          background-color: #f3f4f6;
          border-bottom: 1px solid #ccc;
          display: block;
          p {
            color: black;
            line-height: 3;
          }
        }
        .thirdTitle {
          background-color: #f3f4f6;
          a {
            margin: 0 2px 0 40px;
            line-height: 3;
            text-decoration: none;
            display: block;
            p{
              float: right;
              margin-right: 10px
            }
          }
        }
      }
    }
  }
  ul:hover .message {
    display: block;
  }
  ul:hover {
    background-color: #f3f4f6;
  }
}
</style>
