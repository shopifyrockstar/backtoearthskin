(function(){

  //function to load script
  //url is the url containing the script
  //callback is the function to execute after the script is loaded
  var loadScript = function(url, callback){
 
    var script = document.createElement("script");
    script.type = "text/javascript";

    //internet explorer
    if (script.readyState){ 
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" || script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    }
    //other browsers
    else {
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    //append to the head tag the script
    document.getElementsByTagName("head")[0].appendChild(script);
    
  };

  //code that I want to execute
  var myCode = function($){

    setTimeout(function() {$('.collection-product-slider').show();}, 2000);
   
    //product add to cart bind action
     $(document).on("click",".btn-custom-add-to-cart",function(e) {
          e.preventDefault();
          var __action_id = $(this).data("action-id");
          if(__action_id != null && __action_id != 'undefined'){
              $("[data-id='"+__action_id+"']").trigger('click');
              $(this).addClass('btn--loading');
              setTimeout(() => { 
                 $(this).removeClass('btn--loading');   
              }, 1000);
          }
    });


      if (window.matchMedia('(max-width: 768px)').matches) {
        if ($(".template-collection .klaviyo-bis-trigger")[0]){
          $('.template-collection .klaviyo-bis-trigger').html('+');
          $('.template-collection .klaviyo-bis-trigger').show();
        }  
      }  
  
      $(window).on('resize', function(){
        if ($(".template-collection .klaviyo-bis-trigger")[0]){
          if (window.matchMedia('(max-width: 768px)').matches) {
            $('.template-collection .klaviyo-bis-trigger').hide();
            $('.template-collection .klaviyo-bis-trigger').html('+');
            $('.template-collection .klaviyo-bis-trigger').show();
          }else{
            $('.template-collection .klaviyo-bis-trigger').hide();
            $('.template-collection .klaviyo-bis-trigger').html('Reserve Product');
            $('.template-collection .klaviyo-bis-trigger').show();            
          }
        }  
      });



    $('.product-slider-container').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slick-next"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.29446 24.7648L15.4121 13.0001L1.29447 1.23536" stroke="black"/></svg></button>', 
        arrows: false,
        responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
       },
       {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
          }
       },
       {
          breakpoint: 500,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            variableWidth: true,
            slidesToScroll: 1
          }
       }
      ]
    }); 


    
    
    $('.collection-product-slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: '<button class="slick-next"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.29446 24.7648L15.4121 13.0001L1.29447 1.23536" stroke="black"/></svg></button>', 
        arrows: true,
        responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
       },
       {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
          }
       },
       {
          breakpoint: 500,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            variableWidth: true,
            slidesToScroll: 1
          }
       }
      ]
    });    

    $('.coll_list_wrapper').slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1
          }
        }
    
      ]
    });

    
  };

  if (typeof jQuery === 'undefined'){
    loadScript('//code.jquery.com/jquery-1.12.4.js', function(){
      jQuery = jQuery.noConflict(true);
      if (typeof jQuery.slick === 'undefined'){
      	loadScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){
       		 myCode(jQuery);	
        });
      }
    });
  } else {
    myCode(jQuery);
  }

})();