// script.js

// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Add click event to each image
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function() {
    // Get the clicked image's ID
    const imageId = this.id;
    
    // Set the modal display to block
    modal.style.display = 'block';
    // Set the source of the modal image to the clicked image's source
    modalImg.src = this.src;
    // Set the caption to the alt text of the clicked image
    captionText.textContent = this.alt;
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
