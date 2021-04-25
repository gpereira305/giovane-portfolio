

$(document).ready(function() { 
  //  action to open the mobile menu
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open')
    $('.top-nav').toggleClass('open')
  });

  //  action to close the menu clicking on a link 
  $('.top-nav .nav-list').on('click', function() { 
    $('.menu-toggler').removeClass('open')
    $('.top-nav').removeClass('open')
  });


  // action to smooth scrolling through sections
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
       scrollTop: $($(this).attr('href')).offset().top - 100
     },  
      900
    );
    e.preventDefault();
  });

  // action on clicking the 'up icon' to go to the top
  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 750);
  });

  // Get the current  year
    $('#year').text(new Date().getFullYear()); 

  // AOS animation script
  AOS.init({
    easing: 'ease',
    duration: 1800
  });

});