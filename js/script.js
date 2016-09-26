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

  var minutes = d.getMinutes();
  var hours = d.getHours();
  $(".heure").text(hours + ":" + minutes);

  var minutes = d.getMinutes();
  var hours = d.getHours();
  $(".heure2").text(hours + ":" + minutes + " " + " PM");

  var m_names = new Array("January", "February", "March",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  if(dd<10) { dd='0'+dd }
  var date= m_names[mm]+' '+dd+', '+yyyy;
  $(".date_index").text(date);

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
