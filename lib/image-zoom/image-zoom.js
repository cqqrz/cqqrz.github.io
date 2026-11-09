const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');

function handleImageZoom(e) {
  const target = e.target.closest('.image-zoom');

  if (target) {
    e.preventDefault(); // Prevents the <a> tag from jumping the page
    e.stopPropagation();
    
    // Grabs the high-res image from the <a> tag's data attribute (or falls back to the image src)
    const fullSizeSrc = target.getAttribute('data-fullsrc') || target.querySelector('img').src;
    
    modalImg.src = fullSizeSrc;
    modal.classList.add('active');
  } else if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modalImg.src = '';
      }
    }, 300);
  }
}

document.addEventListener('click', handleImageZoom);