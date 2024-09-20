'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FluidRippleButtonProps {
  variant?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const FluidRippleButton: React.FC<FluidRippleButtonProps> = ({
  variant = 'default',
  style = {},
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  let animationFrameId: number;

  // Update mouse position when hovering
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isHovered]);

  // Calculate the distortion filter
  const distortionFilter = useMemo(() => {
    const freqX = 0.05 + mousePosition.x * 0.05 + Math.sin(time) * 0.02;
    const freqY = 0.05 + mousePosition.y * 0.05 + Math.cos(time) * 0.02;
    const scaleX = 15 + mousePosition.x * 20 + Math.sin(time * 0.5) * 10;
    const scaleY = 15 + mousePosition.y * 20 + Math.cos(time * 0.5) * 10;
    return `
      <filter id="distort">
        <feTurbulence type="turbulence" baseFrequency="${freqX} ${freqY}" numOctaves="5" result="turbulence" />
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="${scaleX}" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    `;
  }, [mousePosition, time]);

  // Start or stop the animation based on hover state
  useEffect(() => {
    const animateWave = () => {
      setTime((prevTime) => prevTime + 0.01); // Increment time smoothly
      animationFrameId = requestAnimationFrame(animateWave);
    };

    if (isHovered) {
      animateWave(); // Start the animation when hovered
    } else {
      cancelAnimationFrame(animationFrameId); // Stop the animation when not hovered
    }

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [isHovered]);

  // Update the filter SVG content
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = distortionFilter;
    }
  }, [distortionFilter]);

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden bg-primary text-primary-foreground py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${variant}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? `url('#distort')` : 'none',
        ...style,
      }}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute bg-white opacity-30"
          transition={{ type: 'spring', stiffness: 100, damping: 100 }}
          style={{
            borderRadius: '100%',
            width: '10px',
            height: '10px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" ref={svgRef}>
        <defs />
      </svg>
    </button>
  );
};
