var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

var copyBtn = document.getElementById('copy');
if (copyBtn) copyBtn.addEventListener('click', function () {
  var text = document.getElementById('boiler').textContent.trim();
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(function () {
    copyBtn.textContent = 'Copied';
    setTimeout(function () { copyBtn.textContent = 'Copy text'; }, 1800);
  }, function () {});
});
