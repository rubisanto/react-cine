import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  // utiliser un hook
  const [moviesData, setMoviesData] = useState([]);

  // useEffect permet de charger une fonction quand la page est chargée
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=35c7cdb021eb9ed9246e15e97fdc991b&query=avenger&language=fr-FR"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>→</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>←</span>
          </div>
        </div>
      </div>
      <div className="result">
        {/* afficher les datas */}
        {/* les afficher par 12  */}
        {moviesData.slice(0, 12).map((movie) => (
          // movie est une props des données
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Form;
