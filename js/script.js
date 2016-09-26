$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('.round-ico').click(function() {
    $(this).toggleClass('highlight');
  });
  $('.play-modal').click(function() {
    $(this).toggleClass('playwhite');
  });
  $('.play-ico').click(function() {
    $(this).toggleClass('playgrey');
  });
  var d = new Date($.now());
  var n = d.getDate();
  $(".calendar").text(n);
  // slider luminosite
  var slider = document.getElementById('test5');
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    },
    format: wNumb({
      decimals: 0
    })
  });
  //
$('.pull-me').click();
});
