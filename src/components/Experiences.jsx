import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experiences = () => {
    const [hoveredExperience, setHoveredExperience] = useState(null);

    const sharedAnimation = {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: sharedAnimation },
    };

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { width: "80px", opacity: 1, transition: sharedAnimation },
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const timelineLineVariants = {
        hidden: { scaleY: 0, originY: 0, opacity: 0 },
        visible: { scaleY: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
    };

    const experienceHoverVariants = {
        hover: { transition: { duration: 0.3, ease: "easeOut" } },
    };

    const imageHoverVariants = {
        hover: { transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <section className="px-6 py-20" id="experiences">
            <motion.h2
                className="text-4xl md:text-6xl font-medium tracking-tight mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={titleVariants}
            >
                Experiences
            </motion.h2>
            <motion.div
                className="h-1 mb-8 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={lineVariants}
            />

            <div className="space-y-10 relative">
                {/* vertikal line timeline */}
                <motion.div
                    className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-400/50 -z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={timelineLineVariants}
                />

                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        onMouseEnter={() => setHoveredExperience(index)}
                        onMouseLeave={() => setHoveredExperience(null)}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between items-start relative">
                            {/* dot timeline */}
                            <div className="absolute left-4 top-6 w-4 h-4 bg-white rounded-full z-10 md:left-4" />

                            <div className="text-lg md:w-1/4 mb-2 md:mb-0 p-4 pl-12 md:pl-12">
                                {experience.yearRange}
                            </div>

                            <motion.div
                                className="md:w-3/4 mb-10 pl-12 md:pl-0"
                                whileHover="hover"
                                variants={experienceHoverVariants}
                            >
                                <motion.div
                                    className={`max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 border border-stone-500/20 rounded-lg
                                                group relative transition-opacity duration-300 ${hoveredExperience !== null && hoveredExperience !== index
                                            ? 'opacity-50'
                                            : 'opacity-100'
                                        }`}
                                >
                                    <div className="relative z-10 flex flex-row items-start space-x-4">
                                        <motion.div
                                            className="backdrop-blur-3xl p-4 bg-stone-600/10 border border-stone-500/20 rounded-lg"
                                            whileHover="hover"
                                            variants={imageHoverVariants}
                                        >
                                            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                                <img
                                                    src={experience.image}
                                                    alt={experience.title}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                        </motion.div>

                                        <div className="mt-2">
                                            <h2 className="text-xl mb-2">
                                                {experience.title}
                                            </h2>
                                            <p className="mb-4 text-sm italic">
                                                {experience.location}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-inside space-y-2 mt-4 text-justify relative z-10">
                                        {experience.description.map((desc, idx) => (
                                            <li key={idx}>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;