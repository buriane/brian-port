import { useState, useEffect } from 'react';
import { ChevronUpIcon } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 backdrop-blur-lg shadow-lg ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white`}
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;