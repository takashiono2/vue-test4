var app = new Vue({
  el: '#app',
  data: {
    message: ''
  }
});

// 132セレクトボックス複数の選択で初期値が表示させる場合
// var app = new Vue({
//   el: '#app',
//   data: {
//     selected:[]
//   }
// });

// 131セレクトボックス単体の選択で初期値が表示させる場合
// var app = new Vue({
//   el: '#app',
//   data: {
//     selected: document.getElementById('example')? document.getElementById('example').value : ''
//   }
// });

// 130.ラジオボタン
// var app = new Vue({
//   el: '#app',
//   data: {
//     colors: ''
//   }
// });

// No.122v-on省略記法
// var app = new Vue({
//   el: '#app',
//   data: {
//     message:''
//   },
//   methods: {
//     clear: function(){
//       this.message = ''
//     },
//     clickHandler: function(){
//       alert('alert!');
//     }
//   }
// });

// No.119イベント修飾子の利用例.once
// var app = new Vue({
//   el: '#app',
//   data:{
//     message: ''
//   },
//   methods:{
//     clickHandler: function(){
//       this.message = new Date().toLocaleTimeString()
//     }
//   }
// });

// No.118イベント修飾子
// var app = new Vue({
//   el: '#app',
//   data: {
//     counter: 0,
//     message:''
//   },
//   methods: {
//     clickHandler: function($event,message){ 
//       this.message = message;
//       console.log($event)
//     }
//   }
// });

// 111.v-ifとv-showの違い
// var app = new Vue({
//   el: '#app',
//   data: {
//     color: 'red' 
//   }
// });

// No.106インラインスタイルのデータバインディングにオブジェクトデータ
// var app = new Vue({
//   el: '#app',
//   data: {
//     styleObject: {
//       color: 'blue',
//       fontSize: '42px'
//     }
//   }
// });

// No.104クラスの条件に三項演算子を使う
// var app = new Vue({
//   el: '#app',
//   data: {
//     largeClass: {
//       large: true,
//       'bd-gray': true
//     },
//     dangerClass: {
//       'text-danger': true
//     },
//     isLarge: true
//   }
// });

// 101.プレーンなクラス属性との共存
// var app = new Vue({
//   el: '#app',
//   data: {
//     isLarge: true,
//     hasError: true
//   }
// });

// No.97動作の確認
// var app = new Vue({
//   el: '#app',
//   data:{
//     items: null,
//     keyword: '',
//     message: ''
//   },
//   watch:{
//     keyword: function(newKeyword, oldKeyword){
//       // console.log(newKeyword)
//       this.messge = 'Waiting for you to stop typing...'
//       this.debouncedGetAnswer()
//     }
//   },
//   created: function(){
//     // this.keyword = 'JavaScript'
//     // this.getAnswer()
//     this.debouncedGetAnswer = _.debounce(this.getAnswer,1000)
//   },
// 　methods:{
//     getAnswer: function(){
//       if(this.keyword===''){
//         this.items = null
//         this.message = ''
//         return
//       }//キーワードが空なら終了

//     this.message = 'Loading...'
//     var vm = this//axiosでVueインスタンスのプロパティにアクセスするため、thisをローカル変数に入れておく
//     var params = {page:1, per_page: 20, query:this.keyword}//パラメーターをキーバーリューの形式で用意
//     axios.get('https://qiita.com/api/v2/items',{params})
//     .then(function(response){
//       console.log(response)
//       vm.items = response.data
//     })
//     .catch(function(error){
//       vm.message = 'Error!' + error
//     })
//     .finally(function(){
//       vm.message = ''
//     })
//   }
// }
// });

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