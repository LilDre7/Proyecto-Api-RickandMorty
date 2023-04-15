import React from "react";

const Location = ({ dimension }) => {
  return (
    <section>
      <h3 className="text-center text-[1.5rem] pb-3">{dimension?.name}</h3>
      <ul className="p-3 bg-white/50 rounded-xl text-[1.1rem] ">
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold">Especies: </span>
          <span className="text-lg" >{dimension?.species}</span>
        </li>
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold ">Origin: </span>
          <span className="text-lg ">{dimension?.origin.name}</span>
        </li>
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold">
            Times appear:{" "}
          </span>
          <span className="text-lg" >{dimension?.episode.length}</span>
        </li>
      </ul>
    </section>
  );
};

export default Location;
