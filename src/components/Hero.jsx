import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { RiHand } from "react-icons/ri";
import RotatingText from "./RotatingText/RotatingText";

const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const waveVariants = {
    wave: {
        rotate: [0, 14, -8, 14, -4, 10, 0, 0],
        transition: {
            duration: 3.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1],
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        }
    }
};

const floatingVariants = {
    float: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};

const Hero = () => {
    const openResume = () => {
        window.open(HERO_CONTENT.resumeLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white text-justify mb-4 mt-16 lg:mt-0 px-4 sm:px-6 md:px-8">
                <div className="w-full md:w-1/2 relative py-6 md:py-0">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex justify-center items-center w-full h-full"
                    >
                        <motion.div
                            className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden flex justify-center items-center"
                            animate="float"
                            variants={floatingVariants}
                        >
                            <img
                                src={HERO_CONTENT.cocard}
                                alt="Profile"
                                className="w-auto h-auto max-w-full max-h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 mt-[-20px] md:mt-0 mb-10 md:mb-0 flex flex-col justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex items-center gap-3 mb-3"
                        variants={textVariants}
                    >
                        <motion.div
                            className="inline-flex items-center"
                            animate="wave"
                            variants={waveVariants}
                            style={{ originX: 0.7, originY: 0.7 }}
                        >
                            <RiHand className="text-2xl md:text-3xl lg:text-4xl" />
                        </motion.div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                            {HERO_CONTENT.greeting}
                        </h1>
                    </motion.div>

                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.name}
                    </motion.h1>

                    <motion.div className="mb-4" variants={textVariants}>
                        <RotatingText
                            texts={['Web Developer', 'UI/UX Designer']}
                            mainClassName="text-2xl md:text-3xl text-white overflow-hidden py-0.5 inline-flex transition-all italic"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.03}
                            splitLevelClassName="overflow-hidden pb-0.5"
                            transition={{ type: "just", duration: 0.3 }}
                            rotationInterval={3000}
                        />
                    </motion.div>

                    <motion.p
                        className="text-md md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <div className="w-full flex justify-start mb-8 lg:mt-4">
                        <motion.button
                            className="bg-stone-50 text-stone-900 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-base sm:text-md md:text-lg font-medium inline-block rounded-lg sm:rounded-xl w-auto cursor-pointer shadow-md"
                            onClick={openResume}
                            variants={textVariants}
                            whileHover={{
                                scale: 0.95,
                                backgroundColor: "#6b7280",
                                color: "#ffffff",
                                transition: { duration: 0.2, ease: "easeInOut" }
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            {HERO_CONTENT.resumeLinkText}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;