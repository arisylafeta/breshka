'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

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
          <Image
            src={images[originalIndex]}
            alt={`Swiper image ${originalIndex + 1}`}
            fill
            className="object-cover pointer-events-none"
            draggable={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </article>
      ))}
    </div>
  );
};