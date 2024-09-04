
window.addEventListener('scroll', () => {
    let elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element) => {
        let position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate__fadeInUp');
        }
    });
});
