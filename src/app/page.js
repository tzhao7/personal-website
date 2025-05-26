import Image from "next/image";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";

export default function Home() {

  return (
    <>
      <Hero />
      <TechStack />
      {/* <FeatureCards /> */}
      <Experience />
    </>
  );
}