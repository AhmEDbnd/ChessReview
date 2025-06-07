import React from "react";

function Analyser() {
  return (
    <div className="flex flex-col justify-center items-center  bg-slate-800 border-slate-700 text-white gap-10 p-6 rounded-lg shadow-lg">
      <h2>Game Review</h2>
      <input
        name="PGN"
        placeholder="Enter PGN to Analyse"
        className="h-[200px] w-[450px] border border-white rounded-md p-2"
        type="text"
      ></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Analyse
      </button>
    </div>
  );
}
export default Analyser;
