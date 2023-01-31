// https://stackoverflow.com/a/36389263
var getTimeout = function(){var e=setTimeout,b={};setTimeout=function(a,c){var d=e(a,c);b[d]=[Date.now(),c];return d};return function(a){return(a=b[a])?Math.max(a[1]-Date.now()+a[0],0):NaN}}();

// https://curtistimson.co.uk/post/js/default-negative-variables-to-zero-in-javascript/
function sanitisePercentage(i){
    return Math.min(100,Math.max(0,i));
}

// Slider
var percentTime;
var tick;
var progressBar = document.querySelector('.swiper-hero-progress');

var mySwiper = new Swiper('.main-container__slider', {
    effect: 'slide',
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-navigation .swiper-pagination",
        type: "fraction",
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    on: {
        slideChange: function() {
            var swiper = this;
            var defaultSlideDelay = swiper.params.autoplay.delay;
            var currentIndex = swiper.realIndex + 1;
            var currentSlide = swiper.slides[currentIndex];
            var currentSlideDelay = currentSlide.getAttribute('data-swiper-autoplay') || defaultSlideDelay;

            updateSwiperProgressBar(progressBar, currentSlideDelay);
        }
    }
});

function updateSwiperProgressBar(bar, slideDelay) {

    if(document.querySelector('.main-container__slider')){
        function startProgressBar() {
            resetProgressBar();
            tick = setInterval(progress, 50);
        }

        function progress() {

            var timeLeft = getTimeout(mySwiper.autoplay.timeout);

            if ( mySwiper.autoplay.running && !mySwiper.autoplay.paused ) {
                percentTime = sanitisePercentage(100 - Math.round(timeLeft / slideDelay * 100));
                bar.style.width = percentTime + '%';

                if (percentTime > 100) {
                    resetProgressBar();
                }
            }

            if ( mySwiper.autoplay.paused ) {
                percentTime = 0;
                bar.style.width = 0;
            }

        }

        function resetProgressBar() {
            percentTime = 0;
            bar.style.width = 0;
            clearInterval(tick);
        }

        startProgressBar();
    }



}

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

window.addEventListener('scroll', function (){
    let header = document.querySelector('header')
    if(getBodyScrollTop() > 100){
        header.classList.add('header-fixed')
    }else{
        header.classList.remove('header-fixed')
    }
})

new WOW().init();

function mobile_menu(){
    let burger = document.querySelector('.hamburger');
    let body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if(body.classList.contains('menu')){
            body.classList.remove('menu')
        }else {
            body.classList.add('menu')
        }
    })
}

mobile_menu();

var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 6,
        },
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 6,
        },
    }
});
var swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});