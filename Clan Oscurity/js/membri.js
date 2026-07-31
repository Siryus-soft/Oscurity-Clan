const rows = document.querySelectorAll(".member-row");
const popup = document.getElementById("statsPopup");
const closeBtn = document.getElementById("closePopup");

rows.forEach(row => {
    row.addEventListener("click", () => {
        document.getElementById("popupName").innerText = row.children[1].innerText;
        document.getElementById("popupWin").innerText = row.dataset.win;
        document.getElementById("popupKD").innerText = row.dataset.kd;
        document.getElementById("popupFKFD").innerText = row.dataset.fkfd;

        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

/* ---------------------------
   PARTICELLE LIBERE
---------------------------- */
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

/* ---------------------------
   PARTICELLE NEGLI ANGOLI
---------------------------- */
function createCornerParticles(canvasId, color, corner) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const areaSize = 150;

    let area = {};

    if (corner === "top-left") {
        area = { x: 0, y: 0 };
    } else if (corner === "top-right") {
        area = { x: canvas.width - areaSize, y: 0 };
    } else if (corner === "bottom-left") {
        area = { x: 0, y: canvas.height - areaSize };
    } else if (corner === "bottom-right") {
        area = { x: canvas.width - areaSize, y: canvas.height - areaSize };
    }

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

/* ---------------------------
   AVVIO PARTICELLE
---------------------------- */

/* MEMBERS SECTION → sfondo nero → particelle viola */
createFreeParticles("particles-members", "#9f4aff");
createCornerParticles("particles-members", "#9f4aff", "top-left");
createCornerParticles("particles-members", "#9f4aff", "top-right");
createCornerParticles("particles-members", "#9f4aff", "bottom-left");
createCornerParticles("particles-members", "#9f4aff", "bottom-right");

/* FOOTER → sfondo viola → particelle nere */
createFreeParticles("particles-footer", "#000000");
createCornerParticles("particles-footer", "#000000", "top-left");
createCornerParticles("particles-footer", "#000000", "top-right");
createCornerParticles("particles-footer", "#000000", "bottom-left");
createCornerParticles("particles-footer", "000000", "bottom-right");

/* NOTE SECTION → sfondo nero → particelle viola */
createFreeParticles("particles-note", "#9f4aff");
createCornerParticles("particles-note", "#9f4aff", "top-left");
createCornerParticles("particles-note", "#9f4aff", "top-right");
createCornerParticles("particles-note", "#9f4aff", "bottom-left");
createCornerParticles("particles-note", "#9f4aff", "bottom-right");
