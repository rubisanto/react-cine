import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  // utiliser un hook
  const [moviesData, setMoviesData] = useState([]);

  const [search, setSearch] = useState("code");
  // hook pour tri des films
  const [sortGoodBad, setSortGoodBad] = useState(null);

  // useEffect permet de charger une fonction quand la page est chargée
  useEffect(
    () => {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=35c7cdb021eb9ed9246e15e97fdc991b&query=${search}&language=fr-FR`
        )
        .then((res) => setMoviesData(res.data.results));
    },
    // callback, les components se rechargent quand le search change
    [search]
  );

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            // changement dans la barre de recherche
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => {
              setSortGoodBad("goodToBad");
            }}
          >
            Top<span>→</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => {
              setSortGoodBad("badToGood");
            }}
          >
            Flop<span>←</span>
          </div>
        </div>
      </div>
      <div className="result">
        {/* afficher les datas */}
        {/* les afficher par 12  */}
        {moviesData
          .slice(0, 12)
          // pour trier les films
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              // trier par les notes de facon decroissante
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              // trier par les notes de facon croissante
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            // movie est une props des données
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
