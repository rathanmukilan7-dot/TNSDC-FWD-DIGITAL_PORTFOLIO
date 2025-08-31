// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    let typedItems = typedElement.getAttribute('data-typed-items').split(',');
    let i = 0, j = 0;
    let current = '';
    let isDeleting = false;

    function type() {
      let word = typedItems[i].trim();
      if (!isDeleting) {
        current = word.substring(0, j + 1);
        j++;
        if (j === word.length) {
          isDeleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        current = word.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i = (i + 1) % typedItems.length;
        }
      }
      typedElement.textContent = current;
      setTimeout(type, isDeleting ? 70 : 120);
    }
    type();
  }
});