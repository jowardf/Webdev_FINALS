let currentImageIndex = 0;
const images = ['featured-item-1.png', 'featured-item-2.png', 'featured-item-3.png'];
let cart = [];

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const carouselImage = document.querySelector('.carousel-image');
    carouselImage.src = images[currentImageIndex];
}

function addToCart(productName, productImage, productPrice) {
    cart.push({ name: productName, image: productImage, price: productPrice });
    const notification = document.getElementById('cart-notification');
    notification.textContent = `${productName} added to cart!`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}