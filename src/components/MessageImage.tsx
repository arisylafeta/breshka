'use client';

import Image from 'next/image';

const MessageImage = () => {
  return (
    <div className="w-full md:w-1/3 relative" style={{ minHeight: '400px' }}>
      <Image
        src="/message.jpg"
        alt="Leadership message"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        onError={(e) => {
          console.error('Failed to load image:', e);
          const target = e.target as HTMLImageElement;
          target.src = '/images/placeholder.jpg';
        }}
      />
    </div>
  );
};

/**
 * A component that renders an image with a message.
 *
 * This component uses the `next/image` module to render the image. It also
 * includes an onError handler that will update the image source to a
 * placeholder image if the original image fails to load.
 *
 * @returns A JSX element that renders the image.
 */
export default MessageImage;
