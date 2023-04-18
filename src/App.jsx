import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomDimesion } from "./helpers/random";
import ResidentList from "./components/ResidentList";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState();
  const [isLoading, setLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [text, setText] = useState("");
  const [chanchitofeliz, setchanchitofeliz] = useState();

  // Parte del buscador de personajes
  const handleSearch = (e) => {
    e.preventDefault();
    setPersons(e.target.value);
    const newLocation = e.target.value;

    const URL = `https://rickandmortyapi.com/api/location/?name=${newLocation}`;

    axios
      .get(URL)
      .then((res) => setchanchitofeliz(res.data))
      .catch((err) => console.log(err));
  };

  const showChanchitoFeliz = (url) => {
    const URL = url;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
    setPersons("");
  };
  // Parte del buscador de personajes

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;
    setLoading(true);

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => setLocation(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimesion()}`;
    setLoading(true);

    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => setLocation(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 5000);
  }, []);

  return (
    <div className="App flex justify-center items-center flex-col">
      {isLoading && !location ? (
        <Loader />
      ) : (
        <>
          <div className="images__portal relative">
            <img src="./images/portal.gif" alt="" />
            <span className="absolute bottom-12 right-[-51px] -translate-x-3/4 flex gap items-center ">
              <img className="w-40" src="./images/text.png" alt="" />
            </span>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg">
            <div className="container__botton gap-3 rounded-md">
              <input
                id="locationId"
                placeholder="Type the location id..."
                className="input__header"
                type="text"
                value={persons}
                onChange={handleSearch}
              />
            <button className="button__header">
              <ion-icon name="search-outline"></ion-icon>
            </button>
            </div>
          </form>

          {persons && (
            <div className="relative p-2 cursor-pointer " > 
            <ul className="lista__chanchitoFeliz bg-black/90" >
              {chanchitofeliz?.results.map((endpoint) => (
                <li
                  key={endpoint?.id}
                  onClick={() => showChanchitoFeliz(endpoint?.url)}
                  className="text-white text-center hover:text-green-500"
                >
                  {endpoint?.name}
                </li>
              ))}
            </ul>
            </div>
          )}

          <section className="container__info text-center">
            <h2 className="text-center gap-5 p-2 m-3 text-[1.6rem] text-green-500 ">
              Welcome to the crazy universe!
            </h2>

            <h2 className="">Name: {location?.name}</h2>
            <ul className="flex justify-center flex-col py-2 gap-2 text-center">
              <li>Type: {location?.type}</li>
              <li>Dimension: {location?.dimension}</li>
              <li>Population: {location?.residents.length}</li>
            </ul>
          </section>

          <ResidentList location={location} />
        </>
      )}
    </div>
  );
}

export default App;
