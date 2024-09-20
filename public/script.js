document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.reviews__bottom-review--item');
  const reviewsContainer = document.querySelector('.reviews__bottom-review--list');
  const reviewWidth = 370;
  let currentIndex = 0;

  function showReview(index) {
    const offset = index * -reviewWidth;
    reviewsContainer.style.transform = `translateX(${offset}px)`; 
  }

  document.getElementById('next').addEventListener('click', function() {
    if (currentIndex < reviews.length - 1) {
      currentIndex++; 
      showReview(currentIndex);
    }
  });

  document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--; 
      showReview(currentIndex);
    }
  });

  showReview(currentIndex);
});
