// Make the two sliders have the same height
$(function() {
    var imgHeight = '';
    
    // Define a resize function
    function setImgHeight() {
      imgHeight = $('.carousel .carousel-item.active img').height();
      $('.carousel-img').height(imgHeight);
      console.log(imgHeight);
    }
    
    // Initialize the height
    // setTimeout to wait until the image is loaded
    setTimeout( function(){ 
      setImgHeight(); 
    }, 1000 );
    
    // Recalculate the height if the screen is resized
    $( window ).resize(function() {
      setImgHeight();
    });
  });