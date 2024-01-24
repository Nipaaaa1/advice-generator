import dividerDesktop from "/images/pattern-divider-desktop.svg";
import iconDice from "/images/icon-dice.svg";
const App = () => {
  return (
    <main className="bg-darkBlue font-monrope flex h-svh w-full items-center justify-center">
      <div className="bg-darkGrayishBlue relative flex h-auto w-1/4 flex-col items-center gap-8 rounded-xl p-10">
        <h2 className="text-neonGreen tracking-advice text-sm">ADVICE #117</h2>
        <h1 className="text-lightCyan text-2xl">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </h1>
        <img
          className="mb-8 h-max w-full"
          src={dividerDesktop}
          alt="Divider Desktop"
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
