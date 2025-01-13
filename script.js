/* script.js */
// Form submission handling
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    // if (!name  !email  !message) {
    //     alert('الرجاء ملء جميع الحقول المطلوبة');
    //     return false;
    // }
    
    // You would typically send this data to a server
    alert('تم إرسال رسالتك بنجاح!');
    event.target.reset();
    return false;
}

// Image slider for articles page
document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.card');
    
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Simple dark mode toggle (optional feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}