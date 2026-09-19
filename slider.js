(function () {
  var lento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-slider]').forEach(function (sl) {
    var slides = sl.querySelectorAll('.slide');
    var dots = sl.querySelectorAll('.slider__dots button');
    if (slides.length < 2) return;
    var i = 0, t = null;
    function ver(n) {
      slides[i].classList.remove('is-on');
      if (dots[i]) dots[i].removeAttribute('aria-current');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('is-on');
      if (dots[i]) dots[i].setAttribute('aria-current', 'true');
    }
    function arranca() { if (!lento && !t) t = setInterval(function () { ver(i + 1); }, 5000); }
    function para() { clearInterval(t); t = null; }
    dots.forEach(function (d, n) {
      d.addEventListener('click', function () { para(); ver(n); arranca(); });
    });
    sl.addEventListener('mouseenter', para);
    sl.addEventListener('mouseleave', arranca);
    sl.addEventListener('focusin', para);
    sl.addEventListener('focusout', arranca);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { para(); } else { arranca(); }
    });
    if (dots[0]) dots[0].setAttribute('aria-current', 'true');
    arranca();
  });
})();
