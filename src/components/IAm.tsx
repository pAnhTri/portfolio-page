import { useState } from "react";
import { ReactTyped } from "react-typed";

const IAm = () => {
  const [currentReference, setCurrentReference] = useState<string>(
    "Daniel Kim (UCI GES)"
  );
  const [showReference, setShowReference] = useState<boolean>(false);

  // Quotes and References
  const quotes = {
    "Daniel Kim (UCI GES)": "a great coworker.",
    "Peyman H. Rad, Esq. (Rad Law Group, APLC)":
      "a phenomenal paralegal, who is always on top of cases.",
    "Yama Nayl (Samsonite)": "one of the best sellers Samsonite ever had.",
    "Percy Yau (Girlfriend)": "the bestest boyfwiend ever :3",
  };

  const quoteStrings = Object.values(quotes);
  const quoteReferences = Object.keys(quotes);

  // Animation Delay Speed
  const delaySpeed = 2500;

  // Handle reference display timing
  const handleStringTyped = async (arrayPos: number) => {
    setShowReference(true);

    setTimeout(() => {
      setShowReference(false);
    }, delaySpeed);

    setCurrentReference(quoteReferences[arrayPos]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[8rem] bg-white drop-shadow-md p-2 rounded-lg border border-gray-200">
      {/* Header */}
      <h1 className="text-2xl font-bold">I am...</h1>

      {/* Typing Animation */}
      <ReactTyped
        loop
        backDelay={delaySpeed}
        typeSpeed={30}
        backSpeed={20}
        strings={quoteStrings}
        onStringTyped={handleStringTyped}
        className="text-lg text-blue-500 font-medium mt-2"
      />

      {/* Reference Display */}
      <div className="mt-2 text-sm">
        {showReference ? (
          <span className="animate-fade-in">- {currentReference}</span>
        ) : (
          <span className="invisible">- {currentReference}</span>
        )}
      </div>
    </div>
  );
};

export default IAm;
