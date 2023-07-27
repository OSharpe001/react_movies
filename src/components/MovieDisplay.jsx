import React from 'react';
// import { h2nk } from "react-router-dom";


function MovieDisplay({ movie }) {
    console.log(movie)
  return (
    <div>
        <>
            {movie ?
                <>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h2>Year: {movie.Year}</h2>
                    <h2>Rated: {movie.Rated}</h2>
                    <h2>Released: {movie.Released}</h2>
                    <h2>Runtime: {movie.Runtime}</h2>
                    <h2>Actors: {movie.Actors}</h2>
                    <h2>Awards: {movie.Awards}</h2>
                    <h2>BoxOffice: {movie.BoxOffice}</h2>
                    <h2>Country: {movie.Country}</h2>
                    <h2>DVD: {movie.DVD}</h2>
                    <h2>Director: {movie.Director}</h2>
                    <h2>Genre: {movie.Genre}</h2>
                    <h2>Language: {movie.Language}</h2>
                    <h2>Metascore: {movie.Metascore}</h2>
                    <h2>Plot: {movie.Plot}</h2>
                    <h2>Writer: {movie.Writer}</h2>
                    <h2>imdbRating: {movie.imdbRating}</h2>
                    <h2>imdbVotes: {movie.imdbVotes}</h2>
                    <h2>Internet Movie Database Rating: {movie.Ratings[0].Value}</h2>
                    <h2>Rotten Tomatoes Rating: {movie.Ratings[1].Value}</h2>
                    <h2>Metacritic Rating: {movie.Ratings[0].Value}</h2>
                </>
            :
                <h2>Type in a movie to get started...</h2>
            }
        </>
    </div>
  )
}

export default MovieDisplay
/* *
 Actors-
 Awards-
 BoxOffice-
 Country-
 DVD-
 Director-
 Genre-
 Language-
 Metascore-
 Plot-
 Poster //AS A h2NK-
 Ratings // A h2ST OF <OBJECTS>Ratings.source, Ratings.value</OBJECTS>
 Writer-
 imbRating-
 imbVotes
 * */