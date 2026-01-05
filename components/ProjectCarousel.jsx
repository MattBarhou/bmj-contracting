"use client";

import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function ProjectCarousel({ images = [], title = "Project" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="aspect-4/3 overflow-hidden rounded-t-box bg-base-200" />
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="relative aspect-4/3 overflow-hidden rounded-t-box bg-base-200">
        <Image
          src={images[currentIndex].src}
          alt={`${title} - ${images[currentIndex].label ?? ""}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Label badge */}
        {images[currentIndex].label ? (
          <div className="absolute top-4 left-4 px-3 py-1 bg-base-100/90 backdrop-blur-sm rounded-full text-sm font-medium text-base-content">
            {images[currentIndex].label}
          </div>
        ) : null}

        {/* Navigation arrows */}
        {images.length > 1 ? (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm hover:bg-base-100 border-none"
              aria-label="Previous image"
              type="button"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm hover:bg-base-100 border-none"
              aria-label="Next image"
              type="button"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </>
        ) : null}
      </div>

      {/* Dots indicator */}
      {images.length > 1 ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-base-100/60 hover:bg-base-100"
              }`}
              aria-label={`Go to image ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}


