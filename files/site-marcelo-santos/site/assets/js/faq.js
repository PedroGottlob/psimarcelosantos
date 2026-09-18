(function () {
  'use strict';

  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)');
  var itens = document.querySelectorAll('.faq-list details');
  if (!itens.length || typeof Element.prototype.animate !== 'function') return;

  var DURACAO = 300;
  var CURVA = 'cubic-bezier(0.32, 0.72, 0, 1)';

  function alturaFechado(det, resumo) {
    var cs = getComputedStyle(det);
    return resumo.offsetHeight +
           parseFloat(cs.paddingTop) +
           parseFloat(cs.paddingBottom);
  }

  itens.forEach(function (det) {
    var resumo = det.querySelector('summary');
    if (!resumo) return;
    var anim = null;

    resumo.addEventListener('click', function (e) {
      if (reduzir.matches) return;   // deixa o comportamento nativo
      e.preventDefault();

      if (anim) { anim.cancel(); det.style.height = ''; }

      var de = det.offsetHeight;
      var para;

      if (!det.open) {
        det.open = true;
        para = det.scrollHeight;
      } else {
        para = alturaFechado(det, resumo);
      }

      det.style.overflow = 'hidden';
      anim = det.animate(
        [{ height: de + 'px' }, { height: para + 'px' }],
        { duration: DURACAO, easing: CURVA }
      );

      anim.onfinish = function () {
        anim = null;
        det.style.height = '';
        det.style.overflow = '';
        if (de > para) det.open = false;   // estava fechando
      };
      anim.oncancel = function () {
        det.style.height = '';
        det.style.overflow = '';
      };
    });
  });
})();
