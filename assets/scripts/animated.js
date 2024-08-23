document.addEventListener("scroll", function () {
    const imageAbout = document.querySelector('.image_about');
    const info = document.querySelector('.info');

    const windowHeight = window.innerHeight;
    const revealTopImage = imageAbout.getBoundingClientRect().top;
    const revealTopInfo = info.getBoundingClientRect().top;

    if (revealTopImage < windowHeight - 100) {
        imageAbout.classList.add('animated');
    }

    if (revealTopInfo < windowHeight - 100) {
        info.classList.add('animated');
    }
});