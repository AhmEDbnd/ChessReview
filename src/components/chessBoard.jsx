import React from "react";
import { Chessboard } from "react-chessboard";

function chessBoard() {
  return (
    <div className="flex justify-center items-center">
      <Chessboard
        position="start"
        boardWidth={450}
        areArrowsAllowed={true}
        arePiecesDraggable={true}
        showCoordinates={true}
        customArrowColor="yellow"
        customSquareColor="blue"
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
