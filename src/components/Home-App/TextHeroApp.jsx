import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroTextApp() {
  const title = "WELCOME TO ";
  const titleTwo = "RPLGRAM";
  const titleThree = "SMKN 1 PURWOSARI";
  const subText = "Hi, We are a software engineer! - a web explorer.  ";
  const subtexttwo =
    "Let's bring your ideas to life, that marry style and functionality.  ";



  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();
  const controlsFour = useAnimation();

  useEffect(() => {
    controlsOne.start("animate");
    controlsTwo.start("animate");
    controlsThree.start("animate");
    controlsFour.start("animate");
  }, [controlsOne, controlsTwo, controlsThree, controlsFour]);

  const containerVariants = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };
  const spaceVariant = {
    hidden: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };
  const titleThreeWordVariants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        staggerChildren: 0.04,
      },
    },
  };

  const titleThreeLetterVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const titleTwoElements = titleTwo.split("").map((char, charIndex) => {
    if (char === " ") {
      return (
        <motion.span
          key={charIndex}
          variants={letterVariants}
          style={{ display: "inline-block", width: "1.1ch" }}
        >
          {" "}
        </motion.span>
      );
    }
    return (
      <motion.span
        key={charIndex}
        variants={letterVariants}
        style={{ display: "inline-block", width: "1.1ch" }}
      >
        {char}
      </motion.span>
    );
  });

  return (
    <div>
      <div className="relative font-poppins justify-center mb-[2rem]">
        <motion.div
          className="text-2xl font-bold text-[#B2B2B2] relative z-10 sm:text-2xl mt-5 md:mt-0 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate={controlsOne}
        >
          {title.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={wordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span key={letterIndex} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))} {}
              {wordIndex !== titleThree.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-5xl font-bold text-[#000000] relative z-10 sm:text-6xl  md:mt-0 mb-4  "
          variants={containerVariants}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleTwoElements}
          
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {titleThree.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={titleThreeWordVariants}
              style={{ display: "inline-block" }}
              className="text-2xl font-bold text-[#B2B2B2] relative z-10 sm:text-2xl md:mt-0 mb-4"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={titleThreeLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== titleThree.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-xl font-semibold text-[#6e6e6e] relative z-10 sm:text-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {subText.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={titleThreeWordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={titleThreeLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== subText.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
        className="text-xl font-normal text-[#9f9e9e] relative z-10 sm:text-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={controlsThree}
        >
          {subtexttwo.split(" ").map((word, wordIndex) => (
            <motion.div
              key={wordIndex}
              variants={titleThreeWordVariants}
              style={{ display: "inline-block" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={titleThreeLetterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {}
              {wordIndex !== subtexttwo.split(" ").length - 1 && (
                <motion.span
                  key={`space-${wordIndex}`}
                  variants={spaceVariant}
                  style={{ display: "inline-block", width: "0.5ch" }}
                >
                  &nbsp;
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
