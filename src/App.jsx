import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomDimesion } from "./helpers/random";
import ResidentList from "./components/ResidentList";
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [text, setText] = useState("");

  const handleInput = ({ target }) => {
    setText(target.value);
  };

    const persojaFiltrado = location?.residents?.filter(
      (personaje) =>
        personaje.location?.name
          .toLowerCase()
          .includes(text.toLocaleLowerCase())
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimesion()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
    return () => {
      console.log("Lil Dree 👨🏾‍💻");
    };
  }, []);

  return (
    <div className="App flex justify-center items-center flex-col">
      <div className="images__portal relative">
        <img src="./images/portal.gif" alt="" />
        <span className="absolute bottom-12 right-[-51px] -translate-x-3/4 flex gap items-center ">
          <img className="w-40" src="./images/text.png" alt="" />
        </span>
      </div>
      <form id="" onSubmit={handleSubmit} className="rounded-lg">
        <div className="container__botton gap-3 rounded-md">
          <input
            id='locationId'
            placeholder="Type the location id..."
            className="input__header"
            type="text"
            value={text}
            onChange={handleInput}
          />
          <button className="button__header">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </form>

      <section className="container__info text-center">
        <h2 className="text-center gap-5 p-2 m-3 text-[1.6rem] text-green-500 ">
          Welcome to the crazy universe!
        </h2>

        <h2 className="">Name: {location?.name}</h2>
        <ul className="flex justify-center flex-col py-2 gap-2 text-center">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}
          </li>
        </ul>
      </section>

      <ResidentList location={location} personaje={persojaFiltrado} />
    </div>
  );
}

export default App;
