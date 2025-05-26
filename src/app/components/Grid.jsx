'use client'

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { search, mapImageResources } from "@/lib/cloudinary";

const Grid = ({images, defaultNextCursor, defaultTotalCount}) => {
  const [allImages, setAllImages] = useState(images);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [totalCount, setTotalCount] = useState(defaultTotalCount);

  console.log('totalCount', totalCount);
  console.log('nextCursor', nextCursor);


  let columnHeights = [0, 0];
  const firstColumnImages = allImages.filter((_, i) => i % 2 === 0);
  const secondColumnImages = allImages.filter((_, i) => i % 2 !== 0);

  async function loadAdditional(e) {
    e.preventDefault();
    const results = await search(JSON.stringify({nextCursor}));
    const {resources, next_cursor: nextPageCursor, total_count: updatedTotalCount} = results;
    const images = mapImageResources(resources);
    setAllImages(prev => {
      return [
        ...prev,
        ...allImages
      ]
    });
    setNextCursor(nextPageCursor);
    setTotalCount(updatedTotalCount);
  }

  return (
    // <div className="hero-layout">
    //   <div className="grid-3-cols-md-tight">
    //       <div className="first-column" id="first-column"></div>
    //       <div className="second-column" id="second-column"></div>
    //   </div>
    // </div>
    <div className="hero-layout">
      <div className="grid-2-cols">
        <div className="">
          {firstColumnImages.map((src, i) => (
            <div className="pod" key={i}>
              <Image src={src.image} width={src.width} height={src.height} alt="gallery" className={src.title} />
            </div>
          ))}
        </div>
        <div className="">
          {secondColumnImages.map((src, i) => (
            <div className="pod" key={i}>
              <Image src={src.image} width={src.width} height={src.height} alt="gallery" className={src.title} />
            </div>
          ))}
        </div>
      </div>
      {totalCount > allImages.length && (
          <p>
            <Button onClick={loadAdditional}>Load More Results</Button>
          </p>
        )}
    </div>
  );

}

export default Grid;