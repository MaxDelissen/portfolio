import "./Home.css";
import HeroSection from "../sections/HeroSection.tsx";
import AboutMe from "../sections/AboutMe.tsx";
import Footer from "../sections/Footer.tsx";
import Projects from "../sections/Projects.tsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <hr />
      <Projects />
      <Footer />
    </>
  );
}
