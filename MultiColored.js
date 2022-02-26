var progressval = 55;
var elm = document.getElementsByClassName('progressab')[0];
elm.style.width = progressval + '%';

elm.innerText = "You're " + progressval + '% There!';

if (progressval > 90 && progressval <= 100) {
  elm.style.backgroundColor = 'blue';
} else if (progressval > 50 && progressval < 90) {
  elm.style.backgroundColor = 'green';
} else if (progressval <= 50) {
  elm.style.backgroundColor = 'red';
}
