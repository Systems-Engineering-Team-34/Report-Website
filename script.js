const toTop = document.getElementById('to_top_button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});
