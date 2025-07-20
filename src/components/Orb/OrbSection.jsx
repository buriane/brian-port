import PropTypes from 'prop-types';
import OrbContainer from "./OrbContainer";

const OrbSection = ({
    className = "",
    colors = ["#00F5D4", "#89CFF0", "#D8BFD8", "#FFC3A0", "#98FB98", "#FFFACD"],
    position = "center", // "top", "bottom", "left", "right", "center"
    intensity = "medium", // "low", "medium", "high"
    size = "medium", // "small", "medium", "large"
    children = null
}) => {
    // Configuration based on intensity
    const getOpacitySettings = () => {
        switch (intensity) {
            case "low":
                return { minOpacity: 0.05, maxOpacity: 0.15 };
            case "high":
                return { minOpacity: 0.2, maxOpacity: 0.5 };
            case "medium":
            default:
                return { minOpacity: 0.1, maxOpacity: 0.3 };
        }
    };

    // Configuration based on size
    const getSizeSettings = () => {
        switch (size) {
            case "small":
                return { minSize: 80, maxSize: 150, count: 3 };
            case "large":
                return { minSize: 250, maxSize: 450, count: 6 };
            case "medium":
            default:
                return { minSize: 150, maxSize: 300, count: 4 };
        }
    };

    // Configuration based on position
    const getPositionClass = () => {
        switch (position) {
            case "top":
                return "top-0 left-0 right-0 h-[50vh]";
            case "bottom":
                return "bottom-0 left-0 right-0 h-[50vh]";
            case "left":
                return "top-0 bottom-0 left-0 w-[50vw]";
            case "right":
                return "top-0 bottom-0 right-0 w-[50vw]";
            case "center":
            default:
                return "inset-0";
        }
    };

    const { minOpacity, maxOpacity } = getOpacitySettings();
    const { minSize, maxSize, count } = getSizeSettings();
    const positionClass = getPositionClass();

    return (
        <div className={`absolute ${positionClass} overflow-hidden pointer-events-none ${className}`}>
            <OrbContainer
                colors={colors}
                count={count}
                minSize={minSize}
                maxSize={maxSize}
                minBlur={minSize * 0.3}
                maxBlur={maxSize * 0.3}
                minOpacity={minOpacity}
                maxOpacity={maxOpacity}
            />
            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    );
};

OrbSection.propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    position: PropTypes.oneOf(["top", "bottom", "left", "right", "center"]),
    intensity: PropTypes.oneOf(["low", "medium", "high"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    children: PropTypes.node
};

export default OrbSection;
