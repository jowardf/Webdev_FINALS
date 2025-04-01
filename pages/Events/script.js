
document.addEventListener('DOMContentLoaded', function() {
    const joinButtons = document.querySelectorAll('.join-button');
    const modal = document.getElementById('join-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-modal');

    joinButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const eventCard = event.target.closest('.event-card');
            if (eventCard) {
                const location = eventCard.dataset.location;
                if (location) {
                    modalMessage.textContent = `You have joined the mission in ${location}!`;
                    modal.style.display = 'block';
                } else {
                    console.error('Location not found for this mission.');
                    modalMessage.textContent = 'Location information missing.';
                    modal.style.display = 'block';
                }
            } else {
                console.error('Mission card not found.');
                modalMessage.textContent = 'Mission card not found.';
                modal.style.display = 'block';
            }
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});