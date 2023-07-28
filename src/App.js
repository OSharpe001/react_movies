import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`

function App() {

  const [movie, setMovie] = useState(null);

  const API_KEY = "cb1c67c";
  // const API_KEY = process.env.API_KEY;
  // console.log("API_KEY: ", API_KEY);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`);
      const data = await response.json();
      // console.log(data);
      setMovie(data);

    } catch (error) {
      console.log(error);
    };

  };

  useEffect(() => {
    getMovie("Shrek");
  }, [])

  return (

    // <Container className="App">
    <Container >
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </Container>
  );
}

export default App;
