import imageRickMorty2 from "./img/rick-morty2.png";
import logoRickyMorty from "./img/logo.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  //generate state
  const [characters, setCharacters] = useState(null);
  const [apiUsers, setApiUsers] = useState([])

  let url = "https://rickandmortyapi.com/api/character?page=";
  const allCharacters = [];
  //api call
  const regApi = async () => {
    // iterate to modify url and dump data into array based on number of character pages (42)
    for (let i = 1; i <= 42; i++) {
      let res = await fetch(url + i);
      let characterApi = await res.json();

      //add all characters from single page into array
      characterApi.results.forEach((element) => {
        allCharacters.push(element);
      });
    }

    //set state with new array filled with all characters
    setCharacters(allCharacters);
    
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          <img
            src={logoRickyMorty}
            alt="Logo Rick & Morty"
            className="img-logo"
          ></img>
        </>

        {/* if characters is not null, otherwise show home*/}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imageRickMorty2}
              alt="Rick & Morty"
              className="img-home"
            ></img>
            <button onClick={regApi} className="btn-search">
              Browse Characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
