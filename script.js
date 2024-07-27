document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const closeButton = document.createElement('button');
  
    // Style the modal and button
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    modal.style.display = 'none';
  
    modalImage.style.maxWidth = '90%';
    modalImage.style.maxHeight = '90%';
  
    closeButton.textContent = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px';
    closeButton.style.backgroundColor = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
  
    modal.appendChild(modalImage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
  
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        const fullSrc = img.getAttribute('data-full-src');
        modalImage.src = fullSrc;
        modal.style.display = 'flex';
      });
    });
  
    const hideModal = () => {
      modal.style.display = 'none';
      modalImage.src = ''; // Clear the image source to prevent flickering
    };
  
    closeButton.addEventListener('click', hideModal);
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });
  });
  
  