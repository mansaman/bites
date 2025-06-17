// Custom JavaScript for Bites POS

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive components
    initNavbarScrollEffect();
    initFormValidation();
    
    console.log('Bites POS JavaScript initialized');
});

// Navbar background effect on scroll
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Add shadow based on initial scroll position
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        }
        
        // Add/remove shadow on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }
}

// // Basic form validation (additional to Bootstrap's native validation)
// function initFormValidation() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(event) {
//             if (!contactForm.checkValidity()) {
//                 // event.preventDefault();
//                 event.stopPropagation();
//             } else {
//                 // If the form is valid, we'd typically submit to a server
//                 // For demo purposes, let's just show a success message
//                 // event.preventDefault();
//                 showFormSuccess(contactForm);
//             }
            
//             contactForm.classList.add('was-validated');
//         });
//     }
// }

// Show form success message
function showFormSuccess(form) {
    // Create success alert
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-4';
    successDiv.role = 'alert';
    successDiv.innerHTML = `
        <h4 class="alert-heading">Message Sent!</h4>
        <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
    `;
    
    // Clear the form and append success message
    form.innerHTML = '';
    form.appendChild(successDiv);
    
    // Scroll to the success message
    successDiv.scrollIntoView({ behavior: 'smooth' });
}

// Animate elements when they come into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});





<<<<<<< HEAD
// prebooking

// Countdown Timer (set to 45 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 45);

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

// Form submission effect
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Secure My Early Access') || 
        button.textContent.includes('Join the Waitlist Now') || 
        button.textContent.includes('Reserve Your Early Access')) {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check mr-2"></i> Success!';
                this.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                this.classList.add('bg-green-500', 'hover:bg-green-600');
                
                // Show confirmation message
                const confirmation = document.createElement('div');
                confirmation.className = 'mt-4 p-3 bg-white bg-opacity-20 rounded text-sm';
                confirmation.innerHTML = 'Thank you! We\'ll be in touch soon with early access details.';
                this.parentNode.appendChild(confirmation);
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('bg-green-500', 'hover:bg-green-600');
                    this.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    this.disabled = false;
                    confirmation.remove();
                }, 3000);
            }, 1500);
        });
    }
});

// FAQ toggle functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');
    });
});




// Countdown Timer (set to 45 days from now)
// const countDownDate = new Date();
// countDownDate.setDate(countDownDate.getDate() + 45);

// const x = setInterval(function() {
//   const now = new Date().getTime();
//   const distance = countDownDate - now;
  
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//   document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
//   document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
//   document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
//   document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  
//   if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("days").innerHTML = "00";
//       document.getElementById("hours").innerHTML = "00";
//       document.getElementById("minutes").innerHTML = "00";
//       document.getElementById("seconds").innerHTML = "00";
//   }
// }, 1000);

// // Form submission to Google Sheets
// const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'; // Replace with your Google Apps Script URL
// const form = document.forms['waitlistForm'];
// const submitBtn = document.getElementById('submitBtn');
// const formMessage = document.getElementById('formMessage');

// form.addEventListener('submit', e => {
//   e.preventDefault();
  
//   // Disable submit button and show loading state
//   submitBtn.disabled = true;
//   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
  
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => {
//       // Show success message
//       formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
//       formMessage.classList.add('bg-green-100', 'text-green-700');
//       formMessage.innerHTML = 'Thank you! Your information has been submitted successfully.';
      
//       // Reset form
//       form.reset();
//       submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Success!';
      
//       // Reset button after 3 seconds
//       setTimeout(() => {
//           submitBtn.innerHTML = '<i class="fas fa-lock-open mr-2"></i> Secure My Early Access';
//           submitBtn.disabled = false;
//       }, 3000);
//   })
//   .catch(error => {
//       // Show error message
//       formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-700');
//       formMessage.classList.add('bg-red-100', 'text-red-700');
//       formMessage.innerHTML = 'Error! Please try again or contact support.';
      
//       // Reset button
//       submitBtn.innerHTML = '<i class="fas fa-lock-open mr-2"></i> Secure My Early Access';
//       submitBtn.disabled = false;
//   });
// });

// // FAQ toggle functionality
// document.querySelectorAll('.faq-toggle').forEach(button => {
//   button.addEventListener('click', function() {
//       const content = this.nextElementSibling;
//       const icon = this.querySelector('i');
      
//       content.classList.toggle('hidden');
//       icon.classList.toggle('transform');
//       icon.classList.toggle('rotate-180');
//   });
// });
=======
// countdown
function startCountdown24hr() {
  const countdownHours = document.getElementById('countdown-hours');
  const countdownMinutes = document.getElementById('countdown-minutes');
  const countdownSeconds = document.getElementById('countdown-seconds');

  // If any element is missing, stop
  if (!countdownHours || !countdownMinutes || !countdownSeconds) return;

  const STORAGE_KEY = 'bitesposCountdownStart';

  // Get or set initial start time
  let startTime = localStorage.getItem(STORAGE_KEY);
  if (!startTime) {
    startTime = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, startTime);
  }

  function updateCountdown() {
    const now = new Date();
    const startedAt = new Date(localStorage.getItem(STORAGE_KEY));
    const elapsed = now - startedAt;

    const fullCycle = 24 * 60 * 60 * 1000; // 24 hours in ms
    const remaining = fullCycle - (elapsed % fullCycle); // reset if over

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    countdownHours.textContent = String(hours).padStart(2, '0');
    countdownMinutes.textContent = String(minutes).padStart(2, '0');
    countdownSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Call it on DOM load
document.addEventListener('DOMContentLoaded', function () {
  startCountdown24hr();
});



// prebookin
document.getElementById('prebookForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = this;

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
    Processing...
  `;

  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    restaurant: document.getElementById('restaurant').value.trim(),
    timestamp: new Date().toISOString()
  };

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyR0hd69Sy_ukosvGbX_88Hb76EN8xUl758sUMAxIbsgoSCG5l7zdySbEmiFVn1OkAs/exec';

  try {
    await fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify(formData)
    });

    form.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
        <i class="bi bi-check-circle-fill me-2"></i>
        Thank you! Your prebooking has been received.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  } catch (error) {
    console.error('Submission error:', error);
    form.insertAdjacentHTML('beforeend', `
      <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        Submission failed: ${error.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});
>>>>>>> fd8b07f71cfd4cc9fc77e8ca4f5738b2222a9175
