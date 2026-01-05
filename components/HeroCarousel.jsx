"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function HeroCarousel({ images = [], intervalMs = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (!images.length) {
    return (
      <div className="aspect-4/3 rounded-box bg-base-200 border border-base-300" />
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-box">
      {images.map((image, index) => (
        <div
          key={image.src ?? index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm hover:bg-base-100 border-none"
        aria-label="Previous image"
        type="button"
      >
        <HiChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm hover:bg-base-100 border-none"
        aria-label="Next image"
        type="button"
      >
        <HiChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-base-100 w-6"
                : "bg-base-100/50 hover:bg-base-100/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}


