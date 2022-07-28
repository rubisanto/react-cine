import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  // récupérer les données pour faire coincider avec le local storage
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // voir si il y a dans le local storage
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    // boucle pour les recherches dans l'API
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=35c7cdb021eb9ed9246e15e97fdc991b&language=fr-FR`
        )
        // spread operator pour casser le tableau en cours et rajouter l'élément
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>💘</span>
      </h2>
      <div className="result">
        {/* Si des films sont en coups de coeurs les afficher en card sinon h2 */}
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coups de coeur pour le moment </h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
