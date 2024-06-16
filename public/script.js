const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  parallax: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

let menuVisible = false;

function toggleMenuVisibility() {
  const nav = document.querySelector("#nav");
  if (menuVisible) {
    nav.classList.remove("responsive");
    menuVisible = false;
  } else {
    nav.classList.add("responsive");
    menuVisible = true;
  }
}

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('responsive');
}

function selectOption() {
  document.querySelector("#nav").classList.remove("responsive");
  menuVisible = false;
}

function applySkillAnimations() {
  const skillsSection = document.querySelector("#skills");
  const skillsDistance = window.innerHeight - skillsSection.getBoundingClientRect().top;
  if (skillsDistance >= 300) {
    const skills = skillsSection.querySelectorAll(".progress");
    skills.forEach(progress => {
      const progressValue = parseInt(progress.textContent); 
      progress.style.width = progressValue + "%"; 
    });
  }
}

window.onscroll = function() {
  applySkillAnimations();
}

document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  const formData = new FormData(document.getElementById('contactForm'));

  fetch('https://formspree.io/f/xqkrrnge', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert('Message sent successfully!');
    // Очистка полей формы
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while sending the message.');
  });
});

// Запрет на ввод букв в поле телефона
document.getElementById('phone').addEventListener('keypress', function(event) {
  const key = event.key;
  if (!/^\d$/.test(key)) {
    event.preventDefault();
  }
});