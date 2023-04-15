import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const residents = location?.residents;
  console.log(residents);

  const cantidad = 20;

  const arrayPages = [];

  const quantityPages = Math.ceil(location?.residents.length / cantidad);

  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i);
  }

  const startCut = currentPage * cantidad - cantidad;
  const endtCut = currentPage * cantidad;


  useEffect(() => {
    setcurrentPage(1);
  }, [location]);

  // slice(startCut, endtCut)

  return (
    <>
      <section className="section__residentList">
        {residents?.map((resident) => (
          <h1 key={resident}>
            <ResidentCard key={resident} resident={resident} />
          </h1>
        ))}
      </section>
      <ul className="flex gap-4 justify-center py-4 ">
        {arrayPages.map((pages) => (
          <li
            key={residents}
            onClick={() => setcurrentPage(pages)}
            className={`p-4 ${
              pages === currentPage &&
              "bg-white text-black rounded-t-full text-[1.4rem] "
            } `}
          >
            {pages}
          </li>
        ))}
      </ul>
    </>
  );
};

// clase para la section principal -> grid auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px]

export default ResidentList;
