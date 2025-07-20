import { memo } from "react";
import PropTypes from 'prop-types';
import Orb from './Orb';

const OrbContainer = ({
    className = "",
    colors = ["#00F5D4", "#89CFF0", "#D8BFD8", "#FFC3A0", "#98FB98", "#FFFACD"],
    count = colors.length,
    minSize = 100,
    maxSize = 300,
    minBlur = 40,
    maxBlur = 80
}) => {
    // Generate orbs with random properties
    const generateOrbs = () => {
        const orbs = [];
        const safeColors = colors.length > 0 ? colors : ["#00F5D4", "#89CFF0", "#D8BFD8"];
        const safeCount = Math.min(count, 10); // Limit to 10 orbs for performance

        for (let i = 0; i < safeCount; i++) {
            orbs.push({
                id: `orb-${i}`,
                color: safeColors[i % safeColors.length],
                size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
                duration: Math.random() * 8 + 4, // Between 4-12 seconds
                delay: Math.random() * 2,
                blur: Math.floor(Math.random() * (maxBlur - minBlur) + minBlur),
                opacity: Math.random() * 0.3 + 0.1, // Between 0.1-0.4
                x: Math.random() * 200 - 100, // Between -100 and 100
                y: Math.random() * 200 - 100 // Between -100 and 100
            });
        }
        return orbs;
    };

    const orbs = generateOrbs();

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {orbs.map((orb) => (
                <Orb
                    key={orb.id}
                    color={orb.color}
                    size={orb.size}
                    duration={orb.duration}
                    delay={orb.delay}
                    blur={orb.blur}
                    opacity={orb.opacity}
                    x={orb.x}
                    y={orb.y}
                />
            ))}
        </div>
    );
};

OrbContainer.propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    count: PropTypes.number,
    minSize: PropTypes.number,
    maxSize: PropTypes.number,
    minBlur: PropTypes.number,
    maxBlur: PropTypes.number
};

// Use memo to prevent unnecessary re-renders
export default memo(OrbContainer);
