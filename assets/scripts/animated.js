document.addEventListener("scroll", function () {
    const imageAbout = document.querySelector('.image_about');
    const imageExpertise = document.querySelector('.image_expertise');
    const imageTestimonials = document.querySelector('.image_testimonials');
    const imageReference = document.querySelector('.image_references');
    const info = document.querySelector('.info');
    const info2 = document.querySelector('.info2');
    const info3 = document.querySelector('.info3');
    const info4 = document.querySelector('.info4');
    const info5 = document.querySelector('.info5');

    const windowHeight = window.innerHeight;
    const revealTopImage = imageAbout.getBoundingClientRect().top;
    const revealTopImage2 = imageExpertise.getBoundingClientRect().top;
    const revealTopImage3 = imageTestimonials.getBoundingClientRect().top;
    const revealTopImage4 = imageReference.getBoundingClientRect().top;
    const revealTopInfo = info.getBoundingClientRect().top;
    const revealTopInfo2 = info2.getBoundingClientRect().top;
    const revealTopInfo3 = info3.getBoundingClientRect().top;
    const revealTopInfo4 = info4.getBoundingClientRect().top;
    const revealTopInfo5 = info5.getBoundingClientRect().top;

    if (revealTopImage < windowHeight - 100) {
        imageAbout.classList.add('animated');
    }

    if (revealTopImage2 < windowHeight - 100) {
        imageExpertise.classList.add('animated');
    }

    if (revealTopImage3 < windowHeight - 100) {
        imageTestimonials.classList.add('animated');
    }

    if (revealTopImage4 < windowHeight - 100) {
        imageReference.classList.add('animated');
    }

    if (revealTopInfo < windowHeight - 100) {
        info.classList.add('animated');
    }

    if (revealTopInfo2 < windowHeight - 100) {
        info2.classList.add('animated');
    }

    if (revealTopInfo3 < windowHeight - 100) {
        info3.classList.add('animated');
    }

    if (revealTopInfo4 < windowHeight - 100) {
        info4.classList.add('animated');
    }

    if (revealTopInfo5 < windowHeight - 100) {
        info5.classList.add('animated');
    }
});