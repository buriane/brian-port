import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiInstagramFill, RiGithubFill, RiLinkedinFill, RiWhatsappFill, RiMailFill } from "react-icons/ri";
import ShinyText from "./ShinyText/ShinyText";

const sharedAnimation = {
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut"
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            y: 0,
            transition: sharedAnimation
        }
    }
};

const lineVariants = {
    hidden: {
        width: 0,
        opacity: 0,
    },
    visible: {
        width: "80px",
        opacity: 1,
        transition: sharedAnimation
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: () => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const iconVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: () => ({
        opacity: 1,
        scale: 1.2,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }),
    hover: {
        scale: 1.3,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

const Contacts = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const openSocialLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            className="min-h-0 flex flex-col justify-center px-4 md:px-10 pb-10"
            id="contact"
        >
            <motion.h2
                className="text-4xl md:text-6xl font-medium tracking-tight mb-6 md:mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={titleVariants}
            >
                Contact
            </motion.h2>
            <motion.div
                className="h-1 w-20 bg-white mb-6 md:mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={lineVariants}
            >
            </motion.div>

            <motion.h3
                className="text-2xl md:text-5xl leading-none"
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                variants={textVariants}
            >
                <ShinyText text={CONTACT_CONTENT.headline} disabled={false} speed={3} className='shiny-text' />
            </motion.h3>

            <motion.p
                className="text-lg md:text-2xl mt-6 max-w-4xl text-justify mb-6"
                initial="hidden"
                whileInView="visible"
                custom={0.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.description}
            </motion.p>

            <div className="flex space-x-6 mt-8 md:mt-10 mb-8 md:mb-10">
                {CONTACT_CONTENT.socialLinks.map((link, index) => {
                    const Icon = {
                        RiLinkedinFill: RiLinkedinFill,
                        RiMailFill: RiMailFill,
                        RiGithubFill: RiGithubFill,
                        RiInstagramFill: RiInstagramFill,
                        RiWhatsappFill: RiWhatsappFill,
                    }[link.icon];

                    return (
                        <motion.div
                            key={link.platform}
                            className="relative rounded-lg p-2 backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20 cursor-pointer"
                            initial="hidden"
                            whileInView="visible"
                            custom={1.0 + index * 0.2}
                            variants={iconVariants}
                            onMouseEnter={() => setHoveredIcon(link.platform)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            whileHover="hover"
                            onClick={() => openSocialLink(link.url)}
                            role="button"
                            tabIndex={0}
                            aria-label={link.ariaLabel}
                        >
                            <motion.div
                                className={`transition-opacity duration-300 ${
                                    hoveredIcon && hoveredIcon !== link.platform 
                                    ? 'opacity-50' 
                                    : 'opacity-100'
                                }`}
                            >
                                <Icon size={30} />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.p
                className="text-sm text-stone-400 mt-10 md:mt-20 mb-16"
                initial="hidden"
                whileInView="visible"
                custom={1.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    );
};

export default Contacts;