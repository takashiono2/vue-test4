var app = new Vue({
  el: '#app',
  data:{
    items: null,
    keyword: '',
    message: ''
  },
  watch: {

  },
  created: function(){
    this.keyword = 'JavaScript'
    this.getAnswer()
  },
　methods:{
    getAnswer: function(){
      if(this.keyword===''){
        this.items = null
        return
      }//キーワードが空なら終了

    this.message = 'Loading...'
    var vm = this//axiosでVueインスタンスのプロパティにアクセスするため、thisをローカル変数に入れておく
    var params = {page:1, per_page: 20, query:this.keyword}//パラメーターをキーバーリューの形式で用意
    axios.get('https://qiita.com/api/v2/items',{params})
    .then(function(response){
      console.log(response)
      vm.items = response.data
    })
    .catch(function(error){
      vm.message = 'Error!' + error
    })
    .finally(function(){
      vm.message = ''
    })
  }
}
});

// No.88 オプションimmediate
// var app = new Vue({
//   el: '#app',
//   data: {
//     colors: [
//       {name:'red'},
//       {name:'green'},
//       {name:'blue'}
//     ]
//   },
//   watch: {
//     colors: {
//       handler: function(newValue,oldValue){
//         console.log('Update!')
//         console.log('newValue: %s,oldValue: %s',
//           JSON.stringify(newValue,null, '\t'),
//           JSON.stringify(oldValue,null, '\t'))
//       },
//     deep: true,
//     immediate: true
//     }
//   }
// });

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