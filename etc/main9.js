Vue.filter('readMore',function(text,length,suffix){
      return text.substring(0,length) + suffix;
    });

var app = new Vue({
  el: '#app',
  data:{
    text:'aaa bbb ccc ddd eee fff ggg hhh iii jjj kkk lll'
  }
});