/* POPUP */
const cards = document.querySelectorAll(".evento-card");
const popup = document.getElementById("eventoPopup");
const closePopup = document.getElementById("popupClose");

cards.forEach(card => {
    card.querySelector(".evento-btn").addEventListener("click", () => {

        document.getElementById("popupName").innerText = card.dataset.name;
        document.getElementById("popupStats").innerText = card.dataset.stats;
        document.getElementById("popupDesc").innerText = card.dataset.desc;

        // RIMOSSO: video.src = card.dataset.video;

        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});


/* PARTICELLE (uguali alle altre pagine) */
function createFreeParticles(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];

    for (let i = 0; i < 25; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function createCornerParticles(canvasId, color, corner) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const areaSize = 150;

    let area = {};

    if (corner === "top-left") area = { x: 0, y: 0 };
    if (corner === "top-right") area = { x: canvas.width - areaSize, y: 0 };
    if (corner === "bottom-left") area = { x: 0, y: canvas.height - areaSize };
    if (corner === "bottom-right") area = { x: canvas.width - areaSize, y: canvas.height - areaSize };

    for (let i = 0; i < 15; i++) {
        particles.push({
            x: area.x + Math.random() * areaSize,
            y: area.y + Math.random() * areaSize,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3
        });
    }

    function animate() {
        ctx.clearRect(area.x, area.y, areaSize, areaSize);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < area.x || p.x > area.x + areaSize) p.dx *= -1;
            if (p.y < area.y || p.y > area.y + areaSize) p.dy *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* AVVIO PARTICELLE */
const sections = [
    "particles-hero",
    "particles-clanwar",
    "particles-interni",
    "particles-note"
];

sections.forEach(id => {
    createFreeParticles(id, "#9f4aff");
    createCornerParticles(id, "#9f4aff", "top-left");
    createCornerParticles(id, "#9f4aff", "top-right");
    createCornerParticles(id, "#9f4aff", "bottom-left");
    createCornerParticles(id, "#9f4aff", "bottom-right");
});

/* FOOTER PARTICELLE */
createFreeParticles("particles-footer", "#000000");
createCornerParticles("particles-footer", "#000000", "top-left");
createCornerParticles("particles-footer", "#000000", "top-right");
createCornerParticles("particles-footer", "#000000", "bottom-left");
createCornerParticles("particles-footer", "#000000", "bottom-right");
