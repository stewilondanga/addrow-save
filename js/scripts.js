var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$('.mv-save').on('click', function() {
  $('.saved').fadeIn().delay(3000).fadeOut();
});
/*
function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $('td:not([property="breed"])').each(function(event) {
        header = $(this).attr('property')

        if(! $(this).parent().find('#' + header).length) {
          $('#' + header).clone().insertBefore(this);
        }
      });
    }
}

$(window).on('load resize', mobileViewUpdate);
