// Auto-update year in footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// Auto-update "Last updated" date on policy pages
const updateDate = document.getElementById('update-date');
if (updateDate) {
  updateDate.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Pre-select plan from URL parameter (e.g., index.html?plan=pro-1000)
const urlParams = new URLSearchParams(window.location.search);
const planParam = urlParams.get('plan');
const planSelect = document.getElementById('plan');

if (planParam && planSelect) {
  // Set the dropdown value
  planSelect.value = planParam;
  
  // Scroll to form if plan is selected
  const formSection = document.getElementById('order');
  if (formSection) {
    setTimeout(() => {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
}

// Form handling - redirect to thankyou.html on submit
const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    // 🎯 GOOGLE ADS CONVERSION (add your ID later)
    // gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/YYYYYYY'});
    
    // For now: form will naturally redirect to thankyou.html via action attribute
    // In future: integrate with Google Forms or backend here
  });
}

// Smooth scroll for anchor links (only on index.html)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Phone number validation - allow only numbers, spaces, +, -, (, )
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
  });
}
