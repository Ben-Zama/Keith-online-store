function openMenu() {
    document.getElementById('menu').classList.toggle('menu-active')
}

function openSearch() {
    document.getElementById('search').classList.toggle('search-active')
}

const slides = document.querySelectorAll('.hero .contents')
const dots = document.querySelectorAll('.dots-container span')
let currentIndex = 0
let autoScrollInterval;

function updateCarousel(index) {
    const offset = -100 * index;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`
    });

    dots.forEach(dot => dot.classList.remove('dot-active'));
    dots[index].classList.add('dot-active');

    currentIndex = index;

    }

    function autoScroll() {
        autoScrollInterval = setInterval(() => {
            let newIndex = (currentIndex + 1) % slides.length;

            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            updateCarousel(newIndex);
        }, 5000);
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScroll();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
            resetAutoScroll();
        })
    })

    autoScroll();