import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import './index.css'
import Aurora from "./components/Aurora/Aurora";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="relative min-h-screen">
        <Hero />
        <main className="antialiased max-w-7xl mx-auto relative z-20">
          <NavBar />
          <About />
          <Experiences />
          <Projects />
          <Certificates />
          <Contacts />
        </main>
        <div className="absolute bottom-0 left-0 w-full h-[50vh] -z-10 transform rotate-180">
          <Aurora
            colorStops={["#00F5D4", "#89CFF0", "#D8BFD8", "#FFC3A0", "#98FB98", "#FFFACD"]}
            blend={5}
            amplitude={1}
            speed={1}
          />
        </div>
      </div>
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;