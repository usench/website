!function ($) {
  'use strict';

  const initMenu = () => {
    const container = $('.dropdown-menu');

    $('.dropdown-toggle').on('click', () => {
      if (container.is(':visible')) {
        container.hide();
      } else {
        container.show();
      }
    })

    $(document).on('mousedown', e => {
      const container = $('.dropdown-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    })

    $('.dropdown-menu .dropdown-item').on('click', () => {
      container.hide();
    })
  }

  const initView = () => {
    const viewer = new Viewer($('#image')[0], {
      navbar: false,
      toolbar: false
    });

    $(window).on('unload', () => {
      viewer.destroy();
    })
  }

  $(document).ready(() => {
    initMenu()
    initView()
  })
}(window.jQuery)
