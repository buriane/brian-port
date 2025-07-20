import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Orb = ({
    color = "#00F5D4",
    size = 200,
    duration = 7,
    delay = 0,
    blur = 60,
    opacity = 0.4,
    className = "",
    x = 0,
    y = 0
}) => {
    const orbVariants = {
        animate: {
            x: [x, x + 20, x - 30, x + 10, x],
            y: [y, y - 30, y + 20, y - 10, y],
            scale: [1, 1.1, 0.9, 1.05, 1],
            opacity: [opacity, opacity + 0.1, opacity - 0.1, opacity + 0.05, opacity],
            transition: {
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay
            }
        }
    };

    return (
        <motion.div
            className={`absolute rounded-full pointer-events-none ${className}`}
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                filter: `blur(${blur}px)`,
                opacity: opacity,
                zIndex: -1,
                boxShadow: `0 0 ${size / 3}px ${size / 10}px ${color}25`
            }}
            variants={orbVariants}
            animate="animate"
        />
    );
};

Orb.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    blur: PropTypes.number,
    opacity: PropTypes.number,
    className: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
};

export default Orb;
