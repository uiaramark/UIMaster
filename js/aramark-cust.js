// aramark admin config modal controler

'use strict';

(function ($) {
  $(function () {
    function cssn($e, props) {
      var sum = 0;
      props.forEach(function (p) {
        sum += parseInt($e.css(p).match(/\d+/)[0]);
      });
      return sum;
    }
    function g($e) {
      return {
        width: cssn($e, ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width']),
        height: cssn($e, ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width'])
      };
    }
    function calc($e) {
    //   var margin_wh = 10; // value in percentage
    //   var margin_ww = 10; // value in percentage
      var wh = $(window).height();
      var ww = $(window).width();
      var $d = $e.find('.modal-dialog');
      $d.css('width', '70%');
      $d.css('height', '70%');
      $d.css('max-width', '70%');
      $d.css('margin', '100px auto 260px');
      var d = g($d);
      var $h = $e.find('.modal-header');
      var $f = $e.find('.modal-footer');
      var $b = $e.find('.modal-body');
      $b.css('overflow-y', 'auto');
      var bh = wh - $h.outerHeight() - $f.outerHeight() - ($b.outerHeight() - $b.height()) - d.height;
      $b.height(bh);
    }
    $('.modal-fullscreen').on('show.bs.modal', function (e) {
      var $e = $(e.currentTarget).css('visibility', 'hidden');
    });
    $('.modal-fullscreen').on('shown.bs.modal', function (e) {
      calc($(e.currentTarget));
      var $e = $(e.currentTarget).css('visibility', 'visible');
    });
    $(window).resize(function () {
      calc($('.modal.modal-fullscreen.in'));
    });
  });
})(jQuery);

// end of aramark admin config modal controler


$(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);
        console.log("clicked");
        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');
        
    });

     $('.sidebar-toggle').click(function () {
        $('.menu-row').toggleClass('shortMenu');
        // $('.side-menu').toggleClass('shortMenu');
        // $('.top-menu').toggleClass('shortMenu');
        // $('.container-fluid').toggleClass('shortMenu');
    });
    
    // Expand collapse left admin menu
    $('.expandAllitems').click(function(){
        console.log("clicked Expand");
        // $('.panel-collapse:not(".in")').collapse('show');
        $(".panel-collapse").collapse('show');
    });

    $('.collapseAllitems').click(function(){
        console.log("clicked  Collapse");
        // $('.panel-collapse.in').collapse('hide');
        $(".panel-collapse").collapse('hide');
    });
    // end of Expand collapse left admin menu

    // k-grid on check/ on uncheck select all checkbox
    // $('#mainCheckbox').change(function () {
    //   if ($(this).prop('checked')) {
    //     $('input.parent_div[type="checkbox"]').prop('checked', true);
    //   } else {
    //     $('input.parent_div[type="checkbox"]').prop('checked', false);
    //   }
    // });
    // end of k-grid on check/ on uncheck select all checkbox
   
    
});

// $(window).load(function() {
//     function pageloader(){
//         $(".loader").delay( 3000 ).fadeOut("slow");
//     }
//     pageloader();
// });