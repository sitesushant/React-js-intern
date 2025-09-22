(function () {
  // Query DOM elements used by the slider
  const slidesContainer = document.getElementById('slides');
  const slideElements = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');
  const slider = slidesContainer.parentElement; // .slider

  // Slider state and timings
  const totalSlides = slideElements.length;
  let currentIndex = 0;
  let autoplayId = null;
  let isAutoplaying = true;
  const AUTOPLAY_MS = 3000;

  // To apply slide track 
  function updateTransform() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // dots to reflect current slide
  function updateDots() {
    Array.from(dotsContainer.children).forEach((dot, idx) => {
      dot.setAttribute('aria-current', String(idx === currentIndex));
    });
  }

  // Navigate to a specific slide  
  function goTo(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    updateTransform();
    updateDots();
  }

  // Next/previous 
  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  // pagination dots dynamically
  function buildDots() {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < totalSlides; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      frag.appendChild(btn);
    }
    dotsContainer.appendChild(frag);
  }

  // Autoplay 
  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(next, AUTOPLAY_MS);
    isAutoplaying = true;
  }

  function stopAutoplay() {
    if (autoplayId) clearInterval(autoplayId);
    autoplayId = null;
    isAutoplaying = false;
  }

  //   dots, position, autoplay
  buildDots();
  updateDots();
  updateTransform();
  startAutoplay();

   
  nextBtn.addEventListener('click', () => { next(); });
  prevBtn.addEventListener('click', () => { prev(); });
   

  // Keyboard left/right arrow key used to navigate
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); }
    else if (e.key === 'ArrowLeft') { prev(); }
  });

  // Pause autoplay on hover resume on leave
  slider.addEventListener('mouseenter', () => { if (isAutoplaying) stopAutoplay(); });
  slider.addEventListener('mouseleave', () => { if (!isAutoplaying) startAutoplay(); });

  // Drag/swipe 
  let isDragging = false;
  let startX = 0;
  let deltaX = 0;
  let sliderWidth = 0;

  //  dragging start
  function onDragStart(clientX) {
    isDragging = true;
    startX = clientX;
    deltaX = 0;
    sliderWidth = slider.clientWidth;
    slidesContainer.style.transition = 'none';
    slider.classList.add('grabbing');
    if (isAutoplaying) stopAutoplay();
  }

  // position while dragging
  function onDragMove(clientX) {
    if (!isDragging) return;
    deltaX = clientX - startX;
    slidesContainer.style.transform = `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))`;
  }

  // End drag 
  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    slidesContainer.style.transition = '';
    slider.classList.remove('grabbing');

    const threshold = Math.max(40, sliderWidth * 0.15);
    if (deltaX > threshold) {
      prev();
    } else if (deltaX < -threshold) {
      next();
    } else {
      updateTransform();
    }

    if (!isAutoplaying) startAutoplay();
  }

  // Mouse drag  
  slider.addEventListener('mousedown', (e) => {
    // Only left button
    if (e.button !== 0) return;
    onDragStart(e.clientX);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp, { once: true });
  });
  function onMouseMove(e) { onDragMove(e.clientX); }
  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    onDragEnd();
  }

  // Touch drag  
  slider.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    onDragStart(t.clientX);
  }, { passive: true });
  slider.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    onDragMove(t.clientX);
  }, { passive: true });
  slider.addEventListener('touchend', () => { onDragEnd(); });
  slider.addEventListener('touchcancel', () => { onDragEnd(); });

  // Prevent browser image drag  
  slideElements.forEach((el) => {
    const img = el.querySelector('img');
    if (img) img.setAttribute('draggable', 'false');
  });
})();


