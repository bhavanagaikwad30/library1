document.addEventListener('DOMContentLoaded', function () {
    // Language Toggle Functionality
    const languageToggle = document.getElementById('languageToggle');
    const toggleText = document.querySelector('.toggle-text');
    let currentLang = 'mr'; // Default language is Marathi

    languageToggle.addEventListener('click', function () {
        currentLang = currentLang === 'mr' ? 'en' : 'mr';
        toggleText.textContent = toggleText.getAttribute(`data-${currentLang}`);

        document.querySelectorAll('.translate').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });

        document.querySelectorAll('[data-mr-placeholder]').forEach(el => {
            el.setAttribute('placeholder', el.getAttribute(`data-${currentLang}-placeholder`));
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
    }

    function closeMenu() {
        navLinks.classList.remove('active');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close menu when any nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // अधिकारी टॉगल
    const adhikariToggle = document.getElementById('adhikariToggle');
    const adhikariSection = document.getElementById('adhikariSection');
    if (adhikariToggle && adhikariSection) {
        adhikariToggle.addEventListener('click', () => {
            adhikariSection.classList.toggle('active');
        });
    }
});

// Gallery Modal
function openModal(imageSrc, titleEn, descEn, titleMr, descMr) {
    const modal = document.getElementById('galleryModal');
    const img = document.getElementById('modalImg');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');

    modal.style.display = 'block';
    img.src = imageSrc;
    title.textContent = titleMr;
    desc.textContent = descMr;

    title.setAttribute('data-en', titleEn);
    title.setAttribute('data-mr', titleMr);
    title.classList.add('translate');

    desc.setAttribute('data-en', descEn);
    desc.setAttribute('data-mr', descMr);
    desc.classList.add('translate');
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
