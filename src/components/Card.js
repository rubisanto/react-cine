import React from "react";

const Card = ({ movie }) => {
  // fonction pour format date
  const dateFormater = (date) => {
    // partout ou il y a un tiret = nouvel élément du tableau
    let [yy, mm, dd] = date.split("-");

    // format qui sera affiché
    return [dd, mm, yy].join("/");
  };

  //   pour trouver le genre il faut faire correspondre la liste des genre avec genre_id, donc boucler et remplir le tableau
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    // retourner le tableau mappé
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className="card">
      {/* pour l'image prendre le début de l'url et le path en boucle pour chaque image */}
      {/* ternaire pour mettre une image par défaut si pas fournit dans l'api */}
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt="affiche-film"
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      {/* afficher la note */}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      {/* afficher les genres */}
      <ul>{genreFinder()}</ul>
      {/* afficher le synopsis */}
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {/* afficher le bouton coup de coeur */}
      <div className="btn">Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
