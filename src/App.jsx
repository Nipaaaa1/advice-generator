import dividerDesktop from "/images/pattern-divider-desktop.svg";
import dividerMobile from "/images/pattern-divider-mobile.svg";
import iconDice from "/images/icon-dice.svg";
const App = () => {
  return (
    <main className="bg-darkBlue font-monrope flex h-svh w-full items-center justify-center">
      <div className="bg-darkGrayishBlue relative flex h-auto w-3/4 flex-col items-center gap-4 rounded-xl p-6 md:w-1/4 md:gap-8">
        <h2 className="text-neonGreen tracking-advice text-xs md:text-sm">
          ADVICE #117
        </h2>
        <h1 className="text-lightCyan text-center text-xl font-bold md:text-2xl">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </h1>
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
        <div className="bg-neonGreen absolute -bottom-8 size-16 cursor-pointer rounded-full p-5">
          <img
            className="h-max w-20 cursor-pointer"
            src={iconDice}
            alt="Dice Icon"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
