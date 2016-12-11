$(function() {
    console.log("page loaded");
    console.log(window.location.pathname);

    var $grid = $('.grid');

    if ($grid.length) {

      $grid.imagesLoaded(function(e) {
        console.log('images loaded');

        $grid.packery({
          initLayout: false,
          itemSelector: '.grid-item',
          gutter: '.gutter-sizer',
        });

        // bind event
        $grid.packery('on', 'layoutComplete', function() {
          console.log('layout is complete');
          $grid.addClass('visible');
        });

        // trigger initial layout
        $grid.packery();
      });
    }
  });
