import React, { useEffect } from 'react';

declare global {
  interface Window {
    particleground: any;
  }
}

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const target = document.getElementById('particles');
    if (target && window.particleground) {
      window.particleground(target, {
        dotColor: '#666',
        lineColor: '#414345',
        lineWidth: 0.5,
        density: 8e3,
        particleRadius: 4,
        proximity: 100,
        minSpeedX: 0.2,
        minSpeedY: 0.2,
        directionX: 'center',
        parallax: false
      });
    }
  }, []);

  return <div id="particles" />;
};

export default ParticleBackground;