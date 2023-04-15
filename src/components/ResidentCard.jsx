import axios from "axios";
import React, { useEffect, useState } from "react";
import "./customCard.css";
import Location from "./Location";


  const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
  }

const ResidentCard = ({ resident }) => {
  const [dimension, setDimension] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setDimension(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <section className="section__card bg-transparent my-8 shadow-xl shadow-zinc-50 rounded-[1rem] m-8 ">
      <div className="flex justify-center py-4 relative">
        <img className="rounded-full w-[70%] shadow-2xl shadow-slate-300" src={dimension?.image} alt="" />
        <div className="absolute bottom-12 right-[3rem] -translate-x-3/4 flex gap-4 items-center rounded-sm text-white">
          <div  className={`w-3 h-3 ${residentsStatus[dimension?.status]} rounded-full`}></div>
          <span>
            {dimension?.status}
          </span>
        </div>
      </div>
      <Location dimension={dimension} />
    </section>
  );
};

export default ResidentCard;
