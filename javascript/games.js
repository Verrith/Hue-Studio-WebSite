document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".hiraeth .carousel-track");
    const slides = Array.from(track.children);
    const gap = 10; // espace entre images
    let visibleCount = window.innerWidth > 1024 ? 4 : 2; // images visibles selon l'écran
    let index = 0;

    // calcule largeur totale d'une image incluant gap
    function slideWidth() {
        return slides[0].getBoundingClientRect().width + gap;
    }

    function moveCarousel() {
        index++;
        if (index > slides.length - visibleCount) {
            index = 0; // reset quand toutes les images sont passées
        }
        track.style.transform = `translateX(-${slideWidth() * index}px)`;
    }

    // avancement toutes les 2 secondes
    setInterval(moveCarousel, 2000);

    // ajuster visibleCount si l'utilisateur redimensionne
    window.addEventListener("resize", () => {
        visibleCount = window.innerWidth > 1024 ? 4 : 2;
        track.style.transform = `translateX(-${slideWidth() * index}px)`;
    });
});