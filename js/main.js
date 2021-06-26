var app = new Vue({
  el: '#app',
  data: {
    colors: [
      {name:'red'},
      {name:'green'},
      {name:'blue'}
    ]
  },
  watch: {
    handler: function(newValue,oldValue){
      console.log('Update!')
    },
    deep: true
  }
});

// No.84 算出プロパティと監視プロパティの比較
// var app = new Vue({
//   el: '#app',
//   data: {
//     firstName: '',
//     lastName: ''
//     // fullName: ''
//   },
//   // watch: {
//   //   firstName: function(value){
//   //     this.fullName = value + '' + this.lastName;
//   //   },
//   //   lastName: function(value){
//   //     this.fullName = this.firstName + '' + value;
//   //   }
//   // },
//   computed: {
//     fullName: function(){
//       return this.firstName + '' + this.lastName
//     }
//   }
// });

// No.83 単位変換アプリ
// var app = new Vue({
//   el: '#app',
//   data: { 
//     km: 0,
//     m: 0,
//     mm: 0
//   },
//   watch: {
//     km: function(value){
//       this.km = value;
//       this.m = value*1000;
//       this.mm = value*1000000;
//     },
//     m: function(value){
//       this.km = value/1000;
//       this.m = value;
//       this.mm = value*1000;
//     },
//     mm: function(value){
//       this.km = value/1000000;
//       this.m = value/1000;
//       this.mm = value;
//     }  
//   }
// });