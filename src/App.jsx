import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import './index.css'
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Aurora from "./components/Aurora/Aurora";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

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
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <main className="antialiased max-w-7xl mx-auto relative z-20">
          <NavBar />
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
      </ClickSpark>
    </>
  );
};

export default App;