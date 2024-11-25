

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal .close");

const images = document.querySelectorAll('.page img');
images.forEach(img => {
    img.addEventListener('click', function() {
        const largeImage = img.getAttribute('data-large');
        modalImage.src = largeImage; 
        modal.style.display = "grid";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});