'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

interface SwiperProps {
  images: string[];
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

export const InteractiveImageSwiper: React.FC<SwiperProps> = ({
  images,
  cardWidth = 500,
  cardHeight = 352,
  className = ''
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Use the 'images' prop directly and manage the display order with state
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: images.length }, (_, i) => i)
  );

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return [];
    return [...cardStackRef.current.querySelectorAll('.image-card')] as HTMLElement[];
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null => {
    return getCards()[0] || null;
  }, [getCards]);

  const updatePositions = useCallback(() => {
    const cards = getCards();
    cards.forEach((card, i) => {
      card.style.setProperty('--i', (i + 1).toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
    });
  }, [getCards]);

  const applySwipeStyles = useCallback((deltaX: number) => {
    const card = getActiveCard();
    if (!card) return;
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.2}deg`);
    card.style.opacity = (1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75).toString();
  }, [getActiveCard]);

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const deltaX = currentX.current - startX.current;
    const threshold = 50;
    const card = getActiveCard();

    if (card) {
      card.style.transition = `transform 0.3s ease, opacity 0.3s ease`;

      if (Math.abs(deltaX) > threshold) {
        const direction = Math.sign(deltaX);
        card.style.setProperty('--swipe-x', `${direction * 200}px`);
        card.style.setProperty('--swipe-rotate', `${direction * 20}deg`);

        setTimeout(() => {
          setCardOrder(prev => {
            if (prev.length === 0) return [];
            return [...prev.slice(1), prev[0]]; // Cycle the card to the back
          });
        }, 300);
      } else {
        applySwipeStyles(0); // Snap back
      }
    }

    isSwiping.current = false;
    startX.current = 0;
    currentX.current = 0;
  }, [getActiveCard, applySwipeStyles]);

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      currentX.current = clientX;
      const deltaX = currentX.current - startX.current;
      applySwipeStyles(deltaX);
    });
  }, [applySwipeStyles]);

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    const card = getActiveCard();
    if (card) card.style.transition = 'none';
  }, [getActiveCard]);

  // Navigation helpers for buttons/dots
  const next = useCallback(() => {
    setCardOrder(prev => (prev.length ? [...prev.slice(1), prev[0]] : prev));
  }, []);

  const prev = useCallback(() => {
    setCardOrder(prev => (prev.length ? [prev[prev.length - 1], ...prev.slice(0, -1)] : prev));
  }, []);

  const goToIndex = useCallback((targetOriginalIndex: number) => {
    setCardOrder(prev => {
      const pos = prev.indexOf(targetOriginalIndex);
      if (pos <= 0) return prev;
      return [...prev.slice(pos), ...prev.slice(0, pos)];
    });
  }, []);

  useEffect(() => {
    const cardStackElement = cardStackRef.current;
    if (!cardStackElement) return;

    const handlePointerDown = (e: PointerEvent) => handleStart(e.clientX);
    const handlePointerMove = (e: PointerEvent) => handleMove(e.clientX);
    const handlePointerUp = () => handleEnd();

    cardStackElement.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      cardStackElement.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handleStart, handleMove, handleEnd]);

  useEffect(() => {
    updatePositions();
  }, [cardOrder, updatePositions]);

  return (
    <div
      className={`relative grid place-content-center select-none ${className}`}
      ref={cardStackRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: cardHeight,
        touchAction: 'none',
        transformStyle: 'preserve-3d',
        '--card-perspective': '800px',
        '--card-z-offset': '14px',
        '--card-y-offset': '8px',
      } as React.CSSProperties}
    >
      {cardOrder.map((originalIndex, displayIndex) => (
        <article
          key={`${images[originalIndex]}-${originalIndex}`}
          className="image-card absolute cursor-grab active:cursor-grabbing
                     place-self-center rounded-xl
                     shadow-lg overflow-hidden will-change-transform bg-white"
          style={{
            '--i': (displayIndex + 1).toString(),
            zIndex: images.length - displayIndex,
            width: `min(100% - 2px, ${cardWidth}px)`,
            height: `min(100% - 2px, ${cardHeight}px)`,
            transform: `perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotate(var(--swipe-rotate, 0deg))`
          } as React.CSSProperties}
        >
          {isVideo(images[originalIndex]) ? (
            <video
              src={images[originalIndex]}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none bg-black"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
            />
          ) : (
            <Image
              src={images[originalIndex]}
              alt={`Swiper image ${originalIndex + 1}`}
              fill
              className="object-contain pointer-events-none bg-white"
              draggable={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </article>
      ))}
      {/* Controls overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <button
          type="button"
          aria-label="Previous image"
          className="pointer-events-auto z-10 inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow px-3 py-2 text-gray-800"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); prev(); }}
        >
          {/* Left chevron */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next image"
          className="pointer-events-auto z-10 inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow px-3 py-2 text-gray-800"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); next(); }}
        >
          {/* Right chevron */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {/* Dots */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, originalIdx) => {
          const isActive = cardOrder[0] === originalIdx;
          return (
            <button
              key={`dot-${originalIdx}`}
              aria-label={`Go to image ${originalIdx + 1}`}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition ${isActive ? 'bg-white ring-2 ring-red-600' : 'bg-white/60 hover:bg-white'}`}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); goToIndex(originalIdx); }}
            />
          );
        })}
      </div>
    </div>
  );
};