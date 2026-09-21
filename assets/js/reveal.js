(function () {
  'use strict';

  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)');
  var alvos = document.querySelectorAll('[data-reveal]');

  function mostrarTudo() {
    for (var i = 0; i < alvos.length; i++) {
      alvos[i].classList.add('is-visible');
    }
  }

  // Sem suporte a IntersectionObserver, ou com movimento reduzido,
  // o conteúdo simplesmente aparece. Nunca fica escondido.
  if (!('IntersectionObserver' in window) || reduzir.matches) {
    mostrarTudo();
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var atraso = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      el.style.transitionDelay = atraso + 'ms';
      el.classList.add('is-visible');
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  for (var i = 0; i < alvos.length; i++) {
    obs.observe(alvos[i]);
  }

  // Se o usuário ligar "reduzir movimento" no meio da navegação.
  reduzir.addEventListener('change', function (e) {
    if (e.matches) { obs.disconnect(); mostrarTudo(); }
  });
})();

// Vídeo do YouTube: mostra só a miniatura e carrega o player no clique.
// Fica num bloco separado de propósito: o "return" do bloco de cima
// (movimento reduzido) não pode impedir o vídeo de funcionar.
(function () {
  'use strict';
  document.querySelectorAll('.yt-facade').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + link.getAttribute('data-yt') + '?autoplay=1&rel=0';
      f.title = 'V\u00eddeo de Marcelo Santos';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      link.replaceWith(f);
      f.focus();
    });
  });
})();