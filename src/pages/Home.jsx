import React from "react";
import ChessBoard from "../components/chessBoard";
import Analyser from "../components/Analyser";
import GameInfo from "../components/GameInfo";
import PlayerAccuracy from "../components/PlayerAccuracy";
import MovesFeedback from "../components/MovesFeedback";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-6">
      <div className="h-[250px] sm:h-[260px] mb-4 md:mb-6">
        <Analyser />
      </div>

      {/* Bottom section - Chess board and info cards */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between">
        {/* Chess board wrapper - 49% of screen */}
        <div className="w-full lg:w-[49%] flex justify-center items-start">
          <div className="bg-slate-800 border-slate-700 p-3 md:p-4 rounded-lg shadow-lg w-full lg:w-[96%] flex flex-col items-center space-y-3 md:space-y-4">
            <ChessBoard />
            {/* Navigation arrows */}
            <div className="flex justify-center gap-4">
              <button className="bg-slate-900 hover:bg-slate-700 text-white p-2 rounded">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-slate-900 hover:bg-slate-700 text-white p-2 rounded">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats wrapper - 49% of screen */}
        <div className="w-full lg:w-[49%] flex justify-center items-start">
          <div className="w-full lg:w-[96%] space-y-3 md:space-y-4">
            <GameInfo />
            <PlayerAccuracy />
            <MovesFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
