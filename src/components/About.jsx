import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";
import BlurBackground from "./BlurBackground/BlurBackground";

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

  const asalFloatingVariants = {
    float: {
      y: [0, getRandomFloat(-12, -6), 0],
      transition: {
        duration: getRandomFloat(2.5, 4),
        repeat: Infinity,
        ease: "easeInOut",
        delay: getRandomFloat(0, 1),
      },
    },
  };

  const studiFloatingVariants = {
    float: {
      y: [0, getRandomFloat(-15, -8), 0],
      transition: {
        duration: getRandomFloat(3, 4.5),
        repeat: Infinity,
        ease: "easeInOut",
        delay: getRandomFloat(0, 1.5),
      },
    },
  };

  return (
    <section className="relative px-6 py-20 overflow-hidden" id="about">
      <BlurBackground className="absolute -z-10" />

      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-medium tracking-light mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          About Me
        </motion.h1>
        <motion.div
          className="h-1 mb-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={lineVariants}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Div Asal */}
          <div>
            <motion.p
              className="text-md md:text-xl lg:text-2xl mb-10 leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              {ABOUT_CONTENT.texts[0]}
            </motion.p>
            <motion.div
              className="relative rounded-lg p-6 backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ ...skillVariants, ...asalFloatingVariants }}
              animate="float"
            >
              <div className="flex items-center">
                <img
                  src={ABOUT_CONTENT.imageindonesia}
                  alt="Indonesia"
                  className="w-12 h-12 mr-4"
                  loading="lazy"
                />
                <div>
                  <h2 className="text-lg font-semibold">{ABOUT_CONTENT.from[0]}</h2>
                  <p className="text-sm font-light">{ABOUT_CONTENT.from[1]}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Div Studi */}
          <div>
            <motion.p
              className="text-md md:text-xl lg:text-2xl mb-10 leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              {ABOUT_CONTENT.texts[1]}
            </motion.p>
            <motion.div
              className="relative rounded-lg p-6 backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ ...skillVariants, ...studiFloatingVariants }}
              animate="float"
            >
              <div className="flex items-center">
                <img
                  src={ABOUT_CONTENT.imageunsoed}
                  alt="Jenderal Soedirman University"
                  className="w-12 h-12 mr-4"
                  loading="lazy"
                />
                <div>
                  <h2 className="text-lg font-semibold">{ABOUT_CONTENT.college[0]}</h2>
                  <p className="text-sm font-light">{ABOUT_CONTENT.college[1]}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Paragraph */}
        <div className="mx-auto">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-md md:text-xl lg:text-2xl mb-10 leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {ABOUT_CONTENT.skills.map((skill, index) => {
            const floatingVariants = {
              float: {
                y: [0, getRandomFloat(-20, -10), 0],
                transition: {
                  duration: getRandomFloat(3, 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: getRandomFloat(0, 1.5),
                },
              },
            };

            return (
              <motion.div
                key={index}
                className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{ ...skillVariants, ...floatingVariants }}
                animate="float"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{skill.name}</h2>
                    <p className="text-sm font-light">{skill.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;