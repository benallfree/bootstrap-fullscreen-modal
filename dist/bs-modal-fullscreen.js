'use strict';

(function ($) {
  $(function () {
    $.prototype.fullscreen = function () {
      var $e = $(this);
      if (!$e.hasClass('modal-fullscreen')) return;
      bind($e);
    };

    function cssn($e, props) {
      var sum = 0;
      props.forEach(function (p) {
        var att = $e.css(p);
        if (att) {
          sum += parseInt(att.match(/\d+/)[0]);
        }
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
      var wh = $(window).height();
      var ww = $(window).width();
      var $d = $e.find('.modal-dialog');
      $d.css('width', 'initial');
      $d.css('height', 'initial');
      $d.css('max-width', 'initial');
      $d.css('margin', '5px');
      var d = g($d);
      var $h = $e.find('.modal-header');
      var $f = $e.find('.modal-footer');
      var $b = $e.find('.modal-body');
      $b.css('overflow-y', 'scroll');
      var bh = wh - $h.outerHeight() - $f.outerHeight() - ($b.outerHeight() - $b.height()) - d.height;
      $b.height(bh);
    }
    function bind($e) {
      $e.on('show.bs.modal', function (e) {
        var $e = $(e.currentTarget).css('visibility', 'hidden');
      });
      $e.on('shown.bs.modal', function (e) {
        calc($(e.currentTarget));
        var $e = $(e.currentTarget).css('visibility', 'visible');
      });
    }
    $(window).resize(function () {
      calc($('.modal.modal-fullscreen.in'));
    });
    bind($('.modal-fullscreen'));
  });
})(jQuery);