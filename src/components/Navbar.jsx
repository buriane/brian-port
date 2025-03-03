import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("hero");

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const scrollToHeroSection = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (currentScrollY + windowHeight >= documentHeight - 10) {
                setActiveSection("contact");
            } else {
                const sections = LINKS.map(link => link.href.replace("#", ""));
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 10 && rect.bottom >= 10) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }

            if (currentScrollY + windowHeight >= documentHeight - 50) {
                setIsVisible(true);
            } else {
                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto md:my-3 bg-stone-950/30 p-3 md:rounded-xl backdrop-blur-lg px-4 sm:px-6 lg:px-8">
                <div className="text-white font-semibold text-lg uppercase">
                    <a href="#" onClick={scrollToHeroSection}>BC</a>
                </div>

                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={`text-stone-400 hover:text-white transition duration-300 slide-up-down-animation ${
                                activeSection === link.href.replace("#", "") ? "text-white" : ""
                            }`}
                        >
                            <span className="old-text">{link.label}</span>
                            <span className="new-text">{link.label}</span>
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? (
                            <RiCloseFill className="w-6 h-6" />
                        ) : (
                            <RiMenu3Fill className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-b-xl flex flex-col space-y-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={`text-stone-400 hover:text-white transition duration-300 slide-up-down-animation ${
                                activeSection === link.href.replace("#", "") ? "text-white" : ""
                            }`}
                            onClick={handleLinkClick}
                        >
                            <span className="old-text">{link.label}</span>
                            <span className="new-text">{link.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;