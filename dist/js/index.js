$(document).ready(function (){
  $('.slider').slick({
    dots: true,
    cssEase: 'linear'
  });
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
  $( "#datepicker" ).datepicker({
    firstDay : 1,
    dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]
  });
  $(".switcher-wrap > input").on('click', function(){
    $(this).toggleClass("active");
    if ($(this).parent().find('label').text() == "ON") {
      $(this).parent().find('label').text('OFF');
    } else
    $(this).parent().find('label').text('ON');
  });
    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 15, 85 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
    } );
  $('#dropdown1 .dropdown-button').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('ul.dropdown-sub').toggleClass('active');
  });
  $('.notify > span').on('click', function() {
    $(this).parent('.notify').fadeOut();
  });
  $('#myForm').ajaxForm();
});