import Natbar from "./components/natbar";
import { useEffect, useState } from "react";
import Personajes from "./components/personajes";
import Pagination from "./components/pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const consumirApi = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const anteriorP = () => {
    consumirApi(info.prev);
  };

  const siguienteP = () => {
    consumirApi(info.next);
  };

  useEffect(() => {
    consumirApi(url);
  }, [])

  return (
    <>
      <Natbar
        brand="RICK AND MORTY"
      />
      <div className="container mt-5">
        <Personajes
          characters={characters}
        />
        <Pagination
          prev={info.prev}
          next={info.next}
          anteriorP={anteriorP}
          siguienteP={siguienteP}
        />
      </div>
    </>
  );
}

export default App;