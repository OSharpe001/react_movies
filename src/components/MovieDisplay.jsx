import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 3em;
`

function MovieDisplay({ movie }) {

    // console.log(movie);

  return (
    <div>
        <>
            {movie ?
                <>
                    {/* <h1>{movie.Title}</h1> */}
                    <Title>{movie.Title}</Title>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>Released: {movie.Released}</h3>
                    <h3>Genre: {movie.Genre}</h3>
                    <h3>Rated: {movie.Rated}</h3>
                    <h3>Genre: {movie.Genre}</h3>
                    <h3>Runtime: {movie.Runtime}</h3>
                    <h3>Actors: {movie.Actors}</h3>
                    <h3>Plot: {movie.Plot}</h3>
                    <h3>Writer: {movie.Writer}</h3>
                    <h3>Director: {movie.Director}</h3>
                    <h3>BoxOffice: {movie.BoxOffice}</h3>
                    <h3>Awards: {movie.Awards}</h3>
                    
                    
                    
                    <h3>Director: {movie.Director}</h3>
                    <h3>Country: {movie.Country}</h3>
                    <h3>Language: {movie.Language}</h3>

                    <h3>Metascore: {movie.Metascore}</h3>
                    <h3>Metacritic Rating: {movie.Ratings[0].Value}</h3>
                    <h3>Internet Movie Database Rating: {movie.Ratings[0].Value}</h3>
                    <h3>Rotten Tomatoes Rating: {movie.Ratings[1].Value}</h3>
                    <h3>imdbRating: {movie.imdbRating} - imdbVotes: {movie.imdbVotes}</h3>
                    {/* <h3>imdbVotes: {movie.imdbVotes}</h3> */}
                </>
            :
                <h2>Type in a movie to get started...</h2>
            }
        </>
    </div>
  )
}

export default MovieDisplay
