'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { search, mapImageResources } from "@/lib/cloudinary"
import CarouselModal from "./CarouselModal";

const Grid = ({ images, defaultNextCursor, defaultTotalCount }) => {
  const [allImages, setAllImages] = useState(images)
  const [nextCursor, setNextCursor] = useState(defaultNextCursor)
  const [totalCount, setTotalCount] = useState(defaultTotalCount)
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (idx) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);
  const showPrev = () => setModalIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const showNext = () => setModalIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  // Split images for two columns
  const firstColumnImages = allImages.filter((_, i) => i % 2 === 0)
  const secondColumnImages = allImages.filter((_, i) => i % 2 !== 0)

  async function loadAdditional(e) {
    e.preventDefault()
    const results = await search(JSON.stringify({ nextCursor }))
    const { resources, next_cursor: nextPageCursor, total_count: updatedTotalCount } = results
    const newImages = mapImageResources(resources)
    setAllImages(prev => [
      ...prev,
      ...newImages
    ])
    setNextCursor(nextPageCursor)
    setTotalCount(updatedTotalCount)
  }

  const flatImages = [...firstColumnImages, ...secondColumnImages];

  return (
    <div className="w-full min-h-screen py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[firstColumnImages, secondColumnImages].map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {column.map((src, i) => {
              // Calculate the index in the flat array for modal navigation
              const flatIdx = colIdx === 0 ? i : firstColumnImages.length + i;
              return (
                <div
                  className="relative overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow group cursor-pointer"
                  key={src.id || flatIdx}
                  onClick={() => openModal(flatIdx)}
                >
                  <Image
                    src={src.image}
                    width={src.width}
                    height={src.height}
                    alt={src.title || "gallery"}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {src.title}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {totalCount > allImages.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadAdditional}
            className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Load More Results
          </button>
        </div>
      )}
      <CarouselModal
        images={flatImages}
        currentIndex={modalIndex}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  )
}

export default Grid