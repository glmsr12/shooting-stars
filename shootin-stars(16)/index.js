function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = Math.random() * 2 + 3 + 's';

  star.innerText = '⭐️';

  document.body.appendChild(star);
}

setInterval(createStar, 100);
