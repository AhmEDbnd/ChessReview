import React from "react";

function Analyser() {
  return (
    <div className="bg-slate-800 border-slate-700 text-white p-4 md:p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Game Review</h2>
      <div className="flex flex-col gap-3 md:gap-4 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)]">
        <textarea
          name="PGN"
          placeholder="Enter PGN to Analyse"
          className="flex-1 bg-slate-700 border border-slate-600 rounded-md p-2 md:p-3 text-sm md:text-base text-white placeholder-gray-400 resize-none min-h-[80px]"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:px-6 rounded-md transition-colors text-sm md:text-base">
          Analyse
        </button>
      </div>
    </div>
  );
}

export default Analyser;