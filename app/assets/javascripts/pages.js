$(window).ready(function () {
    $('#myCarousel').carousel({interval: 7000});



    // $('#myCarousel').on('slid', function(){
    //  if($('#myCarousel .active').hasClass('slide-1')){
    //    $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
    //     $('#myCarousel .slide-2 .carousel-caption form').toggleClass('slide-in');
    //   }
    //  if($('#myCarousel .active').hasClass('slide-3')){
    //    $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
    //     $('#myCarousel .slide-2 .carousel-caption form').toggleClass('slide-in');
    //   }
    // });

    $('.left.carousel-control').on('click', function(){
      if($('#myCarousel .active').hasClass('slide-1')){            
        $('#myCarousel .slide-1 .carousel-caption form').removeClass('slide-in');
        $('#myCarousel .slide-2 .carousel-caption form').removeClass('slide-in');
      }
      if($('#myCarousel .active').hasClass('slide-2')){
        $('#myCarousel .slide-1').addClass('left-click');
        $('#myCarousel .slide-2').addClass('left-click');
        $('#myCarousel .slide-1 .carousel-caption form').addClass('slide-in');
        $('#myCarousel .slide-2 .carousel-caption form').addClass('slide-in');
      }
    });

    $('#myCarousel').on('slide', function(){
        if($('#myCarousel .active').hasClass('slide-2')){
          if($('#myCarousel .active').hasClass('left-click')){  
            $('#myCarousel .slide-1').removeClass('left-click');
            $('#myCarousel .slide-2').removeClass('left-click');
          }
          else {          
            $('#myCarousel .slide-1 .carousel-caption form').removeClass('slide-in');
            $('#myCarousel .slide-2 .carousel-caption form').removeClass('slide-in');
          }
        }
        // if($('#myCarousel .active').hasClass('slide-1')){            
        //   $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
        //   $('#myCarousel .slide-2 .carousel-caption form').toggleClass('slide-in');
        // }
    });

    $('#myCarousel').on('slide', function(){
      setTimeout( function(){
        var left = $('#myCarousel').find('.item.active.left');
        var right = $('#myCarousel').find('.item.active.right');
        if(left.length > 0) {
          if($('#myCarousel .active').hasClass('slide-3')){            
            $('#myCarousel .slide-1 .carousel-caption form').addClass('slide-in');
            $('#myCarousel .slide-2 .carousel-caption form').addClass('slide-in');
          }
        }
        else if(right.length > 0) {
          if($('#myCarousel .active').hasClass('slide-3')){            
            $('#myCarousel .slide-1 .carousel-caption form').addClass('slide-in');
            $('#myCarousel .slide-2 .carousel-caption form').addClass('slide-in');
          }
        }
      }, 500);
    });


    // if($('#myCarousel .active').hasClass('slide-2')){
    //     $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
    //     $('#myCarousel .slide-2 .carousel-caption form').toggleClass('slide-in');
    //   }
    // });

    // $('#myCarousel').on('slid',function(){
    //   if($('#myCarousel .active').hasClass('slide-1')){
    //     $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
    //   }
    // });

    $('#myCarousel .slide-1 .carousel-caption form').toggleClass('slide-in');
    $('#myCarousel .slide-2 .carousel-caption form').toggleClass('slide-in');
  });

