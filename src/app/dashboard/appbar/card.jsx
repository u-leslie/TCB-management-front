import React from "react";

function Card({ title, desc, col, ppl }) {
  return (
    <div className="w-80 p-5 h-32 text-start border-2 flex rounded-tl-3xl rounded-br-3xl">
      {console.log(col)}
      <div style={{ backgroundColor: col }} className={`w-1 h-16 mr-2`}></div>
      <div className="text">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        <h2>{desc}</h2>
        <h2 style={{ color: col }} className={`text-lg  font-bold text-center`}>
          {ppl} people
        </h2>
      </div>
    </div>
  );
}

export default Card;
