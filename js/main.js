//グローバルフィルタ
Vue.filter('numberFormat',function(value){
      return value.toLocaleString();
    });

var app = new Vue({
  el: '#app',
  data:{
    price: 2980000
  }
});

// 以下、ローカルフィルタ
// var app = new Vue({
//   el: '#app',
//   data:{
//     price: 2980000
//   },
//   filters: {
//     numberFormat: function(value){
//       return value.toLocaleString();
//     }
//   }
// });