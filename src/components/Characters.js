import { useState } from "react";
import notFoundImage from "../img/not-found.png"

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const [filteredCharacters] = useState(characters)
  

 
  //console.log(characters);
  //setCharacters(uniqueCharacters.map(character => character))

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    
    const filtered = filteredCharacters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    

    setCharacters(filtered);
    
    
    
     
  };

  const resetCharacters = () => {
    setCharacters(null);
  };


  const abcCharacters = () => {
    let sortedCharacters = [...characters];
    sortedCharacters.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) { 
        return 1;
      }
      return 0;
    });
    setCharacters(sortedCharacters);
     
  }; 

  const sortByEpisode = () => {
    let sortedbyEpisodeCharacters = [...characters];
    sortedbyEpisodeCharacters.sort(function (a, b) {
      if (a.episode.length > b.episode.length) {
        return -1;
      }
      if (a.episode.length < b.episode.length) { 
        return 1;
      }
      return 0;
    });
    setCharacters(sortedbyEpisodeCharacters);
     
  }; 



  return (
    <div className="characters">
      <div className="btn-nav">
        <button className="btn-search" onClick={abcCharacters}>
        Sort Alphabetically
        </button>
        <button className="btn-search" onClick={sortByEpisode}>Sort by Appearances</button>
        <div className="btn-nav-right ml-auto">
          <input
            id="buscar"
            className="btn-search"
            type="text"
            placeholder="Find character..."
            
            onChange={handleFilter}
            
          ></input>


          <button className="btn-search " onClick={resetCharacters}>
            Home
          </button>
        </div>
      </div>

      {characters.length > 0 ? (
                  <> 
     {/* CONTAINER CARACTERS */}
      <div className="container-characters">
        
        
        {characters.map((character, index) => (
          
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodes: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Species: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-search" onClick={resetCharacters}>
        Home
      </button>
                  </>
                  ) : (
                    <>
                      <p className="black">
                      Oops! Character not found
                      </p>
                      <img
              src={notFoundImage}
              alt="Character not Found"
              className="img-not-found"
              ></img>
                    </>
                  )}


      
    </div>
  );
}
