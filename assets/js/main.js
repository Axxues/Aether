document.addEventListener('DOMContentLoaded', () => {

    //------------------Scroll Reveal Animation------------------
    const revealElements = document.querySelectorAll('.reveal-up');
    
    //Initially hide elements
    revealElements.forEach(el => el.classList.add('reveal-hidden'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('reveal-hidden');
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, { threshold: 0.1 });

    //Small delay to ensure layout is painted 
    setTimeout(() => {
        revealElements.forEach(el => revealObserver.observe(el));
    }, 100);


    //------------------Active Link Highlight------------------
    //Get current page filename, default to 'index.html' for root
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-card');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    //------------------3D Tilt------------------
    if (window.matchMedia("(hover: hover)").matches) {
        const tiltContainers = document.querySelectorAll('.perspective-1000');

        tiltContainers.forEach(container => {
            const card = container.querySelector('.tilt-card');
            
            //Mouse Movement
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5; 
                const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;

                //Apply transform with scaling
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            //Reset on Mouse Leave
            container.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

});