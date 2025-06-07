import React from "react";

function PlayerAccuracy() {
  return (
    <div className="bg-slate-800 border-slate-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Player Accuracy</h3>
      <div className="space-y-3 md:space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm md:text-base">White</span>
          <span className="text-lg md:text-xl font-bold">0%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm md:text-base">Black</span>
          <span className="text-lg md:text-xl font-bold">0%</span>
        </div>
      </div>
    </div>
  );
}

export default PlayerAccuracy;