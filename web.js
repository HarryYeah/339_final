document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('main, footer').querySelectorAll('section, article, div, p, h1, h2, h3, img' ).forEach(el => {
      el.classList.add('hidden');
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
  
    const isInViewport = el => {
      const rect = el.getBoundingClientRect();
      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
      );
    };
  
    const runOnScroll = () => {
      elements.forEach(el => {
        if (isInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
  
    // Trigger the animation check when the page is loaded and when scrolling
    window.addEventListener('scroll', runOnScroll);
    runOnScroll(); // Initialize on page load in case elements are already in view
  });

  