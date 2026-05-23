function initMainCarousel() {
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".indicator-dot");

    if (!items.length || !dots.length) return;
    if (document.body.dataset.mainCarouselInited === "1") return;
    document.body.dataset.mainCarouselInited = "1";

    let currentSlide = 0;
    const totalSlides = items.length;

    function updateCarousel() {
        items.forEach((item) => item.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        items[currentSlide]?.classList.add("active");
        dots[currentSlide]?.classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    const intervalId = setInterval(nextSlide, 5000);
    window.addEventListener("codex:route-change", () => {
        if (!document.querySelector(".carousel-item")) {
            clearInterval(intervalId);
            document.body.dataset.mainCarouselInited = "0";
        }
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (event) => {
            const slideIndex = Number.parseInt(event.currentTarget.getAttribute("data-slide-to"), 10);

            if (!Number.isNaN(slideIndex) && slideIndex >= 0 && slideIndex < totalSlides) {
                currentSlide = slideIndex;
                updateCarousel();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initMainCarousel);
window.addEventListener("codex:route-change", initMainCarousel);
