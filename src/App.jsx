import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimesion } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.prevantDefault();

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
      <form id="" onSubmit={handleSubmit}>
        <div className="container__botton gap-3">
          <input
            id="locationId"
            placeholder="Type the location id..."
            className="input__header bg-transparent"
            // onFocus={handleSubmit}
            type="text"
          />
          <button className="button__header">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <h2 className="text-center gap-5 p-2 m-3 text-[1.4rem] text-green-500 ">
          Welcome to the crazy universe!
        </h2>
      </form>
      <ResidentList location={location} />
      {/* <Location location={location} /> */}
    </div>
  );
}

export default App;
