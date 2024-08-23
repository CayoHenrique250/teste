const chk = document.getElementById('chk');
const logo = document.getElementById('logo');

document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  setDarkMode(isDarkMode);

  const isBallChecked = localStorage.getItem('isBallChecked') === 'true';
  setBallChecked(isBallChecked);
});

chk.addEventListener('change', () => {
  const isDarkMode = chk.checked;
  setDarkMode(isDarkMode);
  localStorage.setItem('isDarkMode', isDarkMode);
});

chk.addEventListener('change', () => {
  const isBallChecked = chk.checked;
  setBallChecked(isBallChecked);
  localStorage.setItem('isBallChecked', isBallChecked);
});

function setDarkMode(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add('dark');
    logo.src = '../img/logo-transparente-clara.png';
  } else {
    document.body.classList.remove('dark');
    logo.src = '../img/logo-transparente.png';
  }
}

function setBallChecked(isBallChecked) {
  const ball = document.querySelector('.ball');
  if (isBallChecked) {
    ball.style.transform = 'translateY(24px)';
  } else {
    ball.style.transform = 'translateY(2px)';
  }
}