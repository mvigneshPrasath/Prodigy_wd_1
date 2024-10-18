let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const menuItems = document.querySelectorAll('#main-nav .menu ul li a');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const books = document.querySelectorAll('.book');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#fff';
            this.style.color = '#1b1b1b';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = '#fff';
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const popupTriggers = document.querySelectorAll('[data-popup]');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            showPopup(popupId);
        });
    });

    popupOverlay.addEventListener('click', closePopup);

    function showPopup(popupId) {
        let content = '';
        switch(popupId) {
            case 'author1':
                content = '<h2>John Gardner</h2><p>American novelist and short story writer.</p>';
                break;
            case 'author2':
                content = '<h2>Sam Riviere</h2><p>French author known for his dark and atmospheric novels.</p>';
                break;
            case 'book1':
                content = '<h2>Dead Souls by Sam Riviere</h2><p>A gripping tale of the afterlife.</p>';
                break;
            case 'book2':
                content = '<h2>The Art Of Fiction by John Gardner</h2><p>A masterclass in storytelling.</p>';
                break;
            case 'fiction':
                content = '<h2>Fiction</h2><p>Explore a world of imagination and creativity.</p>';
                break;
            case 'non-fiction':
                content = '<h2>Non-Fiction</h2><p>Discover the real world through fact and research.</p>';
                break;
            case 'mystery':
                content = '<h2>Mystery</h2><p>Unravel the secrets and solve the mysteries.</p>';
                break;
            default:
                content = '<p>Content not found.</p>';
        }
        popupContent.innerHTML = content + '<span class="popup-close" onclick="closePopup()">&times;</span>';
        popupOverlay.style.display = 'block';
        popupContent.style.display = 'block';
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
        popupContent.style.display = 'none';
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    books.forEach(book => {
        book.addEventListener('click', function() {
            const bookTitle = this.querySelector('h3').textContent;
            const bookImage = this.querySelector('img').src;
            showBookPopup(bookTitle, bookImage);
        });
    });

    function showBookPopup(title, image) {
        const content = `
            <h2>${title}</h2>
            <img src="${image}" alt="${title}" style="max-width: 200px; margin-bottom: 20px;">
            <p>Book description goes here...</p>
            <button class="cta-button">Add to Cart</button>
        `;
        popupContent.innerHTML = content + '<span class="popup-close" onclick="closePopup()">&times;</span>';
        popupOverlay.style.display = 'block';
        popupContent.style.display = 'block';
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
        popupContent.style.display = 'none';
    }

    popupOverlay.addEventListener('click', closePopup);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const lazyImages = document.querySelectorAll("img[data-src]");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    imageObserver.unobserve(img);
                }
            });
        }, options);

        lazyImages.forEach(img => imageObserver.observe(img));
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    });
});