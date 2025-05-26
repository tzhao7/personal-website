import React from "react";
import Image from "next/image";

export default function CarouselModal({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      {/* Close button */}
      <button
        className="absolute top-6 right-8 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl cursor-pointer transition"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      {/* Prev arrow */}
      <button
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl cursor-pointer transition"
        onClick={onPrev}
        aria-label="Previous"
      >
        {/* You can use an SVG for a more modern look */}
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Image */}
      <div className="max-w-3xl max-h-[80vh] flex items-center justify-center">
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].title || "gallery"}
          width={images[currentIndex].width}
          height={images[currentIndex].height}
          className="object-contain max-h-[80vh] rounded shadow-lg"
        />
      </div>
      {/* Next arrow */}
      <button
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl cursor-pointer transition"
        onClick={onNext}
        aria-label="Next"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}