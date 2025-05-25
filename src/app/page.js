import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <TechStack />
      {/* <FeatureCards /> */}
      <Experience />
    </>
  );
}
