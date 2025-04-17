// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const viewButtons = document.querySelectorAll('.view-btn');
const closeButtons = document.querySelectorAll('.close-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formMessage = document.getElementById('form-message');
    
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            formMessage.style.display = 'block';
            formMessage.className = 'success';
            formMessage.textContent = 'Message sent successfully!';
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        formMessage.style.display = 'block';
        formMessage.className = 'error';
        formMessage.textContent = 'Error sending message. Please try again.';
    }
});