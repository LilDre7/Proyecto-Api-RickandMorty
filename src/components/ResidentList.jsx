import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const residents = location?.residents;

  const cantidad = 8;

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

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < quantityPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="">
      <section className="section__residentList ">
        {residents?.slice(startCut, endtCut).map((resident) => (
          <h1 key={resident}>
            <ResidentCard key={resident} resident={resident} />
          </h1>
        ))}
      </section>
      <ul className="lista__header_padre flex flex-wrap gap-4 justify-center py-4 max-w-[200px]: ">
        {arrayPages.slice(0, 5).map((pages) => (
          <li
            key={residents.pupolation}
            onClick={() => setcurrentPage(pages)}
            className={`list__header  ${
              pages === currentPage && "pages_custom"
            } `}
          >
            {pages}
          </li>
        ))}
      </ul>
      <div className="hidden sm_header sm:flex sm:justify-center sm:items-center">
        <ul className="lista__header_padre flex flex-wrap gap-4 justify-center py-4">
          {arrayPages.slice(0, -1).map((pages) => (
            <li
              key={residents}
              onClick={() => setcurrentPage(pages)}
              className={` ${
                pages === currentPage &&
                "pages_custom hover:bg-gray-200 border-red-200"
              } `}
            >
              {pages}
            </li>
          ))}
        </ul>
      </div>
      <section className="pagination flex justify-center items-center pb-3 gap-5">
        <button className="hover:text-green-600 flex justify-center items-center gap-3" onClick={handlePrevPage}>
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <span>Anterior</span>
        </button>
        <button className="hover:text-green-600 flex justify-center items-center gap-3" onClick={handleNextPage}>
          <span>Siguiente</span>
          <ion-icon className=""  name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </section>
    </section>
  );
};
export default ResidentList;
