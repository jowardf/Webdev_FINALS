document.addEventListener('DOMContentLoaded', () => {
    const quickActions = document.querySelectorAll('.quick-actions button');

    quickActions.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked ${button.textContent}`);
        });
    });
});