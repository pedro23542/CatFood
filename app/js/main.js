$(function(){   

  $.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
      new BeerSlider(this, options);
    });
  };
  $('.beer-slider').BeerSlider({start: 60});



  ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.77308768, 37.61798532],
                zoom: 17
            });
        }

});