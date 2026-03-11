<script>
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".visual-side");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const speed = 0.05; // parallax très léger
        const offset = rect.top * speed;

        el.style.transform = `translateY(${offset}px)`;
    });
});
</script>