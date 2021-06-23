Vue.filter('readMore',function(text,length,suffix){
      return text.substring(0,length) + suffix;
    });

var app = new Vue({
  el: '#app',
  data:{
    url: 'https://www.yahoo.co.jp/'
  }
});