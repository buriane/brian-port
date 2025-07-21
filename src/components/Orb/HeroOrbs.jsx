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
            {/* orb 1 */}
            <Orb
                color="#00F5D4"
                size={350}
                blur={80}
                opacity={0.3}
                duration={9}
                className="absolute -top-[5%] -left-[10%] md:left-[5%] hidden md:block"
                x={-20}
                y={40}
            />

            {/* orb 2 */}
            <Orb
                color="#89CFF0"
                size={280}
                blur={65}
                opacity={0.4}
                duration={7}
                delay={1}
                className="absolute top-[10%] md:top-auto md:bottom-[25%] left-[90%]"
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
