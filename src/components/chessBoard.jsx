import React from "react";
import { Chessboard } from "react-chessboard";

function chessBoard() {
  return (
    <div className="flex justify-center items-center">
      <Chessboard
        position="start"
        boardWidth={window.innerWidth < 640 ? Math.min(window.innerWidth - 60, 320) : window.innerWidth < 1024 ? 350 : window.innerWidth * 0.4}
        areArrowsAllowed={true}
        arePiecesDraggable={true}
        showCoordinates={true}
        customArrowColor="yellow"
        customBoardStyle={{
          borderRadius: "8px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        }}
        customLightSquareStyle={{ backgroundColor: "#f1f5f9" }}
        customDarkSquareStyle={{ backgroundColor: "#475569" }}
      />
    </div>
  );
}

export default chessBoard;