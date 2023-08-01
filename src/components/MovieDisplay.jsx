import { Title, Info, Image, Button } from "./Styled";
import { useState } from "react";

export default function MovieDisplay({ movie }) {

    const [showingMoreInfo, setShowingMoreInfo] = useState(false);

    const changeInfoVisibility = () => {
        setShowingMoreInfo(!showingMoreInfo);
    };

    const loaded = () => (
        <div>
            <>
                <Title>{movie.Title}</Title>
                <Image src={movie.Poster} alt={movie.Title} />
                <Info>Released: {movie.Released}</Info>
                <Info>Genre: {movie.Genre}</Info>
                <Info>Rated: {movie.Rated}</Info>
                <Info>Plot: {movie.Plot || "N/A"}</Info>

                <Button onClick={changeInfoVisibility}>{showingMoreInfo? "Less Info": "More Info"}</Button>
                {showingMoreInfo ?
                <>
                    <Info>Runtime: {movie.Runtime || "N/A"}</Info>
                    <Info>Actors: {movie.Actors || "N/A"}</Info>
                    <Info>Writer: {movie.Writer || "N/A"}</Info>
                    <Info>Director: {movie.Director || "N/A"}</Info>
                    <Info>BoxOffice: {movie.BoxOffice || "N/A"}</Info>
                    <Info>Awards: {movie.Awards || "N/A"}</Info>

                    <Info>Language: {movie.Language || "N/A"}</Info>
                    <Info>Country: {movie.Country || "N/A"}</Info>
                    <Info>Metascore: {movie.Metascore || "N/A"}</Info>
                    <Info>Metacritic Rating: {movie.Ratings[0].Value || "N/A"}</Info>
                    <Info>Internet Movie Database Rating: {movie.Ratings[0].Value || "N/A"}</Info>
                    <Info>Rotten Tomatoes Rating: {movie.Ratings[1].Value || "N/A"}</Info>
                    <Info>imdbRating: {movie.imdbRating || "N/A"} - imdbVotes: {movie.imdbVotes || "N/A"}</Info>
                </>
                :
                    null
                }
            </>
        </div>
    );

    const loading = () => (
        <h2>Type in a movie to get started...</h2>
    );

    return movie ? loaded() : loading();

};

