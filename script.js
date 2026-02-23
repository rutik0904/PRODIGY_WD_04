
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('show');
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    },
    { rootMargin: '-55% 0px -40% 0px', threshold: 0.1 }
);

sections.forEach(section => observer.observe(section));


links.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navList.classList.remove('show');
    });
});