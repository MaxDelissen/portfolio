import { useState } from "react";
import "./Home.css";
import HeroSection from "../sections/HeroSection.tsx";
import AboutMe from "../sections/AboutMe.tsx";
import Footer from "../sections/Footer.tsx";
import Projects from "../sections/Projects.tsx";
import Contact from "./Contact.tsx";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <>
      <HeroSection />
      <AboutMe onContactClick={handleOpenContact} />
      <hr />
      <Projects />
      <Footer />
      {showContact && (
        <Contact show={showContact} onHide={handleCloseContact} />
      )}
    </>
  );
}
