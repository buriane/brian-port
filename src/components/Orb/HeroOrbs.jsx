import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import Orb from "./Orb";

const HeroOrbs = ({ isVisible = true }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Main teal orb - top right */}
            <Orb
                color="#89CFF0"
                size={350}
                blur={70}
                opacity={0.4}
                duration={8}
                className="absolute -top-[15%] -right-[5%] md:right-[25%]"
                x={30}
                y={-20}
            />

            {/* Mid purple orb - mid left */}
            <Orb
                color="#00F5D4"
                size={320}
                blur={65}
                opacity={0.35}
                duration={7}
                delay={0.5}
                className="absolute top-[30%] -left-[10%] md:left-[5%]"
                x={-20}
                y={40}
            />

            {/* Orange orb - bottom */}
            <Orb
                color="#FFC3A0"
                size={280}
                blur={80}
                opacity={0.3}
                duration={9}
                delay={1}
                className="absolute bottom-[25%] left-[90%] transform -translate-x-1/2"
                x={20}
                y={-30}
            />
        </motion.div>
    );
};

HeroOrbs.propTypes = {
    isVisible: PropTypes.bool
};

export default HeroOrbs;
