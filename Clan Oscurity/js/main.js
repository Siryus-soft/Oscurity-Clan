console.log("Home Oscurity caricata");

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

/* JOIN SECTION → sfondo nero → particelle viola */
createFreeParticles("particles-join", "#9f4aff");
createCornerParticles("particles-join", "#9f4aff", "top-left");
createCornerParticles("particles-join", "#9f4aff", "top-right");
createCornerParticles("particles-join", "#9f4aff", "bottom-left");
createCornerParticles("particles-join", "#9f4aff", "bottom-right");

/* FEATURES → sfondo viola → particelle nere */
createFreeParticles("particles-features", "#000000");
createCornerParticles("particles-features", "#000000", "top-left");
createCornerParticles("particles-features", "#000000", "top-right");
createCornerParticles("particles-features", "#000000", "bottom-left");
createCornerParticles("particles-features", "#000000", "bottom-right");

/* FOOTER → sfondo nero → particelle viola */
createFreeParticles("particles-footer", "#9f4aff");
createCornerParticles("particles-footer", "#9f4aff", "top-left");
createCornerParticles("particles-footer", "#9f4aff", "top-right");
createCornerParticles("particles-footer", "#9f4aff", "bottom-left");
createCornerParticles("particles-footer", "#9f4aff", "bottom-right");

const canvas = document.getElementById("oscurity-particles");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const count = 150;

for (let i = 0; i < count; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.25 + 0.05
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

// SCIA MENTRE TRASCINI IL MOUSE
window.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("mouse-trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 600);
});
