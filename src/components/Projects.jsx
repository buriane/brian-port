import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);

    const sharedAnimation = {
        duration: 0.8,
        ease: "easeOut"
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ...sharedAnimation,
                duration: 1,
            }
        }
    };

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "80px",
            opacity: 1,
            transition: sharedAnimation
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                ...sharedAnimation,
                delay: i * 0.1,
            }
        })
    };

    const openProjectLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="px-6 py-20" id="projects">
            <motion.h1
                className="text-4xl md:text-6xl font-medium tracking-light mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={titleVariants}
                style={{ willChange: 'opacity, transform' }}
            >
                Projects
            </motion.h1>
            <motion.div
                className="h-1 mb-8 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={lineVariants}
                style={{ willChange: 'width, opacity' }}
            />

            <div className="relative w-full mx-auto">
                <div className="overflow-hidden relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    margin: "-50px",
                                    amount: 0.3
                                }}
                                variants={projectVariants}
                                className="relative rounded-lg p-4 md:p-5 backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20"
                                style={{ willChange: 'opacity, transform' }}
                            >
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div
                                        className="relative aspect-[4/3] rounded-lg overflow-hidden max-h-[250px] cursor-pointer"
                                        onMouseEnter={() => setHoveredImage(index)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                        onClick={() => openProjectLink(project.link)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Open ${project.name}`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            loading="lazy"
                                            decoding="async"
                                            fetchPriority="high"
                                            className={`w-full h-full object-cover transition-all duration-300 ${hoveredImage !== null && hoveredImage !== index
                                                ? 'opacity-50'
                                                : 'opacity-100'
                                                } ${hoveredImage === index
                                                    ? 'scale-110'
                                                    : 'scale-100'
                                                }`}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl font-medium">
                                            {project.name}
                                        </h2>
                                        <p className="text-sm text-white/60 line-clamp-3 text-justify">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech?.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-white/5 px-3 py-1 rounded-lg text-md text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div
                                        onClick={() => openProjectLink(project.link)}
                                        className={`inline-block bg-white/90 text-stone-900 rounded-xl py-1.5 px-5 text-lg w-fit transition-all duration-300 hover:scale-110 cursor-pointer ${hoveredButton && hoveredButton !== project.link
                                            ? 'opacity-50'
                                            : 'opacity-100'
                                            }`}
                                        onMouseEnter={() => setHoveredButton(project.link)}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`View ${project.name} on GitHub`}
                                    >
                                        View on GitHub
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;