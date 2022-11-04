import React, {useState, useEffect} from "react";

const API_URL = 'https://api.chucknorris.io/jokes/random';

function App() {
    const [joke, setJoke] = useState('');

    const generateJoke = () => {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value))
    }
    
    useEffect(() => {
      generateJoke();
    }, [])

  return (
    <div className="box">
      <h1>Chuck Norris Jokes Generator</h1>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get new joke!</button>
    </div>
  );
}

export default App;
