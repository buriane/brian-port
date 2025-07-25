import { useState, useEffect, lazy, Suspense } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import './index.css'
import Aurora from "./components/Aurora/Aurora";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Experiences = lazy(() => import("./components/Experiences"));
const Certificates = lazy(() => import("./components/Certificates"));
const Contacts = lazy(() => import("./components/Contacts"));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-8 h-8 border-4 border-transparent border-t-blue-500 border-r-green-500 rounded-full animate-spin"></div>
  </div>
);

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
        {/* Hero tetap di-load immediately karena above the fold */}
        <Hero />

        <main className="antialiased max-w-7xl mx-auto relative z-20">
          {/* NavBar tetap di-load immediately */}
          <NavBar />

          {/* Lazy load komponen dengan Suspense */}
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Experiences />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Certificates />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contacts />
          </Suspense>
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