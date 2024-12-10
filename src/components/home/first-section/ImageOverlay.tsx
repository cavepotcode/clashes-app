import { FC, useEffect, useRef } from "react";

interface ImageOverlayProps {
  src: string;
  alt: string;
  delay: number;
  className?: string;
}

export const ImageOverlay: FC<ImageOverlayProps> = ({
  src,
  alt,
  delay,
  className = "",
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageRef.current;
    if (element) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0) scale(1)";
      }, delay);
    }
  }, [delay]);

  return (
    <div
      ref={imageRef}
      className={`absolute transition-all duration-1000 ease-out opacity-0 transform translate-y-8 scale-95 ${className}`}
    >
      <img src={src} alt={alt} className="rounded-sm shadow-xl object-cover" />
    </div>
  );
};
