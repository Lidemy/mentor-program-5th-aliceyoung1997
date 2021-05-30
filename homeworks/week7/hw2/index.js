document.querySelector('.FAQlist').addEventListener('click',
  (e) => {
    if (e.target.classList.contains('Q')) {
      e.target.closest('.Q').nextElementSibling.classList.toggle('A')
    }
  }
)
