(function () {
  'use strict';
  var env = document.getElementById('env'), btn = document.getElementById('open');
  var opened = false;
  btn.addEventListener('click', function () {
    opened = !opened;
    env.classList.toggle('open', opened);
    btn.textContent = opened ? 'Запечатать обратно' : 'Вскрыть конверт';
    document.body.classList.toggle('won', opened);
  });

  /* номинации появляются при прокрутке */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-in');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .2 });
    document.querySelectorAll('.nm').forEach(function (n) { io.observe(n); });
  }
})();
