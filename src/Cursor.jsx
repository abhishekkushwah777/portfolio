import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailPathRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const trailPoints = useRef([]);
  const animationId = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const maxTrailLength = 20;
  const ease = 0.15;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start animation loop
    const animate = () => {
      // Smooth cursor movement with easing
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * ease;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * ease;

      // Update cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPosition.current.x + 'px';
        cursorRef.current.style.top = cursorPosition.current.y + 'px';
      }

      // Add current position to trail
      trailPoints.current.push({
        x: cursorPosition.current.x,
        y: cursorPosition.current.y,
        life: 1.0
      });

      // Limit trail length
      if (trailPoints.current.length > maxTrailLength) {
        trailPoints.current.shift();
      }

      // Update trail points life (fade effect)
      trailPoints.current = trailPoints.current.map((point, index) => {
        point.life = (index + 1) / trailPoints.current.length;
        return point;
      }).filter(point => point.life > 0.1);

      // Generate SVG path for trail
      updateTrail();

      // Continue animation
      animationId.current = requestAnimationFrame(animate);
    };

    const updateTrail = () => {
      if (!trailPathRef.current || trailPoints.current.length < 2) {
        if (trailPathRef.current) {
          trailPathRef.current.setAttribute('d', '');
        }
        return;
      }

      let pathData = `M ${trailPoints.current[0].x} ${trailPoints.current[0].y}`;

      // Create smooth curve through points
      for (let i = 1; i < trailPoints.current.length; i++) {
        const point = trailPoints.current[i];
        const prevPoint = trailPoints.current[i - 1];

        if (i === 1) {
          pathData += ` L ${point.x} ${point.y}`;
        } else {
          // Use quadratic curves for smoother trail
          const midX = (prevPoint.x + point.x) / 2;
          const midY = (prevPoint.y + point.y) / 2;
          pathData += ` Q ${prevPoint.x} ${prevPoint.y} ${midX} ${midY}`;
        }
      }

      // Set path data
      trailPathRef.current.setAttribute('d', pathData);

      // Apply fade effect to trail
      const opacity = Math.min(1, trailPoints.current.length / 10);
      trailPathRef.current.style.opacity = opacity;
    };

    animate();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor-dot ${isVisible ? 'visible' : 'hidden'}`}
      />
      <svg 
        className={`custom-cursor-trail ${isVisible ? 'visible' : 'hidden'}`}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      >
        <path 
          ref={trailPathRef}
          stroke="#e0192a" 
          strokeWidth="1" 
          fill="none"
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
      </svg>
    </>
  );
};

export default CustomCursor;
