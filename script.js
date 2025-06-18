function createElements() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('end-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 20}%`;
        particle.style.setProperty('--x-move', `${(Math.random() * 100) - 50}px`);
        particle.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(particle);
    }
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('minecraft-particle');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        star.style.animationDelay = `${Math.random() * 15}s`;
        container.appendChild(star);
    }
    const blocks = [
        'linear-gradient(135deg, #7e1e3c 0%, #544c50 100%)',
        'linear-gradient(135deg, #271522 0%, #544c50 100%)',
    ];
    for (let i = 0; i < 12; i++) {
        const block = document.createElement('div');
        block.classList.add('minecraft-block');
        block.style.left = `${Math.random() * 100}%`;
        block.style.top = `${Math.random() * 100}%`;
        block.style.background = blocks[^2^0Math.floor(Math.random() * blocks.length)];
        block.style.animationDelay = `${Math.random() * 8}s`;
        block.style.animationDuration = `${8 + Math.random() * 10}s`;
        block.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        block.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(block);
    }
}

function playIntroSequence() {
    const textLines = document.querySelectorAll('#intro-text-container p');
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('#main-content header');
    
    setTimeout(() => { textLines[^0^].classList.add('fade-in'); textLines[^0^].style.opacity = '1'; }, 500);
    setTimeout(() => { textLines[^1^].classList.add('fade-in'); textLines[^1^].style.opacity = '1'; }, 1