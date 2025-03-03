import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { RiHand } from "react-icons/ri";
import Lanyard from "./Lanyard/Lanyard";
import RotatingText from "./RotatingText/RotatingText";
import ShinyText from "./ShinyText/ShinyText";
import CircularText from './CircularText/CircularText';
import Particles from "./Particles/Particles";

const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Mulai dari kanan (x: 100) dan tidak terlihat (opacity: 0)
    visible: {
        opacity: 1,
        x: 0, // Bergerak ke posisi normal (x: 0)
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

const circularTextVariants = {
    hidden: { opacity: 0, x: -100 }, // Mulai dari kiri (x: -100) dan tidak terlihat (opacity: 0)
    visible: {
        opacity: 1,
        x: 0, // Bergerak ke posisi normal (x: 0)
        transition: { duration: 1, ease: "easeOut" },
    },
};

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={500}
                    particleSpread={5}
                    speed={0.3}
                    particleBaseSize={50}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={true}
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white text-justify mb-4">
                <div className="w-full md:w-1/2 relative">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                    <motion.div
                        className="absolute top-0 left-0 mt-44 ml-10 md:mt-52 md:ml-16"
                        initial="hidden"
                        animate="visible"
                        variants={circularTextVariants}
                    >
                        <CircularText
                            text="MASTER 🏆 BUILD 🚀 PRACTICE ⚡ "
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="w-full md:w-1/2 p-8 mt-[-100px] md:mt-0 mb-10 md:mb-0 flex flex-col justify-center"
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
                            <ShinyText text={HERO_CONTENT.greeting} disabled={false} speed={3} className='shiny-text' />
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

                    <div className="w-full flex justify-start mt-4">
                        <motion.a
                            className="bg-stone-50 text-stone-900 px-6 py-3 text-lg font-medium inline-block rounded-xl w-auto"
                            href={HERO_CONTENT.resumeLink}
                            rel="noopener noreferrer"
                            target="_blank"
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
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;