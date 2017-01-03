(($) => {
  $(() => {
    $.prototype.fullscreen = function()
    {
      var $e = $(this);
      if(!$e.hasClass('modal-fullscreen')) return;
      bind($e);
    }
    
    function cssn($e, props) {
      let sum = 0;
      props.forEach(p => {
        let att = $e.css(p);
        if(att)
        {
          sum += parseInt(att.match(/\d+/)[0]);
        }
      });
      return sum;
    }
    function g($e)
    {
      return {
        width: cssn($e, ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width']),
        height: cssn($e, ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']),
      };
    }
    function calc($e)
    {
      const wh = $(window).height();
      const ww = $(window).width();
      const $d = $e.find('.modal-dialog');
      $d.css('width', 'initial');
      $d.css('height', 'initial');
      $d.css('max-width', 'initial');
      $d.css('margin', '5px');
      const d = g($d);
      const $h = $e.find('.modal-header');
      const $f = $e.find('.modal-footer');
      const $b = $e.find('.modal-body');
      $b.css('overflow-y', 'scroll');
      const bh = wh - $h.outerHeight() - $f.outerHeight() - ($b.outerHeight()-$b.height()) - d.height;
      $b.height(bh);
    }
    function bind($e)
    {
       $e.on('show.bs.modal', e => {
        const $e = $(e.currentTarget).css('visibility', 'hidden');
       });
       $e.on('shown.bs.modal', e => {
        calc($(e.currentTarget));
        const $e = $(e.currentTarget).css('visibility', 'visible');   
       });
    }
    $(window).resize(() => {
      calc($('.modal.modal-fullscreen.in'));
    });
    bind($('.modal-fullscreen'));
  });
})(jQuery);