"use client";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import ShowcaseSection from "./sections/ShowcaseSection";

export default function Home() {

  return (
    <>
      <Hero />
      <TechStack />
      {/* <FeatureCards /> */}
      <Experience />
      <ShowcaseSection />
    </>
  );
}