export default {
  inpu:function(function1) {
    console.log(function1);
    //debounce机制
    var this1 = this;
    this.time[this.rq] = new Date().getTime();
    (function (a) {
      this1.rq++;
      this1.timeId = setTimeout(function () {
        if (this1.time[a + 1] && this1.time[a + 1] - this1.time[a] < 500) {
          console.log("123");
          return;
        } else {
          console.log('456')
          function1();
        }
      }, 500);
    })(this.rq);
  }
}