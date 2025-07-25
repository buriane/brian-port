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
            <Orb
                color="#00F5D4"
                size={280}
                blur={90}
                opacity={0.35}
                duration={7}
                className="absolute top-[10%] md:top-auto md:bottom-[60%] left-[70%] md:left-[80%]"
                x={60}
                y={-60}
            />
        </motion.div>
    );
};

HeroOrbs.propTypes = {
    isVisible: PropTypes.bool
};

export default HeroOrbs;
