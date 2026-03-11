window.addEventListener("scroll", function() {

    const svg = document.querySelector(".fond-svg");
    let scroll = window.scrollY;

    svg.style.transform = "translateY(" + scroll * 0.4 + "px)";

});