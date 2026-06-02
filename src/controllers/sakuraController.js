export function initSakura() {
  const canvas = document.createElement("canvas");
  canvas.id = "sakura-canvas";
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Dibuja un pétalo de cerezo realista
  function drawPetal(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(size * 0.5, -size * 0.3, size * 1.0, -size * 0.1, size * 0.8, size * 0.4);
    ctx.bezierCurveTo(size * 0.6, size * 0.9, size * 0.1, size * 1.0, 0, size * 0.7);
    ctx.bezierCurveTo(-size * 0.1, size * 1.0, -size * 0.6, size * 0.9, -size * 0.8, size * 0.4);
    ctx.bezierCurveTo(-size * 1.0, -size * 0.1, -size * 0.5, -size * 0.3, 0, 0);
    ctx.closePath();

    // Degradado rosado
    const grad = ctx.createRadialGradient(0, size * 0.3, 0, 0, size * 0.3, size);
    grad.addColorStop(0, `rgba(255, 220, 230, ${opacity})`);
    grad.addColorStop(0.5, `rgba(255, 182, 193, ${opacity})`);
    grad.addColorStop(1, `rgba(220, 120, 150, ${opacity * 0.6})`);
    ctx.fillStyle = grad;
    ctx.fill();

    // Vena central sutil
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, size * 0.65);
    ctx.strokeStyle = `rgba(200, 100, 130, ${opacity * 0.3})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.restore();
  }

  // Crear pétalos
  const petals = [];
  const PETAL_COUNT = 40;

  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 1.2 + 0.4,
      speedX: Math.random() * 0.8 - 0.4,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.5 + 0.4,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.005,
      swayAmp: Math.random() * 1.5 + 0.5,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    petals.forEach((p) => {
      // Movimiento suave de balanceo
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * p.swayAmp + p.speedX;
      p.y += p.speedY;
      p.angle += p.rotSpeed;

      // Reiniciar cuando sale por abajo
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.x < -20) p.x = canvas.width + 20;

      drawPetal(ctx, p.x, p.y, p.size, p.angle, p.opacity);
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Limpiar canvas al salir de la landing
  return () => {
    canvas.remove();
    window.removeEventListener("resize", resize);
  };
}