// Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// Video Modal
const videoButtons = document.querySelectorAll('.video-btn');
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModal = modal.querySelector('.close');

videoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video');
        modalVideo.src = videoSrc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.src = ''; // Stop video playback
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Login Modal
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('login-modal');
const closeLoginModal = loginModal.querySelector('.close');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Search Bar
const storySearch = document.getElementById('story-search');
const storyCards = document.querySelectorAll('.story-card');

storySearch.addEventListener('input', () => {
    const query = storySearch.value.toLowerCase();
    storyCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});