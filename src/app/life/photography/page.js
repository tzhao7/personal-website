"use client";
import Grid from "../../components/Grid";
import useSWR from 'swr';
import { mapImageResources } from "@/lib/cloudinary";
import Image from "next/image";

export default function Home() {
  const fetcher = (url) => fetch(url).then(res => res.json());
  const { data, error } = useSWR('/api/search', fetcher);

  if (error) {
    return <div className="text-red-500">Failed to load images. Please try again later.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { resources, next_cursor: nextCursor, total_count: totalCount } = data;
  const images = mapImageResources(resources);

  return (
    <main className="pt-24"> {/* pt-24 = 6rem = 96px, adjust as needed */}
      <div className="mb-4 flex justify-center">
      <Image
        src="/images/edc.jpg"
        alt="Profile"
        width={96}
        height={96}
        className="rounded-full border-4 border-white shadow-lg object-cover"
      />
    </div>
    <div className="mb-6 text-2xl font-bold text-center">Welcome to my photo gallery</div>

      <Grid
        images={images}
        defaultNextCursor={nextCursor}
        defaultTotalCount={totalCount ? totalCount : images.length}
      />
    </main>
  
  );
}