"use client"
import NavBar from "../../components/NavBar";
import Grid from "../../components/Grid";
import { search, mapImageResources } from "@/lib/cloudinary";
import { useEffect } from "react";


export default async function Home() {
  // const fetcher = (url) => fetch(url).then(res => res.json()); 
  // const { data } = useSWR('/api/imageReader', fetcher);
  // console.log('data', data);

  const results = await search();
  
  const {resources, next_cursor: nextCursor, total_count: totalCount} = results;
  const images = mapImageResources(resources);
  console.log('results', results);

  // useEffect(() => {
  //   async function run() {
  //     const result = await fetch('/api/search').then(r => r.json());
  //     console.log('result', result);
  //   }
  // }, []);
  

  return (
    <>
      <div>Welcome to my photo gallery</div>
      {images === undefined ? "Loading..." : <Grid images={images} defaultNextCursor={nextCursor} defaultTotalCount={totalCount ? totalCount : images.length} />}
    </>
  );
}
