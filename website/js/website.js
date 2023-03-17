!function ($) {
  'use strict';

  const initMenu = () => {
    const container = $('.dropdown-menu');

    $('.menu_download').on('click', () => {
      $('#quick-start')[0].scrollIntoView({behavior: 'smooth'})
    });

    $('.dropdown-toggle').on('click', function () {
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

  const initScroll = () => {
    let typing = true

    let options = {
      stringsElement: '#typed-strings',
      typeSpeed: 10,
      showCursor: false,
      onComplete: () => {
        typing = false
      }
    };

    let typed = new Typed('#type-code', options)

    window.onscroll = () => {
      const scrollCardElement = document.getElementById('type-code');
      let rect = scrollCardElement.getBoundingClientRect();
      let {top} = rect;
      let windowHeight = document.documentElement.clientHeight;
      const TopPadding = 128
      const TextHeight = 112

      if (top > windowHeight - TopPadding - TextHeight && top < windowHeight - TopPadding && !typing) {
        typing = true
        typed.reset(true)
      }
    }
  }

  $(document).ready(function () {
    initMenu()
    initView()
    initScroll()
  })
}(jQuery)
