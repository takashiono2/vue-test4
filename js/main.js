var app = new Vue({
  el: '#app',
  data: { 
    basePrice: 100
  },
  computed: {
    taxIncludedprice: {
      get: function(){
        return parseInt(this.basePrice*1.08);
        // return this.basePrice*1.08;
      },
      set: function(taxIncludedprice){
        this.basePrice = Math.ceil(taxIncludedprice/1.08);
      }
    }
  }
});