import React from "react";

function MovesFeedback() {
  const feedbackData = [
    { type: "Brilliant", white: 0, black: 0, color: "text-cyan-400", icon: "!!" },
    { type: "Critical", white: 0, black: 0, color: "text-blue-400", icon: "!" },
    { type: "Best", white: 7, black: 9, color: "text-green-400", icon: "★" },
    { type: "Excellent", white: 7, black: 11, color: "text-green-300", icon: "👍" },
    { type: "Okay", white: 5, black: 2, color: "text-gray-400", icon: "✓" },
    { type: "Inaccuracy", white: 1, black: 1, color: "text-yellow-400", icon: "?!" },
    { type: "Mistake", white: 4, black: 2, color: "text-orange-400", icon: "?" },
    { type: "Blunder", white: 0, black: 0, color: "text-red-400", icon: "??" },
    { type: "Theory", white: 4, black: 3, color: "text-amber-600", icon: "📖" }
  ];

  return (
    <div className="bg-slate-800 border-slate-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Moves Analysis</h3>
      <div className="space-y-1.5 md:space-y-2">
        <div className="grid grid-cols-4 gap-1 md:gap-2 text-xs md:text-sm font-semibold mb-2">
          <span></span>
          <span className="text-center">White</span>
          <span className="text-center"></span>
          <span className="text-center">Black</span>
        </div>
        {feedbackData.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-1 md:gap-2 items-center text-xs md:text-sm">
            <span className={`${item.color} font-medium truncate`}>{item.type}</span>
            <span className="text-center">{item.white}</span>
            <div className="flex justify-center">
              <span className={`${item.color} text-sm md:text-lg font-bold`}>{item.icon}</span>
            </div>
            <span className="text-center">{item.black}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovesFeedback;