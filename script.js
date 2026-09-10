// Instant, alert-free form handling
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    
    const btn = document.getElementById('submit-btn');
    const msg = document.getElementById('form-message');
    
    // Change button appearance instantly without delay or alerts
    btn.textContent = "Processing...";
    btn.style.backgroundColor = "var(--dark-gold)";
    
    // Show silent text message below form instantly
    msg.style.opacity = "1";
    
    // After 1.5 seconds, subtly revert to indicate completion
    setTimeout(() => {
        btn.textContent = "Suites Found";
        msg.textContent = "Redirecting you to available suites seamlessly...";
    }, 1500);
});

// Update navbar background opacity when scrolling for an elegant effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 1)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});
