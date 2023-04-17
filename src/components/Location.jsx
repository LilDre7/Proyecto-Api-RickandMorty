import React from "react";

const Location = ({ dimension }) => {
  return (
    <section className="">
      <h3 className="text-center text-[1.5rem] pb-3">{dimension?.name}</h3>
      <ul className="card-morty p-3 bg-white/50 rounded-xl text-[1.1rem] ">
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold">Especies: </span>
          <span className="text-lg">
            {dimension?.species == "Human" ? (
              <span className="">
                <span className="font-bold">Human </span>
                <span className="text-green-500">
                  <ion-icon name="body-outline"></ion-icon>
                </span>{" "}
              </span>
            ) : dimension?.species == "Alien" ? (
              <span className="">
                <span className="font-bold">Alien </span>
                <ion-icon className="" name="rocket-outline"></ion-icon>{" "}
              </span>
            ) : dimension?.species == "Humanoid" ? (
              <span className="">
                <span className="font-bold">Humanoid </span>
                <ion-icon name="skull-outline"></ion-icon>{" "}
              </span>
            ) : (
              dimension?.species
            )}
          </span>
        </li>
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold ">Origin: </span>
          <span className="text-lg ">{dimension?.origin.name}</span>
        </li>
        <li className="pb-2">
          <span className="info__card text-[1.3rem] font-bold">
            Times appear:{" "}
          </span>
          <span className="text-lg">
            {dimension?.episode.length <= 1 ? (
              <span className="text-red-500 font-bold">Only 1</span>
            ) : (
              dimension?.episode.length
            )}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Location;
