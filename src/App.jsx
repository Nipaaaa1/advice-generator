import dividerDesktop from "/images/pattern-divider-desktop.svg";
import dividerMobile from "/images/pattern-divider-mobile.svg";
import iconDice from "/images/icon-dice.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const slideUp = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const App = () => {
  const [data, setData] = useState({
    slip: {
      id: "117",
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    },
  });

  const handleClick = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <motion.main className="bg-darkBlue font-monrope flex h-svh w-full items-center justify-center">
      <motion.div
        layout
        variants={slideUp}
        initial="initial"
        animate="animate"
        className="bg-darkGrayishBlue relative flex h-auto w-3/4 flex-col items-center gap-4 rounded-xl p-6 md:w-1/4 md:gap-8"
      >
        {data && (
          <>
            <motion.h2
              variants={slideUp}
              className="text-neonGreen tracking-advice text-xs md:text-sm"
            >
              ADVICE #{data.slip.id}
            </motion.h2>
            <motion.h1
              variants={slideUp}
              className="text-lightCyan text-center text-xl font-bold md:text-2xl"
            >
              {data.slip.advice}
            </motion.h1>
          </>
        )}
        <img
          className="mb-8 hidden h-max w-full md:block"
          src={dividerDesktop}
          alt="Divider Desktop"
        />
        <img
          className="mb-8 h-max w-full md:hidden"
          src={dividerMobile}
          alt="Divider Mobile"
        />
        <button
          onClick={handleClick}
          className="bg-neonGreen hover:shadow-neonGreen/50 hover:shadow-button absolute -bottom-8 size-16 rounded-full p-5 transition ease-in-out"
        >
          <img
            className="h-max w-20 cursor-pointer"
            src={iconDice}
            alt="Dice Icon"
          />
        </button>
      </motion.div>
    </motion.main>
  );
};

export default App;
