// 自行加入的JS請寫在這裡
$(function () {
  //sticky sidebar
  if ($('.stickySidebar').length > 0) {
    var stickySidebar = new StickySidebar('.stickySidebar', {
      containerSelector: '.main',
      topSpacing: 93,
      bottomSpacing: 0,
      minWidth: 768,
      resizeSensor: true,
    });
  }
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  $('.mpSlider01').slick({
    // mobileFirst: true,
    dots: true,
    arrows: true,
    // infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  $('.mpSlider02').slick({
    // mobileFirst: true,
    dots: true,
    arrows: true,
    // infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });

  // font_size
  $('.fontsize_btn').click(function () {
    if ($('.font_size_list').is(':visible')) {
      $('.font_size_list').stop().slideUp();
    } else {
      $('.font_size_list').stop().slideDown();
      $('.searchcontent').stop().slideUp();
    }
  });

  // header search
  $('.searchblock .searchbtn').click(function () {
    if ($('.searchcontent').is(':visible')) {
      $('.searchcontent').stop().slideUp();
    } else {
      $('.searchcontent').stop().slideDown();
      $('.font_size_list').stop().slideUp();
    }
  });

  //內頁左欄上下開合
  var _leftnodemenu = $('.left_block .leftblock_nodemenu ul');
  _leftnodemenu.find('li').has('ul').addClass('hasChild');
  var _hasul = _leftnodemenu.find('.hasChild').children('a');
  $('<button type="button" class="arrow">箭頭</button>').insertAfter(_hasul);
  _leftnodemenu
    .children('li')
    .children('button')
    .click(function () {
      $(this).next('ul').stop().slideToggle();
      $(this).stop().toggleClass('open');
      $(this).parent('li').siblings('li').children('ul').stop().slideUp();
      $(this).parent('li').siblings('.hasChild').children('button').removeClass('open');
    });

  //  內頁左欄 左右收合
  $('.nodemenu_btn>a').click(function () {
    $('.left_block').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 點擊其他地方，左欄收起
  $(document)
    .off('touchend click')
    .on('touchend click', function (e) {
      var container = $('.nodemenu_btn a, .left_block '); //點這些以外的區塊
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.left_block').removeClass('open'); //要被收起來的區塊
        $('.left_block .leftblock_nodemenu ul ul').stop().slideUp();
        $('.left_block .leftblock_nodemenu ul li.hasChild button').removeClass('open');
      }
    });
});

////////////////////////////////////////////////////////
$(function () {
  if ($('.slick12_5').length > 0) {
    $('.slick12_5').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
    });
  }
  if ($('.slick12_3').length > 0) {
    $('.slick12_3').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
    });
  }
  if ($('.slick12_4').length > 0) {
    $('.slick12_4').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
    });
  }
});

//c_iconBox_next_lv判斷數量大於6隱藏出現更多
$(window).on('load', function () {
  if (!$('.c_iconBox_next_lv .hoverBox').length) {
    return;
  }
  $('.c_iconBox_next_lv .hoverBox').each(function () {
    let countLi = $(this).find('li').length;
    if (countLi > 5) {
      $(this)
        .find('li')
        .each(function (index, el) {
          if (index > 4) {
            $(this).hide();
          }
        });
      $(this).find('.moreItem').show();
    }
  });
});

let outerWidth = 1300;
let width8 = (outerWidth / 12) * 8;
let width6 = (outerWidth / 12) * 6;
let width4 = (outerWidth / 12) * 4;

function checkOuter12_5() {
  $('.checkOuter12_5').each(function () {
    let elemWidth = $(this).width();
    if (elemWidth <= width4) {
      $(this).attr('col', 2);
    } else if (elemWidth <= width6) {
      $(this).attr('col', 3);
    } else if (elemWidth <= width8) {
      $(this).attr('col', 4);
    } else if (elemWidth > width8) {
      $(this).attr('col', 5);
    }
  });
}
function checkOuter12_3() {
  $('.checkOuter12_3').each(function () {
    let elemWidth = $(this).width();
    if (elemWidth <= width6) {
      $(this).attr('col', 1);
    } else if (elemWidth <= width8) {
      $(this).attr('col', 2);
    } else if (elemWidth > width8) {
      $(this).attr('col', 3);
    }
  });
}
function checkOuter12_4() {
  $('.checkOuter12_4').each(function () {
    let elemWidth = $(this).width();
    if (elemWidth <= width4) {
      $(this).attr('col', 1);
    } else if (elemWidth <= width6) {
      $(this).attr('col', 2);
    } else if (elemWidth <= width8) {
      $(this).attr('col', 3);
    } else if (elemWidth > width8) {
      $(this).attr('col', 4);
    }
  });
}
$(window).on('load resize', checkOuter12_5);
$(window).on('load resize', checkOuter12_4);
$(window).on('load resize', checkOuter12_3);

function checkSlick12_5() {
  if (!$('.slick12_5').length) {
    return;
  }
  $('.slick12_5').each(function () {
    let boxWidth = $(this).width();
    if (boxWidth <= width4) {
      $(this).parent().attr('col', 2);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 2,
      });
    } else if (boxWidth <= width6) {
      $(this).parent().attr('col', 3);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 3,
      });
    } else if (boxWidth <= width8) {
      $(this).parent().attr('col', 4);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 4,
      });
    } else if (boxWidth > width8) {
      $(this).parent().attr('col', 5);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 5,
      });
    }
  });
}

function checkSlick12_3() {
  if (!$('.slick12_3').length) {
    return;
  }
  $('.slick12_3').each(function () {
    let boxWidth = $(this).width() - 30;
    if (boxWidth <= width4) {
      $(this).parent().attr('col', 1);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 1,
      });
    } else if (boxWidth <= width6) {
      $(this).attr('col', 1);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 1,
      });
    } else if (boxWidth <= width8) {
      $(this).attr('col', 2);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 2,
      });
    } else if (boxWidth > width8) {
      $(this).attr('col', 3);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 3,
      });
    }
  });
}

function checkSlick12_4() {
  if (!$('.slick12_4').length) {
    return;
  }
  $('.slick12_4').each(function () {
    let boxWidth = $(this).width();
    if (boxWidth <= width4) {
      $(this).attr('col', 1);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 1,
      });
    } else if (boxWidth <= width6) {
      $(this).attr('col', 2);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 2,
      });
    } else if (boxWidth <= width8) {
      $(this).attr('col', 3);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 3,
      });
    } else if (boxWidth > width8) {
      $(this).attr('col', 4);
      $(this).slick('unslick');
      $(this).off().slick({
        slidesToShow: 4,
      });
    }
  });
}

$(window).on('load resize', checkSlick12_5);
$(window).on('load resize', checkSlick12_4);
$(window).on('load resize', checkSlick12_3);

function animateNumber(element, start, stop, duration, ease) {
  let startTime = null;
  const isCountdown = start > stop;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / duration;
    let currentValue;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }
    element.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

function animateChart(elem, start, stop, max, duration) {
  let element = typeof elem === 'string' ? document.querySelector(elem) : elem;
  let startTime = null;
  const isCountdown = start > stop;
  let p = max === undefined ? 100 : (stop / max) * 100;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / (p * 50);
    let currentValue;
    let currentValueP;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }

    if (isCountdown) {
      currentValueP = Math.floor(start - (start - p) * progress);
    } else {
      currentValueP = Math.floor(start + (p - start) * progress);
    }

    element.style.width = `calc(${currentValueP}%)`;
    element.nextElementSibling.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.nextElementSibling.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

if ($('.c_chart').length > 0) {
  const indexChart = document.querySelector('.c_chart');
  const indexTab = indexChart.querySelector('.tab');
  const indexTabContent = indexChart.querySelector('.contentBox');
  const indexTabContentChart = indexTabContent.querySelectorAll('.content');

  window.addEventListener('load', function () {
    chartData.forEach((chart, index) => {
      chart.data.forEach((data, i) => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('item');

        let titleElem = document.createElement('div');
        titleElem.classList.add('title');
        titleElem.textContent = data.title;
        itemElem.appendChild(titleElem);

        let lineBox = document.createElement('div');
        lineBox.classList.add('lineBox');
        lineBox.classList.add(`line${i + 1}`);

        let span = document.createElement('span');
        lineBox.appendChild(span);

        let countElem = document.createElement('div');
        countElem.classList.add('count');
        countElem.dataset.count = data.value;
        lineBox.appendChild(countElem);
        itemElem.appendChild(lineBox);
        indexTabContentChart[index].appendChild(itemElem);
      });

      indexTabContent.appendChild(indexTabContentChart[index]);

      let infoElem = document.createElement('div');
      infoElem.classList.add('infoBox');
      infoElem.dataset.first = chart.info[0];
      for (let i = 1; i < chart.info[2] + 1; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.textContent = (chart.info[1] / chart.info[2]) * i;
        block.style.width = `${100 / chart.info[2]}%`;
        infoElem.appendChild(block);
      }

      indexTabContentChart[index].appendChild(infoElem);
    });

    const indexTabChartBox = indexChart.querySelectorAll('.content');
    const indexTabButton = indexTab.querySelectorAll('button');
    indexTabButton.forEach((value, index) => {
      value.addEventListener('click', function () {
        let max = chartData[index].info[1];

        let allItem = indexTabChartBox[index].querySelectorAll('.item');
        allItem.forEach((item, index) => {
          animateChart(item.querySelector('span'), 0, Number(item.querySelector('.count').dataset.count), max);
        });
      });
    });

    setTimeout(() => {
      let indexScrollCheck = false;
      let allItem = indexTabContent.querySelectorAll('.content')[0].querySelectorAll('.item');
      let max = chartData[0].info[1];

      function handleChartAnimation() {
        if (isObjectTBVisible(indexChart) && !indexScrollCheck) {
          allItem.forEach((item, index) => {
            animateChart(item.querySelector('span'), 0, Number(item.querySelector('.count').dataset.count), max);
          });
          indexScrollCheck = true;
        }
      }

      handleChartAnimation();
      window.addEventListener('scroll', handleChartAnimation);
    }, 100);
  });

  function isObjectTBVisible(object) {
    let windowHeight = window.innerHeight;

    let objectRect = object?.getBoundingClientRect();
    let objectTop = objectRect?.top;
    let objectBottom = objectRect?.bottom;

    let isFullyVisible = (objectTop - windowHeight + 100 <= 0 && objectBottom > 0) || (objectTop <= 0 && objectBottom.bottom - 100 > 0);
    return isFullyVisible;
  }
}

function tabUse(elem, hasTab) {
  $(elem).find('.tab button').eq(0).addClass('active');
  $(elem).find('.content').eq(0).show();
  $(elem)
    .find('.tab button')
    .on('click', function () {
      let index = $(this).index();
      $(elem).find('.tab button').removeClass('active');
      $(this).addClass('active');
      $(elem).find('.content').hide();
      $(elem).find('.content').eq(index).show();
      if (hasTab) {
        checkSlick12_3();
        checkSlick12_4();
        checkSlick12_5();
        $(elem).find('.slick12_3').slick('refresh');
        $(elem).find('.slick12_4').slick('refresh');
        $(elem).find('.slick12_5').slick('refresh');
      }
    });
}

tabUse('.c_chart');
tabUse('.c_tab');
tabUse('.c_newsCardTab', true);

function faq(elem) {
  $(elem)
    .off()
    .on('click', 'button.title', function () {
      console.log($(this).parent('.item').siblings('.item'));
      $(this).parent('.item').siblings('.item').find('.aBox').slideUp('fast');
      $(this).parent('.item').siblings('.item').find('.title').removeClass('active');
      $(this).toggleClass('active');
      $(this).siblings('.aBox').slideToggle('fast');
    });
}
faq('.c_faq');

//業務成果 跑數字
// $(function () {
//   let num01 = document.querySelector('.num01');
//   animateNumber(num01, 0, 117, 2000);
//   let num02 = document.querySelector('.num02');
//   animateNumber(num02, 0, 39, 2000);
//   let num03 = document.querySelector('.num03');
//   animateNumber(num03, 0, 628, 2000);
//   let num04 = document.querySelector('.num04');
//   animateNumber(num04, 0, 320, 2000);

//   let amount01 = document.querySelector('.amount01');
//   animateNumber(amount01, 0, 27, 2000);
//   let amount02 = document.querySelector('.amount02');
//   animateNumber(amount02, 0, 2, 500);
//   let amount03 = document.querySelector('.amount03');
//   animateNumber(amount03, 0, 412, 2000);
//   let amount04 = document.querySelector('.amount04');
//   animateNumber(amount04, 0, 30, 2000);
//   let amount05 = document.querySelector('.amount05');
//   animateNumber(amount05, 0, 382, 2000);
//   let amount06 = document.querySelector('.amount06');
//   animateNumber(amount06, 0, 216, 2000);
//   let amount07 = document.querySelector('.amount07');
//   animateNumber(amount07, 0, 18, 2000);
//   let amount08 = document.querySelector('.amount08');
//   animateNumber(amount08, 0, 5, 2000);
//   let amount09 = document.querySelector('.amount09');
//   animateNumber(amount09, 0, 216, 2000);
// });
$(function () {
  let num01 = document.querySelector('.num01');
  let num02 = document.querySelector('.num02');
  let num03 = document.querySelector('.num03');
  // let num04 = document.querySelector('.num04');
  // let amount01 = document.querySelector('.amount01');
  // let amount02 = document.querySelector('.amount02');
  // let amount03 = document.querySelector('.amount03');
  // let amount04 = document.querySelector('.amount04');
  // let amount05 = document.querySelector('.amount05');
  // let amount06 = document.querySelector('.amount06');
  // let amount07 = document.querySelector('.amount07');
  // let amount08 = document.querySelector('.amount08');
  // let amount09 = document.querySelector('.amount09');

  const check = document.querySelector('.achievement_slider');
  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
  };
  const callback = (entries, observer) => {
    if (entries[0].isIntersecting && !check.classList.contains('active')) {
      check.classList.add('active');
      setTimeout(() => {
        animateNumber(num01, 0, 104, 2000);
        animateNumber(num02, 0, 663033, 2000);
        animateNumber(num03, 0, 999238, 2000);
        // animateNumber(num04, 0, 320, 2000);
        // animateNumber(amount01, 0, 27, 2000);
        // animateNumber(amount02, 0, 2, 500);
        // animateNumber(amount03, 0, 412, 2000);
        // animateNumber(amount04, 0, 30, 2000);
        // animateNumber(amount05, 0, 382, 2000);
        // animateNumber(amount06, 0, 216, 2000);
        // animateNumber(amount07, 0, 18, 2000);
        // animateNumber(amount08, 0, 5, 2000);
        // animateNumber(amount09, 0, 216, 2000);
      }, 500);
    }
  };

  const observer = new IntersectionObserver(callback, options);
  check ? observer.observe(check) : null;
});

//業務成果
$(function () {
  $('.achievement_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//pageSearch
(function () {
  const pageSearchBtn = document.querySelector('.pageSearchBtn');
  const pageSearchBox = document.querySelector('#pageSearchBox');
  pageSearchBtn?.addEventListener('click', () => {
    window.getComputedStyle(pageSearchBox).display === 'none' ? (pageSearchBox.style.display = 'block') : (pageSearchBox.style.display = 'none');
  });
})();
