import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { Container } from './components/Styled';

export default function App() {

  const [movie, setMovie] = useState(null);

  const API_KEY = "cb1c67c";

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);

    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getMovie("Shrek");
  }, []);

  return (
    <Container >
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </Container>
  );
};
