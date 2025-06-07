import React from "react";

function GameInfo() {
  return (
    <div className="bg-slate-800 border-slate-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Game Information</h3>
      <div className="space-y-1.5 md:space-y-2 text-sm md:text-base">
        <div className="flex justify-between">
          <span className="text-gray-300">White:</span>
          <span className="truncate ml-2">Player 1 (?)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Black:</span>
          <span className="truncate ml-2">Player 2 (?)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Event:</span>
          <span className="truncate ml-2">Unknown</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Date:</span>
          <span className="truncate ml-2">Unknown</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Result:</span>
          <span className="truncate ml-2">1-0</span>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;