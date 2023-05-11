import axios from "axios";
import { useState } from 'react';
import './App.css';
function App() {
  const [joke, setJoke] = useState("")
  const jokess = async ()=>{
    const options = {
      method: 'GET',
      url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
      headers: {
        'X-RapidAPI-Key': 'f69a78740amsh259333f9a8e95e1p17f9cbjsn8d4fdbd71a43',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setJoke(response.data)
      console.log(response.data[0].joke);
    } catch (error) {
      console.error(error);
    }
  }
  const jokes=()=>{
    jokess();
  }
  return (
    <div className="wrapper">
      <span className='heading'>Jokes Generator</span>
      {joke && <p>{joke[0].joke}</p>}
      <button onClick={()=>{
        jokes()
      }} className='myButton'>Click me</button>
    </div>
  );
}

export default App;
