
// loading---------------------------
window.addEventListener('load', function () {
  setTimeout(() => {
    const loading = document.querySelector('.loading');
    document.body.classList.remove('no-scroll'); // スクロール復活

    if (loading) {
      loading.style.transition = 'opacity 0.8s ease';
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
      }, 800);
    }
  }, 1500);
});


// pegetop button---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const pagetop = document.querySelector('.page-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      pagetop.style.display = 'block';
    } else {
      pagetop.style.display = 'none';
    }
  });

  pagetop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


// ハンバーガーボタン---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const globalMenu = document.querySelector('.globalMenuSp');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    globalMenu.classList.toggle('active');
  });
});

// nav---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.globalMenuSp ul li a');
  const hamburger = document.querySelector('.hamburger');
  const globalMenu = document.querySelector('.globalMenuSp');

  links.forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      globalMenu.classList.remove('active');
    });
  });
});


// ヘッダーの高さ分だけコンテンツを下げる---------------------------
// document.addEventListener('DOMContentLoaded', function () {
//   const header = document.querySelector('.js-header');
//   const headerPaddingTarget = document.querySelector('header');

//   if (header && headerPaddingTarget) {
//     const height = header.offsetHeight;
//     headerPaddingTarget.style.paddingTop = height + 'px';
//   }
// });



// フェードイン---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const fadeElems = document.querySelectorAll('.js-fade');

  window.addEventListener('scroll', function () {
    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;

    fadeElems.forEach(elem => {
      const elemTop = elem.getBoundingClientRect().top + scroll;
      if (scroll > elemTop - windowHeight + 100) {
        elem.classList.add('scroll');
      }
    });
  });
});

// ページ内スクロール---------------------------
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.js-header');
  const headerHeight = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href === '#' || href === '' ? 'html' : href);
      if (target) {
        const position = target.offsetTop - headerHeight;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    });
  });
});


