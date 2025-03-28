document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const location = card.dataset.location;
            alert(`You selected the mission in ${location}!`);
        });
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            alert('You joined the mission!');
        });
    });
});
