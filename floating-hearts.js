document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-hearts-container');
    const numberOfHearts = 20; // Adjust the number of hearts as needed

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${10 + Math.random() * 10}s`;
        container.appendChild(heart);
    }
});