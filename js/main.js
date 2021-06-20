var app = new Vue({
  el: '#app',
  data: {
    meg: "",
    message: "test",
    url: "https://www.yahoo.co.jp/",
    toggle: true,
    languages: [
      'JavaScript',
      'pyton',
      'Ruby'
    ]},
  methods: {
    clicked: function(){
      this.message = "クリックされた！"
    }
  }
});