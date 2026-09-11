// Small enhancements only — the page works fully without JavaScript.
(function () {
  // Open a drop-down when linked to directly, e.g. /#dropdown-3
  function openFromHash() {
    var id = location.hash.replace('#', '');
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') {
      el.open = true;
      el.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();

  // Expand all drop-downs before printing so nothing is hidden on paper.
  var opened = [];
  window.addEventListener('beforeprint', function () {
    opened = [];
    document.querySelectorAll('details').forEach(function (d) {
      if (!d.open) { d.open = true; opened.push(d); }
    });
  });
  window.addEventListener('afterprint', function () {
    opened.forEach(function (d) { d.open = false; });
    opened = [];
  });

  // Keep the footer year current.
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
