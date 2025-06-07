import React from "react";
import ChessBoard from "../components/chessBoard";
import Analyser from "../components/Analyser";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900 text-white place-content-between gap-20">
      <div className="bg-[#020817] border-slate-700 p-6 rounded-lg shadow-lg">
      <ChessBoard />
      </div>
      <Analyser />
    </div>
  );
}
export default Home;
