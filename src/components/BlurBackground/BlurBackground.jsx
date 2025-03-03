import { motion } from "framer-motion";

const circleVariants = {
    animate1: {
        scale: [1, 1.2, 1],
        x: ["-50%", "-30%", "-50%"],
        y: ["-50%", "-40%", "-50%"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },

    animate2: {
        scale: [1, 1.1, 1],
        x: ["-50%", "-40%", "-50%"],
        y: ["-50%", "-60%", "-50%"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },

    animate3: {
        scale: [1, 1.3, 1],
        x: ["-50%", "-30%", "-50%"],
        y: ["-50%", "-40%", "-50%"],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },

    animate4: {
        scale: [1, 1.4, 1],
        x: ["-50%", "-60%", "-50%"],
        y: ["-50%", "-40%", "-50%"],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },

    animate5: {
        scale: [1, 1.5, 1],
        x: ["-50%", "-40%", "-50%"],
        y: ["-50%", "-60%", "-50%"],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },

    animate6: {
        scale: [1, 1.6, 1],
        x: ["-50%", "-30%", "-50%"],
        y: ["-50%", "-40%", "-50%"],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const BlurBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-70 mt-64">
            <motion.div
                className="bg-[#00F5D4] w-[320px] h-[200px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate1"
            ></motion.div>
            <motion.div
                className="bg-[#89CFF0] w-[330px] h-[210px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate2"
            ></motion.div>
            <motion.div
                className="bg-[#D8BFD8] w-[340px] h-[220px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate3"
            ></motion.div>
            <motion.div
                className="bg-[#FFC3A0] w-[350px] h-[230px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate4"
            ></motion.div>
            <motion.div
                className="bg-[#98FB98] w-[360px] h-[240px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate5"
            ></motion.div>
            <motion.div
                className="bg-[#FFFACD] w-[370px] h-[250px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={circleVariants}
                animate="animate6"
            ></motion.div>
        </div>
    );
};

export default BlurBackground;