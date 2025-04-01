let angle = 0;
        const cards = document.querySelectorAll(".card");
        let index = 0;
        const totalCards = cards.length;

        function updateCarousel() {
            const rotationAngle = 360 / totalCards;
            cards.forEach((card, i) => {
                const currentAngle = (i - index) * rotationAngle;
                card.style.transform = `translate(-50%, -50%) rotateY(${currentAngle}deg) translateZ(250px)`;
                card.classList.toggle("highlight", i === index);
            });
        }

        function rotateCarousel(direction) {
            index = (index + direction + totalCards) % totalCards;
            updateCarousel();
        }
        
        updateCarousel();