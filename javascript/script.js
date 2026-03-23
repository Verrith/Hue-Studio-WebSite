document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".carousel-wrapper");
    const track = document.querySelector(".carousel-track");

    const cards = [...track.children];
    const MULTIPLIER = 3;

    for (let i = 1; i < MULTIPLIER; i++) {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.classList.add("clone");
            track.appendChild(clone);
        });
    }

    let isDown = false;
    let startX;
    let scrollStart;
    let autoScroll = true;

    wrapper.addEventListener("mousedown", (e) => {
        isDown = true;
        autoScroll = false;
        startX = e.pageX;
        scrollStart = wrapper.scrollLeft;
        wrapper.style.cursor = "grabbing";
    });

    wrapper.addEventListener("mouseup", () => {
        isDown = false;
        wrapper.style.cursor = "grab";
        setTimeout(() => autoScroll = true, 150);
    });

    wrapper.addEventListener("mouseleave", () => {
        isDown = false;
        wrapper.style.cursor = "grab";
        setTimeout(() => autoScroll = true, 150);
    });

    wrapper.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        const walk = e.pageX - startX;
        wrapper.scrollLeft = scrollStart - walk;
        loopFix();
    });

    wrapper.addEventListener("touchstart", (e) => {
        const t = e.touches[0];
        isDown = true;
        autoScroll = false;
        startX = t.pageX;
        scrollStart = wrapper.scrollLeft;
    });

    wrapper.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const t = e.touches[0];
        const walk = t.pageX - startX;
        wrapper.scrollLeft = scrollStart - walk;
        loopFix();
    });

    wrapper.addEventListener("touchend", () => {
        isDown = false;
        setTimeout(() => autoScroll = true, 150);
    });

    function loopFix() {
        const segment = track.scrollWidth / MULTIPLIER;
        if (wrapper.scrollLeft >= segment) {
            wrapper.scrollLeft -= segment;
        }
    }

    const speed = 1;

    function animate() {
        if (autoScroll && !isDown) {
            wrapper.scrollLeft += speed;
            loopFix();
        }
        requestAnimationFrame(animate);
    }

    animate();

    wrapper.scrollLeft = 0;
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-center");

    // Clic sur le bouton
    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Fermeture au défilement
    window.addEventListener("scroll", function () {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});