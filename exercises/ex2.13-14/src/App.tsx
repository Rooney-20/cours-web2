import { useState, useEffect } from 'react'
import './App.css'

interface JokeProps {
  joke : string,
  category : string
};

function App() {
  const[joke, setJoke] = useState<JokeProps | undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single")
    .then((response) => {
      if(!response.ok)
        throw new Error(
        `fetch error : ${response.status} : ${response.statusText} `
        );
      return response.json();
    })
    .then((data) => {
      setJoke({
        joke: data.joke ?? "No joke found",
        category: data.category ?? "Unknown",
      });
    });
  },[])

  return (
    <div>
      <h1>Random Joke</h1>
      <h3>Category : {joke?.category} </h3>
      <p>The Joke is : {joke?.joke} </p>
    </div>
  )
}

export default App
