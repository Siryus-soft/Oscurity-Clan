function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    return ctx;
}

function createParticles(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = setupCanvas(canvas);

    const particles = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * canvas.clientHeight,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.clientWidth) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.clientHeight) p.dy *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

createParticles("particles-privacy", "#9f4aff");
createParticles("particles-footer", "#000000");
