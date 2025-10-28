// Brandstifter Urban Manufactur - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      // TODO: Implement mobile menu
      console.log('Mobile menu toggle');
    });
  }
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('firstname') + ' ' + formData.get('lastname'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        subject: formData.get('subject'),
        message: formData.get('message'),
        type: formData.get('type')
      };
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        if (result.success) {
          // Show success message
          const successDiv = document.createElement('div');
          successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
          successDiv.innerHTML = '<i class="fas fa-check-circle mr-2"></i>' + result.message;
          contactForm.parentNode.insertBefore(successDiv, contactForm);
          contactForm.reset();
          
          // Remove success message after 5 seconds
          setTimeout(() => successDiv.remove(), 5000);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    });
  }
  
  // Newsletter Form Handler
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });
        
        const result = await response.json();
        if (result.success) {
          alert(result.message);
          newsletterForm.reset();
        }
      } catch (error) {
        console.error('Error subscribing to newsletter:', error);
      }
    });
  }
  
  // Lazy Loading Images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  console.log('Brandstifter Urban Manufactur - Website loaded');
});