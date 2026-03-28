import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AntiGravitySimulation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 40;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.color = Math.random() > 0.5 ? '#00f7ff' : '#b026ff';
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction (Repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 10;
          this.y -= Math.sin(angle) * force * 10;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = 400;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      canvas.width = containerRef.current.offsetWidth;
      particles.forEach(p => p.reset());
    };

    init();
    animate();
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-24 container mx-auto px-6 overflow-hidden">
      <div className="glass rounded-3xl p-10 relative overflow-hidden flex flex-col items-center border-white/10" ref={containerRef}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl font-outfit font-bold mb-4">Zero-G Environment</h2>
          <p className="text-white/60 max-w-xl">
            Interact with the floating matter. Our propulsion systems are currently offline. 
            Move your cursor to observe the repulsion field in action.
          </p>
        </div>

        <canvas 
          ref={canvasRef} 
          className="relative z-10 w-full cursor-none"
          style={{ height: '400px' }}
        />
        
        {/* Custom cursor for the canvas area */}
        <div className="absolute inset-0 pointer-events-none z-20 group">
          {/* This is a simplified decoration */}
          <div className="absolute top-4 left-4 text-[10px] text-neon-cyan/40 font-mono">SYSTEM_STATUS: STABLE</div>
          <div className="absolute bottom-4 right-4 text-[10px] text-neon-purple/40 font-mono">ENERGY_LEVEL: 88%</div>
        </div>
      </div>
    </section>
  );
};

export default AntiGravitySimulation;
