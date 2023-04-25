import Natbar from "./components/natbar";
import {useEffect, useState} from "react";
import Personajes from "./components/personajes";

function App() {
  const [characters, setCharacters] = useState([]);

  const url="https://rickandmortyapi.com/api/character";

  const consumirApi = (url) =>{
  fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    consumirApi(url);
  },[])

  return (
    <>
      <Natbar
        brand="RICK AND MORTY"
      />
      <div className="container mt-5">
        <Personajes
        characters= {characters}
        />
      </div>
    </>
  );
}

export default App;