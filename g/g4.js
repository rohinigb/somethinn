document.addEventListener('DOMContentLoaded', function() {
  const bubbles = document.querySelectorAll('.bubble');
  const container = document.querySelector('.container');

  bubbles.forEach(bubble => {
    bubble.addEventListener('click', function() {
      // Create heart particles
      for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.innerHTML = '❤️';
        container.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 2000);
      }
    });
  });

  // Valentine buttons
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');

  yesBtn.addEventListener('click', function() {
    window.location.href = '../g5/g5.html';
  });

  noBtn.addEventListener('mouseenter', function() {
    // Move the button to a random position
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });
});
